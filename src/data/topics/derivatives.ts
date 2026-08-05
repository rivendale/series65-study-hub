import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'derivatives',
  title: 'Options, Futures, and Other Derivatives',
  weight: '~3%',
  order: 13,
  summary:
    "A derivative gets its value from something else. For the Series 65 you need the four basic option positions cold — maximum gain, maximum loss, and breakeven for each — plus the two advisory strategies that dominate the exam, covered calls and protective puts, and the structural difference between an option (a right) and a futures contract (an obligation).",
  body: `## What a derivative is

A **derivative** is a contract whose value is *derived* from an underlying asset — a stock, an index, a commodity, a currency, or an interest rate. Advisers use derivatives for three purposes the exam recognizes: **hedging** an existing position, **generating income**, and **speculating** on direction. Nothing about a derivative is inherently unsuitable; the strategy and the client profile decide.

## Options vocabulary

An option is a contract between two parties covering, for equity options, **100 shares** of the underlying.

- A **call** gives the holder the right to **buy** the underlying at the strike price.
- A **put** gives the holder the right to **sell** the underlying at the strike price.
- The **buyer (holder, long position)** pays the **premium** and owns a **right** — never an obligation. Maximum loss is always the premium paid.
- The **writer (seller, short position)** receives the premium and takes on an **obligation** to perform if assigned.
- The **strike (exercise) price** is the price at which the underlying changes hands.
- **Expiration** ends the contract. **American style** may be exercised any time up to expiration; **European style** only at expiration. Listed equity options are American style; most **index options are European style and settle in cash**, not in shares.
- **LEAPS** are long-term equity options with expirations out to roughly three years, used for extended hedges or long-horizon directional views.

## Intrinsic value and time value

**Premium = intrinsic value + time value.**

**Intrinsic value** is how far the option is in the money, and it can never be negative:

- A call is **in the money** when the market price is **above** the strike.
- A put is **in the money** when the market price is **below** the strike.
- **At the money** means market equals strike; **out of the money** means the option has zero intrinsic value.

Everything above intrinsic value is **time value**, which **decays toward zero as expiration approaches** (time decay accelerates in the final weeks). An out-of-the-money option consists entirely of time value. Higher volatility and more time remaining both raise the premium.

## The four basic positions

| Position | Market view | Maximum gain | Maximum loss | Breakeven |
| --- | --- | --- | --- | --- |
| **Long call** | Bullish | **Unlimited** | Premium paid | Strike **+** premium |
| **Short (uncovered) call** | Bearish / neutral | Premium received | **Unlimited** | Strike **+** premium |
| **Long put** | Bearish | Strike **−** premium (per share), i.e. all the way to zero | Premium paid | Strike **−** premium |
| **Short put** | Bullish / neutral | Premium received | Strike **−** premium (substantial) | Strike **−** premium |

Two structural facts to memorize rather than derive under time pressure:

1. **Buyer and writer of the same contract share the same breakeven.** Options are a zero-sum transfer; one party's gain is the other's loss.
2. **Call up, put down.** Add the premium to the strike for calls; subtract it for puts.

**Uncovered (naked) call writing carries theoretically unlimited risk** because the underlying can rise without bound and the writer must deliver shares purchased at any price. This is the highest-risk basic option position and is inappropriate for all but sophisticated, well-capitalized clients.

## The two most-tested advisory strategies

### Covered call

Own **100 shares** and write **one call** against them. The premium generates **income** and lowers the effective cost basis, providing **limited downside cushion** equal to the premium.

- **Maximum gain** is capped: strike price minus stock cost, plus premium received. If the stock rallies past the strike, the shares are called away and the investor forgoes further upside.
- **Maximum loss** is the stock's own downside, reduced by the premium.
- Suitability language: appropriate for an investor who is **neutral to modestly bullish** and willing to sell at the strike. It is an **income strategy**, not a hedge — a large decline still hurts.

### Protective put

Own the stock and **buy a put** on it. This is **portfolio insurance**: the put sets a **floor** at the strike, and the premium is the cost of that insurance.

- **Maximum loss** is limited to (stock cost − strike) + premium.
- **Upside remains unlimited**, less the premium paid.
- The classic exam use: a client with a **large low-basis concentrated position** who wants downside protection **without selling and triggering a taxable gain**.

### Collar

Combine the two: own the stock, **buy a protective put** and **write a covered call** to pay for it. The result is a **defined range** — a floor from the put and a ceiling from the call, often at little or no net premium cost. Suitable for a client who wants to protect a concentrated holding cheaply and accepts a cap on upside.

## Index options and cash settlement

Index options track a broad or sector index rather than a single stock. They are typically **European style** and **settle in cash** for the in-the-money amount times a multiplier — no securities change hands. Their exam use is **hedging systematic (market) risk** across a diversified portfolio, which single-stock options cannot do efficiently. Buying index puts is the standard answer for protecting a broad equity portfolio against a market decline.

## Approval, the OCC, and disclosure

Listed options are **issued, guaranteed, and cleared by the Options Clearing Corporation (OCC)**, which stands between buyer and seller and eliminates counterparty default risk. Before a customer trades options, the firm must obtain an **options account agreement**, have a **registered options principal approve the account**, and deliver the **options disclosure document (ODD) at or before account approval**. Approval levels restrict riskier strategies such as uncovered writing to appropriately qualified accounts.

## Futures and forwards

A **futures contract** is a binding **obligation** — for both parties — to buy or sell a set quantity of an asset at a set price on a set date.

- **Standardized** as to quantity, quality, and delivery date; traded on **regulated exchanges** and cleared through a clearinghouse.
- A **forward** is the customized, privately negotiated cousin: any terms the parties want, traded **over the counter**, with **counterparty credit risk** and little liquidity.
- **Hedgers** use futures to lock in a price on something they produce or consume (a farmer, an airline, a miller). **Speculators** take the other side seeking profit and supply liquidity.
- Futures **margin is a performance bond**, not a loan or a down payment — a good-faith deposit, often a small percentage of contract value, marked to market daily with **maintenance margin calls** when the balance falls short. This produces very high leverage and the possibility of **losses exceeding the initial deposit**.
- Most positions are **closed by an offsetting trade before delivery** rather than by physical delivery.

## Swaps in brief

A **swap** is an OTC agreement to exchange cash flows. The most common is the **plain vanilla interest rate swap**, where one party pays a fixed rate and receives a floating rate on a **notional principal** that is never itself exchanged. Also seen: **currency swaps** and **credit default swaps** (protection against a borrower's default). Swaps are customized, illiquid, and carry counterparty risk; post-crisis rules push many standardized swaps into central clearing. For the Series 65, know the concept, the notional principal idea, and that swaps are institutional instruments, not retail recommendations.

## Suitability framing

Derivative questions usually resolve on risk profile. **Buying options** risks a known, limited premium; **writing uncovered options** risks far more than the premium and can be unlimited on calls. **Covered call = income with capped upside. Protective put = insurance with retained upside. Collar = both, cheaply, with a ceiling.** Futures and uncovered writing belong only with sophisticated, risk-tolerant, adequately capitalized clients — never with a retiree seeking income and capital preservation.`,
  pitfalls: [
    "Do not treat the option buyer and the writer as having different breakevens — for the same contract they are identical; only the direction of gain and loss flips.",
    "A covered call is an income strategy with only a small cushion, not downside protection; if a question asks how to protect a position from a significant decline, the answer is a protective put, not a covered call.",
    "Writing an uncovered call has theoretically unlimited loss potential, while writing a put has large but finite loss potential (the strike falls only to zero) — the exam pairs these to test whether you noticed the difference.",
    "Index options are usually European style and settle in cash, so no shares are delivered; assuming physical delivery on an index contract is a common error.",
    "Futures margin is a performance bond posted by both buyer and seller and marked to market daily, not a Regulation T loan — and losses can exceed the amount deposited.",
    "A forward is customized and carries counterparty credit risk; a futures contract is standardized, exchange-traded, and clearinghouse-guaranteed. Do not use the terms interchangeably.",
    "Time value decays to zero at expiration, so an option held to expiration is worth only its intrinsic value — an out-of-the-money option simply expires worthless.",
  ],
  keyTerms: [
    {
      term: 'Call option',
      definition:
        'A contract giving the holder the right, but not the obligation, to buy 100 shares of the underlying at the strike price until expiration, and obligating the writer to sell if assigned.',
    },
    {
      term: 'Put option',
      definition:
        'A contract giving the holder the right, but not the obligation, to sell 100 shares of the underlying at the strike price until expiration, and obligating the writer to buy if assigned.',
    },
    {
      term: 'Premium',
      definition:
        "The price of the option, paid by the buyer and kept by the writer; it equals intrinsic value plus time value and represents the buyer's maximum possible loss.",
    },
    {
      term: 'Intrinsic value',
      definition:
        'The in-the-money amount of an option — market price minus strike for a call, strike minus market price for a put — never less than zero.',
    },
    {
      term: 'Covered call',
      definition:
        'Writing a call against 100 shares already owned; generates premium income and modest downside cushion but caps the upside at the strike price plus premium received.',
    },
    {
      term: 'Protective put',
      definition:
        'Buying a put on stock already owned to establish a price floor; functions as portfolio insurance, preserving upside while limiting loss, at the cost of the premium.',
    },
    {
      term: 'Options Clearing Corporation (OCC)',
      definition:
        'The clearing organization that issues and guarantees every listed option contract, standing between buyer and writer so neither bears the credit risk of the other.',
    },
    {
      term: 'Futures contract',
      definition:
        'A standardized, exchange-traded obligation for both parties to buy or sell a specified quantity of an asset at a set price on a set date, supported by a performance bond and daily mark to market.',
    },
    {
      term: 'Notional principal',
      definition:
        'The reference amount used to calculate the payments exchanged in a swap; it determines the cash flows but is never itself paid between the parties.',
    },
  ],
  confusions: [
    {
      dont: 'An option, which gives the holder a right the holder may abandon',
      with: 'A futures contract, which is a binding obligation on both the buyer and the seller',
    },
    {
      dont: 'Covered call — income strategy, capped upside, small downside cushion',
      with: 'Protective put — insurance strategy, unlimited upside, defined floor',
    },
    {
      dont: 'Futures — standardized, exchange-traded, clearinghouse-guaranteed',
      with: 'Forwards — customized, over the counter, exposed to counterparty default',
    },
    {
      dont: 'American style, exercisable any time before expiration (listed equity options)',
      with: 'European style, exercisable only at expiration (most index options)',
    },
    {
      dont: 'Uncovered call writing, with theoretically unlimited loss',
      with: 'Uncovered put writing, with large but finite loss because the stock can only fall to zero',
    },
  ],
  formulas: [
    {
      name: 'Long call breakeven',
      formula: 'Breakeven = Strike price + Premium paid',
      note: 'The same breakeven applies to the writer of that call; above it the holder profits and the writer loses.',
    },
    {
      name: 'Long put breakeven',
      formula: 'Breakeven = Strike price − Premium paid',
      note: 'Calls add the premium, puts subtract it. Maximum gain on a long put is the breakeven itself, since the stock can fall only to zero.',
    },
    {
      name: 'Option premium components',
      formula: 'Premium = Intrinsic value + Time value',
      note: 'Intrinsic value is never negative; an out-of-the-money option is all time value and decays to zero at expiration.',
    },
    {
      name: 'Covered call maximum gain',
      formula: 'Max gain = (Strike price − Stock cost) + Premium received',
      note: 'Per share. Gains stop there because the shares are called away above the strike.',
    },
    {
      name: 'Protective put maximum loss',
      formula: 'Max loss = (Stock cost − Strike price) + Premium paid',
      note: 'Per share. If the put is bought at the money, the maximum loss is just the premium.',
    },
  ],
};
