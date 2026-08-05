import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, RefreshCw, WifiOff, X } from 'lucide-react';
import { useRegisterSW } from 'virtual:pwa-register/react';

/**
 * Service worker state, made visible: a new version is ready, the app is now
 * usable offline, the network has gone away.
 *
 * The update case is the one that earns its keep. `registerType: 'autoUpdate'`
 * installs a new worker in the background, but the running page keeps the code
 * and content it loaded with. Somebody who opens this app every day and never
 * closes the tab can sit on a corrected rule for weeks. A fix that never
 * reaches the reader is not a fix, so the app says so and offers the reload.
 *
 * The offline case is the opposite in tone. This app is built to work without a
 * network — the whole curriculum and question bank are cached — so going offline
 * is a normal condition, not a fault. It gets a quiet line of text, not a
 * warning.
 */

/* ------------------------------------------------------------------ */
/* Dismissal, for this session only                                    */
/* ------------------------------------------------------------------ */

/**
 * sessionStorage, not localStorage, and on purpose. Putting off an update is
 * reasonable in the middle of a study session; forgetting about it forever is
 * not, because the thing behind the banner is usually corrected content. Closing
 * the tab clears the deferral and the offer comes back.
 */
const DISMISS_KEY = 'series65_update_deferred';

/** Fallback for browsers that refuse session storage (Safari private mode). */
let deferredInMemory = false;

