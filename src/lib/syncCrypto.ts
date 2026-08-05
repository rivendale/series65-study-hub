/**
 * End-to-end encryption for optional cross-device sync.
 *
 * The design goal is that enabling sync does not require trusting the endpoint.
 * A sync key is generated on one device and typed into the others; everything
 * else is derived from it locally. The server only ever sees an opaque
 * identifier and a block of ciphertext, and cannot derive one from the other.
 *
 *   sync key (128 random bits, shown to the user)
 *        |
 *        +-- HKDF info "id"  --> storage id  (sent to the server)
 *        +-- HKDF info "enc" --> AES-GCM key (never sent anywhere)
 *
 * Because the two are derived through separate HKDF expansions, holding the id
 * reveals nothing about the encryption key. Someone who obtained the whole
 * server database would have a set of unlabelled ciphertexts.
 */

const HKDF_SALT = 'series65-study-hub/sync/v1';

/**
 * Crockford-style base32 without I, L, O and U. Those are the characters people
 * misread or mistype when copying a key between a laptop and a phone, which is
 * exactly the operation this encoding exists for.
 */
const ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

function base32Encode(bytes: Uint8Array): string {
  let bits = 0;
  let value = 0;
  let out = '';
  for (const b of bytes) {
    value = (value << 8) | b;
    bits += 8;
    while (bits >= 5) {
      out += ALPHABET[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += ALPHABET[(value << (5 - bits)) & 31];
  return out;
}

function base32Decode(input: string): Uint8Array {
  // Tolerate the formatting we hand out, plus the substitutions people make by
  // eye: O for zero, and I or L for one.
  const cleaned = input
    .toUpperCase()
    .replace(/[\s-]/g, '')
    .replace(/O/g, '0')
    .replace(/[IL]/g, '1');
  let bits = 0;
  let value = 0;
  const out: number[] = [];
  for (const ch of cleaned) {
    const idx = ALPHABET.indexOf(ch);
    if (idx === -1) throw new Error(`Invalid character in sync key: ${ch}`);
    value = (value << 5) | idx;
    bits += 5;
    if (bits >= 8) {
      out.push((value >>> (bits - 8)) & 255);
      bits -= 8;
    }
  }
  return new Uint8Array(out);
}

const KEY_BYTES = 16;

/** Formats as groups of four so it can be read aloud or typed without losing place. */
export function formatSyncKey(key: string): string {
  const raw = key.toUpperCase().replace(/[\s-]/g, '');
  return (raw.match(/.{1,4}/g) ?? []).join('-');
}

export function generateSyncKey(): string {
  const bytes = new Uint8Array(KEY_BYTES);
  crypto.getRandomValues(bytes);
  return formatSyncKey(base32Encode(bytes));
}

export function isValidSyncKey(key: string): boolean {
  try {
    return base32Decode(key).length >= KEY_BYTES;
  } catch {
    return false;
  }
}

function utf8(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

/**
 * WebCrypto wants a BufferSource backed by a plain ArrayBuffer. A Uint8Array
 * may be a view onto a SharedArrayBuffer, which the types rightly refuse, so
 * copy into a fresh buffer rather than casting the check away.
 */
function bytes(u: Uint8Array): ArrayBuffer {
  const out = new ArrayBuffer(u.byteLength);
  new Uint8Array(out).set(u);
  return out;
}

function toBase64(bytes: Uint8Array): string {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s);
}

function fromBase64(b64: string): Uint8Array {
  const s = atob(b64);
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
  return out;
}

export interface DerivedKeys {
  /** Opaque storage identifier. Safe to send to the endpoint. */
  id: string;
  /** AES-GCM key. Never leaves this device. */
  aesKey: CryptoKey;
}

/**
 * WebCrypto's subtle API is only available in a secure context. GitHub Pages is
 * HTTPS and localhost counts as secure, so this only bites on a plain-HTTP
 * self-hosted deployment — worth failing loudly rather than silently degrading
 * to no encryption.
 */
function requireSubtle(): SubtleCrypto {
  if (typeof crypto === 'undefined' || !crypto.subtle) {
    throw new Error(
      'Encrypted sync needs a secure context (HTTPS or localhost). This page is not one.'
    );
  }
  return crypto.subtle;
}

export async function deriveKeys(syncKey: string): Promise<DerivedKeys> {
  const subtle = requireSubtle();
  const raw = base32Decode(syncKey);
  if (raw.length < KEY_BYTES) throw new Error('Sync key is too short.');

  const master = await subtle.importKey('raw', bytes(raw), 'HKDF', false, [
    'deriveBits',
    'deriveKey',
  ]);

  const idBits = await subtle.deriveBits(
    { name: 'HKDF', hash: 'SHA-256', salt: bytes(utf8(HKDF_SALT)), info: bytes(utf8('id')) },
    master,
    256
  );
  const id = [...new Uint8Array(idBits)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  const aesKey = await subtle.deriveKey(
    { name: 'HKDF', hash: 'SHA-256', salt: bytes(utf8(HKDF_SALT)), info: bytes(utf8('enc')) },
    master,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );

  return { id, aesKey };
}

/** What actually travels to the endpoint. Both fields are opaque. */
export interface SyncEnvelope {
  v: 1;
  iv: string;
  ct: string;
}

export async function encryptPayload(
  plaintext: string,
  aesKey: CryptoKey
): Promise<SyncEnvelope> {
  const subtle = requireSubtle();
  // A fresh IV per write. AES-GCM fails catastrophically on IV reuse, and a
  // random 96-bit IV is the standard construction for that reason.
  const iv = new Uint8Array(12);
  crypto.getRandomValues(iv);
  const ct = await subtle.encrypt(
    { name: 'AES-GCM', iv: bytes(iv) },
    aesKey,
    bytes(utf8(plaintext))
  );
  return { v: 1, iv: toBase64(iv), ct: toBase64(new Uint8Array(ct)) };
}

export async function decryptPayload(
  envelope: SyncEnvelope,
  aesKey: CryptoKey
): Promise<string> {
  const subtle = requireSubtle();
  if (envelope?.v !== 1 || typeof envelope.iv !== 'string' || typeof envelope.ct !== 'string') {
    throw new Error('The stored sync record is not in a format this app understands.');
  }
  let plain: ArrayBuffer;
  try {
    plain = await subtle.decrypt(
      { name: 'AES-GCM', iv: bytes(fromBase64(envelope.iv)) },
      aesKey,
      bytes(fromBase64(envelope.ct))
    );
  } catch {
    // GCM authentication covers both a wrong key and a tampered payload, and
    // the two are indistinguishable here by design.
    throw new Error(
      'Could not decrypt. Either the sync key does not match the one used to save this data, or the stored record was altered.'
    );
  }
  return new TextDecoder().decode(plain);
}
