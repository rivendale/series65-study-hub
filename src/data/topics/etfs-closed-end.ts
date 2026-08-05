import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'etfs-closed-end',
  title: 'ETFs, Closed-End Funds, and UITs',
  weight: '~3%',
  order: 12,
  summary:
    "Open-end mutual funds are only one way to package a pooled portfolio. The exam expects you to distinguish exchange-traded funds, closed-end funds, and unit investment trusts by how shares are created, how they are priced and traded, whether anyone actively manages the portfolio, and which structural risks — premium/discount, credit risk, compounding decay — attach to each.",
  body: `## The four packages

All four structures below are **investment companies or trusts holding a pooled portfolio**, and all four give a small investor diversification and professional selection. They differ on four axes the exam returns to constantly: **how shares come into existence, how the price is set, who manages the portfolio, and what it costs**.

## Open-end funds — the baseline

An open-end mutual fund issues an **unlimited number of redeemable shares**. You buy from the fund and redeem back to the fund, always at the **next computed net asset value** (forward pricing), calculated at least once each business day after the close. There is no secondary market and no intraday price. Because the fund must stand ready to redeem in cash, it holds a liquidity buffer, and heavy redemptions can force sales that generate **capital gains distributions to remaining shareholders** — an investor can owe tax on gains in a year the fund lost money.

## Exchange-traded funds

An **ETF** is a pooled portfolio whose shares trade on an exchange throughout the day like a stock. Most are registered as open-end investment companies; a few older ones are structured as UITs.

### Creation and redemption

Retail investors do not create ETF shares. Large institutions called **authorized participants (APs)** transact directly with the fund in large blocks called **creation units** (commonly 25,000 to 100,000 shares). The AP delivers a basket of the underlying securities to the fund and receives a creation unit, or delivers a creation unit and receives the basket back. This is an **in-kind exchange**, not a cash purchase.

### Why ETFs trade near NAV

The creation/redemption mechanism is an **arbitrage channel**. If the ETF trades above the value of its basket, an AP buys the underlying securities, creates shares, and sells them into the market for a profit — which pushes the price down. If it trades below, the AP buys cheap shares, redeems them for the more valuable basket, and the buying pressure pushes the price up. Competition among APs keeps the market price **close to but not exactly equal to NAV**. Nothing guarantees it: in stressed markets, or for ETFs holding illiquid bonds or foreign securities that are not trading at the same hours, meaningful premiums and discounts can appear.

### Trading characteristics

Because ETFs trade like stocks, investors can use **limit orders, stop orders, margin, and short sales**, and can trade any time the market is open. That flexibility comes with a **bid-ask spread and a brokerage commission** on each trade — costs a no-load mutual fund does not impose. For a client making small monthly contributions, spreads and commissions can outweigh the ETF's lower expense ratio.

### Tax efficiency

In-kind redemption lets the fund hand appreciated securities to the AP rather than selling them, so ETFs generally **realize and distribute far fewer capital gains** than comparable mutual funds. The investor still owes tax on dividends and on their own gain when they sell. Tax efficiency is a structural advantage, not a tax exemption.

### Varieties

- **Index ETFs** — track a published benchmark; lowest cost, minimal turnover.
- **Actively managed ETFs** — a manager selects holdings; higher expense ratio and turnover.
- **Leveraged and inverse ETFs** — use derivatives to deliver a multiple (2x, 3x) or the opposite of an index's **daily** return. This is the single most testable suitability point in the topic: because the exposure is **reset every day**, returns compound off a new base each session, and over multiple volatile days the result can diverge sharply from the stated multiple of the period return — a phenomenon called **compounding decay** or volatility drag. A 3x fund can lose money over a stretch in which the index finished flat. These are **short-term trading tools, generally unsuitable as buy-and-hold positions**, and recommending one for a long-term account is a classic exam violation.

## Exchange-traded notes

An **ETN** looks like an ETF on a screen but is legally an **unsecured debt obligation of the issuing bank** that promises the return of an index at maturity. It holds no portfolio. The investor therefore takes the **credit risk of the issuer** on top of market risk — if the bank fails, the note can go to nearly zero even if the tracked index is fine. Do not describe an ETN as a fund.

## Closed-end funds

A **closed-end fund** raises capital once through an **IPO of a fixed number of shares**, then closes. After that, shares trade **investor-to-investor on an exchange or OTC**; the fund does not redeem them.

Key consequences:

- Price is set by **supply and demand**, so shares routinely trade at a **premium or a discount to NAV** — discounts of 5% to 15% are common. Buying at a discount is not automatically a bargain, and the discount can widen.
- Because the manager never faces redemptions, the fund can hold **illiquid assets** (municipal bonds, emerging market debt, private loans) that an open-end fund could not.
- Closed-end funds may **issue senior securities and borrow**, using **leverage** to boost yield. Leverage amplifies both NAV moves and distribution risk when short-term rates rise.
- Distributions sometimes include **return of capital**, which is not income and reduces cost basis. Watch for questions where a high "yield" is partly the investor's own money.

## Unit investment trusts

A **UIT** holds a **fixed, unmanaged portfolio** assembled at inception and held essentially unchanged until a stated **termination (maturity) date**, when assets are sold and proceeds distributed.

- **No board of directors, no investment adviser, no active management** — securities are not traded to chase returns. This means **low ongoing management expense** but no ability to react.
- Units are **redeemable**: the sponsor typically maintains a secondary market and will redeem units at NAV, so a UIT is not stuck at a discount the way a closed-end fund can be.
- Common forms are fixed municipal or corporate bond trusts and defined equity portfolios.
- The Series 65 phrase to recognize: a UIT is **"a fixed portfolio of securities held to a specified termination date, supervised but not managed."**

## Side-by-side comparison

| Feature | Open-end fund | Closed-end fund | ETF | UIT |
| --- | --- | --- | --- | --- |
| Share count | Unlimited, continuously issued | **Fixed** after the IPO | Varies via creation units | Fixed number of units |
| How you buy | From the fund | On an exchange from another investor | On an exchange | From the sponsor |
| Pricing | **Next computed NAV** (forward pricing) | Market supply and demand — **premium or discount** | Market price, kept **near NAV** by AP arbitrage | NAV-based |
| Intraday trading | No | Yes | Yes | Generally no |
| Management | Active or index, ongoing | Active, ongoing | Usually index, some active | **None — fixed portfolio** |
| Leverage permitted | Very limited | **Commonly used** | Only in leveraged products | No |
| Typical cost | Expense ratio, possible sales load and 12b-1 | Expense ratio plus commission | **Low expense ratio** plus commission and spread | Sales charge, low ongoing cost |
| Termination | Perpetual | Perpetual | Perpetual | **Stated maturity date** |

## Suitability framing

When a question gives you a client profile, sort on the structural facts: an investor who needs **intraday execution or tax efficiency in a taxable account** points to an ETF; one making **small automatic monthly contributions** points to a no-load open-end fund; one seeking **higher income and willing to accept leverage and discount risk** points to a closed-end fund; one who wants a **fixed bond portfolio with a known maturity and no manager discretion** points to a UIT. Leveraged and inverse products point at nobody with a long horizon.`,
  pitfalls: [
    'Do not say ETF shares always trade at NAV — arbitrage by authorized participants keeps the price close to NAV, but premiums and discounts do appear, especially in illiquid or foreign holdings and in stressed markets.',
    "Leveraged and inverse ETFs reset daily, so their compounding over multiple periods will not equal the stated multiple of the index's cumulative return; recommending one as a long-term holding is a suitability failure, not just a poor idea.",
    'An ETN is an unsecured bank note, not a portfolio of securities — it carries issuer credit risk, and a question describing an exchange-traded product with no underlying holdings is describing an ETN.',
    "A closed-end fund trading at a discount to NAV is not automatically undervalued; the discount reflects supply and demand and can persist or widen indefinitely, and there is no redemption right to force convergence.",
    "A UIT is supervised but not managed — there is no adviser trading the portfolio and no board of directors, so calling it 'professionally managed' in the active sense is wrong.",
    "ETFs are cheaper on expense ratio but not always cheaper overall; commissions and bid-ask spreads on frequent small purchases can exceed the savings versus a no-load mutual fund.",
    "Only ETF authorized participants deal in creation units directly with the fund — a retail investor can never redeem ETF shares back to the fund at NAV.",
  ],
  keyTerms: [
    {
      term: 'Authorized participant (AP)',
      definition:
        "A large institutional firm permitted to exchange baskets of the underlying securities with an ETF for creation units and vice versa; the AP's arbitrage activity is what keeps the ETF's market price near its net asset value.",
    },
    {
      term: 'Creation unit',
      definition:
        'The large block of ETF shares — often 25,000 to 100,000 — in which shares are issued to or redeemed from an authorized participant, typically through an in-kind exchange of securities rather than cash.',
    },
    {
      term: 'Premium / discount to NAV',
      definition:
        "The amount by which a fund's market price exceeds or falls below its net asset value per share; a defining and persistent feature of closed-end funds and a transient one for ETFs.",
    },
    {
      term: 'Forward pricing',
      definition:
        'The rule that open-end mutual fund purchases and redemptions are executed at the next net asset value computed after the order is received, not at a price already published.',
    },
    {
      term: 'Leveraged / inverse ETF',
      definition:
        "An ETF using derivatives to deliver a multiple of, or the opposite of, an index's daily return; because the exposure resets each day, holding-period results diverge from the stated multiple, making these short-term trading tools.",
    },
    {
      term: 'Compounding decay (volatility drag)',
      definition:
        "The erosion of a leveraged or inverse product's value over multiple volatile sessions caused by daily rebalancing, which can produce a loss even when the tracked index ends the period unchanged.",
    },
    {
      term: 'Exchange-traded note (ETN)',
      definition:
        "An unsecured, unsubordinated debt security of a bank that pays the return of a reference index at maturity; it holds no assets, so the investor bears the issuer's credit risk in addition to index risk.",
    },
    {
      term: 'Unit investment trust (UIT)',
      definition:
        'An investment company that holds a fixed portfolio of securities, has no board of directors or investment adviser, issues redeemable units, and terminates on a stated date when holdings are liquidated.',
    },
  ],
  confusions: [
    {
      dont: 'ETF — a pooled portfolio of actual securities whose shares are created and redeemed in kind',
      with: "ETN — an unsecured note of a bank with no portfolio behind it, exposing the holder to the issuer's credit risk",
    },
    {
      dont: 'Closed-end fund — fixed share count, priced by supply and demand at a premium or discount',
      with: 'Open-end fund — unlimited redeemable shares, always priced at the next computed NAV',
    },
    {
      dont: 'UIT — fixed portfolio, no manager, stated termination date',
      with: 'Managed open-end fund — portfolio traded continuously by an adviser with no maturity',
    },
    {
      dont: "A leveraged ETF's stated 2x or 3x objective, which applies to a single day",
      with: 'The multiple an investor would receive over a month or a year, which daily reset and compounding make unpredictable',
    },
    {
      dont: 'Tax efficiency from in-kind redemption, which reduces capital gains distributions',
      with: 'Tax exemption — the investor still owes tax on dividends and on gains realized at sale',
    },
  ],
};
