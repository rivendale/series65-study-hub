import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'cfp-planning-process',
  title: 'The Financial Planning Process',
  weight: 'Supplemental',
  order: 40,
  summary:
    "A structured, repeatable seven-step process is what separates financial planning from product sales. This topic covers each step, what belongs in a comprehensive plan, the fiduciary standard CFP® professionals owe whenever they give financial advice, and how the Series 65 fits into the certification path.",
  body: `*This material is not tested on the Series 65 exam. It is here because passing the exam is the beginning, not the end — these are the foundations of the CFP® certification and of advising real people well.*

## Why a process at all

New advisors often assume the job is knowing answers. It is not. The job is running a disciplined process that surfaces the right questions, in the right order, before any answer is offered. A process protects clients from advisors who lead with product, and it protects advisors from their own blind spots. It also makes the work reviewable: a colleague, a compliance officer, or a regulator can follow the trail from what the client said to what you recommended and why.

The profession has converged on a seven-step process. The order matters — nearly every serious planning failure comes from skipping ahead.

## The seven steps

### 1. Understand the client's personal and financial circumstances

You gather information and you make sure you actually understand it. This is both **quantitative** (income, expenses, balance sheet, tax returns, statements, insurance declarations pages, estate documents, employee benefits) and **qualitative** (health, family relationships, values, risk tolerance, career trajectory, what money meant in the household they grew up in).

The qualitative half is where most beginners are weakest. A retirement projection built on flawless spreadsheet math but a misunderstanding of whether the client actually wants to stop working is worthless. If information is missing or internally inconsistent, you ask again — and if a client declines to provide something material, you document that and discuss how it limits the engagement.

### 2. Identify and select goals

Clients rarely arrive with well-formed goals. They arrive with worries. Your job is to help translate "I want to be okay" into something specific enough to plan around: an amount, a date, and a priority.

Good goal work does three things:

- **Quantifies.** Not "retire comfortably" but "replace $9,000 a month of after-tax spending beginning at age 64."
- **Prioritizes.** Goals compete for the same dollars. Ask the client to rank them, and make the trade-offs explicit — funding a private college in full may cost three years of retirement.
- **Separates needs from wants.** A lake house and a long-term care reserve should not sit in the same column.

The client selects the goals. You inform, test for realism, and disclose when a stated goal appears unattainable — but the goals are theirs.

### 3. Analyze the current course of action and potential alternative courses

Before recommending anything, evaluate what happens if the client changes nothing. This step is skipped constantly and it is the most intellectually honest part of the process. Sometimes the current course works and the right recommendation is "keep doing what you are doing, and let us monitor it." That answer is hard to sell and it builds enormous trust.

Where the current course falls short, you develop and compare alternatives — different savings rates, retirement dates, asset allocations, insurance structures, account types — and evaluate each against the client's goals, risk tolerance, time horizon, and constraints.

### 4. Develop the recommendations

Recommendations must follow from the analysis. Each one should be traceable to a goal and to the reasoning that supports it. You also consider how recommendations interact: a Roth conversion changes Medicare premiums two years later; increasing 401(k) deferrals reduces cash available for the emergency fund you also recommended.

### 5. Present the recommendations

Presentation is a skill in its own right (see the practice-skills topic). At minimum, communicate the recommendation, the basis for it, the material risks, the timing, and any conflicts of interest. Confirm understanding rather than assuming it. Silence is not agreement.

### 6. Implement the recommendations

Agree on **who does what by when**. Implementation responsibility should be written down: some items you execute, some the client executes, some go to an attorney, CPA, or insurance specialist. Plans die in the gap between presentation and implementation more than anywhere else.

### 7. Monitor progress and update

Circumstances change and so do markets, tax law, and goals. Define in advance how often you will review, what you will review, and what triggers an off-cycle meeting — a job change, a death, a birth, an inheritance, a divorce, a health diagnosis, a large liquidity event.

## What a comprehensive plan contains

A genuinely comprehensive plan touches every principal knowledge area:

| Area | Typical contents |
| --- | --- |
| Financial position | Net worth statement, cash flow, emergency reserve, debt strategy |
| Risk management | Life, disability, long-term care, health, property and liability coverage review |
| Investments | Policy statement, allocation, location, cost and tax efficiency |
| Tax | Bracket management, deduction strategy, multi-year projections |
| Retirement | Accumulation projection, Social Security strategy, distribution plan |
| Estate | Document inventory, titling, beneficiary audit, legacy intent |
| Education | Funding projection, vehicle selection, aid considerations |
| Business or special | Succession, equity compensation, special needs, charitable intent |

Not every engagement is comprehensive. Many are modular by design, and that is legitimate — as long as scope is explicit.

## Engagement scope and written agreements

Before work begins, put in writing: the services included, the services excluded, the compensation and how it is calculated, the term of the engagement, and the responsibilities of each party. A clear scope is a client-protection device. It prevents the client from assuming you are watching something you never agreed to watch — the single most common source of "I thought you were handling that."

## Fiduciary duty

CFP® professionals commit to acting as a fiduciary **at all times when providing financial advice** — not only when managing assets, and not only in certain product categories. That duty has three components in practice:

- **Duty of loyalty** — place the client's interests above your own and your firm's; avoid conflicts where possible, and fully disclose and manage those you cannot avoid, obtaining informed consent.
- **Duty of care** — act with the care, skill, prudence, and diligence a prudent professional would use, given the client's goals, risk tolerance, objectives, and circumstances.
- **Duty to follow client instructions** — comply with reasonable and lawful directions, including the terms of the engagement.

Note how much broader this is than a transaction-level suitability obligation. The Series 65 teaches you the legal floor for investment advisers; the fiduciary commitment is a professional ceiling you choose to stand on.

## Assumptions, and why documenting them matters

Every projection rests on assumptions: inflation, investment returns, wage growth, tax rates, longevity, and spending patterns. Two competent planners can produce very different answers from identical data if their assumptions differ.

- **Write them down** in the plan itself, in plain language.
- **Be conservative but not absurd** — an assumption so pessimistic it makes every goal unattainable is not prudence, it is abdication.
- **Plan to a long life.** Using average life expectancy for longevity planning means roughly half of clients outlive the plan. Plan to an advanced age, especially for the longer-lived member of a couple.
- **Revisit assumptions on review**, and show the client the effect of changing them. Sensitivity analysis converts a false-precision number into an honest range.

## The CFP® certification path — the four E's

- **Education** — complete a CFP Board-registered coursework program covering the principal knowledge areas, and hold a bachelor's degree (which may be completed within five years after passing the exam).
- **Exam** — a multi-hour, case-heavy exam emphasizing application and integration rather than recall.
- **Experience** — several thousand hours of qualifying professional experience, with a shorter apprenticeship pathway available under direct supervision.
- **Ethics** — agree to the Code of Ethics and Standards of Conduct, and pass a background check.

The Series 65 is a natural stepping stone. It qualifies you to be registered as an investment adviser representative, so you can begin doing the work and accruing the experience while you complete the coursework. The regulatory knowledge it teaches — registration, brokerage versus advisory, disclosure, prohibited practices — is exactly the compliance backbone the CFP® curriculum assumes you already have.`,
  pitfalls: [
    "Jumping to a recommendation in the first meeting. Clients often invite it, and it feels responsive, but recommending before you have analyzed the current course of action is guessing with confidence.",
    "Treating data gathering as a form-filling exercise. The numbers are the easy half; the values, fears, and family history behind them determine whether the plan is ever implemented.",
    "Leaving goals vague because pressing for specifics feels intrusive. An unquantified goal cannot be planned for, funded, or monitored.",
    "Failing to define scope in writing, then discovering a year later that the client believed you were monitoring their 401(k), their insurance, or their parents' estate.",
    "Burying assumptions in software defaults. If you cannot state your inflation, return, and longevity assumptions out loud, you do not own your own plan.",
    "Delivering a beautiful bound plan and never confirming implementation. An unimplemented plan is an expensive document, not advice.",
  ],
  keyTerms: [
    {
      term: 'Seven-step financial planning process',
      definition:
        "Understand circumstances; identify and select goals; analyze current and alternative courses of action; develop recommendations; present recommendations; implement; monitor and update.",
    },
    {
      term: 'Scope of engagement',
      definition:
        'The written definition of which services are and are not included, the compensation, the term, and the responsibilities of each party.',
    },
    {
      term: 'Duty of loyalty',
      definition:
        "The fiduciary obligation to place the client's interests first, avoid conflicts where possible, and fully disclose and manage unavoidable conflicts with the client's informed consent.",
    },
    {
      term: 'Duty of care',
      definition:
        "The obligation to act with the care, skill, prudence, and diligence a prudent professional would exercise given the client's goals, risk tolerance, objectives, and circumstances.",
    },
    {
      term: 'Qualitative data',
      definition:
        'Non-numeric client information — health, values, family dynamics, attitudes toward risk and money — that shapes which recommendations will actually be adopted.',
    },
    {
      term: 'Sensitivity analysis',
      definition:
        'Re-running a projection under varied assumptions to show a range of outcomes rather than a single falsely precise number.',
    },
    {
      term: 'Modular engagement',
      definition:
        'A planning relationship deliberately limited to one or a few areas, such as retirement income or education funding, with the exclusions stated in writing.',
    },
    {
      term: "The four E's",
      definition:
        'Education, Exam, Experience, and Ethics — the four requirements for CFP® certification.',
    },
  ],
  confusions: [
    {
      dont: 'A financial plan, which is an integrated set of recommendations tied to prioritized goals',
      with: 'A proposal, which is a recommendation for a specific product or portfolio',
    },
    {
      dont: 'Goals, which belong to the client and are selected by the client',
      with: 'Assumptions, which belong to the planner and must be disclosed and defended',
    },
    {
      dont: 'The fiduciary duty a CFP® professional owes at all times when giving financial advice',
      with: 'The transaction-level standard applicable to broker-dealer recommendations',
    },
    {
      dont: 'Monitoring, which is ongoing observation against the plan',
      with: 'Updating, which is revising the plan when circumstances or goals change',
    },
  ],
  formulas: [
    {
      name: 'Savings gap',
      formula: 'Annual gap = Required annual savings − Current annual savings',
      note: 'Required annual savings comes from solving for the payment that grows current assets to the future goal amount at the assumed return over the assumed horizon.',
    },
    {
      name: 'Future cost of a goal',
      formula: 'Future cost = Present cost × (1 + inflation rate)^years',
      note: 'Use a goal-specific inflation rate where one exists — education and healthcare have historically run above general inflation.',
    },
  ],
};
