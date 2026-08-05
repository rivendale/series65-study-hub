import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'client-profiling',
  title: 'Client Profiling and Suitability',
  weight: '~3%',
  order: 16,
  summary:
    "Every recommendation an investment adviser makes must trace back to a documented client profile. The exam tests the specific data points that must be gathered, the trade-offs baked into each investment objective, the three different meanings of the word risk, and why an adviser's fiduciary duty makes profiling mandatory rather than a courtesy.",
  body: `## Why Profiling Comes First

An investment adviser owes a **fiduciary duty** to each client, comprising a **duty of care** and a **duty of loyalty**. The duty of care requires advice that is in the client's **best interest** — and it is logically impossible to know what is in someone's best interest without first knowing who they are. Hence the SEC's fiduciary interpretation: an adviser must make a **reasonable inquiry** into the client's objectives and circumstances, and must **update** that inquiry over time.

The practical consequence: an adviser who recommends a portfolio before gathering a profile has breached the duty of care **even if the portfolio performs well**. Suitability is judged at the time of the recommendation, on what the adviser knew or should have known — not by hindsight. Nearly every decision that follows is a **trade-off** with no universally right answer — only a right answer for this client — and the profile is the only place that answer lives.

## Non-Financial Data

Half the profile is not numeric.

- **Age and life stage** — an anchor for horizon, but only an anchor. A 62-year-old still working with a pension is not in the position of a 62-year-old who retired at 55 without one.
- **Marital status and dependents** — a spouse, minor children, a disabled adult child, or an aging parent create obligations that constrain risk-taking now.
- **Occupation and job stability** — the client's **human capital**. A tenured professor's earnings behave like a bond; a commissioned salesperson's behave like a stock, and the portfolio should lean the other way.
- **Health and life expectancy** — chronic illness raises the odds of large uninsured outlays; excellent health makes **longevity risk** the bigger threat.
- **Financial sophistication** — it changes what may be recommended, never the standard of care.
- **Expected inheritance** — raises capacity only if genuinely likely; a hoped-for bequest is not an asset.

## The Financial Profile

### Income and Cash Flow

Gross income matters less than **discretionary cash flow** — what is left after taxes, fixed obligations, and living expenses. A client earning $400,000 with $390,000 of outflow has less investable capacity than one earning $120,000 who saves $40,000. **Stability** matters too, as does the form income takes: a bonus that is two-thirds of pay and paid in restricted stock is a timing problem and a concentration problem at once.

### Net Worth and Liquid Net Worth

**Net worth** is total assets minus total liabilities. **Liquid net worth** excludes illiquid holdings — primary residence, closely held business interests, restricted stock, collectibles, LP units. Private-placement suitability standards are written against **liquid** net worth: a client whose net worth sits in a family business is not a wealthy investor but a **concentrated, illiquid** one.

### Existing Holdings and Debt

The adviser must consider assets **held away** — an employer 401(k), a spouse's IRA, a legacy stock position, an inherited annuity. A recommendation that looks balanced in isolation can create dangerous concentration once they are added. Borrowing works the same logic in reverse: margin and home equity debt amplify whatever risk the portfolio already carries.

### The Balance Sheet and the Cash Flow Statement

The **balance sheet** is a **snapshot** — assets at market value, liabilities at payoff balance, net worth as the difference. It answers *what does the client have, and in what form*, exposing concentration, illiquidity, and leverage that a single net worth figure hides. The **cash flow statement** covers a **period** and answers *how much can the client add, and how reliably*; it decides whether a plan is fundable at all. Where the two disagree, the disagreement is the finding: a $2 million net worth with negative cash flow is **decumulating**, while a thin balance sheet with a large surplus belongs to an accumulator with more capacity than the snapshot shows.

## Gating Items: What Must Be Fixed Before Investing

Some conditions are not portfolio problems, and no allocation solves them.

**The emergency reserve** — **three to six months of essential expenses**, liquid and principal-stable. The point is not the return; it is that the reserve prevents a **forced sale of long-term assets at the worst possible moment**, turning a paper loss into a permanent one and often ending the plan. Six months where income is volatile or the household has a single earner, three where it is stable and dual. A 401(k) balance is not a reserve.

**Debt service** — **debt-to-income (DTI)** is monthly debt payments over **gross** monthly income, the fastest read on capacity because debt service is a fixed claim on cash flow that does not care how the portfolio performs. Rules of thumb: housing at or below roughly 28% of gross, total debt at or below roughly 36%. The ordering rule is arithmetic — retiring an 18% card balance is a **guaranteed, tax-free, risk-free** return no portfolio can promise, so high-rate consumer debt outranks investing while a low-rate mortgage does not.

**Insurance adequacy** — an uninsured catastrophe destroys a plan faster than any market. Check life cover against the income dependents rely on and the debt they would inherit, **disability** cover (the likelier event in working years and the one most often missing), liability cover with an **umbrella**, and long-term care exposure for older clients. Insurance is a **risk transfer** decision, and it precedes the allocation because it changes how much loss the portfolio must survive.

## Investment Objectives and Their Trade-Offs

There is no objective without a cost. Know what each one gives up.

| Objective | What it seeks | What it sacrifices | Typical vehicles |
| --- | --- | --- | --- |
| **Preservation of capital** | Nominal principal safety | Real growth; exposed to inflation | T-bills, money funds, insured CDs |
| **Current income** | Predictable cash flow | Growth; rate and credit risk | Bonds, preferred stock, dividend equities |
| **Growth** | Capital appreciation | Current income; higher volatility | Common stock, equity funds, growth ETFs |
| **Growth and income** | Balance of both | Optimal performance in either dimension | Balanced funds, blue chips, utilities |
| **Speculation** | Outsized gain | Risk of total loss | Options, penny stocks, leveraged funds |
| **Tax efficiency** | Minimizing tax drag | Yield and flexibility | Municipals, index funds, deferral vehicles |

Objectives frequently conflict: **capital preservation and growth cannot both be maximized.** A client who wants no losses but needs to beat inflation is describing an impossible portfolio, and the adviser must surface the conflict, not paper over it.

## Three Kinds of Risk — and a Fourth

Heavily tested, because candidates collapse these into one.

- **Risk tolerance** is *psychological* — how much volatility the client can experience without abandoning the plan. Measured by conversation and questionnaire; subjective, and it can be wrong about itself.
- **Risk capacity** is *financial* — how much loss the client can absorb without impairing their goals. Measured objectively from net worth, income stability, horizon, and obligations.
- **Risk need** is *mathematical* — how much risk must be taken to reach the stated goal given the current asset base and savings rate.
- **Risk perception** is *situational* — how risky the client currently believes an investment to be. Perception tracks the news cycle; tolerance is comparatively stable. The client who called equities reckless in March and obvious in September has not changed tolerance, and the answer is education, not a new allocation.

### Why Capacity and Tolerance Diverge

They measure different things from different evidence, so there is no reason they should agree. Capacity is arithmetic: how large a drawdown can this balance sheet and horizon absorb before a goal fails? Tolerance is temperament, and it is largely uncorrelated with wealth.

Both mismatches are dangerous, and they fail differently. **Honouring tolerance when it exceeds capacity** gives the client a portfolio they are comfortable with right up to the moment it breaks the plan — the tuition, the retirement date, the down payment. The client was never distressed on the way down; the goal simply became unreachable. That is the more serious error: the damage is permanent, and it is a breach of the duty of care. **Honouring tolerance when it falls short of capacity** gives a portfolio so conservative that inflation erodes it — comfortable for thirty years, then short. Easier to miss, but still a failure: capital preservation is not the safe default, it is a decision with its own risk.

The operating rule: **capacity is a ceiling, tolerance is a constraint beneath it, and need should be reduced rather than exceeded.** When they conflict, work the levers in order — **reduce need** (the only lever that improves the odds without adding risk), **reframe tolerance** with past drawdowns shown in dollars, **rebuild capacity** by funding the reserve and retiring high-rate debt, and only then **accept a lower probability of the goal**, in writing.

### Scenario: High Tolerance, Low Capacity

A 47-year-old surgeon earns $520,000, calls herself aggressive, and wants concentrated technology equities. The balance sheet disagrees: $180,000 invested, $410,000 of student and practice debt, three tuitions starting in six years, and no disability cover beyond a taxable group policy replacing 40% of pay.

Her tolerance is genuine; her **capacity is low**, and not because of income. Her wealth is **human capital** — earnings from a single body, undiversified, uninsured, pledged against debt. A 45% drawdown on $180,000 is survivable; the same drawdown alongside a hand injury is not. The answer is a sequence: disability cover, term life, a six-month reserve, then a short-horizon allocation for tuition and a long-horizon one for retirement, where her aggression gets an outlet capacity supports.

### Scenario: High Capacity, Low Need

A couple aged 68 hold $4.2 million, spend $135,000 a year, and receive $62,000 from Social Security and a pension. The portfolio must produce about $73,000 — roughly 1.7% of assets.

**Capacity is high**: they could absorb a severe drawdown without changing how they live. **Need is very low.** Reasoning from capacity alone gives 70% equities because they can afford it — the wrong question, since the goal is already funded and added risk can only buy a larger bequest or a failed plan. Separate the money by purpose: size the spending sleeve to the liability, and invest for growth only the surplus, whose failure costs them nothing they will experience.

## Time Horizon, Liquidity, and Taxes

**Time horizon** is the period until the money is needed, and it is often **multi-stage**: a 50-year-old has a 15-year horizon to retirement and a 40-year horizon for the last dollar spent. It drives the equity allocation more than any other single input.

**Liquidity needs** cover known near-term outlays and the client's tendency toward unplanned withdrawals — the reason a technically suitable long-term allocation can still be wrong.

**Tax status** covers the marginal federal and state bracket, the mix of taxable, tax-deferred and tax-free accounts, loss carryforwards, and embedded gains. The bracket decides whether a **municipal bond** beats a taxable bond after tax, and embedded gains can make repositioning a legacy holding costly enough to change the recommendation.

## Constraints and Unique Circumstances

- **Legal and regulatory** — trust documents, ERISA obligations, court orders in guardianships, insider restrictions and Rule 144 limits.
- **Concentrated positions** — employer stock, founder shares, inherited holdings, where low basis, restricted status, and emotional attachment all limit what the adviser can do.
- **ESG or values-based preferences** — religious screens, fossil-fuel exclusions. Legitimate profile inputs that belong in the documentation.
- **Legacy and charitable goals** — a client leaving assets to heirs or charity may hold appreciated assets for the step-up or donate them directly.

## The Investment Policy Statement

An **investment policy statement (IPS)** converts the profile into a governing document. Not required by federal law for every retail relationship, but standard fiduciary practice and heavily tested. Components:

1. **Purpose and scope** — whose assets, which accounts.
2. **Objectives** — return target and risk tolerance, in measurable terms.
3. **Constraints** — horizon, liquidity, taxes, legal, unique circumstances.
4. **Asset allocation policy** — target weights and permitted ranges.
5. **Permitted and prohibited investments** — for example, no naked options.
6. **Roles and responsibilities** — adviser, client, custodian, other fiduciaries.
7. **Benchmarks** — how performance is judged.
8. **Rebalancing and monitoring** — triggers and review frequency.

What does **not** belong: security picks, market forecasts, and return *guarantees*. An IPS promising "the portfolio will earn 8%" creates liability; one setting an objective of CPI plus 4% over rolling ten-year periods creates discipline.

The IPS matters most in a downturn: it is the pre-committed rule that keeps a frightened client from selling at the bottom, and the adviser's evidence that the strategy was agreed in advance. It is written while the client is calm so it can be relied on when the client is not.

## Keeping the Profile Current

For an ongoing relationship the duty of care is **continuous**, so the inquiry must be refreshed — at a **scheduled** review at least annually, where "no changes" is a finding to be documented, and **immediately** on a material event: marriage, divorce, a birth, death of a spouse, job loss, retirement, inheritance, a serious diagnosis, a new dependent, sale of a home or business, or a change in bracket, residence, or goals.

Two triggers are easy to miss. A **large market move** changes the allocation by drift even when nothing about the client changed, and it tests tolerance as no questionnaire can. And time is itself a change: a twenty-year horizon is now twelve. A stale profile does not support a current recommendation.

## When the Client Insists on Something Unsuitable

First distinguish two cases. An **unsolicited order** in a self-directed brokerage account is the client's own decision; the firm may accept it and must mark it **unsolicited**. An **investment adviser** giving advice or exercising discretion cannot hide behind that label — the fiduciary duty attaches to the advice itself.

The sequence: **understand the request**, because clients often name a product when they mean a goal; **explain the mismatch** in dollars against the client's stated goal; **offer a suitable alternative** serving the underlying motive; and if the client still insists, **decline**, which is always permitted. If the client proceeds anyway, **document** the recommendation, its rejection, and the instruction received, and consider carving the position into a bounded, client-directed sleeve rather than reshaping the portfolio. If it makes the strategy indefensible, **resigning the account** is legitimate.

What the adviser may not do: implement quietly and rely on the instruction as a defence, or take a blanket waiver of fiduciary duty, which is unenforceable. Consent does not convert an unsuitable recommendation into a suitable one.

## Fiduciary Duty Versus Suitability Versus Reg BI

| | **Investment adviser** | **Broker-dealer (Reg BI)** |
| --- | --- | --- |
| Standard | **Fiduciary** — best interest across the **entire relationship** | **Best interest** at the time of a **recommendation** |
| Duration | **Ongoing** duty to monitor a continuous relationship | **Transaction-based**; no monitoring duty unless agreed |
| Conflicts | Must **eliminate or fully and fairly disclose** | Must **identify, disclose**, and **mitigate** certain conflicts |
| Disclosure | Fees and material conflicts in **Form ADV Part 2** | **Form CRS** relationship summary |

The old FINRA suitability rule required a recommendation to be suitable; **Reg BI** raised that to best interest and bars putting the firm's interest ahead of the customer's. An adviser's fiduciary duty is broader still: it attaches to **advice and the relationship** rather than to individual recommendations, and it runs continuously. If a question pairs an **IAR** with the phrase "ongoing duty," fiduciary is the answer.`,
  pitfalls: [
    "Do not judge suitability by outcome. A recommendation is evaluated on the information known at the time it was made, so a profitable but unsuitable recommendation is still a violation.",
    "Risk tolerance is not risk capacity. A client can be emotionally comfortable with volatility they cannot financially afford, and vice versa — the exam tests the case where the two disagree.",
    "Liquid net worth, not total net worth, is the relevant measure for illiquid and private-placement suitability. A client whose wealth is a house and a business is not a liquid investor.",
    "Held-away assets count. A recommendation that is diversified inside one account can create dangerous concentration once the client's 401(k) and spouse's holdings are added in.",
    "An adviser's fiduciary duty applies to the whole relationship and continues over time; a broker-dealer's Reg BI obligation attaches at the moment of a recommendation and carries no automatic ongoing monitoring duty.",
    "Do not accept conflicting objectives at face value. If a client demands both no principal loss and inflation-beating growth, the adviser must surface the conflict rather than build a portfolio that quietly fails one of them.",
    "The profile must be updated. A stale profile from account opening does not support a recommendation made after a divorce, job loss, inheritance, or retirement.",
    "Debt-to-income is computed on gross income, not take-home pay. Using net income inflates the ratio and can wrongly flag a sound borrower as overextended.",
    "A retirement account balance is not an emergency reserve. The reserve must be reachable without penalty, tax, or a forced sale of long-term assets.",
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
      term: 'Risk perception',
      definition:
        'How risky a client currently believes an investment to be; it moves with recent market experience and news, unlike the comparatively stable trait of risk tolerance.',
    },
    {
      term: 'Debt-to-income ratio',
      definition:
        'Monthly debt service divided by gross monthly income; a fast objective read on risk capacity because debt payments are a fixed claim on cash flow.',
    },
    {
      term: 'Discretionary cash flow',
      definition:
        'Income remaining after taxes, debt service, insurance, and living expenses; the amount genuinely available to invest, as distinct from gross income.',
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
      dont: 'Risk tolerance — a stable personality trait measured by questionnaire and conversation',
      with: 'Risk perception — a shifting belief about how risky markets are right now, driven by recent returns',
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
      dont: 'The balance sheet — a snapshot of what the client owns and owes at one date',
      with: 'The cash flow statement — a record of inflows and outflows across a period, which decides whether a plan is fundable',
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
  workedExamples: [
    {
      title: 'Debt-to-income ratio and what it says about capacity',
      setup:
        'A client earns $9,500 a month gross and takes home $6,800. Monthly obligations are a mortgage payment including taxes and insurance of $2,280, an auto loan of $540, a student loan of $310, and a credit card minimum of $180. Compute the debt-to-income ratio and interpret it.',
      steps: [
        'Total monthly debt service: $2,280 + $540 + $310 + $180 = $3,310',
        'Debt-to-income uses GROSS income as the denominator: $3,310 / $9,500',
        'Divide: 3,310 / 9,500 = 0.3484, or about 34.8%',
        'Housing ratio separately: $2,280 / $9,500 = 0.24, or 24.0%',
        'Non-housing debt: $3,310 − $2,280 = $1,030, so $1,030 / $9,500 = 10.8%',
        'Compare with the common benchmarks: housing at or below about 28%, total debt service at or below about 36%',
      ],
      answer:
        'Total DTI is about 34.8% with a 24.0% housing ratio — inside both benchmarks, but with little headroom. Roughly 35 cents of every gross dollar is committed before taxes or living costs, so risk capacity is moderate rather than high, and the $180 card minimum should be investigated before any investing plan is built.',
      watchOut:
        'Using take-home pay in the denominator. $3,310 / $6,800 = 48.7%, which looks like financial distress and would wrongly push the adviser toward an ultra-conservative allocation. DTI is always computed on gross income. The mirror error is omitting the credit card minimum because it is small: dropping it gives $3,130 / $9,500 = 32.9% and hides the highest-rate liability on the balance sheet.',
    },
    {
      title: 'Emergency fund adequacy and the shortfall in months',
      setup:
        'A single-earner household has essential monthly expenses of $6,400. Liquid holdings are $4,200 in checking and $18,500 in a money market savings account. The client also has $30,000 in a 401(k). Using a six-month target, is the reserve adequate, and by how much does it fall short?',
      steps: [
        'Identify what counts as reserve: cash reachable without penalty or a forced sale. Checking and the money market savings qualify; the 401(k) does not.',
        'Liquid reserve: $4,200 + $18,500 = $22,700',
        'Months of coverage: $22,700 / $6,400 = 3.55 months',
        'Six-month target in dollars: 6 × $6,400 = $38,400',
        'Dollar shortfall: $38,400 − $22,700 = $15,700',
        'Shortfall expressed in months: 6 − 3.55 = 2.45 months',
        'Single earner and no second income means six months, not three, is the right target here',
      ],
      answer:
        'The reserve covers about 3.5 months against a six-month target — a shortfall of roughly $15,700, or about 2.45 months of essential expenses. Funding that gap is a gating item ahead of any new long-term allocation.',
      watchOut:
        'Counting the 401(k) as reserve. That gives ($22,700 + $30,000) / $6,400 = 8.2 months and declares the household over-funded, when in reality reaching that money means penalty, tax, and selling long-term assets in exactly the market where the emergency is most likely. The other frequent error is dividing by total spending rather than essential spending, which understates coverage and over-funds idle cash.',
    },
    {
      title: 'Net worth versus liquid net worth from a balance sheet',
      setup:
        "Assets: cash and savings $28,000; taxable brokerage $145,000; 401(k) $260,000; primary residence $520,000; closely held business interest $310,000; restricted employer stock $75,000; cars and personal property $40,000. Liabilities: mortgage $355,000; personally guaranteed business loan $90,000; auto loans $32,000; credit cards $11,000. Treat as liquid only assets convertible to cash within days without penalty (so retirement accounts are excluded), and net against them only liabilities not secured by a specific illiquid asset. The client is being shown a private placement with a liquid net worth suitability standard.",
      steps: [
        'Total assets: 28,000 + 145,000 + 260,000 + 520,000 + 310,000 + 75,000 + 40,000 = $1,378,000',
        'Total liabilities: 355,000 + 90,000 + 32,000 + 11,000 = $488,000',
        'Net worth: $1,378,000 − $488,000 = $890,000',
        'Now isolate liquid assets. Cash and savings $28,000 plus taxable brokerage $145,000 = $173,000',
        'Excluded as illiquid: the 401(k) (penalty), the residence, the business interest, the restricted stock, and personal property',
        'Liabilities secured by an illiquid asset — mortgage, business loan, auto loans — travel with those assets and are not netted here',
        'Unsecured claim against liquid assets: credit cards $11,000',
        'Liquid net worth: $173,000 − $11,000 = $162,000',
        'Ratio: $162,000 / $890,000 = 0.182, or about 18.2%',
      ],
      answer:
        'Net worth is $890,000 but liquid net worth is only about $162,000 — roughly 18% of the total. Against a private-placement standard written on liquid net worth, this client is far smaller than the headline figure suggests.',
      watchOut:
        'Counting home equity as liquid. The residence has $520,000 − $355,000 = $165,000 of equity, and adding it produces $327,000 of "liquid" net worth, more than double the true figure, and can qualify the client for an illiquid product they cannot support. Adding the 401(k) instead produces $422,000 — the same error in a different coat. Home equity requires a sale or a loan; neither is liquidity.',
    },
    {
      title: 'Discretionary cash flow actually available to invest',
      setup:
        'A client earns a $118,000 salary plus a $12,000 bonus. Annual withholding for federal, state, and payroll taxes is $31,200. The client already defers $9,100 into a 401(k). Monthly outflows are mortgage $2,180, auto loan $460, student loan $290, insurance premiums $340, and variable living expenses $2,650. The emergency reserve is $14,000 short of target. How much is genuinely available to invest?',
      steps: [
        'Total inflows: $118,000 + $12,000 = $130,000',
        'Annualize the monthly outflows. Mortgage: 2,180 × 12 = $26,160',
        'Auto: 460 × 12 = $5,520. Student loan: 290 × 12 = $3,480. Insurance: 340 × 12 = $4,080',
        'Variable living: 2,650 × 12 = $31,800',
        'Total outflows: 31,200 + 9,100 + 26,160 + 5,520 + 3,480 + 4,080 + 31,800 = $111,340',
        'Discretionary cash flow: $130,000 − $111,340 = $18,660 a year',
        'Monthly: $18,660 / 12 = $1,555',
        'Current savings rate including the deferral: (18,660 + 9,100) / 130,000 = 21.4%',
        'Apply the gating item. Filling the $14,000 reserve gap at $1,555 a month takes 14,000 / 1,555 = about 9.0 months',
        'Left for new long-term investing in the first twelve months: $18,660 − $14,000 = $4,660',
      ],
      answer:
        'Discretionary cash flow is $18,660 a year, about $1,555 a month, and the household is already saving 21.4% of gross once the 401(k) deferral is counted. But roughly nine months of that surplus is committed to the emergency reserve, leaving only about $4,660 for new long-term investment this year.',
      watchOut:
        'Subtracting only taxes and debt payments and calling the rest investable: $130,000 − $31,200 = $98,800, less $35,160 of debt service, gives $63,640 — more than thirteen times the true figure, because it ignores living expenses, insurance, and the deferral already in flight. The second error is reporting $18,660 as investable while the reserve is still short; the reserve is a gating item, and funding it comes first.',
    },
  ],
};
