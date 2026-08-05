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
};
