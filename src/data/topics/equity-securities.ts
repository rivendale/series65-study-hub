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

### Why the Residual Claim Explains the Rest

Every other feature follows from standing last. A creditor's claim is **fixed and senior**, so a swing in operating income barely changes what a bondholder receives — the same swing lands entirely on the residual. That is why equity is **more volatile than the underlying business**, why investors demand an **equity risk premium**, and why **limited liability** must exist at all: nobody would accept an open-ended residual claim.

It also explains who votes. Creditors are protected by a **contract** — the indenture and its covenants — and so need no vote; shareholders have no contract promising them anything, so they get **control of the board** instead. The vote is compensation for bearing residual risk.

### Statutory Versus Cumulative Voting

Both methods give a shareholder **one vote per share per open seat**, but they differ in how those votes may be spread.

- **Statutory voting**: a shareholder may cast up to the number of shares owned **for each individual seat**, and may not concentrate votes. Owning 200 shares with 4 seats open means up to 200 votes per seat.
- **Cumulative voting**: total votes equal shares times seats, and the shareholder may **allocate them any way**, including all on one candidate. 200 shares and 4 seats yields **800 votes** that can go entirely to one nominee.

**Cumulative voting benefits the minority shareholder** — that is the tested conclusion, and the reason is worth holding onto. Under statutory voting, a holder of 51% of the shares can cast 51% of the votes for every seat and therefore wins **every seat**, giving 49% of the owners zero representation. Cumulative voting lets the minority pile all of its votes onto one candidate, and the majority cannot dilute that pile because its own votes are spread across the slate it wants to elect.

### Scenario: Winning One Board Seat

A company has **1,200,000 shares** outstanding and **5 board seats** open, all voted at once. A dissident investor wants a single seat. Under **cumulative** voting the threshold is (shares voting × seats sought) / (total seats + 1), plus one share: (1,200,000 × 1) / 6 = 200,000, so **200,001 shares** — a hair over 16.7% of the company.

Verify it. The dissident casts 200,001 × 5 = **1,000,005 votes** on one nominee. The majority's remaining 999,999 shares produce 4,999,995 votes, and to shut the dissident out it must outpoll that nominee on **each of five** candidates — at least 1,000,006 votes apiece, or **5,000,030** in total, which it does not have. The seat is secure.

Under **statutory** voting the same investor needs a plain majority, **600,001 shares**, to elect anyone at all. Two methods, identical outcome: **200,001 shares versus 600,001**.

### Preemptive Rights

A **preemptive right** lets existing shareholders maintain their proportional ownership by buying newly issued shares **before** the public. It exists to prevent **dilution** — both of ownership percentage and of the value of each share when new stock is sold below market. Where preemptive rights apply, the company distributes **subscription rights**. Note the boundary: preemptive rights attach to **newly issued** shares and generally not to treasury shares resold, shares issued in an acquisition, or shares issued under an employee plan, and many modern charters eliminate them entirely.

## Authorized, Issued, Outstanding, and Treasury Stock

Four share counts describe the same company, and questions exploit the differences.

- **Authorized** — the ceiling written into the corporate charter. Raising it requires a **shareholder vote**.
- **Issued** — shares the company has actually sold or distributed at some point in its life.
- **Treasury stock** — issued shares the company has **bought back**. Treasury shares have **no vote, receive no dividends**, and are **excluded from earnings per share**.
- **Outstanding** — **issued minus treasury**. This is the number that drives votes, dividends, EPS, and market capitalization.

**Authorized minus issued** is the unissued shelf: capacity for future capital raises, stock-funded acquisitions, and employee equity compensation.

Why buy shares back? To return cash in a form generally taxed only on sale rather than immediately as a dividend, to offset dilution from stock compensation, and to signal that management thinks the shares are cheap. The trap is treating a buyback as automatically good: shrinking the denominator raises **EPS** even when total earnings are flat, and a company repurchasing overvalued stock has simply overpaid for itself. **EPS that rose because the share count fell is not earnings that grew.**

## Par, Book Value, and Market Value

For **common** stock, **par value** is a legal artifact — a nominal amount, commonly $0.01 or none at all, that historically fixed the floor below which shares could not be issued and defined the corporation's legal capital. It says **nothing about worth**. For **preferred** stock, par is real and load-bearing: it is the base the stated dividend rate is applied to (usually **$100**) and it typically sets the **liquidation preference**.

