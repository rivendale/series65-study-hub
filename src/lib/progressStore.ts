/**
 * The progress store: load, save, quarantine, and cross-tab reconciliation.
 * NO REACT IN THIS FILE — that is the point. This logic lived inside the
 * useProgress hook, where no Node harness could reach it; the sibling repo
 * proved two data-loss bugs there by execution (15 defects across five review
 * rounds), and this file is that fix ported onto this app's own store and its
 * own device-sync merge.
 */
import {
  classifyWriteFailure,
  clearRecovery,
  initStorageHealth,
  reportHistoryTrimmed,
  reportUnreadableRecord,
  reportWriteFailure,
  reportWriteOk,
} from '../core/storage';
import { mergeProgress } from './mergeProgress';

const STORAGE_KEY = 'series65_progress';

/**
 * Where a record that could not be read is set aside.
 *
 * A value under the main key that this build cannot parse — a write cut short
 * by a crash, or a record left by a different schema version — used to be
 * replaced by an empty default the moment anything saved. That is weeks of
 * answers destroyed to make room for nothing. Moving the bytes to their own key
 * costs one copy, keeps net usage flat once the main key shrinks to an empty
 * record, and leaves something to recover from.
 */
const QUARANTINE_KEY = 'series65_progress_unreadable';

/**
 * Below this, an unreadable value is not worth rescuing.
 *
 * An empty record serialises to about 115 characters and each answered question
 * adds roughly 50, so anything under this is at most a couple of answers — and
 * in practice is junk like `null` or `{}` left by something else entirely.
 * Raising an alarm and holding a copy for that would spend the student's
 * attention, and her storage budget, on nothing.
 */
const RESCUE_MIN_CHARS = 256;

const SCHEMA_VERSION = 1 as const;

export interface MockAttempt {
  ts: number;
  correct: number;
  total: number;
  pct: number;
  timeUsed: number;
  answers: { qid: number; selected: number; correct: boolean }[];
}

/** Which self-paced study plan the user has chosen on the Study Plan page. */
export type StudyPlanId = 'eight-week' | 'twelve-week' | 'intensive';

export interface Progress {
  schemaVersion: typeof SCHEMA_VERSION;
  answers: Record<number, { correct: boolean; ts: number; selected?: number }>;
  topicsRead: Record<string, number>;
  mockAttempts: MockAttempt[];
  /**
   * When the student last chose "reset everything", ms epoch. OPTIONAL and
   * additive — no schemaVersion bump, same reasoning as studyPlan below. It
   * exists so a reset survives BOTH merges (cross-tab and device sync):
   * without it, a reset in one place is merged straight back from the other's
   * memory, and "reset" silently becomes "restore". Entries recorded after the
   * reset survive; entries from before it stay gone.
   */
  resetAt?: number;
  preferences: {
    fontSize: 'sm' | 'md' | 'lg';
    theme: 'system' | 'light' | 'dark';
    /**
     * Optional and additive: records already in localStorage simply have no
     * value here, so the stored schema stays at version 1 and existing
     * progress keeps loading unchanged.
     */
    studyPlan?: StudyPlanId;
  };
}

const defaultProgress: Progress = {
  schemaVersion: SCHEMA_VERSION,
  answers: {},
  topicsRead: {},
  mockAttempts: [],
  preferences: { fontSize: 'md', theme: 'system' },
};

/**
 * What the value under STORAGE_KEY turned out to be.
 *
 * 'unreadable' is the one that changes behaviour: something is stored, it is
 * somebody's study record, and this build cannot use it. Nothing may overwrite
 * it on the strength of the app merely having been opened.
 */
type LoadOutcome = 'empty' | 'clean' | 'unreadable';
let loadOutcome: LoadOutcome = 'empty';

/** Read through a function so the value is the declared union, not the initialiser. */
function storedRecordWasUnreadable(): boolean {
  return loadOutcome === 'unreadable';
}

