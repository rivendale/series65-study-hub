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

### Taxation

REIT dividends are generally **taxed to the shareholder as ordinary income**, not at qualified-dividend rates, because the income was never taxed at the entity level. Distributions may also include **return of capital** (reducing basis) and **capital gain** components. Note the structural point: **a REIT passes through income but does not pass through losses** — that distinguishes it from a limited partnership.

### Listed vs non-traded

**Listed REITs** trade on exchanges with daily pricing and real liquidity. **Non-traded (public non-listed) REITs** are registered but do not trade: valuations are estimated and infrequent, **upfront commissions and offering costs are high**, redemption programs are limited and can be suspended, and early distributions are sometimes funded from offering proceeds or borrowings rather than operations. They are among the most heavily examined suitability problems in state enforcement.

## Direct participation programs and limited partnerships

A **direct participation program (DPP)** is a pooled entity — usually a **limited partnership** or an LLC — that passes **income, gains, losses, deductions, and credits directly through to the investors**, avoiding entity-level tax. The Series 65 phrase to recognize is **flow-through (conduit) taxation**.

### Roles

- The **general partner (GP)** manages the program, makes all decisions, and has **unlimited personal liability** for partnership obligations. The GP owes fiduciary duties to the limited partners.
- **Limited partners (LPs)** contribute capital, receive the flow-through tax items, and have **liability limited to their investment plus any amount they have committed to contribute**. The critical caveat: an LP who **takes an active role in management can lose limited liability**.

### Common program types

- **Real estate programs** — rental income plus depreciation deductions; raw-land programs are pure appreciation plays with no income.
- **Oil and gas programs** — **exploratory (wildcatting)** carries the highest risk with the highest potential return; **developmental** drills near proven reserves; **income** programs buy producing wells for cash flow. Special deductions include **intangible drilling costs** and **depletion allowances**.
- **Equipment leasing programs** — steady lease income and depreciation, but exposure to obsolescence and residual value risk.

### Risks and tax limits

- **Illiquidity is the defining risk.** There is no meaningful secondary market for most LP interests; investors may be locked in for the life of the program, and any resale is typically at a steep discount.
- **Passive activity losses generally offset only passive income**, not wages or portfolio income. Suspended losses carry forward and are released on full disposition of the interest. An adviser who pitches a DPP as a shelter for salary income is describing something the tax rules do not allow.
- Economic viability must come first: a program justified only by tax benefits is an **abusive tax shelter**.

## Hedge funds

A **hedge fund** is a privately offered pooled vehicle that relies on an exclusion from investment company registration, so it can use leverage, short selling, derivatives, and concentrated positions freely.

- **Access is restricted.** Funds relying on the **3(c)(1)** exclusion limit beneficial owners (generally **no more than 100**) and sell to **accredited investors**; **3(c)(7)** funds sell only to **qualified purchasers** — broadly, individuals with at least **$5 million in investments** — and may have many more holders. Accredited investor status for an individual generally means **$1 million net worth excluding the primary residence**, or income of **$200,000 (or $300,000 with a spouse) in each of the two most recent years**, with additional professional-credential paths.
- **Lock-up periods** bar withdrawals for an initial term (often one year or more); after that, redemptions are limited to periodic **gates**, with advance notice. Managers may also **suspend redemptions** or place hard-to-value holdings in a **side pocket**.
- **Fees follow the "2 and 20" pattern** — roughly a 2% management fee plus a 20% **performance (incentive) allocation**, often subject to a **high-water mark**. Note the regulatory overlay: a state-registered or SEC-registered adviser may charge performance fees only to clients meeting the **qualified client** standard.
- **Strategies** at a high level: long/short equity, market neutral, global macro, event-driven and merger arbitrage, distressed debt, convertible arbitrage, and managed futures. Leverage and derivative use mean losses can exceed what a long-only fund could produce.
- **Funds of hedge funds** add diversification and access but **stack a second layer of fees** on top of the underlying managers.

## Private equity and venture capital

**Private equity** funds buy controlling stakes in mature private companies (or take public companies private), improve or restructure them, and exit through a sale or IPO — often using substantial debt in a **leveraged buyout**. **Venture capital** funds early-stage companies with high failure rates and a small number of outsized winners.

Both share a profile: **committed capital drawn down over time (capital calls)**, holding periods of **seven to twelve years**, **J-curve** returns (early losses and fees before gains), no interim liquidity, and valuations that are estimates rather than market prices. Suitable only for investors with long horizons and the capacity to absorb a total loss.

## Commodities and precious metals

Exposure can be direct (physical bullion, with **storage, insurance, and authentication costs** and no income), through **futures contracts** (high leverage, daily mark to market, roll costs), through **commodity pools and managed futures funds**, or through **commodity-linked ETFs and ETNs**. The case for them is **inflation hedging and low correlation**; the caution is that commodities **produce no cash flow**, so the entire return depends on price movement, and futures-based products can lag spot prices because of the shape of the futures curve.

## Structured products

A **structured product** packages a **debt obligation of an issuer** with an embedded derivative to produce a customized payoff — a note offering principal protection with capped index participation, or a **reverse convertible** paying a high coupon but delivering shares if a stock falls below a barrier. Three points get tested: the investor bears the **issuer's credit risk** (the "protection" is only as good as the bank), the products are **illiquid** with only issuer-supported secondary pricing, and **embedded costs are hard for a client to see**.

## Digital assets

Cryptocurrencies and tokens are highly volatile and held through custody arrangements with **operational risks** — key loss, exchange failure, hacking — that do not exist for traditional securities. Regulatory framing is what the exam cares about: **state regulators and NASAA treat many digital-asset offerings, particularly token sales and yield or staking programs, as investment contracts and therefore securities under the Howey test** — an investment of money in a common enterprise with an expectation of profits derived from the efforts of others. An adviser recommending digital assets owes the same registration, custody, disclosure, and suitability duties as with any other security.

## Suitability and disclosure — the through-line

For every product above, an adviser must analyze **liquidity needs, time horizon, net worth, tax posture, and sophistication**, and must disclose **fees, conflicts of interest, valuation methodology, and the absence of a secondary market**. Describing a private, illiquid, estimated-value product as if it were as safe and liquid as a listed security is a fraudulent or unethical practice, whatever the eventual return.`,
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
};
