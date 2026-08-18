import { useCallback, useEffect, useState } from 'react';
import { mergeProgress } from '../lib/mergeProgress';
import {
  getStorageState,
  subscribeStorage,
  type StorageState,
} from '../core/storage';
import {
  confirmStorageHealth,
  defaultProgress,
  discardQuarantinedRecord,
  getProgress as storeGetProgress,
  initCrossTabSync,
  subscribeProgress,
  updateProgress,
  type MockAttempt,
  type Progress,
} from '../lib/progressStore';

// The store half of this file moved to src/lib/progressStore.ts so a Node
// harness can drive it without React (scripts/storage-regression.mjs).
// Everything this module used to export is still exported from here.
export {
  readQuarantinedRecord,
  discardQuarantinedRecord,
  type MockAttempt,
  type Progress,
  type StudyPlanId,
} from '../lib/progressStore';

export function useProgress() {
  const [state, setState] = useState<Progress>(storeGetProgress);
  const [storage, setStorage] = useState<StorageState>(getStorageState);

  useEffect(() => subscribeProgress(setState), []);

  useEffect(() => {
    const unsubscribe = subscribeStorage(setStorage);
    // Runs once per session and nothing waits on it. The synchronous half means
    // a browser refusing storage is known before the first answer rather than
    // after it has been lost; the persistence request resolves whenever it
    // resolves and changes nothing about how the app behaves meanwhile.
    confirmStorageHealth();
    initCrossTabSync();
    setStorage(getStorageState());
    return unsubscribe;
  }, []);

  const recordAnswer = useCallback(
    (qid: number, selected: number, correct: boolean) => {
      updateProgress((p) => ({
        ...p,
        answers: { ...p.answers, [qid]: { correct, ts: Date.now(), selected } },
      }));
    },
    []
  );

  const markTopicRead = useCallback((topicId: string) => {
    updateProgress((p) => ({
      ...p,
      topicsRead: { ...p.topicsRead, [topicId]: Date.now() },
    }));
  }, []);

  const recordMockAttempt = useCallback((attempt: MockAttempt) => {
    updateProgress((p) => ({
      ...p,
      mockAttempts: [attempt, ...p.mockAttempts].slice(0, 50),
    }));
  }, []);

  const setPreferences = useCallback(
    (prefs: Partial<Progress['preferences']>) => {
      updateProgress((p) => ({ ...p, preferences: { ...p.preferences, ...prefs } }));
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
    discardQuarantinedRecord();
  }, []);

  const resetAll = useCallback(() => {
    // resetAt is what makes a reset survive both merges: without it, the other
    // tab's (or other device's) memory merges everything straight back and
    // "reset" silently becomes "restore". See mergeProgress.
    // Keeping the original behaviour: a full reset also discards any
    // quarantined copy, since "reset everything" means everything.
    discardRecoverable();
    updateProgress(() => ({ ...defaultProgress, resetAt: Date.now() }));
  }, [discardRecoverable]);

  const exportJson = useCallback(() => JSON.stringify(storeGetProgress(), null, 2), []);

  /**
   * Fold another device's record into this one. Merging rather than replacing
   * means importing an older file can never lose work done here since that file
   * was written, so the operation is safe to repeat.
   */
  const importProgress = useCallback((incoming: Progress) => {
    updateProgress((p) => mergeProgress(p, incoming));
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
