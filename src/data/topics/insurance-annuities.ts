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
};
