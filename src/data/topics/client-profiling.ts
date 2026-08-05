import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'client-profiling',
  title: 'Client Profiling and Suitability',
  weight: '~3%',
  order: 16,
  summary:
    "Every recommendation an investment adviser makes must trace back to a documented client profile. The exam tests the specific data points that must be gathered, the trade-offs baked into each investment objective, the three different meanings of the word risk, and why an adviser's fiduciary duty makes profiling mandatory rather than a courtesy.",
  body: `## Why Profiling Comes First

An investment adviser owes a **fiduciary duty** to each client. That duty has two halves: a **duty of care** and a **duty of loyalty**. The duty of care includes an obligation to provide advice that is in the client's **best interest** — and it is logically impossible to know what is in someone's best interest without first knowing who they are. That is why the SEC's fiduciary interpretation states that an adviser must make a **reasonable inquiry** into the client's objectives and circumstances, and must **update** that inquiry over time.

The practical consequence: an adviser who recommends a portfolio before gathering a profile has breached the duty of care **even if the portfolio performs well**. Suitability is judged at the time of the recommendation, on the information the adviser had or should have had — not by hindsight.

## The Financial Profile

### Income and Cash Flow

Gross income matters less than **discretionary cash flow** — what is left after taxes, fixed obligations, and living expenses. A client earning $400,000 with $390,000 of outflow has less investable capacity than one earning $120,000 who saves $40,000. **Stability** matters too: a tenured professor and a commissioned salesperson with the same average income have very different capacity to hold volatile assets.

### Net Worth and Liquid Net Worth

**Net worth** is total assets minus total liabilities. **Liquid net worth** excludes illiquid holdings — primary residence, closely held business interests, restricted stock, collectibles, limited partnership units. Suitability standards for private placements and other illiquid products are written against **liquid** net worth. A client whose entire net worth sits in a family business is not a wealthy investor for portfolio purposes; they are a **concentrated, illiquid** investor.

### Existing Holdings and Debt

The adviser must consider assets **held away** — an employer 401(k), a spouse's IRA, a legacy stock position, an inherited annuity. A recommendation that looks balanced in isolation can create dangerous concentration once held-away assets are added. Debt matters too: paying down a 22% credit card balance beats any risk-adjusted return an adviser can promise, and margin or home equity borrowing amplifies portfolio risk.

## Investment Objectives and Their Trade-Offs

There is no objective without a cost. The exam wants you to know what each one gives up.

| Objective | What it seeks | What it sacrifices | Typical vehicles |
| --- | --- | --- | --- |
| **Preservation of capital** | Nominal principal safety | Real growth; exposed to inflation risk | T-bills, money funds, insured CDs, short high-grade bonds |
| **Current income** | Predictable cash flow | Growth; interest rate and credit risk | Bonds, preferred stock, dividend equities, annuities |
| **Growth** | Long-term capital appreciation | Current income; higher volatility | Common stock, equity funds, growth ETFs |
| **Growth and income** | Balance of both | Optimal performance in either dimension | Balanced funds, blue chips, utilities |
| **Speculation** | Outsized gain | Substantial risk of total loss | Options, penny stocks, leveraged funds, initial offerings |
| **Tax efficiency** | Minimizing tax drag | Yield and flexibility | Municipals, index funds, tax-managed funds, deferral vehicles |

Two objectives frequently conflict. **Capital preservation and growth cannot both be maximized.** A client who says "I want no losses but I need to beat inflation" is describing an impossible portfolio, and the adviser's job is to surface the conflict, not paper over it.

## Three Kinds of Risk

This distinction is heavily tested because candidates collapse the three into one.

- **Risk tolerance** is *psychological* — how much volatility the client can experience without abandoning the plan. Measured through conversation and questionnaires; it is subjective and can be wrong about itself.
- **Risk capacity** is *financial* — how much loss the client can absorb without impairing their goals. Measured objectively from net worth, income stability, time horizon, and obligations.
- **Risk need** (or required risk) is *mathematical* — how much risk must be taken to reach the stated goal given the current asset base and savings rate.

The three often disagree. A 30-year-old with a stable job and a 35-year horizon has **high capacity** but may have **low tolerance**. A retiree who has already accumulated more than they will ever spend has **high capacity** and **low need** — taking more risk is unnecessary even though it is affordable. Good advice reconciles the three explicitly: reduce need by saving more or spending less, build tolerance through education, and never quietly exceed capacity.

## Time Horizon, Liquidity, and Taxes

**Time horizon** is the period until the money is needed, and it may be **multi-stage**: a 50-year-old has a 15-year horizon to retirement and a 40-year horizon for the last dollar spent. Horizon drives the equity allocation more than any other single input.

**Liquidity needs** cover the emergency reserve (commonly three to six months of expenses), known near-term outlays, and the client's tendency toward unplanned withdrawals. They are the reason a technically suitable long-term allocation can still be wrong.

**Tax status** includes the marginal federal and state bracket, the mix of taxable versus tax-deferred versus tax-free accounts, loss carryforwards, and embedded gains. The bracket decides whether a **municipal bond** beats a taxable bond after tax, and embedded gains can make repositioning a legacy position costly enough to change the recommendation.

## Constraints and Unique Circumstances

- **Legal and regulatory constraints** — trust documents, ERISA obligations, court orders in guardianships, insider restrictions and Rule 144 limits.
- **Concentrated positions** — employer stock, founder shares, inherited holdings. Low basis, restricted status, and emotional attachment all limit what the adviser can do.
- **ESG or values-based preferences** — religious screens, fossil-fuel exclusions. These are legitimate profile inputs and belong in the documentation.
- **Legacy and charitable goals** — a client planning to leave assets to heirs or charity may hold appreciated assets for the step-up in basis or donate them directly.
- **Non-financial considerations** — health, dependents including special-needs family members, marital status, expected inheritance, and the client's own financial sophistication.

## The Investment Policy Statement

An **investment policy statement (IPS)** converts the profile into a governing document. It is not required by federal law for every retail relationship, but it is standard fiduciary practice and is heavily tested. Typical components:

1. **Purpose and scope** — whose assets, which accounts.
2. **Objectives** — return target and risk tolerance, in measurable terms.
3. **Constraints** — time horizon, liquidity, taxes, legal, unique circumstances.
4. **Asset allocation policy** — target weights and permitted ranges.
5. **Permitted and prohibited investments** — for example, no naked options.
6. **Roles and responsibilities** — adviser, client, custodian, other fiduciaries.
7. **Benchmarks and evaluation** — how performance will be judged.
8. **Rebalancing and monitoring** — triggers and review frequency.

The IPS matters most in a downturn: it is the pre-committed rule that keeps a frightened client from selling at the bottom, and it is the adviser's evidence that the strategy was agreed in advance.

## Fiduciary Duty Versus Suitability Versus Reg BI

| | **Investment adviser** | **Broker-dealer (Reg BI)** |
| --- | --- | --- |
| Standard | **Fiduciary** — best interest, applied to the **entire relationship** | **Best interest** at the time of a **recommendation** |
| Duration | **Ongoing** duty to monitor when the relationship is continuous | Generally **transaction-based**, no ongoing monitoring unless agreed |
| Conflicts | Must **eliminate or fully and fairly disclose**; client consent required for some | Must **identify and disclose**, and **mitigate** certain conflicts |
| Compensation disclosure | Full disclosure of fees and material conflicts in **Form ADV Part 2** | Disclosed in **Form CRS** and the relationship summary |

The pre-2020 FINRA suitability rule required a recommendation to be suitable; **Reg BI** raised that to best interest and expressly bars putting the firm's interest ahead of the customer's. But an adviser's fiduciary duty is still broader: it attaches to **advice and the relationship**, not just to individual recommendations, and it runs continuously. On the exam, if the question involves an **IAR** and the phrase "ongoing duty," fiduciary is the answer.`,
  pitfalls: [
    "Do not judge suitability by outcome. A recommendation is evaluated on the information known at the time it was made, so a profitable but unsuitable recommendation is still a violation.",
    "Risk tolerance is not risk capacity. A client can be emotionally comfortable with volatility they cannot financially afford, and vice versa — the exam tests the case where the two disagree.",
    "Liquid net worth, not total net worth, is the relevant measure for illiquid and private-placement suitability. A client whose wealth is a house and a business is not a liquid investor.",
    "Held-away assets count. A recommendation that is diversified inside one account can create dangerous concentration once the client's 401(k) and spouse's holdings are added in.",
    "An adviser's fiduciary duty applies to the whole relationship and continues over time; a broker-dealer's Reg BI obligation attaches at the moment of a recommendation and carries no automatic ongoing monitoring duty.",
    "Do not accept conflicting objectives at face value. If a client demands both no principal loss and inflation-beating growth, the adviser must surface the conflict rather than build a portfolio that quietly fails one of them.",
    "The profile must be updated. A stale profile from account opening does not support a recommendation made after a divorce, job loss, inheritance, or retirement.",
  ],
  keyTerms: [
    {
      term: 'Investment policy statement (IPS)',
      definition:
        'A written document that records the client objectives, constraints, target asset allocation, permitted investments, benchmarks, and rebalancing rules that govern the portfolio.',
    },
    {
      term: 'Liquid net worth',
      definition:
        'Net worth excluding illiquid assets such as a primary residence, closely held business interests, and restricted securities; the standard measure for illiquid-product suitability.',
    },
    {
      term: 'Risk tolerance',
      definition:
        "The client's psychological willingness to endure portfolio volatility without abandoning the strategy.",
    },
    {
      term: 'Risk capacity',
      definition:
        "The client's objective financial ability to absorb loss without impairing their goals, driven by net worth, income stability, time horizon, and obligations.",
    },
    {
      term: 'Risk need',
      definition:
        'The level of risk that must be accepted to reach a stated goal given current assets, savings rate, and time horizon.',
    },
    {
      term: 'Time horizon',
      definition:
        'The period until invested funds are needed; often multi-stage, covering both the accumulation phase and the full distribution period.',
    },
    {
      term: 'Duty of care',
      definition:
        "The fiduciary obligation to provide advice in the client's best interest, seek best execution, and monitor advice over the course of the relationship.",
    },
    {
      term: 'Regulation Best Interest (Reg BI)',
      definition:
        "The SEC rule requiring a broker-dealer making a recommendation to a retail customer to act in that customer's best interest, without placing the firm's interest ahead of the customer's.",
    },
  ],
  confusions: [
    {
      dont: 'Risk tolerance — a psychological willingness to tolerate volatility',
      with: 'Risk capacity — an objective financial ability to absorb loss',
    },
    {
      dont: "Investment adviser fiduciary duty — applies to the entire relationship and continues over time",
      with: 'Reg BI best-interest obligation — attaches to a specific recommendation to a retail customer',
    },
    {
      dont: 'Net worth — total assets minus total liabilities',
      with: 'Liquid net worth — the subset readily convertible to cash, used for illiquid-product suitability',
    },
    {
      dont: 'Investment objective — what the client is trying to achieve, such as growth or income',
      with: 'Investment constraint — a limitation on how the objective may be pursued, such as liquidity, taxes, or a trust restriction',
    },
    {
      dont: 'Preservation of capital — protection of nominal principal, which still loses purchasing power',
      with: 'Preservation of purchasing power — protection of real value, which requires accepting some volatility',
    },
  ],
};
