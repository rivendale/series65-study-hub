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

## Benchmarks and Tracking Error

A benchmark is only meaningful if it is **appropriate**: it should match the portfolio's asset class, style, capitalization range, geography, and credit quality, and be **investable**, **measurable**, and **specified in advance**. Comparing a small-cap value fund to the S&P 500 produces conclusions about **style**, not skill.

**Tracking error** is the standard deviation of the difference between portfolio and benchmark return. A passive index fund should have very low tracking error — high tracking error in an index fund is a defect. In an active fund it is expected, and it is the denominator of the information ratio. **R-squared** reports how much of the portfolio's movement the benchmark explains; a low R-squared means the reported beta and alpha are unreliable.

## Fees, Taxes, and Inflation

**Gross-of-fees** return is before the adviser's fee; **net-of-fees** is after. The client's actual result is always the **net** figure, and advertising gross returns without prominent disclosure of the fee impact risks a violation of the Investment Advisers Act marketing rule.

**After-tax return** subtracts tax on distributions and realized gains. Two funds with identical pretax returns can differ sharply after tax if one turns over aggressively and realizes short-term gains taxed as **ordinary income** while the other defers gains — which is why turnover belongs in any taxable-account comparison.

**Real (inflation-adjusted) return** strips out lost purchasing power. The approximation — nominal minus inflation — is close enough at low rates. A 4% nominal return with 3% inflation is roughly a **1% real return** before tax and can easily be **negative after tax**.

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
};
