# Performance Measurement and Reporting

This is one topic from the Series 65 exam, the Uniform Investment Adviser Law
Examination. It is worth about 3 percent of the exam.

## Why this topic matters

A return number means nothing until you know what it includes, what risk produced it, what it is compared against, and whether it is before or after fees, taxes, and inflation. The exam concentrates on total return, time-weighted versus dollar-weighted return, geometric versus arithmetic mean, and the four risk-adjusted ratios.

## Total Return Versus Price Return

**Price return** counts only the change in price. **Total return** counts price change **plus all income** — dividends, interest, capital gain distributions. Total return is the honest measure and the one the exam wants unless it says otherwise.

A stock bought at $50, sold at $53, that paid $2 in dividends produced a **10% total return** and a **6% price return**. A high-coupon bond can post a negative price return in a rising-rate year and still deliver a positive total return.

Two bond measures to keep straight: **current yield** is annual coupon divided by market price; **yield to maturity** discounts all cash flows to price and assumes coupons are reinvested at the YTM — an assumption the real world rarely honors, which is the reinvestment-risk problem.

## Holding Period Return

**Holding period return (HPR)** is the total return over however long the investment was held, without annualizing: ending value minus beginning value, plus income, divided by beginning value.

To compare across different holding periods you must **annualize**. A 21% return over three years is **not** 7% per year; compounding makes the true annualized figure about **6.6%**. **Annualized (compound) return** is the constant annual rate that would produce the observed cumulative result — the geometric mean.

### Which Measure Answers Which Question

- The question: What did this investment produce, all in?. The right measure: Total return.
- The question: What did the position do over the years I owned it?. The right measure: Holding period return.
- The question: How do I compare a 3-year result to a 5-year result?. The right measure: Annualized (geometric) return.
- The question: How good is the manager?. The right measure: Time-weighted return.
- The question: How did the client's actual dollars do?. The right measure: Dollar-weighted return (IRR).
- The question: What return should I assume for next year?. The right measure: Arithmetic mean of the historical series.
- The question: Did the client gain purchasing power?. The right measure: Real return.
- The question: Was the return worth the risk taken?. The right measure: Sharpe, Treynor, alpha, or information ratio.


Most exam errors on this topic are not arithmetic errors. They are picking a measure that answers a different question than the one asked.

## Time-Weighted Versus Dollar-Weighted Return

This is the most heavily tested idea in the topic, and the reasoning matters more than the arithmetic.

**Time-weighted return (TWR)** breaks the period into sub-periods at each cash flow, computes a return for each, and links them geometrically. Because the sub-period returns do not depend on how much money was invested, **TWR removes the effect of client contributions and withdrawals**. It measures what the **manager** did.

**Dollar-weighted return** is the **internal rate of return (IRR)** — the discount rate that sets the present value of all cash flows equal to zero. It **is** sensitive to the size and timing of deposits and withdrawals, so it measures what the **client actually experienced** on the dollars they had at work.

- Sensitive to client cash flow timing? — Time-weighted: No. Dollar-weighted (IRR): Yes.
- Measures — Time-weighted: Manager skill. Dollar-weighted (IRR): Investor experience.
- Standard use — Time-weighted: Comparing managers, GIPS reporting, mutual fund returns. Dollar-weighted (IRR): Individual client statements, planning, private equity.
- Better when the client controls flows — Time-weighted: Yes. Dollar-weighted (IRR): No.
- Better when the manager controls flows — Time-weighted: No. Dollar-weighted (IRR): Yes.


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

- Measure: Sharpe. Risk denominator: Standard deviation (total risk). Reads as: Ratio. Use when: Portfolio is the whole holding, or is undiversified.
- Measure: Treynor. Risk denominator: Beta (systematic risk). Reads as: Ratio. Use when: Portfolio is one sleeve of a diversified whole.
- Measure: Jensen's alpha. Risk denominator: Beta (via CAPM). Reads as: Percentage points. Use when: Judging manager skill against a risk-adjusted expectation.
- Measure: Information ratio. Risk denominator: Tracking error. Reads as: Ratio. Use when: Judging consistency of active management vs a benchmark.


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

GIPS compliance is not required by law and is not a substitute for the SEC marketing rule, but claiming it falsely is a serious misrepresentation.

## The questions this topic is tested with

**The difference between a total return and a price return on a common stock is that total return also includes**

Price return measures only the change in market price. Total return adds income — dividends or interest — received during the period. Adjusting for inflation produces the real return, which is a further step.

**An investor buys a stock at $40, receives $2 in dividends during the year, and sells it at $46. The holding period return is**

HPR = (ending value − beginning value + income) ÷ beginning value = ($46 − $40 + $2) ÷ $40 = $8 ÷ $40 = 20%. Ignoring the dividend yields the 15% price-only return; dividing by the ending price gives the incorrect 17.4%.

**An adviser is comparing two mutual fund managers who have no control over when shareholders buy or sell. The appropriate measure is**

Time-weighted return neutralizes the timing and size of external cash flows, isolating the decisions the manager actually made, which is why performance presentation standards require it. Dollar-weighted return (the IRR) is the right measure of an individual investor own experience, not of manager skill.

**A portfolio returned 11% with a standard deviation of 10%. The risk-free rate was 3%. The Sharpe ratio is**

Sharpe ratio = (portfolio return − risk-free rate) ÷ standard deviation = (11% − 3%) ÷ 10% = 0.80. It measures excess return per unit of TOTAL risk; dividing 11% by 10% without subtracting the risk-free rate is the classic error.

**Which of the following statements is NOT correct?**

Tracking error is the volatility of a portfolio return differences versus its benchmark — a measure of how tightly it follows the index, not a fee measure. Gross versus net of fees is a separate disclosure issue, and a benchmark must match the mandate (a small-cap value fund is not fairly judged against the S&P 500).

**A bond portfolio earned a nominal return of 7% during a year in which inflation was 3%. The real return was approximately**

Real return is approximately nominal minus inflation: 7% − 3% = 4%. The exact calculation is (1.07 ÷ 1.03) − 1 = 3.88%, so 4% is the best available answer. Real return does not adjust for taxes; an after-tax real return would be lower still.
