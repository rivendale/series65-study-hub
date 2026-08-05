# Contributing

Thanks for helping make free Series 65 prep better.

## Ground rules for content

All content here is **original**, written from public sources:

- The Uniform Securities Act model law
- NASAA model rules and Statements of Policy
- The Investment Advisers Act of 1940 and rules thereunder
- Standard, non-proprietary finance and economics knowledge

**Never** contribute material copied or closely paraphrased from a commercial exam-prep provider (Kaplan, STC, Solomon, Wiley, Dalton, ExamFX, and the like), from CFP Board copyrighted curriculum, or from actual exam questions. Series 65 exam content is confidential to NASAA and FINRA.

## Adding questions

Questions live in `src/data/questions/<topic-id>.ts`, one module per topic, each exporting `items: Question[]`.

```typescript
{
  id: 301,                    // must be globally unique across ALL modules
  topic: 'fiduciary-standards',
  q: 'Question stem?',
  choices: ['A', 'B', 'C', 'D'],
  answer: 2,                  // 0-based index of the correct choice
  exp: 'Why the answer is right. Show the arithmetic for calculations.',
  difficulty: 'medium',
}
```

Before you start, find the highest existing id and take the next free range. Ids key the stored answer history and the missed-questions drill, so duplicates corrupt a user's progress.

What makes a good question here:

- **Realistic distractors** drawn from actual misconceptions, not obviously wrong throwaways
- **A defensible single correct answer** — if two choices are arguably right, rewrite the stem
- **An explanation that teaches**, citing the rule where one applies
- For calculation items, **show the arithmetic** in `exp` so a student can follow the steps

Target mix across the bank: roughly 25% easy, 60% medium, 15% hard. Style mix: ~25% definitional recall, ~50% scenario application, ~15% negative phrasing, ~10% roman-numeral compound. Series 65 leans quantitative, so calculation questions are especially welcome.

Roman-numeral questions put line breaks in the string with `\n`:

```typescript
q: 'Which are systematic risks?\n\nI. Market risk\nII. Business risk\nIII. Inflation risk\nIV. Liquidity risk',
```

Weight new questions toward the blueprint: Client Recommendations and Laws & Ethics are 30% each, Investment Vehicles 25%, Economics 15%.

## Adding or editing curriculum

Topics live in `src/data/topics/<topic-id>.ts`, each exporting a single `topic: Topic`. Optional fields worth using:

- `confusions` — pairs students mix up, rendered as a table
- `formulas` — surfaced in the topic and aggregated on the `/formulas` page

A new topic also needs an entry in `TOPIC_TO_CATEGORY` in `src/data/categories.ts` and an import in `src/data/curriculum.ts`.

### Escaping rules that will break the build

The `body` field is a template literal containing prose and dollar figures. Three hard rules:

1. Strings containing an apostrophe use **double quotes**: `"the adviser's duty"`. Do not use the backslash-escaped form.
2. **No backtick** anywhere inside `body` — it ends the literal early.
3. **Never write a dollar sign immediately followed by an open brace** inside `body`; that opens a template interpolation. Plain dollar amounts like `$110M` are fine.

Run `npm run build` before opening a PR. `tsc -b` catches all three.

## Content corrections

Corrections are the most valuable contributions. Securities law and dollar thresholds drift, and stale content in a study app is worse than no content.

When correcting a rule, **cite the source** — the USA section, NASAA model rule, Advisers Act rule number, or SEC release. If a figure is inflation-indexed, say so rather than pinning a number that will be wrong next year.

Currently reflected as of 2026: the Marketing Rule permitting testimonials and endorsements with disclosure, SECURE 2.0 RMD age 73 and the 10-year inherited-account rule, T+1 settlement, the $110M federal covered threshold, and NASAA IAR continuing education.

## The CFP track

Topics under the `cfp-advisor` category are supplemental — **not tested on the Series 65**. They exist to build practical advisory skill. Two things to preserve:

- Each body opens with a note that the material is not on the exam
- Mock exams exclude these topics (`useQuiz.buildMockSet()` filters them out)

Do not add `cfp-advisor` topics to the exam categories, and do not remove the mock-exam filter — a mock that quizzes untested material gives a false readiness signal.

## Code

- TypeScript strict mode; functional components and hooks only
- Tailwind for styling; avoid custom CSS unless there is no alternative
- Mobile-first — test at a 375 px viewport, keep tap targets at least 44×44 px
- Dark mode must work; use `dark:` variants throughout
- Keep colour from being the sole signal — pair it with an icon or text

## Pull requests

1. Fork and create a branch
2. Make your change
3. Run `npm run lint` and `npm run build`
4. Open a PR describing what changed and, for content, citing your source

Small, focused PRs get reviewed faster. The per-topic module layout means most content changes touch exactly one file.
