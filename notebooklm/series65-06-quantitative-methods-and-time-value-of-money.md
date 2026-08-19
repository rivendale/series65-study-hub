# Quantitative Methods and Time Value of Money

This is one topic from the Series 65 exam, the Uniform Investment Adviser Law
Examination. It is worth about 3 percent of the exam.

## Why this topic matters

The math toolkit of investment analysis: discounting cash flows to present value, measuring returns correctly, and describing risk with statistics. Most questions are conceptual — know what each measure captures and which direction is favorable.

## Time value of money

A dollar today is worth more than a dollar next year, because a dollar received today can be invested. Every valuation technique on the exam descends from that idea.

### Future value and present value

**Future value** answers: if I invest this amount at this rate, what will it grow to?

**FV = PV × (1 + r)^n**

**Present value** runs it backward: what is a future amount worth today?

**PV = FV ÷ (1 + r)^n**

The discount rate **r** is the required rate of return. Two relationships to lock in: **the higher the discount rate, the lower the present value**, and **the further out the cash flow, the lower its present value**. Those two facts explain most bond and stock valuation behavior on this exam.

Both are worth seeing as numbers. The present value of $100,000 due in ten years is $67,556 at a 4% discount rate, $55,839 at 6%, and $46,319 at 8% — the same promised dollars, worth a third less because the required return rose four points. Hold the rate at 6% and lengthen the wait instead: $74,726 at five years, $55,839 at ten, $31,180 at twenty. Neither effect is linear, because both operate through an exponent.

### Simple versus compound interest

**Simple interest** pays only on the original principal: interest = principal × rate × time. **Compound interest** pays on principal plus accumulated interest, which is what the exponent in the future value formula represents.

The gap is invisible over one period and enormous over many. Put $10,000 at 6% for twenty years. Simple interest earns $10,000 × 0.06 × 20 = $12,000, ending at **$22,000**. Compounding gives $10,000 × 1.06 raised to the 20th power = **$32,071**. The extra $10,071 is nothing but interest earning interest, and it exceeds the entire original principal. Time is what converts a small rate difference into a large dollar difference, which is the whole argument for starting to invest early rather than investing more.

### Compounding frequency

Compounding is earning a return on prior returns, and more frequent compounding produces a higher **effective annual rate** on the same **nominal** rate. On a stated 12%:

- Compounding: Annual. Effective annual rate: 12.00%.
- Compounding: Semiannual. Effective annual rate: 12.36%.
- Compounding: Quarterly. Effective annual rate: 12.55%.
- Compounding: Monthly. Effective annual rate: 12.68%.
- Compounding: Daily. Effective annual rate: 12.75%.
- Compounding: Continuous. Effective annual rate: 12.75%.


Note the shape. The first step, from annual to semiannual, buys 36 basis points; going all the way from monthly to continuous buys only 7 more. **The benefit of more frequent compounding rises quickly and then flattens toward a ceiling**, which is why continuous compounding is a mathematical limit rather than a product feature worth chasing. The practical rule: compare investments on the effective rate, never the nominal rate, and be alert that a quoted "annual percentage rate" and an "annual percentage yield" are exactly this distinction.

### Rule of 72

**Years to double ≈ 72 ÷ annual percentage rate.** At **8%**, money doubles in about **9 years**; at **6%**, about **12 years**. It can be inverted: to double in 6 years you need about **12%**. It is a mental-math shortcut, not a precise formula, and it is a fast way to answer questions about the erosion of purchasing power too — at 4% inflation, prices double in about 18 years.

The rule is a linear approximation to a logarithm, so it is exact nowhere and closest in the middle of the ordinary range. At 8% it gives 9.00 years against a true 9.01. At 6% it gives 12.0 against 11.90, and at 12% it gives 6.0 against 6.12. It drifts hardest at the extremes: at 2% it says 36 years when the answer is 35, and at 24% it says 3 years when the answer is 3.22. **Between roughly 5% and 12% the rule is accurate to within a couple of months**, and outside that band it should be treated as a rough sense-check rather than an answer.

## Capital budgeting measures

### Net present value (NPV)

**NPV = present value of expected future cash inflows − initial cost.**

