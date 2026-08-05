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
};
