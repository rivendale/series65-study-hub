# Fixed-Income Securities

This is one topic from the Series 65 exam, the Uniform Investment Adviser Law
Examination. It is worth about 4 percent of the exam.

## Why this topic matters

A bond is a loan with a contract attached. This topic covers bond fundamentals and the four major issuer families — Treasury, agency and mortgage-backed, municipal, and corporate — plus credit ratings, covenants, and the taxable-equivalent yield calculation that decides whether a municipal bond is actually a good deal for a given client.

## Bond Fundamentals

A bond is a **debt** security. The investor is a **creditor**, not an owner, with a contractual right to interest and to repayment of principal.

- **Par (face) value** — the amount repaid at maturity, conventionally **$1,000** for corporate and municipal bonds. Bonds are quoted as a **percentage of par**, so a quote of **98** means $980.
- **Coupon (nominal yield)** — the fixed annual interest rate stated on the bond, paid **semiannually** in the U.S. A 6% coupon pays $30 twice a year.
- **Maturity** — the date principal is returned. **Term** maturity retires the whole issue at once; **serial** maturity retires portions on a schedule (common for municipal issues); **balloon** blends the two.
- **Indenture** — the written contract between issuer and bondholders setting the coupon, maturity, call features, collateral, and covenants.
- **Trustee** — the independent party that enforces the indenture on behalf of bondholders. The **Trust Indenture Act of 1939** requires a qualified indenture and trustee for public corporate debt offerings above a stated dollar threshold. **Municipal issuers are exempt**, though revenue bonds almost always use an indenture anyway.

Everything else in this topic is an answer to one question: **what stands behind the promise?** A Treasury is backed by the taxing and money-issuing power of the federal government; a GO bond by a state or city's taxing power; a revenue bond by the cash flows of one project; a mortgage bond by a specific building; a debenture by nothing but the issuer's general credit. Yield rises as the answer gets thinner. Ranking a set of bonds by yield is usually just ranking them by how little stands behind them.

### Accrued Interest and Day Counts

Coupons are paid on fixed dates, but bonds trade every day, so a buyer settling between coupon dates must compensate the seller for the interest earned but not yet paid. That is **accrued interest**, and it flows **from the buyer to the seller**. The buyer then collects the full coupon on the next payment date and comes out even.

Accrual runs from the **last coupon date up to but not including the settlement date**, and settlement under the current **T+1** cycle is the business day after the trade. Two conventions matter:

- **30/360** — every month counts as 30 days and every year as 360. Used for **corporate and municipal** bonds. Clean arithmetic, slightly artificial.
- **Actual/actual** — real calendar days over the real days in the coupon period. Used for **U.S. government** notes and bonds.

The **total price** the buyer pays is the quoted (**clean**) price plus accrued interest, together called the **dirty** price. Some bonds trade **flat**, meaning with no accrued interest added: **zero-coupon** bonds (there is no coupon to accrue), **income (adjustment) bonds** (interest is not owed unless declared), and bonds **in default**.

## U.S. Treasury Securities

Direct obligations of the U.S. government, carrying its **full faith and credit** and treated as free of **default risk**. Interest is **subject to federal income tax but exempt from state and local tax**.

- Instrument: T-bills. Maturity: 1 year or less. Interest: Issued at a discount, no coupon.
- Instrument: T-notes. Maturity: 2 to 10 years. Interest: Semiannual coupon.
- Instrument: T-bonds. Maturity: Over 10 years (20 and 30 year). Interest: Semiannual coupon.
- Instrument: TIPS. Maturity: 5, 10, 30 years. Interest: Fixed rate on an inflation-adjusted principal.
- Instrument: STRIPS. Maturity: Varies. Interest: Zero coupon, sold at a deep discount.


"Risk-free" is a claim about **default only**. A 30-year Treasury is among the most **interest-rate-sensitive** instruments in existence, and one held to maturity still delivers a **negative real return** if inflation outruns its coupon. Treasuries eliminate credit risk, reduce nothing else, and concentrate purchasing-power risk at long maturities.

**TIPS** (Treasury Inflation-Protected Securities) adjust **principal** by changes in the **Consumer Price Index**; the **coupon rate stays fixed** but is applied to the adjusted principal, so the dollar payment rises with inflation. The catch: the annual **principal adjustment is federally taxable in the year it occurs**, even though the investor receives no cash for it — **phantom income**. TIPS therefore belong in **tax-deferred accounts** when possible. Note what TIPS do and do not solve: they neutralize **purchasing-power risk** and leave **interest rate risk** fully intact, because a rise in **real** yields drives a TIPS price down like any other bond.

