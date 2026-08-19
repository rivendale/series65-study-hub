# Making it engaging for someone learning investing from zero

2026-08-19. Nick: *"content is ready to start but we need a better approach to
make it more interactive and meant for someone that needs to learn everything
about investing, the process, planning etc."*

**Measured first. The content is not the problem.**

| | |
|---|---|
| questions | **1,102**, every one with an explanation |
| average explanation | 304 characters — real teaching, not "B is correct" |
| difficulty spread | 268 easy · 659 medium · 175 hard |
| topic readers | 46 |
| glossary | 432 terms |
| scheduling | **Leitner spaced repetition already built**, 5 boxes |

## THE DIAGNOSIS: the app knows what she should do next and never says

- `Home` opens with **statistics** — Answered, Accuracy, Topics read — then a
  **menu of eight destinations**.
- `StudyPlan.tsx` is 920 lines and contains **2** uses of the word "next". It is
  a static plan *document*, not a next-action engine.
- `spacedRepetition.ts` computes exactly which questions are due. **No page
  surfaces a due count. The number exists and is never shown.**

Every session therefore opens with a decision — *read curriculum? topic quiz?
mock? review?* — that a career-changer with no finance background is **not
equipped to make**, asked before she has done anything. That is the moment a
learning app becomes homework.

Same shape as the barrier measured in TELL: **the interaction is the obstacle,
not the material.**

## 1. ONE BUTTON — highest leverage by a distance

Home's primary element becomes a single action:

```
        Continue where you left off
        ───────────────────────────
        7 reviews due · then Suitability
                ~10 minutes
```

The scheduler already has everything needed to choose. Everything else stays
reachable underneath for days she wants to browse.

**Why it beats the rest:** it converts *"what should I do today"* from a decision
into a system. The app carries the plan so she does not have to hold one — Nick's
own principle, applied to the learner instead of to us.

## 2. A session with an END

Ten minutes, visible finish, a real *"done for today"*. An infinite quiz has no
reward state; a bounded one does. It also fits the life of someone winding down a
practice with a family — which is the constraint that decides whether the app
gets opened at all.

## 3. Teach BEFORE testing, on first exposure

A topic can currently be quizzed cold. For a beginner, a question you cannot
answer is not a diagnostic — it is discouragement. **First exposure should be
read-then-check**; the quiz earns its place on the second pass, which is also
when spaced repetition starts doing real work.

## 4. Ground it in situations, because she will actually advise people

**Only ~50 of 1,102 questions are scenario-shaped.** The rest are rule-recall.
*"Your client is 58, wants to retire at 62, and holds 80% of her savings in her
employer's stock"* teaches suitability in a way that "which of the following is
NOT a fiduciary duty" never will — and it is what the job looks like.

Stems can be rewritten in bulk using the existing explanations as ground truth.
**Content work, not engineering**, and the largest single lever on whether this
feels like a career rather than a test.

## 5. Show the shape of what she knows, against the real exam

Series 65 is weighted by section. One accuracy percentage tells her nothing
actionable; **coverage against the actual blueprint weights** tells her where the
next hour should go, turning Progress from a scoreboard into a map.

## What I would NOT do

- **Gamification for its own sake.** Points and badges on a professional
  licensing exam read as condescending to an adult changing careers.
- **Streaks that punish.** She has a practice to close and a family. A streak
  that breaks on a missed day is a reason to stop opening the app.

## Order

1. **One button** — small, changes every session
2. **Bounded session with an end** — small, pairs with 1
3. **Read-then-check on first exposure** — medium
4. **Progress against blueprint weights** — medium
5. **Scenario rewrite** — large, highest ceiling, content rather than code
