/**
 * Cloud sync over Firestore. The record's home stays localStorage — offline
 * study keeps working untouched — and Firestore is the replica that makes the
 * record portable across Colleen's devices.
 *
 * DESIGN CONSTRAINTS, each from a measured failure or review finding:
 *  - Sign-in uses REDIRECT, not popup: iOS Safari blocks silent iframe renewal
 *    (ITP) and popups not born from user gestures; Firebase Auth's redirect
 *    flow plus its own session persistence is the path Google prescribes.
 *  - Every push is a TRANSACTION that merges the cloud copy with ours before
 *    writing. A plain set() would be last-writer-wins across devices — the
 *    exact bug the cross-tab work just fixed locally. mergeProgress carries
 *    the reset tombstone, so resets propagate across devices too.
 *  - Pushes are DEBOUNCED and flushed when the tab hides. One write per
 *    answered question would be latency-visible and quota-hungry.
 *  - localStorage is per ORIGIN, not per person. If a different family member
 *    signs in on this browser, the previous record is snapshotted aside and
 *    the new account's cloud copy becomes the base — nobody's answers merge
 *    into somebody else's account.
 */
import { getFirebaseApp } from './firebase';
import { mergeProgress } from './mergeProgress';
import {
  getProgress,
  subscribeProgress,
  updateProgress,
  type Progress,
} from './progressStore';

const APP_ID = 'series65';
const LAST_UID_KEY = 'series65_cloud_uid';

export interface CloudStatus {
  state: 'off' | 'loading' | 'signed-out' | 'syncing' | 'synced' | 'error';
  email?: string;
  lastSyncedAt?: number;
  detail?: string;
}

let status: CloudStatus = { state: 'off' };
const statusListeners = new Set<(s: CloudStatus) => void>();
function setStatus(next: CloudStatus) {
  status = next;
  statusListeners.forEach((l) => l(status));
}
export function getCloudStatus(): CloudStatus {
  return status;
}
export function subscribeCloudStatus(l: (s: CloudStatus) => void): () => void {
  statusListeners.add(l);
  return () => {
    statusListeners.delete(l);
  };
}

type Fs = typeof import('firebase/firestore');
let started = false;
let pushTimer: ReturnType<typeof setTimeout> | null = null;
/** Canonical JSON of the last record we know the cloud holds — echo control. */
let lastCloud: string | null = null;

const canon = (p: Progress) => JSON.stringify(p);

async function pushMerge(fs: Fs, db: import('firebase/firestore').Firestore, uid: string) {
  const ref = fs.doc(db, 'apps', APP_ID, 'users', uid);
  try {
    const merged = await fs.runTransaction(db, async (tx) => {
      const snap = await tx.get(ref);
      const local = getProgress();
      const remoteRaw = snap.exists() ? (snap.data().record as string) : null;
      let next = local;
      if (remoteRaw) {
        try {
          // Argument order carries meaning: 'incoming' means the SECOND
          // record's preferences win, and on a PUSH the writer is the LOCAL
          // device — so local rides in the incoming seat. Reversed, a stale
          // cloud theme overwrites the one just picked. (The snapshot path
          // below is the mirror case: there the cloud is the writer.)
          next = mergeProgress(JSON.parse(remoteRaw) as Progress, local, 'incoming');
        } catch {
          // An unreadable cloud record must not block saving; ours replaces it
          // and the corrupt text survives in the version the transaction read.
        }
      }
      tx.set(ref, { record: JSON.stringify(next), updatedAt: fs.serverTimestamp() });
      return next;
    });
    lastCloud = canon(merged);
    // Adopt what the transaction settled on, so local, cloud and every other
    // device converge on one record rather than three near-copies.
    if (canon(getProgress()) !== lastCloud) {
      updateProgress(() => merged);
    }
    setStatus({ ...status, state: 'synced', lastSyncedAt: Date.now() });
  } catch (err) {
    setStatus({ ...status, state: 'error', detail: err instanceof Error ? err.message : String(err) });
  }
}

function schedulePush(fs: Fs, db: import('firebase/firestore').Firestore, uid: string) {
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = setTimeout(() => void pushMerge(fs, db, uid), 2500);
}

/**
 * Begin (or resume) cloud sync. Safe to call more than once; also safe to call
 * at app start — if nobody ever signed in, it resolves to 'signed-out' without
 * downloading Firestore.
 */
export async function initCloudSync(): Promise<void> {
  if (started || typeof window === 'undefined') return;
  started = true;
  setStatus({ state: 'loading' });
  const app = await getFirebaseApp();
  const authMod = await import('firebase/auth');
  const auth = authMod.getAuth(app);
  // Complete a pending redirect sign-in, if we are landing from one.
  try {
    await authMod.getRedirectResult(auth);
  } catch {
    // Surfaced below through onAuthStateChanged; a failed redirect just means
    // signed-out.
  }
  authMod.onAuthStateChanged(auth, (user) => {
    if (!user) {
      setStatus({ state: 'signed-out' });
      return;
    }
    void (async () => {
      // A DIFFERENT account than last time on this browser: set the previous
      // record aside untouched and start from this account's cloud copy.
      // localStorage is per origin, not per person.
      const prevUid = window.localStorage.getItem(LAST_UID_KEY);
      if (prevUid && prevUid !== user.uid) {
        window.localStorage.setItem(
          `series65_progress_prev_${prevUid}`,
          JSON.stringify(getProgress())
        );
        updateProgress(() => ({
          schemaVersion: 1,
          answers: {},
          topicsRead: {},
          mockAttempts: [],
          preferences: getProgress().preferences,
        }));
      }
      window.localStorage.setItem(LAST_UID_KEY, user.uid);

      const fs = await import('firebase/firestore');
      const db = fs.getFirestore(app);
      setStatus({ state: 'syncing', email: user.email ?? undefined });

      // First reconcile, then keep both directions flowing.
      await pushMerge(fs, db, user.uid);
      subscribeProgress(() => {
        // Ignore the notification for a record we just adopted from the cloud.
        if (canon(getProgress()) === lastCloud) return;
        schedulePush(fs, db, user.uid);
      });
      fs.onSnapshot(fs.doc(db, 'apps', APP_ID, 'users', user.uid), (snap) => {
        const raw = snap.exists() ? (snap.data().record as string) : null;
        if (!raw || raw === lastCloud) return;
        try {
          const remote = JSON.parse(raw) as Progress;
          lastCloud = raw;
          updateProgress((p) => mergeProgress(p, remote, 'incoming'));
        } catch {
          // A corrupt cloud record is repaired by our next push; never adopt it.
        }
      });
      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && pushTimer) {
          clearTimeout(pushTimer);
          void pushMerge(fs, db, user.uid);
        }
      });
    })();
  });
}

export async function signInWithGoogle(): Promise<void> {
  const app = await getFirebaseApp();
  const authMod = await import('firebase/auth');
  const auth = authMod.getAuth(app);
  await authMod.signInWithRedirect(auth, new authMod.GoogleAuthProvider());
}

export async function signOutCloud(): Promise<void> {
  const app = await getFirebaseApp();
  const authMod = await import('firebase/auth');
  await authMod.signOut(authMod.getAuth(app));
  setStatus({ state: 'signed-out' });
}
