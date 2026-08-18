import { useEffect, useState } from 'react';
import { Cloud, CloudOff, LogIn, LogOut, RefreshCw } from 'lucide-react';
import {
  getCloudStatus,
  initCloudSync,
  signInWithGoogle,
  signOutCloud,
  subscribeCloudStatus,
  type CloudStatus,
} from '../lib/cloudSync';

/**
 * The one-button cloud sync surface. Everything heavier — endpoint sync, file
 * export/import — stays further down the Sync page; this card is the path a
 * family member actually uses: sign in with the family Google account, and the
 * record follows them between phone and laptop.
 */
export default function CloudSyncCard() {
  const [status, setStatus] = useState<CloudStatus>(getCloudStatus);

  useEffect(() => {
    const unsub = subscribeCloudStatus(setStatus);
    void initCloudSync();
    return unsub;
  }, []);

  const busy = status.state === 'loading';

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-2 flex items-center gap-2">
        {status.state === 'synced' || status.state === 'syncing' ? (
          <Cloud className="h-5 w-5 text-emerald-600" aria-hidden />
        ) : (
          <CloudOff className="h-5 w-5 text-slate-400" aria-hidden />
        )}
        <h2 className="text-lg font-semibold">Cloud sync</h2>
      </div>

      {status.state === 'synced' || status.state === 'syncing' ? (
        <>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Signed in{status.email ? ` as ${status.email}` : ''}. Progress syncs
            automatically between devices signed into this account.
            {status.lastSyncedAt
              ? ` Last synced ${new Date(status.lastSyncedAt).toLocaleTimeString()}.`
              : ''}
          </p>
          <button
            type="button"
            onClick={() => void signOutCloud()}
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700"
          >
            <LogOut className="h-4 w-4" aria-hidden /> Sign out
          </button>
        </>
      ) : status.state === 'error' ? (
        <>
          <p className="text-sm text-red-600 dark:text-red-400">
            Sync hit a problem: {status.detail ?? 'unknown error'}. Your progress
            is still saved on this device.
          </p>
          <button
            type="button"
            onClick={() => void signInWithGoogle()}
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            <RefreshCw className="h-4 w-4" aria-hidden /> Try again
          </button>
        </>
      ) : (
        <>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Sign in with the family Google account and your progress follows you
            between phone and laptop. Without it, everything still works — 
            progress just stays on this device.
          </p>
          <button
            type="button"
            disabled={busy}
            onClick={() => void signInWithGoogle()}
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            <LogIn className="h-4 w-4" aria-hidden />
            {busy ? 'Checking sign-in…' : 'Sign in with Google'}
          </button>
        </>
      )}
    </div>
  );
}
