import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'performance-measurement',
  title: 'Performance Measurement and Reporting',
  weight: '~3%',
  order: 21,
  summary:
    "A return number means nothing until you know what it includes, what risk produced it, what it is compared against, and whether it is before or after fees, taxes, and inflation. The exam concentrates on total return, time-weighted versus dollar-weighted return, geometric versus arithmetic mean, and the four risk-adjusted ratios.",
  body: `## Total Return Versus Price Return

**Price return** counts only the change in price. **Total return** counts price change **plus all income** — dividends, interest, capital gain distributions. Total return is the honest measure and the one the exam wants unless it says otherwise.

A stock bought at $50, sold at $53, that paid $2 in dividends produced a **10% total return** and a **6% price return**. A high-coupon bond can post a negative price return in a rising-rate year and still deliver a positive total return.

Two bond measures to keep straight: **current yield** is annual coupon divided by market price; **yield to maturity** discounts all cash flows to price and assumes coupons are reinvested at the YTM — an assumption the real world rarely honors, which is the reinvestment-risk problem.

## Holding Period Return

**Holding period return (HPR)** is the total return over however long the investment was held, without annualizing: ending value minus beginning value, plus income, divided by beginning value.

To compare across different holding periods you must **annualize**. A 21% return over three years is **not** 7% per year; compounding makes the true annualized figure about **6.6%**. **Annualized (compound) return** is the constant annual rate that would produce the observed cumulative result — the geometric mean.

### Which Measure Answers Which Question

| The question | The right measure |
| --- | --- |
| What did this investment produce, all in? | **Total return** |
| What did the position do over the years I owned it? | **Holding period return** |
| How do I compare a 3-year result to a 5-year result? | **Annualized (geometric) return** |
| How good is the manager? | **Time-weighted return** |
| How did the client's actual dollars do? | **Dollar-weighted return (IRR)** |
| What return should I assume for next year? | **Arithmetic mean** of the historical series |
| Did the client gain purchasing power? | **Real return** |
| Was the return worth the risk taken? | **Sharpe, Treynor, alpha, or information ratio** |

Most exam errors on this topic are not arithmetic errors. They are picking a measure that answers a different question than the one asked.

## Time-Weighted Versus Dollar-Weighted Return

This is the most heavily tested idea in the topic, and the reasoning matters more than the arithmetic.

**Time-weighted return (TWR)** breaks the period into sub-periods at each cash flow, computes a return for each, and links them geometrically. Because the sub-period returns do not depend on how much money was invested, **TWR removes the effect of client contributions and withdrawals**. It measures what the **manager** did.

**Dollar-weighted return** is the **internal rate of return (IRR)** — the discount rate that sets the present value of all cash flows equal to zero. It **is** sensitive to the size and timing of deposits and withdrawals, so it measures what the **client actually experienced** on the dollars they had at work.

| | **Time-weighted** | **Dollar-weighted (IRR)** |
| --- | --- | --- |
| Sensitive to client cash flow timing? | **No** | **Yes** |
| Measures | **Manager skill** | **Investor experience** |
| Standard use | Comparing managers, GIPS reporting, mutual fund returns | Individual client statements, planning, private equity |
| Better when the client controls flows | Yes | No |
| Better when the manager controls flows | No | Yes |

The intuition: if a client wires in a large deposit right before a market drop, dollar-weighted return falls sharply, but the manager did nothing wrong. **Because the manager did not choose the timing, time-weighted return is the fair basis for evaluating the manager.** Where the manager does control the timing of capital calls — private equity, for instance — dollar-weighted is the appropriate measure.

### Scenario: The Fund Made Money and Its Investors Lost It

A niche fund launches with $100 million and returns **+30%** in its first year. The performance table looks excellent, money floods in, and $900 million of new capital arrives at the start of year two. In year two the fund returns **−10%**.

The fund's **time-weighted** return is honest and easy to compute: 1.30 × 0.90 = 1.17 cumulative, about **+8.17% per year** over two years. Nothing about that number is misleading, and it is the figure that will appear in every database.

Now follow the dollars. The first $100 million grows to $130 million; $900 million joins it for a balance of $1.03 billion; the 10% decline leaves **$927 million** against **$1 billion contributed**. The **dollar-weighted** return is about **−6.7% per year**. The typical investor in the fund lost money in a fund that reported a healthy positive return.

Both numbers are correct and neither is a lie. The gap exists because the good year happened when almost no client money was present and the bad year happened when nearly all of it was. This is why performance reporting to an individual client should show the dollar-weighted result on the statement, why manager selection should use the time-weighted figure, and why a chart of past returns is a poor predictor of what a client will actually earn.

## Arithmetic Versus Geometric Mean

**Arithmetic mean** is the simple average of periodic returns. **Geometric mean** is the compound rate that links them: it accounts for the fact that losses and gains compound on a changing base.

The geometric mean is **always less than or equal to** the arithmetic mean, and the gap widens with volatility. Consider +50% followed by −50%: the arithmetic mean is **0%**, but $100 becomes $150, then $75 — the geometric mean is about **−13.4%** per year. The geometric mean is the one that describes what actually happened to the money, and it is the correct measure for **historical** multi-period performance. The arithmetic mean is used for estimating a **single-period expected** return.

## Risk-Adjusted Performance

Raw return is meaningless without the risk that produced it. Four measures, distinguished mainly by which risk they use.

### Sharpe Ratio

**Excess return per unit of total risk.** Subtract the risk-free rate from the portfolio return and divide by **standard deviation**. Higher is better. Because it uses total risk, Sharpe is the correct measure for a **portfolio that is not fully diversified** — or when comparing whole portfolios that represent an investor's entire holdings.

### Treynor Ratio

**Excess return per unit of systematic risk.** Same numerator, but divided by **beta**. Higher is better. Appropriate when the portfolio is one component of a larger **well-diversified** portfolio, since unsystematic risk is already diversified away at the total level.

The Sharpe/Treynor decision rule for the exam: **is the portfolio the investor's whole portfolio (use Sharpe) or a sleeve within a diversified whole (use Treynor)?**

### Jensen's Alpha

**Return above or below the CAPM prediction for the portfolio's beta.** Positive alpha means the manager added value beyond compensation for systematic risk; negative alpha means they destroyed it. Unlike Sharpe and Treynor, alpha is stated in **percentage points**, not as a unitless ratio, so it can be read directly as value added.

### Information Ratio

**Active return divided by tracking error** — the manager's excess return over the benchmark, per unit of the volatility of that excess return. It measures the **consistency** of outperformance rather than its size. A manager who beats the benchmark by 1% every year has a higher information ratio than one who beats it by 4% in some years and lags by 3% in others.

| Measure | Risk denominator | Reads as | Use when |
| --- | --- | --- | --- |
| **Sharpe** | Standard deviation (**total risk**) | Ratio | Portfolio is the whole holding, or is undiversified |
| **Treynor** | Beta (**systematic risk**) | Ratio | Portfolio is one sleeve of a diversified whole |
| **Jensen's alpha** | Beta (via CAPM) | **Percentage points** | Judging manager skill against a risk-adjusted expectation |
| **Information ratio** | **Tracking error** | Ratio | Judging consistency of active management vs a benchmark |

### What Each Measure Actually Isolates

The four are not four ways of saying the same thing. Each strips out a different piece of the story, and the exam rewards knowing which.

- **Sharpe** asks: per unit of **everything that could go wrong**, how much reward? It punishes a manager for volatility of any kind, diversifiable or not. That is the right question when this account is all the client has.
- **Treynor** asks: per unit of **market exposure**, how much reward? It gives the manager a pass on idiosyncratic volatility, on the assumption that the rest of the client's holdings have already diluted it. Ask a concentrated sleeve to justify itself on Sharpe and it will fail for a reason that does not matter to the whole portfolio.
- **Jensen's alpha** asks: **relative to what CAPM said this beta deserved**, did the manager add anything? It nets out the return the manager got for free by simply taking market risk. A leveraged index fund can post a wonderful raw return and an alpha of zero.
- **Information ratio** asks: **how reliably** does the manager beat the stated benchmark? A manager with 1.5% of active return and 2.0% of tracking error scores 0.75; a manager with 4.0% of active return and 9.0% of tracking error scores 0.44. The second manager wins bigger and is much less trustworthy about it.

A practical ordering: use **alpha** to decide whether skill exists at all, the **information ratio** to decide whether it is repeatable, and **Sharpe or Treynor** to decide whether the client is being paid for the risk taken.

## Benchmarks, R-Squared, and Tracking Error

A benchmark is only meaningful if it is **appropriate**: it should match the portfolio's asset class, style, capitalization range, geography, and credit quality. The conventional criteria are that it be **specified in advance**, **appropriate**, **measurable**, **unambiguous**, **reflective of the manager's current investment opinion**, **accountable** (the manager accepts it), and **investable**. Comparing a small-cap value fund to the S&P 500 produces conclusions about **style**, not skill — in a year large growth leads, the manager will look incompetent for doing exactly the job hired for.

**R-squared** reports what fraction of the portfolio's movement the benchmark explains, from 0 to 1. It is the gatekeeper for every other number in this chapter. A broad index fund runs an R-squared near 1.00, so its beta and alpha mean what they say. A concentrated sector fund measured against the S&P 500 might run 0.55, meaning nearly half its movement has nothing to do with the benchmark — and a beta or alpha computed from that relationship is close to noise. **Check R-squared before you believe an alpha.** The usual remedy is not to distrust the manager but to change the benchmark to one the portfolio actually resembles.

**Tracking error** is the standard deviation of the difference between portfolio and benchmark return. In a passive index fund high tracking error is a **defect** — the fund is failing at its only job. In an active fund it is the expected cost of trying, and it is the denominator of the information ratio. Note the different questions: tracking error measures how far the manager wanders, alpha measures whether the wandering paid.

## Fees, Taxes, and Inflation

**Gross-of-fees** return is before the adviser's fee; **net-of-fees** is after. The client's actual result is always the **net** figure, and advertising gross returns without prominent disclosure of the fee impact risks a violation of the Investment Advisers Act marketing rule.

### The Corrosive Arithmetic of Fees

A fee does not cost the client the fee. It costs the client the fee **plus everything the fee would have earned for the rest of the holding period**, and that compounding is what makes a number that sounds trivial enormous.

Take $250,000 invested for 30 years at an 8% gross return. Left alone, it grows to about **$2,515,664**. Charge 1% a year and the money compounds at 7% instead, reaching about **$1,903,064**. The difference is **$612,600** — roughly **24% of the ending wealth**, surrendered for a fee the client would describe as "one percent." Raise the drag to 2% and the account ends near **$1,435,873**; of the roughly $2.27 million the money earned gross, the client keeps barely half.

Three consequences follow. First, **fee differences dominate most manager-selection decisions**, because they are certain while outperformance is not. Second, an active manager's alpha must be measured **after** its own fee, since that is the only version the client experiences. Third, the same arithmetic applies to layered fees — a wrap fee on top of fund expense ratios on top of trading costs — so the number that matters is the client's **all-in** annual cost, not any single line item.

### After-Tax and Real Return

**After-tax return** subtracts tax on distributions and realized gains. Two funds with identical pretax returns can differ sharply after tax if one turns over aggressively and realizes short-term gains taxed as **ordinary income** while the other defers gains — which is why turnover belongs in any taxable-account comparison. Distinguish **pre-liquidation** after-tax return, which taxes only distributions actually received, from **post-liquidation** after-tax return, which also taxes the embedded gain as if the position were sold today.

**Real (inflation-adjusted) return** strips out lost purchasing power. The approximation — nominal minus inflation — is close enough at low rates. A 4% nominal return with 3% inflation is roughly a **1% real return** before tax and can easily be **negative after tax**.

The layers stack **multiplicatively, and in order**: gross return, minus fees, minus taxes, minus inflation. A 6% gross return net of a 1% fee is 5%; taxed at 24% it is 3.80%; deflated at 3% inflation it is about **0.78% real, after-tax, net-of-fee**. That last figure is the only one that tells the client whether they are actually getting wealthier, and it is roughly one-eighth of the number on the marketing sheet.

## GIPS

The **Global Investment Performance Standards**, administered by the CFA Institute, are **voluntary** ethical standards for calculating and presenting investment performance. Firms claim compliance on a **firm-wide** basis, not for individual products or composites. Core ideas:

- All actual, fee-paying, discretionary portfolios must appear in at least one **composite** — you cannot cherry-pick winners.
- Returns must be **time-weighted** and must include **cash and cash equivalents**.
- Presentations must show a minimum period of history, building toward ten years, and disclose whether returns are gross or net of fees.
- **Verification** by an independent third party covers the firm, not a single composite, and is optional but encouraged.

GIPS compliance is not required by law and is not a substitute for the SEC marketing rule, but claiming it falsely is a serious misrepresentation.`,
  pitfalls: [
    "Time-weighted return evaluates the manager because it strips out client cash flow timing; dollar-weighted return (IRR) evaluates the client's own experience because it does not. Reversing these is the single most common error on this topic.",
    "The geometric mean is always less than or equal to the arithmetic mean and is the correct measure for historical multi-period performance. A +50% year followed by a −50% year averages 0% arithmetically but is a real loss.",
    "Sharpe uses standard deviation (total risk) and Treynor uses beta (systematic risk). Choose Sharpe when the portfolio is the investor's entire holding and Treynor when it is one sleeve of a diversified whole.",
    "Jensen's alpha is expressed in percentage points, not as a unitless ratio, so an alpha of 2 means two percentage points of value added — it is not comparable to a Sharpe ratio of 2.",
    "Advertising gross-of-fees performance without prominent net-of-fees presentation is a marketing rule problem, not merely a presentation preference.",
    "GIPS compliance is claimed firm-wide and is voluntary. A firm cannot claim compliance for a single composite or a single strategy, and verification covers the firm rather than one product.",
    "A 21% cumulative return over three years is not 7% per year. Annualizing requires compounding, which produces roughly 6.6%.",
  ],
  keyTerms: [
    {
      term: 'Total return',
      definition:
        'Price change plus all income received, expressed as a percentage of the beginning value; the complete measure of investment result.',
    },
    {
      term: 'Time-weighted return',
      definition:
        'A geometrically linked series of sub-period returns that removes the effect of client contributions and withdrawals, making it the standard for evaluating managers.',
    },
    {
      term: 'Dollar-weighted return',
      definition:
        "The internal rate of return on all portfolio cash flows; sensitive to the size and timing of deposits and withdrawals, so it reflects the investor's actual experience.",
    },
    {
      term: 'Geometric mean',
      definition:
        'The compound annual rate that links a series of periodic returns; always less than or equal to the arithmetic mean, with the gap widening as volatility rises.',
    },
    {
      term: 'Sharpe ratio',
      definition:
        'Excess return over the risk-free rate divided by standard deviation, measuring reward per unit of total risk.',
    },
    {
      term: 'Treynor ratio',
      definition:
        'Excess return over the risk-free rate divided by beta, measuring reward per unit of systematic risk.',
    },
    {
      term: "Jensen's alpha",
      definition:
        'The percentage-point difference between actual return and the return CAPM predicts for the portfolio beta; the direct measure of risk-adjusted value added.',
    },
    {
      term: 'Tracking error',
      definition:
        'The standard deviation of the difference between portfolio and benchmark returns; low for index funds by design and the denominator of the information ratio.',
    },
    {
      term: 'GIPS',
      definition:
        'Global Investment Performance Standards — voluntary, firm-wide standards requiring composite construction, time-weighted returns, and fee disclosure in performance presentations.',
    },
  ],
  confusions: [
    {
      dont: 'Time-weighted return — removes cash flow timing, used to evaluate the manager',
      with: "Dollar-weighted return (IRR) — includes cash flow timing, reflects the client's actual result",
    },
    {
      dont: 'Sharpe ratio — divides excess return by standard deviation (total risk)',
      with: 'Treynor ratio — divides excess return by beta (systematic risk)',
    },
    {
      dont: 'Arithmetic mean — the simple average, used for a single-period expected return',
      with: 'Geometric mean — the compound rate, used for historical multi-period performance',
    },
    {
      dont: 'Total return — price change plus all income',
      with: 'Price return — price change only, which understates the result for income-producing assets',
    },
    {
      dont: 'Tracking error — volatility of the return difference versus the benchmark',
      with: "Jensen's alpha — the size of the risk-adjusted excess return itself",
    },
  ],
  formulas: [
    {
      name: 'Holding period return',
      formula: 'HPR = (Ending Value − Beginning Value + Income) / Beginning Value',
      note: 'Bought at $50, sold at $53, received $2 in dividends: (53 − 50 + 2) / 50 = 10%. Not annualized.',
    },
    {
      name: 'Annualized (compound) return',
      formula: 'Annualized Return = (Ending Value / Beginning Value) ^ (1 / n) − 1',
      note: 'n is the number of years. This is the geometric mean.',
    },
    {
      name: 'Sharpe ratio',
      formula: 'Sharpe = (Rp − Rf) / Standard Deviation of the portfolio',
      note: "Reward per unit of total risk. Use when the portfolio is the investor's entire holding or is not fully diversified.",
    },
    {
      name: 'Treynor ratio',
      formula: 'Treynor = (Rp − Rf) / Beta of the portfolio',
      note: 'Reward per unit of systematic risk. Use when the portfolio is one sleeve of a diversified whole.',
    },
    {
      name: "Jensen's alpha",
      formula: 'Alpha = Rp − [Rf + Beta × (Rm − Rf)]',
      note: 'Stated in percentage points. Portfolio returned 12%, Rf = 3%, Rm = 9%, beta = 1.2: 12% − (3% + 1.2 × 6%) = 1.8% alpha.',
    },
    {
      name: 'Information ratio',
      formula: 'IR = (Rp − Rbenchmark) / Tracking Error',
      note: 'Measures consistency of active outperformance rather than its magnitude.',
    },
    {
      name: 'Real (inflation-adjusted) return',
      formula: 'Real Return = [(1 + Nominal Return) / (1 + Inflation Rate)] − 1',
      note: 'The approximation Nominal − Inflation is adequate at low rates. A 6% nominal return with 3% inflation gives about 2.91% exactly, 3% by approximation.',
    },
  ],
  workedExamples: [
    {
      title: 'Holding period return including income',
      setup:
        'A client bought 200 shares at $40, collected $1.20 per share in dividends over the year, and sold at $44. What was the holding period return?',
      steps: [
        'HPR = (Ending value − Beginning value + Income) / Beginning value',
        'Beginning value: 200 × $40 = $8,000',
        'Ending value: 200 × $44 = $8,800',
        'Income: 200 × $1.20 = $240',
        'Numerator: $8,800 − $8,000 + $240 = $1,040',
        'Divide: $1,040 / $8,000 = 0.13',
      ],
      answer:
        'The holding period return is 13%. The price-only return was $800 / $8,000 = 10%, so the dividend contributed 3 percentage points.',
      watchOut:
        'Reporting the 10% price return and omitting the dividends. Total return always includes income received, and on income-heavy holdings the omission is large.',
    },
    {
      title: 'Annualizing a multi-year return',
      setup:
        'An account grew from $10,000 to $14,000 over four years with no deposits or withdrawals. What was the annualized return?',
      steps: [
        'Cumulative growth factor: $14,000 / $10,000 = 1.40, a 40% cumulative gain',
        'Annualized return = (Ending / Beginning) ^ (1 / n) − 1, with n = 4',
        'Substitute: 1.40 ^ (1 / 4) − 1',
        'Take the fourth root: 1.40 ^ 0.25 = 1.08776',
        'Subtract 1: 1.08776 − 1 = 0.08776',
        'Check by compounding forward: 1.08776 ^ 4 = 1.40, and $10,000 × 1.40 = $14,000',
      ],
      answer: 'The annualized (geometric) return is about 8.78% per year.',
      watchOut:
        'Dividing 40% by 4 to get 10% a year. Simple division ignores compounding and overstates the rate — at a true 10% a year, $10,000 would have grown to $14,641, not $14,000.',
    },
    {
      title: 'Arithmetic versus geometric mean on the same series',
      setup:
        'A fund returned +20%, −10%, +15%, and −5% over four consecutive years. Compute both means and explain the gap.',
      steps: [
        'Arithmetic mean: add the returns and divide by the count',
        'Sum: 20 − 10 + 15 − 5 = 20',
        'Divide: 20 / 4 = 5.00%',
        'Geometric mean: chain the growth factors, then take the nth root',
        'Chain step 1: 1.20 × 0.90 = 1.0800',
        'Chain step 2: 1.0800 × 1.15 = 1.2420',
        'Chain step 3: 1.2420 × 0.95 = 1.1799',
        'Fourth root: 1.1799 ^ 0.25 = 1.04222',
        'Subtract 1: 0.04222, or about 4.22%',
        'Test both against the money: $10,000 actually became $10,000 × 1.1799 = $11,799',
        'At the arithmetic 5%: $10,000 × 1.05 ^ 4 = $12,155 — about $356 that never existed',
      ],
      answer:
        'Arithmetic mean 5.00%, geometric mean about 4.22%. The 0.78 percentage point gap is the cost of volatility, and only the geometric figure describes what happened to the money.',
      watchOut:
        'Using the arithmetic mean, which overstates compounded growth whenever returns vary, to describe historical multi-period performance. The gap widens as volatility rises. Reserve the arithmetic mean for a single-period expected return.',
    },
    {
      title: 'Real return by subtraction and by the exact Fisher relation',
      setup: 'A portfolio returned 7% nominal for the year. Inflation ran 4%. What was the real return?',
      steps: [
        'Approximation: Real ≈ Nominal − Inflation',
        'Substitute: 7% − 4% = 3.00%',
        'Exact Fisher relation: Real = [(1 + Nominal) / (1 + Inflation)] − 1',
        'Substitute: (1.07 / 1.04) − 1',
        'Divide: 1.07 / 1.04 = 1.02885',
        'Subtract 1: 0.02885, or 2.88%',
      ],
      answer:
        'About 3.00% by subtraction and 2.88% exactly. The approximation is adequate at these rates and slightly overstates the truth.',
      watchOut:
        'Adding inflation instead of subtracting it, or multiplying by the inflation rate rather than dividing by (1 + inflation). Note the approximation error grows with the rates involved: at 12% nominal and 10% inflation, subtraction says 2.00% while the exact answer is 1.82%.',
    },
    {
      title: 'Sharpe ratio — why the higher return can lose',
      setup:
        'Portfolio A returned 11% with a standard deviation of 16%. Portfolio B returned 9% with a standard deviation of 10%. The risk-free rate is 3%. Which performed better on a risk-adjusted basis?',
      steps: [
        'Sharpe = (Rp − Rf) / standard deviation of the portfolio',
        'Portfolio A excess return: 11% − 3% = 8%',
        'Portfolio A Sharpe: 8 / 16 = 0.50',
        'Portfolio B excess return: 9% − 3% = 6%',
        'Portfolio B Sharpe: 6 / 10 = 0.60',
        'Compare: 0.60 is greater than 0.50',
      ],
      answer:
        'Portfolio B wins, 0.60 against 0.50, despite returning two percentage points less. It delivered more excess return per unit of total risk.',
      watchOut:
        'Forgetting to subtract the risk-free rate and dividing raw return by standard deviation. That gives 11 / 16 = 0.69 and 9 / 10 = 0.90 — the same ranking here by luck, but not the Sharpe ratio. The numerator is always return in excess of Rf.',
    },
    {
      title: 'Treynor ratio, and how its denominator differs from Sharpe',
      setup:
        'Portfolio A returned 11%, with a standard deviation of 16% and a beta of 1.25. The risk-free rate is 3%. Compute both Treynor and Sharpe, and decide which applies.',
      steps: [
        'Both ratios share the same numerator: excess return, 11% − 3% = 8%',
        'Sharpe divides by standard deviation, which is total risk: 8 / 16 = 0.50',
        'Treynor divides by beta, which is systematic risk only: 8 / 1.25 = 6.4',
        'The two figures are on unrelated scales — 6.4 is percentage points of excess return per unit of beta, while 0.50 is excess return per unit of standard deviation',
        'Pick by context: if this portfolio is the whole of the client holdings, use Sharpe; if it is one sleeve inside an already diversified portfolio, use Treynor',
      ],
      answer:
        'Sharpe is 0.50 and Treynor is 6.4. Same numerator, different risk denominator, different question answered.',
      watchOut:
        'Puts beta in the Sharpe denominator (or standard deviation in the Treynor denominator) and then ranks managers on the result. The second trap is comparing a Treynor of 6.4 against a Sharpe of 0.50 as though the bigger number meant better performance — the scales are not comparable.',
    },
    {
      title: 'Time-weighted versus dollar-weighted return on the same cash flows',
      setup:
        'An account starts at $100,000. During year 1 it rises to $110,000. The client then deposits $100,000, bringing the balance to $210,000. During year 2 the market falls and the account ends at $189,000. Compute both returns.',
      steps: [
        'Time-weighted return: break the period at the cash flow and compute each sub-period on its own',
        'Year 1 return: ($110,000 / $100,000) − 1 = +10.0%',
        'Year 2 return: ($189,000 / $210,000) − 1 = −10.0%',
        'Link the sub-periods geometrically: 1.10 × 0.90 = 0.99, a cumulative −1.0% over two years',
        'Annualize: 0.99 ^ 0.5 − 1 = −0.0050, or about −0.50% per year',
        'Dollar-weighted return: find the rate r at which both deposits grow into $189,000',
        'Set up: $100,000 × (1 + r)² + $100,000 × (1 + r) = $189,000',
        'Let x = (1 + r) and divide through by $100,000: x² + x − 1.89 = 0',
        'Quadratic formula: x = (−1 + square root of (1 + 7.56)) / 2 = (−1 + 2.9257) / 2 = 0.96287',
        'r = 0.96287 − 1 = −0.0371, or about −3.71% per year',
      ],
      answer:
        'Time-weighted return is about −0.50% per year; dollar-weighted return is about −3.71% per year. They diverge because the client put the larger sum to work immediately before the losing year.',
      watchOut:
        'Blaming the manager for the −3.71%. The manager earned +10% then −10% on whatever balance was there; the client chose when the $100,000 arrived. Time-weighted is the fair basis for judging the manager, dollar-weighted for describing what the client actually lived through.',
    },
  ],
};
