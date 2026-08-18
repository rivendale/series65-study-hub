import type { Progress, MockAttempt } from './progressStore';

/**
 * Merging progress from two devices.
 *
 * Every record this app stores carries its own timestamp, so two devices can
 * be reconciled item by item rather than picking a winning blob. Answer a few
 * questions on a phone at lunch and sit a mock on a laptop that evening, and
 * both survive the merge.
 *
 * On study data — answers, topics read and mock attempts — the merge is
 * deterministic, commutative and idempotent:
 *
 *   merge(a, b).answers          equals  merge(b, a).answers
 *   merge(a, a)                  equals  a
 *   merge(merge(a, b), b)        equals  merge(a, b)
 *
 * That matters because devices sync in whatever order they happen to come
 * online, and a merge that depended on order would silently drift.
 *
 * Preferences are the deliberate exception and are NOT commutative: the local
 * device always keeps its own theme and font size, so pulling from another
 * device never changes how this one looks. See mergePreferences.
 *
 * Known limitation: conflicts resolve on timestamps taken from each device's
 * own clock. A device running hours fast will win every collision on the same
 * question, and one running slow will lose them. Nothing is deleted either way
 * — every answered question survives, and only the recorded outcome of a
 * question answered on both devices can be the stale one. Correcting for skew
 * would need a server-assigned clock, which is precisely the dependency this
 * design avoids, so the tradeoff is deliberate rather than overlooked.
 */

/**
 * The per-device append cap is 50, but merging must not reuse that number.
 * Two devices sitting at 50 attempts each merge to 100, and trimming back to 50
 * would drop the older half — then push that truncated history back out, losing
 * it on every device at once. The merge ceiling is therefore well above what a
 * candidate can realistically produce, so it only ever bounds pathological
 * growth rather than routinely discarding real attempts.
 *
 * An attempt carries roughly 4 KB of per-question detail, so this ceiling is
 * on the order of 800 KB in the worst case — comfortably inside a localStorage
 * budget that is typically 5 MB.
 */
const MAX_MOCK_ATTEMPTS = 200;

/** Stable tie-break for records that share a timestamp, so merge stays commutative. */
function pickDeterministic<T>(a: T, b: T): T {
  return JSON.stringify(a) <= JSON.stringify(b) ? a : b;
}

function mergeAnswers(
  a: Progress['answers'],
  b: Progress['answers']
): Progress['answers'] {
  const out: Progress['answers'] = { ...a };
  for (const key of Object.keys(b)) {
    const id = Number(key);
    const mine = out[id];
    const theirs = b[id];
    if (!mine) {
      out[id] = theirs;
    } else if (theirs.ts > mine.ts) {
      out[id] = theirs;
    } else if (theirs.ts === mine.ts) {
      out[id] = pickDeterministic(mine, theirs);
    }
  }
  return out;
}

function mergeTopicsRead(
  a: Progress['topicsRead'],
  b: Progress['topicsRead']
): Progress['topicsRead'] {
  const out: Progress['topicsRead'] = { ...a };
  for (const id of Object.keys(b)) {
    // Earliest read date is the more truthful one: it is when the topic was
    // first finished, and re-reading should not reset that.
    out[id] = out[id] === undefined ? b[id] : Math.min(out[id], b[id]);
  }
  return out;
}

/**
 * A mock attempt is identified by when it finished plus its shape. Two attempts
 * cannot legitimately share all of those, and using them as the key means a
 * repeated sync of the same attempt does not duplicate it.
 */
function attemptKey(m: MockAttempt): string {
  // JSON.stringify per field keeps the key type-preserving: a malformed
  // timeUsed of [] and one of "" must not share an identity, or two distinct
  // attempts dedupe into one. Found by review in the sibling repo.
  return [m.ts, m.total, m.correct, m.timeUsed].map((v) => JSON.stringify(v)).join(':');
}

/**
 * Field comparator that stays a strict weak order for ANY JSON value: records
 * are accepted from localStorage and (eventually) a sync endpoint, and raw
 * subtraction on a malformed field yields NaN — an INCONSISTENT comparator,
 * under which the engine's sort produces arbitrary, cross-tab-different
 * orders, re-opening the write oscillation the identity tiebreak closes.
 */
function cmpField(a: unknown, b: unknown): number {
  const na = Number(a);
  const nb = Number(b);
  const fa = Number.isFinite(na);
  const fb = Number.isFinite(nb);
  if (fa && fb) return nb - na;
  if (fa) return -1;
  if (fb) return 1;
  const sa = JSON.stringify(a) ?? 'null';
  const sb = JSON.stringify(b) ?? 'null';
  return sa < sb ? -1 : sa > sb ? 1 : 0;
}