/**
 * Report a copy held from an earlier session, if there is one.
 *
 * Called on every load, not only on a failed one: once anything saves, the main
 * key holds a readable record again, and without this the notice — and the only
 * route to removing the copy — would disappear while the bytes stayed.
 */
function noteExistingQuarantine(): boolean {
  if (typeof window === 'undefined') return false;
  let existing: string | null = null;
  try {
    existing = window.localStorage.getItem(QUARANTINE_KEY);
  } catch {
    return false;
  }
  if (existing === null) return false;
  reportUnreadableRecord({
    key: QUARANTINE_KEY,
    bytes: existing.length,
    preserved: true,
  });
  return true;
}

/**
 * Copy an unreadable record out of the way, once, and say that it happened.
 *
 * Best effort by necessity — the copy needs room, and a record too big to parse
 * cleanly is often one written when room was already short. A failed copy is
 * not a reason to refuse to save from here on, which would turn one lost record
 * into an app that cannot be used at all; it is a reason to say so, while the
 * original is still there to be rescued by hand.
 */
function quarantine(raw: string): void {
  if (raw.length < RESCUE_MIN_CHARS) return;

  // One slot, possibly already occupied from an earlier session. The old rule
  // was "never overwrite" — which silently DROPPED any second unreadable
  // record: no copy anywhere, destroyed by the next save. With one slot the
  // policy is keep-whichever-is-larger, because months of study are bytes and
  // a bigger record is more record. THIS IS A HEURISTIC, NOT A PRESERVATION
  // GUARANTEE: code cannot tell junk from value; the download-the-quarantine
  // UI is the real mitigation. Identical contents need nothing.
  let existing: string | null = null;
  try {
    existing = window.localStorage.getItem(QUARANTINE_KEY);
  } catch {
    reportUnreadableRecord({ key: QUARANTINE_KEY, bytes: raw.length, preserved: false });
    return;
  }
  if (existing !== null && (existing === raw || existing.length >= raw.length)) {
    reportUnreadableRecord({ key: QUARANTINE_KEY, bytes: existing.length, preserved: true });
    return;
  }
  try {
    window.localStorage.setItem(QUARANTINE_KEY, raw);
    reportUnreadableRecord({ key: QUARANTINE_KEY, bytes: raw.length, preserved: true });
  } catch {
    reportUnreadableRecord({ key: QUARANTINE_KEY, bytes: raw.length, preserved: false });
  }
}

function load(): Progress {
  if (typeof window === 'undefined') return defaultProgress;

  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Site data is blocked outright. There is nothing stored to protect, and
    // the probe in initStorageHealth reports the refusal.
    return defaultProgress;
  }
  if (!raw) return defaultProgress;

  try {
    const parsed = JSON.parse(raw) as Progress;
    if (parsed.schemaVersion !== SCHEMA_VERSION) {
      throw new Error(`unsupported schemaVersion ${String(parsed?.schemaVersion)}`);
    }
    loadOutcome = 'clean';
    return {
      ...defaultProgress,
      ...parsed,
      preferences: { ...defaultProgress.preferences, ...parsed.preferences },
    };
  } catch {
    // Too small to be anybody's study record: leave the outcome at 'empty' so
    // the health write goes ahead and quietly replaces it.
    if (raw.length >= RESCUE_MIN_CHARS) {
      loadOutcome = 'unreadable';
      quarantine(raw);
    }
    return defaultProgress;
  }
}

/** The quarantined bytes, for the student who wants a copy before it is dropped. */
export function readQuarantinedRecord(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(QUARANTINE_KEY);
  } catch {
    return null;
  }
}

/**
 * How much mock history is kept when a full quota forces a rescue write.
 *
 * Attempts carry every question of a full mock sitting, so at roughly 4 KB
 * each they are most of the payload; answers and topics read together are a
 * fraction of one attempt. Cutting history is therefore the only lever that
 * actually frees meaningful space, and it costs the least: the scores stay
 * visible for the most recent sittings, which is what a study record is read
 * for, while the questions themselves are all still in the bank.
 */
