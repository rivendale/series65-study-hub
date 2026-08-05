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

## U.S. Treasury Securities

Direct obligations of the U.S. government, carrying its **full faith and credit** and treated as free of **default risk**. Interest is **subject to federal income tax but exempt from state and local tax**.

| Instrument | Maturity | Interest |
| --- | --- | --- |
| **T-bills** | 1 year or less | Issued at a **discount**, no coupon |
| **T-notes** | 2 to 10 years | Semiannual coupon |
| **T-bonds** | Over 10 years (20 and 30 year) | Semiannual coupon |
| **TIPS** | 5, 10, 30 years | Fixed rate on an **inflation-adjusted principal** |
| **STRIPS** | Varies | **Zero coupon**, sold at a deep discount |

**TIPS** (Treasury Inflation-Protected Securities) adjust **principal** by changes in the **Consumer Price Index**; the **coupon rate stays fixed** but is applied to the adjusted principal, so the dollar payment rises with inflation. The catch: the annual **principal adjustment is federally taxable in the year it occurs**, even though the investor receives no cash for it — **phantom income**. TIPS therefore belong in **tax-deferred accounts** when possible.

**STRIPS** (Separate Trading of Registered Interest and Principal Securities) are Treasury cash flows stripped into individual **zero-coupon** obligations. There is no reinvestment risk, because there is nothing to reinvest, but the **accreted discount is taxed annually** as phantom income, and zeros have the **longest duration** of any bond of a given maturity, so they are extremely rate-sensitive.

## Agency and Mortgage-Backed Securities

**GNMA (Ginnie Mae)** is a **government agency** within HUD, and its pass-through certificates carry the **full faith and credit of the U.S. government**. **FNMA (Fannie Mae)** and **FHLMC (Freddie Mac)** are **government-sponsored enterprises (GSEs)** — their securities are **not** backed by the full faith and credit of the government, though the market treats them as near-government credit.

A **mortgage-backed pass-through** pools residential mortgages and passes through **monthly payments of interest and principal**. That monthly cash flow includes **return of principal**, which is why a mortgage security's "yield" is not comparable to a corporate bond's. Agency and GSE interest is generally **fully taxable at both the federal and state level** — a key contrast with Treasuries.

The signature risk is **prepayment risk**. When rates **fall**, homeowners refinance, principal comes back early, and the investor must **reinvest at lower rates**. The mirror image is **extension risk**: when rates **rise**, prepayments slow, the average life lengthens, and the investor is stuck in a below-market bond. Mortgage securities have **negative convexity** for this reason.

**Collateralized mortgage obligations (CMOs)** repackage pass-throughs into **tranches** with different maturities and prepayment exposures.

- **Sequential-pay**: tranches retire in order; the first absorbs all principal until retired.
- **PAC (Planned Amortization Class)**: a defined principal schedule protected within a prepayment band by a **companion (support) tranche**. **Most prepayment protection, lowest yield.**
- **TAC (Targeted Amortization Class)**: protected against **prepayment** but not **extension**.
- **Z-tranche (accrual)**: receives no cash until earlier tranches retire. **Longest and most volatile.**

CMOs may **never** be advertised as comparable to a certificate of deposit or as guaranteed.

## Municipal Securities

Issued by states, counties, cities, school districts, and authorities. The defining feature is that interest is generally **exempt from federal income tax**. **Capital gains on municipal bonds are always taxable.**

**General obligation (GO) bonds** are backed by the **full faith, credit, and taxing power** of the issuer. They usually require **voter approval** and are constrained by statutory **debt limits**. Analysis focuses on the tax base, assessed property values, and demographics.

**Revenue bonds** are payable **only from the revenues** of a specific project — a toll road, airport, hospital, or water system. **No voter approval** is needed and there is no debt-limit constraint, but there is also **no taxing power** behind them, so they are typically **riskier and higher yielding** than the same issuer's GOs. Their indentures contain a **feasibility study**, a **rate covenant** (a promise to charge enough to cover debt service by a stated coverage ratio), a **flow of funds**, and an **additional bonds test** limiting new parity debt.

Two variants recur on the exam: **industrial development revenue bonds (IDRs)**, where the real credit is the **corporate lessee**, and **short-term notes** (TAN, RAN, BAN, TRAN) that bridge cash flow until taxes, revenues, or a bond sale arrives.

### Tax Treatment and Taxable-Equivalent Yield

Municipal interest is federally exempt. If the investor also lives in the issuing state, interest is usually **state-exempt too — "double exempt."** Add a **local income tax** exemption (or buy **U.S. territorial bonds**, such as Puerto Rico issues, which are exempt in every state) and the bond is **"triple tax-free."**

**Private activity bonds** are a trap. A qualifying private activity bond's interest is federally exempt for regular tax but is an **item of tax preference for the alternative minimum tax (AMT)**. For an AMT-exposed client, an AMT bond's advertised yield overstates the after-tax benefit.

Because the yield is tax-free, comparing a municipal to a corporate requires converting one to the other's basis:

**Taxable-equivalent yield = tax-free yield / (1 − marginal tax rate).**

A 4% municipal for a client in the 32% bracket has a taxable-equivalent yield of 4% / 0.68 = **5.88%**. The higher the bracket, the more attractive municipals become — which is exactly why **municipal bonds are unsuitable inside an IRA or 401(k)**, where the tax exemption is wasted and lower yield is all that remains.

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

**Feature-based categories:**
- **Convertible bonds** convert into a fixed number of common shares. **Conversion ratio = par / conversion price.** Because of the equity upside, convertibles carry a **lower coupon** than comparable straight debt, and their price is driven partly by the stock. **Parity price** of the stock equals the bond price divided by the conversion ratio.
- **Callable bonds** may be redeemed early by the issuer, typically after a **call protection** period and at a premium. Issuers call when rates **fall**, so the investor faces **reinvestment risk**. Callable bonds must offer a **higher yield** to compensate.
- **Putable bonds** let the holder sell back to the issuer at par on set dates — a benefit to the investor, so they carry a **lower yield**.
- **Income (adjustment) bonds** pay interest **only if earned and declared** by the board. They arise from reorganizations, trade **flat** (without accrued interest), and are highly speculative.

## Credit Ratings and Covenants

| | Moody's | S&P and Fitch |
| --- | --- | --- |
| Highest | Aaa | AAA |
| **Investment grade floor** | **Baa3** | **BBB−** |
| **High yield begins** | **Ba1** | **BB+** |
| Default | C | D |

Anything at or below **Ba1 / BB+** is **high yield (junk)** — greater default risk, higher yield, and price behavior that correlates more with equities than with Treasuries. Many fiduciaries and institutions are contractually barred from holding below investment grade.

**Covenants** are the promises in the indenture. **Positive (affirmative) covenants** require action — maintain insurance, file financial statements, sustain a minimum coverage ratio. **Negative (restrictive) covenants** forbid action — no additional senior debt, no dividends above a threshold. Strong covenants protect creditors, so weakening them is a credit negative.`,
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
  ],
};