The decision rule: **accept the investment if NPV is positive**, reject if negative. A positive NPV means the discounted cash flows exceed the price, so the investment adds value at the required rate of return. Applied to a bond: if NPV is positive the bond is **underpriced**; if negative it is **overpriced**.

### Internal rate of return (IRR)

The IRR is **the discount rate at which NPV equals zero** — the return the investment is actually expected to earn. The rule: **accept if IRR exceeds the required rate of return** (the hurdle rate or cost of capital).

For a bond held to maturity, the **IRR is the yield to maturity**. That equivalence is worth remembering; it links this topic to fixed income.

### What each one assumes about reinvestment

The two rules usually agree, and the reason they sometimes disagree is a hidden assumption. **NPV assumes interim cash flows are reinvested at the discount rate** — the required return you specified. **IRR assumes they are reinvested at the IRR itself**, which is circular: a project earning 25% is credited with reinvesting its early cash flows at 25%, whether or not any such opportunity exists.

That makes NPV the more conservative and generally more trustworthy measure, especially when comparing projects of different size or different timing. IRR remains useful because a percentage is easier to talk about than a dollar amount, but when the two rank projects differently, **follow NPV**.

### Scenario: NPV, IRR, and the reinvestment gap

A project costs $10,000 today, returns $5,000 at the end of year one and $7,500 at the end of year two. The required return is 8%.

**NPV:** discount each inflow. $5,000 ÷ 1.08 = $4,629.63. $7,500 ÷ 1.08 squared = $7,500 ÷ 1.1664 = $6,430.04. Total present value $11,059.67, less the $10,000 cost, gives an NPV of **+$1,059.67**. Positive, so accept.

**IRR:** the rate that drives that NPV to zero works out to **15.14%**, comfortably above the 8% hurdle. Accept again — the two rules agree, as they usually do on a single stand-alone project.

Now test the assumption. The IRR figure quietly assumes the $5,000 arriving at the end of year one is reinvested at 15.14% for the remaining year. Suppose it can only be reinvested at the 8% required return. Terminal value after two years is $5,000 × 1.08 + $7,500 = **$12,900**. The realized annual return is the square root of ($12,900 ÷ $10,000) minus 1 = **13.58%**, not 15.14%. The project was still worth doing, but the IRR overstated what the investor actually earned by more than one and a half percentage points — and the overstatement grows with the size and earliness of the interim cash flows.

### Discounted cash flow (DCF)

The general technique: project the future cash flows, discount each back at the required rate, and sum. It is the engine behind NPV, bond pricing, and the dividend discount model. Its weakness is sensitivity — small changes in the assumed growth rate or discount rate produce large changes in the answer, and because those assumptions are unobservable, a DCF is only as honest as the range of assumptions it is tested across.

## Measuring return

- **Holding period return = (ending value − beginning value + income) ÷ beginning value.** The total return over whatever period the investment was held, price change plus income.
- **Total return** combines income and capital appreciation. **Do not** describe a return using price change alone when dividends or interest were received.
- **Annualized return** restates a return as an equivalent yearly rate so periods of different length can be compared. A 10% gain over six months is not a 10% annual return — and it is not a 20% one either. Compounded properly, 1.10 squared − 1 = **21%**, because the second half-year earns on the first half-year's gain. Running the conversion the other way, a cumulative 33.1% over three years annualizes to the cube root of 1.331 minus 1 = exactly **10%** a year, not the 11.03% a naive division by three would suggest.
- **Real (inflation-adjusted) return ≈ nominal return − inflation rate.** The only return that measures purchasing power. Subtraction is the exam shortcut and is close enough at ordinary rates; the exact relation is **real return = [(1 + nominal) ÷ (1 + inflation)] − 1**, and subtraction overstates the real return by an error that grows as both rates rise.
- **After-tax return = nominal return × (1 − tax rate)** for fully taxable income. Combining both adjustments, the sequence tested is **compute the return, subtract taxes, then subtract inflation** to get the real after-tax return — which is often startlingly small.
- **Risk-adjusted return** asks how much return was earned per unit of risk taken, which is the job of the Sharpe ratio below.
- **Expected return** is the probability-weighted average of possible outcomes: multiply each outcome by its probability and sum. It is a center of gravity, not a forecast — an expected return of 7% may be an outcome that never actually occurs.

