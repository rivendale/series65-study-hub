import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'fixed-income-basics',
  title: 'Fixed-Income Securities',
  weight: '~4%',
  order: 9,
  summary:
    "A bond is a loan with a contract attached. This topic covers bond fundamentals and the four major issuer families — Treasury, agency and mortgage-backed, municipal, and corporate — plus credit ratings, covenants, and the taxable-equivalent yield calculation that decides whether a municipal bond is actually a good deal for a given client.",
  body: `## Bond Fundamentals

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

| Instrument | Maturity | Interest |
| --- | --- | --- |
| **T-bills** | 1 year or less | Issued at a **discount**, no coupon |
| **T-notes** | 2 to 10 years | Semiannual coupon |
| **T-bonds** | Over 10 years (20 and 30 year) | Semiannual coupon |
| **TIPS** | 5, 10, 30 years | Fixed rate on an **inflation-adjusted principal** |
| **STRIPS** | Varies | **Zero coupon**, sold at a deep discount |

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

| | Moody's | S&P and Fitch |
| --- | --- | --- |
| Highest | Aaa | AAA |
| **Investment grade floor** | **Baa3** | **BBB−** |
| **High yield begins** | **Ba1** | **BB+** |
| Default | C | D |

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

The placement rule follows: **tax-inefficient holdings go in the tax-deferred account, tax-favored holdings go in the taxable account.** Corporate bonds, taxable agency and mortgage paper, **TIPS** (inflation adjustment is phantom income), and **taxable zeros** (accretion is phantom income) belong in the IRA. Municipals never do.`,
  pitfalls: [
    "Treasury interest is exempt from state and local tax but fully taxable federally. Agency and mortgage-backed interest is generally taxable at both levels — do not extend the Treasury exemption to GNMA or FNMA.",
    "Only GNMA carries the full faith and credit of the U.S. government. FNMA and FHLMC are GSEs whose securities are not government-guaranteed.",
    "TIPS principal adjustments and zero-coupon accretion are taxed annually as phantom income even though no cash is received, which is why both belong in tax-deferred accounts.",
    "Municipal bonds are almost never suitable inside an IRA, 401(k), or other tax-deferred account — the tax exemption is wasted and the investor keeps only the lower yield.",
    "The federal tax exemption applies to municipal interest, not to capital gains. A municipal bond sold above the investor's cost still produces a taxable gain.",
    "AMT (private activity) bond interest is federally exempt for regular tax but is a tax-preference item for the alternative minimum tax, so it can be unsuitable for a high-income client.",
    "Investment grade stops at Baa3 / BBB−. Ba1 and BB+ are the first rungs of high yield, and getting this boundary off by one notch is a classic exam miss.",
    "Prepayment risk hurts when rates fall (early principal reinvested at lower rates); extension risk hurts when rates rise. Candidates frequently name only one and mislabel it.",
  ],
  keyTerms: [
    {
      term: 'Indenture',
      definition:
        "The written contract between a bond issuer and its holders specifying coupon, maturity, call provisions, collateral, and covenants, enforced by a trustee.",
    },
    {
      term: 'TIPS',
      definition:
        'Treasury Inflation-Protected Securities, whose principal adjusts with the CPI while the coupon rate stays fixed, producing currently taxable phantom income from the adjustment.',
    },
    {
      term: 'STRIPS',
      definition:
        'Zero-coupon Treasury obligations created by separating a bond into its individual interest and principal cash flows; no reinvestment risk but annual phantom-income taxation.',
    },
    {
      term: 'Prepayment risk',
      definition:
        'The risk that falling interest rates cause mortgage borrowers to refinance, returning principal early and forcing reinvestment at lower yields.',
    },
    {
      term: 'PAC tranche',
      definition:
        'A CMO Planned Amortization Class with a defined principal schedule protected within a prepayment band by a companion tranche; the most prepayment-protected and lowest-yielding tranche.',
    },
    {
      term: 'General obligation bond',
      definition:
        "A municipal bond backed by the issuer's full faith, credit, and taxing power, usually requiring voter approval and subject to statutory debt limits.",
    },
    {
      term: 'Revenue bond',
      definition:
        'A municipal bond payable solely from the revenues of a specific project, requiring no voter approval and protected by a rate covenant and an additional bonds test.',
    },
    {
      term: 'Taxable-equivalent yield',
      definition:
        "The pretax yield a taxable bond must offer to match a municipal bond's after-tax yield, equal to the tax-free yield divided by one minus the marginal tax rate.",
    },
    {
      term: 'Debenture',
      definition:
        "An unsecured corporate bond backed only by the general credit of the issuer, ranking below secured debt and above subordinated debt in liquidation.",
    },
    {
      term: 'Negative covenant',
      definition:
        'A restrictive promise in the indenture limiting what the issuer may do — such as incurring additional senior debt or paying large dividends — in order to protect creditors.',
    },
  ],
  confusions: [
    {
      dont: 'GNMA — a government agency whose pass-throughs carry full faith and credit',
      with: 'FNMA and FHLMC — government-sponsored enterprises without a federal guarantee',
    },
    {
      dont: 'General obligation bond — taxing power, voter approval, debt limits',
      with: 'Revenue bond — project revenues only, no voter approval, rate covenant and feasibility study',
    },
    {
      dont: 'Prepayment risk — principal returns early when rates fall',
      with: 'Extension risk — average life stretches out when rates rise',
    },
    {
      dont: 'Callable bond — benefits the issuer, so it must yield more',
      with: 'Putable bond — benefits the investor, so it yields less',
    },
    {
      dont: 'Equipment trust certificate — secured by transportation equipment',
      with: 'Collateral trust certificate — secured by securities held in trust',
    },
  ],
  formulas: [
    {
      name: 'Taxable-equivalent yield',
      formula: 'TEY = Tax-Free Yield / (1 − Marginal Tax Rate)',
      note: 'A 4% municipal in a 32% bracket equals 4% / 0.68 = 5.88% taxable equivalent.',
    },
    {
      name: 'Tax-free equivalent yield',
      formula: 'Tax-Free Equivalent = Taxable Yield × (1 − Marginal Tax Rate)',
      note: 'The reverse conversion: what a taxable bond is really worth after tax.',
    },
    {
      name: 'Conversion ratio',
      formula: 'Conversion Ratio = Par Value / Conversion Price',
      note: 'A $1,000 bond convertible at $40 converts into 25 shares.',
    },
    {
      name: 'Parity price of the stock',
      formula: 'Parity Price = Bond Market Price / Conversion Ratio',
      note: 'The stock price at which the bond and the underlying shares are worth the same.',
    },
    {
      name: 'Conversion value',
      formula: 'Conversion Value = Conversion Ratio × Current Stock Price',
      note: 'What the bond is worth if converted today. A convertible normally trades above this.',
    },
    {
      name: 'Accrued interest (30/360, corporate and municipal)',
      formula:
        'Accrued = Annual Coupon × (Days from last coupon date to settlement) / 360, counting every month as 30 days',
      note: 'Accrue up to but NOT including settlement. Government bonds use actual/actual instead.',
    },
    {
      name: 'Straight-line accretion on a zero-coupon bond',
      formula: 'Annual Accretion = (Par - Purchase Price) / Years to Maturity',
      note: 'Adjusted basis = purchase price + cumulative accretion. Taxed annually as phantom income.',
    },
    {
      name: 'Debt service coverage ratio (revenue bonds)',
      formula: 'DSCR = Net Revenues / Annual Debt Service, where Net Revenues = Gross Revenues - Operating and Maintenance Expenses',
      note: 'Under a net revenue pledge, O&M is paid before debt service. Rate covenants typically require 1.20x to 1.50x.',
    },
    {
      name: 'Municipal de minimis threshold',
      formula: 'Threshold Price = Par - (0.25% × Par × Full Years Remaining to Maturity)',
      note: 'Buy below the threshold and the market discount is ORDINARY income; buy above it and it is capital gain.',
    },
  ],
  workedExamples: [
    {
      title: 'Taxable-equivalent yield with both federal and state tax',
      setup:
        "A client faces a 32% federal marginal rate and a 6% state marginal rate; assume the two simply add to a 38% combined rate. Three bonds of similar quality are available: an in-state municipal yielding 3.10% (exempt from both federal and state tax), a corporate yielding 4.75% (taxable by both), and a Treasury yielding 4.30% (federally taxable, state-exempt). Which should the client buy in a taxable account?",
      steps: [
        "Identify the tax status of each yield before touching a calculator. The municipal is double exempt, so 3.10% is already the after-tax number. The corporate is fully taxable. The Treasury escapes state tax only.",
        "Gross the municipal up to a taxable-equivalent basis. TEY = Tax-Free Yield / (1 − Combined Rate). You DIVIDE, because the question is what a taxable bond must pay before tax to leave 3.10% in the client's hand.",
        "Compute the denominator: 1 − 0.38 = 0.62.",
        "Substitute: 0.0310 / 0.62 = 0.0500, so the municipal's taxable-equivalent yield is 5.00%.",
        "Compare directly with the corporate's 4.75%. The municipal wins by 25 basis points.",
        "Place the Treasury on the same scale. Its after-tax yield is 4.30% × (1 − 0.32) = 4.30% × 0.68 = 2.924%, because only federal tax applies. Restated as a fully taxable equivalent: 2.924% / 0.62 = 4.72%.",
        "Cross-check by working entirely in after-tax terms instead. Municipal = 3.10%. Corporate = 4.75% × 0.62 = 2.945%. Treasury = 2.924%. Same ranking: municipal, then corporate, then Treasury.",
      ],
      answer:
        "The in-state municipal wins: a 5.00% taxable equivalent against the corporate's 4.75% and the Treasury's 4.72%. Measured after tax the three are 3.10%, 2.945%, and 2.924%. Both methods must agree, and running the second one is the cheapest error check available.",
      watchOut:
        "Two errors, and the second is subtler and more damaging. First, MULTIPLYING instead of dividing: 3.10% × 0.62 = 1.92% is self-evidently wrong, because grossing a tax-free yield up to its pre-tax equivalent can never make it smaller. Second, using the FEDERAL rate alone on a double-exempt bond: 3.10% / 0.68 = 4.56%, which sits below the corporate's 4.75% and reverses the recommendation. When the bond is exempt from state tax too, the combined rate belongs in the denominator.",
    },
    {
      title: 'Conversion ratio, parity, and a forced conversion',
      setup:
        "A $1,000 par convertible debenture is convertible at $25 per share. The bond currently trades at 116 and the common stock trades at $27.50. The issuer may call the bond at 102. Find the conversion ratio, the parity price of the stock, the conversion value, and what a holder should do if the bond is called.",
      steps: [
        "Conversion ratio = Par / Conversion Price. The ratio always comes from PAR, fixed at issuance, never from the bond's market price. Substitute: $1,000 / $25 = 40 shares per bond.",
        "Convert the bond quote to dollars: 116 means 116% of $1,000 = $1,160.",
        "Parity price of the STOCK = Bond Market Price / Conversion Ratio. Substitute: $1,160 / 40 = $29.00. That is the stock price at which bond and shares would be worth the same.",
        "Conversion value = Conversion Ratio × Current Stock Price. Substitute: 40 × $27.50 = $1,100. This is what the bond is worth if converted right now.",
        "Compare: the bond trades at $1,160 but converts into only $1,100 of stock, a premium of $1,160 − $1,100 = $60, or $60 / $1,100 = 5.45%. Converting today would destroy $60 of value, so nobody converts voluntarily.",
        "Now the call. The issuer calls at 102 = $1,020 cash. The holder compares $1,020 in cash against converting into 40 shares worth 40 × $27.50 = $1,100.",
        "Because $1,100 exceeds $1,020, the rational holder converts. That is a FORCED CONVERSION: the issuer has used the call to turn debt into equity on its own schedule and has retired the coupon.",
      ],
      answer:
        "40 shares per bond; parity price of the stock is $29.00; conversion value is $1,100 against a market price of $1,160, a 5.45% premium. If called at 102, the holder converts, because $1,100 of stock beats $1,020 of cash. Note the holder still ends up worse than before the call, having paid $1,160 for something now worth $1,100 — the call destroyed the premium.",
      watchOut:
        "Computing the conversion ratio from the bond's market price: $1,160 / $25 = 46.4 shares. That inflates the conversion value to 46.4 × $27.50 = $1,276 and makes an unprofitable conversion look profitable. The ratio is set at issuance from par and does not move when the bond does. The other reversal is dividing by the stock price instead of the ratio when finding parity.",
    },
    {
      title: 'Accrued interest on a corporate bond using 30/360',
      setup:
        "A client buys 10 corporate bonds, $1,000 par each, with a 6% coupon paying January 15 and July 15. The trade is executed on Monday, September 8, and settles regular way T+1 on Tuesday, September 9. The bonds are quoted at 101.5. How much does the client pay in total, and how much of that is accrued interest?",
      steps: [
        "Identify the last coupon date preceding settlement: July 15. Interest accrues from that date up to but NOT including the settlement date of September 9.",
        "Choose the convention. This is a corporate bond, so 30/360 applies: every month counts as 30 days, every year as 360.",
        "Count the days: 30 × (September − July) + (day 9 − day 15) = 30 × 2 + (9 − 15) = 60 − 6 = 54 days.",
        "Find the annual coupon in dollars: 6% × $1,000 = $60.00 per bond per year.",
        "Accrued interest per bond = Annual Coupon × Days / 360. Substitute: $60.00 × 54 / 360 = $9.00.",
        "Convert the quote to dollars: 101.5 means 101.5% of $1,000 = $1,015.00 per bond, the clean price.",
        "Total (dirty) price per bond = $1,015.00 + $9.00 = $1,024.00. For 10 bonds: 10 × $1,024.00 = $10,240.00.",
        "See how the convention matters. Had this been a Treasury, actual/actual would apply: 56 actual days from July 15 to September 9, over a 184-day period from July 15 to January 15, giving $30.00 × 56 / 184 = $9.13.",
      ],
      answer:
        "$9.00 of accrued interest per bond and $10,240.00 total for 10 bonds. The buyer pays the accrued interest TO the seller and is reimbursed by collecting the full $30.00 semiannual coupon on January 15. The same trade in a Treasury would accrue $9.13 under actual/actual.",
      watchOut:
        "Counting through and including the settlement date, which gives 55 days and $9.17 per bond — small on one bond, but it is also the wrong method, and on a large ticket the error compounds. A larger error is running the count to the next coupon date instead of from the last one, or forgetting that some bonds trade FLAT with no accrued interest at all: zero-coupon bonds, income (adjustment) bonds, and bonds in default.",
    },
    {
      title: 'Annual accretion and adjusted basis on a zero-coupon bond',
      setup:
        "An investor buys a $1,000 par corporate zero-coupon bond for $600 with exactly 10 years to maturity, holding it in a taxable account. Compute the annual straight-line accretion, the adjusted basis after three years, and the taxable gain if the bond is sold at $750 at the end of year 3.",
      steps: [
        "Find the total discount, which is the entire return on a zero: $1,000 − $600 = $400.",
        "Straight-line annual accretion = Total Discount / Years to Maturity. Substitute: $400 / 10 = $40.00 per year.",
        "Recognize what that $40 is: imputed INTEREST, reported and taxed each year as ordinary income even though the investor receives no cash. This is phantom income.",
        "Accumulate three years of accretion: 3 × $40.00 = $120.00.",
        "Adjusted cost basis after three years = Purchase Price + Cumulative Accretion. Substitute: $600 + $120 = $720.",
        "Compute the gain on a sale at $750: $750 − $720 = $30.00 of capital gain per bond.",
        "Reconcile the total. The investor's economic profit is $750 − $600 = $150, of which $120 was already reported as interest income over three years and only $30 remains as capital gain. Nothing is taxed twice and nothing escapes.",
        "For contrast, the constant-yield method the IRS actually prescribes for taxable corporate zeros uses the bond's yield: (1,000 / 600) raised to the power 1/10, minus 1, equals about 5.24%. First-year accretion would be $600 × 0.0524 = $31.45 rather than $40.00, rising each year as the basis grows. Straight line is the exam's shortcut; the constant-yield method is what the tax rules generally require.",
      ],
      answer:
        "$40.00 of accretion per year on a straight-line basis, an adjusted basis of $720 after three years, and a $30.00 capital gain on a sale at $750. The constant-yield method gives about 5.24% and $31.45 of first-year accretion, back-loading recognition relative to straight line.",
      watchOut:
        "Treating the entire $150 price rise as capital gain. That overstates the gain by $120 and taxes as capital gain amounts already reported as ordinary interest — double counting in the taxpayer's favor, which is exactly the kind of error that surfaces on audit. The related error is forgetting to accrete at all and then being surprised by a tax bill in a year when no cash arrived. Both are why taxable zeros belong in tax-deferred accounts.",
    },
    {
      title: 'Debt service coverage and the additional bonds test',
      setup:
        "A toll authority reports gross revenues of $18,400,000 and operating and maintenance expenses of $7,900,000. Annual debt service on its outstanding revenue bonds is $6,000,000 of interest plus $1,000,000 of principal. The indenture contains a net revenue pledge and a rate covenant requiring coverage of at least 1.25 times, and the additional bonds test applies the same 1.25 standard to combined debt service. Does the issuer pass, and can it issue new bonds adding $1,400,000 of annual debt service?",
      steps: [
        "Compute net revenues. Under a NET revenue pledge, operating and maintenance expenses are paid first, before debt service. Substitute: $18,400,000 − $7,900,000 = $10,500,000.",
        "Compute annual debt service, which is interest plus principal, not interest alone. Substitute: $6,000,000 + $1,000,000 = $7,000,000.",
        "Compute the coverage ratio: DSCR = Net Revenues / Annual Debt Service = $10,500,000 / $7,000,000 = 1.50 times.",
        "Test the rate covenant: 1.50 is comfortably above the required 1.25, so the covenant is satisfied with room to spare.",
        "Apply the additional bonds test. Combined debt service after the new issue = $7,000,000 + $1,400,000 = $8,400,000.",
        "Recompute coverage on the combined figure: $10,500,000 / $8,400,000 = 1.25 times exactly, which meets the 1.25 requirement.",
        "Find the headroom directly as a check. Maximum debt service supportable at 1.25 coverage = $10,500,000 / 1.25 = $8,400,000, so additional capacity = $8,400,000 − $7,000,000 = $1,400,000 — precisely the proposed issue and not a dollar more.",
      ],
      answer:
        "Current coverage is 1.50 times, comfortably above the 1.25 rate covenant. The new bonds bring coverage to exactly 1.25 times, so the additional bonds test is met and the issue may proceed — but it consumes the entire margin. Any revenue shortfall or O&M increase after closing would put the issuer in violation of its rate covenant, which is precisely what an analyst should flag.",
      watchOut:
        "Using GROSS revenues in the numerator: $18,400,000 / $7,000,000 = 2.63 times, which overstates coverage by more than a full turn and makes a marginal credit look robust. Under a net revenue pledge, O&M comes out first. The second common error is using interest only as debt service — $10,500,000 / $6,000,000 = 1.75 times — which ignores that principal must also be paid. Debt service always means interest plus principal.",
    },
  ],
};
