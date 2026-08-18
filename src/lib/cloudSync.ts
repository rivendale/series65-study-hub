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

/**
 * `seat` decides whose PREFERENCES win when both sides have them (study data
 * always unions regardless). 'local-writes' is the normal case: a debounced
 * push only fires after a real local action, so the person who just acted
 * wins. 'cloud-wins' is for the FIRST reconcile after sign-in: a virgin
 * browser's defaults are nobody's action, and letting them ride the writer
 * seat would reset the theme on every other device each time a new device
 * signs in.
 */
async function pushMerge(
  fs: Fs,
  db: import('firebase/firestore').Firestore,
  uid: string,
  seat: 'local-writes' | 'cloud-wins' = 'local-writes'
) {
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
          const cloud = JSON.parse(remoteRaw) as Progress;
          next =
            seat === 'cloud-wins'
              ? mergeProgress(local, cloud, 'incoming')
              : mergeProgress(cloud, local, 'incoming');
        } catch {
          // An unreadable cloud record must not block saving; ours replaces it
          // and the corrupt text survives in the version the transaction read.
        }
      }
      tx.set(ref, { record: JSON.stringify(next), updatedAt: fs.serverTimestamp() });
      return next;
    });
    lastCloud = canon(merged);
    // Adopt what the transaction settled on — BY MERGING, never by replacing.
    // A real user action can land between the transaction's read of
    // getProgress() and this line; replacement would discard it and the next
    // debounced push would persist the loss. Merging with the live record in
    // the writer's seat keeps the fresh action on every path, including the
    // cloud-wins first reconcile (an action beats a default even there).
    updateProgress((p) =>
      canon(p) === lastCloud ? merged : mergeProgress(merged, p, 'incoming')
    );
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

      // First reconcile: cloud preferences win — a fresh browser's defaults
      // are not an action. Study data unions either way.
      await pushMerge(fs, db, user.uid, 'cloud-wins');
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
  const provider = new authMod.GoogleAuthProvider();
  // POPUP FIRST, redirect only as fallback — learned live, not from docs:
  // the first sign-in test went through Google's prompts and came back
  // signed out. signInWithRedirect stores its result on the authDomain
  // origin (rygiel-family.firebaseapp.com), and browsers that partition
  // third-party storage will not let this origin read it back, so the
  // round-trip silently yields nothing. A popup opened from the click
  // completes over postMessage and needs no shared storage. If the popup
  // is blocked (some standalone-PWA contexts), fall back to redirect,
  // which still works where partitioning is off.
  try {
    await authMod.signInWithPopup(auth, provider);
  } catch (err) {
    const code = (err as { code?: string })?.code ?? '';
    // Taxonomy per review: ONLY popup-blocked earns the redirect fallback.
    // cancelled-popup-request means a NEWER popup superseded this one — falling
    // back to redirect there would race the newer popup and navigate away from
    // it, so it returns quietly alongside popup-closed-by-user. Everything
    // else (including operation-not-supported) rethrows into the error card,
    // where "try again" is an honest answer.
    if (code === 'auth/popup-blocked') {
      await authMod.signInWithRedirect(auth, provider);
      return;
    }
    if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
      return;
    }
    throw err;
  }
}

export async function signOutCloud(): Promise<void> {
  const app = await getFirebaseApp();
  const authMod = await import('firebase/auth');
  await authMod.signOut(authMod.getAuth(app));
  setStatus({ state: 'signed-out' });
}
