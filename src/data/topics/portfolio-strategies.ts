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

### The Honest Case for Each

The case for **passive** is arithmetic before it is theoretical. If a market returns 8%, an index fund charging 0.04% delivers 7.96%. An active fund charging 0.75%, with turnover adding another 0.30% of trading and tax cost, must gross **9.01%** merely to tie — it starts every year more than a full point behind.

The case for **active** assumes the index is well built, and sometimes it is not: cap-weighted equity indexes overweight whatever has already risen, bond indexes overweight the most indebted issuers, and municipals and distressed debt have no serviceable passive analogue. The exam-safe framing: the **burden of proof sits with active management**, and cost, turnover, and after-tax result decide whether it earns its fee.

## Asset Allocation

**Asset allocation** — the split across equities, fixed income, cash, and alternatives — is the dominant determinant of a portfolio's risk and return variability over time. Security selection matters far less.

The reason: asset classes differ from each other far more than securities differ within a class. Most of the variability in a result therefore traces to **how much was in equities at all**, not which equities.

### Strategic Asset Allocation

The **long-term target mix** set from the client's objectives, horizon, and risk tolerance, written into the IPS and held through cycles — for example 60% equity, 35% fixed income, 5% cash with permitted ranges. It is deliberately **passive with respect to market forecasts**: you change it because the **client** changed, not because you dislike this year's outlook.

Legitimate triggers for revising the target: the horizon shortened, capacity for loss changed, or the objective changed from accumulation to income. "Stocks look expensive" is not on the list.

### Tactical Asset Allocation

Short- to intermediate-term deviations from the strategic target to exploit a perceived opportunity — overweighting equities when they look cheap, shortening duration when rates look likely to rise. Tactical shifts are **active market timing**, are bounded by the IPS ranges, and are expected to **revert to the strategic target**.

Tactical discipline needs three things fixed in advance: the permitted band, the evidence that justifies moving inside it, and the condition that **ends** the trade. Without an exit rule a tactical overweight quietly becomes the new strategic allocation.

### Dynamic Allocation

**Dynamic asset allocation** adjusts the mix as circumstances change, without necessarily reverting to a fixed target. The **glide path** in a target-date fund is the familiar case: equity exposure declines mechanically as the target year approaches.

### Scenario: Strategic Change or Tactical Trade?

A 58-year-old with a 60/40 target calls in March. She has read that a recession is coming and wants to cut equity to 30%. In passing she mentions her employer offered a severance package and she is considering retiring at 60 rather than 65.

Two requests, one call. The recession forecast is a **market view** — acting on it is tactical, it belongs inside the IPS bands, and 30% is nowhere near a 5-point band around 60%. The retirement date is a **client fact**, and pulling the horizon in five years genuinely changes the risk the portfolio can carry; that is a strategic revision made by amending the IPS. Decline the forecast-driven move; reopen the profile because the horizon changed.

## Rebalancing

Rebalancing sells what has risen and buys what has lagged, returning the portfolio to target. It is a **risk-control** discipline, not a return-enhancement technique — it prevents drift into a risk level the client never agreed to.

| Discipline | Trigger | Strength | Weakness |
| --- | --- | --- | --- |
| **Calendar** | A fixed date (quarterly, annually) | Simple, automatable, documentable | Trades when nothing drifted; ignores drift between dates |
| **Threshold (band)** | Drift outside a band, e.g. plus or minus 5 points | Responds to what actually happened | Needs monitoring; trades often in volatile markets |
| **Hybrid** | A date, but only if a band is breached | Bounded monitoring cost, drift controlled | Drift persists between check dates |
| **Cash flow** | A contribution or withdrawal | Realizes no gains — the cheapest form | Needs flows large relative to the drift |

Weigh transaction costs and, in **taxable** accounts, realized capital gains: prefer rebalancing with **new contributions**, **dividends**, and **withdrawals**, and do the trading inside **tax-deferred** accounts. The behavioral value is the point — rebalancing forces the investor to **sell high and buy low** at exactly the moments emotion argues the opposite.

### Rebalancing Versus Performance Chasing