**Book value per share** is common equity divided by shares outstanding — an accounting figure resting on historical cost, which understates a company whose main assets are brands, patents, or people. **Market value** is what buyers pay today and embeds expectations. The ratio between them, **price-to-book**, is a core value-versus-growth screen: capital-intensive banks and industrials trade near book, asset-light software firms at many multiples of it. A low price-to-book is a **starting question**, not an answer.

## Dividends and the Dividend Timeline

Dividends are declared at the **discretion of the board of directors**. Four dates matter:

1. **Declaration date** — the board announces the dividend, creating a liability for the corporation.
2. **Ex-dividend date** — the first day the stock trades **without** the dividend. A buyer on or after this date does **not** receive it. Under **T+1** this falls on the **same business day as the record date** (derived below), so the two are separate concepts rather than separate days.
3. **Record date** — the date the corporation checks its books to determine who owns the shares.
4. **Payable date** — the date checks or credits go out.

The ex-date is not an independent fact — it is **derived from the settlement cycle**, and deriving it beats memorizing it. To receive a dividend you must be an **owner of record** on the record date, and ownership transfers at **settlement**, not at trade. Under **T+1** a purchase on the record date settles the next business day, too late, while a purchase one business day earlier settles exactly on the record date and qualifies. The record date is therefore the first day a buyer misses the dividend, so under T+1 the **ex-date falls on the same business day as the record date**. Run the identical logic under the older **T+2** cycle and the ex-date lands **one business day before** the record date.

A stock's price is reduced by roughly the dividend amount on the ex-date, which is why **buying just before the ex-date to capture the dividend gains nothing**: the investor pays for the dividend in the purchase price, receives it back as a currently taxable distribution, and watches the price fall by about the same amount. In a taxable account it is a net negative, and recommending it is a classic unsuitable-practice fact pattern.

### Cash Dividends, Stock Dividends, and Splits

- **Cash dividend** — taxable in the year received. **Qualified dividends** (holding-period requirements met) are taxed at long-term capital gains rates; non-qualified dividends are taxed as ordinary income.
- **Stock dividend** — additional shares instead of cash. **Not currently taxable**. Total cost basis is unchanged and spread over more shares, lowering **per-share basis**.
- **Forward stock split** (2:1, 3:2) — more shares, proportionally lower price and lower per-share basis. **Total value and total basis are unchanged.**
- **Reverse split** (1:10) — fewer shares at a higher price, often to preserve an exchange listing or avoid penny-stock status. Again, total value is unchanged.

None of these change a shareholder's **percentage ownership** of the company.

A stock dividend, a forward split, and a reverse split are all **re-slicings of the same pie**. Nothing enters or leaves the company, so nothing is taxed and total basis never moves — only the number of slices, and therefore **basis per slice**, changes. A cash dividend is different in kind: real assets leave the corporation for the shareholder's hands, which is exactly why it is taxable and the others are not.

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

### Why It Trades Like a Bond but Ranks Below One

A straight preferred is a **perpetuity**: a fixed payment with no maturity, so its price is the annual dividend divided by the yield the market demands. With no maturity date pulling the price back toward par, its duration is **very long** — for a perpetuity, about (1 + yield) ÷ yield, or roughly **17 years at a 6.25% yield** — so it is **more rate-sensitive than most bonds**, not less.

At the same time it ranks **below every debt claim** in liquidation, and its dividend is **not a legal obligation** the way interest is — a board that skips a preferred dividend is not in default and cannot be forced into bankruptcy over it. Preferred combines a **bond's exposure to rates** with an **equity's subordination** and lacks the bond's maturity backstop. Hence the trap: "preferred ranks above common" is true, and candidates slide from it to "preferred is safer than the issuer's bonds," which is false.

Two features soften the picture. Cumulative preferred usually gains **voting rights** once dividends have been in arrears for a stated number of periods, giving holders leverage exactly when they need it. And **corporate** investors may deduct a portion of dividends received from another domestic corporation, a benefit unavailable to individuals — which is why preferred yields often look thin to a retail buyer. Preferred is priced for its natural owner, and that owner is frequently a corporation.

### Scenario: The Preferred That Fell While the Company Thrived

An investor buys a **5% straight preferred, $100 par**, at $100, collecting a **$5.00** annual dividend. Over the next two years the issuer's earnings grow and its bonds are upgraded — but market yields on comparable preferreds rise to **6.25%**.

Price the perpetuity: $5.00 / 0.0625 = **$80.00**. The position is down **20%** while the company got stronger, and nothing about the issuer caused it. Two years of $5.00 dividends offsets half the $20 decline, but there is **no maturity date** at which $100 comes back. A bondholder in the same rate move watches the price sag and then **pull back toward par** as maturity approaches; the preferred holder waits forever.

