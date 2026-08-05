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
  workedExamples: [
    {
      title: 'Regulation T initial requirement and cash due on a margin purchase',
      setup:
        'A client opens a new margin account and buys 1,000 shares of a marginable NYSE-listed stock at $60 per share. There are no other positions and no cash in the account. How much must the client deposit, and what is the resulting debit balance and equity?',
      steps: [
        'Step 1 — compute the market value of the purchase: 1,000 × $60 = $60,000.',
        'Step 2 — apply the Regulation T initial requirement of 50%, set by the Federal Reserve Board: 50% × $60,000 = $30,000.',
        'Step 3 — the client deposits $30,000; the broker-dealer lends the rest. Debit balance = $60,000 − $30,000 = $30,000.',
        'Step 4 — verify the equity: Equity = long market value − debit balance = $60,000 − $30,000 = $30,000.',
        'Step 5 — express it as a percentage: $30,000 ÷ $60,000 = 50%, exactly the Reg T requirement, as expected on day one.',
        'Step 6 — check the floor. FINRA requires minimum equity of $2,000 in a margin account (or 100% of the purchase price if less). Here $30,000 clears it easily, but on a $3,000 purchase the requirement would be $2,000, not 50% × $3,000 = $1,500.',
      ],
      answer:
        'The client must deposit $30,000. That leaves a $30,000 debit balance and $30,000 of equity — 50% of the $60,000 market value.',
      watchOut:
        'Forgetting the $2,000 minimum equity floor on small purchases, which makes the answer higher than a straight 50% calculation. The other error is confusing this INITIAL 50% Reg T requirement with the 25% ongoing MAINTENANCE requirement, which comes from SRO rules and applies only after the position is established.',
    },
    {
      title: 'The price at which a long margin position triggers a maintenance call',
      setup:
        'Continuing the position above: 1,000 shares with a market value of $60,000 and a debit balance of $30,000. The SRO long maintenance requirement is 25% of market value. At what price is a maintenance call triggered? What if the firm imposes a 30% house requirement?',
      steps: [
        'Step 1 — state the condition. A call occurs when equity falls below 25% of market value: (MV − debit) < 0.25 × MV.',
        'Step 2 — rearrange. MV − debit = 0.25 × MV, so MV − 0.25 × MV = debit, so 0.75 × MV = debit.',
        'Step 3 — solve for MV: MV = debit ÷ 0.75 = $30,000 ÷ 0.75 = $40,000. (The debit balance does not change as the price moves — only interest and new activity change it.)',
        'Step 4 — convert to a per-share price: $40,000 ÷ 1,000 shares = $40.00.',
        'Step 5 — verify at $40. Market value $40,000, debit $30,000, equity $10,000. Equity ÷ market value = $10,000 ÷ $40,000 = 25%. Exactly at the requirement, so any price below $40 triggers the call.',
        'Step 6 — redo it for a 30% house requirement: MV = debit ÷ (1 − 0.30) = $30,000 ÷ 0.70 = $42,857.14, or $42.86 per share. The house requirement triggers at a price about 7% higher, giving the firm an earlier warning — which is why most firms impose one.',
      ],
      answer:
        'A maintenance call is triggered once the stock falls below $40.00 per share under the 25% SRO minimum, or below $42.86 per share under a 30% house requirement.',
      watchOut:
        'Dividing the debit by 0.25 instead of 0.75. That produces $120,000, or $120 per share, which would mean a call is due at DOUBLE the purchase price — an obviously impossible answer that should prompt a re-check. The divisor is 1 minus the maintenance percentage, not the maintenance percentage itself.',
    },
    {
      title: 'Excess equity and buying power',
      setup:
        'A margin account holds securities with a long market value of $100,000 and a debit balance of $40,000. Regulation T remains 50%. How much can the client buy without depositing new cash?',
      steps: [
        'Step 1 — compute equity: Equity = long market value − debit balance = $100,000 − $40,000 = $60,000.',
        'Step 2 — compute the Reg T requirement on the current position: 50% × $100,000 = $50,000.',
        'Step 3 — excess equity (the amount credited to SMA) = actual equity − required equity = $60,000 − $50,000 = $10,000.',
        'Step 4 — convert excess equity into buying power. Because the client only has to put up 50% of any new purchase, each dollar of excess equity supports two dollars of stock: buying power = $10,000 ÷ 0.50 = $20,000.',
        'Step 5 — verify by walking the account forward. Buy $20,000 more: long market value = $100,000 + $20,000 = $120,000; debit = $40,000 + $20,000 = $60,000 (the whole purchase is financed).',
        'Step 6 — recompute equity: $120,000 − $60,000 = $60,000, which is 50% of the new $120,000 market value. The account lands exactly at the Reg T requirement, confirming $20,000 was the maximum.',
      ],
      answer:
        'The account has $10,000 of excess equity, which supports $20,000 of additional purchasing power without any new deposit.',
      watchOut:
        'Treating the full $60,000 of equity as buying power. Most of that equity is already committed to satisfying Reg T on the existing $100,000 position; only the $10,000 EXCESS is free. The mirror error is forgetting to double it — buying power is excess equity divided by the 50% requirement, not the excess equity itself.',
    },
    {
      title: 'Short sale: proceeds, required deposit, and maximum gain',
      setup:
        'A client sells short 500 shares at $80 per share in a margin account. Regulation T is 50%. Compute the proceeds, the required deposit, the credit balance, the maximum possible gain, and the gain if the client covers at $62.',
      steps: [
        'Step 1 — sale proceeds: 500 × $80 = $40,000. These proceeds are held by the broker-dealer, not paid out to the client.',
        "Step 2 — Regulation T deposit: 50% × $40,000 = $20,000 of the client's own money must be added.",
        'Step 3 — credit balance in the short account = short sale proceeds + Reg T deposit = $40,000 + $20,000 = $60,000.',
        'Step 4 — maximum gain. The best case is the stock going to zero, where the shares are repurchased for nothing: gain = $40,000 − $0 = $40,000, the full proceeds. A short seller can never make more than the proceeds because a price cannot fall below zero.',
        'Step 5 — maximum loss. There is no ceiling on the price, so the loss is theoretically unlimited. This asymmetry is the reason short selling requires a margin account and is unsuitable for most retail clients.',
        'Step 6 — the realistic case: cover at $62. Gain = 500 × ($80 − $62) = 500 × $18 = $9,000, before interest, borrowing fees, and any dividends the short seller must pay the lender.',
      ],
      answer:
        'Proceeds $40,000; Reg T deposit $20,000; credit balance $60,000. Maximum gain $40,000 (only if the stock becomes worthless); maximum loss unlimited. Covering at $62 produces a $9,000 gain.',
      watchOut:
        'Saying the maximum gain is unlimited. That is the LONG position. Short is the mirror image: gain is capped at the proceeds, loss is unlimited. Reversing the two on this question is the most common trading-mechanics error on the exam.',
    },
    {
      title: 'Credit balance and equity in a short account as the stock moves against the client',
      setup:
        'Continuing the short above: 500 shares sold short at $80 with a credit balance of $60,000. The stock rises to $92. The short maintenance requirement is 30% of short market value. Is there a call, and at what price does one occur?',
      steps: [
        'Step 1 — the credit balance is FIXED at $60,000. It does not move with the stock price; only the short market value does.',
        'Step 2 — current short market value: 500 × $92 = $46,000. This is what it would cost to buy the shares back.',
        'Step 3 — compute equity in a short account: Equity = credit balance − short market value = $60,000 − $46,000 = $14,000. (Note the order: the liability is subtracted from the credit, the opposite of a long account.)',
        'Step 4 — express it as a percentage of short market value: $14,000 ÷ $46,000 = 30.43%.',
        'Step 5 — compare to the 30% requirement: required equity = 30% × $46,000 = $13,800. Actual equity of $14,000 exceeds it, so no call yet — but only by $200.',
        'Step 6 — find the call price. A call occurs when credit balance = 1.30 × short market value, so SMV = $60,000 ÷ 1.30 = $46,153.85.',
        'Step 7 — per share: $46,153.85 ÷ 500 = $92.31. Above roughly $92.31 the account falls below 30% equity and a call is issued.',
      ],
      answer:
        'Equity is $14,000, or 30.43% of the $46,000 short market value — just above the 30% requirement, so no call yet. A maintenance call is triggered once the stock rises above about $92.31 per share.',
      watchOut:
        'Computing short equity as short market value minus credit balance, which gives −$14,000 and a nonsensical negative equity. The credit balance always comes first in a short account. Note also the direction: for a SHORT, danger is a RISING price, and the divisor is 1 PLUS the maintenance rate (1.30), whereas a long position uses 1 MINUS it (0.75).',
    },
  ],
};