**STRIPS** (Separate Trading of Registered Interest and Principal Securities) are Treasury cash flows stripped into individual **zero-coupon** obligations. There is no reinvestment risk, because there is nothing to reinvest, but the **accreted discount is taxed annually** as phantom income, and zeros have the **longest duration** of any bond of a given maturity, so they are extremely rate-sensitive. That combination makes zeros the instrument of choice for **defeasing a known future liability** — a tuition bill in twelve years, a lump sum owed on a fixed date — because the payoff amount and date are both certain.

## Agency and Mortgage-Backed Securities

**GNMA (Ginnie Mae)** is a **government agency** within HUD, and its pass-through certificates carry the **full faith and credit of the U.S. government**. **FNMA (Fannie Mae)** and **FHLMC (Freddie Mac)** are **government-sponsored enterprises (GSEs)** — their securities are **not** backed by the full faith and credit of the government, though the market treats them as near-government credit.

A **mortgage-backed pass-through** pools residential mortgages and passes through **monthly payments of interest and principal**. That monthly cash flow includes **return of principal**, which is why a mortgage security's "yield" is not comparable to a corporate bond's — part of what looks like income is the investor's own capital coming back, and spending it consumes the position. Agency and GSE interest is generally **fully taxable at both the federal and state level**, a key contrast with Treasuries.

The signature risk is **prepayment risk**. When rates **fall**, homeowners refinance, principal comes back early, and the investor must **reinvest at lower rates**. The mirror image is **extension risk**: when rates **rise**, prepayments slow, the average life lengthens, and the investor is stuck in a below-market bond. Mortgage securities have **negative convexity** for this reason — the homeowner holds a free option to prepay, and that option is exercised against the investor in both directions. It shortens the bond exactly when short reinvestment is unattractive and lengthens it exactly when long exposure is unattractive.

**Collateralized mortgage obligations (CMOs)** repackage pass-throughs into **tranches** with different maturities and prepayment exposures.

- **Sequential-pay**: tranches retire in order; the first absorbs all principal until retired.
- **PAC (Planned Amortization Class)**: a defined principal schedule protected within a prepayment band by a **companion (support) tranche**. **Most prepayment protection, lowest yield.**
- **TAC (Targeted Amortization Class)**: protected against **prepayment** but not **extension**.
- **Z-tranche (accrual)**: receives no cash until earlier tranches retire. **Longest and most volatile.**

A CMO does not eliminate prepayment risk; it **redistributes** it. The PAC's protection is manufactured entirely out of the companion tranche's exposure, which is why companion holders earn more and suffer far more when prepayments run outside the band. CMOs may **never** be advertised as comparable to a CD or as guaranteed.

## Municipal Securities

Issued by states, counties, cities, school districts, and authorities. The defining feature is that interest is generally **exempt from federal income tax**. **Capital gains on municipal bonds are always taxable.**

**General obligation (GO) bonds** are backed by the **full faith, credit, and taxing power** of the issuer. They usually require **voter approval** and are constrained by statutory **debt limits**. Analysis focuses on the tax base, assessed property values, and demographics.

**Revenue bonds** are payable **only from the revenues** of a specific project — a toll road, airport, hospital, or water system. **No voter approval** is needed and there is no debt-limit constraint, but there is also **no taxing power** behind them, so they are typically **riskier and higher yielding** than the same issuer's GOs. Their indentures contain a **feasibility study**, a **rate covenant** (a promise to charge enough to cover debt service by a stated coverage ratio), a **flow of funds**, and an **additional bonds test** limiting new parity debt.

The two credits demand different analysis because they are secured by different things. A **GO** analyst asks about the **community**: the assessed value of taxable property, the tax collection rate, unemployment and population trends, overlapping debt from other jurisdictions taxing the same parcels, and how much statutory debt-limit headroom remains. A **revenue** analyst ignores most of that and asks about the **project**: is demand for it inelastic, does the issuer have the legal power to raise rates without a referendum, and does net revenue cover debt service by a comfortable margin? A water system serving the only households in the county is a strong revenue credit; a convention center competing with three others is a weak one, even in a wealthy city.

Two variants recur on the exam: **industrial development revenue bonds (IDRs)**, where the real credit is the **corporate lessee**, and **short-term notes** (TAN, RAN, BAN, TRAN) that bridge cash flow until taxes, revenues, or a bond sale arrives.

### Tax Treatment and Taxable-Equivalent Yield