## Rights Versus Warrants

Both are equity derivatives issued by the corporation, and both are commonly confused.

| | **Subscription right** | **Warrant** |
| --- | --- | --- |
| Given to | Existing shareholders | Usually attached as a **sweetener** to a bond or preferred offering |
| Exercise price at issue | **Below** current market | **Above** current market |
| Life | **Short** — typically 30 to 45 days | **Long** — years, sometimes perpetual |
| Purpose | Preserve proportional ownership | Enhance the marketability of another security |

Both trade separately once issued, and both dilute existing shareholders when exercised.

The pricing difference follows from the purpose. A right must be exercisable **below market** or nobody would use it, and the window is deliberately brief because the company wants its money now. A warrant is a **sweetener**, letting an issuer sell bonds at a lower coupon by attaching equity upside, so it is struck **above market** and given years to become valuable. A right has intrinsic value the day it is issued; a warrant usually has only time value.

### Scenario: The Rights Offering

A company with **4,000,000 shares** outstanding, trading at **$26**, offers existing holders **one new share for every four held** at a subscription price of **$20**. What is a right worth, and what happens to a holder of 400 shares?

Because new shares enter below market, the price adjusts. Five shares now exist where four did — four at $26 and one paid in at $20 — so the theoretical **ex-rights price** is (4 × $26 + $20) / 5 = $124 / 5 = **$24.80**. One right is worth the gain it confers spread over the rights needed: ($24.80 − $20) / 4 = **$1.20**. From the cum-rights price the same figure appears: ($26 − $20) / (4 + 1) = **$1.20**.

The 400-share holder is worth 400 × $26 = **$10,400** before the offering.

- **Exercise**: 400 rights buy 100 new shares for 100 × $20 = $2,000. The holder owns 500 shares at $24.80 = $12,400, less the $2,000 paid in — **$10,400** net.
- **Sell the rights**: 400 shares at $24.80 = $9,920, plus 400 rights at $1.20 = $480 — **$10,400**.
- **Do nothing**: 400 shares at $24.80 = **$9,920**, and the $480 simply evaporates.

Exercising and selling leave the shareholder **identically well off**; only **letting the rights lapse** destroys value. The "discount" in a rights offering is not a gift — it is compensation for the dilution that same offering creates.

## American Depositary Receipts

An **ADR** is a negotiable receipt issued by a U.S. bank representing shares of a **foreign** company held on deposit abroad. It trades in **U.S. dollars** on U.S. markets and settles domestically, letting Americans hold foreign equity without a foreign brokerage account. One ADR may represent one ordinary share, several, or a fraction of one, set by a **ratio** chosen so the ADR prices in a range familiar to U.S. investors.

Risks and features to memorize:

- **Currency (exchange rate) risk** is the defining added risk. A rising dollar reduces the dollar value of foreign earnings and dividends.
- **Political and sovereign risk** in the home country.
- The holder generally has **no voting rights**; the depositary bank votes the underlying shares. A **sponsored** ADR, established with the foreign issuer's cooperation, may pass voting materials through; an **unsponsored** ADR created by a bank on its own generally does not.
- Dividends are declared in the foreign currency and **converted to dollars** by the depositary, which deducts a fee.
- **Foreign withholding tax** may apply, potentially offset by a U.S. **foreign tax credit**.

Two boundaries. Currency risk runs **both ways** — a weakening dollar magnifies foreign gains and can turn a flat local-currency year into a dollar profit — so it is added **volatility**, not a one-directional drag. And the foreign tax credit is claimed on a U.S. return, so it is **wasted inside an IRA**: the withholding still comes out of the dividend, but there is no U.S. tax liability to credit it against, making heavily withheld foreign dividend payers a poor fit for a tax-deferred account.

## Restricted and Control Stock — Rule 144

**Restricted stock** is acquired in an **unregistered** transaction, most often a **private placement**. **Control stock** is registered stock held by an **affiliate** — an officer, director, or holder of more than **10%** of the outstanding shares. The same person can hold both, and the label attaches to how the shares were acquired, not to the certificate.

The two labels exist for different reasons. **Restricted** stock skipped registration, so a holding period forces the buyer to demonstrate they invested rather than acted as an unregistered underwriter distributing shares to the public. **Control** stock was registered, but an affiliate dumping a large block still floods the market with shares no current disclosure supports — so the constraint is on **pace**, not on time held.