const TRIM_KEEP_ATTEMPTS = 25;

/**
 * Persist the record, and say so when it does not work.
 *
 * The failure this guards against is not data loss on its own — it is data loss
 * that looks like success. Answers are also held in memory, so after a refused
 * write the screen still ticks up, the accuracy still moves, and nothing is
 * wrong until a reload throws the lot away. A silent catch here turns a bad
 * afternoon into weeks of invisible loss.
 *
 * Returns the record that actually reached storage, which is not always the one
 * passed in: a quota rescue writes a trimmed record, and the caller adopts that
 * so memory and disk keep telling the same story.
 */
function save(p: Progress): Progress {
  if (typeof window === 'undefined') return p;

  const json = JSON.stringify(p);
  try {
    window.localStorage.setItem(STORAGE_KEY, json);
    reportWriteOk(json.length);
    return p;
  } catch (err) {
    const kind = classifyWriteFailure(err);

    // One recovery attempt before giving up. Trimming when there is nothing to
    // trim would only fail identically, so it is not tried in that case — the
    // student gets the honest failure instead of a pointless retry.
    if (kind === 'quota' && p.mockAttempts.length > TRIM_KEEP_ATTEMPTS) {
      // mockAttempts is newest-first everywhere it is built, so this keeps the
      // most recent sittings and drops the oldest.
      const trimmed: Progress = {
        ...p,
        mockAttempts: p.mockAttempts.slice(0, TRIM_KEEP_ATTEMPTS),
      };
      const dropped = p.mockAttempts.length - trimmed.mockAttempts.length;
      const trimmedJson = JSON.stringify(trimmed);
      try {
        window.localStorage.setItem(STORAGE_KEY, trimmedJson);
        reportHistoryTrimmed(TRIM_KEEP_ATTEMPTS, dropped, trimmedJson.length);
        return trimmed;
      } catch (retryErr) {
        reportWriteFailure(classifyWriteFailure(retryErr));
        return p;
      }
    }

    reportWriteFailure(kind);
    return p;
  }
}

/**
 * Size of the record as it currently sits in storage, for the health readout on
 * a session where nothing has been written yet. Reading can itself throw where
 * site data is blocked, so it is guarded like every other access.
 */
function storedRecordBytes(): number | undefined {
  if (typeof window === 'undefined') return undefined;
  try {
    return window.localStorage.getItem(STORAGE_KEY)?.length;
  } catch {
    return undefined;
  }
}

let healthChecked = false;

/**
 * Settle the storage-health readout once per session.
 *
 * The probe in initStorageHealth writes a throwaway key, which needs headroom
 * of its own; rewriting the progress record reclaims the space that record
 * already occupies. On a full origin the probe can therefore fail where the
 * write that actually matters still succeeds, and a false "not being saved"
 * alarm would be its own kind of damage — the loudest message in the app has to
 * be worth trusting. So the probe catches the definitive case fast, and then a
 * real write of the loaded record decides.
 *
 * Going through setProgress rather than save() keeps memory, disk and listeners
 * consistent if the write has to trim. The updater is the identity function, so
 * subscribers get the same object back and React re-renders nothing.
 *
 * It is skipped outright when the stored record could not be read. That write
 * would put an empty default over somebody's study record on the strength of
 * the app having been opened — no answer given, no button pressed — and a
 * health check is never worth a record. The probe already settled whether this
 * browser accepts data at all, which is the question that actually needed
 * answering.
 */
export function confirmStorageHealth(): void {
  if (healthChecked) return;
  healthChecked = true;
  initStorageHealth(storedRecordBytes());
  if (!storedRecordWasUnreadable()) setProgress((p) => p);
}

type Listener = (p: Progress) => void;
const listeners = new Set<Listener>();
let current: Progress = load();