Municipal interest is federally exempt. If the investor also lives in the issuing state, interest is usually **state-exempt too — "double exempt."** Add a **local income tax** exemption (or buy **U.S. territorial bonds**, such as Puerto Rico issues, which are exempt in every state) and the bond is **"triple tax-free."**

**Private activity bonds** are a trap. A qualifying private activity bond's interest is federally exempt for regular tax but is an **item of tax preference for the alternative minimum tax (AMT)**. For an AMT-exposed client, an AMT bond's advertised yield overstates the after-tax benefit — and note that AMT bonds are priced to yield **more** than comparable non-AMT paper precisely because part of the buyer pool cannot use them. That extra yield is free money for a client with no AMT exposure and a mirage for one with it.

Because the yield is tax-free, comparing a municipal to a corporate requires converting one to the other's basis:

**Taxable-equivalent yield = tax-free yield / (1 − marginal tax rate).**

A 4% municipal for a client in the 32% bracket has a taxable-equivalent yield of 4% / 0.68 = **5.88%**. The higher the bracket, the more attractive municipals become — which is exactly why **municipal bonds are unsuitable inside an IRA or 401(k)**, where the tax exemption is wasted and lower yield is all that remains. When state tax also applies, the rate in the denominator is the **combined** rate, and using the federal rate alone systematically understates the municipal and can reverse the recommendation.

### The De Minimis Rule

Tax exemption covers **interest**, never **gain** — but a municipal bought below par in the secondary market raises a further question: is the discount that accretes toward par a capital gain, or is it disguised interest? The **de minimis rule** draws the line. Compute a threshold of **0.25% of par for each full year remaining to maturity** and subtract it from par. A bond purchased **above** that threshold has a discount small enough to be ignored, and the accretion is treated as **capital gain** at sale or maturity. A bond purchased **below** it carries **market discount** that is taxed as **ordinary income**.

The rule exists to stop investors from converting ordinary interest into lower-taxed capital gain simply by buying a deeply discounted bond. Its practical effect is a visible **price break** in the secondary market: as rates rise and a municipal's price slides past its de minimis threshold, the pool of interested buyers shrinks and the price falls faster than yield alone would explain.

### Scenario: The De Minimis Trap

A client in a 35% ordinary bracket and a 15% long-term capital gains bracket buys **50 municipal bonds** with **8 years** remaining at a price of **92**, investing 50 × $920 = **$46,000**, and plans to hold to maturity.

Run the threshold: 0.25% × 8 years = **2 points**, so the de minimis floor is **98**. The purchase at 92 is well below it, so the entire **$80 per bond** of market discount is **ordinary income**, not capital gain. Across 50 bonds that is 50 × $80 = **$4,000** taxed at 35%, a tax of **$1,400**. Had the same $4,000 qualified as capital gain at 15%, the tax would have been **$600**. The rule costs this client **$800**.

Now the near case that comes out the other way. A bond with the same 8 years bought at **99** sits **above** the 98 floor, so its $10 per bond of discount is a **capital gain**. Same issuer, same maturity, same tax brackets, opposite treatment — the only difference is which side of 98 the purchase price landed on. Interest on both bonds remains federally tax-exempt throughout; it is only the **discount** that is at issue.

## Corporate Bonds

Corporate debt is ranked by **collateral and seniority**.

**Secured:**
- **Mortgage bonds** — backed by real property.
- **Equipment trust certificates** — backed by transportation equipment such as railcars and aircraft; title is held in trust until the certificates are retired.
- **Collateral trust certificates** — backed by securities of subsidiaries deposited with a trustee.

**Unsecured:**
- **Debentures** — backed only by the **general credit** of the issuer.
- **Subordinated debentures** — junior to other debt, therefore **higher yielding**.
- **Guaranteed bonds** — carry a third party's (usually a parent company's) guarantee.

The stack is a **queue in bankruptcy**, and the yield at each rung is the price of standing one place further back. A secured holder forecloses on identified property; a debenture holder shares what is left after secured claims; a subordinated holder is paid only after senior unsecured claims are made whole, which in a severe default often means not at all. Equipment trust certificates earn their reputation structurally: the equipment is **movable, standardized, and resaleable**, so the collateral holds value in exactly the scenario where the issuer does not.