function mergeMockAttempts(a: MockAttempt[], b: MockAttempt[]): MockAttempt[] {
  const byKey = new Map<string, MockAttempt>();
  for (const m of [...a, ...b]) {
    const k = attemptKey(m);
    const existing = byKey.get(k);
    // Prefer whichever record carries more answer detail; fall back to a stable
    // choice so the result does not depend on argument order.
    if (!existing) byKey.set(k, m);
    else if ((m.answers?.length ?? 0) > (existing.answers?.length ?? 0)) byKey.set(k, m);
    else if ((m.answers?.length ?? 0) === (existing.answers?.length ?? 0))
      byKey.set(k, pickDeterministic(existing, m));
  }
  // TOTAL order independent of argument roles: ts alone leaves equal-ts
  // attempts in insertion order, so two tabs derive mirror-ordered arrays and
  // oscillate forever (the byte values genuinely alternate, so the browser's
  // same-value event suppression never triggers). Identity fields tiebreak,
  // identity STRING last — total for any JSON values.
  return [...byKey.values()]
    .sort(
      (x, y) =>
        cmpField(x.ts, y.ts) ||
        cmpField(x.timeUsed, y.timeUsed) ||
        cmpField(x.correct, y.correct) ||
        cmpField(x.total, y.total) ||
        (attemptKey(x) < attemptKey(y) ? -1 : attemptKey(x) > attemptKey(y) ? 1 : 0)
    )
    .slice(0, MAX_MOCK_ATTEMPTS);
}

/**
 * Display preferences stay device-local on purpose. Dark mode on a phone and
 * light on a desktop is a reasonable thing to want, and font size is a property
 * of the screen you are reading on, not of your study record.
 *
 * The chosen study plan is the exception: it is a study decision rather than a
 * display setting, so an incoming plan fills in when this device has not picked
 * one. A plan already chosen here is never overwritten by a sync.
 */
function mergePreferences(
  local: Progress['preferences'],
  incoming: Progress['preferences'],
  prefs: PreferenceConflict
): Progress['preferences'] {
  if (prefs === 'incoming') {
    return {
      ...incoming,
      studyPlan: incoming.studyPlan ?? local.studyPlan,
    };
  }
  return {
    ...local,
    studyPlan: local.studyPlan ?? incoming.studyPlan,
  };
}

/**
 * How preference conflicts resolve — and the two transports NEED different
 * answers, which review proved the hard way:
 *
 *  'local'    (default; file import): importing an old backup must not clobber
 *             the theme you are looking at. Only a missing studyPlan fills in.
 *  'incoming' (cross-tab and cloud sync): the writer's preferences win. This
 *             is load-bearing for termination, not taste — with local-wins,
 *             tab A (dark) and tab B (light) each preserve their own theme and
 *             alternately rewrite storage forever, because every merge differs
 *             from the record it just read. Same loop over Firestore, with
 *             billable writes. Adopt-the-writer converges in one exchange.
 */
export type PreferenceConflict = 'local' | 'incoming';

export function mergeProgress(
  local: Progress,
  incoming: Progress,
  prefs: PreferenceConflict = 'local'
): Progress {
  // The reset tombstone binds BOTH transports (cross-tab and device sync): a
  // reset on one side must not be merged back from the other side's memory.
  // Entries stamped after the reset survive; older ones stay gone. An entry
  // with no timestamp cannot be placed relative to a reset — with no reset
  // anywhere it is kept (dropping data over a missing field is the bug this
  // module exists to prevent); once a reset exists it counts as pre-reset.
  const resetAt = Math.max(local.resetAt ?? 0, incoming.resetAt ?? 0);
  const keep = (ts: number | undefined) => (resetAt === 0 ? true : (ts ?? 0) >= resetAt);
  const filterAnswers = (a: Progress['answers']) =>
    Object.fromEntries(Object.entries(a).filter(([, v]) => keep(v.ts))) as Progress['answers'];
  const filterTopics = (t: Progress['topicsRead']) =>
    Object.fromEntries(Object.entries(t).filter(([, ts]) => keep(ts)));
  const filterAttempts = (m: MockAttempt[]) => m.filter((x) => keep(x.ts));

  return {
    schemaVersion: 1,
    answers: mergeAnswers(filterAnswers(local.answers), filterAnswers(incoming.answers)),
    topicsRead: mergeTopicsRead(filterTopics(local.topicsRead), filterTopics(incoming.topicsRead)),
    mockAttempts: mergeMockAttempts(
      filterAttempts(local.mockAttempts),
      filterAttempts(incoming.mockAttempts)
    ),
    preferences: mergePreferences(local.preferences, incoming.preferences, prefs),
    ...(resetAt > 0 ? { resetAt } : {}),
  };
}

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

