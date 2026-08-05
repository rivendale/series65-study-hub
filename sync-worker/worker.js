/**
 * Optional sync endpoint for the Series 65 Study Hub.
 *
 * This is a deliberately small Cloudflare Worker backed by Workers KV. It is
 * not deployed by the project: the app ships no default endpoint, because a
 * shared server would funnel every stranger's study record into infrastructure
 * one person pays for and answers for, and anyone could exhaust its quota. So
 * each user who wants sync deploys this to their own account and pastes the URL
 * into the app. With sync switched off — the default — nothing leaves the
 * device at all.
 *
 * The protocol is two routes over an opaque identifier:
 *
 *   GET  /{id}  -> 200 with the stored envelope, or 404 if nothing is stored
 *   PUT  /{id}  -> 200 once the envelope is stored
 *
 * HEAD is answered as GET without a body, so `curl -I` behaves.
 *
 * `id` is 64 lowercase hex characters, derived on the device by HKDF from the
 * user's sync key. The AES-GCM key is derived from the same sync key through a
 * separate HKDF expansion and never leaves the browser, so this worker holds
 * ciphertext it cannot read and an identifier it cannot invert. See
 * ../src/lib/syncCrypto.ts.
 *
 * Bindings:
 *   SYNC_KV         (required)  KV namespace holding the envelopes
 *   SYNC_TOKEN      (optional)  secret; when set, a matching bearer token is required
 *   ALLOWED_ORIGIN  (optional)  var; when set, only these origins get CORS headers
 *
 * Plain JavaScript, no build step, no dependencies.
 */

/** Exactly what deriveKeys() produces: a SHA-256 digest, lowercase hex. */
const ID_PATTERN = /^[0-9a-f]{64}$/;

/**
 * A full study record — every answer, every mock attempt — serialises to a few
 * tens of kilobytes, so a megabyte is generous. The cap exists so that a bug or
 * a hostile client cannot fill the KV namespace one large write at a time.
 */
const MAX_BODY_BYTES = 1024 * 1024;

/**
 * 400 days. Somebody who sits the exam and never comes back should not leave a
 * record in storage forever; somebody studying part-time over a year should
 * never notice this exists. Every successful write pushes the expiry out again.
 */
const KV_TTL_SECONDS = 400 * 24 * 60 * 60;

/** A v1 IV is 96 random bits, which is 16 base64 characters. Leave slack. */
const MAX_IV_CHARS = 64;

const BASE64_PATTERN = /^[A-Za-z0-9+/]+={0,2}$/;

const ALLOWED_METHODS = 'GET, HEAD, PUT, OPTIONS';

/* ------------------------------------------------------------------ */
/* CORS                                                                */
/* ------------------------------------------------------------------ */

/**
 * Permissive by default, because the user may be running the app from GitHub
 * Pages, from a local dev server, or from their own static host, and a worker
 * that only worked from one of those would mostly just generate confusing
 * failures.
 *
 * Setting ALLOWED_ORIGIN narrows it to a named origin (or a comma-separated
 * list). That is worth doing, but it is worth being honest about what it buys:
 * CORS is enforced by browsers, not by this worker. It stops another *web page*
 * from making requests on a visitor's behalf; it does nothing about curl. The
 * bearer token is the control that actually keeps strangers out.
 */
