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

The exact form, worth recognizing but rarely required arithmetically:

**(1 + nominal) = (1 + real) × (1 + inflation)**

## Four words that sound alike

- **Inflation** — the general price level is rising; each dollar buys less.
- **Deflation** — the general price level is falling. Sounds pleasant, is dangerous: debt burdens grow in real terms, consumers delay purchases waiting for lower prices, and the demand shortfall feeds on itself.
- **Disinflation** — prices are **still rising, but more slowly**. The inflation rate falls from 6% to 3%. This is not deflation.
- **Stagflation** — the unpleasant combination of **stagnant growth with high unemployment and high inflation**. It is a policy trap: easing to fix unemployment worsens inflation, and tightening to fix inflation worsens unemployment.

**Hyperinflation** is an extreme, accelerating loss of currency value.

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

The **yield curve** plots yield against maturity for bonds of equivalent credit quality, most often U.S. Treasuries. Its shape is one of the most-watched economic signals.

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

## How rate changes flow through

### To bonds

**Bond prices move inversely to interest rates.** When market rates rise, existing bonds paying lower coupons must fall in price so their yield matches what is newly available; when rates fall, existing bonds rise.

The size of the move depends on **duration**. Longer maturities and lower coupons mean **higher duration and greater price sensitivity**. A 30-year zero-coupon bond is the most rate-sensitive instrument on the exam; a short-term high-coupon bond is among the least. This is why the correct answer to "rates are expected to fall" is usually **lengthen maturity and reduce coupon**, and to "rates are expected to rise" is **shorten maturity, ladder, or move to floating-rate instruments**.

### To equities

Three channels, all of them negative when rates rise:

1. **Discounting** — a stock is worth the present value of future cash flows. A higher discount rate lowers that present value, and it hurts **growth stocks** most because more of their value sits far in the future.
2. **Cost of capital** — borrowing gets more expensive, so leveraged firms earn less and marginal projects are shelved.
3. **Competition from bonds** — when safe bonds yield meaningfully more, capital rotates out of equities, and high-dividend defensive stocks that were bought as bond substitutes are hit particularly hard.

Rate-sensitive sectors to remember: **utilities, real estate and REITs, banks (mixed effects), and homebuilders**.`,
  pitfalls: [
    'Disinflation is a slowing rate of inflation, not falling prices. Only deflation means prices are actually declining.',
    'An inverted yield curve means SHORT-term yields are HIGHER than long-term yields — candidates routinely reverse this because inverted sounds like the curve is lower at the front.',
    'Bond prices move inversely to rates, and the longest-maturity, lowest-coupon bonds move the most. A zero-coupon long bond is the most interest-rate sensitive, not the safest.',
    'The prime rate is set by banks, not the Federal Reserve; only the discount rate is set directly by the Fed.',
    'A positive nominal return can still be a negative real return once inflation is subtracted — do not treat a guaranteed CD as risk-free for a long-horizon client.',
    'LIBOR has been phased out and replaced by SOFR in the United States. Treat any answer choice describing LIBOR as a current, live U.S. benchmark with suspicion.',
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
        'The link between nominal rates, real rates, and expected inflation, approximated as real rate equals nominal rate minus inflation.',
    },
    {
      term: 'Stagflation',
      definition:
        'A period of stagnant growth and high unemployment occurring together with high inflation, leaving policymakers without a tool that fixes both problems.',
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
        'A curve on which short-term yields exceed long-term yields; historically the most reliable market-based signal of an approaching recession.',
    },
    {
      term: 'Liquidity preference theory',
      definition:
        'The term structure theory holding that investors demand a premium for committing funds longer, which explains the normally upward-sloping curve.',
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
  ],
  formulas: [
    {
      name: 'Real interest rate (approximation)',
      formula: 'Real rate = nominal rate − inflation rate',
      note: 'A 5% nominal yield with 3% inflation gives roughly a 2% real return. This is the version used on the exam.',
    },
    {
      name: 'Fisher equation (exact)',
      formula: '(1 + nominal) = (1 + real) × (1 + inflation)',
      note: 'Solve for the real rate when precision matters; the approximation drifts only when rates are high.',
    },
  ],
};