// A quarantined copy outlives the session that made it: once anything saves,
// the main key holds a perfectly readable record again and the load above is
// clean. Without this the notice would vanish on the next visit and the copy
// would sit there eating the budget with nothing in the app able to remove it.
if (!storedRecordWasUnreadable()) noteExistingQuarantine();

function setProgress(updater: (p: Progress) => Progress) {
  // What gets held in memory is what was persisted. If a quota rescue dropped
  // the oldest mock attempts, keeping the untrimmed record here would leave the
  // UI listing history that no longer exists on disk, and every later write
  // would re-attempt the same oversized payload.
  current = save(updater(current));
  listeners.forEach((l) => l(current));
}



export function discardQuarantinedRecord(): void {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.removeItem(QUARANTINE_KEY);
    } catch {
      // Nothing to do; the notice clears either way.
    }
  }
  clearRecovery();
}

export function getProgress(): Progress {
  return current;
}

export function subscribeProgress(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function updateProgress(updater: (p: Progress) => Progress): void {
  setProgress(updater);
}

export { defaultProgress };


/**
 * Order-independent equality for two records. JSON.stringify key order depends
 * on construction history, so raw string comparison would call semantically
 * identical records different — and a "difference" here causes a save, so a
 * spurious one is a spurious write loop.
 */
function canonical(value: unknown): string {
  // Scope: plain JSON data, which is all a Progress record contains.
  // undefined must canonicalise the way JSON.stringify persists it — dropped
  // from objects, null in arrays — or a key that is undefined in memory and
  // absent on disk reads as a difference on EVERY comparison, and the tabs
  // write-loop forever. Both facts were found by review in the sibling repo.
  if (value === undefined) return 'null';
  if (Array.isArray(value)) return '[' + value.map(canonical).join(',') + ']';
  if (value !== null && typeof value === 'object') {
    const rec = value as Record<string, unknown>;
    return (
      '{' +
      Object.keys(rec)
        .filter((k) => rec[k] !== undefined)
        .sort()
        .map((k) => JSON.stringify(k) + ':' + canonical(rec[k]))
        .join(',') +
      '}'
    );
  }
  return JSON.stringify(value);
}

let crossTabInitialised = false;

/**
 * Adopt writes made by OTHER TABS. Without this, two open tabs each hold the
 * whole record in memory and every save is a whole-record write: last writer
 * wins and the other tab's answers are silently destroyed. Proven by
 * scripts/storage-regression.mjs, ported from the sibling repo where five
 * review rounds hardened this exact machinery (15 defects, all with harness
 * cases).
 *
 * Save exactly when the merge produced something the DISK record is not — one
 * rule covering the reset tombstone that would otherwise exist only in memory,
 * preferences adopted in memory while disk says otherwise, and byte-identical
 * re-saves. TERMINATION: save() may persist a TRIM rather than merged (quota
 * rescue), so what terminates the exchange is the pair of facts that the merge
 * and trim are deterministic — a tab re-deriving the same record writes a
 * byte-identical string — and the storage event MUST NOT fire when the stored
 * value is unchanged (HTML spec). KNOWN BOUND, accepted deliberately: three or
 * more tabs writing different values for the SAME question in the SAME
 * millisecond can leave memories transiently disagreeing with disk until the
 * next write or reload heals it; the honest fix is vector clocks, out of
 * proportion here.
 */
export function initCrossTabSync(): void {
  if (crossTabInitialised || typeof window === 'undefined') return;
  crossTabInitialised = true;
  window.addEventListener('storage', (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY || typeof e.newValue !== 'string') return;
    let remote: Progress;
    try {
      remote = JSON.parse(e.newValue) as Progress;
    } catch {
      return;
    }
    if (remote?.schemaVersion !== SCHEMA_VERSION) return;
    const merged = mergeProgress(current, remote);
    if (canonical(merged) !== canonical(remote)) {
      current = save(merged);
    } else {
      current = merged;
    }
    listeners.forEach((l) => l(current));
  });
}
