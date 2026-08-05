import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  Check,
  Cloud,
  CloudOff,
  Copy,
  ExternalLink,
  Eye,
  EyeOff,
  Info,
  KeyRound,
  Link2,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Trash2,
  WifiOff,
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import {
  loadSyncConfig,
  saveSyncConfig,
  clearSyncConfig,
  validateEndpoint,
  syncNow,
  type SyncConfig,
} from '../lib/syncClient';
import {
  generateSyncKey,
  formatSyncKey,
  isValidSyncKey,
} from '../lib/syncCrypto';

/**
 * Sync settings.
 *
 * Two states: not configured (the default, and the one that has to read as a
 * deliberate, informed choice to leave) and configured. The page never renders
 * the sync key or the token into a URL, a link or anything shareable, and never
 * logs either.
 */

const WORKER_README_URL =
  'https://github.com/rivendale/series65-study-hub/blob/main/sync-worker/README.md';

/**
 * Auto-sync is throttled at module scope rather than in a ref so that leaving
 * the page and coming straight back does not fire another round trip.
 */
const AUTO_SYNC_INTERVAL_MS = 60_000;
let lastAutoSyncAt = 0;

type SyncMode = 'manual' | 'auto';

type StatusKind = 'ok' | 'info' | 'error' | 'muted';

interface SyncStatus {
  kind: StatusKind;
  text: string;
}

/** Same shape as the key, no characters. Used when the key is hidden. */
function maskKey(key: string): string {
  return key
    .split('-')
    .map((group) => '•'.repeat(group.length))
    .join('-');
}

function stripKey(key: string): string {
  return key.toUpperCase().replace(/[\s-]/g, '');
}

/**
 * The canonical length of a sync key in characters, dashes excluded. Read off
 * the generator rather than written down here, so it cannot drift from it.
 */
let canonicalKeyChars = 0;
function keyCharCount(): number {
  if (!canonicalKeyChars) canonicalKeyChars = stripKey(generateSyncKey()).length;
  return canonicalKeyChars;
}

/**
 * The decoder folds O onto 0 and I/L onto 1, because those are what people
 * mistype when copying a key by eye. Do the same substitution here so the key
 * that gets stored and displayed is the one the generator would have produced,
 * rather than a variant spelling that only happens to decode the same.
 */
function normaliseKey(key: string): string {
  return formatSyncKey(stripKey(key).replace(/O/g, '0').replace(/[IL]/g, '1'));
}

/**
 * isValidSyncKey() accepts anything decoding to at least 16 bytes, which is the
 * right rule for the decoder but far too lenient for a text field. A key pasted
 * twice, or with a couple of stray characters on the end, passes that check and
 * then derives a *different* storage id and a different AES key. The device
 * syncs happily to an address the other device never reads, reports success
 * every time, and the two never meet. Demand the exact shape here.
 */
function keyProblem(key: string, mode: 'new' | 'existing'): string | null {
  const raw = stripKey(key);
  if (!raw) {
    return mode === 'new'
      ? 'Generate a key first.'
      : 'Paste the sync key from your first device.';
  }
  const expected = keyCharCount();
  if (raw.length !== expected) {
    return `A sync key is ${expected} characters once you ignore the dashes; this one is ${raw.length}. Check it against the first device.`;
  }
  if (!isValidSyncKey(raw)) {
    return 'That is not a complete sync key. Check it against the first device.';
  }
  return null;
}

/**
 * validateEndpoint() checks the scheme, which is the part that matters most,
 * but it has nothing to say about the rest of the URL. Three shapes are worth
 * refusing here: the storage id is appended as a path segment, so a query
 * string would push the id into a query parameter — the part of a URL that
 * proxies and access logs keep — and a fragment would be dropped before the
 * request was sent, leaving sync silently talking to the wrong address forever.
 * Credentials in the URL would be written to localStorage and then printed in
 * full on this page.
 */
function endpointShapeProblem(endpoint: string): string | null {
  let url: URL;
  try {
    url = new URL(endpoint);
  } catch {
    return null; // validateEndpoint reports this one.
  }
  if (url.username || url.password) {
    return 'Leave the username and password out of the URL. Use the token field below instead.';
  }
  if (url.search) {
    return 'Leave the ? part off the address. The app adds its own path to whatever you put here.';
  }
  if (url.hash) {
    return 'Leave the # part off the address. The app adds its own path to whatever you put here.';
  }
  return null;
}

