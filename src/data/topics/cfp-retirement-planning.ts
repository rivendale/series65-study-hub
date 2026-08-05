import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'cfp-retirement-planning',
  title: 'Retirement Planning and Income Distribution',
  weight: 'Supplemental',
  order: 43,
  summary:
    "Retirement planning has two halves: accumulating enough, and converting a pile of assets into a paycheck that lasts. This topic covers needs analysis, Social Security claiming, Medicare and IRMAA, withdrawal strategies, sequence-of-returns risk, RMDs, and the role of guaranteed income.",
  body: `*This material is not tested on the Series 65 exam. It is here because retirement income planning is a principal knowledge area of the CFP® certification and, for most advisors, the single most requested piece of client work.*

## The accumulation phase

### Needs analysis

Start with spending, not income. What will this household actually spend, in today's dollars, in the first year of retirement? Some expenses fall (commuting, payroll taxes, saving itself, the mortgage if it is retired); others rise (healthcare, travel in early retirement, eventually care costs).

The **replacement ratio** shorthand — plan for roughly 70% to 85% of pre-retirement gross income — is a useful sanity check but a poor substitute for a real budget. Clients who saved 25% of income need to replace far less than the ratio implies; clients who spent everything need more.

From the spending target, work backward: inflate first-year spending to the retirement date, subtract guaranteed income from Social Security, pensions, and annuities, capitalize the remaining shortfall into a required portfolio value, compare it to projected assets at retirement, and express the difference as a **savings gap** in monthly dollars the client can act on.

State the assumptions explicitly — general and healthcare inflation, wage growth, pre- and post-retirement return, retirement age, longevity — then show what happens when each moves. Clients decide better when they see a range.

## Social Security

Social Security is the largest, longest, most inflation-protected asset most retirees own, and the claiming decision is irreversible after a short window. Advisors add enormous value here and it costs nothing but analysis.

### Mechanics

- Benefits are based on the **primary insurance amount (PIA)**, computed from indexed earnings in the highest 35 years, through a progressive formula that replaces a much higher share of income for lower earners.
- **Full retirement age (FRA)** is 66 to 67 depending on birth year.
- Claiming as early as **62** produces a permanent reduction — roughly 25% to 30% below PIA at FRA 67.
- Delaying past FRA earns **delayed retirement credits** of about 8% per year until **70**. There is no benefit to delaying past 70.
- **Spousal benefits** can be up to 50% of the worker's PIA at the spouse's FRA. Spousal benefits do **not** earn delayed credits past FRA.
- **Survivor benefits** can be up to 100% of what the deceased worker was receiving or had earned. This is why the higher earner's claiming decision is really a joint-life decision.
- The **earnings test** temporarily withholds benefits from someone claiming before FRA who earns above an annual limit. Withheld amounts are restored through a benefit recomputation at FRA, so it is a deferral, not a permanent loss — but clients experience it as a penalty and should be warned.
- **Taxation of benefits.** Up to 85% of benefits become taxable depending on "combined income" (AGI plus tax-exempt interest plus half of benefits) measured against thresholds that are **not indexed** and therefore capture more retirees every year.

### Claiming strategy

The naive framing is a **breakeven analysis**: delaying costs benefits now and buys larger benefits later, with breakeven typically falling in the early-to-mid 80s. But breakeven is the wrong lens, for three reasons:

1. Delaying is **longevity insurance**. The bad outcome is living a long time with too little income, and delay hedges exactly that.
2. Delay is **survivor protection**. When the higher earner delays to 70, they are buying a larger benefit for whichever spouse lives longer — often a widow facing decades alone.
3. The increase is **inflation-adjusted and government-backed**, a combination nothing in the portfolio matches.

Reasons to claim early are legitimate too: poor health, a genuine need for cash flow, no survivor to protect, or a much younger dependent. The point is that it should be a decision, not a default.

## Medicare and IRMAA

Initial enrollment runs for a seven-month window around the 65th birthday. Missing it can cause **permanent** Part B and Part D late-enrollment penalties. A client still covered by a large employer group plan through active employment can delay without penalty via a special enrollment period — but COBRA and retiree coverage do **not** count for this purpose, and that misunderstanding is expensive.

**IRMAA** surcharges raise Part B and Part D premiums for higher-income beneficiaries, based on **modified AGI from two years prior**, and they apply as a cliff: one dollar over a threshold triggers the whole surcharge tier for the year. This makes age 63 the first year that matters for Medicare cost, and it must be modeled before any large Roth conversion or capital gain. A life-changing event such as retirement itself can be appealed with a form to reflect current income.

## The distribution phase

### Safe withdrawal rates and their critics

The classic research found that an initial withdrawal of about 4%, increased annually for inflation, historically survived 30 years in a balanced portfolio. It is a useful anchor and a terrible operating rule: it assumes a rigid spending path nobody follows, and it derives from a specific historical market and fee environment.

Modern practice prefers **dynamic** approaches:

- **Guardrails.** Set an initial rate and define upper and lower thresholds. If the withdrawal rate drifts above the upper guardrail after a decline, trim spending; if below the lower guardrail after strong markets, raise it. Small rules-based adjustments early prevent large painful ones later.
- **Floor-and-upside.** Cover essential spending with guaranteed sources — Social Security, pension, an income annuity — and fund discretionary spending from a portfolio that can then be invested for growth.
- **Bucket strategies.** Segment by horizon: one to two years of spending in cash, several years in bonds, the rest in equities. Economically this is equivalent to a good allocation plus a rebalancing rule, but the **behavioral** value is real — clients who can point to the cash bucket rarely sell equities in a panic.

### Sequence-of-returns risk

Two retirees with identical average returns can have wildly different outcomes if the order differs. Poor returns in the first years of retirement, while withdrawals are being taken, permanently shrink the base that must recover. The same poor returns late in retirement do far less damage.

Practical defenses: a cash reserve so that withdrawals need not come from depressed assets, a spending rule that flexes, a modestly more conservative allocation in the years immediately around the retirement date (a rising equity glidepath thereafter is one researched approach), and delaying Social Security to reduce portfolio dependence in the early years.

### Withdrawal ordering

The traditional default — taxable first, then tax-deferred, then Roth — is a reasonable start but frequently suboptimal. Better practice blends across account types each year to control the marginal rate: draw from taxable while converting to Roth in the gap years, then meet later needs from tax-deferred with Roth reserved for spikes such as a large medical bill or a year that would otherwise cross an IRMAA cliff. Roth assets are the most flexible dollars a retiree owns; spending them first wastes that optionality.

### Required minimum distributions

RMDs from traditional IRAs and most employer plans begin at **age 73** under current law, rising to 75 later this decade. Roth IRAs have no lifetime RMDs. The planning window before RMDs begin is the most valuable stretch of a retiree's tax life — it is when conversions are cheap and bracket space is empty.

Once RMDs begin, **qualified charitable distributions** (available from 70½) let charitably inclined clients satisfy the RMD without recognizing income, which is superior to taking the distribution and deducting the gift.

### Annuitization versus systematic withdrawal

An income annuity pools longevity risk, which no self-managed portfolio can do. Its costs are irreversibility, loss of liquidity, credit exposure to the insurer, and — for fixed payouts — inflation erosion. The reasonable middle ground for many clients is **partial annuitization**: annuitize enough, alongside Social Security, to cover essential spending, and manage the rest. Compare any product against the cost of simply delaying Social Security, which is usually the cheapest and best-quality lifetime income available.

## Risks that define the second half

- **Longevity.** Plan to age 95 or beyond, and to the second death for a couple.
- **Inflation.** A 3% rate halves purchasing power in about 24 years — over a retirement horizon this is a certainty, not a scenario.
- **Healthcare and long-term care.** Premiums, Medigap, dental and hearing, plus a potential multi-year care event. Budget for care explicitly, insured or self-funded.
- **Cognitive decline.** Financial capacity erodes before anyone notices. Build simplicity, automation, trusted contacts, and powers of attorney while the client is well.
- **Widowhood.** The survivor loses the smaller Social Security benefit, may lose a pension, and files as a single taxpayer at higher rates on similar income. Model it for every couple.

## Phased retirement

Fewer clients stop cold. Part-time work or a lower-stress role in the early years shortens the withdrawal period, allows Social Security delay, may extend group health coverage past 65, and softens the identity shock that catches many retirees off guard. Ask about it early — the psychological transition deserves as much attention as the arithmetic.`,
  pitfalls: [
    "Anchoring the plan on a replacement ratio instead of an actual spending estimate, then discovering in year two that the client spends nothing like the assumption.",
    "Letting a client claim Social Security at 62 by default because it feels safe, without modeling the survivor benefit consequences for the higher earner.",
    "Running a Roth conversion or realizing a large gain at 63 or 64 without checking the IRMAA thresholds, then explaining a surprise Medicare premium two years later.",
    "Treating the 4% rule as a policy rather than a starting point, and never building a spending adjustment rule agreed to in advance.",
    "Ignoring sequence-of-returns risk by keeping the same allocation and the same rigid withdrawal through a bear market in the first years of retirement.",
    "Spending Roth assets first and destroying the tax flexibility that would have been most valuable in later, higher-income years.",
  ],
  keyTerms: [
    {
      term: 'Replacement ratio',
      definition:
        'The share of pre-retirement gross income a household expects to need in retirement; a screening tool, not a substitute for a budget.',
    },
    {
      term: 'Primary insurance amount (PIA)',
      definition:
        "The Social Security benefit payable at full retirement age, computed from the highest 35 years of indexed earnings through a progressive formula.",
    },
    {
      term: 'Delayed retirement credits',
      definition:
        'Roughly 8% per year of additional benefit for postponing a Social Security claim between full retirement age and age 70; not available on spousal benefits.',
    },
    {
      term: 'Earnings test',
      definition:
        'A temporary withholding of Social Security benefits for claimants below full retirement age who earn above an annual limit; withheld amounts are restored via recomputation at FRA.',
    },
    {
      term: 'IRMAA',
      definition:
        'Income-related monthly adjustment amount — a cliff-based surcharge on Medicare Part B and Part D premiums determined by modified AGI from two years earlier.',
    },
    {
      term: 'Sequence-of-returns risk',
      definition:
        'The risk that poor returns early in the withdrawal phase permanently impair a portfolio, even if average returns over the full period are adequate.',
    },
    {
      term: 'Guardrail strategy',
      definition:
        'A dynamic withdrawal rule that raises or lowers spending when the current withdrawal rate crosses predefined upper or lower thresholds.',
    },
    {
      term: 'Partial annuitization',
      definition:
        'Converting a portion of the portfolio into guaranteed lifetime income to cover essential expenses while investing the remainder for growth and liquidity.',
    },
  ],
  confusions: [
    {
      dont: 'Full retirement age, which determines the unreduced benefit',
      with: 'Age 70, which is only the point at which delayed retirement credits stop accruing',
    },
    {
      dont: 'The earnings test, a temporary withholding restored later',
      with: 'The early-claiming reduction, which is permanent',
    },
    {
      dont: 'Required minimum distributions, which begin at age 73 under current law',
      with: 'Qualified charitable distributions, which become available at age 70½',
    },
    {
      dont: 'Asset allocation, which manages market risk',
      with: 'Withdrawal policy, which manages sequence and longevity risk — a good allocation cannot rescue a rigid spending rule',
    },
  ],
  formulas: [
    {
      name: 'Replacement ratio',
      formula: 'Replacement ratio = Estimated retirement spending ÷ Pre-retirement gross income',
      note: 'Typically 70% to 85%, but compute it from the actual budget. High savers need a lower ratio because the savings itself disappears as an expense.',
    },
    {
      name: 'Real (inflation-adjusted) rate of return',
      formula: 'Real return = [(1 + nominal return) ÷ (1 + inflation rate)] − 1',
      note: 'The exact form. The shortcut of nominal minus inflation understates the drag and drifts badly at higher rates. Use the real return when discounting an inflating income stream.',
    },
    {
      name: 'Capital needed for a spending goal',
      formula: 'Capital needed = Annual portfolio withdrawal need ÷ Sustainable withdrawal rate',
      note: 'The withdrawal need is retirement spending less Social Security, pension, and annuity income. Sensitivity-test the withdrawal rate rather than presenting one number.',
    },
    {
      name: 'Current withdrawal rate',
      formula: 'Withdrawal rate = Annual withdrawals ÷ Current portfolio value',
      note: 'Recompute annually. This is the number a guardrail rule monitors.',
    },
  ],
};
