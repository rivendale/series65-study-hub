import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'portfolio-strategies',
  title: 'Portfolio Management Styles and Strategies',
  weight: '~3%',
  order: 20,
  summary:
    "Once the profile is built, the adviser has to choose how the portfolio will actually be managed. The exam tests active versus passive, strategic versus tactical allocation, rebalancing discipline, equity and fixed-income style choices, systematic investment plans, and the tax-driven decisions of asset location and loss harvesting.",
  body: `## Active Versus Passive Management

**Active management** tries to beat a benchmark through security selection, sector weighting, or market timing. It costs more: higher expense ratios, higher turnover, and higher **tax drag** from realized short-term gains. **Passive management** buys and holds the benchmark — low cost, low turnover, tax-efficient, and it accepts market returns by design.

The argument for passive rests on **semi-strong EMH** — if public information is already priced, security selection cannot reliably add value — and on arithmetic: in aggregate investors hold the market, so the average active dollar earns the market return **before** costs and **less than** the market after costs. The counterargument is that markets are inefficient in pockets (small caps, emerging markets, distressed debt, municipals) and that active managers can control risk and taxes deliberately. Most advisers land in between: index the efficient, liquid parts of the market and spend the fee budget where inefficiency plausibly exists.

## Asset Allocation

**Asset allocation** — the split across equities, fixed income, cash, and alternatives — is the dominant determinant of a portfolio's risk and return variability over time. Security selection matters far less.

### Strategic Asset Allocation

The **long-term target mix** set from the client's objectives, horizon, and risk tolerance, written into the IPS and held through cycles — for example 60% equity, 35% fixed income, 5% cash with permitted ranges. It is deliberately **passive with respect to market forecasts**: you change it because the **client** changed, not because you dislike this year's outlook.

### Tactical Asset Allocation

Short- to intermediate-term deviations from the strategic target to exploit a perceived opportunity — overweighting equities when they look cheap, shortening duration when rates look likely to rise. Tactical shifts are **active market timing**, are bounded by the IPS ranges, and are expected to **revert to the strategic target**.

### Dynamic Allocation

**Dynamic asset allocation** adjusts the mix as circumstances change, without necessarily reverting to a fixed target. The **glide path** in a target-date fund is the familiar case: equity exposure declines mechanically as the target year approaches.

## Rebalancing

Rebalancing sells what has risen and buys what has lagged, returning the portfolio to target. It is a **risk-control** discipline, not a return-enhancement technique — it prevents drift into a risk level the client never agreed to.

- **Calendar rebalancing** — on a fixed schedule (quarterly, semiannually, annually). Simple, but it can trade when no trade is needed or wait while drift builds.
- **Threshold (percentage-band) rebalancing** — when an asset class moves outside a band, for example plus or minus 5 percentage points. More responsive, requires monitoring.
- **Hybrid** — check on a calendar, trade only if a band is breached. Common in practice.

Weigh transaction costs and, in **taxable** accounts, realized capital gains: prefer rebalancing with **new contributions**, **dividends**, and **withdrawals**, and do the trading inside **tax-deferred** accounts. The behavioral value is the point — rebalancing forces the investor to **sell high and buy low** at exactly the moments emotion argues the opposite.

## Equity Strategies

- **Buy and hold** — minimal turnover and cost, defers capital gains indefinitely. Combined with indexing, the most tax-efficient approach available.
- **Core and satellite** — a large, low-cost **indexed core** with small **active satellites** in inefficient niches. Controls total cost while allowing conviction bets.
- **Growth investing** — high earnings growth, high P/E, little or no dividend. More volatile; leads in expansions.
- **Value investing** — low P/E, low price-to-book, often higher dividend yield, purchased below intrinsic worth. The risk is a **value trap** where cheap stays cheap.
- **Blend** and **GARP** — a mix of both styles, or growth characteristics bought with a valuation discipline.

### Top-Down Versus Bottom-Up

**Top-down** starts with the macro picture — economy, then sector, then security. **Bottom-up** ignores the macro and researches companies one at a time on their own fundamentals, and may end up concentrated in a sector purely because that is where the attractive companies were.

### Sector Rotation

A top-down tactical strategy shifting weights across the **business cycle**:

| Cycle stage | Typically favored |
| --- | --- |
| **Early expansion / recovery** | Consumer discretionary, financials, industrials, transportation |
| **Mid to late expansion** | Technology, capital goods, basic materials, energy |
| **Peak / early contraction** | Energy, staples begin to lead |
| **Recession / trough** | **Defensive** — consumer staples, utilities, health care |

**Cyclical** industries (autos, housing, luxury goods) track the economy closely; **defensive** or **non-cyclical** industries (food, pharmaceuticals, utilities) hold up because demand persists in any economy.

## Systematic Investment Plans

**Dollar-cost averaging (DCA)** invests a **fixed dollar amount** at regular intervals. Because the fixed amount buys more shares at low prices and fewer at high prices, the **average cost per share is lower than the average price per share**. DCA removes timing decisions, but it does **not** guarantee a profit and does **not** protect against loss in a persistently declining market.

**Constant dollar plan** — keep a fixed **dollar amount** in the risky asset, moving the excess to a reserve when it grows and adding when it shrinks. **Constant ratio plan** — keep a fixed **percentage** mix, trading to restore the ratio; this is rebalancing formalized. Both force selling into strength and buying into weakness.

## Fixed-Income Strategies

- **Laddering** — equal amounts maturing at regular intervals. Spreads reinvestment risk across rate environments, produces steady liquidity, and requires no forecasting. The standard recommendation for a conservative client.
- **Barbell** — **short** and **long** maturities with little in the middle. The short end provides liquidity, the long end captures yield. More rate-sensitive and more active.
- **Bullet** — cluster maturities around a **single target date** to fund a known liability, such as tuition in 2034.
- **Immunization** — match portfolio **duration** to the investment **horizon** so price risk and reinvestment risk offset. Requires periodic re-immunization because duration and horizon do not decline at the same rate.
- **Cash flow matching (dedication)** — buy bonds whose coupons and maturities line up with the actual liability stream.
- **Duration management** — shorten duration when rates are expected to rise, lengthen when they are expected to fall. Active and forecast-dependent.

## Tax-Aware Portfolio Management

### Asset Location Versus Asset Allocation

**Asset allocation** decides *what* you own. **Asset location** decides *which account* holds it. The general rule:

- **Tax-deferred accounts (traditional IRA, 401(k))** — hold **tax-inefficient** assets: taxable bonds, REITs, high-turnover active funds, high-yield debt. Their ordinary income is sheltered.
- **Taxable accounts** — hold **tax-efficient** assets: broad index funds and ETFs, individual stocks held long term, and **municipal bonds** (which belong nowhere else).
- **Roth accounts** — hold the **highest expected growth** assets, since all appreciation comes out **tax-free** and there are no lifetime RMDs for the original owner.

Placing municipal bonds in an IRA is the standard wrong answer on this topic.

### Tax-Loss Harvesting

Selling a position at a loss to realize the deduction, then reinvesting the proceeds. Realized losses offset realized gains dollar for dollar, up to **$3,000** of net capital loss can offset ordinary income per year, and the remainder is **carried forward indefinitely**. The **wash sale rule** disallows the loss if a **substantially identical** security is purchased within **30 days before or after** the sale — a 61-day window — including purchases in an IRA or by a spouse; the disallowed loss is added to the replacement shares' basis. Pair harvesting with a replacement holding that keeps market exposure without being substantially identical.

## Managing Concentrated Positions

For a client with a large low-basis holding: **sell gradually** to spread gains across tax years; **donate appreciated shares** to charity or a donor-advised fund for a fair-market-value deduction with no gain recognized; use an **exchange fund** that pools concentrated positions from multiple investors; write **covered calls** to generate income and exit gradually; hedge with **protective puts or collars**; or **borrow** against the position rather than selling. Rule 144 volume and holding-period limits apply to control and restricted stock, and insiders often sell through **Rule 10b5-1 plans**.

## Capital Preservation Near Retirement

Sequence-of-returns risk — a bad market early in the withdrawal period — does permanent damage, so strategy shifts as retirement approaches:

- Reduce equity exposure gradually along a **glide path**, without going to all cash and accepting inflation risk.
- Maintain a **cash and short-bond bucket** covering one to three years of withdrawals so no equity sale is forced in a downturn.
- Use **laddered bonds or immunization** for known near-term liabilities, and **TIPS** against a 30-year retirement.
- Consider a guaranteed income floor — Social Security claiming strategy or an annuitized slice — for essential expenses.`,
  pitfalls: [
    "Dollar-cost averaging lowers average cost per share relative to average price per share, but it does not guarantee a profit and does not prevent loss in a declining market. Claiming otherwise is a communications violation.",
    "Rebalancing is a risk-control tool, not a return-enhancement tool. Sell the assumption that it reliably increases returns, and be alert to realized gains when rebalancing a taxable account.",
    "Municipal bonds belong in taxable accounts. Placing them in an IRA or 401(k) wastes the tax exemption and converts tax-free income into ordinary income on withdrawal.",
    "The wash sale window is 61 days — 30 days before and 30 days after the sale — and it includes repurchases inside an IRA or by a spouse, which cannot be cured by later selling the replacement.",
    "Strategic allocation changes because the client changes; tactical allocation changes because the market view changes. A question describing a shift based on an economic forecast is describing tactical allocation.",
    "Immunization requires periodic re-immunization. Duration and the remaining horizon do not decline at the same rate, so a portfolio matched once does not stay matched.",
    "A bond ladder spreads reinvestment risk but does not eliminate interest rate risk on the longer rungs, and it will not protect a client who must liquidate the whole ladder early.",
  ],
  keyTerms: [
    {
      term: 'Strategic asset allocation',
      definition:
        "The long-term target asset mix derived from the client's objectives and constraints, documented in the IPS and changed when the client changes rather than when markets move.",
    },
    {
      term: 'Tactical asset allocation',
      definition:
        'Temporary, bounded deviations from the strategic target intended to exploit a short-term market view, with an expectation of reverting to target.',
    },
    {
      term: 'Threshold rebalancing',
      definition:
        'Restoring target weights only when an asset class drifts outside a defined percentage band, rather than on a fixed calendar schedule.',
    },
    {
      term: 'Core and satellite',
      definition:
        'A structure pairing a large low-cost indexed core with smaller active satellite positions in less efficient market segments.',
    },
    {
      term: 'Dollar-cost averaging',
      definition:
        'Investing a fixed dollar amount at regular intervals so that more shares are bought at low prices, yielding an average cost per share below the average price per share.',
    },
    {
      term: 'Immunization',
      definition:
        'Matching portfolio duration to the investment horizon so that price risk and reinvestment risk offset, protecting a target terminal value.',
    },
    {
      term: 'Barbell strategy',
      definition:
        'A fixed-income structure concentrating holdings in short and long maturities with little in intermediate maturities.',
    },
    {
      term: 'Asset location',
      definition:
        'The decision about which account type holds each asset class, placing tax-inefficient assets in tax-deferred accounts and tax-efficient assets in taxable accounts.',
    },
    {
      term: 'Wash sale rule',
      definition:
        'The rule disallowing a capital loss when a substantially identical security is purchased within 30 days before or after the sale, with the loss added to the replacement basis.',
    },
  ],
  confusions: [
    {
      dont: 'Strategic asset allocation — the long-term target driven by client circumstances',
      with: 'Tactical asset allocation — short-term deviations driven by a market forecast',
    },
    {
      dont: 'Asset allocation — which asset classes the client owns',
      with: 'Asset location — which type of account holds each asset for tax efficiency',
    },
    {
      dont: 'Constant dollar plan — hold a fixed dollar amount in the risky asset',
      with: 'Constant ratio plan — hold a fixed percentage mix and rebalance to it',
    },
    {
      dont: 'Laddering — equally spaced maturities that spread reinvestment risk',
      with: 'Barbell — short and long maturities only, with a deliberate rate view',
    },
    {
      dont: 'Immunization — matching duration to horizon so price and reinvestment risk offset',
      with: 'Cash flow matching — buying bonds whose actual coupons and maturities pay the liabilities directly',
    },
  ],
};