Rebalancing sells the winner and buys the laggard on a rule set in advance; performance chasing does the reverse, using the same information and feeling equally sensible. What separates them is not the direction of the trade but **whether the rule existed before the returns were known**. The corollary: a 60/40 portfolio nobody rebalances becomes an 80/20 portfolio through a long bull market, and the client discovers it in the drawdown.

### Scenario: Rebalancing a Taxable Account Without a Tax Bill

A client's $1,200,000 taxable account has drifted to 71% equity against a 60% target. Selling the $132,000 of equity needed to restore the target would realize about $90,000 of long-term gain — roughly $13,500 of tax at 15%. Work the cheaper tools first: route this year's $40,000 of contributions to bonds; stop reinvesting equity dividends and send the $18,000 of distributions to the bond sleeve; take the $30,000 of planned withdrawals from equity; do the residual trading inside the IRA, where rebalancing has no tax consequence. Only what remains is sold in the taxable account, **highest-basis lots first**. The same target weight can cost $13,500 or nothing depending on which dollars do the work.

## Equity Strategies

- **Buy and hold** — minimal turnover and cost, defers capital gains indefinitely. Combined with indexing, the most tax-efficient approach available.
- **Core and satellite** — a large, low-cost **indexed core** with small **active satellites** in inefficient niches. Controls total cost while allowing conviction bets.
- **Growth investing** — high earnings growth, high P/E, little or no dividend. More volatile; leads in expansions.
- **Value investing** — low P/E, low price-to-book, often higher dividend yield, purchased below intrinsic worth. The risk is a **value trap** where cheap stays cheap.
- **Blend** and **GARP** — a mix of both styles, or growth characteristics bought with a valuation discipline.

The styles are bets about where return comes from. **Growth** pays a high multiple for earnings expected later, so its value sits in distant cash flows — making it unusually sensitive to rates and to any slippage in the growth rate. **Value** buys a low multiple believing the market over-punished a temporary problem; its risk is that the problem is permanent, in which case the stock was never cheap.

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

**Value averaging** targets a portfolio **value** on a schedule rather than a fixed contribution — say the account should be $1,000 higher each month. If it is already $1,400 ahead the investor adds only $600; if it is $200 behind the investor adds $1,200. It buys weakness harder than DCA, but the required contribution is unpredictable.

### Dollar-Cost Averaging Versus Lump Sum

If markets rise more often than they fall, investing a lump sum immediately produces a **higher expected ending value** than staging it, because the money spends more time invested. DCA is not primarily a return strategy — it is a **regret-management** strategy, for the client who invests $400,000 on Monday, watches it fall 15% by Friday, and abandons the plan. Staging in over three to twelve months buys the discipline to stay invested, which is worth more than the small expected return surrendered. Say that plainly rather than claiming DCA produces superior returns.

## Fixed-Income Strategies

- **Laddering** — equal amounts maturing at regular intervals. Spreads reinvestment risk across rate environments, produces steady liquidity, and requires no forecasting. The standard recommendation for a conservative client.
- **Barbell** — **short** and **long** maturities with little in the middle. The short end provides liquidity, the long end captures yield. More rate-sensitive and more active.
- **Bullet** — cluster maturities around a **single target date** to fund a known liability, such as tuition in 2034.
- **Immunization** — match portfolio **duration** to the investment **horizon** so price risk and reinvestment risk offset. Requires periodic re-immunization because duration and horizon do not decline at the same rate.
- **Cash flow matching (dedication)** — buy bonds whose coupons and maturities line up with the actual liability stream.
- **Duration management** — shorten duration when rates are expected to rise, lengthen when they are expected to fall. Active and forecast-dependent.

### Why Immunization Works

A rise in rates drives bond **prices down** immediately and the return on **reinvested coupons up** for the rest of the holding period. When duration equals the horizon those effects are roughly equal and cancel, protecting the terminal value whichever way rates moved. Duration **longer** than the horizon means price risk dominates; **shorter** means reinvestment risk dominates. Re-immunization follows from the same mechanism: after a year the horizon is one year shorter, but duration shortens by less and can even lengthen when rates fall.

## Tax-Aware Portfolio Management

### Asset Location Versus Asset Allocation

**Asset allocation** decides *what* you own. **Asset location** decides *which account* holds it. The general rule:

- **Tax-deferred accounts (traditional IRA, 401(k))** — hold **tax-inefficient** assets: taxable bonds, REITs, high-turnover active funds, high-yield debt. Their ordinary income is sheltered.
- **Taxable accounts** — hold **tax-efficient** assets: broad index funds and ETFs, individual stocks held long term, and **municipal bonds** (which belong nowhere else).
- **Roth accounts** — hold the **highest expected growth** assets, since all appreciation comes out **tax-free** and there are no lifetime RMDs for the original owner.

Placing municipal bonds in an IRA is the standard wrong answer on this topic.

Asset location looks like a rounding error and is not. Moving a bond sleeve from a taxable account into an IRA changes nothing about this year's return — it changes the **rate applied to that income every year the client holds it**. A 5% taxable yield in a 35% bracket nets 3.25%; sheltered, the same bond compounds at the full 5%. On $400,000 over 20 years that is about $1,061,000 against about $758,000 — roughly $303,000 of extra accumulation, from changing nothing about what the client owns or the risk carried.

### Tax-Loss Harvesting

Selling a position at a loss to realize the deduction, then reinvesting the proceeds. Realized losses offset realized gains dollar for dollar, up to **$3,000** of net capital loss can offset ordinary income per year, and the remainder is **carried forward indefinitely**. The **wash sale rule** disallows the loss if a **substantially identical** security is purchased within **30 days before or after** the sale — a 61-day window — including purchases in an IRA or by a spouse; the disallowed loss is added to the replacement shares' basis. Pair harvesting with a replacement holding that keeps market exposure without being substantially identical.

## Managing Concentrated Positions

For a client with a large low-basis holding: **sell gradually** to spread gains across tax years; **donate appreciated shares** to charity or a donor-advised fund for a fair-market-value deduction with no gain recognized; use an **exchange fund** that pools concentrated positions from multiple investors; write **covered calls** to generate income and exit gradually; hedge with **protective puts or collars**; or **borrow** against the position rather than selling. Rule 144 volume and holding-period limits apply to control and restricted stock, and insiders often sell through **Rule 10b5-1 plans**.

## When to Change an Allocation and When to Hold

- **Change the target** when a client fact changed — horizon, liquidity need, income, dependents, health, employment.
- **Change the holdings** for structural reasons — a position grew to dominate, a fund drifted from its mandate.
- **Rebalance**, which is not a change of allocation at all, when drift breaches the band.
- **Hold** when the only new input is a forecast, a headline, a strong recent return, or fear. None is a fact about the client.