function corsHeaders(request, env) {
  const configured = String(env.ALLOWED_ORIGIN || '').trim();
  const headers = { Vary: 'Origin' };

  if (!configured) {
    headers['Access-Control-Allow-Origin'] = '*';
    return headers;
  }

  const allowed = configured
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const origin = request.headers.get('Origin');
  // No match means no Access-Control-Allow-Origin header at all, which is what
  // makes the browser refuse the response.
  if (origin && allowed.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function preflightResponse(cors) {
  return new Response(null, {
    status: 204,
    headers: {
      ...cors,
      'Access-Control-Allow-Methods': ALLOWED_METHODS,
      // Authorization has to be named explicitly: a wildcard in
      // Access-Control-Allow-Headers does not cover it.
      'Access-Control-Allow-Headers': 'Authorization, Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

function json(body, status, cors, extraHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // Nothing here should sit in a shared cache, even encrypted.
      'Cache-Control': 'no-store',
      // Stored values are only ever written by this worker, but the namespace
      // can also be written directly with `wrangler kv key put`. Refusing to
      // let a browser sniff a stored blob into some other content type costs
      // one header.
      'X-Content-Type-Options': 'nosniff',
      ...cors,
      ...extraHeaders,
    },
  });
}

/* ------------------------------------------------------------------ */
/* Authentication                                                      */
/* ------------------------------------------------------------------ */

/**
 * A random per-isolate HMAC key, used only to compare the presented token
 * against the configured one.
 *
 * Created lazily on the first request rather than at module scope, because
 * Workers refuses to generate randomness during global initialisation.
 */
let macKeyPromise = null;

function macKey() {
  if (!macKeyPromise) {
    const raw = crypto.getRandomValues(new Uint8Array(32));
    macKeyPromise = crypto.subtle
      .importKey('raw', raw, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
      // Do not cache a rejected promise. If the one-off import ever fails, a
      // cached rejection would make every subsequent request in this isolate
      // fail auth for the life of the isolate rather than just this one.
      .catch((e) => {
        macKeyPromise = null;
        throw e;
      });
  }
  return macKeyPromise;
}

async function mac(value) {
  const key = await macKey();
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return new Uint8Array(sig);
}

/**
 * Compare two secrets without leaking their contents through timing.
 *
 * The naive `presented === expected` returns as soon as it finds a differing
 * byte, and returns immediately when the lengths differ, which together let an
 * attacker recover a token a character at a time. Hashing both sides first with
 * a key the attacker cannot know fixes both halves of that: the values compared
 * are always 32 bytes regardless of input length, and their contents are
 * unpredictable, so the comparison reveals nothing about where or whether the
 * originals diverged.
 */
async function secretsMatch(presented, expected) {
  const [a, b] = await Promise.all([mac(presented), mac(expected)]);
  if (typeof crypto.subtle.timingSafeEqual === 'function') {
    return crypto.subtle.timingSafeEqual(a, b);
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

/**
 * If SYNC_TOKEN is bound to a non-empty value, a matching bearer token is
 * required. Otherwise the worker runs open: anyone who learns the URL *and* a
 * valid 64-hex id can read that record, overwrite it with a blob that will
 * never decrypt again, and spend the daily quota. They still cannot read the
 * plaintext, but "cannot read" is not "cannot destroy", so setting a token is
 * the documented default.
 *
 * An empty or whitespace-only SYNC_TOKEN counts as unset, because there is no
 * useful sense in which a caller could present it. That is a real trap — a
 * mistyped `wrangler secret put` leaves the worker open — so README.md's smoke
 * test includes a negative case that fails loudly when this happens.
 */
async function authorized(request, env) {
  const expected = typeof env.SYNC_TOKEN === 'string' ? env.SYNC_TOKEN : '';
  // Trimmed only to decide whether a token is configured at all. The comparison
  // below uses the untrimmed value, so a token that genuinely has surrounding
  // whitespace still matches what the app sends.
  if (!expected.trim()) return true;

  const header = request.headers.get('Authorization') || '';
  // RFC 7235: the auth-scheme is case-insensitive, so `bearer x` must be
  // accepted exactly as `Bearer x` is. Only the scheme is compared loosely; the
  // token itself stays byte-exact and goes through the constant-time path.
  // A missing or malformed header becomes the empty string and takes that same
  // path, so "no token" and "wrong token" are indistinguishable from outside.
  const presented = /^bearer /i.test(header) ? header.slice(7) : '';
  return secretsMatch(presented, expected);
}

/* ------------------------------------------------------------------ */
/* Request body                                                        */
/* ------------------------------------------------------------------ */

/**
 * Read the body, refusing to buffer more than `limit` bytes.
 *
 * Content-Length is checked separately by the caller, but it is only a claim by
 * the client and a chunked request need not send one at all. Counting while
 * reading is the check that actually holds, and it stops at the limit rather
 * than after materialising whatever arrived.
 */
async function readBodyCapped(request, limit) {
  if (!request.body) return { status: 'invalid' };

  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > limit) {
      await reader.cancel();
      return { status: 'too-large' };
    }
    chunks.push(value);
  }

  const joined = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    joined.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return { status: 'ok', text: new TextDecoder('utf-8', { fatal: true }).decode(joined) };
  } catch {
    return { status: 'invalid' };
  }
}

/**
 * The worker cannot read the ciphertext and does not try. What it can do is
 * refuse to store anything that is not the shape the app writes, so the KV
 * namespace cannot be repurposed as a general-purpose object store.
 *
 * The returned value is rebuilt field by field rather than passed through:
 * whatever else the caller attached to the JSON is dropped rather than stored.
 */
function parseEnvelope(text) {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    return null;
  }

  if (typeof data !== 'object' || data === null || Array.isArray(data)) return null;
  if (data.v !== 1) return null;
  if (typeof data.iv !== 'string' || typeof data.ct !== 'string') return null;
  if (data.iv.length === 0 || data.ct.length === 0) return null;
  if (data.iv.length > MAX_IV_CHARS) return null;
  if (!BASE64_PATTERN.test(data.iv) || !BASE64_PATTERN.test(data.ct)) return null;

  return { v: 1, iv: data.iv, ct: data.ct };
}

/* ------------------------------------------------------------------ */
/* Handler                                                             */
/* ------------------------------------------------------------------ */

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);

    // Preflight first, and without an auth check: browsers do not send
    // Authorization on a preflight, so requiring it here would block every
    // cross-origin request before the real one was ever made.
    if (request.method === 'OPTIONS') return preflightResponse(cors);

    // HEAD is handled exactly as GET, minus the body. Without this `curl -I`
    // — one shifted keystroke away from the `curl -i` in README.md — answers
    // 405 and reads like a broken deployment.
    const isHead = request.method === 'HEAD';
    const method = isHead ? 'GET' : request.method;

    if (method !== 'GET' && method !== 'PUT') {
      return json({ error: 'Method not allowed.' }, 405, cors, { Allow: ALLOWED_METHODS });
    }

    // Authentication is checked before the path, so an unauthenticated caller
    // learns nothing about which ids exist or what this worker considers valid.
    if (!(await authorized(request, env))) {
      return json({ error: 'Unauthorized.' }, 401, cors, { 'WWW-Authenticate': 'Bearer' });
    }

    const id = new URL(request.url).pathname.replace(/^\/+/, '').replace(/\/+$/, '');
    // Without this the worker is an arbitrary key-value store for whoever finds
    // it. The app only ever asks for 64 hex characters, so anything else is
    // either a bug or somebody probing.
    if (!ID_PATTERN.test(id)) {
      return json({ error: 'Invalid id. Expected 64 lowercase hex characters.' }, 400, cors);
    }

    if (!env.SYNC_KV) {
      return json(
        { error: 'This worker is misconfigured: no KV namespace is bound as SYNC_KV.' },
        500,
        cors
      );
    }

    if (method === 'GET') {
      const stored = await env.SYNC_KV.get(id, 'text');
      if (stored === null) {
        // The expected state before the first sync, and what the app treats as
        // "nothing here yet" rather than as an error.
        return json({ error: 'Not found.' }, 404, cors);
      }
      return new Response(isHead ? null : stored, {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
          'X-Content-Type-Options': 'nosniff',
          ...cors,
        },
      });
    }

    // --- PUT ---------------------------------------------------------
    const declaredLength = request.headers.get('Content-Length');
    if (declaredLength && Number(declaredLength) > MAX_BODY_BYTES) {
      return json({ error: 'Payload too large.' }, 413, cors);
    }

    const body = await readBodyCapped(request, MAX_BODY_BYTES);
    if (body.status === 'too-large') {
      return json({ error: 'Payload too large.' }, 413, cors);
    }
    if (body.status !== 'ok') {
      return json({ error: 'Body must be UTF-8 JSON.' }, 400, cors);
    }

    const envelope = parseEnvelope(body.text);
    if (!envelope) {
      return json({ error: 'Body must be a sync envelope: { v: 1, iv, ct }.' }, 400, cors);
    }

    await env.SYNC_KV.put(id, JSON.stringify(envelope), { expirationTtl: KV_TTL_SECONDS });

    return json({ ok: true }, 200, cors);
  },
};
