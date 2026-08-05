import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'interest-rates-inflation',
  title: 'Interest Rates, Inflation, and the Yield Curve',
  weight: '~2%',
  order: 3,
  summary:
    'Interest rates are the price of money and the discount rate applied to every future cash flow. Know the benchmark rates and who sets them, the difference between nominal and real, the four yield curve shapes and what each signals, and how a rate change flows through to bond prices and stock valuations.',
  body: `## Nominal versus real

A **nominal interest rate** is the stated rate. A **real interest rate** is the nominal rate adjusted for inflation — the increase in actual purchasing power. The **Fisher relationship** gives the everyday approximation:

**Real rate ≈ nominal rate − inflation rate**

If a bond yields **5%** while inflation runs **3%**, the real return is roughly **2%**. If inflation runs **6%**, the real return is **negative 1%** — the investor is losing purchasing power while nominally making money. This is the core reason **purchasing power (inflation) risk** is the dominant risk in long-term fixed income and in cash equivalents, and it is why a portfolio built entirely from CDs and T-bills can fail a long-horizon retiree.

The exact form:

**(1 + nominal) = (1 + real) × (1 + inflation)**

Why the exact version differs matters. Subtraction treats the inflation adjustment as if it applied only to the original principal, but inflation also erodes the interest you earned during the year. The gap is the cross term, real × inflation, and it is small when both numbers are small and material when they are not. A 6.08% nominal yield against 4% inflation gives 2.08% by subtraction and exactly 2.00% by the Fisher equation — an 8 basis point overstatement. A 15.36% nominal yield against 12% inflation gives 3.36% by subtraction and exactly 3.00% by the Fisher equation — a 36 basis point overstatement. **Whenever the nominal yield exceeds inflation, the shortcut flatters the real return, and the flattery grows with inflation.** The error tracks the sign of the real return, so when inflation outruns the nominal yield the shortcut runs the other way and overstates the loss: the 5%-against-6% case above is −1.00% by subtraction but −0.94% exactly. The first worked example carries both cases through.

## Four words that sound alike

- **Inflation** — the general price level is rising; each dollar buys less.
- **Deflation** — the general price level is falling. Sounds pleasant, is dangerous.
- **Disinflation** — prices are **still rising, but more slowly**. The inflation rate falls from 6% to 3%. This is not deflation.
- **Stagflation** — the unpleasant combination of **stagnant growth with high unemployment and high inflation**. It is a policy trap: easing to fix unemployment worsens inflation, and tightening to fix inflation worsens unemployment.

**Hyperinflation** is an extreme, accelerating loss of currency value.

### Why deflation is the harder problem

Central banks fear deflation more than moderate inflation, for four reinforcing reasons.

**Policy loses traction.** Nominal rates cannot fall far below zero, because a saver can always hold currency at 0%. Since the real rate is roughly the nominal rate minus inflation, when inflation goes negative the real rate *rises* even if the central bank has already cut to zero. The tool stops working at exactly the moment it is needed.

**Debt burdens grow.** Loans are fixed in nominal dollars while incomes and prices fall, so the real value of every debt rises. Borrowers cut spending to service it, which weakens demand further and pushes prices down again — the debt deflation spiral.

**Purchases get delayed.** If the same item will cost less next quarter, waiting is rational for each household and disastrous in aggregate, because the deferred demand is what would have stopped prices falling.

**Wages are sticky downward.** Employers can rarely cut nominal pay, so when revenue falls they cut headcount instead. Deflation therefore converts into unemployment rather than into cheaper labor.

Inflation has the opposite properties: it erodes debt, punishes waiting, and lets real wages adjust without anyone taking a visible pay cut. That asymmetry is why central banks target a small positive inflation rate rather than zero.

## How inflation is measured, and where each measure misleads

- **CPI (Consumer Price Index)** measures the price change of a fixed basket of consumer goods and services bought by households. It is the headline gauge and the basis for cost-of-living adjustments, Social Security increases, and TIPS principal adjustments.
- **PPI (Producer Price Index)** measures prices received by domestic producers at the wholesale level. Because input costs pass through to retail, PPI is often treated as an early warning for CPI.
- **Core** versions of each exclude food and energy.
- **PCE**, the personal consumption expenditures price index, is the measure the Fed weighs most heavily. It allows for substitution between goods and weights categories differently, and it typically runs a little below CPI.

Each measure has a known blind spot, and the exam rewards knowing which.

**CPI overstates through substitution.** A fixed basket assumes households keep buying the same beef when beef gets expensive, when in fact they switch to chicken. Holding the basket constant therefore captures a price rise the household partly avoided.

**CPI's shelter component lags.** Housing is measured largely through rents and imputed owners' equivalent rent, both of which reset slowly under lease terms. Shelter is the largest single weight in CPI, so market turns in housing show up in the index quarters late in both directions.

**PPI misses what is not produced domestically.** It prices domestic output, so a surge in the cost of imported inputs may not appear there but will reach consumers anyway. PPI passthrough to CPI is also incomplete: producers absorb some of a cost increase in margin.

**Core misleads about lived experience.** Excluding food and energy produces a cleaner read on the persistent trend, which is what policy should respond to. It produces a worse estimate of what a household actually pays, since households buy groceries and fuel. Neither figure is dishonest; they answer different questions.

**Every index is an average.** A national number describes no particular household. A retiree whose spending is weighted toward medical care and property taxes can experience personal inflation well above a headline figure driven by cheaper electronics.

### Scenario: the print that did not match the client

An adviser reports that headline CPI rose 3.1% over the past year while core rose 4.0%, and the client objects that her own costs are up far more than either.

Take the pieces apart. Headline below core means food and energy rose more slowly than the rest of the basket; with a gap this wide — food and energy together are roughly a fifth of the index — those prices very likely fell outright, pulling the headline down while the persistent trend measured by core ran higher. That tells the adviser two things: the central bank is probably still watching an inflation problem despite the friendly headline, and any client whose energy costs are small will not feel the relief that lowered the headline.

Then check the client's own basket. Her largest expenses are health insurance premiums, long-term care, and property tax. None of those is food or energy, all of them are in categories that have historically risen faster than the average, and none benefited from the energy decline. Her experienced inflation is legitimately higher than both published numbers, and her plan should be stress-tested against her own basket rather than a national average. Nothing here is a measurement error; it is what an average always does.

## Purchasing power risk over a retirement

Inflation is the risk that compounds silently, and it is the one clients systematically underestimate because it produces no statement loss.

Apply the **rule of 72**: at 3% inflation, prices double in roughly 72 ÷ 3 = 24 years. A retirement that lasts 25 or 30 years therefore contains at least one full halving of the dollar's purchasing power. A fixed $5,000 monthly pension keeps paying $5,000, and at 3% inflation for 20 years it buys what $2,768 buys today — a **45% loss** of real income, with no down market and no bad decision anywhere in the story. The second worked example carries this arithmetic through and shows how much faster it bites at 4%.

Three planning consequences follow. A long-horizon portfolio needs assets whose cash flows can grow — equities, real assets, inflation-linked bonds — not merely assets that will not lose principal. A **fixed** life annuity guarantees the nominal payment and guarantees nothing about what it will buy. And a client who says her only goal is "not losing money" has named a nominal objective that, held strictly, guarantees a real loss.

## Key benchmark rates

| Rate | What it is | Who sets it |
| --- | --- | --- |
| **Federal funds rate** | Overnight lending of reserves between banks; typically the **lowest** of the tested rates | The market, targeted by the FOMC |
| **Discount rate** | What the Fed charges banks borrowing at its window | The Federal Reserve |
| **Broker call (call money) rate** | What banks charge broker-dealers on loans collateralized by margin securities | Banks; usually slightly above fed funds |
| **Prime rate** | What banks charge their most creditworthy corporate customers; the base for many consumer loans; typically the **highest** of these | Individual banks, moving together |
| **SOFR** | Secured Overnight Financing Rate, based on actual overnight Treasury repurchase transactions; the U.S. replacement for LIBOR | Observed from real transactions |

**LIBOR** was the historic London-based interbank offered rate built on bank estimates rather than actual trades. Following manipulation scandals it was phased out, with remaining U.S. dollar settings ending in **2023**; **SOFR** is the successor benchmark. Expect the exam to test the relationship: fed funds is the floor and prime sits above it, historically around **three percentage points** above the fed funds target.

## The yield curve

The **yield curve** plots yield against maturity for bonds of equivalent credit quality, most often U.S. Treasuries. Holding credit quality constant is the point: any remaining difference in yield is compensation for **time**, not for default risk.

### Normal (positive, upward-sloping)

Long-term yields exceed short-term yields. This is the usual state, because lenders demand extra compensation for tying money up longer and bearing more interest-rate and inflation risk. Signals expectations of continued growth.

### Flat

Short and long yields are roughly equal. Typically a transition — the market is uncertain, or short rates are rising to meet long rates. Often precedes an inversion.

### Inverted (negative, downward-sloping)

**Short-term yields exceed long-term yields.** This is abnormal and historically the most reliable market-based **recession warning**. It usually arises when the central bank has pushed short rates high to fight inflation while investors, expecting slower growth and lower future rates, buy long bonds and drive long yields down.

### Humped

Intermediate maturities yield more than both short and long maturities. Uncommon, and usually a sign of transition or a distortion in a particular part of the curve.

## Term structure theories

- **Expectations theory** — the shape reflects investor expectations of future short-term rates. An upward slope means the market expects rates to rise; an inversion means it expects them to fall.
- **Liquidity preference theory** — investors prefer liquidity and must be paid a **liquidity (term) premium** to buy longer maturities. This explains why the curve is normally upward-sloping even when rates are expected to hold steady.
- **Market segmentation theory** — short, intermediate, and long maturities are separate markets serving different institutional buyers (banks short, pensions and insurers long). Supply and demand in each segment set its yields more or less independently, which can produce odd shapes like the hump. The **preferred habitat** variation says investors will leave their usual segment, but only for enough extra yield.

### Scenario: the curve inverted, and then nothing happened

The curve inverts. A client reads that inversion has preceded every recent U.S. recession and wants to move the entire portfolio to cash immediately.

State the record accurately and then state its limits. Inversion has a strong historical association with subsequent recessions, but the **lead time has varied widely** — from a few months to well beyond a year — and there have been signals that were not followed by a recession at all. There is no fixed interval to plan around.

Now price the cost of acting. Suppose the client sells and the recession arrives 18 months later. Over those 18 months she has forgone equity returns and, historically, some of the strongest equity gains have occurred in the final stretch of an expansion. She must then also be right about when to return, and equity markets have historically bottomed *before* the economy did, meaning the re-entry signal will look like the worst possible moment to buy. Two correct timing calls are required, and the penalty for missing either is large.

The professional response is to treat the signal as information about the distribution of outcomes rather than as a date: shorten credit exposure, rebalance toward the policy allocation, confirm that near-term spending needs are already in short instruments, and leave the long-horizon allocation alone. State it as history, never as prophecy.

## How rate changes flow through

### To bonds

**Bond prices move inversely to interest rates.** When market rates rise, existing bonds paying lower coupons must fall in price so their yield matches what is newly available; when rates fall, existing bonds rise.

The size of the move depends on **duration**. Longer maturities and lower coupons mean **higher duration and greater price sensitivity**. A 30-year zero-coupon bond is the most rate-sensitive instrument on the exam; a short-term high-coupon bond is among the least. This is why the correct answer to "rates are expected to fall" is usually **lengthen maturity and reduce coupon**, and to "rates are expected to rise" is **shorten maturity, ladder, or move to floating-rate instruments**.

### To equities

Three channels, all of them negative when rates rise:

1. **Discounting** — a stock is worth the present value of future cash flows. A higher discount rate lowers that present value, and it hurts **growth stocks** most because more of their value sits far in the future.
2. **Cost of capital** — borrowing gets more expensive, so leveraged firms earn less and marginal projects are shelved.
3. **Competition from bonds** — when safe bonds yield meaningfully more, capital rotates out of equities, and high-dividend defensive stocks that were bought as bond substitutes are hit particularly hard.

Rate-sensitive sectors to remember: **utilities, real estate and REITs, banks (mixed effects), and homebuilders**.

The multiple is where this becomes visible. If a market capitalizes earnings at 20 times when long yields are low, and the required return rises, the same earnings support a lower multiple. A price decline with no change in earnings is the signature of a rate-driven move, and it is why growth indexes fall further than value indexes when yields rise.

### To mortgages and housing

Long fixed mortgage rates track **long-term yields plus a spread**, not the fed funds rate — a distinction the exam can test, since the Fed can cut overnight rates while mortgage rates stay put or rise if long yields do. Adjustable-rate mortgages and home equity lines, by contrast, are tied to short rates and reprice quickly.

The chain into housing runs through the payment. A higher rate raises the monthly payment on the same loan, so a buyer working to a fixed budget qualifies for less, and transaction volume falls before prices do. There is a second-round effect worth knowing: owners holding low fixed-rate mortgages become reluctant to sell and give up that rate, which withdraws supply from the market and can hold prices up even as sales collapse.

### To the dollar

Higher U.S. **real** rates attract foreign capital, which must buy dollars to invest, so the currency tends to strengthen. Note the word real: high nominal rates that merely reflect high inflation do not attract capital, because the purchasing power of the interest is being eaten as fast as it is paid.

## Inflation-protected securities

**TIPS** are Treasury securities whose **principal is adjusted for inflation** using CPI. The **coupon rate is fixed**, but it is applied to the adjusted principal, so the dollar coupon rises with inflation as well. Payments are semiannual.

Four features that carry exam weight:

- **The adjustment runs both ways.** In deflation the principal is written down and the coupon payment shrinks with it.
- **There is a floor at maturity.** At maturity the investor receives the **greater of the inflation-adjusted principal or the original par**, so a lifetime of deflation cannot return less than the original investment. The floor applies to the final principal, not to the interim coupons.
- **Phantom income.** The annual principal accretion is taxable as federal income in the year it accrues, even though no cash is received until maturity. That makes TIPS awkward in a taxable account and natural in an IRA or other tax-deferred account. Like all Treasuries, the interest is exempt from state and local tax.
- **TIPS remove inflation risk, not interest rate risk.** The real yield still moves, and a long TIPS still falls in price when real yields rise.

### Breakeven inflation

The difference between the nominal Treasury yield and the TIPS real yield at the same maturity is the **breakeven inflation rate** — the inflation rate at which the two investments produce the same outcome.

It is both a market forecast and a decision rule. As a forecast it is the market's collective expectation of average inflation over that horizon, which is why it is watched closely. As a decision rule it is personal: if you expect inflation **above** the breakeven, buy TIPS; if **below**, buy the nominal bond. The fourth worked example computes one and applies the rule.

## Two opposing risks, and how immunization balances them

Every coupon bond exposes an investor to two risks that move in **opposite** directions when rates change.

- **Interest rate (price) risk** — the risk that rates rise and the bond's market value falls. It is the binding risk for an investor who must sell before maturity, and it grows with duration.
- **Reinvestment risk** — the risk that rates fall and coupons must be reinvested at lower yields, so the realized return falls short of the promised yield to maturity. It is the binding risk for an investor holding to maturity and depending on the compounding.

Notice they cannot both hurt at once. Rising rates cut price but improve reinvestment; falling rates lift price but degrade reinvestment. That opposition is the whole basis of **immunization**: construct a portfolio whose **duration equals the investment horizon**, and a rate change produces a price loss almost exactly offset by a reinvestment gain, or the reverse. The horizon value is locked in regardless of which way rates move.

Draw the boundaries carefully.

- Immunization matches **duration to horizon**, not maturity to horizon. A 10-year coupon bond has a duration well under 10 years, so holding it against a 10-year liability leaves the investor over-exposed to reinvestment risk.
- Duration drifts. It falls more slowly than calendar time passes and it changes when rates move, so an immunized portfolio must be **rebalanced** to stay matched.
- A **zero-coupon** bond maturing at the horizon is the cleanest case: with no coupons there is nothing to reinvest, so reinvestment risk is zero and duration equals maturity exactly. That is why zeros are the natural instrument for a known future liability such as a tuition payment — and simultaneously the most rate-sensitive holding if the investor might have to sell early.

### Scenario: two buyers, opposite fears

Two clients each buy the same 20-year 5% corporate bond at par.

The first is a foundation funding a building purchase in three years. Its exposure is **price risk**: if rates rise two points, the bond's long duration means a large capital loss, and it must sell into that loss. Its fear is rising rates, and the fix is to shorten duration — a three-year instrument, matched to the horizon.

The second is a 45-year-old accumulating for retirement in twenty years, who intends to spend every coupon on more bonds. Its exposure is **reinvestment risk**: if rates fall to 2%, each $50 coupon compounds at 2% instead of 5% and the realized return over twenty years lands well below the 5% yield to maturity printed on the confirmation. Its fear is falling rates, and the fix is a zero-coupon bond or a duration-matched portfolio.

Same bond, same rate move, opposite outcomes. Which risk matters is determined entirely by **when the money is needed**, which is why the horizon question comes before the security selection question in any suitability analysis.`,
  pitfalls: [
    'Disinflation is a slowing rate of inflation, not falling prices. Only deflation means prices are actually declining.',
    'An inverted yield curve means SHORT-term yields are HIGHER than long-term yields — candidates routinely reverse this because inverted sounds like the curve is lower at the front.',
    'Bond prices move inversely to rates, and the longest-maturity, lowest-coupon bonds move the most. A zero-coupon long bond is the most interest-rate sensitive, not the safest.',
    'The prime rate is set by banks, not the Federal Reserve; only the discount rate is set directly by the Fed.',
    'A positive nominal return can still be a negative real return once inflation is subtracted — do not treat a guaranteed CD as risk-free for a long-horizon client.',
    'LIBOR has been phased out and replaced by SOFR in the United States. Treat any answer choice describing LIBOR as a current, live U.S. benchmark with suspicion.',
    'TIPS have a fixed COUPON RATE and a variable PRINCIPAL. The dollar coupon changes only because the adjusted principal it is applied to changes.',
    'TIPS eliminate inflation risk but not interest rate risk; a long TIPS still loses value when real yields rise.',
    'Immunization matches DURATION to the horizon, not maturity to the horizon, and the match must be rebalanced as duration drifts.',
    'Fixed mortgage rates follow long-term yields, not the fed funds rate. A Fed cut does not automatically lower 30-year mortgage rates.',
  ],
  keyTerms: [
    {
      term: 'Real interest rate',
      definition:
        'The nominal rate less the rate of inflation; the actual change in purchasing power earned by a lender or investor.',
    },
    {
      term: 'Fisher relationship',
      definition:
        'The link between nominal rates, real rates, and expected inflation, approximated as real rate equals nominal rate minus inflation, and stated exactly as (1 + nominal) = (1 + real) × (1 + inflation).',
    },
    {
      term: 'Purchasing power risk',
      definition:
        "The risk that inflation erodes the real value of a fixed stream of payments; the dominant risk in long-term fixed income and cash, and the one that compounds silently over a retirement.",
    },
    {
      term: 'Stagflation',
      definition:
        'A period of stagnant growth and high unemployment occurring together with high inflation, leaving policymakers without a tool that fixes both problems.',
    },
    {
      term: 'Core inflation',
      definition:
        "An inflation measure excluding food and energy. It gives a cleaner read on the persistent trend that policy responds to, and a worse read on what a household actually pays.",
    },
    {
      term: 'Prime rate',
      definition:
        'The interest rate banks charge their most creditworthy corporate borrowers; set by banks and typically the highest of the commonly tested benchmark rates.',
    },
    {
      term: 'SOFR',
      definition:
        'The Secured Overnight Financing Rate, derived from actual overnight Treasury repurchase transactions; the U.S. successor benchmark to LIBOR.',
    },
    {
      term: 'Yield curve',
      definition:
        'A plot of yield against maturity for bonds of equivalent credit quality; its shape may be normal, flat, inverted, or humped.',
    },
    {
      term: 'Inverted yield curve',
      definition:
        'A curve on which short-term yields exceed long-term yields; historically the most reliable market-based signal of an approaching recession, though with a highly variable lead time.',
    },
    {
      term: 'Liquidity preference theory',
      definition:
        'The term structure theory holding that investors demand a premium for committing funds longer, which explains the normally upward-sloping curve.',
    },
    {
      term: 'TIPS',
      definition:
        "Treasury Inflation-Protected Securities: the coupon rate is fixed but the principal adjusts with CPI, so the dollar coupon rises with inflation. At maturity the investor receives the greater of adjusted principal or original par.",
    },
    {
      term: 'Breakeven inflation rate',
      definition:
        'The nominal Treasury yield minus the TIPS real yield at the same maturity; the inflation rate at which the two produce identical outcomes, and the threshold for choosing between them.',
    },
    {
      term: 'Reinvestment risk',
      definition:
        'The risk that coupons must be reinvested at lower rates than the original yield to maturity, reducing realized return. It moves opposite to price risk when rates change.',
    },
    {
      term: 'Immunization',
      definition:
        'Setting portfolio duration equal to the investment horizon so that a rate change produces offsetting price and reinvestment effects, locking in the horizon value.',
    },
  ],
  confusions: [
    {
      dont: 'Disinflation — inflation continuing at a slower pace',
      with: 'Deflation — the general price level actually falling',
    },
    {
      dont: 'The discount rate, set by the Federal Reserve',
      with: 'The prime rate, set by commercial banks for their best customers',
    },
    {
      dont: 'A normal yield curve, where long yields exceed short yields',
      with: 'An inverted yield curve, where short yields exceed long yields and recession risk rises',
    },
    {
      dont: 'Expectations theory, which explains the curve through forecast future short rates',
      with: 'Liquidity preference theory, which explains it through the premium demanded for longer commitments',
    },
    {
      dont: 'Nominal return, the stated percentage gain',
      with: 'Real return, the gain after subtracting inflation',
    },
    {
      dont: 'Interest rate (price) risk, which binds an investor who must sell before maturity and rises with duration',
      with: 'Reinvestment risk, which binds a hold-to-maturity investor and hurts when rates FALL',
    },
    {
      dont: "A TIPS fixed coupon RATE, which never changes",
      with: 'The TIPS dollar coupon PAYMENT, which rises and falls with the inflation-adjusted principal',
    },
  ],
  formulas: [
    {
      name: 'Real interest rate (approximation)',
      formula: 'Real rate = nominal rate − inflation rate',
      note: 'A 5% nominal yield with 3% inflation gives roughly a 2% real return. This is the version used on the exam. It overstates the true real return whenever the nominal yield exceeds inflation, and understates it — overstating the loss — when inflation is the larger of the two.',
    },
    {
      name: 'Fisher equation (exact)',
      formula: '(1 + nominal) = (1 + real) × (1 + inflation)',
      note: 'Rearranged: real = (1 + nominal) / (1 + inflation) − 1. Use it when inflation is high, where the approximation drifts materially.',
    },
    {
      name: 'Purchasing power of a future fixed sum',
      formula: 'Real value = nominal amount / (1 + inflation rate) ^ number of years',
      note: 'The same discounting used for present value, applied to purchasing power rather than to price.',
    },
    {
      name: 'Rule of 72 (for inflation)',
      formula: 'Years for prices to double ≈ 72 / inflation rate in percent',
      note: 'At 3% inflation prices double in about 24 years, which is inside a normal retirement horizon.',
    },
    {
      name: 'Breakeven inflation rate',
      formula: 'Breakeven = nominal Treasury yield − TIPS real yield (same maturity)',
      note: 'Buy TIPS if you expect inflation above the breakeven; buy the nominal bond if you expect it below.',
    },
    {
      name: 'TIPS coupon payment',
      formula: 'Payment = (annual coupon rate / 2) × inflation-adjusted principal',
      note: 'The rate is fixed; only the principal it is applied to changes.',
    },
    {
      name: 'Real after-tax return',
      formula: 'Real after-tax = [(1 + nominal × (1 − tax rate)) / (1 + inflation)] − 1',
      note: 'Tax is applied to the full nominal yield first, then inflation is removed. Reversing the order overstates the result.',
    },
  ],
  workedExamples: [
    {
      title: 'Real return by subtraction and by the exact Fisher relation',
      setup:
        "Case A: a bond yields 6.08% while inflation runs 4.00%. Case B: a bond yields 15.36% while inflation runs 12.00%. Compute the real return both ways in each case and say when the shortcut is safe.",
      steps: [
        "Case A by subtraction: 6.08% − 4.00% = 2.08%.",
        "Case A exactly: 1 + real = (1 + nominal) / (1 + inflation) = 1.0608 / 1.04 = 1.0200, so the real return is 2.00%. Verify by multiplying back: 1.02 × 1.04 = 1.0608. The shortcut overstated by 0.08 percentage points, or 8 basis points.",
        "Case B by subtraction: 15.36% − 12.00% = 3.36%.",
        "Case B exactly: 1.1536 / 1.12 = 1.0300, so the real return is 3.00%. Verify: 1.03 × 1.12 = 1.1536. The shortcut overstated by 0.36 percentage points, or 36 basis points.",
        "See where the error comes from. Expanding (1 + real)(1 + inflation) gives 1 + real + inflation + (real × inflation). Subtraction drops that last cross term. In Case A it is 0.02 × 0.04 = 0.0008 = 8 bp; in Case B it is 0.03 × 0.12 = 0.0036 = 36 bp.",
      ],
      answer:
        "Case A: 2.08% by subtraction, 2.00% exactly. Case B: 3.36% by subtraction, 3.00% exactly. The shortcut is acceptable at low inflation and misleading at high inflation, and in both of these cases — where the nominal yield exceeds inflation — it overstates the real return.",
      watchOut:
        "Dividing the wrong way — 1.04 / 1.0608 − 1 = −1.96% — turns a positive real return into a loss. The nominal factor always goes on top. And never apply the shortcut to a high-inflation scenario and then treat the 3.36% as precise; the real answer is 3.00%, a tenth of the return smaller.",
    },
    {
      title: 'Purchasing power of a fixed pension after twenty years',
      setup:
        "A client will receive a fixed $5,000 per month pension with no cost-of-living adjustment. Assume inflation averages 3.00% per year. What will that payment buy in today's dollars after 20 years, and how much would the payment have to be to preserve today's purchasing power? Then redo it at 4.00%.",
      steps: [
        "Build the compounding factor: 1.03 raised to the 20th power = 1.806111. Prices are 80.6% higher after 20 years.",
        "Discount the fixed payment: $5,000 / 1.806111 = $2,768.38 in today's purchasing power.",
        "Express the loss: $2,768.38 / $5,000 = 0.5537, so 55.37% of the purchasing power remains and 44.63% has been lost.",
        "Find the payment needed to hold purchasing power constant: $5,000 × 1.806111 = $9,030.56 per month in year 20.",
        "Sanity-check with the rule of 72: at 3%, prices double in about 72 / 3 = 24 years. Twenty years is just short of a doubling, so a little more than half the purchasing power should survive — 55.37% fits.",
        "Now at 4.00%: 1.04 to the 20th = 2.191123. Purchasing power = $5,000 / 2.191123 = $2,281.93, only 45.64% of the original, and preserving it would require $5,000 × 2.191123 = $10,955.62 per month.",
      ],
      answer:
        "At 3% inflation the $5,000 payment buys $2,768.38 in today's dollars after 20 years — a 44.63% loss of real income. At 4% it buys $2,281.93, a 54.36% loss. One extra point of inflation costs roughly another tenth of the client's real income.",
      watchOut:
        "Multiplying instead of dividing gives $5,000 × 1.806111 = $9,030.56 and reads as a gain. That figure is the payment REQUIRED in year 20, not the purchasing power of the payment received. A second error is treating inflation as simple rather than compound: 3% × 20 = 60%, implying $2,000 of purchasing power, which overstates the damage by more than $750 a month.",
    },
    {
      title: 'TIPS principal accretion and the coupon it produces',
      setup:
        "An investor buys $10,000 par of a TIPS with a 2.00% fixed coupon rate, paid semiannually. Inflation over the first six-month period is 2.00%, and over the second six-month period 1.00%. Compute both coupon payments and the first-year total return, then compare with a conventional 2.00% Treasury note.",
      steps: [
        "Adjust principal for the first period: $10,000 × 1.02 = $10,200.",
        "First coupon: the semiannual rate is 2.00% / 2 = 1.00%, applied to adjusted principal. $10,200 × 0.01 = $102.00.",
        "Adjust principal again for the second period, compounding on the already-adjusted figure: $10,200 × 1.01 = $10,302.",
        "Second coupon: $10,302 × 0.01 = $103.02.",
        "Total coupons received in year one: $102.00 + $103.02 = $205.02. Principal accretion: $10,302 − $10,000 = $302.00.",
        "Total first-year economic return: $205.02 + $302.00 = $507.02, or $507.02 / $10,000 = 5.0702%.",
        "Compare a conventional $10,000 note at 2.00%: two payments of $10,000 × 0.01 = $100.00, totaling $200.00, with principal fixed at $10,000. The TIPS delivered $5.02 more cash plus $302 of principal growth.",
      ],
      answer:
        "The coupons are $102.00 and $103.02, for $205.02 of cash interest, and principal ends the year at $10,302. Total first-year return is $507.02, or 5.07%, against $200.00 (2.00%) on the conventional note.",
      watchOut:
        "Applying the second period's inflation to original par instead of adjusted principal gives $10,000 × 1.01 = $10,100 and a coupon of $101.00 — the adjustments compound. Applying the full 2.00% annual coupon rate rather than the 1.00% semiannual rate doubles every payment. And remember the $302 of accretion is taxable federal income this year even though no cash was received, which is why TIPS sit better in a tax-deferred account.",
    },
    {
      title: 'Breakeven inflation and which bond to buy',
      setup:
        "A 10-year nominal Treasury yields 4.55%. A 10-year TIPS offers a real yield of 2.00%. What inflation rate makes the two equivalent, and which should a client buy who expects inflation to average 3.50%?",
      steps: [
        "Compute the market convention, a simple difference: 4.55% − 2.00% = 2.55%.",
        "Compute it exactly with the Fisher relation: 1 + breakeven = (1 + nominal) / (1 + real) = 1.0455 / 1.02 = 1.0250, so the exact breakeven is 2.50%. Verify: 1.02 × 1.025 = 1.0455.",
        "Interpret it: at 2.50% average inflation over ten years, the two bonds deliver the same result. Above it the TIPS wins; below it the nominal Treasury wins.",
        "Test the client's 3.50% expectation. The TIPS would return roughly 1.02 × 1.035 − 1 = 5.57% in nominal terms, against a fixed 4.55% on the nominal Treasury. The TIPS wins by about 1.02 percentage points a year.",
        "Test the other side. If inflation instead averaged 2.00%, the TIPS returns roughly 1.02 × 1.02 − 1 = 4.04% nominal, and the nominal Treasury's fixed 4.55% wins.",
      ],
      answer:
        "Breakeven inflation is 2.50% exactly (2.55% by the simple-difference convention). A client expecting 3.50% inflation should buy the TIPS, which would deliver roughly 5.57% nominal against 4.55%.",
      watchOut:
        "Adding the two yields (4.55% + 2.00% = 6.55%) is a common slip and produces a breakeven no economy would reach. Also note that breakeven is a decision rule about EXPECTED inflation, not a guarantee — if realized inflation comes in below the breakeven, the TIPS buyer underperforms even though the security did exactly what it promised.",
    },
    {
      title: 'Real after-tax return on a corporate bond',
      setup:
        "A client in a 35% combined marginal tax bracket holds a corporate bond yielding 6.20%. Inflation is 3.00%. What is the real after-tax return, and would a tax-free municipal bond yielding 4.10% be better?",
      steps: [
        "Apply tax first, to the full nominal coupon. Corporate interest is fully taxable, so the after-tax nominal yield is 6.20% × (1 − 0.35) = 6.20% × 0.65 = 4.03%.",
        "Remove inflation by subtraction for a quick read: 4.03% − 3.00% = 1.03%.",
        "Remove inflation exactly: 1.0403 / 1.03 = 1.0100, so the real after-tax return is exactly 1.00%. Verify: 1.01 × 1.03 = 1.0403.",
        "Now the municipal comparison. The muni pays 4.10% free of federal tax, so its after-tax yield is 4.10%, which already beats the corporate bond's 4.03%.",
        "Confirm with the taxable-equivalent yield: 4.10% / (1 − 0.35) = 4.10% / 0.65 = 6.3077%. A taxable bond would have to yield 6.31% to match, and this one yields only 6.20%.",
        "Real return on the muni: 1.041 / 1.03 − 1 = 1.068%, against 1.00% on the corporate.",
      ],
      answer:
        "The real after-tax return on the corporate bond is 1.00% — the 6.20% headline yield keeps only about one-sixth of its purchasing power once tax and inflation are applied. The municipal bond is better for this client: 4.10% after tax versus 4.03%, or a 6.31% taxable-equivalent yield against 6.20%.",
      watchOut:
        "Reversing the order — subtracting inflation first and then taxing (6.20% − 3.00% = 3.20%, × 0.65 = 2.08%) — roughly doubles the answer. Tax is levied on the entire nominal coupon, including the part that merely compensates for inflation, which is precisely why inflation raises the effective tax burden on a bond investor.",
    },
  ],
};