**Rule 144** provides a safe harbor for reselling these shares:

- **Holding period** — **six months** for the restricted securities of a **reporting** issuer; **one year** for a non-reporting issuer. Control stock that was bought in the open market has **no holding period**, because it was never restricted.
- **Volume limit** for affiliates in any 90-day period: the **greater of 1% of the outstanding shares** or the **average weekly trading volume over the preceding four weeks**.
- **Form 144** must be filed with the SEC when sales in any three-month period exceed **5,000 shares or $50,000** in aggregate price. It is filed at the time the sell order is placed and is generally good for 90 days.
- **Non-affiliates** who have satisfied the holding period may usually resell **without volume limits**, provided the issuer is current in its reporting.

Rule 144 governs **resale**, never the original issuance — and the volume test is deliberately the **greater** of the two measures, because a thinly traded stock needs the 1% floor while an actively traded one can absorb far more than 1% without disruption.

## Classifying Equities

**Market capitalization** equals **share price times shares outstanding**. Common bands: **large cap above roughly $10 billion**, **mid cap roughly $2 billion to $10 billion**, **small cap roughly $300 million to $2 billion**, and **micro cap below that**. The boundaries are conventions rather than rules and vary by index provider, so treat them as approximate. Smaller capitalization generally means **greater volatility and less liquidity** — and note the denominator: market cap uses **outstanding** shares, not issued or authorized.

