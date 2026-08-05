import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'capital-market-theory',
  title: 'Capital Market Theory and Portfolio Construction',
  weight: '~3%',
  order: 18,
  summary:
    "Modern Portfolio Theory says risk should be judged at the portfolio level, not security by security, and that combining imperfectly correlated assets improves the risk-return trade-off. The exam tests correlation and the efficient frontier, the split between systematic and unsystematic risk, CAPM and beta, alpha, the three forms of the Efficient Market Hypothesis, and the behavioral objections to all of it.",
  body: `## Modern Portfolio Theory

Harry **Markowitz** published the foundational insight in 1952: an investor should evaluate a security by its **contribution to portfolio risk and return**, not by its standalone characteristics. A volatile asset can *reduce* total portfolio risk if it moves differently from what the investor already owns.

MPT rests on a few assumptions worth knowing because exam questions attack them: investors are **rational** and **risk-averse**, they judge portfolios on **expected return and standard deviation** alone, they share the same information and time horizon, and markets are frictionless. Investors are assumed to demand **higher expected return for higher risk** — they do not avoid risk, they price it.

### Correlation Is the Engine

**Correlation coefficient (r)** runs from **+1.0 to −1.0**.

- **+1.0** — perfectly positive; assets move together in lockstep. **No diversification benefit at all.**
- **0** — uncorrelated; movements are independent. Substantial benefit.
- **−1.0** — perfectly negative; movements are exact opposites. In theory, risk can be eliminated entirely.

The practical rule: **any correlation below +1.0 produces some diversification benefit**, and the benefit grows as correlation falls. Adding an asset with a correlation of +0.6 still helps. Owning thirty technology stocks that all correlate at +0.9 helps very little — the classic exam trap of **naive diversification**.

**Covariance** measures the same relationship in unstandardized units; correlation is covariance scaled by the two standard deviations.

### The Efficient Frontier

Plot every possible portfolio with **standard deviation on the horizontal axis** and **expected return on the vertical axis**. Portfolios on the upper-left boundary are **efficient**: for a given level of risk none offers a higher expected return, and for a given expected return none carries lower risk. That boundary is the **efficient frontier**.

Anything **below** the frontier is inefficient and should be rejected. Nothing exists **above** it. A rational investor picks the point matching their risk tolerance — the frontier does not identify one best portfolio, only a set of defensible ones.

Introducing a **risk-free asset** changes the picture. Combining borrowing or lending at the risk-free rate with a single optimal risky portfolio produces the **capital market line (CML)**, a straight line from the risk-free rate tangent to the frontier. The CML plots expected return against **total risk (standard deviation)** and applies to **efficient portfolios**.

## Systematic Versus Unsystematic Risk

This split is the single most tested idea in the topic.

**Systematic risk** (market risk, non-diversifiable risk) affects the entire market: recessions, interest rate moves, inflation, war, broad policy shifts. **Diversification cannot remove it.** It is the risk the market compensates you for bearing.

**Unsystematic risk** (unique, specific, diversifiable, residual risk) is company- or industry-specific: a product recall, a fraud, a strike, a lost patent. **Diversification removes it** — as securities are added, unique risks partly offset. Most of the benefit arrives quickly; roughly **20 to 30 well-chosen, low-correlation stocks** captures the bulk of it.

The consequence for pricing: **the market pays only for systematic risk.** Bearing unsystematic risk when you could have diversified it away earns no expected reward — which is why concentration in a single employer stock is **uncompensated** risk.

## The Capital Asset Pricing Model

CAPM answers: what return should an investor **require** for holding a given amount of systematic risk?

Expected return equals the **risk-free rate** plus **beta** times the **market risk premium**. The market risk premium is the market return minus the risk-free rate — the extra return demanded for taking average market risk. Beta scales that premium to the asset.

### Beta

**Beta** measures **systematic risk**: the sensitivity of an asset's return to the market's return.

- **Beta = 1.0** — moves with the market.
- **Beta > 1.0** — more volatile than the market; a beta of 1.5 implies a 15% move for a 10% market move. Typical of technology, consumer discretionary, small caps.
- **Beta < 1.0** — less volatile; typical of utilities, consumer staples, large-cap value. **Defensive**.
- **Beta = 0** — no market sensitivity; the risk-free asset.
- **Negative beta** — moves opposite the market; rare, sometimes associated with gold or certain hedges.

Beta is estimated by **regression** of the asset's returns against a market index. It is **historical** and can be unstable, which is a standard criticism.

### The Security Market Line

The **security market line (SML)** graphs CAPM: expected return on the vertical axis, **beta** on the horizontal axis. It starts at the risk-free rate and slopes upward at the market risk premium.

- A security **plotted above** the SML offers more return than its beta justifies — **undervalued**, buy.
- A security **plotted below** the SML offers too little for its risk — **overvalued**, sell.

**Do not confuse the SML with the CML.** The SML uses **beta** (systematic risk) and prices **individual securities**; the CML uses **standard deviation** (total risk) and describes **efficient portfolios**.

## Alpha

**Alpha** is the return earned **above or below** what CAPM says the asset should have earned given its beta. Positive alpha means the manager or security outperformed on a risk-adjusted basis; negative alpha means it underperformed. Alpha is the standard measure of **manager skill**, and the persistent difficulty of producing it after fees is the strongest practical argument for indexing.

## Arbitrage Pricing Theory

**APT**, developed by Stephen Ross, allows expected return to depend on **multiple systematic factors** — inflation surprises, industrial production, credit spreads, term structure shifts — rather than a single market factor. Each factor has its own sensitivity and its own risk premium. APT makes weaker assumptions than CAPM and does not require a market portfolio, but it does not tell you what the factors are. For the exam, know that APT is **multi-factor** while CAPM is **single-factor**, and that APT rests on the idea that identical risk exposures must earn identical returns or arbitrage will force them to.

## The Efficient Market Hypothesis

**EMH** holds that security prices already reflect available information, so consistently earning excess risk-adjusted returns is not possible. Three forms, each a strictly larger information set.

| Form | Prices reflect | Therefore useless | Still possibly useful |
| --- | --- | --- | --- |
| **Weak** | All **past prices and volume** | **Technical analysis** | Fundamental analysis, inside information |
| **Semi-strong** | Past prices **plus all public information** | Technical **and fundamental** analysis | **Inside information** |
| **Strong** | All information, **public and private** | Technical, fundamental, **and inside information** | Nothing |

Semi-strong is the form most academics regard as approximately true, and it is the form most exam questions target. The strong form is generally rejected — insiders demonstrably profit, which is precisely why insider trading is illegal.

The investment implication of EMH is **passive management**: if prices are fair, the rational response is to buy the market cheaply, minimize costs and taxes, and stop paying for security selection.

## Behavioral Finance

Behavioral finance argues that investors are **not** the rational actors MPT and EMH assume, and that predictable psychological errors move prices.

- **Overconfidence** — overestimating one's own skill; leads to excessive trading and under-diversification.
- **Anchoring** — fixating on an irrelevant reference point, most often the purchase price, and refusing to sell below it.
- **Herding** — following the crowd; a driver of bubbles and panics.
- **Loss aversion** — losses hurt roughly twice as much as equivalent gains feel good; produces the **disposition effect**, selling winners too soon and holding losers too long.
- **Confirmation bias** — seeking evidence that supports an existing view and discounting contrary evidence.
- **Recency bias** — extrapolating the recent past; chasing last year's top performer.
- **Mental accounting** — treating money differently by category, such as gambling a bonus while refusing risk with salary.
- **Framing** — reaching different decisions on identical facts depending on presentation.

For an adviser this is not academic. It explains why clients abandon plans at the bottom and why a written IPS and a mechanical rebalancing rule work — they pre-commit the client to a decision made calmly.`,
  pitfalls: [
    "Diversification eliminates unsystematic risk only. No amount of diversification reduces market, interest rate, or inflation risk — those are systematic and are the risks the market compensates.",
    "Correlation does not need to be negative for diversification to work. Any correlation below +1.0 provides a benefit, and negative correlation is merely the strongest case.",
    "The security market line plots expected return against beta and prices individual securities; the capital market line plots expected return against standard deviation and describes efficient portfolios. Exam questions swap them deliberately.",
    "Weak-form EMH invalidates technical analysis only. Semi-strong adds fundamental analysis. Only strong form implies inside information is useless — and strong form is the version most evidence rejects.",
    "Beta measures systematic risk; standard deviation measures total risk. A stock with high standard deviation but low beta is volatile for company-specific reasons that diversification can address.",
    "A security plotted above the security market line is undervalued, not overvalued — it delivers more return than its beta requires. Candidates reverse this constantly.",
    "Owning thirty stocks in one sector is naive diversification. Correlation, not the count of holdings, determines how much unique risk is actually removed.",
  ],
  keyTerms: [
    {
      term: 'Modern Portfolio Theory',
      definition:
        "Markowitz framework holding that a security should be evaluated by its contribution to portfolio risk and return rather than in isolation.",
    },
    {
      term: 'Correlation coefficient',
      definition:
        'A standardized measure from +1.0 to −1.0 of how two assets move relative to each other; any value below +1.0 yields a diversification benefit.',
    },
    {
      term: 'Efficient frontier',
      definition:
        'The set of portfolios offering the highest expected return for each level of risk; portfolios below it are inefficient and nothing exists above it.',
    },
    {
      term: 'Systematic risk',
      definition:
        'Market-wide risk that cannot be diversified away, such as recession, interest rate, inflation, and geopolitical risk; the only risk the market compensates.',
    },
    {
      term: 'Unsystematic risk',
      definition:
        'Company- or industry-specific risk that diversification can substantially eliminate, and for which the market therefore pays no premium.',
    },
    {
      term: 'Beta',
      definition:
        "A regression-based measure of an asset's sensitivity to market movements; the market has a beta of 1.0 and the risk-free asset a beta of 0.",
    },
    {
      term: 'Alpha',
      definition:
        "Return above or below the level CAPM predicts for the asset's beta; the standard measure of risk-adjusted manager skill.",
    },
    {
      term: 'Security market line',
      definition:
        'The graphical form of CAPM plotting expected return against beta; securities above the line are undervalued and those below are overvalued.',
    },
    {
      term: 'Efficient Market Hypothesis',
      definition:
        'The theory that prices already reflect available information, with weak, semi-strong, and strong forms defined by how much information is impounded.',
    },
  ],
  confusions: [
    {
      dont: 'Security market line — expected return versus beta, prices individual securities',
      with: 'Capital market line — expected return versus standard deviation, describes efficient portfolios',
    },
    {
      dont: 'Systematic risk — market-wide, undiversifiable, compensated with a risk premium',
      with: 'Unsystematic risk — security-specific, diversifiable, and therefore uncompensated',
    },
    {
      dont: 'Beta — measures systematic risk relative to the market',
      with: 'Standard deviation — measures total risk, systematic plus unsystematic',
    },
    {
      dont: 'Semi-strong form EMH — public information is already priced, so fundamental analysis adds no edge',
      with: 'Strong form EMH — even nonpublic information is priced, so not even insiders can profit',
    },
    {
      dont: 'CAPM — a single-factor model using only market beta',
      with: 'Arbitrage pricing theory — a multi-factor model with a separate sensitivity and premium for each systematic factor',
    },
  ],
  formulas: [
    {
      name: 'CAPM expected return',
      formula: 'E(R) = Rf + Beta × (Rm − Rf)',
      note: 'Rf is the risk-free rate, Rm the expected market return, and (Rm − Rf) the market risk premium. Example: with Rf = 3%, Rm = 9%, and beta = 1.4, E(R) = 3% + 1.4 × 6% = 11.4%.',
    },
    {
      name: 'Market risk premium',
      formula: 'MRP = Rm − Rf',
      note: 'The extra return investors demand for accepting average market risk.',
    },
    {
      name: 'Correlation coefficient',
      formula: 'r = Covariance(A,B) / (StdDev A × StdDev B)',
      note: 'Standardizes covariance onto the −1.0 to +1.0 scale.',
    },
  ],
  workedExamples: [
    {
      title: 'Expected return with CAPM',
      setup:
        'The risk-free rate is 3%. The expected return on the market is 9%. A stock has a beta of 1.25. What return should an investor require for holding it?',
      steps: [
        'Write the model: E(R) = Rf + Beta × (Rm − Rf)',
        'Substitute: E(R) = 0.03 + 1.25 × (0.09 − 0.03)',
        'Market risk premium first: 0.09 − 0.03 = 0.06, or 6%',
        'Scale the premium by beta: 1.25 × 0.06 = 0.075, or 7.5%',
        'Add the risk-free rate back: 0.03 + 0.075 = 0.105',
      ],
      answer: 'The required return is 10.5%.',
      watchOut:
        'Multiplying beta by the whole market return instead of by the market risk premium. That gives 1.25 × 9% = 11.25%, plus 3% = 14.25%, which is wrong. Beta scales only the premium (Rm − Rf), never Rm itself.',
    },
    {
      title: 'Solving CAPM backwards for beta',
      setup:
        'A stock is expected to return 13%. The risk-free rate is 4% and the expected market return is 10%. What beta does that imply?',
      steps: [
        'Start from E(R) = Rf + Beta × (Rm − Rf) and isolate beta: Beta = (E(R) − Rf) / (Rm − Rf)',
        'Substitute: Beta = (0.13 − 0.04) / (0.10 − 0.04)',
        "The stock's excess return: 0.13 − 0.04 = 0.09, or 9%",
        'The market risk premium: 0.10 − 0.04 = 0.06, or 6%',
        'Divide: 0.09 / 0.06 = 1.5',
      ],
      answer: 'The implied beta is 1.5 — the stock carries one and a half times market risk.',
      watchOut:
        'Dividing 13% by 10% and reporting a beta of 1.3. Both numerator and denominator must be measured in excess of the risk-free rate; raw returns produce the wrong number every time.',
    },
    {
      title: 'Weighted-average portfolio beta with a risk-free sleeve',
      setup:
        'A $200,000 portfolio holds $80,000 of Stock A (beta 1.40), $60,000 of Stock B (beta 0.90), and $60,000 of Treasury bills. What is the portfolio beta?',
      steps: [
        'Treasury bills are the risk-free asset, so their beta is 0 — but they still count in the denominator.',
        'Weight of A: $80,000 / $200,000 = 0.40',
        'Weight of B: $60,000 / $200,000 = 0.30',
        'Weight of T-bills: $60,000 / $200,000 = 0.30',
        'Check the weights: 0.40 + 0.30 + 0.30 = 1.00',
        "Stock A contribution: 0.40 × 1.40 = 0.56",
        "Stock B contribution: 0.30 × 0.90 = 0.27",
        'T-bill contribution: 0.30 × 0 = 0',
        'Sum: 0.56 + 0.27 + 0 = 0.83',
      ],
      answer:
        'The portfolio beta is 0.83, so the portfolio should move roughly 8.3% for every 10% move in the market.',
      watchOut:
        'Leaving the T-bill sleeve out of the denominator and averaging only the two stocks. That produces 0.57 × 1.40 + 0.43 × 0.90 = 1.19 and badly overstates market exposure. Cash has a beta of zero, not an absent beta.',
    },
    {
      title: "Jensen's alpha — actual return versus CAPM-required return",
      setup:
        'A manager returned 11.5% for the year. The portfolio beta was 1.20, the risk-free rate 3%, and the market returned 9%. Did the manager add value?',
      steps: [
        'Alpha compares the actual return against the return CAPM required for that beta.',
        'Required return = Rf + Beta × (Rm − Rf)',
        'Substitute: 0.03 + 1.20 × (0.09 − 0.03)',
        'Market risk premium: 0.09 − 0.03 = 0.06',
        'Scale by beta: 1.20 × 0.06 = 0.072, or 7.2%',
        'Required return: 0.03 + 0.072 = 0.102, or 10.2%',
        'Alpha = actual − required = 11.5% − 10.2% = 1.3%',
      ],
      answer:
        'Alpha is +1.3 percentage points. The manager beat the return CAPM demanded for the risk taken.',
      watchOut:
        'Comparing 11.5% against the 9% market return and calling the 2.5% gap skill. With a beta of 1.20 the portfolio was expected to beat the market; only the 1.3% above the risk-adjusted hurdle is alpha.',
    },
    {
      title: 'Expected price move from beta',
      setup:
        'A client holds $25,000 of a stock with a beta of 1.30. The market falls 8%. What move should the client expect, and what is the position then worth?',
      steps: [
        'Expected asset move = Beta × market move',
        'Substitute: 1.30 × (−8%)',
        'Multiply: 1.30 × −0.08 = −0.104, or −10.4%',
        'Dollar change: $25,000 × −0.104 = −$2,600',
        'Ending value: $25,000 − $2,600 = $22,400',
      ],
      answer:
        'The stock is expected to fall about 10.4%, roughly $2,600, leaving the position near $22,400.',
      watchOut:
        'Treating beta as an additive premium and answering −8% − 1.30% = −9.3%. Beta is a multiplier on the market move, not an amount added to it. Remember too that this captures systematic risk only; company-specific news can swamp the estimate.',
    },
    {
      title: 'How portfolio standard deviation falls as correlation drops below 1.0',
      setup:
        'Two assets are held 50/50. Asset A has a standard deviation of 20%, Asset B 12%. Compare portfolio standard deviation at a correlation of +1.0 with the same portfolio at a correlation of +0.30.',
      steps: [
        'Two-asset variance = (wA × sdA)² + (wB × sdB)² + 2 × wA × wB × sdA × sdB × r',
        'First term, identical in both cases: (0.50 × 0.20)² = 0.10² = 0.0100',
        'Second term, identical in both cases: (0.50 × 0.12)² = 0.06² = 0.0036',
        'Case 1, r = +1.0. Cross term: 2 × 0.50 × 0.50 × 0.20 × 0.12 × 1.0 = 0.0120',
        'Variance = 0.0100 + 0.0036 + 0.0120 = 0.0256',
        'Standard deviation = square root of 0.0256 = 0.16, or 16.0%',
        'Sanity check: at r = +1.0 the answer must equal the simple weighted average, 0.50 × 20% + 0.50 × 12% = 16.0%',
        'Case 2, r = +0.30. Cross term: 2 × 0.50 × 0.50 × 0.20 × 0.12 × 0.30 = 0.0036',
        'Variance = 0.0100 + 0.0036 + 0.0036 = 0.0172',
        'Standard deviation = square root of 0.0172 = 0.1311, or about 13.1%',
        'Risk removed: 16.0% − 13.1% = about 2.9 percentage points, with no change in either holding and no change in expected return',
      ],
      answer:
        'At perfect positive correlation the portfolio carries 16.0% standard deviation; at a correlation of +0.30 it carries about 13.1%. Correlation below +1.0 is the entire source of the diversification benefit.',
      watchOut:
        'Assuming correlation must be negative before diversification does anything — here a firmly positive +0.30 removed nearly three percentage points of risk. The other frequent slip is averaging the two standard deviations directly, which is correct only in the special case r = +1.0.',
    },
  ],
};
