import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'insurance-annuities',
  title: 'Insurance-Based Products and Annuities',
  weight: '~3%',
  order: 14,
  summary:
    "Insurance products transfer risk; annuities transfer longevity risk. The exam tests what distinguishes term from permanent coverage, how a separate account makes a product a security, the difference between accumulation units and annuity units, the trade-off among payout options, and the LIFO ordinary-income tax treatment of non-qualified annuity withdrawals.",
  body: `## Why an adviser needs this

Insurance is a **risk-transfer contract**, not primarily an investment. When a product's value depends on the performance of a separate investment account, however, it becomes a **security** as well as an insurance contract — and it lands squarely inside an adviser's suitability and disclosure obligations. Most exam points come from that intersection.

## Life insurance types

### Term

Pure death benefit for a stated period. **No cash value.** Premiums are lowest per dollar of coverage at younger ages and rise sharply at renewal as the insured ages. **Level term** keeps the premium and face amount fixed for the term; **decreasing term** reduces the death benefit over time and is often used to cover a mortgage. **Convertibility** lets the owner exchange the policy for permanent coverage without new evidence of insurability. Term is the right answer when the need is **temporary and the budget is tight** — income replacement for young children, for example.

### Whole life (permanent, ordinary)

Coverage for life with a **guaranteed level premium**, a **guaranteed death benefit**, and a **guaranteed minimum cash value** that builds on a fixed schedule. The insurer bears the investment risk and invests in its **general account**. Cash value grows **tax-deferred**; the owner may take **policy loans** against it, which reduce the death benefit if unpaid but are not taxable while the policy stays in force. Whole life is inflexible and expensive per dollar of coverage — that inflexibility is exactly what the exam rewards you for identifying.

### Universal life

Permanent coverage with **flexible premiums and an adjustable death benefit**. Payments go into a cash value account credited with interest at a rate the insurer declares (subject to a guaranteed floor); mortality and expense charges are deducted monthly. The flexibility is real but so is the danger: **if the cash value is exhausted by charges, the policy lapses**. Universal life is not a security — the general account bears the investment risk.

### Variable life

Permanent coverage whose cash value — and death benefit above a guaranteed minimum — depends on **subaccounts in the insurer's separate account** chosen by the policyowner. The **policyowner bears the investment risk**, so a variable policy is **a security and an insurance product**, requiring a **prospectus** and, for the person selling it, both **securities registration and a state insurance license**. Premiums are typically fixed and scheduled.

### Variable universal life (VUL)

The combination: **flexible premiums** of universal life plus **separate-account investment** of variable life. Maximum flexibility, maximum owner-borne risk, and the highest layered cost. Also a security.

### The separate account concept

A **separate account** is an insulated pool of assets held apart from the insurer's general account and invested according to subaccount objectives. It is the dividing line the exam cares about: **general account = insurer takes the investment risk, not a security; separate account = client takes the investment risk, is a security.**

## Annuities: the structure

An annuity is a contract with an insurance company designed to **provide income the owner cannot outlive**. Two phases:

- **Accumulation phase** — money goes in (single premium or periodic), grows tax-deferred, and the owner may withdraw or surrender. In a variable contract, purchase payments buy **accumulation units**, whose number rises with each contribution and whose value floats with subaccount performance.
- **Annuitization (payout) phase** — accumulation units are converted to a **fixed number of annuity units** based on the account value, the payout option, the assumed interest rate, and mortality tables. From then on **the number of annuity units never changes**; the **value per unit fluctuates**, so the check varies. Annuitization is generally **irrevocable** and ends access to the lump sum.

### Fixed, variable, and indexed

- **Fixed annuity** — the insurer guarantees a minimum interest rate and a fixed dollar payout from its **general account**. The insurer bears investment risk; the owner bears **purchasing power (inflation) risk**. Not a security.
- **Variable annuity** — payments are invested in **separate account subaccounts**; the owner bears investment risk and payouts vary. **A security**, sold with a prospectus, requiring securities and insurance licensing.
- **Indexed (equity-indexed) annuity** — credits interest tied to a market index subject to a **participation rate, a cap, and a guaranteed minimum floor**. Sold as insurance in most states rather than as a federally registered security; regulators watch these closely because the crediting formulas are opaque and surrender periods are long.

### Immediate vs deferred

An **immediate annuity** is purchased with a single premium and begins payments within about a year — no accumulation phase. A **deferred annuity** accumulates first and pays later; only deferred contracts have a surrender-charge schedule and an accumulation phase.

## Payout options

The rule that decides most questions: **the more the insurer guarantees, the smaller each payment.**

| Option | What it promises | Relative payment |
| --- | --- | --- |
| **Life only (straight life)** | Income for the annuitant's life; **nothing to anyone at death** | **Largest payment** |
| **Life with period certain** | Life, but at least a set number of years to a beneficiary | Smaller |
| **Unit (or cash) refund** | Life, plus the remainder of the principal to a beneficiary | Smaller |
| **Joint and last survivor** | Income until the **second** of two people dies | **Smallest payment** |

Life only pays most because the insurer's obligation ends at death; joint and last survivor pays least because two lives must be covered. A **period certain only** option (payments for a set term, no life contingency) is not a true life annuity at all.

## Costs and features

- **Surrender charges** — a declining schedule (often 7 to 10 years, sometimes longer) imposed on withdrawals above a free amount during the early years of a deferred contract. Long surrender periods on an older client are a red flag.
- **Mortality and expense (M&E) risk charge** — an ongoing asset-based fee compensating the insurer for guaranteeing lifetime payments regardless of how long the annuitant lives and for holding expense charges level.
- Also expect **administrative fees, subaccount management fees, and rider charges** for guaranteed income or death benefits. Layered costs are why annuity expenses commonly exceed comparable mutual fund costs.
- **Section 1035 exchange** — a **tax-free exchange** of one annuity or life policy for another of like kind. It preserves cost basis and defers gain, but it **does not reset surrender charges or fees** and often starts a **new surrender period**. Repeated exchanges to generate commissions are **churning/twisting** and a classic violation.

## Taxation of annuities

- Growth inside the contract is **tax-deferred**; there is **no annual 1099 for internal gains**.
- On a **non-qualified** annuity (purchased with after-tax dollars), the cost basis is not taxed again, but partial withdrawals come out **earnings first — LIFO** — so early withdrawals are **fully taxable** until earnings are exhausted.
- All taxable amounts are **ordinary income, never long-term capital gain**, no matter how long the contract was held or what the subaccounts held. This is the single most-missed annuity tax point.
- Withdrawals before **age 59½** generally incur a **10% penalty** on the taxable portion, on top of ordinary income tax, subject to statutory exceptions.
- Annuitized payments are split by an **exclusion ratio**: the portion representing return of basis is tax-free, the rest is ordinary income, until basis is fully recovered.
- **No step-up in basis at death** — an inherited annuity carries embedded ordinary income to the beneficiary, unlike appreciated stock.

## Suitability concerns

State regulators bring more annuity cases than almost any other product category. Watch for:

- **A variable or deferred annuity inside an IRA or 401(k)** — tax deferral is redundant, and the client pays annuity costs for a benefit already provided.
- **Long surrender periods relative to age, health, or liquidity needs**, especially for a client who may need principal within the surrender window.
- **Replacement or 1035 exchange** that restarts surrender charges without a demonstrable benefit.
- **Costs and riders not clearly disclosed**, or performance illustrated as if guaranteed.
- A variable annuity's returns fluctuate; only the mortality guarantee is a guarantee. **Calling a variable annuity "safe" or "guaranteed" is a misrepresentation.**`,
  pitfalls: [
    "Do not confuse the phases: the number of accumulation units varies while their value floats, but once annuitized the number of annuity units is fixed and only the unit value changes — that is why the payment amount varies.",
    "Life only (straight life) pays the largest periodic amount precisely because it leaves nothing to a beneficiary; joint and last survivor pays the smallest. The bigger the guarantee, the smaller the check.",
    "All taxable annuity distributions are ordinary income, never long-term capital gains, regardless of the holding period or what the subaccounts owned — and there is no step-up in basis at death.",
    "Non-qualified annuity withdrawals are LIFO: earnings come out first and are fully taxable, unlike a mutual fund where you recover basis pro rata.",
    "A 1035 exchange is tax-free but not cost-free — it typically restarts a new surrender-charge schedule, and exchanging for commissions is a violation.",
    "Placing a tax-deferred annuity inside an IRA or other qualified plan buys deferral the account already has, so the added cost is rarely justifiable.",
    "Fixed annuities and universal life are general-account products and are not securities; variable annuities and variable life put the investment risk on the client and are securities requiring a prospectus and dual licensing.",
  ],
  keyTerms: [
    {
      term: 'Separate account',
      definition:
        "An insulated pool of assets held apart from the insurer's general account and invested in subaccounts chosen by the contract owner; because the owner bears the investment risk, products funded this way are securities.",
    },
    {
      term: 'Accumulation unit',
      definition:
        'The unit of ownership in a variable contract during the pay-in phase; the number of units grows with contributions and the value per unit changes with subaccount performance.',
    },
    {
      term: 'Annuity unit',
      definition:
        'The fixed number of units established at annuitization; the count never changes thereafter, so the payment varies only as the value per unit rises or falls.',
    },
    {
      term: 'Annuitization',
      definition:
        'The generally irrevocable conversion of an annuity account value into a stream of periodic payments under a selected payout option, based on account value, assumed interest rate, and mortality tables.',
    },
    {
      term: 'Mortality and expense (M&E) risk charge',
      definition:
        'An ongoing asset-based fee that compensates the insurer for guaranteeing income for life regardless of longevity and for keeping administrative charges level.',
    },
    {
      term: 'Surrender charge',
      definition:
        'A declining fee applied to withdrawals above a free amount during the early years of a deferred contract, commonly running seven to ten years and a central suitability issue for older clients.',
    },
    {
      term: 'Section 1035 exchange',
      definition:
        'A tax-free exchange of one life insurance or annuity contract for another of like kind that preserves cost basis and defers gain, but does not avoid new surrender charges or fees.',
    },
    {
      term: 'Exclusion ratio',
      definition:
        'The fraction of each annuitized payment treated as a tax-free return of the investment in the contract; the remainder is ordinary income, and the exclusion ends once basis is fully recovered.',
    },
    {
      term: 'Cash value',
      definition:
        'The living benefit accumulating inside a permanent life policy, which grows tax-deferred and may be borrowed against; policy loans reduce the death benefit if not repaid.',
    },
  ],
  confusions: [
    {
      dont: 'Fixed annuity — general account, insurer bears investment risk, not a security',
      with: 'Variable annuity — separate account, client bears investment risk, is a security requiring a prospectus',
    },
    {
      dont: 'Accumulation units, which vary in number as contributions are made',
      with: 'Annuity units, which are fixed in number at annuitization while their value fluctuates',
    },
    {
      dont: 'Life only, which pays the most and stops at death',
      with: 'Joint and last survivor, which pays the least because it covers two lives',
    },
    {
      dont: 'Term insurance — temporary, no cash value, lowest initial premium',
      with: 'Whole life — permanent, guaranteed cash value, level premium, far higher cost',
    },
    {
      dont: 'Universal life, whose cash value earns an insurer-declared rate with a guaranteed floor',
      with: 'Variable universal life, whose cash value rides separate-account subaccounts with no floor',
    },
    {
      dont: 'Annuity gains taxed as ordinary income with no step-up at death',
      with: 'Appreciated stock taxed at long-term capital gain rates and stepped up at death',
    },
  ],
  formulas: [
    {
      name: 'Exclusion ratio',
      formula: 'Exclusion ratio = Investment in the contract / Expected total return',
      note: 'Multiply by the payment to get the tax-free portion; the balance is ordinary income. Once basis is fully recovered, payments become fully taxable.',
    },
  ],
  workedExamples: [
    {
      title: 'Exclusion ratio on a non-qualified annuity',
      setup:
        "A client annuitizes a non-qualified annuity. His investment in the contract — the after-tax premiums he paid in — is $120,000. Under the payout option selected he will receive $1,000 a month, and his life expectancy under the IRS tables is 25 years. How much of each payment is taxable?",
      steps: [
        "Compute the expected total return, which is the payment times the number of payments expected: 25 years × 12 months = 300 payments.",
        "Multiply: $1,000 × 300 = $300,000 of expected total return.",
        "Form the ratio: Exclusion Ratio = Investment in the Contract / Expected Total Return = $120,000 / $300,000.",
        "Divide: 120,000 / 300,000 = 0.40, or 40%.",
        "Apply it to a single payment: tax-free portion = 40% × $1,000 = $400. This is a return of his own after-tax basis and is not taxed again.",
        "The remainder is taxable: $1,000 − $400 = $600, taxed as ORDINARY INCOME.",
        "Confirm the basis recovers exactly: $400 × 300 payments = $120,000, the full investment in the contract.",
      ],
      answer:
        "The exclusion ratio is 40%. Of each $1,000 payment, $400 is a tax-free return of basis and $600 is ordinary income. If he outlives his life expectancy the basis is exhausted and every later payment is 100% taxable; if he dies before recovering it, the unrecovered basis is deductible on his final return.",
      watchOut:
        "Calling the $600 a long-term capital gain because the contract was held for decades and the subaccounts owned stock. Every taxable dollar out of an annuity is ordinary income, and there is no step-up in basis at death. The other frequent slip is inverting the ratio — $300,000 / $120,000 = 2.5, which is not a percentage of anything.",
    },
    {
      title: 'Pre-annuitization withdrawal under LIFO',
      setup:
        "A 55-year-old owns a non-qualified deferred annuity. She paid $50,000 of after-tax premiums and the contract is now worth $86,000. She withdraws $20,000 without annuitizing. What is taxable, and what penalty applies?",
      steps: [
        "Separate the two layers inside the contract: contract value − investment in the contract = $86,000 − $50,000 = $36,000 of earnings, sitting on top of $50,000 of basis.",
        "Apply the ordering rule. A withdrawal from a non-qualified annuity BEFORE annuitization comes out earnings first — last in, first out.",
        "Compare the withdrawal against the earnings layer: $20,000 requested versus $36,000 of earnings available. The entire withdrawal fits inside the earnings layer.",
        "Therefore 100% of the $20,000 is taxable as ordinary income, and no basis is recovered on this withdrawal.",
        "Update the contract: $36,000 − $20,000 = $16,000 of earnings remain, and all $50,000 of basis is still untouched.",
        "Add the early-distribution penalty. She is under 59½, so 10% applies to the taxable portion: 10% × $20,000 = $2,000.",
      ],
      answer:
        "The full $20,000 is ordinary income and she owes a $2,000 early-withdrawal penalty on top of the income tax. Her remaining basis is $50,000 and remaining earnings are $16,000.",
      watchOut:
        "Applying FIFO or pro-rata basis recovery, the way a mutual fund redemption works. Pro rata would treat $50,000 / $86,000 = 58.1% of the withdrawal, about $11,628, as a tax-free return of basis and only $8,372 as taxable — understating taxable income by nearly $11,600. Basis comes out LAST before annuitization. Once the contract IS annuitized the rule changes: annuitized payments use the exclusion ratio instead.",
    },
    {
      title: 'Surrender charge net of the free-withdrawal allowance',
      setup:
        "A deferred annuity is in its third contract year with an account value of $120,000. The contract permits a free withdrawal of 10% of account value each year; amounts above that are subject to the surrender schedule, which is 6% in year three. The owner withdraws $30,000. What is the surrender charge and what does she receive?",
      steps: [
        "Compute the free-withdrawal allowance: 10% × $120,000 = $12,000. This slice carries no surrender charge.",
        "Find the chargeable excess: $30,000 requested − $12,000 free = $18,000.",
        "Apply the year-three rate to the excess only: 6% × $18,000 = $1,080.",
        "Net the proceeds: $30,000 − $1,080 = $28,920 paid out.",
        "Keep the tax analysis separate: the earnings portion of the withdrawal is ordinary income under LIFO, and a 10% early-distribution penalty applies on that taxable amount if the owner is under 59½. Neither is affected by the $1,080 contract charge.",
      ],
      answer:
        "The surrender charge is $1,080 and she receives $28,920. Income tax and any early-withdrawal penalty are computed separately.",
      watchOut:
        "Applying the 6% to the entire withdrawal: 6% × $30,000 = $1,800, which ignores the free-withdrawal allowance and overstates the charge by $720. The mirror error is treating the 6% as a tax — it is a contract charge paid to the insurer to recover unamortized commissions, and income tax is assessed on top of it.",
    },
    {
      title: 'Accumulation units purchased at two different unit values',
      setup:
        "A client contributes $6,000 to a variable annuity when the accumulation unit value is $12.00, and another $6,000 six months later when the accumulation unit value is $15.00. At year end the accumulation unit value is $16.00. How many units does she own and what is the contract worth?",
      steps: [
        "First purchase: $6,000 / $12.00 per unit = 500 accumulation units.",
        "Second purchase: $6,000 / $15.00 per unit = 400 accumulation units. The higher unit value buys fewer units for the same dollars.",
        "Add them: 500 + 400 = 900 accumulation units. During the accumulation phase the NUMBER of units changes with every contribution.",
        "Value the contract at the current unit value: 900 units × $16.00 = $14,400.",
        "Compare with money contributed: $6,000 + $6,000 = $12,000, so the gain is $14,400 − $12,000 = $2,400, growing tax-deferred inside the contract with no annual 1099.",
        "Compute her average cost per unit: $12,000 / 900 units = $13.33, against a simple average of the two prices of ($12.00 + $15.00) / 2 = $13.50 — the dollar-cost averaging result.",
      ],
      answer:
        "She owns 900 accumulation units worth $14,400 on $12,000 contributed, a $2,400 tax-deferred gain, at an average cost of $13.33 per unit versus a $13.50 average price.",
      watchOut:
        "Averaging the two unit values and dividing once: $12,000 / $13.50 = 888.9 units, which is fewer than she actually owns. Each contribution buys at its own unit value. Do not confuse these with annuity units either: at annuitization the accumulation units convert into a FIXED number of annuity units, after which the count never changes and only the value per unit moves the size of the check.",
    },
  ],
};
