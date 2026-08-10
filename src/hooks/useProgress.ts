import { useCallback, useEffect, useState } from 'react';
import { mergeProgress } from '../lib/mergeProgress';
import {
  classifyWriteFailure,
  clearRecovery,
  getStorageState,
  initStorageHealth,
  reportHistoryTrimmed,
  reportUnreadableRecord,
  reportWriteFailure,
  reportWriteOk,
  subscribeStorage,
  type StorageState,
} from '../core/storage';

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
  // Already held from an earlier session. Overwriting it with a second copy of
  // the same trouble would gain nothing and could cost the first one.
  if (noteExistingQuarantine()) return;
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
function confirmStorageHealth(): void {
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

export function useProgress() {
  const [state, setState] = useState<Progress>(current);
  const [storage, setStorage] = useState<StorageState>(getStorageState);

  useEffect(() => {
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeStorage(setStorage);
    // Runs once per session and nothing waits on it. The synchronous half means
    // a browser refusing storage is known before the first answer rather than
    // after it has been lost; the persistence request resolves whenever it
    // resolves and changes nothing about how the app behaves meanwhile.
    confirmStorageHealth();
    setStorage(getStorageState());
    return unsubscribe;
  }, []);

  const recordAnswer = useCallback(
    (qid: number, selected: number, correct: boolean) => {
      setProgress((p) => ({
        ...p,
        answers: { ...p.answers, [qid]: { correct, ts: Date.now(), selected } },
      }));
    },
    []
  );

  const markTopicRead = useCallback((topicId: string) => {
    setProgress((p) => ({
      ...p,
      topicsRead: { ...p.topicsRead, [topicId]: Date.now() },
    }));
  }, []);

  const recordMockAttempt = useCallback((attempt: MockAttempt) => {
    setProgress((p) => ({
      ...p,
      mockAttempts: [attempt, ...p.mockAttempts].slice(0, 50),
    }));
  }, []);

  const setPreferences = useCallback(
    (prefs: Partial<Progress['preferences']>) => {
      setProgress((p) => ({ ...p, preferences: { ...p.preferences, ...prefs } }));
    },
    []
  );

  /**
   * Throw away the quarantined copy of an unreadable record and stop mentioning
   * it. Separate from resetAll because it is the only way to reclaim that space,
   * and somebody who has downloaded the file should not have to reset
   * everything else to get rid of the notice.
   */
  const discardRecoverable = useCallback(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(QUARANTINE_KEY);
      } catch {
        // Nothing to do; the notice goes either way.
      }
    }
    clearRecovery();
  }, []);

  const resetAll = useCallback(() => {
    discardRecoverable();
    setProgress(() => ({ ...defaultProgress }));
  }, [discardRecoverable]);

  const exportJson = useCallback(() => JSON.stringify(current, null, 2), []);

  /**
   * Fold another device's record into this one. Merging rather than replacing
   * means importing an older file can never lose work done here since that file
   * was written, so the operation is safe to repeat.
   */
  const importProgress = useCallback((incoming: Progress) => {
    setProgress((p) => mergeProgress(p, incoming));
  }, []);

  return {
    progress: state,
    /** Whether this record is actually being saved, and how durably. */
    storage,
    recordAnswer,
    markTopicRead,
    recordMockAttempt,
    setPreferences,
    resetAll,
    discardRecoverable,
    exportJson,
    importProgress,
  };
}

export function useTheme() {
  const { progress } = useProgress();
  useEffect(() => {
    const apply = () => {
      const t = progress.preferences.theme;
      const prefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = t === 'dark' || (t === 'system' && prefersDark);
      document.documentElement.classList.toggle('dark', isDark);
    };
    apply();
    if (progress.preferences.theme === 'system' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener('change', apply);
      return () => mq.removeEventListener('change', apply);
    }
  }, [progress.preferences.theme]);

  useEffect(() => {
    const sizes = { sm: 'font-size-sm', md: 'font-size-md', lg: 'font-size-lg' };
    document.documentElement.classList.remove(
      'font-size-sm',
      'font-size-md',
      'font-size-lg'
    );
    document.documentElement.classList.add(sizes[progress.preferences.fontSize]);
  }, [progress.preferences.fontSize]);
}