export interface ParseResult {
  ok: boolean;
  progress?: Progress;
  error?: string;
  /** What the file contained, for a confirmation prompt before merging. */
  stats?: { answered: number; topicsRead: number; mockAttempts: number };
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/**
 * Imported files are untrusted input — they can be hand-edited, truncated by a
 * failed transfer, or simply be the wrong file. Anything that reaches
 * localStorage drives the UI on every subsequent load, so a malformed import
 * would persist and break the app on reload rather than failing once.
 *
 * Unrecognised fields are dropped rather than carried through, and every value
 * is coerced to the expected type instead of being trusted.
 */
export function parseProgressFile(raw: string): ParseResult {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return { ok: false, error: 'That file is not valid JSON.' };
  }

  if (!isPlainObject(data)) {
    return { ok: false, error: 'That file does not contain a progress record.' };
  }

  if (data.schemaVersion !== 1) {
    return {
      ok: false,
      error: `Unsupported progress format (version ${String(
        data.schemaVersion ?? 'missing'
      )}). This app reads version 1.`,
    };
  }

  const answers: Progress['answers'] = {};
  if (isPlainObject(data.answers)) {
    for (const [k, v] of Object.entries(data.answers)) {
      const id = Number(k);
      if (!Number.isInteger(id) || !isPlainObject(v)) continue;
      if (typeof v.correct !== 'boolean' || typeof v.ts !== 'number') continue;
      answers[id] = {
        correct: v.correct,
        ts: v.ts,
        ...(typeof v.selected === 'number' ? { selected: v.selected } : {}),
      };
    }
  }

  const topicsRead: Progress['topicsRead'] = {};
  if (isPlainObject(data.topicsRead)) {
    for (const [k, v] of Object.entries(data.topicsRead)) {
      if (typeof v === 'number' && Number.isFinite(v)) topicsRead[k] = v;
    }
  }

  const mockAttempts: MockAttempt[] = [];
  if (Array.isArray(data.mockAttempts)) {
    for (const m of data.mockAttempts) {
      if (!isPlainObject(m)) continue;
      if (
        typeof m.ts !== 'number' ||
        typeof m.correct !== 'number' ||
        typeof m.total !== 'number' ||
        typeof m.pct !== 'number' ||
        typeof m.timeUsed !== 'number'
      )
        continue;
      const answersArr = Array.isArray(m.answers)
        ? m.answers.filter(
            (x): x is { qid: number; selected: number; correct: boolean } =>
              isPlainObject(x) &&
              typeof x.qid === 'number' &&
              typeof x.selected === 'number' &&
              typeof x.correct === 'boolean'
          )
        : [];
      mockAttempts.push({
        ts: m.ts,
        correct: m.correct,
        total: m.total,
        pct: m.pct,
        timeUsed: m.timeUsed,
        answers: answersArr,
      });
    }
  }

  const prefsRaw = isPlainObject(data.preferences) ? data.preferences : {};
  const fontSize =
    prefsRaw.fontSize === 'sm' || prefsRaw.fontSize === 'md' || prefsRaw.fontSize === 'lg'
      ? prefsRaw.fontSize
      : 'md';
  const theme =
    prefsRaw.theme === 'system' || prefsRaw.theme === 'light' || prefsRaw.theme === 'dark'
      ? prefsRaw.theme
      : 'system';
  const studyPlan =
    prefsRaw.studyPlan === 'eight-week' ||
    prefsRaw.studyPlan === 'twelve-week' ||
    prefsRaw.studyPlan === 'intensive'
      ? prefsRaw.studyPlan
      : undefined;

  const progress: Progress = {
    schemaVersion: 1,
    answers,
    topicsRead,
    mockAttempts,
    preferences: { fontSize, theme, ...(studyPlan ? { studyPlan } : {}) },
  };

  return {
    ok: true,
    progress,
    stats: {
      answered: Object.keys(answers).length,
      topicsRead: Object.keys(topicsRead).length,
      mockAttempts: mockAttempts.length,
    },
  };
}
