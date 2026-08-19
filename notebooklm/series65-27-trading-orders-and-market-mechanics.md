# Trading, Orders, and Market Mechanics

This is one topic from the Series 65 exam, the Uniform Investment Adviser Law
Examination. It is worth about 3 percent of the exam.

## Why this topic matters

Advisers place and supervise trades, so the exam expects working knowledge of where securities trade, what each order type does and where it sits relative to the market, how margin and settlement work, and when written discretionary authority is required.

## Where securities trade

- **Primary market** — the issuer sells new securities and **receives the proceeds**. IPOs, follow-on offerings, and new bond issues live here. Sales are made by prospectus.
- **Secondary market** — investors trade **with each other**; the issuer gets nothing. All ordinary trading is secondary.

The distinction decides who bears which risk. In the **primary** market the buyer funds the company, the issuer has an informational advantage the law corrects with a **registration statement and prospectus**, and the underwriter is paid out of the spread between what the issuer receives and what the public pays. In the **secondary** market no new capital is raised — a purchase of listed shares sends money to another investor, not to the company. What the secondary market gives the issuer is **liquidity**, and liquidity is why investors accept lower expected returns on listed securities than on private ones.

The secondary market has two structures:

- **Exchanges (auction market)** — a centralized order book where the highest bid meets the lowest offer, with a **designated market maker** (formerly the specialist) maintaining a fair and orderly market.
- **OTC (negotiated / dealer market)** — an interdealer network with **no central floor**, where multiple **market makers** post two-sided quotes and trade from inventory. Most **bonds** and many smaller equities trade here.

Beyond those sit the **alternative venues**. **Electronic communication networks (ECNs)** match customer orders directly with no dealer in the middle. **Dark pools and other alternative trading systems (ATSs)** accept orders without displaying them, so a pension fund can work a two-million-share order without telegraphing it and moving the price against itself: **pre-trade transparency is surrendered to reduce market impact.** The **third market** is exchange-listed stock traded OTC; the **fourth market** is institution-to-institution trading with no intermediary.

### Broker vs dealer, bid vs ask

A firm acting as **broker (agent)** arranges the trade and charges a **commission**; acting as **dealer (principal)** it trades from **its own inventory** and earns a **markup or markdown**. It may never charge both on the same trade.

The **bid** is what a dealer will **pay** (the customer sells at the bid); the **ask/offer** is what a dealer will **sell for**. The **spread** is the market maker's compensation, and a wide spread signals **low liquidity** — a point that recurs in suitability questions about thinly traded securities.

Treat the spread as a **real, immediate cost**. A client who buys 1,000 shares quoted 24.90 bid, 25.10 ask pays $25,100 for a position she could immediately resell for only $24,900 — down **$200, or 0.8%, before any commission and before the price has moved**. On a stock quoted 24.98 by 25.02 the same round trip costs $40. The difference between a two-cent and a twenty-cent spread is invisible on a confirmation and enormous over a year of trading, which is why the spread belongs in every conversation about **thinly traded small caps, municipal bonds, and frequent trading**: the commission is disclosed and the spread is not, but the spread is often larger.

Market makers earn it for a reason. They buy when everyone is selling, carrying **inventory risk**, and they quote against traders who may know more, which is **adverse selection risk**. Spreads widen when either risk rises — around earnings, in fast markets, in illiquid names. A quote is a service being priced, not a fixed feature of the security.

## Order types

Two decisions: *what price will I accept* and *what triggers the order*.

- Order: Market. What it does: Executes immediately at the best available price. Guarantees execution, not price. Placement: Executes now.
- Order: Buy limit. What it does: Buy at the limit or lower. Placement: Placed below the market.
- Order: Sell limit. What it does: Sell at the limit or higher. Placement: Placed above the market.
- Order: Buy stop. What it does: Becomes a market order once the stock trades at or above the stop. Placement: Placed above the market.
- Order: Sell stop. What it does: Becomes a market order once the stock trades at or below the stop. Placement: Placed below the market.
- Order: Stop-limit. What it does: Triggers like a stop, then becomes a limit order. Placement: Same side as the equivalent stop.


Two things the exam checks relentlessly:

1. **A limit order guarantees price but not execution; a market order guarantees execution but not price.**
2. **Limits are placed at prices better than the market for the customer; stops are placed at prices worse.** Buy limit below, sell limit above; buy stop above, sell stop below.

A **sell stop** protects a **long** position from further decline (a "stop-loss"); a **buy stop** protects a **short**. A stop-limit adds price control but risks **no execution at all** in a fast-moving market, stranding the client the stop was meant to protect.

### Choosing the right order

The order type should follow from what the client is actually afraid of.

