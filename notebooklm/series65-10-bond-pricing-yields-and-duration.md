# Bond Pricing, Yields, and Duration

This is one topic from the Series 65 exam, the Uniform Investment Adviser Law
Examination. It is worth about 4 percent of the exam.

## Why this topic matters

Bond prices and yields move in opposite directions, and everything else in this topic follows from that one fact. Master the yield ladder for premium and discount bonds, accrued interest conventions, and duration as the measure of interest rate sensitivity.

## Why Price and Yield Must Move in Opposite Directions

Bond prices and market interest rates move in **opposite directions**. That is usually presented as a fact to memorize. It follows instead from one structural feature: **the coupon is fixed at issuance and can never be renegotiated.**

A bond is a contract to pay a stated number of dollars on stated dates. When market rates rise, a newly issued bond pays more dollars for the same $1,000 committed. The old bond cannot raise its coupon to compete — the indenture forbids it. The only variable left free to move is **the price at which the old bond changes hands**, and it must fall far enough that a buyer, paying less to receive the same fixed dollars, earns the market rate. When rates fall the mechanism reverses.

### Working the price down: a 4% bond in a 5% market

Strip out the maturity date first and the arithmetic is bare. A **perpetual** bond paying $40 a year forever yields coupon divided by price: at par, $40 / $1,000 = 4.00%. If the market now demands 5.00%, solve for the price that produces it — $40 / 0.05 = **$800**. Nothing about the bond changed; 800 is simply what 5.00% costs when the numerator is frozen at $40.

Now put the maturity date back. An investor holds a $1,000 par bond with a **4% coupon paying semiannually and five years to maturity**, bought at par, and comparable yields have risen to **5%**. Discounting the ten remaining $20 coupons and the $1,000 principal at 2.5% per half-year gives about **$956.24** — a fall of only about 4.4%, against the perpetual's 20%. The difference is the **pull to par**: this buyer also collects $43.76 at redemption, and the coupon shortfall runs for five years rather than forever. That is the seed of duration — **the price adjustment a rate move requires grows with the time the fixed coupon is locked in.**

Check the yields. Current yield is $40 / $956.24 = **4.18%**, above the 4.00% nominal exactly as a discount bond requires, and YTM is 5.00% by construction. The ladder is already visible: 4.00% < 4.18% < 5.00%.

Carry this forward: **the loss is not a market opinion about the issuer, it is arithmetic.** A perfectly creditworthy bond falls when rates rise, and a holder who does not sell still collects every promised dollar.

This produces three pricing states:

- State: Premium. Price versus par: Above 100. Relationship of coupon to market yield: Coupon higher than current market rates.
- State: Par. Price versus par: 100. Relationship of coupon to market yield: Coupon equals market rates.
- State: Discount. Price versus par: Below 100. Relationship of coupon to market yield: Coupon lower than current market rates.


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

- Strategy: Bullet. Construction: Maturities concentrated at a single target date. Trade-off: Precise for one liability; heavy reinvestment risk at that date.
- Strategy: Ladder. Construction: Equal amounts across staggered maturities, reinvesting each maturing rung at the long end. Trade-off: Smooths reinvestment risk, simple, requires little forecasting.
- Strategy: Barbell. Construction: Concentrated in short and long maturities with little in the middle. Trade-off: Combines liquidity with yield; needs active rebalancing and is more rate-sensitive than it looks.


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

Carry this into the exam: **duration measures sensitivity to a change in the bond's own yield, not to a change in the Treasury rate.** For a corporate or municipal holding, that change is the Treasury move plus the spread move. Applying duration to the Treasury move alone gets the sign wrong.

## The questions this topic is tested with

**Market interest rates rise sharply. What happens to the price of an outstanding fixed-coupon bond, and why?**

Bond prices and market yields move inversely. The coupon was locked in at issuance, so the only way an older, lower-coupon bond can compete with newly issued bonds is for its price to fall until its yield matches the market.

**A corporate bond with a 5% coupon and $1,000 par value is quoted at 92. What is its current yield?**

Current yield = annual coupon ÷ market price. The annual coupon is 5% × $1,000 = $50, and a quote of 92 means 92% of par, or $920. $50 ÷ $920 = 5.43%. Multiplying the coupon by 0.92 instead of dividing gives 4.60%, a common setup error.

**A callable corporate bond is trading at a discount and is callable at par. Which ordering of its yields, from lowest to highest, is correct?**

For a discount bond the ladder runs upward: nominal (coupon) < current yield < yield to maturity < yield to call. The investor bought below par, so the gain to par adds to return, and a call at par delivers that gain sooner, making YTC the highest figure. For a premium bond the entire ladder reverses.

**A client buys a bond at a premium; the bond is callable at par in three years. Which yield figure is the lowest and therefore the most important to disclose?**

For a premium bond the ladder is reversed: nominal > current yield > YTM > YTC. The premium paid above par is lost by redemption, and a call accelerates that loss over fewer years, so yield to call is the lowest — the figure a client needs to see before buying a callable premium bond.

**A corporate bond with a 6% coupon and $1,000 par pays interest on January 1 and July 1. A regular-way purchase settles on Monday, March 16. Using the 30/360 convention, how much accrued interest does the buyer pay the seller?**

Corporate and municipal bonds accrue on a 30/360 basis from the last coupon date up to but not including settlement: January 30 days + February 30 days + 15 days in March = 75 days. Annual interest is $60, so $60 × 75 ÷ 360 = $12.50. Treasuries would instead use actual/actual.

**A convertible bond with $1,000 par is convertible at $40 per share. The common stock trades at $46. What is the parity price of the bond?**

Conversion ratio = $1,000 par ÷ $40 conversion price = 25 shares. Parity price of the bond = 25 shares × $46 = $1,150. If the bond traded below $1,150 an arbitrage opportunity would exist, so convertibles generally trade at or above parity.
