# Capital Market Theory and Portfolio Construction

This is one topic from the Series 65 exam, the Uniform Investment Adviser Law
Examination. It is worth about 3 percent of the exam.

## Why this topic matters

Modern Portfolio Theory says risk should be judged at the portfolio level, not security by security, and that combining imperfectly correlated assets improves the risk-return trade-off. The exam tests correlation and the efficient frontier, the split between systematic and unsystematic risk, CAPM and beta, alpha, the three forms of the Efficient Market Hypothesis, and the behavioral objections to all of it.

## Modern Portfolio Theory

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

- Form: Weak. Prices reflect: All past prices and volume. Therefore useless: Technical analysis. Still possibly useful: Fundamental analysis, inside information.
- Form: Semi-strong. Prices reflect: Past prices plus all public information. Therefore useless: Technical and fundamental analysis. Still possibly useful: Inside information.
- Form: Strong. Prices reflect: All information, public and private. Therefore useless: Technical, fundamental, and inside information. Still possibly useful: Nothing.


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

Behavioral finance challenges the *assumptions* of MPT and EMH more than their *conclusions*. If investors systematically misprice, mispricings should exist and be exploitable — yet **limits to arbitrage** (borrowing costs, short-sale constraints, the risk that a mispricing widens before it closes) stop rational investors from correcting them quickly. The practical takeaway is narrower than the theory: diversify, write the policy down, automate rebalancing, and treat a client's reaction to a drawdown as data about tolerance rather than as an instruction.

## The questions this topic is tested with

**An investor holds Fund A and wants to add a second fund to reduce portfolio volatility as much as possible. She should choose the candidate whose correlation with Fund A is**

Diversification benefit rises as correlation falls; the lower (more negative) the coefficient, the greater the reduction in portfolio standard deviation. A correlation of +1.00 provides no diversification at all.

**A portfolio plotted below and to the right of the efficient frontier is best described as one that**

The efficient frontier is the set of portfolios with the greatest expected return per unit of risk. Anything beneath it is inefficient — an investor could obtain the same return with less risk, or more return at the same risk. Points above the frontier are unattainable.

**The risk-free rate is 3%, the expected return on the market is 9%, and a stock has a beta of 1.4. Using the capital asset pricing model, the expected return on the stock is**

CAPM: expected return = risk-free rate + beta × (market return − risk-free rate) = 3% + 1.4 × (9% − 3%) = 3% + 8.4% = 11.4%. A common error is multiplying beta by the market return itself (1.4 × 9% = 12.6%) instead of by the market risk premium.

**A portfolio is 50% invested in a fund with a beta of 1.40, 30% in a fund with a beta of 0.90, and 20% in a fund with a beta of 0.50. The beta of the portfolio is**

Portfolio beta is the weighted average of component betas: (0.50 × 1.40) + (0.30 × 0.90) + (0.20 × 0.50) = 0.70 + 0.27 + 0.10 = 1.07. Simply averaging the three betas (0.93) ignores the weights.

**A portfolio with a beta of 1.2 returned 12% over a period in which the market returned 9% and Treasury bills returned 2%. The alpha of the portfolio is approximately**

CAPM-required return = 2% + 1.2 × (9% − 2%) = 2% + 8.4% = 10.4%. Alpha = actual 12% − required 10.4% = +1.6%, meaning the manager added return beyond what the risk taken would predict. Comparing the 12% to the 9% market return (+3%) ignores the higher beta.

**An analyst builds discounted cash flow models from published financial statements and consistently earns no more than the market after costs. This outcome is most consistent with**

Semi-strong form holds that prices already reflect all publicly available information, so fundamental analysis of public data cannot generate excess risk-adjusted returns. Weak form addresses only past prices and volume, so it would not by itself explain the failure of fundamental analysis.
