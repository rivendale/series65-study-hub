import type { Progress } from '../hooks/useProgress';
import { mergeProgress, parseProgressFile } from './mergeProgress';
import {
  deriveKeys,
  encryptPayload,
  decryptPayload,
  isValidSyncKey,
  type SyncEnvelope,
} from './syncCrypto';

/**
 * Optional cross-device sync against an endpoint the user supplies.
 *
 * This app is public and its repository is public, so it deliberately ships no
 * default endpoint. A shared server would mean every stranger's study record
 * flowed to infrastructure somebody else pays for and is answerable for, and
 * anyone could exhaust the quota. Instead the repository carries a small worker
 * under sync-worker/ that a user deploys to their own account in a couple of
 * minutes, and pastes the URL in here.
 *
 * With sync switched off — the default — nothing leaves the device at all.
 */

const CONFIG_KEY = 'series65_sync_config';

export interface SyncConfig {
  /** Base URL of the user's own deployed worker. */
  endpoint: string;
  /** Optional bearer token, if they set one when deploying. */
  token?: string;
  /** The shared secret. Everything cryptographic derives from this. */
  syncKey: string;
  /** Epoch millis of the last successful sync, for display only. */
  lastSyncedAt?: number;
}

/**
 * Sync configuration is stored separately from progress, and deliberately so:
 * the progress export is a file people hand between devices and could paste
 * into a chat window. If the sync key travelled inside it, sharing a progress
 * file would hand over the ability to read and overwrite the synced record.
 */