### Weighted averages in a portfolio

Two portfolio quantities are simple weighted averages of the holdings, using **market value weights**, and the exam leans on both.

**Expected return.** A portfolio 60% in equities expected to return 9%, 30% in bonds expected to return 5%, and 10% in cash expected to return 2% has an expected return of 0.60 × 9% + 0.30 × 5% + 0.10 × 2% = 5.4% + 1.5% + 0.2% = **7.1%**.

**Beta.** A $1,000,000 portfolio holding $300,000 at a beta of 1.4, $500,000 at 0.9, and $200,000 at 0.3 has a portfolio beta of 0.3 × 1.4 + 0.5 × 0.9 + 0.2 × 0.3 = 0.42 + 0.45 + 0.06 = **0.93**.

Here is the boundary that trips people. **Return and beta average; standard deviation does not.** A portfolio of two holdings each with a 20% standard deviation has a standard deviation of 20% only if they are perfectly correlated. At any lower correlation the portfolio figure is smaller than the weighted average — and that shortfall is precisely what diversification is.

## Descriptive statistics

- **Mean** — the arithmetic average. Sensitive to outliers.
- **Median** — the middle observation when values are ranked. Better than the mean for skewed data such as incomes or account balances.
- **Mode** — the most frequently occurring value.
- **Range** — highest minus lowest.

### Scenario: when the average is the wrong number

An adviser describes the practice as serving clients with an average account of $1,380,000. The book is ten households: nine hold $200,000 and one holds $12,000,000. The mean is (9 × $200,000 + $12,000,000) ÷ 10 = $13,800,000 ÷ 10 = **$1,380,000**, and it is arithmetically correct. The **median is $200,000** — and no client in the practice holds anything near the mean.

The mean is the right measure when the distribution is roughly symmetric, because it uses every observation. The median is the right measure when the distribution is skewed, because a single extreme value cannot drag it. The mode matters when the question is what is most common rather than what is typical. Skew has a direction worth knowing: in a **right-skewed** distribution, which is what account balances, incomes, and venture returns look like, the mean sits **above** the median, while a left-skewed distribution puts the mean below. Only in a symmetric distribution do mean, median, and mode coincide.

### Standard deviation and variance

**Variance** is the average squared deviation from the mean; **standard deviation is the square root of variance**, expressed in the same units as the data. In finance, standard deviation is the standard proxy for **total risk (volatility)**. A **higher standard deviation means a wider dispersion of outcomes** and a riskier investment.

The two operations each do a job. Deviations are **squared** because positive and negative departures from the mean would otherwise cancel to zero and report every distribution as identically tight; squaring also makes large misses count disproportionately. The **square root** then undoes the squaring so the answer is back in percentage points and can be compared with the mean it came from — variance of 144 is uninterpretable, a standard deviation of 12% is not.

The measure has a real blind spot: **it treats upside and downside as equally undesirable.** A fund that beats its mean by 20% in one year is recorded as exactly as "risky" as one that misses by 20%. That is why downside deviation and semivariance exist, and why standard deviation should be read as dispersion rather than as danger.

### The normal distribution

The bell curve, symmetric around its mean, where mean, median, and mode coincide. The tested confidence bands:

- Range: Mean ± 1 standard deviation. Probability: about 68%.
- Range: Mean ± 2 standard deviations. Probability: about 95%.
- Range: Mean ± 3 standard deviations. Probability: about 99.7%.


So a portfolio with a 10% expected return and a 15% standard deviation should land between **−5% and +25%** in roughly two years out of three. Real return distributions have fatter tails than the normal curve, which is why extreme events occur more often than the model implies.

## Relationships between securities

- **Covariance** measures whether two assets move together. Positive means same direction, negative means opposite. Its magnitude is not intuitively interpretable because it depends on the units.
- **Correlation coefficient** standardizes covariance onto a scale from **−1.0 to +1.0**. **+1.0** is perfect positive correlation (no diversification benefit), **0** is uncorrelated, and **−1.0** is perfect negative correlation (theoretically, risk can be fully eliminated). The practical takeaway: **diversification benefit increases as correlation falls**, and any correlation below +1.0 provides some benefit.

