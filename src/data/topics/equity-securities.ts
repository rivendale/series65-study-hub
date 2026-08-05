import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'equity-securities',
  title: 'Equity Securities',
  weight: '~4%',
  order: 8,
  summary:
    "Equity means ownership: a residual claim on assets and earnings after every creditor is paid. This topic covers common and preferred stock and their features, the dividend timeline, rights and warrants, ADRs, restricted and control stock under Rule 144, and the style and capitalization labels used to classify equities.",
  body: `## Common Stock: What Ownership Actually Buys

A share of **common stock** is a unit of ownership in a corporation. Four attributes define it and each shows up on the exam.

**Residual claim.** Common shareholders stand **last in line**. In a liquidation the priority is: secured creditors, then unsecured creditors and general creditors, then subordinated debt, then **preferred stock**, then **common stock**. Common holders receive whatever remains, which is often nothing.

**Limited liability.** The most a shareholder can lose is the amount invested. Personal assets are not exposed to corporate creditors.

**Voting rights.** Common shareholders elect the board and vote on major corporate actions — mergers, dissolution, charter amendments, issuance of convertible securities. Routine business decisions are **not** shareholder votes. Shareholders who cannot attend vote by **proxy**.

**Right to inspect** the books, transfer ownership freely, and receive dividends **when declared** — never a right to demand a dividend.

### Statutory Versus Cumulative Voting

Both methods give a shareholder **one vote per share per open seat**, but they differ in how those votes may be spread.

- **Statutory voting**: a shareholder may cast up to the number of shares owned **for each individual seat**, and may not concentrate votes. Owning 200 shares with 4 seats open means up to 200 votes per seat.
- **Cumulative voting**: total votes equal shares times seats, and the shareholder may **allocate them any way**, including all on one candidate. 200 shares and 4 seats yields **800 votes** that can go entirely to one nominee.

**Cumulative voting benefits the minority shareholder** — that is the tested conclusion.

### Preemptive Rights

A **preemptive right** lets existing shareholders maintain their proportional ownership by buying newly issued shares **before** the public. It exists to prevent **dilution**. Where preemptive rights apply, the company distributes **subscription rights**.

## Dividends and the Dividend Timeline

Dividends are declared at the **discretion of the board of directors**. Four dates matter:

1. **Declaration date** — the board announces the dividend, creating a liability for the corporation.
2. **Ex-dividend date** — the first day the stock trades **without** the dividend. A buyer on or after this date does **not** receive it.
3. **Record date** — the date the corporation checks its books to determine who owns the shares.
4. **Payable date** — the date checks or credits go out.

The ex-date is set by the settlement cycle. Under the current **T+1** regime the ex-date generally falls on the **same business day as the record date**; under the older **T+2** cycle it fell **one business day before** the record date. Know the logic — to receive a dividend you must be the **owner of record**, which means your trade must **settle** on or before the record date.

Mechanically, a stock's price is reduced by roughly the dividend amount on the ex-date.

### Cash Dividends, Stock Dividends, and Splits

- **Cash dividend** — taxable in the year received. **Qualified dividends** (holding-period requirements met) are taxed at long-term capital gains rates; non-qualified dividends are taxed as ordinary income.
- **Stock dividend** — additional shares instead of cash. **Not currently taxable**. Total cost basis is unchanged and spread over more shares, lowering **per-share basis**.
- **Forward stock split** (2:1, 3:2) — more shares, proportionally lower price and lower per-share basis. **Total value and total basis are unchanged.**
- **Reverse split** (1:10) — fewer shares at a higher price, often to preserve an exchange listing or avoid penny-stock status. Again, total value is unchanged.

None of these change a shareholder's **percentage ownership** of the company.

## Preferred Stock

**Preferred stock** is equity that behaves like debt. It carries a **fixed dividend** stated as a percentage of **par (typically $100)** or as a dollar amount, gets **priority over common** for dividends and in liquidation, and usually has **no voting rights**. It has **no maturity date**.

Because the payment is fixed, preferred prices move **inversely with interest rates**, just like bonds. **Interest rate risk is the primary risk of straight preferred stock.**

| Type | Feature |
| --- | --- |
| **Straight (non-cumulative)** | Missed dividends are gone forever |
| **Cumulative** | Missed dividends accumulate as **arrears** and must be paid in full before any common dividend |
| **Participating** | Fixed dividend **plus** a share of additional profits above a stated level |
| **Convertible** | Exchangeable into a fixed number of common shares; usually carries a **lower stated rate** because of the upside |
| **Callable** | The issuer may redeem at a set price after a set date, typically when rates fall — creates **call risk** and caps appreciation |
| **Adjustable-rate** | Dividend resets against a benchmark rate, so the **price is far more stable** than a fixed-rate preferred |

Ranking preferreds by yield for the same issuer: **adjustable-rate and convertible pay the least**; straight non-cumulative typically pays the most because it offers the holder the least protection.

## Rights Versus Warrants

Both are equity derivatives issued by the corporation, and both are commonly confused.

| | **Subscription right** | **Warrant** |
| --- | --- | --- |
| Given to | Existing shareholders | Usually attached as a **sweetener** to a bond or preferred offering |
| Exercise price at issue | **Below** current market | **Above** current market |
| Life | **Short** — typically 30 to 45 days | **Long** — years, sometimes perpetual |
| Purpose | Preserve proportional ownership | Enhance the marketability of another security |

Both trade separately once issued, and both dilute existing shareholders when exercised.

## American Depositary Receipts

An **ADR** is a negotiable receipt issued by a U.S. bank representing shares of a **foreign** company held on deposit abroad. It trades in **U.S. dollars** on U.S. markets and settles domestically, letting Americans hold foreign equity without a foreign brokerage account.

Risks and features to memorize:

- **Currency (exchange rate) risk** is the defining added risk. A rising dollar reduces the dollar value of foreign earnings and dividends.
- **Political and sovereign risk** in the home country.
- The holder generally has **no voting rights**; the depositary bank votes the underlying shares.
- Dividends are declared in the foreign currency and **converted to dollars** by the depositary, which deducts a fee.
- **Foreign withholding tax** may apply, potentially offset by a U.S. **foreign tax credit**.

## Restricted and Control Stock — Rule 144

**Restricted stock** is acquired in an **unregistered** transaction, most often a **private placement**. **Control stock** is registered stock held by an **affiliate** — an officer, director, or holder of more than **10%** of the outstanding shares. The same person can hold both, and the label attaches to how the shares were acquired, not to the certificate.

**Rule 144** provides a safe harbor for reselling these shares:

- **Holding period** — **six months** for the restricted securities of a **reporting** issuer; **one year** for a non-reporting issuer. Control stock that was bought in the open market has **no holding period**, because it was never restricted.
- **Volume limit** for affiliates in any 90-day period: the **greater of 1% of the outstanding shares** or the **average weekly trading volume over the preceding four weeks**.
- **Form 144** must be filed with the SEC when a sale in any three-month period exceeds **5,000 shares or $50,000**, whichever standard the rule triggers. The filing is generally good for 90 days.
- **Non-affiliates** who have satisfied the holding period may usually resell **without volume limits**.

## Classifying Equities

**Market capitalization** equals **share price times shares outstanding**. Common bands: **large cap above roughly $10 billion**, **mid cap roughly $2 billion to $10 billion**, **small cap roughly $300 million to $2 billion**, and **micro cap below that**. Smaller capitalization generally means **greater volatility and less liquidity**.

**Growth stocks** show rapid revenue and earnings growth, carry **high P/E and price-to-book ratios**, pay **little or no dividend**, and reinvest earnings. **Value stocks** trade at **low P/E and price-to-book** relative to peers, often pay **higher dividends**, and are frequently in mature or out-of-favor industries. **Defensive** issues (utilities, food, pharmaceuticals) resist economic downturns; **cyclical** issues (autos, steel, construction) amplify the business cycle.`,
  pitfalls: [
    "Cumulative voting is the method that helps minority shareholders, because votes may be concentrated on a single candidate. Statutory voting favors the majority.",
    "Cumulative preferred means missed dividends accumulate as arrears; it has nothing to do with cumulative voting. Two different words with the same root, tested in the same section.",
    "A stock dividend or stock split is not a taxable event and does not change the investor's proportional ownership or total cost basis — only the per-share basis changes.",
    "Rights are issued to existing shareholders at a price below market and expire in weeks; warrants are sweeteners issued at a price above market and last for years. Do not reverse them.",
    "ADR holders normally have no voting rights and always carry currency risk — a strengthening dollar hurts the ADR even if the foreign company performs well.",
    "The Rule 144 volume limit is the greater of 1% of outstanding shares or the average weekly trading volume over the prior four weeks, not the lesser.",
    "Control stock purchased in the open market has no holding period requirement; the six-month or one-year holding period applies to restricted (unregistered) securities.",
  ],
  keyTerms: [
    {
      term: 'Residual claim',
      definition:
        "The common shareholder's position as last in line for corporate assets in a liquidation, behind all creditors and preferred stock.",
    },
    {
      term: 'Cumulative voting',
      definition:
        'A voting method allowing a shareholder to multiply shares by seats and allocate the resulting votes in any combination, which advantages minority shareholders.',
    },
    {
      term: 'Preemptive right',
      definition:
        'The right of an existing shareholder to subscribe to newly issued shares in order to maintain proportional ownership and avoid dilution.',
    },
    {
      term: 'Ex-dividend date',
      definition:
        'The first day a stock trades without the declared dividend; a purchaser on or after this date is not entitled to the payment.',
    },
    {
      term: 'Cumulative preferred',
      definition:
        'Preferred stock on which unpaid dividends accumulate in arrears and must be paid in full before any dividend may be paid on common stock.',
    },
    {
      term: 'Warrant',
      definition:
        'A long-term certificate to buy stock at a fixed price set above the market at issuance, usually attached to a bond or preferred offering as a sweetener.',
    },
    {
      term: 'American Depositary Receipt',
      definition:
        'A dollar-denominated negotiable receipt issued by a U.S. bank representing foreign shares on deposit, carrying currency and political risk and generally no voting rights.',
    },
    {
      term: 'Control stock',
      definition:
        'Registered stock held by an affiliate — an officer, director, or greater-than-10% owner — whose resale is limited by Rule 144 volume and filing requirements.',
    },
    {
      term: 'Market capitalization',
      definition:
        'Share price multiplied by shares outstanding; the standard measure used to sort equities into large, mid, small, and micro cap categories.',
    },
  ],
  confusions: [
    { dont: 'Cumulative voting (a shareholder voting method)', with: 'Cumulative preferred (dividends accrue in arrears)' },
    {
      dont: 'Subscription rights — short-lived, below market, issued to existing shareholders',
      with: 'Warrants — long-lived, above market, attached to another security as a sweetener',
    },
    {
      dont: 'Restricted stock — acquired unregistered, subject to a six-month or one-year holding period',
      with: 'Control stock — registered shares held by an affiliate, subject to volume limits but no holding period if bought in the market',
    },
    {
      dont: 'Stock dividend or forward split — no tax, more shares, lower per-share basis, unchanged total value',
      with: 'Cash dividend — currently taxable as qualified or ordinary income',
    },
    {
      dont: 'Record date — the day the issuer identifies owners on its books',
      with: 'Ex-dividend date — the day the shares begin trading without the dividend attached',
    },
  ],
  formulas: [
    {
      name: 'Market capitalization',
      formula: 'Market Cap = Current Share Price × Shares Outstanding',
      note: 'Large cap is generally above about $10 billion; small cap roughly $300 million to $2 billion.',
    },
    {
      name: 'Cumulative voting power',
      formula: 'Total Votes = Shares Owned × Number of Board Seats Open',
      note: 'Under statutory voting the maximum per seat is simply shares owned, and votes may not be combined.',
    },
    {
      name: 'Current yield on preferred stock',
      formula: 'Current Yield = Annual Dividend / Market Price',
      note: 'Annual dividend equals the stated rate times par, usually $100 par.',
    },
  ],
};
