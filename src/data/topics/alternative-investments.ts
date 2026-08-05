import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'alternative-investments',
  title: 'Alternative Investments and Direct Participation',
  weight: '~3%',
  order: 15,
  summary:
    "REITs, limited partnerships, hedge funds, private equity, commodities, structured products, and digital assets share three exam themes: flow-through or special tax treatment, serious illiquidity, and heightened disclosure and suitability duties. Know the REIT income and distribution tests, the difference between a general and a limited partner, and who may buy a private fund.",
  body: `## The common thread

Everything in this topic sits outside the standard stock-bond-fund universe. Whatever the wrapper, three questions decide most exam items:

1. **How is it taxed** — flow-through, ordinary income, or something special?
2. **How liquid is it** — can the client get out, at what price, and when?
3. **Who may buy it**, and what must be disclosed?

Alternatives can add diversification because their returns are less correlated with public markets, but **illiquidity, valuation opacity, and layered fees** mean an adviser must document suitability carefully.

One caution about the diversification argument itself. Reported correlations for private assets are flattered by **appraisal-based valuations**: an asset marked quarterly by an appraiser moves less on paper than an identical asset priced every second on an exchange, and smooth reported returns look like low volatility and low correlation. The economic risk did not disappear; only its measurement did. That is worth remembering before an adviser tells a client that adding a private fund reduces portfolio risk.

## Real estate investment trusts

A **REIT** is a company that owns or finances income-producing real estate and elects special tax treatment so that it is **not taxed at the entity level on income it distributes**.

### Types

- **Equity REIT** — owns and operates properties; income is mostly rent. The most common type.
- **Mortgage REIT** — lends against real estate or buys mortgages and mortgage-backed securities; income is interest, so these are highly sensitive to **interest rate spreads** and often use leverage.
- **Hybrid REIT** — a mix of both.

### Qualification tests

- **75% income test** — at least **75% of gross income** must come from real estate sources: rents, mortgage interest, gains on real property.
- **95% income test** — at least **95% of gross income** must come from those real estate sources plus other passive sources such as dividends and interest.
- **75% asset test** — at least **75% of assets** in real estate, cash, and government securities.
- **Distribution requirement** — the REIT must distribute at least **90% of its taxable income** to shareholders to keep its status. This is why REITs pay high yields — it is a legal requirement, not generosity, and it also leaves little retained capital, forcing REITs to raise money externally.

Why 90%? Because the REIT is a **conduit**, not an operating company for tax purposes. Congress agreed to waive entity-level tax on distributed income so small investors could own commercial real estate without the double taxation a corporation would impose — and the price of that waiver is that the income must actually pass through rather than accumulate inside the shell. Anything the REIT retains is taxed at the entity level like ordinary corporate income.

That single rule cascades into everything else about REITs. Because a REIT cannot retain earnings, it **cannot finance growth internally**: expansion requires issuing new shares or new debt. So REIT share prices are unusually sensitive to the cost of capital, REITs run more leverage than most equities, and a REIT that must raise equity into a weak market may dilute existing holders at exactly the wrong time. The high yield and the external financing dependence are the same fact viewed twice.

### Taxation

REIT dividends are generally **taxed to the shareholder as ordinary income**, not at qualified-dividend rates, because the income was never taxed at the entity level. There is nothing punitive here — the qualified-dividend rate exists to soften double taxation, and a REIT distribution was never taxed once.

A single distribution can arrive in three tax flavors, reported on the year-end statement:

- **Ordinary income** — the bulk of most REIT distributions.
- **Capital gain distributions** — the shareholder's share of gains on property the REIT sold.
- **Return of capital** — the portion in excess of taxable income, often because **depreciation** reduces taxable income below cash flow. Return of capital is not taxed now; it **reduces basis**, so it is deferred gain rather than free money, and a shareholder who ignores it will overstate basis and understate gain on sale.

Legislation has at times allowed individuals a deduction against qualified REIT dividends as pass-through business income; because that treatment has changed with tax law and carries expiration dates, verify the current rule rather than memorizing a rate. Note the structural point instead, which does not change: **a REIT passes through income but does not pass through losses** — that distinguishes it from a limited partnership.

### Listed vs non-traded

**Listed REITs** trade on exchanges with daily pricing and real liquidity. **Non-traded (public non-listed) REITs** are registered but do not trade: valuations are estimated and infrequent, **upfront commissions and offering costs are high**, redemption programs are limited and can be suspended, and early distributions are sometimes funded from offering proceeds or borrowings rather than operations. They are among the most heavily examined suitability problems in state enforcement.

Three mechanics do the damage:

- **The front-end load reduces the money that goes to work.** Selling commissions, dealer manager fees, and organization and offering expenses come off the top, so the estimated per-share value published a year or two later is often below the price the client paid — not because the properties fell, but because the client never bought a full dollar of them.
- **Redemption programs are a courtesy, not a right.** They are typically capped at a small percentage of shares outstanding per year, priced at a discount to estimated value, funded only from new subscriptions or specified sources, and **suspendable by the board** — usually precisely when many holders want out at once.
- **Distributions can exceed cash from operations.** A distribution funded from offering proceeds or borrowings is partly the client's own money returned with a yield label on it. The prospectus discloses this; the sales conversation often does not.

Liquidity ultimately arrives only through a **liquidity event** — listing on an exchange, a merger, or an orderly sale of the portfolio — on a timetable the sponsor controls and frequently extends. Many state guidelines cap how much of a client's liquid net worth may go into non-traded REITs and similar programs; the percentage varies by state and by program, so check the specific standard rather than assuming a national number.

### When the redemption program closes

A client invests **$50,000** in a non-traded REIT at the **$10.00** offering price, receiving **5,000 shares**. Two years later she needs cash. The board's most recent **estimated per-share value is $8.75**, reflecting the front-end load and distributions that outran operating cash flow.

The share redemption program prices early redemptions at **92% of estimated value**: $8.75 × 0.92 = **$8.05 per share**. On all 5,000 shares that would be **$40,250** against $50,000 invested. But the program is capped and oversubscribed, and this quarter it fills only **40%** of requests — she gets 2,000 shares redeemed for 2,000 × $8.05 = **$16,100** and joins a queue for the rest, with no assurance the board keeps the program open.

Set that beside a listed REIT: 5,000 shares sold at the market price, in full, settling **T+1**. The listed holder may dislike the price; the non-traded holder cannot get one. **Registration is a disclosure status, not a liquidity feature** — that sentence answers a large share of exam questions on this product.

## Direct participation programs and limited partnerships

A **direct participation program (DPP)** is a pooled entity — usually a **limited partnership** or an LLC — that passes **income, gains, losses, deductions, and credits directly through to the investors**, avoiding entity-level tax. The Series 65 phrase to recognize is **flow-through (conduit) taxation**.

### Roles

- The **general partner (GP)** manages the program, makes all decisions, and has **unlimited personal liability** for partnership obligations. The GP owes fiduciary duties to the limited partners.
- **Limited partners (LPs)** contribute capital, receive the flow-through tax items, and have **liability limited to their investment plus any amount they have committed to contribute**. The critical caveat: an LP who **takes an active role in management can lose limited liability**.

The bargain is symmetrical and worth stating as one sentence: **the limited partner trades control for protection**. Limited liability exists because outsiders dealing with the partnership can rely on the general partner being personally answerable; a limited partner who starts giving orders looks to those outsiders like a general partner and is treated as one. Partnership statutes generally leave room for an LP to **vote on major matters specified in the agreement, consult with the general partner, or guarantee partnership debt** without forfeiting the shield — what forfeits it is exercising day-to-day management authority.

### Common program types

- **Real estate programs** — rental income plus depreciation deductions; raw-land programs are pure appreciation plays with no income. **Depreciation** is what makes real estate programs distinctive: it is a non-cash deduction, so a property can distribute cash while reporting a tax loss. The deduction is not forgiven, only deferred — on sale, **depreciation recapture** claws back the benefit at a less favorable rate than ordinary long-term gain.
- **Oil and gas programs** — **exploratory (wildcatting)** carries the highest risk with the highest potential return; **developmental** drills near proven reserves; **income** programs buy producing wells for cash flow. Special deductions include **intangible drilling costs** and **depletion allowances**. The distinction to hold: **intangible drilling costs** — labor, fuel, site preparation, things with no salvage value — are generally deductible **currently**, while tangible equipment such as casing and pumps is **capitalized and depreciated**. **Depletion** is the extractive-industry analogue of depreciation, recognizing that every barrel produced permanently reduces the reserve.
- **Equipment leasing programs** — steady lease income and depreciation, but exposure to obsolescence and residual value risk.

### Risks and tax limits

- **Illiquidity is the defining risk.** There is no meaningful secondary market for most LP interests; investors may be locked in for the life of the program, and any resale is typically at a steep discount.
- **Passive activity losses generally offset only passive income**, not wages or portfolio income. Suspended losses carry forward and are released on full disposition of the interest. An adviser who pitches a DPP as a shelter for salary income is describing something the tax rules do not allow.
- Economic viability must come first: a program justified only by tax benefits is an **abusive tax shelter**.

Two limits stand between an allocated loss and a deduction, and they apply in order.

**First, the at-risk rules.** A partner may deduct losses only to the extent of the amount she has genuinely put at economic risk: cash contributed, the adjusted basis of property contributed, and debt for which she is **personally liable**. Ordinary **nonrecourse** debt does not count, because a borrower who can walk away from a loan has not risked anything. Real estate gets a carve-out — **qualified nonrecourse financing** secured by real property and borrowed from a commercial lender does count toward the at-risk amount, which is one reason real estate programs can generate deductible losses that other programs cannot. At-risk amount rises with income allocations and further contributions and falls with losses and **cash distributions**.

**Second, the passive activity loss rules.** A loss that clears the at-risk hurdle still meets the passive-loss wall: it may offset **passive income only** — income from other businesses in which the taxpayer does not materially participate. Wages, interest, dividends, and capital gains are **not passive income**, and portfolio income in particular is the distractor the exam plants. A limited exception lets some actively participating owners of rental real estate deduct a capped amount against non-passive income, phased out at higher incomes; it does not rescue a passive limited partner.

Suspended losses do not vanish. They carry forward indefinitely and are **released in full on a complete disposition of the interest to an unrelated party** — first against gain from that activity, then against other passive income, then against ordinary income.

One exception worth knowing because it reverses the usual answer: a **working interest in oil and gas held without limited liability protection** is **not** treated as a passive activity, so its losses can offset ordinary income. The investor pays for that treatment with unlimited liability for well operations.

### Suspended losses released at disposition

An investor buys a real estate limited partnership interest for **$100,000**. Over three years the program allocates her **$12,000** of loss annually — **$36,000** in total — and distributes **$4,000** of cash each year, **$12,000** in total. She has no other passive income, so **none** of the $36,000 is deductible; it all suspends.

In year four she sells the interest to an unrelated buyer for **$85,000**. Her basis is not the original $100,000: allocated losses reduce basis whether or not they were deducted, and cash distributions reduce it too. Basis = $100,000 − $36,000 − $12,000 = **$52,000**. Gain on sale = $85,000 − $52,000 = **$33,000**.

Now the disposition releases the suspended losses. The $36,000 offsets the $33,000 of passive gain first, leaving **$3,000** deductible against her other income. Three years of paper losses that she could not use produced, in the end, a $3,000 deduction and a fully taxed gain — with the caveat that part of that gain may be **depreciation recapture** taxed above the long-term capital gain rate.

The lesson for the suitability discussion: **a program marketed as a tax shelter can deliver its deductions many years after the client expected them, or never**, if the client has no passive income and never disposes of the interest.

## Hedge funds

A **hedge fund** is a privately offered pooled vehicle that relies on an exclusion from investment company registration, so it can use leverage, short selling, derivatives, and concentrated positions freely.

- **Access is restricted.** Funds relying on the **3(c)(1)** exclusion limit beneficial owners (generally **no more than 100**) and sell to **accredited investors**; **3(c)(7)** funds sell only to **qualified purchasers** — broadly, individuals with at least **$5 million in investments** — and may have many more holders. Accredited investor status for an individual generally means **$1 million net worth excluding the primary residence**, or income of **$200,000 (or $300,000 with a spouse) in each of the two most recent years**, with additional professional-credential paths.
- **Lock-up periods** bar withdrawals for an initial term (often one year or more); after that, redemptions are limited to scheduled windows — commonly quarterly, with advance written notice — and are subject to **gates** that cap the share of the fund redeemable in any one period. Managers may also **suspend redemptions** or place hard-to-value holdings in a **side pocket**.
- **Fees follow the "2 and 20" pattern** — roughly a 2% management fee plus a 20% **performance (incentive) allocation**, often subject to a **high-water mark**. Note the regulatory overlay: a state-registered or SEC-registered adviser may charge performance fees only to clients meeting the **qualified client** standard.

The restrictions are not arbitrary, and knowing why makes them easy to reconstruct:

- **Why the gates exist.** A fund holding illiquid positions cannot honor daily redemptions without dumping its best assets first, which harms the investors who stay. Lock-ups and gates **match the liquidity of the liabilities to the liquidity of the assets** — the same logic that makes an open-end mutual fund hold liquid securities and a closed-end fund not.
- **Why transparency is limited.** Disclosing positions in real time would let others trade against a fund unwinding a large or short position. The investor's protection is therefore contractual and after the fact — audited financials, an independent administrator, and a third-party custodian — not position-level visibility.
- **Why the high-water mark matters.** Without it a manager could lose 20% and then charge a performance fee on the recovery. The high-water mark means the fee resumes only above the previous peak. A **hurdle rate** goes further, charging only on returns above a stated threshold. Neither cures the underlying asymmetry: the manager shares the gains but not the losses, and a fund that falls far below its mark may simply close and start fresh.
- **Why the gates on who may invest.** The exclusions are the deal — a fund escapes Investment Company Act registration precisely because its investors are presumed able to fend for themselves. **3(c)(1)** buys that with a small holder count; **3(c)(7)** buys it with a much higher wealth standard and can therefore admit many more investors.
- **Strategies** at a high level: long/short equity, market neutral, global macro, event-driven and merger arbitrage, distressed debt, convertible arbitrage, and managed futures. Leverage and derivative use mean losses can exceed what a long-only fund could produce.
- **Funds of hedge funds** add diversification and access but **stack a second layer of fees** on top of the underlying managers.

## Private equity and venture capital

**Private equity** funds buy controlling stakes in mature private companies (or take public companies private), improve or restructure them, and exit through a sale or IPO — often using substantial debt in a **leveraged buyout**. **Venture capital** funds early-stage companies with high failure rates and a small number of outsized winners.

Both share a profile: **committed capital drawn down over time (capital calls)**, holding periods of **seven to twelve years**, **J-curve** returns (early losses and fees before gains), no interim liquidity, and valuations that are estimates rather than market prices. Suitable only for investors with long horizons and the capacity to absorb a total loss.

Two features surprise clients and therefore appear on exams. **A commitment is not an investment.** An investor who commits $500,000 may hold most of it in cash for years waiting on capital calls, and a **failure to fund a call can forfeit the entire interest** under the partnership agreement — so the liquidity requirement is not just "can she afford to lose it" but "can she produce cash on demand for a decade." And the **J-curve** is arithmetic, not misfortune: management fees are charged on committed capital from day one while portfolio companies are still being bought, so early reported returns are negative by construction. Judging a fund by its year-two number is meaningless, which is also why **vintage year** — the year the fund began investing — is the only fair basis for comparing one fund to another.

The manager's share of profits, the **carried interest**, is the private-equity cousin of the hedge fund incentive fee and raises the same alignment question: the general partner shares the upside without sharing the downside.

## Commodities and precious metals

Exposure can be direct (physical bullion, with **storage, insurance, and authentication costs** and no income), through **futures contracts** (high leverage, daily mark to market, roll costs), through **commodity pools and managed futures funds**, or through **commodity-linked ETFs and ETNs**. The case for them is **inflation hedging and low correlation**; the caution is that commodities **produce no cash flow**, so the entire return depends on price movement — there are no earnings to grow and no coupons to reinvest, and valuation is purely supply and demand.

The structural point most clients miss is that **a futures-based fund does not own the commodity**. It owns near-dated contracts and must **roll** them forward before expiration, selling the expiring contract and buying a later one. When the later contract is more expensive than the near one — **contango** — every roll buys high and sells low, and the drag accumulates. When the later contract is cheaper — **backwardation** — the roll adds return. Note also the wrapper: an **ETN is an unsecured note of the issuing bank**, so its holder carries issuer credit risk that an ETF holding actual futures or bullion does not.

### Contango and a fund that tracks nothing

Suppose a commodity trades at a spot price of **$80** and the next-month futures contract trades at **$82** — a market in contango. A fund holding front-month contracts buys at $82; if the spot price is still $80 when that contract expires, the contract converges to spot and the fund loses $2 on an $82 position, a **2.44%** roll loss.

Now repeat that twelve times over a year with **spot never moving at all**. Compounding the roll loss gives (80/82) raised to the twelfth power, or about **0.744** — the fund is left with roughly **74 cents on the dollar**, a decline of about **25.6%**, while the commodity a client thought she owned finished exactly where it started.

The boundary: in **backwardation** the same mechanism runs in reverse and adds to return. The lesson is not that these products are defective but that **a futures-based commodity fund tracks the futures curve, not the spot price**, and a client told she is "buying oil" has been told something untrue.

## Structured products

A **structured product** packages a **debt obligation of an issuer** with an embedded derivative to produce a customized payoff — a note offering principal protection with capped index participation, or a **reverse convertible** paying a high coupon but delivering shares if a stock falls below a barrier. Three points get tested: the investor bears the **issuer's credit risk** (the "protection" is only as good as the bank), the products are **illiquid** with only issuer-supported secondary pricing, and **embedded costs are hard for a client to see**.

Take the pieces apart and the economics become visible. A "principal protected" note is essentially a **zero-coupon bond** of the issuer maturing at par, plus a **call option** bought with whatever the bond left over, minus the issuer's structuring margin and the distributor's fee — none of which appears as an explicit expense ratio. Two consequences follow: the protection is only the bond leg, so **issuer failure defeats it entirely** no matter how the index performed; and the client generally receives **price appreciation only, without the index dividends**, which over a multi-year term is a large silent cost.

The reverse convertible runs the other way: the high coupon is really an **option premium the client earned by writing a put** on the reference stock, which is why the "yield" is high and why she can be delivered shares worth far less than her principal. Any time a structured product offers a striking yield, the first question is what option the client has unknowingly sold.

**The nearest case that comes out the other way** is the market-linked or structured **certificate of deposit**. Deposit insurance can cover the principal within applicable limits and rules, which genuinely changes the credit analysis relative to a note — but it does not cover the linked return, and the product remains illiquid and capped. Coverage limits and eligibility rules change, so confirm the current standard rather than quoting a figure from memory.

## Digital assets

Cryptocurrencies and tokens are highly volatile and held through custody arrangements with **operational risks** — key loss, exchange failure, hacking — that do not exist for traditional securities. Regulatory framing is what the exam cares about: **state regulators and NASAA treat many digital-asset offerings, particularly token sales and yield or staking programs, as investment contracts and therefore securities under the Howey test** — an investment of money in a common enterprise with an expectation of profits derived from the efforts of others. An adviser recommending digital assets owes the same registration, custody, disclosure, and suitability duties as with any other security.

## Suitability and disclosure — the through-line

For every product above, an adviser must analyze **liquidity needs, time horizon, net worth, tax posture, and sophistication**, and must disclose **fees, conflicts of interest, valuation methodology, and the absence of a secondary market**. Describing a private, illiquid, estimated-value product as if it were as safe and liquid as a listed security is a fraudulent or unethical practice, whatever the eventual return.

An illiquid recommendation demands a specific analysis, and it is worth running in this order:

1. **Map the client's cash needs against the lock-up.** Not merely "does she need this money" but *when could she need it*, including the emergency the plan does not anticipate. A ten-year holding period on a client with an eight-year horizon is unsuitable no matter how attractive the return profile.
2. **Size the position against liquid net worth, not total net worth.** Home equity and retirement accounts do not pay next year's bills. Many state guidelines express concentration limits in exactly these terms.
3. **Confirm the client qualifies — and that qualifying is not the whole analysis.** Accredited or qualified purchaser status is a **gate, not a suitability finding**. A newly accredited investor with a single concentrated fortune may be a worse candidate than a smaller, better-diversified one.
4. **Identify how the product will be valued and how often.** If the price on the statement is an estimate produced by the sponsor, say so plainly, and say what would cause it to change.
5. **Total the fee load through every layer.** A fund of funds charges above its underlying managers; a non-traded program charges upfront, ongoing, and at the liquidity event. The client should hear one number.
6. **Plan the exit before the entry.** Ask what the client will do if she needs out in year three, and write down the honest answer — that she may not be able to.

Two obligations run past the sale. **Eligibility is checked at purchase, not maintained afterward**: a client who ceases to be accredited does not automatically get out. And a fiduciary's duty to monitor does not lapse because the position is illiquid — an adviser who cannot obtain a defensible valuation still has to tell the client that.`,
  pitfalls: [
    "A REIT passes income through to shareholders but does NOT pass losses through — only a direct participation program provides flow-through of losses, and the exam pairs these to test the distinction.",
    "REIT dividends are generally ordinary income to the shareholder, not qualified dividends, because the REIT deducted them at the entity level; treating them as qualified-rate income is a common error.",
    "The 90% figure is the distribution requirement; the 75% and 95% figures are the gross income tests. Do not swap the numbers.",
    "A limited partner who participates in management can lose limited liability and be treated like a general partner — limited liability is conditional, not automatic.",
    "Passive activity losses from a DPP can offset only passive income, not salary or portfolio income; suspended losses carry forward until the interest is fully disposed of.",
    "A non-traded REIT is registered but illiquid — registration is not liquidity, estimated valuations are not market prices, and redemption programs can be limited or suspended entirely.",
    "'Principal protected' structured notes are unsecured obligations of the issuer; if the issuer fails the protection fails, no matter how the index performed.",
    "Accredited investor and qualified purchaser are different thresholds — roughly $1 million net worth excluding the primary residence (or the income test) for accredited status, versus $5 million in investments for a qualified purchaser.",
  ],
  keyTerms: [
    {
      term: 'REIT',
      definition:
        'A company owning or financing income-producing real estate that avoids entity-level tax by meeting income and asset tests and distributing at least 90% of its taxable income to shareholders.',
    },
    {
      term: 'Non-traded REIT',
      definition:
        'A registered REIT whose shares do not trade on an exchange; valuations are estimated and infrequent, upfront costs are high, and redemption is limited or subject to suspension.',
    },
    {
      term: 'Direct participation program (DPP)',
      definition:
        'A pooled entity, usually a limited partnership, that passes income, gains, losses, deductions, and credits directly through to investors without taxation at the entity level.',
    },
    {
      term: 'General partner',
      definition:
        'The party that manages a limited partnership, makes all operating decisions, owes fiduciary duties to the limited partners, and bears unlimited personal liability for partnership obligations.',
    },
    {
      term: 'Passive activity loss',
      definition:
        'A loss from a business in which the taxpayer does not materially participate; it may offset passive income only, with unused amounts carried forward until the interest is fully disposed of.',
    },
    {
      term: 'Accredited investor',
      definition:
        'An individual meeting a net worth test of $1 million excluding the primary residence, or income of $200,000 individually or $300,000 jointly in each of the two most recent years, or holding qualifying professional credentials.',
    },
    {
      term: 'Qualified purchaser',
      definition:
        'A higher private-fund standard, generally an individual owning at least $5 million in investments, used by funds relying on the 3(c)(7) exclusion from investment company registration.',
    },
    {
      term: 'Lock-up period',
      definition:
        "An initial term during which a hedge fund investor may not withdraw capital; after it expires, redemptions are still limited to scheduled dates and may be gated or suspended.",
    },
    {
      term: 'Structured product',
      definition:
        "A debt obligation of an issuer combined with an embedded derivative to create a customized payoff; the holder bears the issuer's credit risk and typically has little or no secondary market.",
    },
    {
      term: 'Howey test',
      definition:
        'The standard for an investment contract — an investment of money in a common enterprise with an expectation of profits derived primarily from the efforts of others — used by state regulators to treat many digital-asset offerings as securities.',
    },
  ],
  confusions: [
    {
      dont: 'REIT, which passes income through but never losses',
      with: 'Limited partnership DPP, which passes both income and losses through to investors',
    },
    {
      dont: 'The 90% distribution requirement a REIT must satisfy',
      with: 'The 75% and 95% gross income tests that qualify it as a REIT in the first place',
    },
    {
      dont: 'General partner, with management authority and unlimited liability',
      with: 'Limited partner, passive, with liability limited to the amount invested and committed',
    },
    {
      dont: 'Accredited investor, the Regulation D standard for private placements',
      with: 'Qualified purchaser, the higher $5 million-in-investments standard for 3(c)(7) funds',
    },
    {
      dont: 'A listed REIT, exchange-traded and priced continuously',
      with: 'A non-traded REIT, registered but illiquid and carried at an estimated value',
    },
    {
      dont: 'A structured note, an unsecured issuer obligation with an embedded derivative',
      with: 'An insured or collateralized instrument where an asset pool actually backs the promise',
    },
  ],
  workedExamples: [
    {
      title: 'Applying the 90% REIT distribution requirement',
      setup:
        "An equity REIT reports taxable income of $40,000,000 for the year, before any deduction for dividends paid. It has 20,000,000 shares outstanding. What is the minimum it must distribute to keep REIT status, what is that per share, and what happens if it distributes $37,000,000 instead?",
      steps: [
        "Identify the right test. The 75% and 95% figures are the GROSS INCOME tests that qualify the company as a REIT. The distribution requirement is a separate rule set at 90% of taxable income.",
        "Apply it: 90% × $40,000,000 = $36,000,000 is the minimum distribution.",
        "Convert to a per-share amount: $36,000,000 / 20,000,000 shares = $1.80 per share.",
        "Test the actual distribution of $37,000,000. Per share that is $37,000,000 / 20,000,000 = $1.85, which is above the $1.80 minimum, so REIT status is preserved.",
        "Find the retained amount: $40,000,000 − $37,000,000 = $3,000,000. Distributing only 90% does not make the other 10% tax-free — the REIT deducts what it pays out, so the $3,000,000 it keeps is taxed at the entity level, and undistributed amounts can also draw an excise tax.",
        "Draw the structural conclusion: the only way to eliminate entity-level tax entirely is to distribute essentially all taxable income, which is why REITs retain almost no capital and must raise money externally to grow.",
      ],
      answer:
        "The REIT must distribute at least $36,000,000, or $1.80 per share. A $37,000,000 distribution ($1.85 per share) satisfies the test, and the $3,000,000 retained is taxed at the entity level.",
      watchOut:
        "Reaching for the wrong percentage. Using the 75% asset or income test gives $30,000,000 and using the 95% income test gives $38,000,000 — both are real REIT rules, and neither is the distribution requirement. The second error is assuming a REIT that distributes exactly 90% pays no corporate tax at all; the retained 10% is taxable to the REIT.",
    },
    {
      title: "A non-traded REIT's front-end load and the return needed to break even",
      setup:
        "A client invests $100,000 in a non-traded REIT at an offering price of $10.00 per share. The prospectus discloses selling commissions of 7%, a dealer manager fee of 3%, and organization and offering expenses of 2.5%. How much of her money is actually invested in real estate, and what return must the portfolio earn for her to get back to $100,000? Assume a 6% annual total return once the money is at work.",
      steps: [
        "Total the front-end load: 7% + 3% + 2.5% = 12.5%.",
        "Convert to dollars: 12.5% × $100,000 = $12,500 comes off the top.",
        "Amount actually invested: $100,000 − $12,500 = $87,500. She still owns $100,000 / $10.00 = 10,000 shares, but each share represents about $8.75 of assets on day one, which is why the first published estimated value so often lands near that figure.",
        "Compute the gain needed to return to $100,000: $100,000 − $87,500 = $12,500.",
        "Express it as a return on the money at work: $12,500 / $87,500 = 1/7 = 14.29%. Note the asymmetry — a 12.5% load takes a 14.29% gain to undo, because the gain is earned on a smaller base.",
        "Convert to time at the assumed 6% return: solve 1.06 raised to n = 100,000 / 87,500 = 1.142857, giving n = 2.29 years. Check it: $87,500 × 1.06^2.29 = $100,000.",
        "Compare with a listed REIT bought in a fee-based account, where essentially the full $100,000 is at work from day one and there is no hole to climb out of.",
      ],
      answer:
        "Only $87,500 is invested. She needs a 14.29% gain — roughly 2.3 years of a 6% total return — simply to return to her original $100,000, before any of the distributions she was shown in the illustration are counted as profit.",
      watchOut:
        "Assuming the required return equals the load, answering 12.5%. It does not: losing 12.5% requires gaining 14.29% to recover, and quoting the smaller number understates the hurdle. The second trap is treating early distributions as evidence the hole is filling — a distribution funded from offering proceeds or borrowings is the client's own capital coming back, not a return on it.",
    },
    {
      title: 'Passive activity loss limited in the current year',
      setup:
        "A client has $210,000 of wages, $15,000 of dividend and interest income, $9,000 of passive income from an equipment leasing limited partnership, and a $34,000 loss allocated from a real estate limited partnership in which she is a passive limited partner. Assume she has enough at-risk basis to absorb the whole loss. How much of the $34,000 is deductible this year?",
      steps: [
        "Apply the rule: a passive activity loss may offset PASSIVE income only.",
        "Sort the income. Wages of $210,000 are earned income. Dividends and interest of $15,000 are PORTFOLIO income. Neither is passive. The only passive income is the $9,000 from the leasing program.",
        "Deduct the loss against passive income to the extent available: $9,000 of the $34,000 is allowed this year.",
        "Suspend the rest: $34,000 − $9,000 = $25,000 carries forward.",
        "Confirm the carryforward's fate. Suspended losses have no expiration; they offset passive income in future years, and any remaining balance is released in full when she disposes of the entire interest to an unrelated party.",
        "Note the order of operations: the at-risk rules are tested FIRST and the passive loss rules SECOND. Here at-risk basis was sufficient, so only the passive wall bound the deduction.",
      ],
      answer:
        "$9,000 is deductible this year and $25,000 is suspended and carried forward. Her wages and portfolio income are untouched by the partnership loss.",
      watchOut:
        "Netting the loss against wages, which would claim a $34,000 deduction and understate taxable income by $25,000 — this is exactly the pitch an adviser must not make. The subtler error is counting the $15,000 of dividends and interest as passive income: that would allow $24,000 of loss and leave only $10,000 suspended. Portfolio income is never passive income. Note one exception that reverses the whole analysis: a WORKING interest in oil and gas held without limited liability is not a passive activity, and its losses can offset ordinary income.",
    },
    {
      title: "A limited partner's at-risk amount after a cash distribution",
      setup:
        "An investor contributes $50,000 of cash to a real estate limited partnership. The partnership agreement allocates her a $30,000 share of qualified nonrecourse financing — debt secured by the real property and borrowed from a commercial lender unrelated to the partnership. In year one she is allocated $12,000 of loss and receives an $8,000 cash distribution. What is her at-risk amount at year end?",
      steps: [
        "Start with cash contributed: $50,000.",
        "Add debt that counts. Ordinary nonrecourse debt does NOT increase the at-risk amount, because a borrower who can walk away has risked nothing. Qualified nonrecourse financing on real property is the statutory exception and does count: $50,000 + $30,000 = $80,000 at risk to begin.",
        "Subtract the loss allocated, which reduces the amount still at risk: $80,000 − $12,000 = $68,000.",
        "Subtract the cash distribution, which returns capital to her and therefore takes it out of harm's way: $68,000 − $8,000 = $60,000.",
        "State the year-end at-risk amount: $60,000. Future losses are deductible only down to zero from here; anything beyond suspends until she restores at-risk amount through income or contributions.",
        "Test the boundary. Had the same $30,000 been ordinary nonrecourse debt rather than qualified real property financing, she would have started at $50,000, and the identical activity would leave $50,000 − $12,000 − $8,000 = $30,000 at risk — half as much cushion from the same facts.",
      ],
      answer:
        "Her at-risk amount is $60,000 at year end: $50,000 cash plus $30,000 of qualified nonrecourse financing, less the $12,000 loss and the $8,000 distribution. Clearing the at-risk hurdle is only the first step — the loss must then survive the passive activity rules.",
      watchOut:
        "Adding nonrecourse debt to the at-risk amount as a matter of course. Outside the qualified real property carve-out it does not count, and the difference here is $60,000 versus $30,000. The other frequent slip is ignoring the cash distribution and reporting $68,000 — distributions reduce at-risk amount just as losses do, because the money is no longer exposed.",
    },
    {
      title: 'Accredited investor versus qualified purchaser on one set of facts',
      setup:
        "Dr. Chen files as a single taxpayer with income of $240,000 in each of the last two years. Her assets: a primary residence worth $1,400,000 with a $600,000 mortgage not increased in the past year; brokerage accounts of $1,350,000; $150,000 of cash held for investment; a rental property worth $700,000 held for investment with a $250,000 acquisition mortgage; a retirement account of $900,000; an art collection held for personal enjoyment worth $400,000; and a debt-free vacation home worth $700,000 used personally. Is she an accredited investor? Is she a qualified purchaser? For the qualified purchaser test, investments are valued at fair market value less indebtedness incurred to acquire them, and personal-use real estate and personal property do not count.",
      steps: [
        "Run the accredited investor INCOME test first, since it is faster. A single individual needs income above $200,000 in each of the two most recent years. Hers is $240,000 in each year, so she is accredited on income alone.",
        "Run the net worth test as a cross-check. The primary residence is excluded, and so is the mortgage on it up to the home's value — the $800,000 of home equity ($1,400,000 − $600,000) simply drops out of the calculation.",
        "Total everything else: $1,350,000 brokerage + $150,000 cash + $900,000 retirement + $450,000 of rental equity ($700,000 − $250,000) + $400,000 art + $700,000 vacation home = $3,950,000. That is far above $1,000,000, so she is accredited twice over.",
        "Now switch tests. A qualified purchaser must generally own at least $5,000,000 in INVESTMENTS — a narrower defined category than net worth, not simply a bigger number.",
        "Count only what qualifies: $1,350,000 of securities + $150,000 of cash held for investment + $900,000 in the retirement account + the rental property held for investment at $700,000 − $250,000 = $450,000. Total investments = $2,850,000.",
        "Exclude what does not qualify: the primary residence, the personally used vacation home ($700,000), and the personal art collection ($400,000). That $1,100,000 counts toward net worth but not toward investments, which is precisely why the two totals differ.",
        "Compare: $2,850,000 of investments against the $5,000,000 threshold. She falls short by $2,150,000.",
      ],
      answer:
        "She is an accredited investor on both the income and the net worth tests, but she is NOT a qualified purchaser. She may invest in a fund relying on the 3(c)(1) exclusion, subject to that fund's limit of generally no more than 100 beneficial owners, but she is ineligible for a 3(c)(7) fund.",
      watchOut:
        "Treating accredited status as a ladder rung on the way to qualified purchaser, and admitting her to a 3(c)(7) fund. They are separate tests measuring different things: net worth versus a defined pool of investments. Two arithmetic traps follow. Counting the $800,000 of primary-residence equity toward net worth inflates it to $4,750,000 — that equity is excluded. And applying the $300,000 joint income threshold to a single filer would wrongly disqualify her on income. Finally, remember that qualifying is a gate, not a suitability finding: eligibility says she may buy, never that she should.",
    },
  ],
};
