import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'quantitative-methods',
  title: 'Quantitative Methods and Time Value of Money',
  weight: '~3%',
  order: 6,
  summary:
    'The math toolkit of investment analysis: discounting cash flows to present value, measuring returns correctly, and describing risk with statistics. Most questions are conceptual — know what each measure captures and which direction is favorable.',
  body: `## Time value of money

A dollar today is worth more than a dollar next year, because a dollar received today can be invested. Every valuation technique on the exam descends from that idea.

### Future value and present value

**Future value** answers: if I invest this amount at this rate, what will it grow to?

**FV = PV × (1 + r)^n**

**Present value** runs it backward: what is a future amount worth today?

**PV = FV ÷ (1 + r)^n**

The discount rate **r** is the required rate of return. Two relationships to lock in: **the higher the discount rate, the lower the present value**, and **the further out the cash flow, the lower its present value**. Those two facts explain most bond and stock valuation behavior on this exam.

### Compounding

Compounding is earning a return on prior returns. More frequent compounding produces a higher effective rate on the same nominal rate — annual, then semiannual, then quarterly, then monthly, then daily, then continuous.

### Rule of 72

**Years to double ≈ 72 ÷ annual percentage rate.** At **8%**, money doubles in about **9 years**; at **6%**, about **12 years**. It can be inverted: to double in 6 years you need about **12%**. It is a mental-math shortcut, not a precise formula, and it is a fast way to answer questions about the erosion of purchasing power too — at 4% inflation, prices double in about 18 years.

## Capital budgeting measures

### Net present value (NPV)

**NPV = present value of expected future cash inflows − initial cost.**

The decision rule: **accept the investment if NPV is positive**, reject if negative. A positive NPV means the discounted cash flows exceed the price, so the investment adds value at the required rate of return. Applied to a bond: if NPV is positive the bond is **underpriced**; if negative it is **overpriced**.

### Internal rate of return (IRR)

The IRR is **the discount rate at which NPV equals zero** — the return the investment is actually expected to earn. The rule: **accept if IRR exceeds the required rate of return** (the hurdle rate or cost of capital).

For a bond held to maturity, the **IRR is the yield to maturity**. That equivalence is worth remembering; it links this topic to fixed income.

### Discounted cash flow (DCF)

The general technique: project the future cash flows, discount each back at the required rate, and sum. It is the engine behind NPV, bond pricing, and the dividend discount model. Its weakness is sensitivity — small changes in the assumed growth rate or discount rate produce large changes in the answer.

## Measuring return

- **Holding period return = (ending value − beginning value + income) ÷ beginning value.** The total return over whatever period the investment was held, price change plus income.
- **Total return** combines income and capital appreciation. **Do not** describe a return using price change alone when dividends or interest were received.
- **Annualized return** restates a return as an equivalent yearly rate so periods of different length can be compared. A 10% gain over six months is not a 10% annual return.
- **Real (inflation-adjusted) return = nominal return − inflation rate.** The only return that measures purchasing power.
- **After-tax return = nominal return × (1 − tax rate)** for fully taxable income. Combining both adjustments, the sequence tested is **compute the return, subtract taxes, then subtract inflation** to get the real after-tax return — which is often startlingly small.
- **Risk-adjusted return** asks how much return was earned per unit of risk taken, which is the job of the Sharpe ratio below.
- **Expected return** is the probability-weighted average of possible outcomes: multiply each outcome by its probability and sum. For a portfolio it is the weighted average of the expected returns of the holdings.

## Descriptive statistics

- **Mean** — the arithmetic average. Sensitive to outliers.
- **Median** — the middle observation when values are ranked. Better than the mean for skewed data such as incomes or account balances.
- **Mode** — the most frequently occurring value.
- **Range** — highest minus lowest.

### Standard deviation and variance

**Variance** is the average squared deviation from the mean; **standard deviation is the square root of variance**, expressed in the same units as the data. In finance, standard deviation is the standard proxy for **total risk (volatility)**. A **higher standard deviation means a wider dispersion of outcomes** and a riskier investment.

### The normal distribution

The bell curve, symmetric around its mean, where mean, median, and mode coincide. The tested confidence bands:

| Range | Probability |
| --- | --- |
| Mean ± 1 standard deviation | about **68%** |
| Mean ± 2 standard deviations | about **95%** |
| Mean ± 3 standard deviations | about **99.7%** |

So a portfolio with a 10% expected return and a 15% standard deviation should land between **−5% and +25%** in roughly two years out of three. Real return distributions have fatter tails than the normal curve, which is why extreme events occur more often than the model implies.

## Relationships between securities

- **Covariance** measures whether two assets move together. Positive means same direction, negative means opposite. Its magnitude is not intuitively interpretable because it depends on the units.
- **Correlation coefficient** standardizes covariance onto a scale from **−1.0 to +1.0**. **+1.0** is perfect positive correlation (no diversification benefit), **0** is uncorrelated, and **−1.0** is perfect negative correlation (theoretically, risk can be fully eliminated). The practical takeaway: **diversification benefit increases as correlation falls**, and any correlation below +1.0 provides some benefit.

## Risk and performance measures

- **Beta** measures **systematic (market) risk** — sensitivity to overall market moves. The market has a beta of **1.0**. Beta above 1.0 is more volatile than the market (a 1.5 beta implies roughly a 15% move for a 10% market move); below 1.0 is less volatile; negative beta moves opposite to the market. Beta says nothing about company-specific risk, which diversification removes.
- **Alpha** is the return earned **above or below** what beta and the market return would predict. **Positive alpha indicates value added** by the manager; negative alpha indicates underperformance on a risk-adjusted basis.
- **R-squared** measures how much of the movement in a portfolio is explained by movements in its benchmark, on a scale of **0 to 100**. A high R-squared (85 and above is the usual threshold) means beta and alpha are meaningful for that portfolio; a **low R-squared makes beta unreliable** because the benchmark simply is not driving the results. An index fund should have an R-squared near 100.
- **Sharpe ratio = (portfolio return − risk-free rate) ÷ standard deviation of the portfolio.** Excess return per unit of **total** risk. **Higher is better.** Because the denominator is standard deviation rather than beta, the Sharpe ratio is the right tool for an undiversified portfolio, where total risk — not just market risk — is what the client actually bears.`,
  pitfalls: [
    'A higher discount rate always produces a LOWER present value, and cash flows further in the future are worth less today. Reversing this breaks every valuation question.',
    'IRR is the discount rate that makes NPV equal zero — accept when IRR exceeds the required return, and accept when NPV is positive. Do not mix the two decision rules.',
    'The Sharpe ratio uses standard deviation (total risk) in the denominator, not beta. Measures using beta are appropriate only for well-diversified portfolios.',
    'Beta captures only systematic risk. A low beta does not mean a stock is safe from company-specific problems.',
    'A low R-squared makes beta and alpha statistically unreliable for that portfolio — the benchmark is not explaining its behavior.',
    'Correlation is bounded between −1.0 and +1.0, while covariance is unbounded. Any answer choice offering a correlation of 2.0 is wrong on its face.',
    "Total return includes income plus appreciation; quoting only price change understates the result for a dividend-paying holding.",
  ],
  keyTerms: [
    {
      term: 'Present value',
      definition:
        'The current worth of a future sum discounted at a required rate of return; falls as either the discount rate or the time horizon increases.',
    },
    {
      term: 'Rule of 72',
      definition:
        'A shortcut estimating the years required to double a sum: divide 72 by the annual percentage rate. At 8%, doubling takes roughly 9 years.',
    },
    {
      term: 'Net present value (NPV)',
      definition:
        'The present value of expected cash inflows minus the cost of the investment. Positive NPV means the investment adds value and should be accepted.',
    },
    {
      term: 'Internal rate of return (IRR)',
      definition:
        'The discount rate at which net present value equals zero; for a bond held to maturity it equals the yield to maturity. Accept when IRR exceeds the required return.',
    },
    {
      term: 'Holding period return',
      definition:
        'Total return over the period an asset was held: ending value minus beginning value plus income received, divided by beginning value.',
    },
    {
      term: 'Standard deviation',
      definition:
        'The square root of variance; the standard measure of total risk or volatility. Higher standard deviation means a wider dispersion of possible outcomes.',
    },
    {
      term: 'Correlation coefficient',
      definition:
        'A standardized measure of how two assets move together, bounded by −1.0 and +1.0. Diversification benefit increases as correlation declines.',
    },
    {
      term: 'Beta',
      definition:
        'A measure of systematic risk — sensitivity to market movements. The market equals 1.0; above 1.0 is more volatile than the market and below 1.0 is less volatile.',
    },
    {
      term: 'Sharpe ratio',
      definition:
        'Excess return above the risk-free rate per unit of total risk, using standard deviation as the denominator. Higher is better.',
    },
  ],
  confusions: [
    {
      dont: 'NPV, a dollar amount of value added at the required discount rate',
      with: 'IRR, a percentage rate at which NPV would equal zero',
    },
    {
      dont: 'Standard deviation, which measures total risk including company-specific risk',
      with: 'Beta, which measures only systematic market risk',
    },
    {
      dont: 'The Sharpe ratio, which divides excess return by standard deviation',
      with: 'Alpha, which measures return above what beta and the market predicted',
    },
    {
      dont: 'Covariance, an unbounded measure of co-movement',
      with: 'Correlation, the same relationship standardized to a −1.0 to +1.0 scale',
    },
    {
      dont: 'Nominal return, the stated percentage',
      with: 'Real return, the nominal figure less inflation, which measures purchasing power',
    },
  ],
  formulas: [
    {
      name: 'Future value',
      formula: 'FV = PV × (1 + r)^n',
      note: 'r is the periodic rate and n the number of periods. More frequent compounding raises the effective rate.',
    },
    {
      name: 'Present value',
      formula: 'PV = FV / (1 + r)^n',
      note: 'Present value falls as the discount rate rises or the horizon lengthens.',
    },
    {
      name: 'Rule of 72',
      formula: 'Years to double ≈ 72 / annual rate (%)',
      note: 'Invertible: to double in 6 years requires roughly a 12% return.',
    },
    {
      name: 'Net present value',
      formula: 'NPV = PV of expected cash inflows − cost of the investment',
      note: 'Accept if positive. Applied to a bond, positive NPV means the bond is underpriced.',
    },
    {
      name: 'Holding period return',
      formula: 'HPR = (Ending value − Beginning value + Income) / Beginning value',
      note: 'Captures income and appreciation together over the full holding period.',
    },
    {
      name: 'Real (inflation-adjusted) return',
      formula: 'Real return = Nominal return − Inflation rate',
      note: 'The only return that measures change in purchasing power.',
    },
    {
      name: 'After-tax return',
      formula: 'After-tax return = Nominal return × (1 − tax rate)',
      note: 'For fully taxable income. Adjust for taxes first, then for inflation, to reach the real after-tax return.',
    },
    {
      name: 'Expected return',
      formula: 'Expected return = Σ (probability of each outcome × that outcome)',
      note: 'For a portfolio, take the weighted average of the expected returns of the holdings.',
    },
    {
      name: 'Standard deviation',
      formula: 'Standard deviation = square root of variance',
      note: 'Variance is the average squared deviation from the mean; standard deviation restores the original units.',
    },
    {
      name: 'Correlation coefficient',
      formula: 'Correlation = Covariance(A,B) / (standard deviation of A × standard deviation of B)',
      note: 'Always falls between −1.0 and +1.0.',
    },
    {
      name: 'Sharpe ratio',
      formula: 'Sharpe = (Portfolio return − Risk-free rate) / Standard deviation of the portfolio',
      note: 'Excess return per unit of total risk. Higher is better; appropriate for undiversified portfolios.',
    },
    {
      name: 'Normal distribution confidence bands',
      formula: '±1 SD ≈ 68%, ±2 SD ≈ 95%, ±3 SD ≈ 99.7%',
      note: 'A 10% expected return with a 15% standard deviation implies −5% to +25% about two-thirds of the time.',
    },
  ],
  workedExamples: [
    {
      title: 'Future value of a lump sum',
      setup: 'A client invests $25,000 today at 7% compounded annually. What is it worth in 10 years?',
      steps: [
        'FV = PV × (1 + r)^n',
        'Substitute: FV = $25,000 × (1 + 0.07)^10',
        'Growth factor: 1.07^10 = 1.96715',
        'Multiply: $25,000 × 1.96715 = $49,178.78',
        'Sense check against the Rule of 72: 72 / 7 ≈ 10.3 years to double, so at 10 years the balance should be just under double — and it is.',
      ],
      answer: 'About $49,179, of which $24,179 is growth on the original $25,000.',
      watchOut:
        'Computing simple interest instead of compound: $25,000 × 7% × 10 = $17,500 of interest, for $42,500 total. That understates the result by about $6,679 because it never lets the interest earn interest.',
    },
    {
      title: 'Present value of a future sum',
      setup:
        'A client needs $80,000 in 6 years for a down payment and can earn 5% compounded annually. How much must be invested today?',
      steps: [
        'PV = FV / (1 + r)^n',
        'Substitute: PV = $80,000 / (1 + 0.05)^6',
        'Discount factor: 1.05^6 = 1.34010',
        'Divide: $80,000 / 1.34010 = $59,697.23',
        'Check by compounding forward: $59,697.23 × 1.34010 = $80,000',
      ],
      answer: 'About $59,697 must be invested today.',
      watchOut:
        'Multiplying by the growth factor instead of dividing by it — $80,000 × 1.34010 = $107,208, which answers a question nobody asked. Keep the two directions straight: a higher discount rate or a longer horizon each make the present value smaller.',
    },
    {
      title: 'Rule of 72 against the exact doubling time',
      setup:
        'How long does money take to double at 6%, at 8%, and at 12%? Compare the shortcut with the precise figure.',
      steps: [
        'Rule of 72: years to double ≈ 72 / the rate stated as a whole number of percent',
        'At 6%: 72 / 6 = 12.0 years. The exact answer is 11.90 years.',
        'At 8%: 72 / 8 = 9.0 years. The exact answer is 9.01 years.',
        'At 12%: 72 / 12 = 6.0 years. The exact answer is 6.12 years.',
        'Verify the 6% case directly: 1.06^12 = 2.012, just past double, so 12 years is a small overestimate',
        'The rule inverts the same way: to double in 6 years you need roughly 72 / 6 = 12% a year',
      ],
      answer:
        'The rule gives 12, 9, and 6 years against exact figures of 11.90, 9.01, and 6.12 years. It is most accurate near 8% and drifts at the extremes.',
      watchOut:
        'Dividing 72 by the decimal rate — 72 / 0.06 = 1,200 years. The rule takes the rate as a whole number of percent. It also applies only to a single sum growing at a constant compound rate; it does not work on a stream of contributions.',
    },
    {
      title: 'Future value of a level annual contribution stream',
      setup:
        'A client contributes $6,000 at the end of each year for 20 years and earns 6% annually. What is the account worth at the end?',
      steps: [
        'This is an ordinary annuity: FV = Payment × [((1 + r)^n − 1) / r]',
        'Substitute: FV = $6,000 × [(1.06^20 − 1) / 0.06]',
        'Growth factor: 1.06^20 = 3.20714',
        'Subtract 1: 3.20714 − 1 = 2.20714',
        'Divide by the rate to get the annuity factor: 2.20714 / 0.06 = 36.7856',
        'Multiply by the payment: $6,000 × 36.7856 = $220,713.55',
        'Split the total: $6,000 × 20 = $120,000 contributed, leaving about $100,714 of compound growth',
      ],
      answer:
        'About $220,714 — $120,000 of contributions plus roughly $100,714 of growth.',
      watchOut:
        'Applying the lump-sum formula to the whole $120,000 as though it were invested on day one: $120,000 × 1.06^20 = $384,856, wildly too high, because each contribution has been working for a different length of time. Note too that this is an ordinary annuity, paid at year end; contributions made at the start of each year form an annuity due worth 6% more, about $233,956.',
    },
    {
      title: 'Probability-weighted expected return',
      setup:
        'An analyst assigns a 25% probability to a +18% return, a 50% probability to +8%, and a 25% probability to −6%. What is the expected return?',
      steps: [
        'Expected return = the sum of (probability × outcome) across all scenarios',
        'First confirm the probabilities total 1.00: 0.25 + 0.50 + 0.25 = 1.00',
        'Strong case: 0.25 × 18% = 4.5%',
        'Base case: 0.50 × 8% = 4.0%',
        'Weak case: 0.25 × (−6%) = −1.5%',
        'Add the three: 4.5% + 4.0% − 1.5% = 7.0%',
      ],
      answer: 'The expected return is 7.0%.',
      watchOut:
        'Taking the simple average of the three outcomes, (18 + 8 − 6) / 3 = 6.67%, which silently assumes the scenarios are equally likely. They are not — the base case carries twice the weight of either tail.',
    },
    {
      title: 'One, two and three sigma bands of a normal distribution',
      setup:
        'A portfolio has an expected return of 9% and a standard deviation of 12%. State the approximate 68%, 95%, and 99.7% ranges.',
      steps: [
        'One standard deviation, about 68% of outcomes: 9% ± 12%',
        'Lower bound: 9% − 12% = −3%. Upper bound: 9% + 12% = +21%.',
        'Two standard deviations, about 95%: first 2 × 12% = 24%, so 9% ± 24%',
        'Lower bound: 9% − 24% = −15%. Upper bound: 9% + 24% = +33%.',
        'Three standard deviations, about 99.7%: first 3 × 12% = 36%, so 9% ± 36%',
        'Lower bound: 9% − 36% = −27%. Upper bound: 9% + 36% = +45%.',
      ],
      answer:
        'About 68% of years between −3% and +21%, about 95% between −15% and +33%, and about 99.7% between −27% and +45%.',
      watchOut:
        'Doubling the endpoints of the one-sigma band instead of doubling the standard deviation. That gives −6% to +42% for two sigma, which is wrong; the correct band is 9% ± 24%, or −15% to +33%. Remember also that real return distributions have fatter tails than the normal curve, so extreme outcomes occur more often than 0.3% of the time.',
    },
    {
      title: 'Converting covariance to a correlation coefficient',
      setup:
        'Two assets have a covariance of 0.0084. Asset A has a standard deviation of 14% and Asset B a standard deviation of 10%. What is the correlation coefficient?',
      steps: [
        'Correlation = Covariance(A,B) / (standard deviation of A × standard deviation of B)',
        'Put the standard deviations in decimals: 14% = 0.14 and 10% = 0.10',
        'Denominator: 0.14 × 0.10 = 0.014',
        'Substitute: 0.0084 / 0.014',
        'Divide: 0.0084 / 0.014 = 0.60',
      ],
      answer:
        'The correlation coefficient is +0.60 — positively correlated, but far enough below +1.0 that combining the two still reduces portfolio risk.',
      watchOut:
        'Mixing units by dividing a decimal covariance by standard deviations written as whole percentages: 0.0084 / (14 × 10) = 0.00006, which is not a correlation at all. Keep everything in decimals, and use the bounds as a check — any result outside −1.0 to +1.0 is arithmetically impossible.',
    },
  ],
};