**Growth stocks** show rapid revenue and earnings growth, carry **high P/E and price-to-book ratios**, pay **little or no dividend**, and reinvest earnings. Their value sits far out in the future, which makes them more sensitive to discount rates and to any disappointment in the growth story. **Value stocks** trade at **low P/E and price-to-book** relative to peers, often pay **higher dividends**, and are frequently in mature or out-of-favor industries; the risk is that the market is right and the business is genuinely impaired — a **value trap**. **Defensive** issues (utilities, food, pharmaceuticals) resist economic downturns; **cyclical** issues (autos, steel, construction) amplify the business cycle.`,
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
    {
      name: 'Shares outstanding',
      formula: 'Outstanding = Issued - Treasury Shares',
      note: 'Outstanding drives votes, dividends, EPS, and market cap. Authorized minus issued is the unissued shelf.',
    },
    {
      name: 'Rule 144 volume limit (affiliates, per 90 days)',
      formula:
        'Limit = GREATER of (1% × Shares Outstanding) or (Average Weekly Volume over the prior 4 weeks)',
      note: 'Greater, never lesser. The 1% floor protects thinly traded issues; the volume test frees up active ones.',
    },
    {
      name: 'Shares needed to elect one director under cumulative voting',
      formula: 'Shares Needed = [Shares Voting × Seats Sought / (Total Seats + 1)] + 1',
      note: 'Under statutory voting the same result requires a simple majority of the shares voting.',
    },
    {
      name: 'Theoretical value of a subscription right',
      formula:
        'Cum-rights: (Market Price - Subscription Price) / (Rights Needed + 1). Ex-rights: (Ex-Rights Price - Subscription Price) / Rights Needed',
      note: 'Both give the same number. Ex-Rights Price = (Rights Needed × Market Price + Subscription Price) / (Rights Needed + 1).',
    },
  ],
  workedExamples: [
    {
      title: 'Outstanding shares from authorized, issued, and treasury',
      setup:
        "Kestrel Industries has 50,000,000 shares authorized in its charter and has issued 32,000,000 over its life. It has repurchased 4,500,000 shares, which it holds in treasury. Net income for the year was $82,500,000 and the stock trades at $45. Find shares outstanding, the unissued shelf, earnings per share, and market capitalization.",
      steps: [
        "Shares outstanding = issued − treasury. Substitute: 32,000,000 − 4,500,000 = 27,500,000 shares outstanding.",
        "Unissued shelf = authorized − issued. Substitute: 50,000,000 − 32,000,000 = 18,000,000 shares still available to sell without amending the charter.",
        "EPS uses OUTSTANDING shares, because treasury shares receive no allocation of earnings. Substitute: $82,500,000 / 27,500,000 = $3.00 per share.",
        "Market capitalization = price × shares outstanding. Substitute: $45 × 27,500,000 = $1,237,500,000.",
        "Classify by size: about $1.24 billion falls in the roughly $300 million to $2 billion band, so Kestrel is a small-cap company even though it has issued 32 million shares.",
      ],
      answer:
        "27,500,000 shares outstanding, 18,000,000 unissued, EPS of $3.00, and a market capitalization of about $1.24 billion — small cap. Only the outstanding figure is used for EPS, dividends, votes, and market cap.",
      watchOut:
        "Using issued shares for EPS: $82,500,000 / 32,000,000 = $2.58, understating EPS by 42 cents and making the company look materially less profitable per share than it is. The mirror error is using AUTHORIZED shares for market cap, which reports $2.25 billion and pushes the company into the wrong size tier entirely.",
    },
    {
      title: 'Cumulative preferred arrears before any common dividend',
      setup:
        "Bellweather Corp has 200,000 shares of 6% cumulative preferred, $100 par, and 2,000,000 shares of common. Over the last three years the board paid the preferred nothing in year 1, $2.00 per share in year 2, and nothing in year 3. It now wants to pay dividends in year 4 and has allocated $5,400,000. How much can the common receive per share?",
      steps: [
        "Find the full annual preferred dividend per share: 6% × $100 par = $6.00 per share per year. It is always computed on PAR, never on market price.",
        "Compute arrears year by year as the shortfall against $6.00: year 1 = $6.00 − $0 = $6.00; year 2 = $6.00 − $2.00 = $4.00; year 3 = $6.00 − $0 = $6.00.",
        "Total arrears per share: $6.00 + $4.00 + $6.00 = $16.00.",
        "Add the CURRENT year dividend, which must also be paid before common receives anything: $16.00 + $6.00 = $22.00 per preferred share.",
        "Convert to dollars: 200,000 shares × $22.00 = $4,400,000 owed to the preferred.",
        "Subtract from the pool: $5,400,000 − $4,400,000 = $1,000,000 available to common.",
        "Divide across the common: $1,000,000 / 2,000,000 shares = $0.50 per common share.",
      ],
      answer:
        "The preferred takes $4,400,000 — $22.00 per share, being $16.00 of arrears plus the $6.00 current dividend — leaving $1,000,000 for the common, or $0.50 per share. Had the preferred been straight (non-cumulative), only the current $6.00 would be owed: 200,000 × $6.00 = $1,200,000, leaving $4,200,000 for the common, or $2.10 per share. Cumulation costs the common $1.60 per share here.",
      watchOut:
        "Paying only the $16.00 of arrears and forgetting the current year. That leaves $5,400,000 − $3,200,000 = $2,200,000 for the common and reports $1.10 per share, more than double the correct answer. The preferred must be made whole for all arrears AND the current period before a single dollar reaches common.",
    },
    {
      title: 'Per-share basis after a stock dividend and then a reverse split',
      setup:
        "An investor buys 400 shares at $60 per share. The company later pays a 25% stock dividend, and the following year declares a 1-for-4 reverse split. The stock was $60 immediately before the stock dividend. Track the share count, the per-share cost basis, and the total position value through both events.",
      steps: [
        "Establish total cost basis, the one number that never changes through either event: 400 × $60 = $24,000.",
        "Apply the 25% stock dividend to the share count: 400 × 1.25 = 500 shares.",
        "Recompute per-share basis by spreading the SAME total over more shares: $24,000 / 500 = $48.00 per share.",
        "Check that the market price adjusts identically: $60 / 1.25 = $48.00 theoretical price, and position value 500 × $48.00 = $24,000, unchanged.",
        "Apply the 1-for-4 reverse split to the share count: 500 / 4 = 125 shares.",
        "Recompute per-share basis, now spreading the same total over FEWER shares: $24,000 / 125 = $192.00 per share.",
        "Check the price again: $48.00 × 4 = $192.00, and position value 125 × $192.00 = $24,000, still unchanged.",
        "Test the result. If the investor sells all 125 shares at $200, the gain is (125 × $200) − $24,000 = $25,000 − $24,000 = $1,000.",
      ],
      answer:
        "Basis per share runs $60.00 to $48.00 to $192.00 while the share count runs 400 to 500 to 125, and total basis stays $24,000 throughout. Neither event is taxable and neither changes the investor's percentage ownership. Selling at $200 produces a $1,000 gain.",
      watchOut:
        "Two errors, in opposite directions. Keeping $60 as the basis after the stock dividend claims 500 × $60 = $30,000 of basis, overstating it by $6,000 and manufacturing a phantom loss. Dividing basis by 4 at the reverse split instead of multiplying gives $48 / 4 = $12 per share, which turns the true $1,000 gain into a reported 125 × ($200 − $12) = $23,500 gain. A reverse split cuts the share count, so per-share basis must RISE.",
    },
    {
      title: 'Rule 144 volume limit — the greater of the two tests',
      setup:
        "An officer of Adair Systems wants to sell control stock. Adair has 40,000,000 shares outstanding. Reported trading volume for the four weeks preceding the filing was 300,000, 250,000, 400,000, and 250,000 shares. How many shares may the officer sell in the next 90 days, and is Form 144 required if the shares trade at $18?",
      steps: [
        "First test — 1% of outstanding shares: 1% × 40,000,000 = 400,000 shares.",
        "Second test — average weekly volume over the preceding four weeks. Sum first: 300,000 + 250,000 + 400,000 + 250,000 = 1,200,000 shares.",
        "Divide by 4 weeks to get the average: 1,200,000 / 4 = 300,000 shares.",
        "Take the GREATER of the two: 400,000 versus 300,000, so the limit is 400,000 shares in the 90-day period.",
        "Test the Form 144 trigger, which is sales in any three-month period exceeding 5,000 shares or $50,000. Here 400,000 shares at $18 = $7,200,000, far past both thresholds, so Form 144 is filed with the SEC when the sell order is placed and is generally good for 90 days.",
        "Now change one fact. Had the four weekly volumes been 900,000, 1,100,000, 700,000, and 500,000 — summing to 3,200,000, an average of 800,000 — the greater of 400,000 and 800,000 is 800,000 shares, and the volume test would control and permit twice as much.",
      ],
      answer:
        "400,000 shares in the 90-day period, set by the 1% test because average weekly volume of 300,000 was lower. Form 144 is required. In the higher-volume variant the limit doubles to 800,000 shares. The rule takes whichever measure is larger, which is why an active market loosens the constraint while a thin market never tightens it below 1%.",
      watchOut:
        "Taking the LESSER of the two tests, which caps the sale at 300,000 shares and leaves 100,000 permitted shares unsold. The other frequent slip is summing the four weeks and forgetting to divide: 1,200,000 shares is three times the true limit, and selling into it would be an unregistered distribution.",
    },
    {
      title: 'Dollar return on an ADR once the currency moves',
      setup:
        "An investor buys 500 ADRs of a European company at $50 each. Each ADR represents 2 ordinary shares. At purchase the ordinary shares trade at 20.00 euros and the exchange rate is $1.25 per euro. One year later the ordinary shares trade at 22.00 euros, the euro has weakened to $1.10, and the company has paid a dividend of 0.60 euros per ordinary share. The depositary deducts a fee of $0.02 per ADR from the dividend. What is the investor's dollar return?",
      steps: [
        "Verify the starting ADR price from the underlying: 2 ordinary shares × 20.00 euros × $1.25 per euro = $50.00 per ADR. Total cost = 500 × $50.00 = $25,000.",
        "Value the ADR one year later using the new share price AND the new exchange rate: 2 × 22.00 euros × $1.10 = $48.40 per ADR.",
        "Price change per ADR: $48.40 − $50.00 = −$1.60. Across the position: 500 × (−$1.60) = −$800.",
        "Convert the dividend. Per ADR the gross dividend is 2 ordinary shares × 0.60 euros = 1.20 euros; at $1.10 per euro that is $1.32.",
        "Subtract the depositary fee: $1.32 − $0.02 = $1.30 net per ADR. Across the position: 500 × $1.30 = $650.",
        "Total dollar return: −$800 of price change + $650 of dividends = −$150. As a percentage: −$150 / $25,000 = −0.60%.",
        "Decompose to see what happened. In euros the total return was (22.00 − 20.00 + 0.60) / 20.00 = 2.60 / 20.00 = +13.0%. The currency moved 1.10 / 1.25 − 1 = −12.0%. Combining them: 1.130 × 0.880 − 1 = −0.56%, and the depositary fee accounts for the remaining gap down to −0.60%.",
      ],
      answer:
        "A dollar loss of $150, or −0.60%, on a $25,000 position that ended worth $24,200 plus $650 of dividends. The company delivered a 13.0% total return in euros and a 12.0% decline in the euro consumed all of it. Currency risk is not a footnote on an ADR — it can exceed the entire local-currency return.",
      watchOut:
        "Reporting the local-currency result as the investor's return. Quoting +13.0% implies a gain of about $3,250 on the $25,000 position when the investor actually lost $150 — a swing of roughly $3,400 in the wrong direction. Translate both the price AND the dividend at the CURRENT rate, and remember the effect runs both ways: a strengthening euro would have turned the same 13.0% into a larger dollar gain.",
    },
  ],
};
