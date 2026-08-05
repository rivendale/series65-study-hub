import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'risk-types',
  title: 'Types of Investment Risk',
  weight: '~3%',
  order: 19,
  summary:
    "Exam questions rarely ask what risk means in general; they describe a specific investment and ask which risk dominates it. Master the systematic/unsystematic split, then learn the signature pairings — long bonds and interest rate risk, GNMAs and prepayment risk, high yield and default risk, non-traded REITs and liquidity risk, foreign holdings and currency risk.",
  body: `## The Master Distinction

Every risk on the exam sorts into one of two buckets, and the sorting determines the correct answer more often than any other fact in this topic.

**Systematic risk** affects the whole market, **cannot be diversified away**, and is the risk investors are **compensated** for bearing. **Unsystematic risk** is specific to a company, industry, or security, **can be substantially diversified away**, and therefore earns **no risk premium**.

The compensation rule has a reason behind it. A risk you can eliminate for the cost of a few extra trades is not something anyone must be paid to accept, so competition drives its price to zero. A risk **every** investor is stuck with must be paid for, or nobody would hold the assets that carry it. That is why the split is not a taxonomy but a pricing rule: diversifiable risk is free to remove and therefore free of reward, while market-wide risk is unavoidable and therefore rewarded.

The risks that **cannot** be diversified away are the short list worth memorizing: **market, interest rate, inflation, currency, and political risk**. If an answer choice claims diversification solves any of those, it is wrong. Everything else — business, credit, liquidity, call, prepayment, concentration — is at least partly diversifiable.

A useful memory aid for systematic risks: **PRIME** — **P**olitical, **R**einvestment (debated; see below), **I**nterest rate, **M**arket, **E**xchange rate. Note that reinvestment risk is often classified as unsystematic in exam materials because it is tied to a particular bond's cash flows; if a question forces a choice, market, interest rate, inflation, currency, and political are the safe systematic answers.

## Systematic Risks

### Market Risk

The risk that broad market declines drag down a security regardless of its own merits. **Beta** measures it. A fully diversified equity portfolio still falls in a bear market — that residual is market risk, and the only true defense is **asset allocation** away from equities, not more equities.

### Interest Rate Risk

The risk that rising rates reduce the market value of existing fixed-income securities. Bond prices and yields move **inversely**. The magnitude depends on **duration**:

- **Longer maturity** — more interest rate risk.
- **Lower coupon** — more interest rate risk (a **zero-coupon bond** of a given maturity has the highest duration and the most price sensitivity).
- Long-dated Treasuries carry **enormous** interest rate risk despite having essentially **no default risk** — the classic exam pairing.

Interest rate risk also touches equities: **preferred stock** and **utilities** trade like bonds and fall when rates rise.

#### Duration Is the Measurement

**Macaulay duration** is the weighted-average time, in years, until an investor receives the bond's cash flows. **Modified duration** converts that into a price sensitivity: the approximate percentage price change for a **1 percentage point** change in yield, in the opposite direction. A bond with a modified duration of 7 falls about 7% if yields rise 1%.

Duration rises with **longer maturity** and falls with a **higher coupon** and a **higher yield**, because each of those pulls the average cash flow forward in time. A zero-coupon bond has only one cash flow, so its Macaulay duration equals its **maturity** — the maximum available for that term, and the reason zeros are the most rate-sensitive bonds in existence.

Duration is a **straight-line estimate of a curved relationship**, so it is accurate for small moves and increasingly wrong for large ones. The curvature is **convexity**, and for an ordinary bond it works in the investor's favour: duration overstates the loss when rates rise sharply and understates the gain when they fall. Mortgage-backed securities are the exception — their **negative convexity** makes the estimate wrong in the painful direction.

Duration is also the tool for the mitigant. **Immunization** matches portfolio duration to the investor's horizon, so that the price loss from rising rates is offset by the higher reinvestment income on the coupons, and the target value is reached regardless of which way rates move.

### Inflation (Purchasing Power) Risk

The risk that returns fail to keep pace with the cost of living, so **real** purchasing power declines. It is the dominant risk for **cash, CDs, money market funds, and long-term fixed-rate bonds** — anything paying a fixed nominal amount. Common stock and real assets are the traditional hedges; **TIPS** address it directly by adjusting principal with the CPI. A retiree holding only bonds and cash for a 30-year retirement faces inflation risk, not market risk, as the primary threat.

### Currency (Exchange Rate) Risk

The risk that a change in exchange rates reduces the home-currency value of a foreign holding. A U.S. investor in a European stock loses when the **dollar strengthens** against the euro, even if the stock rises in euros. Applies to foreign stocks and bonds, ADRs, international funds, and multinational companies with large overseas revenue. It can be hedged with currency forwards or by holding currency-hedged funds.

### Political and Geopolitical Risk

The risk that government action — expropriation, capital controls, sanctions, currency devaluation, war, or instability — impairs an investment. Highest in **emerging markets** and in **sovereign debt** of unstable issuers. Also called **country risk**.

### Scenario: The Safest Bond in the World

A client buys a newly issued 30-year Treasury with a 2% coupon at par, on the reasoning that Treasuries are the safest security available. Yields then rise to 5%.

Her credit judgment was correct: there is no default risk, and if she holds to maturity she receives every coupon and her $1,000 back. Her **market value** is another matter. The bond's modified duration is about 22.5, which by itself predicts a 22.5 × 3 = 67.5% decline. Convexity softens that: the bond actually reprices to roughly **54 cents on the dollar**, a loss near 46%. A $500,000 position is worth about $268,000.

Three lessons the exam tests together. **Credit risk and interest rate risk are independent** — removing one says nothing about the other. **Duration overstates the damage on large moves**, because it is a linear approximation of a convex curve. And the 2% coupon she is locked into for three decades is a textbook case of **inflation risk** sitting on top of the price loss.

## Unsystematic Risks

### Business (Operational) Risk

The risk that a company's operations falter: poor management, product failure, obsolescence, lost competitive position, a strike. It affects both the stock and the bonds of a single issuer and is precisely what diversification addresses.

### Financial (Credit, Default) Risk

The risk that an issuer cannot meet its obligations, tied to how much **leverage** it carries. In bonds this is **default risk**, measured by ratings: **investment grade** is BBB−/Baa3 and above; **speculative grade (high yield, junk)** is BB+/Ba1 and below. **U.S. Treasuries carry no meaningful default risk; high-yield corporates carry the most.** Downgrades create **credit spread risk** even without default.

### Liquidity (Marketability) Risk

The risk of not being able to sell quickly at a fair price. Signature examples: **non-traded REITs, limited partnership interests, Regulation D private placements, thinly traded small-cap and municipal bonds, hedge funds with lockups**, and interval funds. Wide bid-ask spreads are the visible symptom. Liquidity risk is about **selling**, not about losing value.

### Regulatory and Legislative Risk

The risk that a change in law or regulation impairs value: a tax change that removes the appeal of municipal bonds, new bank capital requirements, drug pricing legislation, an environmental mandate.

### Call Risk

The risk that an issuer **redeems a bond early**, which happens when **rates fall** and the issuer refinances. The investor loses the above-market coupon and must reinvest at lower rates. **Call protection** is the mitigant. Most exposed: **high-coupon callable corporate and municipal bonds**.

### Prepayment and Extension Risk

The two-sided risk of **mortgage-backed securities** such as **GNMAs, FNMAs, and CMOs**.

- **Prepayment risk** — when rates **fall**, homeowners refinance, principal returns early, and the investor reinvests at lower rates. This is call risk in mortgage clothing.
- **Extension risk** — when rates **rise**, prepayments slow, the average life **lengthens**, and the investor is stuck holding a below-market bond longer.

The result is **negative convexity**: mortgage securities underperform when rates move sharply in either direction.

### Reinvestment Risk

The risk that interim cash flows — coupons, called principal, maturing bonds — must be reinvested at **lower** rates. It is greatest for **high-coupon bonds**, callable bonds, and bond ladders in a falling-rate environment. **Zero-coupon bonds eliminate reinvestment risk** if held to maturity because there are no interim cash flows — which is why zeros are the standard answer for funding a known future liability. Note that reinvestment risk and interest rate risk pull in **opposite directions**: rising rates hurt bond prices but help reinvestment.

### Concentration Risk

The risk of too much exposure to one security, issuer, sector, or factor. The classic case is **employer stock**, where the client's human capital and financial capital ride on the same company: a bankruptcy costs the salary, the equity, and often the retirement plan simultaneously, precisely when the labour market for that skill set is worst.

Concentration is the purest example of **uncompensated risk**. The extra volatility of a single stock over a diversified portfolio is almost entirely unsystematic, so the market pays nothing for it — the client accepts more risk for the same expected return. Concentration also hides in less obvious forms: a portfolio of thirty stocks in one sector, a municipal portfolio drawn from one state, several funds that all hold the same mega-caps, or a client whose home, job, and largest client are all tied to a single local economy.

The practical obstacles to fixing it are usually **taxes** (a very low basis), **restrictions** (Rule 144, lock-ups, blackout windows), and **attachment**. Standard mitigants are staged selling, exchange funds, charitable gifting of appreciated shares, and hedging with collars or protective puts.

### Opportunity Cost, Timing, and Tax Risk

- **Opportunity cost** — the return forgone by choosing one investment over another, often benchmarked against the risk-free rate.
- **Timing risk** — buying or selling at an unfavorable point in the cycle. **Dollar-cost averaging** is the standard mitigant.
- **Tax risk** — the risk that taxes consume more of the return than expected, or that a tax characterization changes. Related, **legislative risk** may alter tax treatment entirely.

## Sequence-of-Returns Risk

During **accumulation**, the order in which returns arrive does not matter — a portfolio compounding the same set of returns in any order finishes at the same value. Once the investor is **withdrawing**, order becomes decisive, because a loss taken while money is leaving the account destroys shares that are never available to participate in the recovery.

This is **sequence-of-returns risk**, and it is the dominant risk of the first decade of retirement. It is not solved by diversification, it does not show up in an average-return projection, and two clients with identical average returns can end in completely different places.

### Scenario: Two Retirements, Same Average Return

Two retirees each begin with $1,000,000, withdraw $50,000 at the end of each year, and experience the same three annual returns: −30%, +10%, and +25%. The arithmetic average is the same 1.67% for both. Only the order differs.

**Retiree A takes the loss first** (−30%, +10%, +25%). Year one: $1,000,000 falls to $700,000, then the withdrawal leaves $650,000. Year two: $715,000 less the withdrawal is $665,000. Year three: $831,250 less the withdrawal is **$781,250**.

**Retiree B takes the loss last** (+25%, +10%, −30%). Year one ends at $1,200,000, year two at $1,270,000, and year three at **$839,000**.

Same returns, same withdrawals, a gap of **$57,750** after only three years — and the gap compounds from there. With **no withdrawals**, both portfolios finish at exactly $962,500, which proves the point: order matters only when cash is moving. The mitigants are a cash or short-bond bucket covering the first few years of spending, a flexible withdrawal rule that cuts spending after a bad year, and avoiding an equity allocation whose worst plausible drawdown the withdrawal schedule cannot survive.

## Signature Pairings

| Investment | Dominant risk |
| --- | --- |
| **Long-term Treasury bond** | Interest rate (and inflation) — not default |
| **Zero-coupon bond** | Interest rate risk, highest of any bond of that maturity |
| **Money market fund, CD, cash** | Inflation / purchasing power, plus reinvestment |
| **High-yield corporate bond** | Default / credit risk |
| **GNMA and CMO** | Prepayment and extension risk |
| **High-coupon callable municipal** | Call risk and reinvestment risk |
| **Non-traded REIT, LP interest, Reg D private placement** | Liquidity / marketability |
| **Emerging market fund or sovereign debt** | Political and currency risk |
| **Foreign stock, ADR, international bond fund** | Currency / exchange rate risk |
| **Single employer stock position** | Concentration and business risk |
| **Utility stock and preferred stock** | Interest rate risk |

## Measuring Risk

Each measure is a different lens, and the exam tests whether you know which one the question is asking about.

**Variance** is the average squared deviation from the mean. It is the mathematically convenient form — variances of independent series add — but it is in **squared units** and cannot be compared with a return or a standard deviation. Always take the square root before comparing.

**Standard deviation** is the square root of variance and measures **total risk** in the same units as return. In a normal distribution roughly **68%** of outcomes fall within one standard deviation, **95%** within two, and **99%** within three. A portfolio with a 9% expected return and 15% standard deviation has about a 68% chance of landing between −6% and +24% in a given year. It is the risk input for the **Sharpe ratio**.

**Semivariance and downside deviation** measure only *unfavourable* dispersion, answering the fair objection that standard deviation penalizes an unexpectedly good year exactly as much as a bad one. Downside deviation is the denominator of the **Sortino ratio**, and it is the better lens where returns are skewed — options strategies, hedge funds, and anything with a long tail on one side only.

**Beta** measures **systematic risk** alone — sensitivity to the market, not total variability. It is the input for the **Treynor ratio** and **Jensen's alpha**. **R-squared** tells you whether to trust the beta at all: it is the share of the asset's movement the benchmark explains, and a low R-squared means the beta was measured against the wrong index and should not be relied on.

Choosing between them follows from diversification. In a **well-diversified** portfolio the unsystematic component is already gone, so **beta** describes the risk that remains. For a **single security or a concentrated portfolio**, the investor still bears the unsystematic part, so **standard deviation** is the honest measure. A stock with a high standard deviation and a low beta is genuinely risky to someone who owns only that stock and largely harmless to someone who owns four hundred others.`,
  pitfalls: [
    "A long-term Treasury bond has essentially no default risk but enormous interest rate and inflation risk. Safety of principal at maturity is not the same as safety of market value along the way.",
    "Interest rate risk and reinvestment risk move in opposite directions. Rising rates hurt bond prices but improve reinvestment, which is the entire premise of immunization.",
    "Zero-coupon bonds eliminate reinvestment risk if held to maturity, but they carry the highest interest rate risk of any bond of that maturity because they have the longest duration.",
    "Prepayment risk on mortgage-backed securities strikes when rates FALL, not when they rise; extension risk is the mirror image that strikes when rates rise.",
    "Liquidity risk is about the inability to sell quickly at a fair price, not about a decline in value. A non-traded REIT can be illiquid while still being reported at a stable value.",
    "Concentration risk is uncompensated. Holding a large employer-stock position adds risk without adding expected return, and it compounds the loss of income if the employer fails.",
    "Diversification never reduces market, interest rate, inflation, currency, or political risk. If the answer choice says diversification solves a systematic risk, it is wrong.",
  ],
  keyTerms: [
    {
      term: 'Interest rate risk',
      definition:
        'The risk that rising rates reduce the market value of existing fixed-income securities, greatest for long-maturity and low-coupon bonds as measured by duration.',
    },
    {
      term: 'Purchasing power risk',
      definition:
        'Inflation risk — the risk that returns fail to keep pace with rising prices, most acute for cash, CDs, and long-term fixed-rate bonds.',
    },
    {
      term: 'Default risk',
      definition:
        "Credit risk — the risk that an issuer fails to make required interest or principal payments, reflected in bond ratings and the issuer's credit spread.",
    },
    {
      term: 'Liquidity risk',
      definition:
        'Marketability risk — the risk of being unable to sell a position quickly at a fair price, typical of non-traded REITs, private placements, and thinly traded issues.',
    },
    {
      term: 'Call risk',
      definition:
        'The risk that an issuer redeems a high-coupon bond early when rates fall, forcing the investor to reinvest at lower prevailing rates.',
    },
    {
      term: 'Prepayment risk',
      definition:
        'The mortgage-backed security risk that falling rates trigger refinancing, returning principal early into a lower-rate reinvestment environment.',
    },
    {
      term: 'Extension risk',
      definition:
        'The mortgage-backed security risk that rising rates slow prepayments, lengthening average life and trapping the investor in a below-market yield.',
    },
    {
      term: 'Standard deviation',
      definition:
        'A measure of total risk expressing the dispersion of returns around the mean; about 68% of outcomes fall within one standard deviation in a normal distribution.',
    },
  ],
  confusions: [
    {
      dont: 'Interest rate risk — rising rates cut the market value of an existing bond',
      with: 'Reinvestment risk — falling rates cut the yield available on incoming cash flows',
    },
    {
      dont: 'Prepayment risk — principal returns early when rates fall',
      with: 'Extension risk — principal returns late when rates rise',
    },
    {
      dont: 'Liquidity risk — cannot sell quickly at a fair price',
      with: 'Market risk — the price itself declines with the broad market',
    },
    {
      dont: 'Standard deviation — total risk, the input to the Sharpe ratio',
      with: 'Beta — systematic risk only, the input to the Treynor ratio and Jensen alpha',
    },
    {
      dont: 'Business risk — operational failure at the company level',
      with: 'Financial risk — the leverage the company carries and its ability to service debt',
    },
  ],
  workedExamples: [
    {
      title: 'One and two standard deviation ranges around an expected return',
      setup:
        'A portfolio has an expected return of 8% and a standard deviation of 14%. Describe the likely range of one-year outcomes.',
      steps: [
        'In a normal distribution, about 68% of outcomes fall within one standard deviation of the mean and about 95% within two.',
        'One standard deviation down: 8% − 14% = −6%',
        'One standard deviation up: 8% + 14% = +22%',
        'For two standard deviations, first double the deviation: 2 × 14% = 28%',
        'Two standard deviations down: 8% − 28% = −20%',
        'Two standard deviations up: 8% + 28% = +36%',
      ],
      answer:
        'Roughly 68% of years should land between −6% and +22%, and roughly 95% between −20% and +36%.',
      watchOut:
        'Reporting 32% as the chance of a loss worse than −6%. About 32% of outcomes fall outside the one-standard-deviation band, but the curve is symmetric, so only half of that — about 16% — lies below −6%.',
    },
    {
      title: 'Dollar price change from modified duration',
      setup:
        'A client holds a bond position worth $50,000 with a modified duration of 7.2. Interest rates rise by 50 basis points. Estimate the price change.',
      steps: [
        'Modified duration estimates the percentage price change for a 1% (100 basis point) change in yield, in the opposite direction.',
        'Convert the rate move: 50 basis points = 0.50%',
        'Percentage price change ≈ −Modified duration × change in yield',
        'Substitute: −7.2 × 0.50% = −3.6%',
        'Dollar change: $50,000 × −0.036 = −$1,800',
        'New approximate value: $50,000 − $1,800 = $48,200',
      ],
      answer: 'The position should fall about 3.6%, roughly $1,800, to about $48,200.',
      watchOut:
        'Dropping the minus sign and reporting a gain when rates rise — price and yield always move inversely. The other frequent slip is multiplying duration by 50 rather than 0.50; duration is stated per percentage point of yield, not per basis point.',
    },
    {
      title: 'Converting variance to standard deviation before comparing',
      setup:
        'Fund X reports a return variance of 0.0256. Fund Y reports a standard deviation of 9%. Which fund carries more total risk?',
      steps: [
        'Variance and standard deviation are not on the same scale, so convert before comparing. Standard deviation = square root of variance.',
        'Fund X: square root of 0.0256 = 0.16, or 16%',
        'Now compare like with like: 16% against 9%',
        'To go the other direction, square the standard deviation. Fund Y variance = 0.09² = 0.0081',
        'Confirm the ranking holds in either unit: 0.0256 against 0.0081, and 16% against 9%',
      ],
      answer:
        'Fund X has a standard deviation of 16% against Fund Y at 9%, so Fund X carries roughly 1.8 times the total risk.',
      watchOut:
        'Comparing the variance of 0.0256 directly against a standard deviation of 9% and concluding Fund X is safer because 0.0256 is the smaller number. Variance is in squared units and is never directly comparable to a standard deviation. Standard deviation, not variance, is also the figure that goes in the Sharpe ratio denominator.',
    },
    {
      title: 'The real return a fixed-income retiree actually earns',
      setup:
        'A retiree holds $600,000 in bonds and CDs yielding 4.5%. Inflation is running 3.2% and the retiree is in a 22% marginal bracket. What is the real, after-tax return?',
      steps: [
        'Take taxes first, because tax is assessed on the full nominal yield: after-tax return = nominal × (1 − tax rate)',
        'Substitute: 4.5% × (1 − 0.22) = 4.5% × 0.78 = 3.51%',
        'Now subtract inflation: 3.51% − 3.2% = 0.31%',
        'Exact Fisher check: (1.0351 / 1.032) − 1 = 0.0030, or 0.30%',
        'In dollars, nominal income: $600,000 × 0.045 = $27,000',
        'After tax: $27,000 × 0.78 = $21,060',
        'Real purchasing power gained: $600,000 × 0.0031 = about $1,860',
      ],
      answer:
        'About 0.31% real after tax — roughly $1,860 of genuine purchasing power on a portfolio that threw off $27,000 of nominal income.',
      watchOut:
        'Subtracting inflation before applying tax. Tax falls on the whole 4.5%, not on the inflation-adjusted remainder, so taxes come off first. Reversing the order gives (4.5% − 3.2%) × 0.78 = 1.01%, more than triple the true figure — and this arithmetic is exactly why inflation risk, not market risk, is the dominant threat to an all-fixed-income retiree.',
    },
  ],
};
