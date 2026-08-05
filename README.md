# Series 65 Study Hub

[![Deploy](https://github.com/rivendale/series65-study-hub/actions/workflows/deploy.yml/badge.svg)](https://github.com/rivendale/series65-study-hub/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/rivendale/series65-study-hub/pulls)

A free, open-source, mobile-first study companion for the NASAA **Series 65** (Uniform Investment Adviser Law) exam — plus a supplemental **CFP intro and advisor-skills track** for the parts of the job the exam does not test.

**Live demo:** https://rivendale.github.io/series65-study-hub/

## ⚠️ Disclaimer

This is an **unofficial, independent** study aid. It is not affiliated with, endorsed by, or sponsored by NASAA, FINRA, the SEC, the CFP Board, or any commercial exam-prep provider. All content is original, written from publicly available sources: the Uniform Securities Act model law, NASAA model rules and Statements of Policy, and the Investment Advisers Act of 1940 and rules thereunder. No actual exam questions appear here — Series 65 exam content is confidential to NASAA and FINRA.

The CFP and advisor-skills track is background material. It is **not tested on the Series 65**, is not CFP Board curriculum, and does not substitute for a registered CFP® education program.

This app is **not** legal, tax, compliance, investment, or examination advice. Securities laws and dollar thresholds change — verify current rules against primary sources before relying on anything here professionally.

## Exam structure (current as of 2026)

| | |
|---|---|
| Questions delivered | 140 (130 scored + 10 unscored pretest) |
| Time | 180 minutes |
| Passing score | 94 of 130 scored (72%) |
| Sponsorship | **Not required** — you can sit for the Series 65 without broker-dealer affiliation |
| Developed by | NASAA, administered through FINRA at Prometric |

Pretest questions are randomly distributed and unidentified. The mock exam here mirrors that: it delivers 140 questions and scores 130.

## NASAA content blueprint

| Category | Questions | Weight |
|---|---|---|
| Client Investment Recommendations and Strategies | 39 | 30% |
| Laws, Regulations, and Guidelines, incl. Prohibition on Unethical Business Practices | 39 | 30% |
| Investment Vehicle Characteristics | 32 | 25% |
| Economic Factors and Business Information | 20 | 15% |

Client Recommendations and Laws & Ethics are 60% of the exam between them. The app's study-plan panel and mock-exam sampling both follow this weighting.

## Features

- **46-topic curriculum** — 39 exam topics across the four NASAA categories, plus 7 supplemental CFP/advisor topics, each with pitfalls, key terms, common-confusion tables, and formulas
- **Blueprint-weighted mock exam** — 140 questions, 180-minute timer, scores 130, flag-for-review, full explanation review at the end
- **Topic quizzes** with immediate feedback
- **Missed-questions drill** — re-quiz only what you have gotten wrong, oldest first
- **Formulas page** — every calculation in the curriculum, searchable and grouped by topic
- **Cheat Sheet** — exam structure, blueprint, threshold table, most-tested rules
- **Glossary** — every key term across the curriculum, searchable, linked back to its topic
- **Progress tracking** by NASAA category *and* by topic, with mock history
- **Mobile-first PWA** — installable on iOS/Android, works offline
- **Dark mode**, adjustable font size
- **Client-side by default** — no accounts, no tracking, nothing leaves your device unless you deliberately turn on sync
- **Optional end-to-end-encrypted sync** — off by default, and you bring your own endpoint; see [Sync](#sync-optional)

## Sync (optional)

**Sync is off by default, and with it off nothing leaves your device.** No accounts, no analytics, no phoning home. Progress lives in `localStorage`, and the Export button hands you a JSON file you can carry anywhere. That is the whole story unless you deliberately turn sync on.

If you do want your phone and your laptop to share a study record, you can — by bringing your own endpoint.

**Why bring your own?** This app is public and so is its repository. A default shared server would funnel every stranger's study record into infrastructure the maintainer pays for and answers for, and anyone could exhaust its quota. Rather than ship that and hope, the repo carries a small Cloudflare Worker you deploy to your own account in about five minutes. It is free on Cloudflare's free plan, and it is a few hundred lines of plain JavaScript with no dependencies and no build step, so you can read the whole thing before you run it.

**It is end-to-end encrypted.** You generate a sync key on one device and type it into the others. Everything derives from that key locally:

```
sync key (128 random bits, shown to you)
     |
     +-- HKDF "id"  --> storage id   (sent to your endpoint)
     +-- HKDF "enc" --> AES-GCM key  (never leaves your browser)
```

Your endpoint therefore stores an identifier it cannot invert and a blob it cannot read. Enabling sync does not require trusting the server with your *content* — not even your own server. It is still the one shared copy, so an endpoint that loses or corrupts a record costs you that copy; what is on each device is untouched, and the Export button stays the backup that depends on nothing.

**Merging, not overwriting.** Devices reconcile item by item on timestamps, so answering questions on a phone at lunch and sitting a mock on a laptop that evening leaves you with both. Answers and topics read are merged, never dropped. Mock history survives a merge: each device keeps its 50 most recent attempts locally, and a merged record holds up to 200, so two devices with long histories combine rather than truncating each other. Theme and font size stay device-local on purpose.

The trade you are accepting: lose the sync key and the synced record is unrecoverable, because nobody holds a copy that could be decrypted. Keep it in a password manager, and keep exporting.

Setup instructions, free-tier limits and what the worker does and does not see: [`sync-worker/README.md`](./sync-worker/README.md).

## Quick start

```bash
git clone https://github.com/rivendale/series65-study-hub.git
cd series65-study-hub
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Output lands in `dist/` — deploy to GitHub Pages (automatic via the included workflow), Cloudflare Pages, Vercel, or any static host.

## Tech stack

- Vite 7 + React 18 + TypeScript (strict)
- Tailwind CSS v3 + `@tailwindcss/typography`
- React Router v6 (HashRouter, for GitHub Pages without 404 config)
- vite-plugin-pwa (Workbox service worker, autoUpdate)
- react-markdown + remark-gfm for the curriculum reader
- lucide-react icons

## Project layout

```
src/
├── data/
│   ├── examInfo.ts       # 140/130/10, 180 min, 94 to pass
│   ├── categories.ts     # NASAA blueprint + topic→category map
│   ├── curriculum.ts     # Topic interface + index of topic modules
│   ├── questions.ts      # Question interface + index of question modules
│   ├── topics/           # one module per topic (46 files)
│   └── questions/        # one module per topic (question banks)
├── pages/                # Home, Curriculum, TopicReader, Topics, Quiz,
│                         # Progress, Glossary, Formulas, CheatSheet, About
├── components/           # Layout, ProgressBar, TopicCard, QuestionCard
├── hooks/                # useProgress (localStorage), useQuiz (state machine)
└── lib/                  # shuffle, stats, mergeProgress, syncCrypto, syncClient

sync-worker/              # optional, self-deployed sync endpoint (see Sync above)
├── worker.js             # Cloudflare Worker + KV, no dependencies
├── wrangler.toml
└── README.md
```

Content lives in one small module per topic rather than a few large files. That keeps each file reviewable, lets contributors touch a single topic without merge conflicts, and keeps individual payloads small enough to push over constrained connections.

## Related

Built on the architecture of its sibling project, the [Series 63 Study Hub](https://github.com/rivendale/series63-study-hub).

## Roadmap

- [x] v0.1 — 46-topic curriculum, blueprint-weighted mock exam, formulas, glossary, cheat sheet
- [ ] v0.2 — expand the question bank toward 500, with more calculation and roman-numeral items
- [ ] v0.3 — spaced repetition scheduling for missed questions
- [ ] v0.4 — flashcard mode for key terms and formulas
- [ ] v1.0 — content reviewed by a licensed investment adviser representative or compliance professional

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Content corrections are especially welcome — cite the USA section, NASAA model rule, or Advisers Act rule. For AI-assistant guidance specific to this repo, see [CLAUDE.md](./CLAUDE.md).

## Acknowledgments

- **NASAA** for publishing the Uniform Securities Act model law, model rules, and Statements of Policy
- The open-source community behind Vite, React, Tailwind CSS, lucide-react, and vite-plugin-pwa

## License

MIT — see [LICENSE](./LICENSE).