**Feature-based categories:**
- **Convertible bonds** convert into a fixed number of common shares. **Conversion ratio = par / conversion price.** Because of the equity upside, convertibles carry a **lower coupon** than comparable straight debt, and their price is driven partly by the stock. **Parity price** of the stock equals the bond price divided by the conversion ratio.
- **Callable bonds** may be redeemed early by the issuer, typically after a **call protection** period and at a premium. Issuers call when rates **fall**, so the investor faces **reinvestment risk**. Callable bonds must offer a **higher yield** to compensate.
- **Putable bonds** let the holder sell back to the issuer at par on set dates — a benefit to the investor, so they carry a **lower yield**.
- **Floating rate notes** reset their coupon periodically against a short-term benchmark plus a fixed spread. Because the coupon chases the market, the **price stays near par** and interest rate risk is small — but the coupon falls as fast as it rises, and the **credit spread is fixed at issuance**, so a deteriorating issuer still produces losses. Floaters trade rate risk for reinvestment uncertainty; they are not risk-free short paper.
- **Income (adjustment) bonds** pay interest **only if earned and declared** by the board. They arise from reorganizations, trade **flat** (without accrued interest), and are highly speculative.

### Convertibles and Forced Conversion

A convertible gives the holder a bond's downside floor and the stock's upside, and the issuer charges for that combination with a **lower coupon**. The conversion terms are fixed at issuance from **par**, never from the bond's market price. Two prices describe the relationship: the **conversion value** (ratio × current stock price) is what the bond is worth if converted today, and the **parity price of the stock** (bond price / ratio) is the stock price at which bond and shares are worth the same. A convertible almost always trades **above** its conversion value, and that gap is the premium buyers pay for the bond's interest and its floor.

**Forced conversion** is how the issuer collects. When the stock has risen far enough that conversion value exceeds the call price, the issuer calls the bond. Holders can take the call price in cash or convert into shares worth more — and being rational, they convert. The issuer thereby **converts debt into equity on its own timetable**, eliminates the coupon, and the holder loses the bond floor and the interest stream just when the option was becoming valuable.

### Call Protection, Sinking Funds, and Zeros

**Call protection** is the period after issuance during which the bond cannot be called, typically five to ten years on a long corporate. After it lapses, calls are permitted at a declining **call premium** grading down toward par. The logic is plain: a call lets the issuer refinance when rates fall, so the option is exercised in exactly the scenario the investor least wants. A **make-whole call** is the investor-friendlier variant, requiring payment of the present value of remaining cash flows, which makes calling expensive rather than opportunistic.

A **sinking fund** requires the issuer to set money aside or retire a portion of the issue each year, which improves credit quality by spreading repayment over time instead of concentrating it at maturity. It cuts both ways for the holder: the bond is safer, but specific bonds may be called at par by lottery, so a premium bond can be redeemed at par before the holder intended.

**Zero-coupon bonds** pay nothing until maturity and are bought at a deep discount. The discount is **imputed interest**, accreted and **taxed annually** even though no cash arrives, so a taxable investor pays cash taxes on income never received. Two consequences follow. First, zeros belong in **tax-deferred accounts** unless they are municipal zeros, whose accretion follows the exemption. Second, the annual accretion **raises the cost basis**, so a zero sold before maturity produces a gain or loss measured against the **accreted basis**, not the original purchase price — and forgetting this causes investors to report the same income twice.

## Credit Ratings and Covenants

- Highest — Moody's: Aaa. S&P and Fitch: AAA.
- Investment grade floor — Moody's: Baa3. S&P and Fitch: BBB−.
- High yield begins — Moody's: Ba1. S&P and Fitch: BB+.
- Default — Moody's: C. S&P and Fitch: D.


Anything at or below **Ba1 / BB+** is **high yield (junk)** — greater default risk, higher yield, and price behavior that correlates more with equities than with Treasuries. Many fiduciaries and institutions are contractually barred from holding below investment grade, which is why that one boundary matters far more than a single notch should. A **fallen angel** downgraded from BBB− to BB+ can face forced selling by holders whose mandates no longer permit it, so the price move at the boundary exceeds anything the change in default probability justifies. When agencies disagree — a **split rating** — work from the lower one. And ratings speak to **credit risk only**: a AAA thirty-year bond still carries full interest rate risk, and a rating is an opinion about repayment, never about price stability or suitability.

**Covenants** are the promises in the indenture. **Positive (affirmative) covenants** require action — maintain insurance, file financial statements, sustain a minimum coverage ratio. **Negative (restrictive) covenants** forbid action — no additional senior debt, no dividends above a threshold. Strong covenants protect creditors, so weakening them is a credit negative. The economic logic is that a shareholder-elected board has a standing incentive to take risk with borrowed money, because shareholders capture the upside while creditors absorb the downside; covenants are the contractual restraint bondholders buy in place of the vote they do not have.