function endpointProblemFor(endpoint: string): string | null {
  return validateEndpoint(endpoint) ?? endpointShapeProblem(endpoint);
}

/**
 * localStorage is not guaranteed to accept a write: a full quota, or a browser
 * configured to refuse site data, throws here. An uncaught throw out of a click
 * handler would leave the page looking as though nothing had happened, so the
 * caller gets told instead.
 */
function persistConfig(config: SyncConfig): boolean {
  try {
    saveSyncConfig(config);
    return true;
  } catch {
    return false;
  }
}

function describeWhen(ts: number | undefined): string {
  if (!ts) return 'Not yet';
  const diff = Date.now() - ts;
  if (diff < 60_000) return 'Just now';
  if (diff < 3_600_000) {
    const mins = Math.round(diff / 60_000);
    return mins + ' minute' + (mins === 1 ? '' : 's') + ' ago';
  }
  if (diff < 86_400_000) {
    const hrs = Math.round(diff / 3_600_000);
    return hrs + ' hour' + (hrs === 1 ? '' : 's') + ' ago';
  }
  return new Date(ts).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

const inputClass =
  'w-full min-h-[44px] rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400';

const primaryButtonClass =
  'inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed';

const secondaryButtonClass =
  'inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-blue-400 min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed';

export default function Sync() {
  const { progress, exportJson, importProgress } = useProgress();

  const [config, setConfig] = useState<SyncConfig | null>(() =>
    loadSyncConfig()
  );

  // --- setup form ---------------------------------------------------------
  const [showForm, setShowForm] = useState(false);
  const [endpoint, setEndpoint] = useState('');
  const [endpointError, setEndpointError] = useState<string | null>(null);
  const [token, setToken] = useState('');
  const [keyMode, setKeyMode] = useState<'new' | 'existing'>('new');
  const [generatedKey, setGeneratedKey] = useState('');
  const [pastedKey, setPastedKey] = useState('');
  const [keyError, setKeyError] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  // --- key display --------------------------------------------------------
  const [revealSavedKey, setRevealSavedKey] = useState(false);
  const [copied, setCopied] = useState<'setup' | 'saved' | null>(null);
  const [copyFailed, setCopyFailed] = useState(false);

  // --- syncing ------------------------------------------------------------
  const [syncing, setSyncing] = useState(false);
  const [status, setStatus] = useState<SyncStatus | null>(null);
  const [nothingStored, setNothingStored] = useState(false);
  const [confirmDisconnect, setConfirmDisconnect] = useState(false);

  const configRef = useRef<SyncConfig | null>(config);
  /**
   * Bumped whenever the user changes or removes the configuration. A sync that
   * was already in flight when that happened must not write its result back:
   * see the guard in runSync.
   */
  const configEpoch = useRef(0);
  const progressRef = useRef(progress);
  const exportRef = useRef(exportJson);
  const importRef = useRef(importProgress);
  const inFlight = useRef(false);
  const mounted = useRef(true);
  const copyTimer = useRef<number | null>(null);

  // Declared before the auto-sync effect so the refs are current by the time it
  // runs.
  useEffect(() => {
    configRef.current = config;
    progressRef.current = progress;
    exportRef.current = exportJson;
    importRef.current = importProgress;
  });

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    };
  }, []);

  const runSync = useCallback(async (mode: SyncMode, override?: SyncConfig) => {
    const cfg = override ?? configRef.current;
    if (!cfg) return;
    // One sync at a time, ever. Two in flight would race on the push and could
    // upload a record that is missing whatever the other one merged in. A
    // request that is turned away for that reason has to say so: an earlier
    // sync can still be in flight for up to the request timeout after the user
    // reconnects, and silently doing nothing looks like a broken button.
    if (inFlight.current) {
      if (mode === 'manual') {
        setStatus({ kind: 'muted', text: 'A sync is already running.' });
      }
      return;
    }

    const epoch = configEpoch.current;
    inFlight.current = true;
    lastAutoSyncAt = Date.now();
    setSyncing(true);
    if (mode === 'manual') {
      setStatus({ kind: 'muted', text: 'Syncing…' });
    }

    try {
      const result = await syncNow(cfg, progressRef.current, exportRef.current);

      // The configuration this sync started with is gone or has been replaced —
      // the user disconnected while the request was in the air. Writing the
      // result back now would put the endpoint, the token and the sync key
      // straight back into localStorage and flip the page to "Sync is on",
      // silently undoing the thing they just asked for.
      if (configEpoch.current !== epoch) return;

      if (result.status === 'ok') {
        // Deliberately not gated on the component still being mounted. syncNow
        // has already pushed the merged record to the endpoint, so throwing the
        // merge away here would leave the server holding work this device does
        // not have. The store behind useProgress is module-level and writes
        // straight to localStorage, so this is safe after unmount.
        importRef.current(result.merged);
        const next: SyncConfig = { ...cfg, lastSyncedAt: Date.now() };
        persistConfig(next);
        configRef.current = next;
        if (!mounted.current) return;
        setConfig(next);
        setNothingStored(!result.pulled);
        setStatus({ kind: 'ok', text: result.message });
        return;
      }

      if (!mounted.current) return;
      setNothingStored(false);

      if (result.status === 'offline') {
        // Being offline is the normal condition for an app built to work on a
        // train. It is information, not a failure.
        setStatus({ kind: 'info', text: result.message });
        return;
      }

      if (mode === 'manual') {
        setStatus({ kind: 'error', text: result.message });
      } else {
        // A background sync that fails must not shout. Someone could be
        // mid-question three taps away.
        setStatus({
          kind: 'muted',
          text: 'Background sync did not complete. Your progress is safe on this device.',
        });
      }
    } finally {
      inFlight.current = false;
      if (mounted.current) setSyncing(false);
    }
  }, []);

  const configured = config !== null;
  const configEndpoint = config?.endpoint ?? null;
  const configKey = config?.syncKey ?? null;

  useEffect(() => {
    if (!configured) return;

    const maybeAutoSync = () => {
      if (inFlight.current) return;
      if (Date.now() - lastAutoSyncAt < AUTO_SYNC_INTERVAL_MS) return;
      void runSync('auto');
    };

    maybeAutoSync();
    window.addEventListener('focus', maybeAutoSync);
    return () => window.removeEventListener('focus', maybeAutoSync);
    // configEndpoint / configKey are here so that reconnecting with different
    // settings re-arms the listener; they are never rendered into a URL.
  }, [configured, configEndpoint, configKey, runSync]);

  const copyToClipboard = useCallback(
    async (value: string, which: 'setup' | 'saved') => {
      try {
        await navigator.clipboard.writeText(value);
        setCopyFailed(false);
        setCopied(which);
        if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
        copyTimer.current = window.setTimeout(() => {
          if (mounted.current) setCopied(null);
        }, 2500);
      } catch {
        // Clipboard access can be refused outright. Reveal the key so it can be
        // selected by hand rather than leaving the user with a dead button.
        setCopyFailed(true);
        setRevealSavedKey(true);
      }
    },
    []
  );

  const resetForm = useCallback(() => {
    setEndpoint('');
    setEndpointError(null);
    setToken('');
    setKeyMode('new');
    setGeneratedKey('');
    setPastedKey('');
    setKeyError(null);
    setSaveError(null);
    setCopied(null);
    setCopyFailed(false);
    // A failed copy during setup reveals the key so it can be selected by hand.
    // Leaving that flag set would carry straight over into the configured view,
    // which is supposed to open with the key masked.
    setRevealSavedKey(false);
  }, []);

  const activeKey = keyMode === 'new' ? generatedKey : pastedKey;

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    setSaveError(null);

    const trimmedEndpoint = endpoint.trim();
    if (!trimmedEndpoint) {
      setEndpointError('Enter the URL of the worker you deployed.');
      return;
    }
    const endpointProblem = endpointProblemFor(trimmedEndpoint);
    if (endpointProblem) {
      setEndpointError(endpointProblem);
      return;
    }

    const key = normaliseKey(activeKey);
    const problem = keyProblem(key, keyMode);
    if (problem) {
      setKeyError(problem);
      return;
    }

    const trimmedToken = token.trim();
    const next: SyncConfig = {
      endpoint: trimmedEndpoint.replace(/\/+$/, ''),
      syncKey: key,
      ...(trimmedToken ? { token: trimmedToken } : {}),
    };

    if (!persistConfig(next)) {
      setSaveError(
        'This browser would not let the app save the settings. Check that site data is allowed for this page, then try again.'
      );
      return;
    }
    configEpoch.current += 1;
    configRef.current = next;
    setConfig(next);
    setShowForm(false);
    setConfirmDisconnect(false);
    setNothingStored(false);
    resetForm();
    void runSync('manual', next);
  };

  const disconnect = () => {
    try {
      clearSyncConfig();
    } catch {
      // Saying "disconnected" while the endpoint, token and key are still in
      // storage would be the one lie this page cannot afford.
      setStatus({
        kind: 'error',
        text: 'This browser would not let the app clear its storage, so the sync settings are still on this device. Clear this site’s data in your browser settings to remove them.',
      });
      setConfirmDisconnect(false);
      return;
    }
    // Anything already in flight against the old configuration is now stale and
    // must not be written back.
    configEpoch.current += 1;
    configRef.current = null;
    setConfig(null);
    setConfirmDisconnect(false);
    setRevealSavedKey(false);
    setStatus(null);
    setNothingStored(false);
    setShowForm(false);
    resetForm();
  };

  /* ------------------------------------------------------------------ */
  /* Status line                                                         */
  /* ------------------------------------------------------------------ */

  const statusLine = status && (
    <p
      role="status"
      aria-live="polite"
      className={
        status.kind === 'muted'
          ? 'mt-3 flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400'
          : 'mt-3 flex items-start gap-2 text-sm rounded-lg px-3 py-2 ' +
            (status.kind === 'ok'
              ? 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
              : status.kind === 'info'
                ? 'bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-300'
                : 'bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200')
      }
    >
      {status.kind === 'ok' ? (
        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
      ) : status.kind === 'info' ? (
        <WifiOff className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
      ) : status.kind === 'error' ? (
        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
      ) : (
        <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
      )}
      <span>{status.text}</span>
    </p>
  );

  /* ------------------------------------------------------------------ */
  /* Setup form                                                          */
  /* ------------------------------------------------------------------ */

  const setupForm = (
    <form
      onSubmit={handleSave}
      className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-5"
    >
      <div className="flex items-center gap-2">
        <Link2 className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <h2 className="font-semibold text-lg">Connect this device</h2>
      </div>

      {/* Endpoint ---------------------------------------------------- */}
      <div>
        <label htmlFor="sync-endpoint" className="block text-sm font-semibold mb-1">
          Endpoint URL
        </label>
        <p
          id="sync-endpoint-hint"
          className="text-xs text-slate-500 dark:text-slate-400 mb-2"
        >
          The address of the worker you deployed, for example
          https://series65-sync.your-name.workers.dev
        </p>
        <input
          id="sync-endpoint"
          type="url"
          inputMode="url"
          autoComplete="off"
          spellCheck={false}
          placeholder="https://..."
          value={endpoint}
          onChange={(e) => {
            setEndpoint(e.target.value);
            if (endpointError) setEndpointError(null);
          }}
          onBlur={(e) => {
            const value = e.target.value.trim();
            setEndpoint(value);
            setEndpointError(value ? endpointProblemFor(value) : null);
          }}
          aria-describedby={
            endpointError ? 'sync-endpoint-error' : 'sync-endpoint-hint'
          }
          aria-invalid={endpointError ? true : undefined}
          className={inputClass}
        />
        {endpointError && (
          <p
            id="sync-endpoint-error"
            className="mt-1 flex items-start gap-1.5 text-xs text-red-700 dark:text-red-400"
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>{endpointError}</span>
          </p>
        )}
      </div>

      {/* Token ------------------------------------------------------- */}
      <div>
        <label htmlFor="sync-token" className="block text-sm font-semibold mb-1">
          Token{' '}
          <span className="font-normal text-slate-500 dark:text-slate-400">
            (optional)
          </span>
        </label>
        <p id="sync-token-hint" className="text-xs text-slate-500 dark:text-slate-400 mb-2">
          If you set a token when you deployed the worker, put the same value
          here. It has to match exactly or the endpoint will refuse every
          request. Leave it empty if you did not set one.
        </p>
        <input
          id="sync-token"
          type="password"
          autoComplete="off"
          spellCheck={false}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          aria-describedby="sync-token-hint"
          className={inputClass}
        />
      </div>

      {/* Sync key ---------------------------------------------------- */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <KeyRound
            className="w-4 h-4 text-blue-600 dark:text-blue-400"
            aria-hidden="true"
          />
          <h3 className="text-sm font-semibold">Sync key</h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          This is the secret that encrypts your data. It never reaches the
          endpoint &mdash; the server only ever holds an anonymous id and a block
          of ciphertext it cannot read.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          role="group"
          aria-label="Where the sync key comes from"
        >
          <button
            type="button"
            onClick={() => {
              setKeyMode('new');
              setKeyError(null);
            }}
            aria-pressed={keyMode === 'new'}
            className={
              'text-left rounded-xl border p-4 min-h-[44px] transition ' +
              (keyMode === 'new'
                ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:border-blue-400 ring-1 ring-blue-600 dark:ring-blue-400'
                : 'border-slate-200 dark:border-slate-800 hover:border-blue-400')
            }
          >
            <div className="flex items-center justify-between gap-2">
              <KeyRound
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                aria-hidden="true"
              />
              {keyMode === 'new' && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  Selected
                </span>
              )}
            </div>
            <div className="mt-2 font-semibold text-sm">This is my first device</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Make a brand new key here.
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              setKeyMode('existing');
              setKeyError(null);
            }}
            aria-pressed={keyMode === 'existing'}
            className={
              'text-left rounded-xl border p-4 min-h-[44px] transition ' +
              (keyMode === 'existing'
                ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:border-blue-400 ring-1 ring-blue-600 dark:ring-blue-400'
                : 'border-slate-200 dark:border-slate-800 hover:border-blue-400')
            }
          >
            <div className="flex items-center justify-between gap-2">
              <Smartphone
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                aria-hidden="true"
              />
              {keyMode === 'existing' && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  Selected
                </span>
              )}
            </div>
            <div className="mt-2 font-semibold text-sm">
              I already have a key
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Paste it from your other device.
            </div>
          </button>
        </div>

        {keyMode === 'new' ? (
          <div className="mt-3">
            {!generatedKey ? (
              <button
                type="button"
                onClick={() => {
                  setGeneratedKey(generateSyncKey());
                  setKeyError(null);
                  setCopyFailed(false);
                }}
                className={secondaryButtonClass}
              >
                <KeyRound className="w-4 h-4" aria-hidden="true" />
                Generate a key
              </button>
            ) : (
              <div className="rounded-lg border border-amber-300 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle
                    className="w-4 h-4 text-amber-700 dark:text-amber-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                    Save this key now
                  </h4>
                </div>
                <p className="font-mono text-base sm:text-lg font-semibold tracking-wider break-all text-slate-900 dark:text-slate-100 select-all">
                  {generatedKey}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => void copyToClipboard(generatedKey, 'setup')}
                    className={secondaryButtonClass}
                  >
                    {copied === 'setup' ? (
                      <Check className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4" aria-hidden="true" />
                    )}
                    {copied === 'setup' ? 'Copied' : 'Copy key'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setGeneratedKey(generateSyncKey());
                      setCopied(null);
                    }}
                    className={secondaryButtonClass}
                  >
                    <RefreshCw className="w-4 h-4" aria-hidden="true" />
                    Generate a different one
                  </button>
                </div>
                {copyFailed && (
                  <p className="mt-2 text-xs text-amber-900 dark:text-amber-200">
                    This browser blocked the copy. Select the key above and copy
                    it by hand.
                  </p>
                )}
                <p className="mt-3 text-sm text-amber-900 dark:text-amber-100/90">
                  Write it down or put it in a password manager before you
                  continue. It is the only thing that can decrypt your synced
                  progress, it is not stored anywhere but on your devices, and
                  nobody &mdash; including whoever runs the endpoint &mdash; can
                  recover it for you. Lose it and the stored copy is permanently
                  unreadable.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-3">
            <label
              htmlFor="sync-key-input"
              className="block text-sm font-semibold mb-1"
            >
              Key from your first device
            </label>
            <input
              id="sync-key-input"
              type="text"
              autoComplete="off"
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
              // Built from the real length rather than typed out: a hand-written
              // placeholder had one group too many, which tells someone
              // checking their key against it that a correct key is wrong.
              placeholder={formatSyncKey('X'.repeat(keyCharCount()))}
              value={pastedKey}
              onChange={(e) => {
                setPastedKey(e.target.value);
                if (keyError) setKeyError(null);
              }}
              onBlur={(e) => {
                const raw = e.target.value.trim();
                if (!raw) {
                  setPastedKey('');
                  setKeyError(null);
                  return;
                }
                const normalised = normaliseKey(raw);
                setPastedKey(normalised);
                setKeyError(keyProblem(normalised, 'existing'));
              }}
              aria-describedby={keyError ? 'sync-key-error' : undefined}
              aria-invalid={keyError ? true : undefined}
              className={inputClass + ' font-mono tracking-wider'}
            />
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Open this page on the device that already syncs, reveal the key
              there and copy it across. Use the same endpoint URL on both.
            </p>
          </div>
        )}

        {keyError && (
          <p
            id="sync-key-error"
            className="mt-2 flex items-start gap-1.5 text-xs text-red-700 dark:text-red-400"
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>{keyError}</span>
          </p>
        )}
      </div>

      {saveError && (
        <p
          role="alert"
          className="flex items-start gap-2 text-sm rounded-lg px-3 py-2 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>{saveError}</span>
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button type="submit" className={primaryButtonClass}>
          <Cloud className="w-4 h-4" aria-hidden="true" />
          Save and sync now
        </button>
        <button
          type="button"
          onClick={() => {
            setShowForm(false);
            resetForm();
          }}
          className={secondaryButtonClass}
        >
          Cancel
        </button>
      </div>
    </form>
  );

  /* ------------------------------------------------------------------ */
  /* Page                                                                */
  /* ------------------------------------------------------------------ */

  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold">Sync</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Optional, off by default, and pointed at an endpoint you own.
        </p>
      </header>

      {!config ? (
        <>
          {/* ---------------- Not configured ---------------- */}
          <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
            <div className="flex items-center gap-2 mb-2">
              <CloudOff
                className="w-5 h-5 text-slate-500 dark:text-slate-400"
                aria-hidden="true"
              />
              <h2 className="font-semibold text-lg">Sync is off</h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Nothing you do in this app leaves this device. Your answers, topics
              read and mock attempts sit in this browser&rsquo;s local storage and
              are never sent anywhere. That stays true unless you deliberately
              turn sync on below.
            </p>
          </section>

          <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
            <h2 className="font-semibold text-lg mb-3">What sync would do</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Smartphone
                  className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-semibold">
                    Keep a phone and a laptop in step
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Answer questions on the train, open the laptop at home and
                    the progress is already there. Devices merge rather than
                    overwrite, so work done on either side survives and syncing
                    twice changes nothing.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck
                  className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-semibold">
                    Encrypted before it leaves the device
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    A sync key generated here is split locally into an anonymous
                    storage id and an encryption key. Only the id and the
                    ciphertext are ever uploaded. The encryption key never goes
                    anywhere, so the endpoint holds a block it cannot read.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Cloud
                  className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-semibold">
                    What it costs you: your own endpoint
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    There is no server to sign up for here. You deploy a small
                    worker to your own Cloudflare account &mdash; it runs on the
                    free plan and takes a few minutes &mdash; and paste its URL
                    in. That is real setup work, and it is the honest price of
                    the app not holding your data.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4">
              <div className="flex items-center gap-2 mb-1">
                <Info
                  className="w-4 h-4 text-slate-600 dark:text-slate-400 flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-sm font-semibold">
                  Why there is no ready-made server
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                This app is free and its source is public. A shared endpoint
                would funnel every stranger&rsquo;s study record into
                infrastructure one maintainer pays for and answers for, and
                anyone could exhaust its quota. Handing you the worker instead
                keeps your data yours and the app free.
              </p>
            </div>

            <a
              href={WORKER_README_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={'mt-4 ' + secondaryButtonClass}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Deployment steps (sync-worker/README.md)
            </a>
          </section>

          {!showForm && (
            <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className={primaryButtonClass + ' w-full sm:w-auto'}
              >
                <Cloud className="w-4 h-4" aria-hidden="true" />
                Set up sync
              </button>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                Not worth the trouble? Export a progress file on the{' '}
                <Link
                  to="/progress"
                  className="font-medium text-blue-700 dark:text-blue-300 underline underline-offset-2"
                >
                  Progress page
                </Link>{' '}
                and import it on the other device. Same merge, no server, no
                setup.
              </p>
            </section>
          )}

          {showForm && setupForm}
        </>
      ) : (
        <>
          {/* ---------------- Configured ---------------- */}
          <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Cloud
                className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
              <h2 className="font-semibold text-lg">Sync is on</h2>
            </div>

            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Endpoint
                </dt>
                <dd className="font-mono text-xs sm:text-sm break-all text-slate-800 dark:text-slate-200">
                  {config.endpoint}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Token
                </dt>
                <dd className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  {config.token ? (
                    <>
                      <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                      <span>Set (hidden)</span>
                    </>
                  ) : (
                    <>
                      <Info className="w-4 h-4" aria-hidden="true" />
                      <span>None</span>
                    </>
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Last synced
                </dt>
                <dd className="text-slate-800 dark:text-slate-200">
                  {describeWhen(config.lastSyncedAt)}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => void runSync('manual')}
              disabled={syncing}
              className={'mt-4 w-full sm:w-auto ' + primaryButtonClass}
            >
              <RefreshCw
                className={'w-4 h-4' + (syncing ? ' animate-spin' : '')}
                aria-hidden="true"
              />
              {syncing ? 'Syncing…' : 'Sync now'}
            </button>

            {statusLine}

            {nothingStored && (
              <p className="mt-2 flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  There was nothing stored under this key yet, which is normal
                  for the first device. If another device is already syncing and
                  this keeps saying so, the two are not using the same key and
                  endpoint &mdash; compare them character by character.
                </span>
              </p>
            )}

            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              This page also syncs quietly when you open it and when you come
              back to the tab, at most once a minute. A sync that fails changes
              nothing on this device.
            </p>
          </section>

          {/* Sync key ------------------------------------------------- */}
          <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
            <div className="flex items-center gap-2 mb-1">
              <KeyRound
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                aria-hidden="true"
              />
              <h2 className="font-semibold text-lg">Your sync key</h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              Enter this on another device, with the same endpoint, to join it to
              the same record. Treat it like a password: anyone holding it can
              read and overwrite your synced progress.
            </p>

            <p
              className="font-mono text-base sm:text-lg font-semibold tracking-wider break-all text-slate-900 dark:text-slate-100 select-all"
              aria-label={
                revealSavedKey ? 'Sync key, visible' : 'Sync key, hidden'
              }
            >
              {revealSavedKey ? config.syncKey : maskKey(config.syncKey)}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setRevealSavedKey((v) => !v)}
                aria-pressed={revealSavedKey}
                className={secondaryButtonClass}
              >
                {revealSavedKey ? (
                  <EyeOff className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Eye className="w-4 h-4" aria-hidden="true" />
                )}
                {revealSavedKey ? 'Hide key' : 'Show key'}
              </button>
              <button
                type="button"
                onClick={() => void copyToClipboard(config.syncKey, 'saved')}
                className={secondaryButtonClass}
              >
                {copied === 'saved' ? (
                  <Check className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Copy className="w-4 h-4" aria-hidden="true" />
                )}
                {copied === 'saved' ? 'Copied' : 'Copy key'}
              </button>
            </div>
            {copyFailed && (
              <p className="mt-2 flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  This browser blocked the copy. The key is shown above &mdash;
                  select and copy it by hand.
                </span>
              </p>
            )}
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              Do not paste it into a chat, an email or a progress export. It is
              not stored anywhere except on your devices and cannot be recovered
              if you lose it.
            </p>
          </section>

          {/* Disconnect ----------------------------------------------- */}
          <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
            <h2 className="font-semibold mb-2">Disconnect</h2>
            {!confirmDisconnect ? (
              <>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Stop syncing from this device. Your progress here is untouched,
                  and the encrypted copy stays on your endpoint until you delete
                  it there.
                </p>
                <button
                  type="button"
                  onClick={() => setConfirmDisconnect(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-white dark:bg-slate-900 border border-red-300 dark:border-red-900 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 min-h-[44px]"
                >
                  <Trash2 className="w-4 h-4" aria-hidden="true" />
                  Disconnect sync
                </button>
              </>
            ) : (
              <>
                <p className="flex items-start gap-2 text-sm rounded-lg px-3 py-2 mb-3 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200">
                  <AlertCircle
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>
                    This removes the endpoint, the token and the sync key from
                    this device. If the key is not written down somewhere else
                    you will not be able to reconnect, and the stored copy stays
                    encrypted with a key nobody has.
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={disconnect}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 min-h-[44px]"
                  >
                    <Trash2 className="w-4 h-4" aria-hidden="true" />
                    Yes, disconnect
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmDisconnect(false)}
                    className={secondaryButtonClass}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </section>
        </>
      )}
    </div>
  );
}
