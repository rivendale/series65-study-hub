import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'bond-pricing-yields',
  title: 'Bond Pricing, Yields, and Duration',
  weight: '~4%',
  order: 10,
  summary:
    "Bond prices and yields move in opposite directions, and everything else in this topic follows from that one fact. Master the yield ladder for premium and discount bonds, accrued interest conventions, and duration as the measure of interest rate sensitivity.",
  body: `## Why Price and Yield Must Move in Opposite Directions

Bond prices and market interest rates move in **opposite directions**. That is usually presented as a fact to memorize. It follows instead from one structural feature: **the coupon is fixed at issuance and can never be renegotiated.**

A bond is a contract to pay a stated number of dollars on stated dates. When market rates rise, a newly issued bond pays more dollars for the same $1,000 committed. The old bond cannot raise its coupon to compete — the indenture forbids it. The only variable left free to move is **the price at which the old bond changes hands**, and it must fall far enough that a buyer, paying less to receive the same fixed dollars, earns the market rate. When rates fall the mechanism reverses.

### Working the price down: a 4% bond in a 5% market

Strip out the maturity date first and the arithmetic is bare. A **perpetual** bond paying $40 a year forever yields coupon divided by price: at par, $40 / $1,000 = 4.00%. If the market now demands 5.00%, solve for the price that produces it — $40 / 0.05 = **$800**. Nothing about the bond changed; 800 is simply what 5.00% costs when the numerator is frozen at $40.

Now put the maturity date back. An investor holds a $1,000 par bond with a **4% coupon paying semiannually and five years to maturity**, bought at par, and comparable yields have risen to **5%**. Discounting the ten remaining $20 coupons and the $1,000 principal at 2.5% per half-year gives about **$956.24** — a fall of only about 4.4%, against the perpetual's 20%. The difference is the **pull to par**: this buyer also collects $43.76 at redemption, and the coupon shortfall runs for five years rather than forever. That is the seed of duration — **the price adjustment a rate move requires grows with the time the fixed coupon is locked in.**

Check the yields. Current yield is $40 / $956.24 = **4.18%**, above the 4.00% nominal exactly as a discount bond requires, and YTM is 5.00% by construction. The ladder is already visible: 4.00% < 4.18% < 5.00%.

Carry this forward: **the loss is not a market opinion about the issuer, it is arithmetic.** A perfectly creditworthy bond falls when rates rise, and a holder who does not sell still collects every promised dollar.

This produces three pricing states:

| State | Price versus par | Relationship of coupon to market yield |
| --- | --- | --- |
| **Premium** | Above 100 | Coupon **higher** than current market rates |
| **Par** | 100 | Coupon **equals** market rates |
| **Discount** | Below 100 | Coupon **lower** than current market rates |

Read the table both ways. A question that says a bond trades at a **premium** has told you, without saying so, that its coupon exceeds current market rates — from which follow the issuer's incentive to call it and a downward-running yield ladder. A question that says **current yield exceeds the coupon rate** has told you it is a discount bond even with no price given.

### Quoting conventions

Bonds are quoted as a **percentage of par**. A corporate bond quoted at **95** costs $950; at **101.5**, $1,015.

**Government notes and bonds are quoted in 32nds of a point**, a convention inherited from a market that predates decimal pricing. A quote of **99-16** means 99 and 16/32, or 99.5% of par — $995 per $1,000 of face. The trap is reading the digits after the hyphen as decimals: 99-16 is **not** 99.16%. Divide the second number by 32 and add. A trailing plus sign adds a further **1/64** (0.015625). Treasury bills are different again, quoted on a **discount yield** basis rather than as a price.

**Municipal bonds are frequently quoted on a yield (basis) basis** — "5s of 2040 at a 4.20 basis" states the yield and the dealer computes the dollar price from it. Large well-known municipal issues may instead trade as **dollar bonds**, priced like corporates.

A **basis point** is **one one-hundredth of one percent (0.01%)**; **100 basis points = 1%**. A yield moving from 4.25% to 4.60% has risen **35 basis points**. Slipping this decimal is the most common way a correct duration method produces an absurd answer.

## The Four Yields and the Yield Ladder

- **Nominal yield (coupon rate)** — the stated annual rate on the face of the bond. **Never changes.**
- **Current yield** — annual coupon income divided by the bond's **current market price**. Ignores gain or loss at maturity.
- **Yield to maturity (YTM, basis)** — the total annualized return if held to maturity, including all coupons **and** the gain or loss between purchase price and par.
- **Yield to call (YTC)** — the same calculation run to the **call date and call price** instead of maturity.

The ordering of these four is a guaranteed exam item:

**Discount bond (bought below par):** Nominal < Current Yield < YTM < YTC

**Premium bond (bought above par):** YTC < YTM < Current Yield < Nominal

The memory aid is that the ladder always runs **in the direction of par**. A discount bond gains value pulling toward par, so the longer-dated measures are **higher**; a premium bond loses value pulling down toward par, so the longer-dated measures are **lower**. Because a call shortens the timeline, the call yield sits at the far end of the ladder in each case.

### Reconstructing the ladder under pressure

Do not memorize two orderings. Rebuild the right one from a single question: **is the bond above or below par, and is the gain or loss spread over more time or less?**

1. **Anchor on nominal.** The coupon rate is fixed and is always one end of the ladder.
2. **Ask which way the price is off par.** Below par, every further measure adds a gain, so each rung is **higher**. Above par, every further measure subtracts a loss, so each rung is **lower**.
3. **Order the rungs by how much time the adjustment is spread over.** Current yield spreads it over nothing — it ignores the gain or loss entirely. YTM spreads it over the full remaining life. YTC spreads it over the shorter period to the call, and the same dollar amount divided by fewer years produces a **larger annual effect**, which is why the call yield always sits at the extreme end.

On a discount bond: below par means climbing, the call climbs fastest, so nominal < current < YTM < YTC. On a premium bond: above par means falling, the call falls fastest, so YTC < YTM < current < nominal. One rule, both directions.

### Which yield is the right quote

Exam items often turn on choosing the right measure rather than computing any of them.

- **Nominal yield** answers "what dollar income does this bond contract to pay?" It is the yield used to compute the coupon check and accrued interest, and nothing else.
- **Current yield** answers "what cash income am I earning on the money tied up right now?" Right for an income client comparing cash flow, wrong for total return, because it ignores the entire gain or loss to par. A deep-discount bond can show a modest current yield alongside a large YTM.
- **Yield to maturity** answers "what is my total annualized return if I hold to the end **and reinvest every coupon at this same rate**?" That embedded reinvestment assumption is real and rarely holds, so a realized return usually falls short of a quoted YTM when rates decline.
- **Yield to call** runs the same calculation to the call date and the call price.

**Yield to worst** is the lowest of the applicable yields — the figure a suitable recommendation should rest on. Note the mirror image: on a **premium** callable the call is the bad outcome, so yield to worst is the YTC; on a **discount** callable an early redemption at or above par accelerates the gain, so YTC is the highest number and yield to worst is the **YTM**. Quoting a premium callable at its YTM overstates what the client will earn, which is why the convention is to quote to the call whenever a bond trades above its call price.

### Where the yield ladder stops applying

The ladder assumes a **fixed coupon and a known redemption value**. It breaks down on **zero-coupon bonds**, where nominal and current yield are meaningless and only YTM says anything; on **floating-rate notes**, whose coupon resets so the price stays near par regardless of the level of rates; on **defaulted bonds**, where a computed YTM prices cash flows that will not arrive; and on **sinking fund or make-whole provisions**, which change the redemption schedule and demand a yield to the relevant date instead.

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

The reason is visible once stated. Modified duration is the **slope of the price-yield curve at today's yield** — a tangent line. The true curve is bowed toward the origin, so the tangent falls below it in **both** directions: to the right (rates up) it predicts too much loss, to the left (rates down) too little gain. Positive convexity works for the holder either way, which is why, between two bonds of equal duration and yield, the more convex one is worth more.

### Reading convexity off two real price points

A 20-year bond with a **5% coupon paying semiannually** trades at par, $1,000, at a 5% yield to maturity. Its Macaulay duration is **12.865 years**, so modified duration is 12.865 / (1 + 0.05/2) = **12.55**.

Duration alone predicts a symmetric result for a 100 basis point move: −12.55% if yields rise to 6%, +12.55% if they fall to 4%. Repricing the bond exactly says otherwise. At 6% it is worth **$884.43**, a loss of **11.56%**. At 4% it is worth **$1,136.78**, a gain of **13.68%**.

So duration **overstated the loss by about 99 basis points of price** and **understated the gain by about 113 basis points**. The holder beats the straight-line estimate in both directions, by roughly a point of price per point of yield on a bond this long. Double the yield move to 200 basis points and the gap roughly quadruples, because convexity scales with the square of the yield change — which is why duration alone is adequate for small moves and misleading for large ones.

**Callable bonds and mortgage-backed securities exhibit negative convexity** at low yields. The embedded call or the borrower's prepayment option caps price appreciation, so the curve bends the wrong way. As a callable bond's price approaches the call price buyers stop paying up, because redemption at that price grows more likely; the resulting flattening is **price compression**. Mortgage-backed securities get there by a different route: when rates fall, homeowners refinance, principal returns early, and it must be reinvested at the new lower rates. That is **prepayment risk** — reinvestment risk in a mortgage costume. Its mirror, **extension risk**, appears when rates rise, prepayments slow, and the investor is stuck with a below-market instrument longer than planned.

## The Two Risks That Offset

**Interest rate (price) risk** is the risk that rising rates cut the market value of a bond. It **increases with duration** and dominates for **long-maturity, low-coupon** bonds.

**Reinvestment risk** is the risk that coupons and returned principal must be reinvested at **lower** rates. It dominates for **high-coupon, callable, and mortgage** securities. **Zero-coupon bonds have no reinvestment risk** — there is nothing to reinvest — which is why they are used to fund a known future liability such as a college tuition bill.

The two risks run in **opposite directions**, and that fact makes immunization possible.

### Immunization

**Immunization** means constructing a portfolio whose **duration equals the investor's time horizon**. At that point a rate change hurts one side of the ledger by roughly what it helps the other: rising rates cut price but raise reinvestment income, and falling rates do the reverse. The portfolio must be **rebalanced periodically**, because duration drifts as time passes and yields change — and it does not drift at the same speed as the clock. A seven-year horizon shortens by exactly one year per year; a portfolio's duration shortens by less than a year per year, because as coupons are stripped away the remaining cash flows sit proportionally further out. Left alone, an immunized portfolio becomes over-duration relative to its horizon within a year or two.

A related technique is **cash flow matching (dedication)**, which buys bonds whose maturities line up directly with the dates the liabilities come due. Cash flow matching removes rate risk entirely rather than offsetting it, but it demands securities that mature on the right dates and usually gives up some yield to get them.

### Funding a tuition bill seven years out

A client must have **$250,000 available in exactly seven years** for a child's education. Take a **4.5% yield on high-grade seven-year Treasury obligations, compounded semiannually**, as a given, and compare three routes.

**Option one — a seven-year Treasury zero.** Discounting $1,000 of face back fourteen semiannual periods at 2.25% gives **$732.34 per $1,000 of face**. Buying **250 bonds** costs 250 × $732.34 = **$183,085** today and returns exactly $250,000 at maturity regardless of what rates do in between, because there are **no coupons to reinvest**. Macaulay duration equals maturity, so the position is immunized by construction and never needs rebalancing. The costs: the client owes tax annually on **imputed (phantom) interest** she does not receive in cash unless the bond sits in a tax-deferred account, and the interim market value will swing hard, since a seven-year zero has the highest duration of any seven-year instrument.

**Option two — a coupon portfolio with duration 7.0.** If rates rise, market value falls but coupons are reinvested at the new higher rate, and the two roughly cancel at the seven-year mark. Roughly is the operative word: the offset holds for a small **parallel** shift, degrades when short and long rates move differently, and must be re-checked at least annually as duration drifts.

**Option three — a ladder of one- through seven-year bonds.** Average duration is roughly four years, well short of the horizon, so rising rates would help this portfolio more than they hurt it. That is not immunization but a bet that rates rise — the wrong tool for a hard-dated liability.

For a single known amount on a single known date the zero is cleanest, which is why the exam pairs zeros with college funding; the duration-matched portfolio is what a manager uses when the liability stream is longer or less precise. The trap is the phrase "no reinvestment risk." It describes the zero accurately, but read as "no risk" it hides the fact that the zero carries the **highest price risk** of the three if the client must sell early.

## Portfolio Structures

| Strategy | Construction | Trade-off |
| --- | --- | --- |
| **Bullet** | Maturities concentrated at a single target date | Precise for one liability; heavy reinvestment risk at that date |
| **Ladder** | Equal amounts across staggered maturities, reinvesting each maturing rung at the long end | Smooths reinvestment risk, simple, requires little forecasting |
| **Barbell** | Concentrated in **short and long** maturities with little in the middle | Combines liquidity with yield; needs active rebalancing and is more rate-sensitive than it looks |

A **ladder** is the default answer for a retail client who wants steady income and does not want to forecast rates. A **barbell** implies a view about the shape of the yield curve. A **bullet** is for a single dated obligation.

## The Yield Curve and Why It Has a Shape

The **yield curve** plots yield against maturity for bonds of the same credit quality — conventionally Treasuries, so that credit risk is held constant and only the maturity effect is visible.

A **normal (positive) yield curve** slopes upward — longer maturities yield more, compensating for time and uncertainty. A **flat** curve offers little extra for extending maturity. An **inverted (negative)** curve, where short rates exceed long rates, is unusual and historically associated with expectations of slowing growth and falling rates. A **humped** curve peaks in the intermediate range.

Three theories explain the shape, and the exam expects the right explanation attached to the right name.

- **Expectations theory** holds that long rates are the average of the short rates the market expects to prevail over the period. The curve slopes upward **because investors expect short rates to rise**, and inverts because they expect them to fall — which is what makes an inverted curve a recession signal. It also generates **implied forward rates**: if a one-year bill yields 4.00% and a two-year note yields 4.50%, rolling one year into another must be expected to produce the same result, so (1.045)² / 1.04 − 1 = **5.00%** is the one-year rate implied for a year from now. A pure expectations theorist says the curve contains no risk premium at all.
- **Liquidity preference theory** adds that investors dislike tying money up and **demand a premium for extending maturity**. The curve therefore slopes upward even when short rates are expected to stay flat, which is why the normal shape is normal. The corollary matters: under this theory an **inverted** curve is a strong signal, because expected declines must be large enough to overcome a built-in upward tilt.
- **Market segmentation theory** holds that the curve is not one market but several. Banks and money funds buy the short end, insurers and pension funds buy the long end, and each bucket clears on its own supply and demand. A **humped** curve follows naturally: heavy issuance in the five- to ten-year sector can lift those yields above both neighbors while saying nothing about expectations. The softer version, **preferred habitat theory**, lets investors leave their preferred maturity for a large enough yield concession.

A real curve reflects all three forces at once. The tested distinction is which mechanism each name points to: **expectations** to forecasts of future short rates, **liquidity preference** to a term premium, **segmentation** to supply and demand within maturity buckets.

## Credit Spreads

The yield on any non-Treasury bond can be split into two parts: the **Treasury yield of the same maturity** and a **credit spread** — the extra yield the market demands for taking the issuer's default risk and the bond's lesser liquidity. Spreads are quoted in basis points over the comparable Treasury.

Spreads are not fixed. They **widen** when perceived default risk rises or risk appetite falls: a downgrade or negative outlook, a slowing economy, deteriorating coverage ratios, sector trouble, or a general **flight to quality** in which investors sell credit and buy Treasuries. They **narrow** when credit conditions improve or investors reach for yield. Lower-rated bonds carry wider spreads and their spreads move more, so **high-yield bonds behave partly like equities** and correlate with the stock market more than investment-grade bonds do.

The consequence is that a corporate bondholder is exposed to **two independent yield movements**, and the spread move can swamp the Treasury move entirely.

### When the spread moves against you

Suppose that in a given week a ten-year Treasury yields **4.00%** and a BBB-rated ten-year corporate yields **5.60%**, a credit spread of **160 basis points**. Both have a modified duration of about **7**.

Over the following month the economic news deteriorates. Investors move into Treasuries, pushing the ten-year Treasury yield down **25 basis points to 3.75%**, while the BBB spread **widens 75 basis points to 235**.

Rebuild the corporate's yield from its components: 3.75% + 2.35% = **6.10%**. Against its starting 5.60%, that is **a 50 basis point rise**, even though the underlying Treasury yield fell.

Price effects: the Treasury holder gains roughly 7 × 0.25 = **+1.75%**; the corporate holder loses roughly 7 × 0.50 = **−3.50%**. Identical maturity, identical duration, same month, a swing of more than five percentage points — and interest rates in the ordinary sense went **down**.

Carry this into the exam: **duration measures sensitivity to a change in the bond's own yield, not to a change in the Treasury rate.** For a corporate or municipal holding, that change is the Treasury move plus the spread move. Applying duration to the Treasury move alone gets the sign wrong.`,
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