export function loadSyncConfig(): SyncConfig | null {
  try {
    const raw = window.localStorage.getItem(CONFIG_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SyncConfig;
    if (typeof parsed?.endpoint !== 'string' || typeof parsed?.syncKey !== 'string') {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveSyncConfig(config: SyncConfig): void {
  window.localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
}

export function clearSyncConfig(): void {
  window.localStorage.removeItem(CONFIG_KEY);
}

export function validateEndpoint(endpoint: string): string | null {
  let url: URL;
  try {
    url = new URL(endpoint);
  } catch {
    return 'That does not look like a URL.';
  }
  // Anything but HTTPS would put the bearer token on the wire in clear text,
  // and WebCrypto is unavailable outside a secure context anyway.
  if (url.protocol !== 'https:' && url.hostname !== 'localhost') {
    return 'The endpoint must use https (localhost is allowed for testing).';
  }
  return null;
}

export type SyncOutcome =
  | { status: 'ok'; merged: Progress; message: string; pulled: boolean }
  | { status: 'offline'; message: string }
  | { status: 'error'; message: string };

function endpointFor(config: SyncConfig, id: string): string {
  return `${config.endpoint.replace(/\/+$/, '')}/${id}`;
}

function authHeaders(config: SyncConfig): Record<string, string> {
  return config.token ? { Authorization: `Bearer ${config.token}` } : {};
}

const TIMEOUT_MS = 15000;

async function fetchWithTimeout(url: string, init: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Pull, merge, then push the merged result.
 *
 * Pushing back after merging is what makes devices converge rather than
 * ping-pong: whichever device syncs last uploads a record containing both
 * sides, so a third device gets everything in one pull.
 *
 * The merge is what makes this safe to run at any time. A pull can only ever
 * add to what is on this device, so an interrupted or repeated sync cannot
 * destroy local work.
 */
export async function syncNow(
  config: SyncConfig,
  local: Progress,
  serializeLocal: () => string
): Promise<SyncOutcome> {
  if (!isValidSyncKey(config.syncKey)) {
    return { status: 'error', message: 'That sync key is not valid.' };
  }
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return {
      status: 'offline',
      message: 'You are offline. Your progress is saved on this device and will sync when you reconnect.',
    };
  }

  let id: string;
  let aesKey: CryptoKey;
  try {
    ({ id, aesKey } = await deriveKeys(config.syncKey));
  } catch (e) {
    return { status: 'error', message: e instanceof Error ? e.message : 'Could not derive keys.' };
  }

  // --- pull -------------------------------------------------------------
  let merged = local;
  let pulled = false;
  try {
    const res = await fetchWithTimeout(endpointFor(config, id), {
      method: 'GET',
      headers: authHeaders(config),
    });

    if (res.status === 401 || res.status === 403) {
      return { status: 'error', message: 'The endpoint rejected the token. Check the token in your sync settings.' };
    }
    if (res.ok) {
      // A 200 carrying something other than JSON means we are talking to the
      // wrong thing — a captive portal, a static file server, the site root
      // rather than the worker. Letting that fall through to the network catch
      // below would tell the user they are offline while they are online and
      // their endpoint is simply misconfigured.
      let envelope: SyncEnvelope;
      try {
        envelope = (await res.json()) as SyncEnvelope;
      } catch {
        return {
          status: 'error',
          message:
            'The endpoint replied, but not with sync data. Check that the URL points at your deployed worker rather than at a website.',
        };
      }
      const plaintext = await decryptPayload(envelope, aesKey);
      const parsed = parseProgressFile(plaintext);
      if (!parsed.ok || !parsed.progress) {
        return { status: 'error', message: parsed.error ?? 'The stored record could not be read.' };
      }
      merged = mergeProgress(local, parsed.progress);
      pulled = true;
    } else if (res.status !== 404) {
      return { status: 'error', message: `The endpoint returned ${res.status}.` };
    }
    // A 404 simply means nothing has been stored under this key yet, which is
    // the expected state on the very first sync.
  } catch (e) {
    if (e instanceof DOMException && e.name === 'AbortError') {
      return { status: 'error', message: 'The endpoint did not respond in time.' };
    }
    if (e instanceof Error && e.message.includes('decrypt')) {
      return { status: 'error', message: e.message };
    }
    return {
      status: 'offline',
      message: 'Could not reach the sync endpoint. Your progress is safe on this device.',
    };
  }

  // --- push -------------------------------------------------------------
  try {
    // Serialize the merged record rather than the pre-merge local one, so the
    // uploaded copy is the union of both devices.
    const payload = pulled ? JSON.stringify(merged) : serializeLocal();
    const envelope = await encryptPayload(payload, aesKey);
    const res = await fetchWithTimeout(endpointFor(config, id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...authHeaders(config) },
      body: JSON.stringify(envelope),
    });
    if (res.status === 401 || res.status === 403) {
      return { status: 'error', message: 'The endpoint rejected the token when saving.' };
    }
    if (res.status === 413) {
      return { status: 'error', message: 'The endpoint rejected the upload as too large.' };
    }
    if (!res.ok) {
      return { status: 'error', message: `The endpoint returned ${res.status} when saving.` };
    }
  } catch {
    return {
      status: 'error',
      message: 'Pulled changes merged locally, but saving back to the endpoint failed.',
    };
  }

  // On a first sync there is nothing to pull, which is indistinguishable from a
  // worker that answers 404 to everything — a missing KV binding, or a URL with
  // a path the worker does not route. Both look like success forever, silently
  // storing nothing. One read-back settles it, and only on the first sync.
  if (!pulled) {
    try {
      const check = await fetchWithTimeout(endpointFor(config, id), {
        method: 'GET',
        headers: authHeaders(config),
      });
      if (check.status === 404) {
        return {
          status: 'error',
          message:
            'The endpoint accepted the upload but does not return it, so nothing is actually being stored. Check that the worker has its KV namespace bound.',
        };
      }
    } catch {
      // The write already succeeded; a failed verification read is not itself a
      // reason to report failure.
    }
  }

  return {
    status: 'ok',
    merged,
    pulled,
    message: pulled
      ? 'Synced. Progress from your other devices has been merged in.'
      : 'Synced. This device now holds the copy of record.',
  };
}
