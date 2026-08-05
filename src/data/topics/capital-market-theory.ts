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

Standalone risk is the wrong lens because portfolio variance is not the average of the parts. Returns add up as a weighted average; **risk does not**, because the assets partly cancel. A single asset's standard deviation therefore says little about what it does to the portfolio holding it. The question is never "how volatile is this?" but "how does this move when everything else I own moves?"

### Correlation Is the Engine

**Correlation coefficient (r)** runs from **+1.0 to −1.0**.

- **+1.0** — perfectly positive; assets move together in lockstep. **No diversification benefit at all.**
- **0** — uncorrelated; movements are independent. Substantial benefit.
- **−1.0** — perfectly negative; movements are exact opposites. In theory, risk can be eliminated entirely.

The practical rule: **any correlation below +1.0 produces some diversification benefit**, and the benefit grows as correlation falls. Adding an asset with a correlation of +0.6 still helps. Owning thirty technology stocks that all correlate at +0.9 helps very little — the classic exam trap of **naive diversification**.

**Covariance** measures the same relationship in unstandardized units; correlation is covariance scaled by the two standard deviations, which puts every pair on the same −1 to +1 ruler.

Two limits matter. **Correlation is estimated from history and is not stable** — in a severe selloff, correlations among risk assets rise toward 1.0 exactly when diversification was most needed. And **diversification reduces volatility, not the possibility of loss**: a perfectly diversified equity portfolio still falls in a bear market, because what remains after diversification is the systematic component.

### The Efficient Frontier

Plot every possible portfolio with **standard deviation on the horizontal axis** and **expected return on the vertical axis**. Portfolios on the upper-left boundary are **efficient**: for a given level of risk none offers a higher expected return, and for a given expected return none carries lower risk. That boundary is the **efficient frontier**.

Anything **below** the frontier is inefficient and should be rejected. Nothing exists **above** it. A rational investor picks the point matching their risk tolerance — the frontier does not identify one best portfolio, only a set of defensible ones.

Introducing a **risk-free asset** changes the picture. Combining borrowing or lending at the risk-free rate with a single optimal risky portfolio produces the **capital market line (CML)**, a straight line from the risk-free rate tangent to the frontier. The CML plots expected return against **total risk (standard deviation)** and applies to **efficient portfolios**.

The tangency point where the CML touches the frontier is the **market portfolio** — the one risky portfolio every investor should hold. Hence **two-fund separation**: the choice of *which* risky assets to own separates from the choice of *how much* risk to take. Everyone owns the same risky portfolio and dials risk with the risk-free asset. Between the risk-free rate and the tangency is a **lending portfolio** (part in T-bills); beyond the tangency is a **borrowing portfolio** (margin).

### Efficient Is Not the Same as Optimal

This is the boundary candidates miss. **Efficient** is a property of the portfolio alone: nothing else offers more return at that risk, or less risk at that return. **Optimal** is a property of a portfolio *and a particular investor* — the efficient portfolio sitting where that investor's willingness and ability to bear risk actually lie. The frontier is a menu, not a recommendation.

So a portfolio can be perfectly efficient and still be wrong for the client in front of you — an efficient 90% equity mix is unsuitable for a retiree with a three-year horizon however well constructed. Conversely, a portfolio the client loves is indefensible if another mix offers the same expected return at lower risk, because that mix **dominates** it.

### Scenario: One Frontier, Two Right Answers

Two clients see the same efficient frontier. Portfolio A sits at 6% expected return and 7% standard deviation; Portfolio B at 9% and 15%.

The first client is 34, saves $25,000 a year, and will not touch the money for thirty years. Her required return is about 8%, and a 15% standard deviation year is an inconvenience, not a failure. **B is optimal for her** — choosing A means almost certainly missing the goal, so the safer-looking portfolio carries the larger risk of the outcome she cares about.

The second client is 71 and withdrawing $60,000 a year. His required return is 4%. **A is optimal for him**: B offers three extra points of expected return he does not need, at double the volatility, on a balance he is drawing down. Both are efficient, neither is better, and the frontier cannot make the choice.

## Systematic Versus Unsystematic Risk

This split is the single most tested idea in the topic.

**Systematic risk** (market risk, non-diversifiable risk) affects the entire market: recessions, interest rate moves, inflation, war, broad policy shifts. **Diversification cannot remove it.** It is the risk the market compensates you for bearing.

**Unsystematic risk** (unique, specific, diversifiable, residual risk) is company- or industry-specific: a product recall, a fraud, a strike, a lost patent. **Diversification removes it** — as securities are added, unique risks partly offset. Most of the benefit arrives quickly; roughly **20 to 30 well-chosen, low-correlation stocks** captures the bulk of it.

### Why Only Systematic Risk Is Compensated

The argument follows from what a price is. Investors bid for expected return, and competition drives the price of any risk that can be **avoided for free** to zero.

Unsystematic risk can be removed simply by holding more securities. It costs nothing beyond a few trades and requires no forecast, so no investor has to be paid to give it up. Any excess return that briefly existed for bearing avoidable risk would be bid away by diversified investors who could capture it without accepting the risk at all.

Systematic risk is different: **every investor holds it and no one can escape it.** Someone must bear recession, inflation, and rate risk, and they will only do so if compensated. That compensation is the **market risk premium**, and beta measures how much of it a given asset is entitled to.

