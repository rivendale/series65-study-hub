import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'cfp-insurance-planning',
  title: 'Risk Management and Insurance Planning',
  weight: 'Supplemental',
  order: 41,
  summary:
    "Protecting a plan matters more than optimizing it. This topic covers the risk management framework, life and disability needs analysis, long-term care, health coverage including Medicare, property and liability insurance, business coverage, and how policies interact with the estate plan.",
  body: `*This material is not tested on the Series 65 exam. It is here because it is a principal knowledge area of the CFP® certification, and because an uninsured catastrophe undoes more financial plans than any portfolio mistake ever will.*

## The risk management framework

Before any product discussion, classify each exposure by two dimensions: **how likely** it is and **how severe** it would be. Then choose a response.

| | Low severity | High severity |
| --- | --- | --- |
| **Low frequency** | Retain | **Transfer** (insure) |
| **High frequency** | Retain / reduce | **Avoid** |

- **Avoid** — eliminate the activity entirely. Sell the rental property you cannot manage; do not keep the trampoline.
- **Reduce** — lower frequency or severity. Smoke detectors, wellness, defensive driving, diversification.
- **Retain** — absorb the loss yourself, deliberately. Deductibles, self-insured dental work, an emergency fund.
- **Transfer** — shift the financial consequence to an insurer or a counterparty.

The practical rule: **insure what you cannot afford to lose; retain what you can.** Clients routinely do the opposite — they buy low-deductible coverage for scratched bumpers while carrying $300,000 of liability limits and no disability coverage. Raising deductibles to fund catastrophic protection is often the single highest-value recommendation in a first plan.

## Life insurance

### How much

Two classical approaches:

**Human life value** estimates the present value of the insured's future earnings net of self-consumption and taxes — useful for high earners, buy-sell contexts, and as a check on the maximum an insurer will issue.

**Needs analysis** is what practitioners actually use: add up what the family needs money for, subtract what they already have, insure the difference. Within it, two philosophies. **Capital liquidation** assumes the death benefit and existing assets are spent to zero over the planning period — cheaper, and right when the need ends as children reach independence or a mortgage is retired. **Capital retention** spends only investment income and preserves principal, often for a survivor's lifetime or a legacy — more expensive, more conservative.

### Term versus permanent

**Term** covers a stated period with no cash value. It is the right answer for temporary needs — income replacement during child-rearing years, mortgage protection, a term-limited business obligation. Level-premium term is inexpensive relative to the benefit. Watch for **convertibility**: the right to convert to permanent coverage without new evidence of insurability is genuinely valuable for a young client whose health may change.

**Permanent** coverage — whole life, universal life, variable universal life, indexed universal life — is designed to last for life and accumulates cash value. It fits genuinely permanent needs: estate liquidity, a special needs child, a business succession obligation, a legacy commitment, or a client who has maximized other tax-advantaged capacity and values the tax treatment. Be candid about costs, surrender charges, and the fact that illustrated non-guaranteed values are illustrations, not promises. Always look at the **guaranteed** column.

## Disability income insurance

Statistically the most under-insured risk in a working household. Key provisions:

- **Definition of disability.** **Own-occupation** pays if the insured cannot perform the material duties of their own occupation, even if working elsewhere. **Any-occupation** pays only if they cannot work in any occupation for which they are reasonably suited by education, training, and experience. Own-occupation is materially better and materially more expensive. Many contracts are hybrids — own-occupation for a stated period, then any-occupation.
- **Elimination period** — the waiting period before benefits begin, commonly 90 or 180 days. It is the deductible; lengthening it is the cheapest way to cut premium, provided the emergency fund can bridge the gap.
- **Benefit period** — how long benefits continue. To age 65 or 67 is standard for career protection.
- **Riders** — residual or partial disability (pays for partial income loss, often the most-used feature), cost-of-living adjustment, future increase option, own-occupation upgrade.
- **Taxation of benefits follows who paid the premium with what dollars.** Employer-paid premiums (or employee premiums paid pre-tax) produce **taxable** benefits. Premiums paid by the individual with after-tax dollars produce **tax-free** benefits. This is why group coverage replacing "60% of income" may replace far less after tax, and why an individual supplemental policy is so often warranted.

## Long-term care

Costs are large, long-tailed, and correlated with longevity — exactly the profile that argues for transfer. Traditional standalone LTC policies pay a daily or monthly benefit once the insured cannot perform a specified number of activities of daily living or has severe cognitive impairment, after an elimination period. Their weakness is premium increases on in-force blocks and the use-it-or-lose-it structure.

**Hybrid** policies — life insurance or annuities with LTC or chronic illness riders — address that objection by paying a death benefit if care is never needed, usually with a guaranteed premium. They cost more per dollar of care benefit but are far easier for clients to accept. Inflation protection matters enormously on any LTC benefit, because the gap between purchase and claim is often 25 years.

Self-funding is legitimate for wealthy clients — but discuss it explicitly, quantify it, and revisit it, rather than letting it be a default arrived at by inaction.

## Health insurance

- **HDHP with an HSA.** A high-deductible plan paired with a Health Savings Account is the only triple-tax-advantaged vehicle in the code: deductible contributions, tax-free growth, and tax-free qualified withdrawals. For clients who can pay current medical costs from cash flow, treating the HSA as a long-term investment account is one of the best planning moves available.
- **ACA marketplace.** Individual coverage with premium tax credits based on household income. Because credits phase with income, a Roth conversion or a large capital gain can quietly cost thousands in lost subsidy.
- **Medicare.** **Part A** hospital (usually premium-free with sufficient work history), **Part B** medical (income-related premium), **Part C** Medicare Advantage (private plans bundling A, B, and usually D, with networks), **Part D** prescription drugs. **Medigap** supplements fill the gaps in original Medicare and are standardized by letter. The A-versus-C choice is a real trade-off between network freedom and out-of-pocket predictability, and switching from Advantage back to Medigap later may require underwriting.
- **Medicaid** covers long-term custodial care only after a spend-down to very low asset levels, with a look-back period on transfers. Advisors should raise it early and route the actual work to an elder law attorney.

## Property and casualty

Unglamorous and consistently neglected.

- **Homeowners forms** range from named-peril to broad open-peril coverage on the dwelling; the widely used form covers the dwelling on an open-peril basis and personal property on a named-peril basis. Check that the dwelling is insured to **replacement cost**, not market value, and watch coinsurance provisions that reduce a partial-loss payout when the home is underinsured.
- **Exclusions matter.** Flood and earthquake are excluded from standard homeowners policies and require separate coverage. Sub-limits on jewelry, art, firearms, and business property routinely surprise clients; scheduling those items fixes it.
- **Auto liability limits** are often left at state minimums, which are wildly inadequate for a client with assets and future income.
- **Umbrella liability** sits above the auto and homeowners limits, is inexpensive per million of coverage, and is usually the highest return-on-premium recommendation you will make. It requires specified underlying limits, so review those first.

## Business insurance

**Key person** coverage indemnifies the business for the loss of someone whose death or disability would materially impair operations; the business owns the policy, pays the premium, and is the beneficiary. **Buy-sell funding** backs a written agreement obligating transfer of an ownership interest on death, disability, or withdrawal. Under a **cross-purchase**, each owner insures the others — buyers get a basis increase, but the policy count grows quickly. Under an **entity purchase** or stock redemption, the business owns one policy per owner — simpler, but survivors get no basis increase.

## Titling, beneficiaries, and the estate plan

Life insurance death benefits are generally **income tax free** to the beneficiary. But if the insured holds **incidents of ownership** — the right to change the beneficiary, borrow against the policy, or surrender it — the death benefit is included in the insured's **gross estate** for estate tax purposes. That is the entire reason irrevocable life insurance trusts exist.

Practical habits: audit beneficiary designations at every review, avoid naming minors directly, be careful naming an estate as beneficiary (it drags the proceeds through probate and exposes them to creditors), and never let a divorce or a death pass without a designation review.

## Annuities as longevity insurance

Strip away the sales noise and an income annuity does something a portfolio cannot: it pools longevity risk. A single premium immediate annuity or a deferred income annuity converts a lump sum into a guaranteed lifetime payment, backed by the insurer's claims-paying ability. Used to cover **essential** spending not already covered by Social Security and pensions, it lets the remaining portfolio be invested for growth with less fear. Used indiscriminately, it is an expensive, illiquid, tax-inefficient wrapper. The distinction is whether it is solving an identified longevity or behavioral problem.`,
  pitfalls: [
    "Optimizing the portfolio for a client who has $250,000 of auto liability coverage, no umbrella, and no individual disability policy. Protection comes before optimization.",
    "Quoting group disability coverage as though it replaces 60% of income without adjusting for the fact that employer-paid benefits are taxable.",
    "Presenting a permanent life illustration from the non-guaranteed column without walking the client through the guaranteed column and the cost structure.",
    "Selling a long-term care benefit with no inflation protection, so a benefit that looked adequate at 55 covers a fraction of the cost at 85.",
    "Never auditing beneficiary designations. A contract beneficiary overrides the will, and stale designations after divorce or death are among the most common and most painful planning failures.",
    "Letting a client self-insure long-term care by default rather than by decision, so the family discovers the plan only during a crisis.",
  ],
  keyTerms: [
    {
      term: 'Human life value',
      definition:
        "The present value of the insured's future earnings net of self-consumption and taxes; used as a benchmark for maximum insurable interest.",
    },
    {
      term: 'Capital retention approach',
      definition:
        'A needs analysis that assumes only the income from the death benefit and existing assets is spent, preserving principal for a survivor or heirs.',
    },
    {
      term: 'Own-occupation definition',
      definition:
        'A disability definition paying benefits when the insured cannot perform the material duties of their own occupation, even if they earn income in another field.',
    },
    {
      term: 'Elimination period',
      definition:
        'The waiting period between the onset of disability or need for care and the start of benefit payments; functionally a time deductible.',
    },
    {
      term: 'Incidents of ownership',
      definition:
        'Rights over a life policy — changing beneficiaries, borrowing, surrendering — whose retention by the insured causes the death benefit to be included in the gross estate.',
    },
    {
      term: 'Umbrella liability policy',
      definition:
        'Excess liability coverage sitting above required underlying auto and homeowners limits, typically inexpensive relative to the protection provided.',
    },
    {
      term: 'Coinsurance provision',
      definition:
        'A property insurance clause reducing partial-loss payouts when the dwelling is insured below a stated percentage of replacement cost.',
    },
    {
      term: 'Buy-sell agreement',
      definition:
        "A binding contract requiring transfer of a business interest on a triggering event, commonly funded with life or disability insurance so the purchase money exists.",
    },
  ],
  confusions: [
    {
      dont: 'Replacement cost, the amount to rebuild the structure',
      with: 'Market value, which includes land and location and is the wrong basis for dwelling coverage',
    },
    {
      dont: 'Own-occupation disability, which pays if you cannot do your own job',
      with: 'Any-occupation disability, which pays only if you cannot do any job you are suited for',
    },
    {
      dont: 'A cross-purchase buy-sell, where the owners insure each other and buyers get a basis increase',
      with: 'An entity-purchase buy-sell, where the business owns the policies and survivors get no basis increase',
    },
    {
      dont: 'Medicare, the federal health program tied to age or disability',
      with: 'Medicaid, the needs-based program that pays for custodial long-term care after a spend-down',
    },
  ],
  formulas: [
    {
      name: 'Needs-based life insurance requirement',
      formula:
        'Insurance need = (Income replacement PV + Final expenses + Debt payoff + Education fund + Emergency reserve) − (Existing liquid assets + Existing life insurance + Survivor benefits)',
      note: 'The income replacement present value is the discounted value of the annual survivor income shortfall over the years it is needed. Use a real (inflation-adjusted) discount rate so the income stream keeps purchasing power.',
    },
    {
      name: 'Capital retention death benefit',
      formula: 'Death benefit = Annual survivor income need ÷ Assumed real rate of return',
      note: 'A perpetuity calculation. Preserves principal indefinitely, so it produces a larger — and more expensive — number than a capital liquidation approach.',
    },
    {
      name: 'Human life value',
      formula: 'HLV = PV of (Annual earnings − Taxes − Self-consumption) over remaining working years',
      note: 'Discount at an after-tax rate and grow earnings at an assumed wage inflation rate.',
    },
  ],
};