- **Market order** when **certainty of execution matters more than a few cents** — a large cap with a penny spread, a position that must close today, an index rebalance. In a liquid name it is usually cheapest, because chasing a cent with a limit risks missing the trade.
- **Limit order** when the security is **thinly traded, the spread is wide, or the order is large relative to average volume**, where a market order can walk up the book and fill far from the last print. Also correct whenever the client has a firm view on value.
- **Sell stop** when the client owns a position and wants to **cap a loss or protect a gain** unattended. Its weakness: it becomes a market order at the worst moment, so a gap-down opening can fill far below the stop.
- **Stop-limit** when the client would rather **hold than sell at a panic price**. The trade-off is stark: in a genuine collapse the limit is never reached, no sale occurs, and the client rides the decline down. A stop-limit protects against a bad fill, not a bad market.

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

Work the mechanics once and the risk profile explains itself. To sell short the broker must **locate and borrow** shares, usually from another client's margin account under a **loan consent agreement**. The short seller receives the proceeds but never controls them; they sit as a **credit balance** securing the stock loan. Meanwhile the client pays a **borrow fee** — a few basis points on a liquid name, double digits annually on a heavily shorted one — and makes **payments in lieu of dividends** to the lender, who may **recall the shares at any time** and force a **buy-in** at whatever the price happens to be. Unlimited loss, a carrying cost, a dividend obligation, and no control over the holding period. Compare a **long put**, which caps loss at the premium and cannot be recalled, and you have the standard exam answer for a bearish retail client.

## Margin accounts

Buying on margin means borrowing from the broker-dealer using the securities as collateral.

- **Regulation T**, set by the Federal Reserve Board, requires an initial deposit of **50%** of the purchase price for marginable equities.
- **Maintenance requirement** — SRO rules require equity of at least **25% of market value** long (**30%** short); most firms impose a stricter **house requirement** of 30–40%.
- If equity falls below maintenance, the firm issues a **margin call**; if unmet, it may **sell out** positions without further consent.
- **Hypothecation** — the customer pledges securities as collateral. The margin paperwork comprises a **credit agreement**, a **hypothecation agreement**, and an optional **loan consent agreement** letting the firm lend the shares out.
- **Not marginable**: **options** (except certain LEAPS), new issues, and **mutual fund shares for the first 30 days** — a fund may serve as collateral only after that, and a fund purchase itself may never be made on margin.
- Margin **magnifies gains and losses** and adds **interest cost**; the client can lose **more than the original investment**. **Retirement accounts generally cannot be margined.**

Keep the three numbers in separate boxes; swapping them is the most common margin error. **Reg T at 50% is an initial requirement from the Federal Reserve**, applied when a position is opened. **The 25% long maintenance requirement comes from SRO rules** and applies continuously afterward. **A house requirement above 30% is the firm's own policy**, enforceable by contract.

The two levels solve different problems: the initial requirement limits how much leverage the market can build, while the maintenance requirement protects the **lender**, keeping collateral above the loan after prices move. That is why a margin call is not negotiable — the firm is a secured creditor whose collateral has fallen, and the agreement lets it **sell out positions of its choosing, without notice or consent**. An adviser who fails to explain that before the account opens has a disclosure problem, not a service problem.

**Buying power** is the arithmetic consequence. Equity above the Reg T requirement is **excess equity**, credited to the **special memorandum account (SMA)**, and since only 50% must be posted on a new purchase, each dollar of excess supports **two dollars** of stock. SMA is a high-water credit line, not cash — it does not shrink when the market falls, which is why a client can show buying power in an account close to a maintenance call.

## Cash accounts and freeriding

In a **cash account** the customer pays in full, and **Regulation T** requires payment promptly, no later than **two business days after settlement**. **Freeriding** — buying a security and selling it before ever paying, funding the purchase out of the sale proceeds — results in a **90-day frozen account**, during which cash must be in the account **before** any purchase.

## Settlement and best execution

- **T+1** — regular way settlement for equities, corporate and municipal bonds, and ETFs moved to **one business day after the trade date in May 2024**. Options and U.S. government securities also settle T+1; cash settlement is same day.
- The **trade date** governs **tax** treatment and the holding period; the settlement date governs when money and securities change hands. Under T+1 the **ex-dividend date is generally the same day as the record date**.
- **Best execution** — reasonable diligence to obtain the most favorable terms reasonably available, weighing price, speed, likelihood of execution, and size. For an adviser it is part of the **duty of care**; routing to whichever venue pays the firm most, without periodic review, violates it.
- **Payment for order flow** — compensation for routing orders to a particular market center. Legal, but it must be **disclosed** and creates a conflict with best execution.
- **Dark pools / alternative trading systems** — private venues that do not display orders before execution, letting institutional blocks trade with less market impact at the cost of pre-trade transparency.

### Why T+1 moved the ex-dividend date

The dividend rules follow from settlement, not the reverse. A corporation pays whoever is the **holder of record** on the record date, and to be the holder of record you must have **settled**. Under the old T+2 convention a Monday buyer settled Wednesday, so buying the business day before the record date came too late — which is why the ex-date sat **one business day before** the record date. Under **T+1** a Monday buyer settles Tuesday, so buying the business day before the record date still works, and the **ex-date and record date fall on the same day**.