function readDeferred(): boolean {
  if (deferredInMemory) return true;
  if (typeof window === 'undefined') return false;
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

function writeDeferred(): void {
  deferredInMemory = true;
  try {
    window.sessionStorage.setItem(DISMISS_KEY, '1');
  } catch {
    // Session storage unavailable; the in-memory flag covers this tab.
  }
}

/** How long the one-time "works offline now" confirmation stays on screen. */
const OFFLINE_READY_MS = 6000;

/**
 * Only reached if the waiting worker never takes control after being told to.
 * Better a reload that arrives late than a button that spins forever.
 */
const TAKEOVER_FALLBACK_MS = 4000;

const cardBase =
  'pointer-events-auto w-full max-w-md rounded-xl border p-3 shadow-lg backdrop-blur';

/* ------------------------------------------------------------------ */

interface UpdateBannerProps {
  /**
   * Told whenever the update card appears or disappears, so the dock can keep
   * to one decision at a time. Both this and the install offer are full-width
   * cards in the same corner and both ask a question; stacked they cover about
   * a third of a phone screen. The update goes first — what is behind it is
   * usually corrected exam content — and the install offer waits.
   */
  onVisibilityChange?: (visible: boolean) => void;
}

export default function UpdateBanner({ onVisibilityChange }: UpdateBannerProps = {}) {
  const { pathname } = useLocation();
  const [deferred, setDeferred] = useState(readDeferred);
  const [busy, setBusy] = useState(false);

  /**
   * Under autoUpdate the plugin's default behaviour, once the new worker
   * activates, is `window.location.reload()` with no warning. That reload can
   * land between reading a question and answering it. `onNeedReload` takes the
   * reload away from the plugin so it happens when the reader asks for it.
   */
  const [activated, setActivated] = useState(false);

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    offlineReady: [offlineReady, setOfflineReady],
    updateServiceWorker,
  } = useRegisterSW({
    onNeedReload() {
      setActivated(true);
    },
  });

  // Never over a question. This component stays mounted and renders nothing, so
  // an update that lands mid-quiz is still waiting when the quiz is over rather
  // than being lost with the component's state.
  const inQuiz = pathname.startsWith('/quiz/');

  const showUpdate = (needRefresh || activated) && !deferred && !inQuiz;
  const showOfflineReady = offlineReady && !showUpdate && !inQuiz;

  useEffect(() => {
    if (!showOfflineReady) return;
    const timer = window.setTimeout(() => setOfflineReady(false), OFFLINE_READY_MS);
    return () => window.clearTimeout(timer);
  }, [showOfflineReady, setOfflineReady]);

  useEffect(() => {
    onVisibilityChange?.(showUpdate);
    return () => onVisibilityChange?.(false);
  }, [showUpdate, onVisibilityChange]);

  const reload = useCallback(async () => {
    setBusy(true);
    if (activated) {
      // autoUpdate: the new worker is already in control, so there is nothing
      // to wait for and updateServiceWorker() is a no-op here. The effect below
      // fires on this same state change and takes the page — going through one
      // path rather than two keeps it to a single reload.
      return;
    }
    // Prompt mode: tell the waiting worker to take over. Because onNeedReload
    // is supplied, the plugin hands the takeover back here rather than
    // reloading itself, so the effect below does it the moment control passes
    // and this timer is only the backstop it is named for.
    await updateServiceWorker(true);
    window.setTimeout(() => window.location.reload(), TAKEOVER_FALLBACK_MS);
  }, [activated, updateServiceWorker]);

  /**
   * The waiting worker took control after the reload was asked for — the
   * prompt-mode ordering. Without this the page would sit on a spinning button
   * until the fallback timer fired, turning a backstop into the normal wait.
   */
  useEffect(() => {
    if (busy && activated) window.location.reload();
  }, [busy, activated]);

  const dismiss = useCallback(() => {
    writeDeferred();
    setDeferred(true);
    setNeedRefresh(false);
  }, [setNeedRefresh]);

  return (
    <>
      {showUpdate && (
        <section
          role="status"
          aria-live="polite"
          aria-label="A new version is available"
          className={`${cardBase} border-blue-200 bg-white/95 dark:border-blue-900 dark:bg-slate-900/95`}
        >
          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
              aria-hidden="true"
            >
              <RefreshCw className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                A newer version is ready
              </h2>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Study material may have been corrected since this page loaded.
                Reloading takes a second and keeps all your progress.
              </p>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={reload}
              disabled={busy}
              aria-busy={busy}
              className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-60"
            >
              <RefreshCw
                className={`h-4 w-4 ${busy ? 'animate-spin' : ''}`}
                aria-hidden="true"
              />
              {busy ? 'Reloading…' : 'Reload now'}
            </button>
            <button
              type="button"
              onClick={dismiss}
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-4 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Not now. Ask again next time the app is opened."
            >
              Not now
            </button>
          </div>
        </section>
      )}

      {showOfflineReady && (
        <section
          role="status"
          aria-live="polite"
          className={`${cardBase} border-emerald-200 bg-white/95 dark:border-emerald-900 dark:bg-slate-900/95`}
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300"
              aria-hidden="true"
            >
              <Check className="h-5 w-5" />
            </span>
            <p className="min-w-0 flex-1 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                Ready to use offline.
              </span>{' '}
              Every topic and question is saved on this device.
            </p>
            <button
              type="button"
              onClick={() => setOfflineReady(false)}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Dismiss offline confirmation"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </section>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Connectivity                                                        */
/* ------------------------------------------------------------------ */

/**
 * Lives beside the update banner because it reports the same thing from the
 * other side: what the app can and cannot reach right now.
 *
 * Deliberately not styled as an error. Reading, quizzing and progress all work
 * with no network at all; the only things affected are sync and anything else
 * that has to leave the device. So this states the fact and says what still
 * works, in slate rather than red, with an icon so colour is never the only
 * signal.
 */
/**
 * How long the connection has to stay down before it is worth mentioning.
 *
 * A train tunnel, a lift or a weak signal flips `navigator.onLine` several
 * times in a couple of seconds. Reporting each flip is a bar flashing in and out
 * at the bottom of the screen and, for a screen reader, a run of polite
 * announcements — over a condition this app is designed to work in anyway.
 * Coming back is not delayed: good news is shown at once.
 */
const OFFLINE_SETTLE_MS = 1200;

export function OfflineIndicator() {
  const { pathname } = useLocation();
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    let timer = 0;
    const sync = () => {
      window.clearTimeout(timer);
      if (navigator.onLine === false) {
        timer = window.setTimeout(() => setOffline(true), OFFLINE_SETTLE_MS);
      } else {
        setOffline(false);
      }
    };
    window.addEventListener('online', sync);
    window.addEventListener('offline', sync);
    // The state can have changed between first render and this effect running.
    sync();
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('online', sync);
      window.removeEventListener('offline', sync);
    };
  }, []);

  if (!offline || pathname.startsWith('/quiz/')) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-auto flex max-w-md items-center gap-2 rounded-full border border-slate-300 bg-white/95 py-1.5 pl-3 pr-4 text-xs shadow-md backdrop-blur dark:border-slate-600 dark:bg-slate-900/95"
    >
      <WifiOff
        className="h-4 w-4 flex-shrink-0 text-slate-500 dark:text-slate-400"
        aria-hidden="true"
      />
      <span className="text-slate-700 dark:text-slate-200">
        <span className="font-semibold">Offline.</span> Everything but sync still
        works.
      </span>
    </div>
  );
}
