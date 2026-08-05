# CLAUDE.md

Project-specific guidance for Claude Code (and other AI coding assistants) working on this repository.

## What this project is

A static, client-side React + TypeScript PWA for **Series 65** (Uniform Investment Adviser Law) exam prep, plus a supplemental CFP/advisor-skills track. Deployed to GitHub Pages at `https://rivendale.github.io/series65-study-hub/`. No backend, no API keys, no database. Progress persists in `localStorage` under `series65_progress`.

Sibling project: [series63-study-hub](https://github.com/rivendale/series63-study-hub), which shares this architecture. Improvements to shared components are worth porting in both directions.

## Critical project facts

- **Exam structure (2026, NASAA):** 140 questions delivered = 130 scored + 10 unscored pretest, randomly distributed and unidentified; 180 minutes; pass = **94 of 130** (72%). No sponsorship required to sit. Use the `examInfo.ts` constants — never hard-code these numbers in components.
- **NASAA blueprint** (drives mock-exam sampling): Client Recommendations 39 (30%), Laws & Ethics 39 (30%), Investment Vehicles 32 (25%), Economics 20 (15%). Defined in `src/data/categories.ts`.
- **The CFP track is not on the exam.** `TOPIC_TO_CATEGORY` maps those topics to `'cfp-advisor'`, and `useQuiz.buildMockSet()` filters them out of mock exams. Keep that exclusion intact — a mock that quizzes untested material misleads the user about readiness.
- **Curriculum** lives in `src/data/topics/<id>.ts`, one module per topic (46 total). `src/data/curriculum.ts` imports and concatenates them in `order`.
- **Questions** live in `src/data/questions/<id>.ts`, one module per topic. `src/data/questions.ts` imports and concatenates them.
- **Routing:** HashRouter, required for GitHub Pages SPA hosting without 404 config.

## Repository conventions

### Adding or editing curriculum

Each topic module exports a single `topic: Topic`. The interface is in `src/data/curriculum.ts` and includes two optional fields beyond the Series 63 schema:

- `confusions?: { dont: string; with: string }[]` — rendered as a two-column "Common confusions" table
- `formulas?: { name: string; formula: string; note?: string }[]` — rendered in the topic and aggregated on `/formulas`

If you add a topic, create `src/data/topics/<id>.ts` **and** add the id to `TOPIC_TO_CATEGORY` in `categories.ts`, then regenerate the index. There is a generator pattern used during the initial build: read every file in `topics/`, sort by the `order` field, and emit imports plus the array. Doing it by hand is fine too — just keep the array sorted by `order`.

### TypeScript escaping rules (these break the build if violated)

The `body` field is a template literal, and topic content is full of prose and dollar figures. Three rules:

1. **Apostrophes:** any string containing one must use double quotes — `"the adviser's duty"`, never `'the adviser\'s duty'`. The escaped form is technically valid but has repeatedly been written wrong; double quotes are the house style.
2. **No backticks inside `body`.** The body is delimited by backticks; an inner one terminates the literal early.
3. **Never write `${` inside `body`.** It opens a template interpolation. Plain dollar amounts (`$50,000`, `$110M`) are fine — the problem is only a dollar sign immediately followed by an open brace.

`tsconfig.json` sets `noUnusedLocals` and `noUnusedParameters`, so unused imports fail the build. Use `void someImport;` if a side-effect import is genuinely needed.

### Adding questions

Each module exports `items: Question[]`. Schema is in `src/data/questions.ts`:

```typescript
{
  id: number,                          // globally unique across ALL modules
  topic: string,                       // must match a curriculum topic id
  choices: [string, string, string, string],
  answer: 0 | 1 | 2 | 3,               // index of the correct choice
  exp: string,                         // 1-3 sentences; show arithmetic for calc questions
  difficulty?: 'easy' | 'medium' | 'hard',
}
```

**Question ids must be globally unique** — they key the `localStorage` answer record and the missed-questions drill. When adding a batch, take the next free range and note it in the commit message.

Target mix: ~25% easy / 60% medium / 15% hard. Style mix: ~25% definitional, ~50% scenario application, ~15% negative phrasing ("which is NOT"), ~10% roman-numeral compound. Series 65 is calculation-heavy — include computational items and show the arithmetic in `exp`.

Roman-numeral questions use `\n` inside a normal quoted string (not a template literal). `QuestionCard` renders the stem with `whitespace-pre-line` so the line breaks survive.

**Never copy questions from commercial prep providers** (Kaplan, STC, Solomon, Wiley, Dalton) or from actual exam content. Write originals from the USA model law, NASAA model rules and Statements of Policy, and the Advisers Act.

### Currency of the law

Content is written as of 2026. Things that are easy to get wrong because older study material is still circulating:

- **Marketing Rule (SEC Rule 206(4)-1)**, compliance date November 4, 2022, replaced the old advertising and cash-solicitation rules. **Testimonials and endorsements are permitted** with disclosure, written promoter agreements, and oversight. Any content asserting a blanket prohibition is obsolete.
- **SECURE 2.0**: RMD age is **73**, rising to 75 in 2033. The stretch IRA is gone for most non-spouse beneficiaries — **10-year rule** with eligible-designated-beneficiary exceptions.
- **Settlement is T+1** (since 2024). This also shifted the ex-dividend convention.
- **Federal covered IA threshold** $110M AUM, with the $100M–$110M buffer band. **Qualified client** $1.1M AUM with the adviser or $2.2M net worth excluding primary residence.
- **NASAA IAR continuing education**: 12 credits annually (6 Products and Practice + 6 Ethics) in adopting states.

Inflation-indexed figures (IRA/401(k) contribution limits, gift exclusion, estate exemption, IRMAA and NIIT thresholds) drift every year. Prefer testing the *concept*; where a number is unavoidable, say it is indexed and approximate.

### Pushing to GitHub

Direct `git push` does not work in the sandbox — there are no HTTPS credentials. Use the `mcp__github__push_files` MCP tool. Keep each push payload under ~30 KB or the stream times out. Topic files run 6–10 KB, so **3 per push** is the right batch size. Push batches sequentially; concurrent pushes to the same branch conflict.

Do not commit `package-lock.json` — the deploy workflow uses `npm install`, not `npm ci`.

The deploy workflow uses `actions/setup-node@v4` **without** `cache: npm`. Adding the cache directive fails the build because there is no lockfile.

## Common gotchas

- **Vite stays on ^7.x.** `vite-plugin-pwa` does not support Vite 8. If Dependabot opens that bump, close it.
- **PWA icons:** `public/icon.svg` is committed; the PNGs and `favicon.ico` are generated at build time by `scripts/generate-icons.mjs` and are gitignored. Never try to push binary PNGs through `push_files` — it expects UTF-8 text.
- **Base path:** `vite.config.ts` `base`, plus the manifest `scope` and `start_url`, must all be `/series65-study-hub/`. Renaming the repo means changing all three.
- **The bundle is large** (~1 MB) because all 46 topic bodies are inlined. That is a deliberate trade for offline-first PWA behavior. If it becomes a problem, route-level code splitting on `TopicReader` is the first thing to try.

## Build and verify

```bash
npm install
npm run build      # tsc -b && vite build
```

A successful build produces `dist/index.html`, hashed `dist/assets/index-*.{js,css}`, `dist/manifest.webmanifest`, `dist/sw.js` plus a workbox chunk, and the generated icons.

Always run the build before pushing content — `tsc -b` catches the escaping mistakes above before they reach `main` and break the deploy.

## When in doubt

- `src/pages/CheatSheet.tsx` is the canonical list of exam thresholds and most-tested rules. Keep it consistent with curriculum content — if you change a threshold in a topic, change it there too.
- The question bank should grow weighted to the blueprint. Client Recommendations and Laws & Ethics deserve the most new questions; Economics the fewest.
- Before shipping a rule change, verify against primary sources. Qualified-client thresholds, contribution limits, and IAR CE adoption all drift.