### Scenario: Called at the Worst Possible Time

An investor buys a **6% coupon, 20-year corporate bond at par**, callable at **103** after five years, and holds it for five years while market yields on comparable 15-year paper fall to **4%**.

Value the bond as if it were not callable: a 6% bond with 15 years left, priced to a 4% yield, is worth about **$1,224**. The investor never sees it. The issuer calls at **$1,030** and refinances at 4%, so the holder gives up roughly **$194 per bond** of appreciation the rate move had already earned.

Then the second injury: the $1,030 must be reinvested at prevailing rates, producing about $1,030 × 4% = **$41.20** a year where the bond paid **$60**. Income falls about **31%**, permanently. That is why callable bonds must yield more at issuance, why **yield to call** is the meaningful measure on a premium bond above its call price, and why call protection has value. The **putable** bond runs the other way — the holder sells back at par when rates rise — so it yields **less** at issuance.

### Scenario: Which Bond Belongs in Which Account

A client in the **35% federal bracket** holds both a taxable brokerage account and a traditional IRA, and is choosing between a municipal bond yielding **3.25%** and a corporate of similar quality yielding **4.80%**.

In the **taxable account**, gross the municipal up: 3.25% / (1 − 0.35) = 3.25% / 0.65 = **5.00%** taxable-equivalent, which beats the corporate's 4.80%. The municipal wins.

In the **IRA** the calculation collapses. Nothing inside is currently taxed, so the exemption buys nothing and the comparison is 3.25% against 4.80% at face value — on $100,000 that is **$1,550 a year** surrendered for no benefit. Worse, traditional IRA distributions are taxed as **ordinary income** regardless of what generated them, so the client eventually pays full ordinary rates on income that was tax-exempt before it went in.

The placement rule follows: **tax-inefficient holdings go in the tax-deferred account, tax-favored holdings go in the taxable account.** Corporate bonds, taxable agency and mortgage paper, **TIPS** (inflation adjustment is phantom income), and **taxable zeros** (accretion is phantom income) belong in the IRA. Municipals never do.

## The questions this topic is tested with

**Which choice correctly describes the maturities of marketable U.S. Treasury securities at issuance?**

Treasury bills mature in one year or less and are sold at a discount with no coupon. Notes are issued with maturities of two to ten years and bonds with maturities greater than ten years, both paying semiannual interest.

**An investor holds $10,000 face value of Treasury Inflation-Protected Securities with a 2% coupon paid semiannually. Over the first six months the reference inflation index rises 3%. What is the next semiannual interest payment?**

TIPS adjust principal for inflation, so the principal becomes $10,000 × 1.03 = $10,300. The semiannual coupon is half of 2%, or 1%, applied to the adjusted principal: 1% × $10,300 = $103. The coupon rate itself never changes; the principal it is applied to does.

**A client buys GNMA pass-through certificates and tells the adviser he considers them risk-free because they carry the full faith and credit of the U.S. government. The adviser should explain that GNMAs:**

Ginnie Mae is a government corporation and its pass-throughs do carry full faith and credit backing for timely payment, unlike Fannie Mae and Freddie Mac securities, which are agency-backed. The guarantee addresses credit risk only. When rates fall, homeowners refinance and principal returns early to be reinvested at lower rates; when rates rise, prepayments slow and the average life extends.

**In a CMO structured with planned amortization class (PAC) tranches and companion (support) tranches, the companion tranche:**

The companion, or support, tranche exists to take on the swings in prepayment speed, letting the PAC deliver a more dependable payment schedule within a defined range of prepayment speeds. Because it absorbs that variability, the companion carries more prepayment and extension risk and usually offers a higher yield.

**All of the following are true of municipal revenue bonds EXCEPT:**

Full faith, credit, and taxing power describes a general obligation bond, which typically requires voter approval and counts against statutory debt limits. Revenue bonds are self-supporting from project income, are usually not subject to debt limits, and are analyzed through the feasibility study and coverage ratios.

**A client in the 32% federal marginal bracket is comparing a general obligation bond yielding 3.4% with a taxable corporate bond. Ignoring state taxes, what corporate yield would leave the client indifferent?**

Taxable-equivalent yield = tax-free yield ÷ (1 − marginal tax rate) = 0.034 ÷ (1 − 0.32) = 0.034 ÷ 0.68 = 5.00%. Multiplying by 0.68 instead of dividing produces 2.31%, which is the after-tax yield of a 3.4% taxable bond and a common reversal error.
