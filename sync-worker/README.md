# Sync worker

A small Cloudflare Worker that lets the [Series 65 Study Hub](../README.md) carry your progress between devices — your phone on the train, your laptop in the evening — without anyone else's server in the middle.

Sync is **off by default**, and the app ships **no default endpoint**. That is deliberate. A shared server would mean every stranger's study record flowed into infrastructure one person pays for and answers for, and anyone could exhaust its quota. So if you want sync, you run this yourself. It takes about five minutes, needs no programming, and on Cloudflare's free plan it costs nothing.

If you never do this, nothing ever leaves your device.

## What this stores

Ciphertext, under an opaque identifier. Nothing else.

Your sync key is generated in the browser and never sent anywhere. Everything is derived from it locally:

```
sync key (128 random bits, shown to you)
     |
     +-- HKDF "id"  --> storage id   (sent to this worker; 64 hex characters)
     +-- HKDF "enc" --> AES-GCM key  (never leaves your browser)
```

So a stored record is a filename this worker cannot invert and a blob it cannot read:

```json
{ "v": 1, "iv": "0FAxs3yTZqrLl0Ln", "ct": "kN2r…several kilobytes of AES-GCM…" }
```

The worker never sees your sync key, your answers or your scores. It cannot decrypt anything, and neither can Cloudflare, and neither can anyone who obtains the whole KV namespace — they would have a set of unlabelled ciphertexts. This is not a promise about the worker being written carefully; it is a consequence of the worker never receiving the key.

What it does not hide, and it would be dishonest not to say so:

- **Metadata.** Every request is an ordinary HTTPS request, so Cloudflare's edge sees your IP address, your user agent, and when you synced — the same things any web server sees. This worker does not read or store any of it, and `[observability]` is commented out in `wrangler.toml` so request logs are off by default, but the platform still handles it.
- **The id links your devices.** The storage id is the same 64 hex characters on every device using that sync key. Anyone who can watch the traffic to your worker can tell that two devices are the same person's, without learning anything about what they are studying.
- **Size and timing.** The ciphertext length roughly tracks how much you have studied, and the write times say when.

If that matters to you, the Export button and a USB stick are a genuinely better answer than any sync endpoint, including this one.

The flip side is that **losing your sync key means losing the synced record.** There is no reset link, because there is nobody who could honour one. Keep the key in your password manager, and keep using the app's Export button — a progress file is the backup that does not depend on any of this.

## Before you start

- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free)
- [Node.js](https://nodejs.org) 18 or newer, so you can run `npx`
- This directory, from a clone of the repository

Every command below runs from inside `sync-worker/`.

## Deploy

### 1. Log in

```bash
npx wrangler login
```

A browser window opens and asks you to authorise Wrangler, Cloudflare's command-line tool. `npx` fetches it on demand, so there is nothing to install first.

### 2. Pick a name (optional)

`wrangler.toml` names the worker `series65-sync`, which becomes part of its URL. Change the `name` line if you would rather it were called something else, or leave it.

### 3. Create the storage

```bash
npx wrangler kv namespace create SYNC_KV
```

It prints something like:

```
🌀 Creating namespace with title "series65-sync-SYNC_KV"
✨ Success!
Add the following to your configuration file:
[[kv_namespaces]]
binding = "SYNC_KV"
id = "3f8b1c2d4e5f6a7b8c9d0e1f2a3b4c5d"
```

Copy that `id` value into `wrangler.toml`, replacing `PASTE_YOUR_KV_NAMESPACE_ID_HERE`. Leave `binding = "SYNC_KV"` exactly as it is — the worker looks for that name.

*(On Wrangler older than v3.60 the command is `wrangler kv:namespace create SYNC_KV`, with a colon.)*

### 4. Deploy

```bash
npx wrangler deploy
```

It prints the URL:

```
Uploaded series65-sync (1.2 sec)
Published series65-sync (0.5 sec)
  https://series65-sync.your-subdomain.workers.dev
```

That URL is your endpoint. Copy it.

Right now the worker is **open** — no token is set yet, so anyone who learns that URL can use it. Step 5 closes it.

### 5. Set a token

```bash
npx wrangler secret put SYNC_TOKEN
```

It prompts for a value. Paste a long random string — your password manager's generator is ideal, 32 characters or more. You will need it again in step 6, so save it there now. Do not just press enter: an empty value counts as no token at all, and the worker stays open.

Secrets attach to a Worker that already exists, which is why this comes after the deploy rather than before it. Setting one takes effect within a few seconds — there is nothing to redeploy.

This is what stops strangers using your worker. Storing it as a *secret* rather than a var means it is encrypted at rest and never lands in `wrangler.toml`, which is checked into a public repository.

You can skip this step; see [Running without a token](#running-without-a-token) for exactly what that costs you. If you do skip it, run the smoke test below anyway — it is the only thing that will tell you which state your worker is actually in.

### 6. Connect the app

In the Study Hub, open the app's **Sync** settings and:

1. Paste the endpoint URL.
2. Paste the token from step 5.
3. Generate a sync key. Write it down or save it to your password manager.
4. Sync.

Then on your second device, enter the **same** endpoint, the **same** token and the **same** sync key, and sync. The two records merge: answers and topics read from both devices survive, and syncing repeatedly, in any order, from any device, converges on the same result rather than ping-ponging.

Two caveats worth knowing before the first sync, rather than after:

- **Mock history is capped at 50 attempts in total**, not 50 per device. If both devices carry a long history, the merged record keeps the 50 most recent and the rest are gone. Export from each device first if you want them.
- **The merge resolves answers by timestamp**, so a device whose clock is badly wrong will win or lose arguments it should not. Check the clock on both devices is right before you connect them.

Theme and font size stay local to each device on purpose — dark on the phone and light on the desktop is a reasonable thing to want.

## Check it works

Do run this. It takes ten seconds and it is the only check that distinguishes a worker that is protected from one that is wide open — they look identical from the app, and both sync perfectly happily.

Both commands ask for a record that does not exist. Set your URL once:

```bash
URL=https://series65-sync.your-subdomain.workers.dev/$(printf 'a%.0s' {1..64})
```

**Positive test — your token is accepted:**

```bash
curl -s -o /dev/null -w '%{http_code}\n' "$URL" -H "Authorization: Bearer YOUR_TOKEN"
```

Expect `404`: the worker is up, your token was accepted, and nothing is stored under that id yet.

**Negative test — no token is rejected:**

```bash
curl -s -o /dev/null -w '%{http_code}\n' "$URL"
```

Expect `401`.

> **If the negative test also prints `404`, your worker is open to the internet.** `SYNC_TOKEN` is not set — step 5 was skipped, was answered with an empty value, or was run against a different worker name. The positive test alone cannot catch this, because a worker with no token configured returns `404` to *every* request, including one carrying a token it has never heard of. Go back to step 5 and re-run both commands.

Other useful signals:

| You see | It means |
|---|---|
| `401` on the positive test | The token does not match what you set in step 5. Re-run it, or check what you pasted into the app. |
| `400` | The id was not 64 lowercase hex characters. Check you copied the whole `printf`. On a worker with no token set, the bare URL in a browser gives this too. |
| `401` from a browser on the bare URL | Expected, not a fault. Authentication is checked before the path is, so a browser — which sends no `Authorization` header — is turned away before the worker ever looks at the id. |
| `405` | The worker only answers `GET`, `HEAD`, `PUT` and `OPTIONS`. |
| A Cloudflare error page | The deploy did not finish. Re-run `npx wrangler deploy` and read the output. |
| *Could not decrypt* in the app | The sync key on this device is not the one the record was written with — or the stored record was overwritten by something else. Check the key first; if it is right, delete the record (see Housekeeping) and sync again from a device that has your progress. |

The token appears in your shell history in the positive test. `history -d` it, or put a space before the command if your shell is set to ignore those.

## Running without a token

If you never set `SYNC_TOKEN` — or set it to an empty value — the worker runs open. Be clear about what that does and does not mean.

**Still true without a token:** your data stays encrypted. Nobody reading the storage can decrypt it, and no request to your worker can make it decrypt anything, because it has never held the key. Nor can anyone find your record by guessing: the id is a specific 64-hex string, and the app derives it from a 128-bit random sync key, so both hitting your stored id and working backwards from an id you have exposed are out of reach.

**No longer true:**

- **Your quota is anyone's.** Whoever learns the URL can hammer the endpoint until the free daily limit is gone, and your own sync stops working until the counter resets. The 1,000 KV writes per day are the cheap thing to exhaust.
- **Your namespace is free storage.** Every 64-hex id is a slot a stranger can `PUT` a megabyte into, up to the 1 GB allowance, on your account and in your name.
- **Encrypted is not the same as safe.** If your id ever leaks — a screenshot of a devtools network tab, a shared browser profile, a proxy log at work — anyone holding it can overwrite your record with a blob that will never decrypt. The worker checks that a body is shaped like an envelope; it cannot check that it is *your* envelope, because that would require the key. You would lose the synced copy and see *Could not decrypt* on every sync until you deleted the record. Your local progress on each device survives, which is the real backstop, but the synced copy is gone.

A token is one command and removes that entire category of problem. Set one, and verify it with the negative test above.

## Restricting where it can be called from

By default the worker sends `Access-Control-Allow-Origin: *`, so the app works from GitHub Pages, from `localhost` during development, and from your own static host without further configuration.

To narrow it, uncomment the `[vars]` block in `wrangler.toml`:

```toml
[vars]
ALLOWED_ORIGIN = "https://rivendale.github.io"
```

and redeploy. Only that origin gets CORS headers; a comma-separated list works for more than one.

Worth understanding what this actually buys: CORS is enforced by *browsers*. It stops some other web page from calling your worker using a visitor's browser. It does nothing about a direct request from a script. It is a useful narrowing, not a lock — the token is the lock.

## Free-tier limits

At the time of writing, Cloudflare's free plan gives you:

| | Free plan |
|---|---|
| Worker requests | 100,000 / day |
| CPU time | 10 ms per request (this worker uses a fraction of that) |
| KV reads | 100,000 / day |
| KV writes | 1,000 / day |
| KV storage | 1 GB |
| Max stored value | 25 MB |

One sync is one read plus one write, so the 1,000 daily writes are the real ceiling: roughly a thousand syncs a day across all your devices. A full study record — every answer, every mock attempt — is a few tens of kilobytes, against a 1 GB allowance.

In other words, one person studying for an exam will not come close to any of these. Check [Cloudflare's current pricing](https://developers.cloudflare.com/workers/platform/pricing/) if you want to be sure; these numbers do drift.

## Housekeeping

**Records expire.** Every write sets a 400-day TTL, so a namespace you abandon after the exam empties itself rather than holding your record forever. Any sync resets the clock.

**See what is stored** — useful for confirming a delete, or for spotting that somebody else has been writing to an open worker:

```bash
npx wrangler kv key list --binding SYNC_KV
```

You should see exactly one id per sync key you use. More than that on a worker only you use means either an old key you rotated away from, or a stranger.

**Delete a record now** — this is also the fix for a record that will no longer decrypt:

```bash
npx wrangler kv key delete --binding SYNC_KV "<the 64-hex id>"
```

Deleting the stored record does not touch the progress on your devices. The next sync from a device that still has your progress writes a fresh record.

**Delete everything**, including the storage:

```bash
npx wrangler delete                       # remove the worker
npx wrangler kv namespace delete --binding SYNC_KV
```

**Rotate the token:** re-run `npx wrangler secret put SYNC_TOKEN`, then update the token in each device's sync settings. The new value takes effect within seconds and there is nothing to redeploy — which also means every device is rejected until you update it, so do them promptly.

**Change your sync key:** generate a new one in the app and sync each device with it. The old record stays under the old id until its TTL expires; delete it with the command above if you want it gone sooner.

## How it behaves

For anyone reading `worker.js` before running it:

| Request | Response |
|---|---|
| `GET /{id}` | `200` with the stored envelope, or `404` if nothing is stored |
| `HEAD /{id}` | as `GET`, without the body |
| `PUT /{id}` | `200` once stored, with a 400-day TTL |
| `OPTIONS /{id}` | `204` CORS preflight, no token required (browsers do not send one on preflight) |
| Any other method | `405` with an `Allow` header |
| Missing or wrong token, when `SYNC_TOKEN` is set | `401` |
| Id that is not 64 lowercase hex characters | `400` |
| Body over 1 MB | `413`, checked both against `Content-Length` and while reading, so a false header does not get past |
| Body that is not `{ v: 1, iv, ct }` | `400` |

Checks run in that order, and the order is the point: the token is checked **before** the path is looked at, so a caller without one cannot use the difference between `400` and `404` to learn which ids exist or what the worker considers well-formed. It is also why an unauthenticated browser hitting the bare URL sees `401` rather than `400`.

The worker stores a value rebuilt from those three fields, so anything else attached to the JSON is dropped rather than saved. What it cannot check is that a well-formed envelope is *yours* — that would take the key, which it does not have. See [Running without a token](#running-without-a-token).

Token comparison is constant-time: both sides are HMAC'd with a random per-isolate key before comparison, so the values compared are always 32 unpredictable bytes and neither the length nor the position of a mismatch is observable in the response time. A missing header, a malformed one and a wrong token all take the identical path.

It is a few hundred lines, most of them comments, with no dependencies and no build step, and every branch is one you can read in a sitting. That is the intent — this is a thing you are trusting with a record of your studying, so it should be small enough to check.