The consequence: **the market pays only for systematic risk.** A client holding a single employer stock bears far more total volatility than the market, but the extra volatility is unsystematic and therefore **uncompensated** — more risk, no additional expected return. That is a stronger case for selling a concentrated position than any forecast about the company.

### Scenario: Thirty Holdings and Still Concentrated

A client holds thirty stocks and calls the portfolio diversified. Twenty-two are semiconductor and software names correlating around +0.85. Adding the thirtieth chip stock removes almost nothing, because little independent movement is left to cancel.

The portfolio is one large bet on a single factor, dressed as thirty decisions. The remedy is not more names but **less correlated** names — a bond sleeve, non-US equity, or a defensive sector does more for portfolio standard deviation than another twenty technology positions. Count of holdings is not the variable that matters; **correlation is**.

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

### Assumptions and Limitations of CAPM

CAPM works only if a demanding list holds: investors are rational, risk-averse, and care only about one period's mean and variance; all share the **same expectations**; all can **borrow and lend freely at the same risk-free rate**; and there are **no taxes, transaction costs, or short-sale restrictions**.

Each is false in some degree, producing the standard criticisms:

- **Nobody borrows at the Treasury rate.** Real borrowing costs more than lending earns, which flattens the actual relationship between beta and return.
- **Beta is unstable and estimate-dependent.** The same stock yields different betas depending on the index, period, and return interval used.
- **The market portfolio is unobservable.** In principle it holds every asset — global equities, bonds, real estate, private businesses, human capital — so any index proxy is the wrong thing, and a test of CAPM is always a joint test of model and proxy.
- **One factor is not enough.** Size, value, momentum, and profitability explain returns beta alone does not, which is why multifactor models and APT exist.

None of this makes CAPM useless. It remains the standard statement of the idea that **required return should rise with non-diversifiable risk**, and it underlies alpha, the SML, and the Treynor ratio.

### The Security Market Line

The **security market line (SML)** graphs CAPM: expected return on the vertical axis, **beta** on the horizontal axis. It starts at the risk-free rate and slopes upward at the market risk premium.

- A security **plotted above** the SML offers more return than its beta justifies — **undervalued**, buy.
- A security **plotted below** the SML offers too little for its risk — **overvalued**, sell.

**Do not confuse the SML with the CML.** The SML uses **beta** (systematic risk) and prices **individual securities**; the CML uses **standard deviation** (total risk) and describes **efficient portfolios**.

## Alpha

**Alpha** is the return earned **above or below** what CAPM says the asset should have earned given its beta. Positive alpha means the manager or security outperformed on a risk-adjusted basis; negative alpha means it underperformed. Alpha is the standard measure of **manager skill**, and the persistent difficulty of producing it after fees is the strongest practical argument for indexing.

### R-Squared, and Why It Comes First

**R-squared** measures the proportion of an asset's movement explained by the benchmark, on a 0 to 100 scale, and it is the quality check on every other regression statistic. **Near 100**, the portfolio tracks the index closely and beta and alpha are meaningful. **In the middle**, an active fund with real independent movement — still informative, noisier. **Low**, the benchmark explains little of what the fund does, so **beta and alpha computed against it are unreliable**; a gold fund measured against the S&P 500 is the textbook case.

Read them in order: R-squared, then beta, then alpha. A large alpha with a low R-squared is usually a benchmark error, not skill.

### Beta Versus Standard Deviation

They answer different questions and the exam swaps them deliberately. **Standard deviation** captures **total** risk, systematic and unsystematic together; **beta** captures only the **systematic** part that moves with the market.

A biotech stock awaiting a trial result can have a very **high standard deviation and a low beta** — violently volatile for reasons unrelated to the market. A diversified index fund can have a **beta of 1.0 and a lower standard deviation** than any of its components. The rule: use **standard deviation** when the holding is the investor's whole portfolio or a concentrated position, because total risk is what they bear; use **beta** when the position sits inside a diversified portfolio, because only its systematic contribution survives.

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

Read each form as a claim about which research is wasted. **Weak form**: price and volume history is already reflected, so charting cannot generate excess return, though fundamental research might. **Semi-strong form**: everything public is reflected, so fundamental analysis of public data cannot reliably add value either, and prices adjust to news essentially instantly rather than drifting. **Strong form**: private information too, making even insider knowledge worthless.

The implication of the semi-strong form is **passive management**, and the argument turns as much on **costs** as on efficiency: even in an only approximately efficient market, the average active dollar earns the market return before fees and less after them, so the fee is a near-certain drag against an uncertain edge.

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

For an adviser this is not academic. It explains why clients abandon plans at the bottom and why a written IPS and a mechanical rebalancing rule work — they pre-commit the client to a decision made calmly.

Behavioral finance challenges the *assumptions* of MPT and EMH more than their *conclusions*. If investors systematically misprice, mispricings should exist and be exploitable — yet **limits to arbitrage** (borrowing costs, short-sale constraints, the risk that a mispricing widens before it closes) stop rational investors from correcting them quickly. The practical takeaway is narrower than the theory: diversify, write the policy down, automate rebalancing, and treat a client's reaction to a drawdown as data about tolerance rather than as an instruction.`,
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