## Risk and performance measures

- **Beta** measures **systematic (market) risk** — sensitivity to overall market moves. The market has a beta of **1.0**. Beta above 1.0 is more volatile than the market (a 1.5 beta implies roughly a 15% move for a 10% market move); below 1.0 is less volatile; negative beta moves opposite to the market. Beta says nothing about company-specific risk, which diversification removes.

Mechanically, **beta is the slope of a regression line** fitted to the security's returns against the benchmark's, which is the same thing as **covariance with the market ÷ variance of the market**. If a stock's covariance with the market is 0.0180 and the market's standard deviation is 12% (so its variance is 0.0144), the beta is 0.0180 ÷ 0.0144 = **1.25**. Two consequences follow from beta being a fitted slope. It is a **backward-looking estimate** drawn from a specific historical window, so it changes when the window changes. And it is only as meaningful as the fit of the line — which is what R-squared reports.
- **Alpha** is the return earned **above or below** what beta and the market return would predict. **Positive alpha indicates value added** by the manager; negative alpha indicates underperformance on a risk-adjusted basis.
- **R-squared** measures how much of the movement in a portfolio is explained by movements in its benchmark, on a scale of **0 to 100**. A high R-squared (85 and above is the usual threshold) means beta and alpha are meaningful for that portfolio; a **low R-squared makes beta unreliable** because the benchmark simply is not driving the results. An index fund should have an R-squared near 100. R-squared is literally the **correlation with the benchmark, squared**: a correlation of 0.9 gives 0.81, or an R-squared of 81, while a correlation of 0.6 gives only 36 — the same fund can look reasonably correlated and still have a benchmark that explains barely a third of what it does. Check R-squared **before** quoting a beta, not after.
- **Sharpe ratio = (portfolio return − risk-free rate) ÷ standard deviation of the portfolio.** Excess return per unit of **total** risk. **Higher is better.** Because the denominator is standard deviation rather than beta, the Sharpe ratio is the right tool for an undiversified portfolio, where total risk — not just market risk — is what the client actually bears.

## The questions this topic is tested with

**If the discount rate used to value a future stream of cash flows is increased, the present value of that stream will:**

Present value and the discount rate move inversely: a higher required return means each future dollar is worth less today. This is the same relationship that drives bond prices down when yields rise.

**Using the rule of 72, approximately how long will it take a $50,000 investment to grow to $100,000 at a compound annual return of 6%?**

The rule of 72 estimates doubling time as 72 ÷ the annual rate: 72 ÷ 6 = 12 years. At 8% the same estimate would be 9 years.

**An investor bought a stock at $40, collected $2 per share in dividends each year for two years, and sold it at $46. What was the holding period return?**

Holding period return = (ending value − beginning value + income) ÷ beginning value = ($46 − $40 + $4) ÷ $40 = $10 ÷ $40 = 25%. Holding period return is a cumulative figure, not an annualized one.

**A project requires an initial outlay of $100,000. Discounted at the firm required return of 10%, the expected future cash flows have a present value of $112,000. Which statement is correct?**

NPV = present value of inflows − initial cost = $112,000 − $100,000 = +$12,000. Whenever NPV is positive at the required return, the IRR (the rate that sets NPV to zero) must be higher than that required return, and the project is acceptable.

**An adviser is combining two asset classes to reduce portfolio volatility. Which of the following correlation coefficients between the two would provide some diversification benefit?

I. +1.0
II. +0.3
III. 0.0
IV. −0.8**

Any correlation below +1.0 produces some reduction in combined volatility, and the benefit grows as the coefficient falls toward −1.0. A correlation of exactly +1.0 means the assets move in lockstep and no diversification benefit is available.

**A portfolio has an expected annual return of 10% with a standard deviation of 8%, and returns are assumed to be normally distributed. Approximately 95% of annual outcomes would be expected to fall within which range?**

Roughly 95% of observations lie within two standard deviations of the mean: 10% ± (2 × 8%) gives −6% to 26%. The 2% to 18% range covers one standard deviation, or about 68% of outcomes.