Two consequences. **Buying on or after the ex-date means buying without the dividend**, and the stock typically opens lower by roughly the dividend, so the buyer is not being cheated — the price already reflects it. And a **regular-way sale on the ex-date still collects the dividend**, because the seller was the holder of record. Shorter settlement also cuts counterparty risk across the system while leaving less room for operational error.

### Best execution as an ongoing obligation

Best execution is not a promise of the best price on every trade, which no one can guarantee. It is an obligation of **process**: identify the relevant factors, route accordingly, and **review periodically** with documentation. Price leads but does not stand alone — **speed, likelihood of execution, order size, and the character of the market** all count, which is why a large order in an illiquid name may properly be worked over hours rather than sent at once.

The conflicts to name are **payment for order flow**, **soft dollars** (research bought with client commissions, permissible only within the Section 28(e) safe harbor), **directed brokerage**, and **affiliated broker-dealer routing**. Each is legal with disclosure, and each fails if the firm never checks whether clients actually get competitive executions. The tested formulation: **an adviser who has never reviewed execution quality cannot claim to have sought best execution, however good the fills happened to be.**

## Mutual fund trade mechanics

- **Forward pricing** — a fund order is executed at the **next computed NAV**, calculated at least once per business day after the close, so the investor **never knows the exact price when ordering**. Filling at a stale published NAV is illegal **late trading**.
- **Breakpoints** — volume discounts on the front-end sales charge. A **letter of intent** (typically 13 months, backdatable 90 days) and **rights of accumulation** let an investor reach one over time. **Breakpoint selling** — keeping a purchase just below a breakpoint to preserve a higher commission — is prohibited.

## Discretion

An order is **discretionary** if someone other than the customer chooses any of the three A's: **Asset, Amount, or Action**. If the customer specifies all three and leaves only **time or price** to the professional, that is **not discretion** and needs no written authority, though such an order is generally good only for the day.

Discretion requires **prior written authorization** — a limited power of attorney or a trading authorization clause in the advisory contract. Two tested nuances:

- Under the **Uniform Securities Act**, an **investment adviser** may act on an **oral** authorization for up to **10 business days** from the first discretionary trade if written authority arrives within that window. A **broker-dealer agent gets no grace period**.
- Discretion is not **custody**, and it never permits withdrawing funds or churning. Excessive trading is fraudulent regardless of the authorization on file.

## The questions this topic is tested with

**A client purchases 500 shares of a marginable stock at $48 per share in a margin account. Under Regulation T at 50%, what is the initial margin the client must deposit?**

Purchase amount = 500 × $48 = $24,000. Reg T initial requirement = 50% × $24,000 = $12,000, with the remaining $12,000 borrowed from the broker-dealer as the debit balance.

**A client buys $60,000 of stock in a margin account, meeting the 50% Reg T requirement and creating a $30,000 debit balance. If the house maintenance requirement is 25% of market value, at what market value will the account first fall below the maintenance requirement?**

Equity must stay at 25% of market value, so the debit balance may be no more than 75% of market value. Market value = debit ÷ 0.75 = $30,000 ÷ 0.75 = $40,000. At $40,000, equity is $10,000, exactly 25%; below that a maintenance call is generated.

**A stock is quoted 24.80 bid / 24.95 ask. A retail client enters a market order to sell 100 shares. Ignoring commissions, what should the client expect?**

The bid is what a dealer will pay, so a customer sells at the bid (100 × $24.80 = $2,480) and buys at the ask. The $0.15 spread is the dealer compensation. Best execution obligates the firm to seek the most favorable terms reasonably available, but it does not eliminate the spread.

**A client holds stock trading at $46 and enters a sell stop order at $40 to limit downside. Overnight the company announces disappointing results and the stock opens at $34. What happens?**

A stop price is a trigger, not a guarantee. Once the stock trades at or below $40, the sell stop becomes a market order and fills at the next available price — here around $34. A client who wants price protection would use a stop-limit, accepting the risk that the order never fills at all.

**A customer buys stock in a cash account on Monday, sells it Tuesday for a profit, and never deposits the purchase funds, intending to use the sale proceeds to cover the buy. This practice is:**

In a cash account the customer must pay in full for the purchase. Selling before paying and using the proceeds to fund the original buy is freeriding. The standard consequence is a 90-day freeze during which the customer must have cash in the account before any purchase. Regular-way equity trades settle T+1.

**An investor places an order to purchase shares of an open-end mutual fund at 2:00 pm Eastern time. Which statement is correct?**

Open-end funds continuously issue new shares, so purchases are primary market transactions with the fund itself. Forward pricing requires the order to receive the next NAV calculated after receipt, normally at the 4:00 pm Eastern close. Secondary market trading between investors applies to closed-end funds and ETFs.
