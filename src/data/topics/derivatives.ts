import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'derivatives',
  title: 'Options, Futures, and Other Derivatives',
  weight: '~3%',
  order: 13,
  summary:
    "A derivative gets its value from something else. For the Series 65 you need the four basic option positions cold — maximum gain, maximum loss, and breakeven for each — plus the two advisory strategies that dominate the exam, covered calls and protective puts, and the structural difference between an option (a right) and a futures contract (an obligation).",
  body: `## What a derivative is

A **derivative** is a contract whose value is *derived* from an underlying asset — a stock, an index, a commodity, a currency, or an interest rate. No company issues it and no capital is raised. A derivative exists for one economic reason: **to move a risk from someone who does not want to bear it to someone who will accept it for a price**. The farmer who fears a price collapse and the speculator willing to bet against one are two halves of a single contract, and the market needs both.

Advisers use derivatives for three purposes the exam recognizes: **hedging** an existing position, **generating income**, and **speculating** on direction. Nothing about a derivative is inherently unsuitable; the strategy and the client profile decide.

Two structural facts underlie everything below. A derivative is a **contract between two parties**, not a claim on an enterprise: for every long there is a short, so before costs the option market is a **zero-sum transfer**, which is why buyer and writer of the same contract always share a breakeven. And because a small premium or deposit controls a large position, derivatives supply **leverage**, magnifying the hedge and the mistake in equal measure.

## Options vocabulary

An option is a contract between two parties covering, for equity options, **100 shares** of the underlying.

- A **call** gives the holder the right to **buy** the underlying at the strike price.
- A **put** gives the holder the right to **sell** the underlying at the strike price.
- The **buyer (holder, long position)** pays the **premium** and owns a **right** — never an obligation. Maximum loss is always the premium paid.
- The **writer (seller, short position)** receives the premium and takes on an **obligation** to perform if assigned.
- The **strike (exercise) price** is the price at which the underlying changes hands.
- **Expiration** ends the contract. **American style** may be exercised any time up to expiration; **European style** only at expiration. Listed equity options are American style; most **index options are European style and settle in cash**, not in shares.
- **LEAPS** are long-term equity options with expirations out to roughly three years, used for extended hedges or long-horizon directional views. A LEAP costs far more than a near-dated option on the same strike because it carries far more time value, but that time value bleeds away slowly at first, which is exactly what a client hedging a concentrated stock position over several years wants.

## Intrinsic value and time value

**Premium = intrinsic value + time value.** Every option premium splits into these two pieces and nothing else, so if you can compute one you have the other.

### Moneyness

**Intrinsic value** is how far the option is in the money, and it can never be negative:

- A call is **in the money** when the market price is **above** the strike — the holder can buy below market.
- A put is **in the money** when the market price is **below** the strike — the holder can sell above market.
- **At the money** means market equals strike; **out of the money** means the option has zero intrinsic value.

Intrinsic value floors at zero because the holder owns a **right**, never a duty: if exercising would lose money he simply does not exercise, so the worst a right can be worth is nothing. A stock at $53 makes the 50 put pointless to exercise, but it is not worth *minus* three — it is worth zero intrinsic value plus whatever the market pays for the chance the stock falls before expiration.

### What erodes time value

Everything above intrinsic value is **time value**, the market's price for uncertainty. Three forces drive it:

- **Time remaining.** More time means more chances for a favorable move. Time value **decays toward zero as expiration approaches**, and the decay **accelerates in the final weeks** — an option with one week left has almost no chance of a large move, so almost nothing is paid for the possibility.
- **Volatility.** A jumpy underlying is more likely to travel past the strike, so higher volatility raises the premium on calls and puts alike. A collapse in volatility can lose the holder money even if the stock never moves.
- **Distance from the strike.** Time value peaks at the money, where the outcome is genuinely uncertain, and shrinks for deeply in- or out-of-the-money options, where it is nearly settled.

An out-of-the-money option is **entirely time value**, which is why it expires worthless rather than partly worthless. And because time value reaches zero at expiration, **an option held to expiration is worth exactly its intrinsic value**.

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

### Reconstructing any payoff from first principles

Memorize four questions rather than twelve cells, and the table rebuilds itself.

**Who holds the right and who the obligation?** The buyer paid for a right he can abandon, so **his loss can never exceed the premium**; the writer was paid that premium and can never earn more, so **his gain caps at the premium received**. Two of the four cells are settled before you read the contract.

**Which way does the right point?** A call is a right to buy cheap and pays as the underlying rises; a put is a right to sell dear and pays as it falls.

**How far can the underlying travel that way?** Upward there is no ceiling — a stock can double or be taken over at any price — which produces **unlimited gain on a long call and unlimited loss on a short call**. Downward the journey stops at zero, which is why a long put's gain and a short put's loss are large but **finite**: the most a put can ever be worth is its strike.

**Where is breakeven?** The price at which intrinsic value exactly repays the premium: **strike + premium** for a call, **strike − premium** for a put. Both parties compute the same number because it is the same contract.

Run those on a short put and the answer falls out without a table: gain caps at the premium, the right points down, down stops at zero, breakeven is strike − premium, so maximum loss is the strike less the premium per share.

**Uncovered (naked) call writing carries theoretically unlimited risk** because the underlying can rise without bound and the writer must deliver shares purchased at any price. This is the highest-risk basic option position and is inappropriate for all but sophisticated, well-capitalized clients. Note the asymmetry the exam loves: an uncovered *put* writer faces a large but bounded loss because the stock stops falling at zero, while the uncovered *call* writer has nothing bounding him at all.

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

The insurance analogy is exact. The gap between today's price and the strike is the **deductible**; the premium is the price of the policy. An at-the-money put has no deductible and costs more; a far out-of-the-money put is cheap but the client absorbs the first slice of the decline herself. And like any policy it **expires** — three months of protection costs money every three months, and for a structural worry the renewals can quietly exceed the loss feared.

**Where a protective put stops being the answer:** if the client has no embedded gain and no reason to keep the shares, selling the stock is cheaper and permanent. The put earns its cost only when there is an affirmative reason to *hold* — a low basis, a lock-up, a control position, or long-term conviction paired with short-term fear.

**The nearest case that comes out the other way** is the sell stop order, which the exam pairs with the protective put. A stop costs nothing, which is its appeal, but it only becomes a market order once the stop price trades; in a gap opening the fill can be far below it. A stop is a trigger, not a guarantee. The put is a **contractual right to sell at the strike** however far or fast the stock falls, and that certainty is what the premium buys.

### Collar

Combine the two: own the stock, **buy a protective put** and **write a covered call** to pay for it. The result is a **defined range** — a floor from the put and a ceiling from the call, often at little or no net premium cost. Suitable for a client who wants to protect a concentrated holding cheaply and accepts a cap on upside.

The logic is worth stating plainly: the client is **selling the upside she does not expect to use in order to finance the downside she cannot afford**. A collar is never free in economic terms even when it is free in cash terms — the ceiling is the price. Collars are the standard answer for an executive holding a single low-basis stock who cannot or will not sell it.

## Index options and cash settlement

Index options track a broad or sector index rather than a single stock. They are typically **European style** and **settle in cash** for the in-the-money amount times a multiplier — no securities change hands, because there is no such thing as delivering "an index." Their exam use is **hedging systematic (market) risk** across a diversified portfolio, which single-stock options cannot do efficiently: a manager holding sixty positions would otherwise need sixty separate hedges. Buying index puts is the standard answer for protecting a broad equity portfolio against a market decline.

## Hedging versus speculating — the same contract, two purposes

The contract does not know which one you are doing; the **presence or absence of an offsetting exposure** decides. Buying a put on stock you own is a hedge, because the put gains what the shares lose. Buying the identical put on stock you do not own is a directional bet, because nothing sits on the other side of it. The same trade is prudent risk management in one account and pure speculation in the next.

That distinction drives the suitability answer. A hedge **reduces** risk already in the portfolio and can suit a conservative client; a speculative position **adds** risk and requires someone with the temperament, horizon, and capital to lose the entire stake. When a question describes an option trade, look first for the underlying position.

## Three positions carried through to a conclusion

### A covered-call income program meets a takeover

A client owns 1,000 shares of a utility bought years ago at $40, now $42, and wants income without selling. She writes 10 calls with a $45 strike three months out at a premium of 1.05, collecting 1.05 × 100 × 10 = **$1,050** — **2.5%** of the $42,000 position for the quarter, or near **10% annualized** if repeated. That arithmetic is why covered calls are sold as income, and it is correct as far as it goes.

A takeover bid then lifts the stock to $58. The calls are assigned and the shares go out at $45, so she realizes (45 − 40) × 1,000 = **$5,000** of stock gain plus the $1,050 premium, or **$6,050**. Unhedged she would have had (58 − 40) × 1,000 = **$18,000**. The calls cost **$11,950** of upside, eleven times the premium collected.

Run it the other way: if the utility falls to $30 instead, the position is worth $30,000 against a $40,000 basis, a $10,000 loss cut to **$8,950** by the premium — the premium absorbed **10.5%** of the decline and no more.

**The covered call capped the good outcome completely and cushioned the bad outcome barely.** The real risk was always the stock, and it still is.

### The uncovered call that cost fifteen times the premium

A speculator writes 1 uncovered call with a $60 strike at a premium of 2 while the stock trades at $55. He collects **$200**, the most he can ever make, and his breakeven is 60 + 2 = **$62**.

A tender offer arrives at $92. He is assigned, buys at $92 to deliver at $60, and loses (92 − 60) × 100 = **$3,200**, or **$3,000** net of premium — **fifteen times** what he was paid, from one overnight headline. The analysis never terminates: a bid at $150 produces an $8,800 net loss on the same $200 of income.

Contrast the same trader writing an uncovered $60 **put** at 2. His worst case is the stock reaching zero: (60 − 0) × 100 − 200 = **$5,800**. Large, painful, and — critically — **a number that exists**.

### Hedging a diversified portfolio with index puts

A client holds a $1,000,000 diversified portfolio that tracks a broad index closely. The index stands at 5,000 and its options carry a **$100 multiplier**, so one contract represents 5,000 × $100 = **$500,000** of exposure and covering the portfolio takes $1,000,000 / $500,000 = **2 contracts**. She buys 2 index 4,900 puts at 60, costing 60 × $100 × 2 = **$12,000**.

The market falls 12%. The index closes at 5,000 × 0.88 = **4,400** and the portfolio falls to $880,000, a **$120,000** loss. The puts finish 500 points in the money and **settle in cash**: (4,900 − 4,400) × $100 = $50,000 per contract, or **$100,000** for the two. Net of premium the hedge returned **$88,000**, so her all-in loss is $120,000 − $88,000 = **$32,000**.

That $32,000 decomposes like any insurance claim: the 100 index points between 5,000 and the 4,900 strike are the **deductible** (100 × $100 × 2 = $20,000) and the **$12,000** premium is the policy cost. $20,000 + $12,000 = $32,000.

Two boundaries. Index puts hedge **systematic (market) risk only** — had the market risen while her own holdings fell, the puts would have expired worthless and **unsystematic risk would be untouched**. And the hedge works only to the extent the portfolio tracks the index; hedging small-cap or sector holdings with a broad-market put leaves **basis risk**, the gap between what the hedge pays and what the portfolio lost.

## Exercise, assignment, and the OCC

Listed options are **issued, guaranteed, and cleared by the Options Clearing Corporation (OCC)**, which becomes the buyer to every seller and the seller to every buyer. That interposition is what makes an option a tradable security rather than a private promise: **no holder depends on the creditworthiness of the writer**. It also explains why the writer, not the buyer, posts and maintains margin — the writer holds the obligation the clearinghouse must guarantee.

Exercise runs one direction only. **Only the holder can exercise**; the writer can only wait to be **assigned**. On exercise the OCC assigns a randomly selected clearing member, which allocates to one of its short customers by **random selection or another fair method disclosed to customers**. A writer therefore cannot predict assignment, and a covered-call writer who wants to keep the shares must **buy the call back before assignment**, not after.

- **Exercise by exception.** Contracts finishing in the money at expiration are generally exercised automatically under OCC procedures unless the holder instructs otherwise, so an in-the-money option does not lapse through inattention. Out-of-the-money options simply expire.
- **Early exercise is usually irrational.** Exercising an American call early throws away the remaining time value; selling the contract almost always nets more. The classic exception is exercising just before an **ex-dividend date** to capture a dividend larger than the time value surrendered.

## Approval, disclosure, and what suitability means here

Before a customer trades options the firm must have a **registered options principal approve the account** and deliver the **options disclosure document (ODD) at or before account approval**; the signed **options account agreement** is then obtained from the customer **within 15 days after approval**. Accounts are approved in **levels**: a client cleared to buy calls and puts is not thereby cleared to write uncovered calls, and the riskiest strategies sit behind the highest approval.

The gate exists because options suitability is **strategy-level, not product-level**. Saying a client is "approved for options" means little; the same client may be entirely appropriate for a protective put on a concentrated holding and entirely inappropriate for uncovered writing. An adviser with discretion faces one more layer — **discretionary options trading generally requires specific authorization and principal approval** — and a fiduciary must be able to explain how each strategy served the client's stated objective. "The client was approved" answers the compliance question, not the fiduciary one.

## Futures and forwards

A **futures contract** is a binding **obligation** — for both parties — to buy or sell a set quantity of an asset at a set price on a set date.

Everything distinctive about futures follows from that one word. An option buyer pays a premium and owns a right he can abandon, so **no one needs collateral from him**. A futures buyer pays **no premium at all** — the contract starts at zero value to both sides, struck at a price both consider fair — and in exchange accepts a duty to perform. Because both sides can now lose, **both sides post margin**, and the clearinghouse settles gains and losses **daily** so credit exposure never accumulates. Right versus obligation is not a definitional nicety; it is why the two products are collateralized in completely different ways.

- **Standardized** as to quantity, quality, and delivery date; traded on **regulated exchanges** and cleared through a clearinghouse.
- A **forward** is the customized, privately negotiated cousin: any terms the parties want, traded **over the counter**, with **counterparty credit risk** and little liquidity.
- **Hedgers** use futures to lock in a price on something they produce or consume (a farmer, an airline, a miller). **Speculators** take the other side seeking profit and supply liquidity.
- Futures **margin is a performance bond**, not a loan or a down payment — a good-faith deposit, often a small percentage of contract value, marked to market daily with **maintenance margin calls** when the balance falls short. This produces very high leverage and the possibility of **losses exceeding the initial deposit**.
- Most positions are **closed by an offsetting trade before delivery** rather than by physical delivery. A hedger who is short wheat futures does not usually deliver wheat into the contract; he buys back the contract and sells his crop locally, and the futures gain or loss offsets the local price move.

A **short hedge** locks in a selling price for something the client owns or will produce; a **long hedge** locks in a buying price for something the client must purchase. The airline buying fuel futures and the farmer selling grain futures do the same thing from opposite sides: **convert an uncertain future price into a known one**, surrendering the favorable outcome to do it.

Contrast the collateral rules with equities. **Regulation T** governs credit extended to purchase securities and sets initial margin at **50%** — the customer borrows the rest and pays interest. A futures **performance bond** is neither a loan nor a partial payment; nothing is borrowed and no interest accrues, because nothing has been bought yet. Reasoning about futures margin as though it were Reg T is a standard exam trap.

## Swaps in brief

A **swap** is an OTC agreement to exchange cash flows. The most common is the **plain vanilla interest rate swap**, where one party pays a fixed rate and receives a floating rate on a **notional principal** that is never itself exchanged. Also seen: **currency swaps** and **credit default swaps** (protection against a borrower's default). Swaps are customized, illiquid, and carry counterparty risk; post-crisis rules push many standardized swaps into central clearing. For the Series 65, know the concept, the notional principal idea, and that swaps are institutional instruments, not retail recommendations.

## Suitability framing

Derivative questions usually resolve on risk profile. **Buying options** risks a known, limited premium; **writing uncovered options** risks far more than the premium and can be unlimited on calls. **Covered call = income with capped upside. Protective put = insurance with retained upside. Collar = both, cheaply, with a ceiling.** Futures and uncovered writing belong only with sophisticated, risk-tolerant, adequately capitalized clients — never with a retiree seeking income and capital preservation.

Four questions resolve most items:

1. **Is there an offsetting position?** No underlying holding means the trade is speculative however it is described.
2. **Is the loss bounded, and by what number?** Long options bound at the premium; short puts at the strike; short calls and short futures at nothing.
3. **Can the client meet a margin call without liquidating something else?** Short options and futures demand cash on a schedule the client does not control.
4. **Does the strategy match the stated objective, or only the client's mood?** An income objective supports covered calls; it does not support selling naked puts for premium, though both produce cash today.

Finally, using derivatives well can be the *conservative* choice. An adviser who lets an elderly client keep 70% of her net worth in one low-basis stock because "options are risky" has made a risk decision too, and a worse one. The protective put and the collar exist for exactly that client.`,
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
  workedExamples: [
    {
      title: 'Long call: breakeven, maximum gain, maximum loss',
      setup:
        "An investor buys 1 XYZ September 50 call at a premium of 4 while XYZ trades at $49. Find the breakeven, the maximum gain, the maximum loss, and the profit if XYZ is $60 at expiration.",
      steps: [
        "Translate the quote into dollars. One equity option covers 100 shares, so a premium of 4 costs 4 × 100 = $400.",
        "Breakeven: calls add. Strike + Premium = 50 + 4 = $54. XYZ must reach $54 before the holder is even.",
        "Maximum loss is the premium and nothing more — the holder owns a right he can simply abandon: $400.",
        "Maximum gain is unlimited. There is no ceiling on the stock price, and the call captures every dollar above the strike.",
        "Profit at $60: intrinsic value = market − strike = 60 − 50 = 10 per share, so 10 × 100 = $1,000.",
        "Net out the premium paid: $1,000 − $400 = $600. Check it against the breakeven: ($60 − $54) × 100 = $600. The two agree.",
      ],
      answer:
        "Breakeven $54; maximum loss $400 (the premium paid); maximum gain unlimited; profit at $60 is $600.",
      watchOut:
        "Mixing per-share and per-contract figures in the same answer. A premium quoted as 4 is $4 per share but $400 for the contract. Remember also that the WRITER of this same call has the identical $54 breakeven — only the direction flips, and it is the writer who carries the unlimited loss.",
    },
    {
      title: 'Long put: breakeven, maximum gain, maximum loss',
      setup:
        "An investor buys 1 ABC 40 put at 3. Find the breakeven, the maximum gain, and the maximum loss.",
      steps: [
        "Dollars first: premium 3 × 100 shares = $300 paid.",
        "Breakeven: puts subtract. Strike − Premium = 40 − 3 = $37.",
        "Maximum loss is the premium paid, $300. Like any option buyer, the holder can walk away from a right.",
        "Maximum gain: a put profits as the stock falls, and a stock can fall only to zero. At zero the holder sells shares worth $0 for $40: 40 × 100 = $4,000 of intrinsic value.",
        "Net the premium out of that best case: $4,000 − $300 = $3,700.",
        "Notice the shortcut this produces: $3,700 = breakeven of 37 × 100. Maximum gain on a long put is always the breakeven times the shares.",
      ],
      answer:
        "Breakeven $37; maximum loss $300; maximum gain $3,700, realized only in the extreme case where ABC goes to zero.",
      watchOut:
        "Adding the premium to the strike on a put. 40 + 3 = 43 is the trap answer, and it is the breakeven of a CALL. Calls add, puts subtract. Note too that a long put's gain is large but finite; only a long call is unlimited.",
    },
    {
      title: 'Covered call: breakeven, maximum gain, maximum loss',
      setup:
        "An investor buys 100 shares of DEF at $48 and writes 1 DEF 50 call at 3 against them. Find the breakeven, the maximum gain, and the maximum loss.",
      steps: [
        "Money in and out: the shares cost 100 × $48 = $4,800, and the premium received is 3 × 100 = $300.",
        "Net the premium against the cost: $4,800 − $300 = $4,500, which is $45 per share. Writing the call lowered the effective basis by the premium.",
        "Breakeven is that net basis: stock cost − premium received = $48 − $3 = $45 per share.",
        "Maximum gain: above $50 the shares are called away at the strike. Gain on the stock = strike − cost = 50 − 48 = $2 per share, plus the $3 premium kept.",
        "Add: $2 + $3 = $5 per share, or 5 × 100 = $500. Gains stop there no matter how high DEF goes.",
        "Maximum loss: the stock can fall to zero and only the premium cushions the fall. From the $45 net basis down to zero is $45 per share, or 45 × 100 = $4,500.",
      ],
      answer:
        "Breakeven $45; maximum gain $500, reached at $50 and capped there; maximum loss $4,500. The premium bought $3 a share of cushion, not protection.",
      watchOut:
        "Calling a covered call a hedge. It offsets exactly the premium — $3 a share here — while the position still loses $4,500 if DEF collapses. When a question asks how to protect a holding against a significant decline, the answer is a protective put, not a covered call.",
    },
    {
      title: 'Protective put: maximum loss on a hedged position',
      setup:
        "A client owns 100 shares of GHI purchased at $62 and buys 1 GHI 60 put at 2.50 to protect it. What is the maximum loss, the breakeven, and the upside?",
      steps: [
        "The put sets a floor: however far GHI falls, the client may sell at the $60 strike.",
        "Measure the unprotected decline — the gap between the purchase price and the floor: cost − strike = 62 − 60 = $2 per share.",
        "Add the cost of the insurance: the premium of 2.50 per share.",
        "Total per share: $2.00 + $2.50 = $4.50, so maximum loss = 4.50 × 100 = $450.",
        "Breakeven on the upside: the stock must first recover the premium spent, so 62 + 2.50 = $64.50.",
        "Above $64.50 the gain is unlimited. The put simply expires worthless and the client keeps the appreciation less the $250 premium.",
      ],
      answer:
        "Maximum loss $450; breakeven $64.50; upside unlimited less the premium. This is the standard answer for a client holding a large low-basis concentrated position who wants downside protection without selling and triggering a taxable gain.",
      watchOut:
        "Reporting the maximum loss as just the $250 premium. That is true only when the put is bought AT the money. Here the put is $2 out of the money, and that $2 per share of unprotected decline is part of the loss.",
    },
    {
      title: 'Splitting a premium into intrinsic value and time value',
      setup:
        "JKL stock trades at $53. Split each of these premiums into intrinsic value and time value: the JKL 50 call at 5.75, the JKL 55 put at 3.20, and the JKL 50 put at 0.90.",
      steps: [
        "Start from Premium = Intrinsic Value + Time Value, so Time Value = Premium − Intrinsic Value.",
        "JKL 50 call: a call is in the money when the market is ABOVE the strike. Intrinsic = market − strike = 53 − 50 = 3.00.",
        "Time value on the call = 5.75 − 3.00 = 2.75.",
        "JKL 55 put: a put is in the money when the market is BELOW the strike. Intrinsic = strike − market = 55 − 53 = 2.00.",
        "Time value on that put = 3.20 − 2.00 = 1.20.",
        "JKL 50 put: the market ($53) is above the strike ($50), so this put is out of the money. Intrinsic value can never be negative — it is 0, not −3.",
        "Time value on that put = 0.90 − 0 = 0.90, the entire premium.",
      ],
      answer:
        "50 call: 3.00 intrinsic + 2.75 time = 5.75. 55 put: 2.00 intrinsic + 1.20 time = 3.20. 50 put: 0 intrinsic + 0.90 time = 0.90. Multiply any of these by 100 for the contract amount.",
      watchOut:
        "Recording a negative intrinsic value for an out-of-the-money option — writing −3.00 for the 50 put instead of 0. Intrinsic value floors at zero. And because time value decays to zero at expiration, an option held to expiration is worth only its intrinsic value: that 50 put would expire worthless with JKL at $53.",
    },
    {
      title: 'Profit on a zero-cost collar at several prices',
      setup:
        "A client owns 100 shares of MNO with a cost basis of $70. She buys 1 MNO 65 put at 2.50 and writes 1 MNO 80 call at 2.50. Compute her profit or loss at expiration if MNO finishes at $55, at $70, and at $90.",
      steps: [
        "Net the premiums first: $2.50 paid for the put − $2.50 received on the call = $0. This is a zero-cost collar, so the option legs wash and only the stock outcome drives the result.",
        "Establish the range: the long put floors her sale price at $65, and the short call caps it at $80.",
        "At $55: the put is in the money, so she exercises and sells at $65. Stock result = 65 − 70 = −$5 per share, or −$500. Premiums net zero, so the loss is $500 — and that is the maximum loss no matter how far MNO falls.",
        "At $70: $70 sits between the $65 floor and the $80 ceiling, so both options expire worthless. The stock is unchanged from her $70 basis, so the result is $0. Breakeven is $70, the cost basis itself, precisely because the collar cost nothing.",
        "At $90: the short call is assigned and the shares go out at $80. Stock result = 80 − 70 = +$10 per share, or +$1,000. That is the maximum gain.",
        "Measure the price of the protection: holding the shares outright at $90 would have produced (90 − 70) × 100 = $2,000, so the cap gave up $2,000 − $1,000 = $1,000 of upside.",
      ],
      answer:
        "Loss of $500 at $55, breakeven at $70, gain of $1,000 at $90. The collar defines a range of −$500 to +$1,000 and costs nothing in premium, in exchange for surrendering everything above $80.",
      watchOut:
        "Treating a zero-cost collar as free in every sense. The premiums offset, but the client pays in foregone upside — $1,000 of it in the $90 scenario. The second trap is measuring the floor and ceiling from the cost basis rather than from the strikes: the maximum loss is the $5 per share between the $70 basis and the $65 put strike, not the full value of the position.",
    },
  ],
};
