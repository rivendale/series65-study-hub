import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'trading-mechanics',
  title: 'Trading, Orders, and Market Mechanics',
  weight: '~3%',
  order: 27,
  summary:
    "Advisers place and supervise trades, so the exam expects working knowledge of where securities trade, what each order type does and where it sits relative to the market, how margin and settlement work, and when written discretionary authority is required.",
  body: `## Where securities trade

- **Primary market** — the issuer sells new securities and **receives the proceeds**. IPOs, follow-on offerings, and new bond issues live here. Sales are made by prospectus.
- **Secondary market** — investors trade **with each other**; the issuer gets nothing. All ordinary trading is secondary.

The secondary market has two structures:

- **Exchanges (auction market)** — a centralized order book where the highest bid meets the lowest offer, with a **designated market maker** (formerly the specialist) maintaining a fair and orderly market.
- **OTC (negotiated / dealer market)** — an interdealer network with **no central floor**, where multiple **market makers** post two-sided quotes and trade from inventory. Most **bonds** and many smaller equities trade here.

### Broker vs dealer, bid vs ask

A firm acting as **broker (agent)** arranges the trade and charges a **commission**; acting as **dealer (principal)** it trades from **its own inventory** and earns a **markup or markdown**. It may never charge both on the same trade.

The **bid** is what a dealer will **pay** (the customer sells at the bid); the **ask/offer** is what a dealer will **sell for**. The **spread** is the market maker's compensation, and a wide spread signals **low liquidity** — a point that recurs in suitability questions about thinly traded securities.

## Order types

Two decisions: *what price will I accept* and *what triggers the order*.

| Order | What it does | Placement |
| --- | --- | --- |
| **Market** | Executes **immediately at the best available price**. Guarantees execution, not price | Executes now |
| **Buy limit** | Buy **at the limit or lower** | Placed **below** the market |
| **Sell limit** | Sell **at the limit or higher** | Placed **above** the market |
| **Buy stop** | Becomes a market order once the stock **trades at or above** the stop | Placed **above** the market |
| **Sell stop** | Becomes a market order once the stock **trades at or below** the stop | Placed **below** the market |
| **Stop-limit** | Triggers like a stop, then becomes a **limit** order | Same side as the equivalent stop |

Two things the exam checks relentlessly:

1. **A limit order guarantees price but not execution; a market order guarantees execution but not price.**
2. **Limits are placed at prices better than the market for the customer; stops are placed at prices worse.** Buy limit below, sell limit above; buy stop above, sell stop below.

A **sell stop** protects a **long** position from further decline (a "stop-loss"); a **buy stop** protects a **short**. A stop-limit adds price control but risks **no execution at all** in a fast-moving market, stranding the client the stop was meant to protect.

### Time in force

- **Day order** — expires at the close if unexecuted. **This is the default.**
- **GTC (good till cancelled)** — remains open until executed or cancelled; firms typically confirm or purge periodically.
- **FOK (fill or kill)** — execute the **entire order immediately** or cancel it all.
- **IOC (immediate or cancel)** — execute **as much as possible immediately**; cancel the rest. Partial fills accepted.
- **AON (all or none)** — the full quantity must be filled, but **not necessarily immediately**.

Memory hook: **FOK = all and now. IOC = part is fine, now. AON = all, whenever.**

## Long and short positions

- **Long** — the investor owns the security. Maximum loss is the amount invested; profit potential is unlimited.
- **Short** — the investor **borrows** shares, sells them, and hopes to repurchase lower. Gain is capped (the stock can only fall to zero) but **loss is theoretically unlimited**, because there is no ceiling on the price. The short seller also owes any **dividends** to the lender and risks a **buy-in** or a short squeeze.

Because of that unlimited loss potential, short selling requires a **margin account**, may never be done in a **cash account**, and is unsuitable for most retail clients.

## Margin accounts

Buying on margin means borrowing from the broker-dealer using the securities as collateral.

- **Regulation T**, set by the Federal Reserve Board, requires an initial deposit of **50%** of the purchase price for marginable equities.
- **Maintenance requirement** — SRO rules require equity of at least **25% of market value** long (**30%** short); most firms impose a stricter **house requirement** of 30–40%.
- If equity falls below maintenance, the firm issues a **margin call**; if unmet, it may **sell out** positions without further consent.
- **Hypothecation** — the customer pledges securities as collateral. The margin paperwork comprises a **credit agreement**, a **hypothecation agreement**, and an optional **loan consent agreement** letting the firm lend the shares out.
- **Not marginable**: **options** (except certain LEAPS), new issues, and **mutual fund shares for the first 30 days** — a fund may serve as collateral only after that, and a fund purchase itself may never be made on margin.
- Margin **magnifies gains and losses** and adds **interest cost**; the client can lose **more than the original investment**. **Retirement accounts generally cannot be margined.**

## Cash accounts and freeriding

In a **cash account** the customer pays in full, and **Regulation T** requires payment promptly, no later than **two business days after settlement**. **Freeriding** — buying a security and selling it before ever paying, funding the purchase out of the sale proceeds — results in a **90-day frozen account**, during which cash must be in the account **before** any purchase.

## Settlement and best execution

- **T+1** — regular way settlement for equities, corporate and municipal bonds, and ETFs moved to **one business day after the trade date in May 2024**. Options and U.S. government securities also settle T+1; cash settlement is same day.
- The **trade date** governs **tax** treatment and the holding period; the settlement date governs when money and securities change hands. Under T+1 the **ex-dividend date is generally the same day as the record date**.
- **Best execution** — reasonable diligence to obtain the most favorable terms reasonably available, weighing price, speed, likelihood of execution, and size. For an adviser it is part of the **duty of care**; routing to whichever venue pays the firm most, without periodic review, violates it.
- **Payment for order flow** — compensation for routing orders to a particular market center. Legal, but it must be **disclosed** and creates a conflict with best execution.
- **Dark pools / alternative trading systems** — private venues that do not display orders before execution, letting institutional blocks trade with less market impact at the cost of pre-trade transparency.

## Mutual fund trade mechanics

- **Forward pricing** — a fund order is executed at the **next computed NAV**, calculated at least once per business day after the close, so the investor **never knows the exact price when ordering**. Filling at a stale published NAV is illegal **late trading**.
- **Breakpoints** — volume discounts on the front-end sales charge. A **letter of intent** (typically 13 months, backdatable 90 days) and **rights of accumulation** let an investor reach one over time. **Breakpoint selling** — keeping a purchase just below a breakpoint to preserve a higher commission — is prohibited.

## Discretion

An order is **discretionary** if someone other than the customer chooses any of the three A's: **Asset, Amount, or Action**. If the customer specifies all three and leaves only **time or price** to the professional, that is **not discretion** and needs no written authority, though such an order is generally good only for the day.

Discretion requires **prior written authorization** — a limited power of attorney or a trading authorization clause in the advisory contract. Two tested nuances:

- Under the **Uniform Securities Act**, an **investment adviser** may act on an **oral** authorization for up to **10 business days** from the first discretionary trade if written authority arrives within that window. A **broker-dealer agent gets no grace period**.
- Discretion is not **custody**, and it never permits withdrawing funds or churning. Excessive trading is fraudulent regardless of the authorization on file.`,
  pitfalls: [
    'Buy limits and sell stops go BELOW the market; sell limits and buy stops go ABOVE it. Reversing these is the single most common trading-mechanics error.',
    "A limit order guarantees price but not execution, and a market order guarantees execution but not price — a stop-limit can leave a client unprotected precisely when the market gaps.",
    'Short selling carries theoretically unlimited loss and requires a margin account; it can never be done in a cash account or, as a practical matter, a retirement account.',
    "Regulation T's 50% is the INITIAL requirement set by the Federal Reserve; the 25% long maintenance requirement comes from SRO rules, and most firms enforce a stricter house requirement.",
    'Mutual fund shares cannot be purchased on margin at all and cannot serve as collateral until held 30 days, and forward pricing means the investor always gets the NEXT calculated NAV, never the last published one.',
    "Choosing only the time or price of a trade the customer fully specified is not discretion; discretion means choosing the asset, the amount, or the action.",
  ],
  keyTerms: [
    {
      term: 'Market maker',
      definition:
        'A dealer that posts continuous two-sided quotes and trades from its own inventory as principal, earning the bid-ask spread and providing liquidity in a negotiated OTC market.',
    },
    {
      term: 'Stop order',
      definition:
        'A dormant order that becomes a market order once the security trades at or through the stop price; sell stops are placed below the market to protect a long position, buy stops above to protect a short.',
    },
    {
      term: 'Regulation T',
      definition:
        'The Federal Reserve rule governing credit in securities accounts, setting the initial margin requirement at 50% of the purchase price and requiring payment in a cash account promptly after settlement.',
    },
    {
      term: 'Maintenance requirement',
      definition:
        'The minimum equity a margin account must maintain — 25% of long market value under SRO rules, 30% for short positions — below which the firm issues a margin call and may liquidate positions.',
    },
    {
      term: 'Hypothecation',
      definition:
        "The pledging of a customer's securities to the broker-dealer as collateral for a margin loan, documented in the hypothecation agreement signed at account opening.",
    },
    {
      term: 'Best execution',
      definition:
        'The obligation to use reasonable diligence to obtain the most favorable terms reasonably available for a customer order, weighing price, speed, likelihood of execution, and order size, and to review routing practices periodically.',
    },
    {
      term: 'Forward pricing',
      definition:
        'The rule that a mutual fund order is filled at the next net asset value computed after the order is received, so the investor cannot know the exact execution price in advance.',
    },
    {
      term: 'Discretionary authority',
      definition:
        "Authority for someone other than the customer to decide the asset, the amount, or the action of a trade, which requires prior written authorization — with a limited 10-business-day oral grace period available to investment advisers under the Uniform Securities Act.",
    },
  ],
  confusions: [
    {
      dont: 'A limit order, which guarantees price but not execution',
      with: 'A market order, which guarantees execution but not price',
    },
    {
      dont: 'A sell stop, placed below the market to protect a long position',
      with: 'A sell limit, placed above the market to capture a target price',
    },
    {
      dont: 'Fill-or-kill, requiring the entire order to execute immediately',
      with: 'Immediate-or-cancel, which accepts a partial fill and cancels the balance',
    },
    {
      dont: 'Regulation T initial margin of 50%, set by the Federal Reserve',
      with: 'The 25% long maintenance requirement, set by SRO rules and often raised by house policy',
    },
    {
      dont: 'Discretion over the asset, amount, or action, which requires written authority',
      with: 'Time-and-price discretion on a fully specified order, which requires none',
    },
  ],
  formulas: [
    {
      name: 'Regulation T initial requirement',
      formula: 'Required deposit = 50% × Market value of the purchase',
      note: 'A $40,000 purchase requires $20,000 of equity; the remaining $20,000 is the debit balance owed to the firm.',
    },
    {
      name: 'Margin account equity',
      formula: 'Equity = Long market value − Debit balance',
      note: 'Track equity as the market value moves; the debit balance stays fixed except for interest and new activity.',
    },
    {
      name: 'Long maintenance call trigger',
      formula: 'Minimum market value = Debit balance ÷ 0.75',
      note: 'The price at which equity falls to 25% of market value. Below it, a maintenance call is issued.',
    },
    {
      name: 'Bid-ask spread',
      formula: 'Spread = Ask − Bid',
      note: "The market maker's compensation. A wide spread indicates thin liquidity and a higher effective cost to trade.",
    },
  ],
};