The hard case is the client whose risk tolerance "changed" halfway through a 25% drawdown. Something did change — usually the **discovery** of a true tolerance that was always lower than the questionnaire suggested, arriving at the worst moment to act on it. Reduce risk if the client genuinely cannot hold the position, but as a documented change to the target with a written path back, not a liquidation to cash with no re-entry rule. A client moved to cash in a panic and left there has converted a temporary loss into a permanent one.

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
  workedExamples: [
    {
      title: 'Threshold rebalancing — the dollar trade back to target',
      setup:
        "A client's IPS sets a 60% equity / 40% fixed income target with a plus-or-minus 5 percentage point band. The account started the year at $700,000 exactly on target: $420,000 equity, $280,000 fixed income. Over the year equity returned +36% and fixed income returned −4%. Determine whether a rebalancing trade is required and, if so, its size.",
      steps: [
        'Step 1 — grow the equity sleeve: $420,000 × 1.36 = $571,200.',
        'Step 2 — grow the fixed income sleeve: $280,000 × 0.96 = $268,800.',
        'Step 3 — total portfolio value now: $571,200 + $268,800 = $840,000.',
        'Step 4 — compute the current equity weight: $571,200 ÷ $840,000 = 0.68, or 68%.',
        'Step 5 — test the band. The band runs from 55% to 65%. At 68% the portfolio is 3 points outside the upper edge, so a trade is required.',
        'Step 6 — compute the target dollar amount using the CURRENT total: 60% × $840,000 = $504,000 of equity.',
        'Step 7 — the trade: $571,200 − $504,000 = $67,200 of equity sold, and the same $67,200 bought in fixed income.',
        'Step 8 — verify. Fixed income becomes $268,800 + $67,200 = $336,000, and $336,000 ÷ $840,000 = 0.40 = 40%. Equity is $504,000 ÷ $840,000 = 60%. Back on target.',
        'Step 9 — shortcut check: the overweight is 68% − 60% = 8 percentage points, and 8% × $840,000 = $67,200. Same answer.',
      ],
      answer:
        'The equity weight has drifted to 68%, breaching the 65% upper band, so $67,200 of equity is sold and $67,200 of fixed income is bought, restoring exactly 60/40 on the new $840,000 balance.',
      watchOut:
        "Rebalancing back to the BAND EDGE instead of the target. Trading to 65% requires only $571,200 − (0.65 × $840,000) = $25,200 and leaves the portfolio permanently overweight equity. The other frequent error is computing the target off the ORIGINAL $700,000: 60% × $700,000 = $420,000 implies a $151,200 sale, which would drop equity to 50% of the current balance. The target percentage always applies to the current total.",
    },
    {
      title: 'Dollar cost averaging — average cost per share versus average price per share',
      setup:
        'A client invests $600 on the first business day of each quarter into the same fund. The four purchase prices were $20, $15, $12, and $24 per share. Compute the average cost per share and the average price per share, and explain why they differ.',
      steps: [
        'Step 1 — shares bought at $20: $600 ÷ $20 = 30 shares.',
        'Step 2 — shares bought at $15: $600 ÷ $15 = 40 shares.',
        'Step 3 — shares bought at $12: $600 ÷ $12 = 50 shares.',
        'Step 4 — shares bought at $24: $600 ÷ $24 = 25 shares.',
        'Step 5 — total shares: 30 + 40 + 50 + 25 = 145 shares. Total invested: 4 × $600 = $2,400.',
        'Step 6 — average COST per share = total dollars ÷ total shares = $2,400 ÷ 145 = $16.55.',
        'Step 7 — average PRICE per share = the simple mean of the four quotes = ($20 + $15 + $12 + $24) ÷ 4 = $71 ÷ 4 = $17.75.',
        'Step 8 — the gap: $17.75 − $16.55 = $1.20 per share. The fixed dollar amount bought 50 shares at the $12 price but only 25 at the $24 price, so the cheap prices carry more weight in the cost calculation than in the simple average.',
        'Step 9 — value the position at the closing $24 price: 145 × $24 = $3,480 against $2,400 invested, a gain of $1,080, or 45%.',
      ],
      answer:
        'Average cost per share is $16.55; average price per share is $17.75. Cost is $1.20 lower because a fixed dollar amount automatically buys more shares when the price is low and fewer when it is high.',
      watchOut:
        "Treating the $17.75 average PRICE as the cost basis. That values the 145 shares at 145 × $17.75 = $2,573.75 — $173.75 more than the $2,400 actually invested — and understates the reported gain by the same amount. Also resist the claim that DCA guarantees a profit: if the final price had been $10, the position would be worth 145 × $10 = $1,450 on $2,400 invested, a loss of $950 despite a lower average cost.",
    },
    {
      title: 'Constant ratio plan versus buy and hold through a decline and recovery',
      setup:
        'Two clients each start with $100,000 split 50/50 between a stock fund and a bond fund. Assume the bond fund returns exactly 0% throughout. In period 1 the stock fund falls 40%. In period 2 it recovers all the way back to its original price. Client A follows a 50/50 constant ratio plan and rebalances at the end of period 1. Client B buys and holds. Compare the ending values.',
      steps: [
        'Step 1 — after period 1, both stock sleeves are worth $50,000 × 0.60 = $30,000, and both bond sleeves are still $50,000. Each portfolio totals $80,000.',
        'Step 2 — Client A rebalances to 50/50 on the new $80,000: $40,000 stock and $40,000 bonds. That means buying $10,000 of stock with bond money, at the depressed price.',
        'Step 3 — size the recovery. Getting back to the original price from 60% of it requires a gain of 1 ÷ 0.60 = 1.6667, that is, +66.67%. A 40% loss needs a 66.67% gain to break even, not a 40% gain.',
        'Step 4 — Client A after period 2: stock $40,000 × 1.6667 = $66,666.67, bonds $40,000. Total = $106,666.67.',
        'Step 5 — Client B after period 2: stock $30,000 × 1.6667 = $50,000, bonds $50,000. Total = $100,000 — exactly where it started, since the stock simply returned to its original price.',
        'Step 6 — the constant ratio advantage: $106,666.67 − $100,000 = $6,666.67, produced entirely by having bought $10,000 more stock at the bottom.',
        'Step 7 — rebalance again at the end of period 2: half of $106,666.67 is $53,333.33, so Client A now SELLS $66,666.67 − $53,333.33 = $13,333.34 of stock. The discipline runs in both directions.',
        'Step 8 — see the limit. If period 2 had brought a further 40% decline instead of a recovery, Client A would hold $40,000 × 0.60 + $40,000 = $64,000 while Client B would hold $30,000 × 0.60 + $50,000 = $68,000. The constant ratio plan would be $4,000 WORSE.',
      ],
      answer:
        'The constant ratio plan ends at $106,666.67 against $100,000 for buy and hold — a $6,666.67 advantage in a market that fell and fully recovered. In a market that keeps trending in one direction the same discipline underperforms, as the $64,000 versus $68,000 comparison shows.',
      watchOut:
        'Assuming a 40% decline is undone by a 40% gain. Using +40% gives Client A $40,000 × 1.40 + $40,000 = $96,000 and makes the plan look like a loser, when the stock has not actually recovered at that point. Percentage losses and the gains that reverse them are never symmetric. The second error is concluding that constant ratio plans always beat buy and hold — they win in oscillating markets and lose in trending ones.',
    },
    {
      title: 'Tax-loss harvesting — the tax saved now and the basis carried forward',
      setup:
        'A client bought 1,000 shares of an equity fund for $52,000 fourteen months ago. The position is now worth $34,000. Earlier this year the client realized $12,000 of long-term capital gains. The client is in the 35% ordinary bracket and the 15% long-term capital gains bracket. The client sells the losing position and immediately buys a different fund tracking a different index for the same $34,000. Compute the current-year tax benefit and the future consequence.',
      steps: [
        'Step 1 — realize the loss: $34,000 − $52,000 = −$18,000. Held more than one year, so it is a long-term loss.',
        'Step 2 — the replacement is a different fund tracking a different index, so it is not substantially identical and the wash sale rule does not disallow the loss.',
        'Step 3 — net against realized gains first: $18,000 of loss absorbs the entire $12,000 long-term gain. Tax saved at 15%: 0.15 × $12,000 = $1,800.',
        'Step 4 — remaining net loss: $18,000 − $12,000 = $6,000.',
        'Step 5 — apply the ordinary-income offset, capped at $3,000 per year: $3,000 reduces ordinary income at 35%. Tax saved: 0.35 × $3,000 = $1,050.',
        'Step 6 — current-year benefit: $1,800 + $1,050 = $2,850.',
        'Step 7 — carryforward: $6,000 − $3,000 = $3,000, retaining long-term character, carried forward indefinitely.',
        'Step 8 — the basis consequence. The replacement fund has a basis of $34,000, not $52,000. If it later recovers to $52,000 and is sold, the gain is $52,000 − $34,000 = $18,000, taxed at 15% = $2,700 — a gain that would not have existed had the client simply held the original position.',
        'Step 9 — read the trade honestly: $2,850 saved now (plus a $3,000 carryforward still to be used) against roughly $2,700 owed later. Harvesting is mostly a DEFERRAL. The permanent piece is the rate arbitrage — deducting at 35% while the future gain is taxed at 15% — plus the time value of paying later.',
      ],
      answer:
        '$2,850 of tax is saved this year ($1,800 against the realized gain plus $1,050 against ordinary income), with a $3,000 long-term loss carried forward. The replacement position carries a $34,000 basis, creating about $18,000 of future gain and roughly $2,700 of eventual tax.',
      watchOut:
        "Deducting the whole $18,000 against ordinary income for a claimed 0.35 × $18,000 = $6,300 of savings. The $3,000 cap applies only to what is LEFT after losses are netted against gains. The mirror error is applying the $3,000 cap before the netting, which would allow only $3,000 of the loss to be used at all and value the harvest at $450. And never call harvesting free money — it lowers the client's basis by the same amount it deducts.",
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
