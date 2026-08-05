import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'bond-pricing-yields',
  title: 'Bond Pricing, Yields, and Duration',
  weight: '~4%',
  order: 10,
  summary:
    "Bond prices and yields move in opposite directions, and everything else in this topic follows from that one fact. Master the yield ladder for premium and discount bonds, accrued interest conventions, and duration as the measure of interest rate sensitivity.",
  body: `## The Inverse Relationship

Bond prices and market interest rates move in **opposite directions**. The coupon is fixed at issuance; when new bonds are issued at higher rates, the only way an existing lower-coupon bond can compete is for its **price to fall** until its yield matches the market. When rates fall, existing bonds become more valuable and their prices **rise**.

This produces three pricing states:

| State | Price versus par | Relationship of coupon to market yield |
| --- | --- | --- |
| **Premium** | Above 100 | Coupon **higher** than current market rates |
| **Par** | 100 | Coupon **equals** market rates |
| **Discount** | Below 100 | Coupon **lower** than current market rates |

Bonds are quoted as a **percentage of par**. A corporate bond quoted at **95** costs $950; quoted at **101.5**, it costs $1,015. Government notes and bonds are quoted in **32nds** — a quote of **99-16** means 99 and 16/32, or 99.5% of par. Municipal bonds are frequently quoted on a **yield (basis) basis** rather than a price.

A **basis point** is **one one-hundredth of one percent (0.01%)**. **100 basis points = 1%**. A yield moving from 4.25% to 4.60% has risen **35 basis points**.

## The Four Yields and the Yield Ladder

- **Nominal yield (coupon rate)** — the stated annual rate on the face of the bond. **Never changes.**
- **Current yield** — annual coupon income divided by the bond's **current market price**. Ignores gain or loss at maturity.
- **Yield to maturity (YTM, basis)** — the total annualized return if held to maturity, including all coupons **and** the gain or loss between purchase price and par.
- **Yield to call (YTC)** — the same calculation run to the **call date and call price** instead of maturity.

The ordering of these four is a guaranteed exam item:

**Discount bond (bought below par):** Nominal < Current Yield < YTM < YTC

**Premium bond (bought above par):** YTC < YTM < Current Yield < Nominal

The memory aid is that the ladder always runs **in the direction of par**. A discount bond gains value pulling toward par, so the longer-dated measures are **higher**; a premium bond loses value pulling down toward par, so the longer-dated measures are **lower**. Because a call shortens the timeline, the call yield sits at the far end of the ladder in each case.

**Yield to worst** is simply the lowest of the applicable yields — the figure a suitable recommendation should be based on for a callable bond.

## Accrued Interest and Day Counts

Bonds pay coupons **semiannually**, but they trade every day. A buyer who purchases between coupon dates owes the seller the interest earned so far. That amount is **accrued interest**, added to the trade price to produce the total the buyer pays.

- Accrual runs from the **last coupon payment date up to, but not including, the settlement date**.
- **Corporate and municipal bonds use a 30/360 day count** — every month counts as 30 days and every year as 360 days.
- **U.S. government notes and bonds use actual/actual** — actual days elapsed over the actual days in the coupon period.
- **Zero-coupon bonds and income (adjustment) bonds trade flat** — with no accrued interest, because there is no current coupon being earned.

Clean price plus accrued interest equals the **dirty price**, which is what actually settles.

## Duration

**Duration** is the single most important measure of a bond's interest rate sensitivity.

**Macaulay duration** is the **weighted average time, in years, until an investor receives the bond's cash flows**, with each cash flow weighted by its present value. For a **zero-coupon bond, Macaulay duration equals maturity exactly**, because there is only one cash flow. Every coupon-paying bond has a duration **shorter** than its maturity.

**Modified duration** converts that time measure into a **percentage price sensitivity**: the approximate percentage change in a bond's price for a **1% (100 basis point)** change in yield.

**Modified Duration = Macaulay Duration / (1 + y/k)**, where y is the yield and k is the number of coupon periods per year.

Estimating a price move is then straightforward:

**Percentage Price Change ≈ −Modified Duration × Change in Yield**

A bond with a modified duration of **7.5** facing a **50 basis point (0.50%)** rise in rates loses approximately **7.5 × 0.50 = 3.75%** of its price. The negative sign encodes the inverse relationship.

### What Drives Duration

Three relationships must be automatic:

- **Longer maturity → higher duration.** More time means more distant cash flows.
- **Lower coupon → higher duration.** Less cash arrives early, pushing the weighted average out. **Zeros have the highest duration of any bond of a given maturity.**
- **Lower yield → higher duration.** Distant cash flows are discounted less heavily, so they carry more weight.

Combine the first two and you get the exam's favorite ranking: for maximum price appreciation when rates fall, buy the **long-maturity, low-coupon (ideally zero-coupon) bond**. For minimum volatility, buy the **short-maturity, high-coupon bond**.

### Convexity

Duration is a **straight-line estimate** of a curved relationship. **Convexity** measures that curvature. For an ordinary option-free bond, convexity is **positive**: when rates fall, prices rise **more** than duration alone predicts, and when rates rise, prices fall **less** than predicted. Positive convexity is a benefit to the holder, and duration alone therefore **understates gains and overstates losses** — an error that grows with the size of the yield move.

**Callable bonds and mortgage-backed securities exhibit negative convexity** at low yields. The embedded call or the borrower's prepayment option caps price appreciation, so the price curve bends the wrong way. This is why a callable bond does not rally like a comparable non-callable bond.

## The Two Risks That Offset

**Interest rate (price) risk** is the risk that rising rates cut the market value of a bond. It **increases with duration** and dominates for **long-maturity, low-coupon** bonds.

**Reinvestment risk** is the risk that coupons and returned principal must be reinvested at **lower** rates. It dominates for **high-coupon, callable, and mortgage** securities. **Zero-coupon bonds have no reinvestment risk** — there is nothing to reinvest — which is why they are used to fund a known future liability such as a college tuition bill.

The two risks run in **opposite directions**, and that fact makes immunization possible.

### Immunization

**Immunization** means constructing a portfolio whose **duration equals the investor's time horizon**. At that point a rate change hurts one side of the ledger by roughly what it helps the other: rising rates cut price but raise reinvestment income, and falling rates do the reverse. The portfolio must be **rebalanced periodically**, because duration drifts as time passes and yields change.

A related technique is **cash flow matching (dedication)**, which buys bonds whose maturities line up directly with the dates the liabilities come due.

## Portfolio Structures

| Strategy | Construction | Trade-off |
| --- | --- | --- |
| **Bullet** | Maturities concentrated at a single target date | Precise for one liability; heavy reinvestment risk at that date |
| **Ladder** | Equal amounts across staggered maturities, reinvesting each maturing rung at the long end | Smooths reinvestment risk, simple, requires little forecasting |
| **Barbell** | Concentrated in **short and long** maturities with little in the middle | Combines liquidity with yield; needs active rebalancing and is more rate-sensitive than it looks |

A **ladder** is the default answer for a retail client who wants steady income and does not want to forecast rates. A **barbell** implies a view about the shape of the yield curve. A **bullet** is for a single dated obligation.

## Yield Curve Shapes

A **normal (positive) yield curve** slopes upward — longer maturities yield more, compensating for time and uncertainty. A **flat** curve offers little extra for extending maturity. An **inverted (negative)** curve, where short rates exceed long rates, is unusual and historically associated with expectations of slowing growth and falling rates. A **humped** curve peaks in the intermediate range.`,
  pitfalls: [
    "The yield ladder reverses between premium and discount bonds. Discount runs nominal < current yield < YTM < YTC; premium runs YTC < YTM < current yield < nominal.",
    "Current yield uses the current market price, not par. Dividing the coupon by $1,000 gives back the nominal yield and no new information.",
    "Corporate and municipal bonds accrue on a 30/360 basis; government notes and bonds use actual/actual. Zeros and income bonds trade flat with no accrued interest at all.",
    "Duration is a linear approximation. Because option-free bonds have positive convexity, duration overstates the loss from a rate rise and understates the gain from a rate fall.",
    "Callable bonds and mortgage-backed securities have negative convexity, so they do not appreciate the way a comparable non-callable bond does when rates drop.",
    "Zero-coupon bonds carry the highest interest rate risk of any bond of a given maturity but zero reinvestment risk. Candidates often reverse or conflate these.",
    "An immunized portfolio is not permanently safe. Duration drifts as time passes and yields move, so the portfolio must be rebalanced to keep duration matched to the horizon.",
    "One basis point is 0.01%, so 100 basis points equals 1%. Slipping a decimal here corrupts every duration calculation on the exam.",
  ],
  keyTerms: [
    {
      term: 'Basis point',
      definition: 'One one-hundredth of one percent (0.01%); 100 basis points equal 1% of yield.',
    },
    {
      term: 'Current yield',
      definition:
        'Annual coupon income divided by the current market price of the bond; ignores any gain or loss realized at maturity.',
    },
    {
      term: 'Yield to maturity',
      definition:
        'The annualized total return on a bond held to maturity, incorporating all coupon payments plus the gain or loss between purchase price and par.',
    },
    {
      term: 'Yield to worst',
      definition:
        'The lowest of the yields available on a bond given its call schedule; the conservative figure on which a suitable recommendation should rest.',
    },
    {
      term: 'Accrued interest',
      definition:
        'Interest earned by the seller from the last coupon date up to but not including settlement, paid by the buyer in addition to the quoted price.',
    },
    {
      term: 'Macaulay duration',
      definition:
        "The present-value-weighted average number of years until a bond's cash flows are received; equal to maturity for a zero-coupon bond.",
    },
    {
      term: 'Modified duration',
      definition:
        'The approximate percentage change in a bond price for a 1% change in yield, calculated as Macaulay duration divided by one plus the periodic yield.',
    },
    {
      term: 'Convexity',
      definition:
        'The curvature of the price-yield relationship; positive for option-free bonds, negative for callable and mortgage-backed securities at low yields.',
    },
    {
      term: 'Immunization',
      definition:
        "Structuring a bond portfolio so its duration matches the investor's time horizon, offsetting price risk against reinvestment risk.",
    },
  ],
  confusions: [
    {
      dont: 'Interest rate risk — rising rates cut market value, worst for long, low-coupon bonds',
      with: 'Reinvestment risk — falling rates cut the return on reinvested coupons, worst for high-coupon and callable bonds',
    },
    {
      dont: 'Macaulay duration — measured in years, a weighted average time to cash flow',
      with: 'Modified duration — measured in percent, the price change for a 1% yield move',
    },
    {
      dont: 'Nominal yield — fixed at issue, based on par',
      with: 'Current yield — floats with the market price of the bond',
    },
    {
      dont: '30/360 day count — corporate and municipal bonds',
      with: 'Actual/actual day count — U.S. government notes and bonds',
    },
    {
      dont: 'Barbell — short and long maturities, a view on the yield curve',
      with: 'Ladder — evenly staggered maturities, no forecast required',
    },
  ],
  formulas: [
    {
      name: 'Current yield',
      formula: 'Current Yield = Annual Coupon Income / Current Market Price',
      note: 'A 5% bond ($50 coupon) priced at 90 ($900) yields 50 / 900 = 5.56%.',
    },
    {
      name: 'Modified duration',
      formula: 'Modified Duration = Macaulay Duration / (1 + y/k)',
      note: 'y is the yield, k is the number of coupon periods per year (2 for a typical U.S. bond).',
    },
    {
      name: 'Approximate price change from modified duration',
      formula: 'Percentage Price Change ≈ −Modified Duration × Change in Yield',
      note: 'Modified duration 7.5 with a 0.50% rate rise implies about a 3.75% price decline.',
    },
    {
      name: 'Taxable-equivalent yield',
      formula: 'TEY = Tax-Free Yield / (1 − Marginal Tax Rate)',
      note: 'Use this before comparing a municipal yield to a corporate or Treasury yield.',
    },
  ],
  workedExamples: [
    {
      title: 'Current yield on a discount bond',
      setup:
        "A corporate bond with a 6% coupon and $1,000 par value is quoted at 92. What is its current yield?",
      steps: [
        "Convert the quote to dollars. A bond quote is a percentage of par, so 92 means 92% × $1,000 = $920.",
        "Find the annual coupon income. The coupon rate always applies to par, never to the market price: 6% × $1,000 = $60 per year.",
        "Write the formula: Current Yield = Annual Coupon Income / Current Market Price = $60 / $920.",
        "Divide: 60 / 920 = 0.06522.",
      ],
      answer:
        "Current yield is 6.52%. Because the bond was bought at a discount, current yield (6.52%) sits above the 6.00% nominal yield — the first rung of the discount ladder.",
      watchOut:
        "Dividing the coupon by par ($60 / $1,000 = 6%) simply hands back the nominal yield and tells you nothing new. Current yield always puts the current market price in the denominator.",
    },
    {
      title: 'The full yield ladder, discount versus premium',
      setup:
        "Bond D: 5% coupon, 10 years to maturity, quoted at 90, callable in 5 years at 102. Bond P: 8% coupon, 10 years to maturity, quoted at 110, callable in 4 years at par. Rank all four yields for each bond.",
      steps: [
        "Bond D in dollars: price 90 = $900; annual coupon 5% × $1,000 = $50; call price 102 = $1,020.",
        "Bond D nominal yield is the coupon rate itself and never changes: 5.00%.",
        "Bond D current yield = $50 / $900 = 5.56%.",
        "Bond D approximate YTM: annual accretion of the discount = ($1,000 − $900) / 10 years = $10. Average price = ($1,000 + $900) / 2 = $950. YTM = ($50 + $10) / $950 = $60 / $950 = 6.32%.",
        "Bond D approximate YTC: accretion to the call = ($1,020 − $900) / 5 years = $24. Average price = ($1,020 + $900) / 2 = $960. YTC = ($50 + $24) / $960 = $74 / $960 = 7.71%.",
        "Bond D ordering: 5.00% < 5.56% < 6.32% < 7.71%, i.e. nominal < current yield < YTM < YTC.",
        "Bond P in dollars: price 110 = $1,100; annual coupon 8% × $1,000 = $80; call price 100 = $1,000.",
        "Bond P nominal yield: 8.00%. Current yield = $80 / $1,100 = 7.27%.",
        "Bond P approximate YTM: annual amortization of the premium = ($1,000 − $1,100) / 10 years = −$10. Average price = ($1,000 + $1,100) / 2 = $1,050. YTM = ($80 − $10) / $1,050 = $70 / $1,050 = 6.67%.",
        "Bond P approximate YTC: amortization to the call = ($1,000 − $1,100) / 4 years = −$25. Average price = $1,050. YTC = ($80 − $25) / $1,050 = $55 / $1,050 = 5.24%.",
        "Bond P ordering: 5.24% < 6.67% < 7.27% < 8.00%, i.e. YTC < YTM < current yield < nominal.",
      ],
      answer:
        "Discount bond D: 5.00% nominal, 5.56% current, 6.32% YTM, 7.71% YTC — the ladder climbs. Premium bond P: 8.00% nominal, 7.27% current, 6.67% YTM, 5.24% YTC — the ladder falls. The ladder always runs in the direction of par.",
      watchOut:
        "Memorizing one ordering and using it for both. The ordering flips at par: a discount bond accretes up toward par so the longer-dated measures are higher, while a premium bond amortizes down toward par so they are lower. The call, which shortens the timeline, always sits at the far end of whichever ladder you are on.",
    },
    {
      title: 'Taxable-equivalent yield on a municipal bond',
      setup:
        "A client in the 32% federal marginal bracket is choosing between a municipal bond yielding 3.50% and a corporate bond of similar quality yielding 4.90%. Which one is better after tax?",
      steps: [
        "Identify which yield is the tax-free one. Municipal interest is federally tax-exempt, so the 3.50% is the figure to gross up.",
        "Write the formula: TEY = Tax-Free Yield / (1 − Marginal Tax Rate). You DIVIDE, because the question is what pre-tax yield a taxable bond would have to pay to leave 3.50% in the client's hand after tax.",
        "Compute the denominator: 1 − 0.32 = 0.68.",
        "Divide: 0.0350 / 0.68 = 0.05147.",
        "Compare on equal footing: the municipal's taxable-equivalent yield of 5.15% beats the corporate's 4.90%.",
        "Cross-check by working the other direction. The corporate's after-tax yield = 4.90% × (1 − 0.32) = 4.90% × 0.68 = 3.33%, which is below the municipal's 3.50%. Both routes give the same verdict.",
      ],
      answer:
        "The municipal's taxable-equivalent yield is 5.15%, so the municipal is the better holding for this client — 5.15% versus 4.90% stated pre-tax, or equivalently 3.50% versus 3.33% measured after tax.",
      watchOut:
        "Multiplying by one minus the tax rate instead of dividing. 3.50% × 0.68 = 2.38% is the classic wrong answer, and it is self-evidently absurd — grossing up a tax-free yield can never make it smaller. Multiply by (1 − rate) only to bring a TAXABLE yield down to after-tax; divide by (1 − rate) to bring a TAX-FREE yield up to taxable-equivalent.",
    },
    {
      title: 'Approximate yield to maturity',
      setup:
        "An investor buys a 4.5% coupon corporate bond with 12 years remaining to maturity at a price of 95. Estimate the yield to maturity.",
      steps: [
        "Price in dollars: 95% × $1,000 = $950. Annual coupon: 4.5% × $1,000 = $45.",
        "Find the total discount to be recovered at maturity: $1,000 − $950 = $50.",
        "Spread it over the remaining life — this is the step candidates skip: $50 / 12 years = $4.17 of accretion per year.",
        "Add it to the coupon for total annual income: $45 + $4.17 = $49.17.",
        "Find the average amount invested over the bond's life: ($1,000 + $950) / 2 = $975.",
        "Divide: $49.17 / $975 = 0.05043.",
      ],
      answer:
        "Approximate YTM is about 5.04%. Sanity-check it against the ladder: it sits above both the 4.50% nominal yield and the 4.74% current yield ($45 / $950), which is exactly where a discount bond's YTM belongs.",
      watchOut:
        "Forgetting to annualize the discount. Adding the entire $50 gain to a single year's coupon gives $95 / $975 = 9.74%, roughly double the true yield. The gain is earned once, but it is spread across all 12 years.",
    },
    {
      title: 'Yield to call on a premium callable, and yield to worst',
      setup:
        "A 6% coupon corporate bond with 20 years to maturity trades at 108 and is callable in 5 years at 103. Compute the approximate YTM and YTC, and state which figure a recommendation should rest on.",
      steps: [
        "Dollars: price 108 = $1,080; annual coupon 6% × $1,000 = $60; call price 103 = $1,030.",
        "Approximate YTM: annual amortization of the premium to par = ($1,000 − $1,080) / 20 years = −$4. Average price = ($1,000 + $1,080) / 2 = $1,040.",
        "YTM = ($60 − $4) / $1,040 = $56 / $1,040 = 5.38%.",
        "Approximate YTC: the redemption value is now the CALL price and the term is the years to the CALL date. Amortization = ($1,030 − $1,080) / 5 years = −$10 per year.",
        "Average price for the call calculation = ($1,030 + $1,080) / 2 = $1,055.",
        "YTC = ($60 − $10) / $1,055 = $50 / $1,055 = 4.74%.",
        "Compare: 4.74% is lower than 5.38%, so being called is the worse outcome for the holder.",
      ],
      answer:
        "YTM is about 5.38% and YTC about 4.74%, so the yield to worst is 4.74%. That is the number a suitable recommendation and any yield disclosure should use. A premium callable is quoted to the call because the issuer has every incentive to refinance an above-market coupon.",
      watchOut:
        "Plugging par and the maturity date into the call calculation. Using $1,000 instead of the $1,030 call price, or 20 years instead of 5, drags YTC up toward YTM and conceals the fact that the call is the worst case. Note the mirror image: on a DISCOUNT bond the call produces the highest yield, so yield to worst there is the YTM.",
    },
    {
      title: 'Estimating a price change from modified duration',
      setup:
        "A bond priced at $1,020 has a Macaulay duration of 8.4 years, a 6% yield to maturity, and semiannual coupons. Market yields rise 75 basis points. Estimate the new price.",
      steps: [
        "Convert Macaulay duration to modified duration: Modified Duration = Macaulay / (1 + y/k) = 8.4 / (1 + 0.06/2) = 8.4 / 1.03.",
        "Divide: 8.4 / 1.03 = 8.16.",
        "Convert the yield move into percentage points. One basis point is 0.01%, so 75 basis points = 0.75%.",
        "Apply the estimate: Percentage Price Change ≈ −Modified Duration × Change in Yield = −8.16 × 0.75 = −6.12%.",
        "Translate to dollars: 6.12% × $1,020 = $62.42 of price decline.",
        "Subtract: $1,020 − $62.42 = $957.58.",
      ],
      answer:
        "Modified duration is about 8.16, the estimated price change is about −6.12%, and the price falls roughly $62 to about $958.",
      watchOut:
        "Entering the yield change as 75 rather than 0.75. Slipping that decimal produces a 612% price change, which should immediately signal the error. Remember too that duration is a straight-line estimate of a curved relationship: because an option-free bond has positive convexity, the actual decline will be slightly LESS than 6.12%, and duration would likewise understate the gain if rates fell 75 basis points instead.",
    },
    {
      title: 'Accrued interest on a corporate bond (30/360)',
      setup:
        "A corporate bond with a 6% coupon and $1,000 par pays interest each March 1 and September 1. A customer buys one bond at a price of 98 for settlement on October 10. How much accrued interest is owed, and what does the buyer pay in total?",
      steps: [
        "Identify the last coupon date on or before settlement: September 1.",
        "Count the days on a 30/360 basis, running from the last coupon date up to but NOT including settlement. September 1 to October 1 is one full month, counted as 30 days; October 1 to October 10 adds 9 days.",
        "Total: 30 + 9 = 39 days of accrual.",
        "Find the semiannual coupon: 6% × $1,000 = $60 a year, paid twice, so $30 per period.",
        "Express the elapsed portion of the period. On a 30/360 convention a semiannual period is 180 days, so the fraction earned is 39 / 180 = 0.21667.",
        "Multiply: $30 × 39 / 180 = $6.50 of accrued interest.",
        "Add it to the trade price. Price 98 = $980, the clean price. $980 + $6.50 = $986.50, the dirty price that actually settles.",
      ],
      answer:
        "Accrued interest is $6.50 per bond and the buyer pays $986.50 in total, of which $6.50 goes to the seller as interest earned before settlement.",
      watchOut:
        "Counting the settlement date itself, which gives 40 days and $6.67, or using actual calendar days (39 actual days here happens to match, but it will not in a 31-day month). Corporate and municipal bonds use 30/360; U.S. government notes and bonds use actual/actual; zero-coupon and income bonds trade flat with no accrued interest at all.",
    },
    {
      title: 'Converting a Treasury quote in 32nds to dollars',
      setup:
        "A Treasury note is quoted at 97-20. A client buys $25,000 face value. What is the dollar price?",
      steps: [
        "Read the quote correctly. Government notes and bonds are quoted in thirty-seconds of a point, so 97-20 means 97 and 20/32 percent of par.",
        "Convert the fraction: 20 / 32 = 0.625.",
        "Add it to the whole number: 97 + 0.625 = 97.625% of par.",
        "Apply the percentage to face value: 97.625% × $25,000 = 0.97625 × $25,000.",
        "Multiply: 0.97625 × 25,000 = 24,406.25.",
      ],
      answer:
        "The dollar price is $24,406.25, which is $976.25 per $1,000 of face value.",
      watchOut:
        "Reading 97-20 as 97.20% of par. The digits after the hyphen are thirty-seconds, not decimals — 97.20% would give $24,300, an error of over $100 on this small trade. A trailing plus sign, as in 97-20+, adds a further 1/64 (0.015625).",
    },
  ],
};
