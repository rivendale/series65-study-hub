import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'pooled-investments',
  title: 'Investment Companies and Mutual Funds',
  weight: '~4%',
  order: 11,
  summary:
    "The Investment Company Act of 1940 defines three kinds of investment company, and the management company — especially the open-end mutual fund — dominates the exam. Know the structures, the 75-5-10 diversification test, how NAV and public offering price are computed, and which share class fits which holding period.",
  body: `## The Three Types Under the Investment Company Act of 1940

The **Investment Company Act of 1940** classifies pooled vehicles into exactly **three** categories. Expect a question that simply asks you to name them.

1. **Face-amount certificate company** — issues a certificate obligating the company to pay a stated **face amount** at a fixed future date in exchange for lump-sum or installment payments. Essentially obsolete, but it stays on the list.
2. **Unit investment trust (UIT)** — organized under a **trust indenture**, holds a **fixed, unmanaged portfolio**, and has **no board of directors and no investment adviser**. Investors own **redeemable units**. The trust **terminates on a set date**. Variable annuity separate accounts are often organized as UITs.
3. **Management company** — a portfolio actively (or passively) supervised by an **investment adviser** under a written contract. This is where mutual funds live, and it splits two ways.

### Open-End Versus Closed-End

| | **Open-end (mutual fund)** | **Closed-end fund** |
| --- | --- | --- |
| Shares outstanding | **Continuously offered**; fluctuates | **Fixed** after the IPO |
| Purchase from | The **fund itself**, always at the **next computed price** | Another investor on an **exchange or OTC** |
| Price | **NAV** plus any sales charge | Whatever the **market** will pay — a **premium or discount to NAV** |
| Capital structure | **One class of voting common stock only**; no senior securities | May issue **preferred stock and bonds** |
| Redemption | Redeemable; proceeds within **seven days** | Not redeemable; sold in the market with a commission |
| Fractional shares | Permitted | Not typically |

The tested distinction: an **open-end fund can never trade at a discount to NAV**, because the fund itself always stands ready to redeem at NAV. A **closed-end fund routinely does**, because its price is set by supply and demand.

### Diversified Versus Non-Diversified: The 75-5-10 Rule

To call itself **diversified**, a management company must satisfy the **75-5-10 test**:

- **75%** of total assets must be invested such that
- no more than **5%** of total assets sit in the securities of any **one issuer**, and
- the fund holds no more than **10% of the outstanding voting securities** of any one issuer.

The remaining **25%** is unrestricted and may be concentrated however the manager wishes. A fund failing the test is **non-diversified** — which is a label, not a violation. Sector funds and many closed-end funds are legitimately non-diversified and carry more **business risk**.

## Net Asset Value and Forward Pricing

**NAV per share = (Total Assets − Total Liabilities) / Shares Outstanding.**

The fund computes NAV at least **once each business day**, normally at the close of the New York Stock Exchange. Under **forward pricing**, an order to buy or redeem is executed at the **next NAV computed after the order is received** — never at the last published price. That rule exists to prevent trading on stale prices.

For a fund with a front-end sales charge, the price the investor pays is the **public offering price (POP)**:

**POP = NAV / (1 − Sales Charge %)**

and running it backward,

**Sales Charge % = (POP − NAV) / POP.**

Note that the sales charge percentage is stated as a percentage of the **POP**, not of the NAV. A fund with a $9.20 NAV and a 5% charge has a POP of 9.20 / 0.95 = **$9.68**.

The **maximum sales charge on a mutual fund is 8.5% of the POP** under FINRA rules, and even that ceiling is available only if the fund offers **breakpoints, rights of accumulation, and dividend reinvestment at NAV**. Drop any one of those and the maximum drops as well. In practice, competitive pressure has pushed real front-end loads far below the ceiling.

## Share Classes

The same portfolio is sold in different fee wrappers. Choosing the wrong one is the classic suitability failure in this topic.

| | **Class A** | **Class B** | **Class C** |
| --- | --- | --- | --- |
| Sales charge | **Front-end load** paid at purchase | **Contingent deferred sales charge (CDSC)** on exit, declining to zero over roughly 6–8 years | **Level load**, small or no CDSC after about one year |
| 12b-1 fee | **Lowest** | **High** | **High, and permanent** |
| Breakpoints | **Yes** | No | No |
| Conversion | n/a | **Converts to Class A** once the CDSC period ends | Traditionally **does not convert** |
| Best for | **Large investments** and **long horizons** | Smaller amounts held long term (largely phased out) | **Short to intermediate** horizons, smaller amounts |

The logic: a front-end load is a one-time cost that gets amortized across a long holding period, while a level 12b-1 fee compounds forever. **Class A wins over long horizons and at large dollar amounts; Class C wins over short horizons.** Recommending Class C to a client investing for 25 years, or Class B for a very large purchase that would have qualified for a Class A breakpoint, is an unsuitable recommendation.

### Breakpoints, LOI, and Rights of Accumulation

**Breakpoints** are volume discounts on the front-end load — the sales charge steps down at stated investment levels (for example at $25,000, $50,000, $100,000). They are available to an **individual, a spouse and minor children, and certain trusts and corporations**, but **not** to an **investment club** or to unrelated persons pooling money.

A **letter of intent (LOI)** lets an investor claim the breakpoint immediately by promising to invest the qualifying amount within **13 months**. It is **non-binding** — if the investor does not complete it, the fund simply liquidates enough of the escrowed shares to collect the higher sales charge. An LOI may be **backdated up to 90 days** to capture a recent purchase.

**Rights of accumulation (ROA)** let existing holdings count toward the next breakpoint on a **new** purchase, valued at current NAV or total dollars invested, whichever the fund specifies. Unlike an LOI, ROA has **no time limit** and requires no commitment.

**Breakpoint selling** — recommending a purchase **just below** a breakpoint so the client pays a higher sales charge and the rep earns a larger commission — is a **prohibited practice**. So is failing to inform a client that a modestly larger investment would qualify for a discount.

## 12b-1 Fees and the Expense Ratio

A **Rule 12b-1 fee** is an **annual asset-based charge** paid out of fund assets to cover **distribution and shareholder servicing** — advertising, printing and mailing prospectuses to prospective investors, and compensation to selling representatives. The plan must be approved and **renewed annually** by the board, including a majority of the **non-interested (independent) directors**.

Two numbers matter:

- A fund may only describe itself as **"no-load" if its 12b-1 fee does not exceed 0.25%** of average net assets per year.
- The distribution portion of a 12b-1 plan is capped at **0.75%**, plus up to **0.25%** as a service fee — a practical maximum near **1.00%**.

The **expense ratio** is total annual fund operating expenses divided by average net assets: management fee, 12b-1 fee, administrative and custodial costs. It **excludes sales loads** and portfolio transaction costs. Because it reduces return every single year, the expense ratio is the most durable predictor of relative performance within a category, and it is the number an adviser should compare first.

## Disclosure Documents

The **statutory prospectus** must be delivered **no later than with the confirmation** of a purchase, and describes objectives, strategies, risks, fees, performance, and management. Many funds use a **summary prospectus**, with the full document available online or on request. The **Statement of Additional Information (SAI)** contains detailed financial statements, the full list of holdings, director compensation, and portfolio policies — it must be provided **free upon request**, but is not automatically delivered.

## Shareholder Services

- **Automatic reinvestment** of dividends and capital gains distributions, purchased at **NAV** (no sales charge). Reinvested distributions are **still taxable in the year distributed** — a point clients routinely misunderstand.
- **Exchange (conversion) privilege** allows moving among funds in the same **family** without a new sales charge. It is **not** tax-free: an exchange is a **sale and a purchase**, and any gain is currently taxable.
- **Systematic withdrawal plans** pay out a **fixed dollar amount**, a **fixed percentage**, a **fixed number of shares**, or a **fixed period**. Withdrawals that exceed the portfolio's growth will exhaust principal, and a plan is never guaranteed.
- **Dollar-cost averaging** invests a **fixed dollar amount at regular intervals**, buying more shares when prices are low and fewer when high. The mathematical result is that the investor's **average cost per share is lower than the average price per share** over the period. It requires ongoing investment through downturns and **does not guarantee a profit or protect against loss** in a declining market.

## Taxation Snapshot

A fund that qualifies as a **regulated investment company** and distributes essentially all of its net investment income and realized gains passes the tax liability through to shareholders and avoids tax at the fund level. Shareholders owe tax on distributions **whether taken in cash or reinvested**, with **long-term capital gain distributions taxed at long-term rates regardless of how long the shareholder has owned the fund**.`,
  pitfalls: [
    "Under 75-5-10 the 5% and 10% tests apply only to 75% of assets; the remaining 25% may be concentrated freely. Applying the limits to the whole portfolio is the standard error.",
    "The 10% prong limits the percentage of an issuer's outstanding voting securities the fund may hold, not the percentage of the fund's assets. The 5% prong is the asset-based one.",
    "The sales charge is a percentage of the public offering price, not of NAV, so POP equals NAV divided by one minus the sales charge percentage — never NAV times one plus the charge.",
    "An open-end fund can never trade at a discount to NAV; only a closed-end fund can, because its price is set by market supply and demand.",
    "Recommending Class C shares for a long-horizon investor, or splitting a purchase to stay just below a breakpoint, are prohibited or unsuitable practices even though the portfolio is identical.",
    "A letter of intent runs 13 months and may be backdated 90 days. It is not binding — failing to complete it simply forfeits the discount on shares held in escrow.",
    "Exchanging within a fund family avoids a new sales charge but is a taxable sale and purchase; reinvested dividends are likewise taxable in the year distributed.",
    "A fund may call itself no-load only if its 12b-1 fee is 0.25% or less. A fund with a 0.75% distribution fee and no front-end load is still a load fund.",
  ],
  keyTerms: [
    {
      term: 'Unit investment trust',
      definition:
        'An investment company organized under a trust indenture with a fixed unmanaged portfolio, no board of directors and no investment adviser, issuing redeemable units and terminating on a set date.',
    },
    {
      term: 'Open-end management company',
      definition:
        'A mutual fund that continuously offers redeemable shares priced at the next computed net asset value, may issue only one class of voting common stock, and cannot trade at a discount to NAV.',
    },
    {
      term: 'Closed-end fund',
      definition:
        'A management company with a fixed number of shares that trade on an exchange at a market price which may be above or below NAV, and which may issue preferred stock and debt.',
    },
    {
      term: '75-5-10 rule',
      definition:
        "The diversification test: within 75% of assets, no more than 5% in any single issuer and no more than 10% of that issuer's outstanding voting securities.",
    },
    {
      term: 'Forward pricing',
      definition:
        'The requirement that purchase and redemption orders be executed at the next net asset value computed after the order is received, preventing trades at stale prices.',
    },
    {
      term: 'Contingent deferred sales charge',
      definition:
        'A back-end sales charge assessed on redemption, typically declining to zero over roughly six to eight years, characteristic of Class B shares.',
    },
    {
      term: 'Rule 12b-1 fee',
      definition:
        "An annual asset-based charge for distribution and shareholder servicing, approved annually by the board; a fund may be called no-load only if the fee is 0.25% or less.",
    },
    {
      term: 'Breakpoint selling',
      definition:
        'The prohibited practice of recommending a purchase just below a volume-discount level so the client pays a higher sales charge and the representative earns more.',
    },
    {
      term: 'Statement of Additional Information',
      definition:
        "The supplement to a fund's prospectus containing financial statements, complete holdings, and detailed policies, provided free upon request but not automatically delivered.",
    },
    {
      term: 'Dollar-cost averaging',
      definition:
        'Investing a fixed dollar amount at regular intervals, which produces an average cost per share lower than the average price per share but does not guarantee a profit.',
    },
  ],
  confusions: [
    {
      dont: 'Open-end fund — redeemable, priced at next computed NAV plus any load, never trades at a discount',
      with: 'Closed-end fund — fixed shares, exchange-traded at a market premium or discount to NAV',
    },
    {
      dont: 'Letter of intent — a forward-looking 13-month promise, backdatable 90 days',
      with: 'Rights of accumulation — existing holdings counted toward a new breakpoint, with no time limit or commitment',
    },
    {
      dont: 'Class A — front-end load with breakpoints, best for large amounts and long horizons',
      with: 'Class C — level 12b-1 load that never goes away, best for short to intermediate horizons',
    },
    {
      dont: 'Sales load — a one-time distribution cost excluded from the expense ratio',
      with: '12b-1 fee — an ongoing annual charge included in the expense ratio',
    },
    {
      dont: 'Unit investment trust — fixed portfolio, no adviser, no board, set termination date',
      with: 'Management company — actively supervised portfolio under an advisory contract with a board of directors',
    },
  ],
  formulas: [
    {
      name: 'Net asset value per share',
      formula: 'NAV per Share = (Total Assets − Total Liabilities) / Shares Outstanding',
      note: 'Computed at least once each business day, normally at the close of the NYSE.',
    },
    {
      name: 'Public offering price',
      formula: 'POP = NAV / (1 − Sales Charge %)',
      note: 'A $9.20 NAV with a 5% sales charge gives 9.20 / 0.95 = $9.68.',
    },
    {
      name: 'Sales charge percentage',
      formula: 'Sales Charge % = (POP − NAV) / POP',
      note: 'The charge is always expressed as a percentage of the offering price, capped at 8.5% for a mutual fund.',
    },
    {
      name: 'Expense ratio',
      formula: 'Expense Ratio = Total Annual Fund Operating Expenses / Average Net Assets',
      note: 'Includes the management fee and 12b-1 fee; excludes sales loads and portfolio transaction costs.',
    },
  ],
  workedExamples: [
    {
      title: 'Net asset value per share',
      setup:
        "A mutual fund holds portfolio securities and cash worth $860,000,000, owes $12,000,000 in accrued expenses and unsettled purchases, and has 42,400,000 shares outstanding. What is NAV per share?",
      steps: [
        "Net the balance sheet first: Total Assets − Total Liabilities = $860,000,000 − $12,000,000 = $848,000,000. That figure is net assets.",
        "Write the formula: NAV per Share = Net Assets / Shares Outstanding = $848,000,000 / 42,400,000.",
        "Divide: 848 / 42.4 = 20.",
      ],
      answer:
        "NAV is $20.00 per share. Under forward pricing, any purchase or redemption order already in hand is filled at the NEXT NAV computed after the order was received, not at this one.",
      watchOut:
        "Dividing total assets by shares outstanding and ignoring liabilities: $860,000,000 / 42,400,000 = $20.28. That is not net asset value — the word net is the entire instruction.",
    },
    {
      title: 'Public offering price from NAV and a sales charge',
      setup:
        "A fund reports a NAV of $18.90 per share and carries a 5.5% front-end sales charge. What is the public offering price?",
      steps: [
        "Read the charge correctly. A 5.5% sales charge means 5.5% OF THE PUBLIC OFFERING PRICE, so the NAV must represent the other 94.5% of POP.",
        "Write that as an equation: NAV = POP × (1 − 0.055), which rearranges to POP = NAV / (1 − 0.055).",
        "Compute the denominator: 1 − 0.055 = 0.945.",
        "Substitute and divide: $18.90 / 0.945 = $20.00.",
        "Verify the charge in dollars: POP − NAV = $20.00 − $18.90 = $1.10, and $1.10 / $20.00 = 5.5%. The stated percentage reappears only when measured against POP, which confirms the method.",
      ],
      answer:
        "The public offering price is $20.00 per share, of which $18.90 buys fund assets and $1.10 is the sales charge.",
      watchOut:
        "Computing the sales charge as a percentage of NAV: $18.90 × 1.055 = $19.94. Run that backward and the implied charge is only ($19.94 − $18.90) / $19.94 = 5.2%, not the 5.5% the fund stated. The charge is always a percentage of the offering price, so you divide by (1 − charge) rather than multiplying by (1 + charge).",
    },
    {
      title: 'Backing the sales charge percentage out of NAV and POP',
      setup:
        "A fund is quoted with a NAV of $23.75 and a public offering price of $25.00. What sales charge is the investor paying, and is it within the FINRA maximum?",
      steps: [
        "Find the sales charge in dollars: POP − NAV = $25.00 − $23.75 = $1.25 per share.",
        "Divide by POP, not by NAV: Sales Charge % = (POP − NAV) / POP = $1.25 / $25.00.",
        "Divide: 1.25 / 25.00 = 0.05.",
        "Compare with the ceiling: 5.0% is comfortably inside the 8.5% of POP maximum FINRA allows on a mutual fund.",
      ],
      answer:
        "The sales charge is 5.0% of the public offering price, within the 8.5% maximum.",
      watchOut:
        "Dividing the $1.25 by NAV instead of POP: $1.25 / $23.75 = 5.26%. Same dollars, wrong denominator. On a question that turns on whether a fund exceeds the 8.5% ceiling, that inflation can flip your answer.",
    },
    {
      title: 'How many shares a dollar amount buys',
      setup:
        "A client invests $9,000 in a fund whose NAV is $11.52 per share with a 4% front-end sales charge. How many shares does she receive?",
      steps: [
        "She buys at POP, never at NAV, so compute POP first: POP = NAV / (1 − 0.04) = $11.52 / 0.96.",
        "Divide: 11.52 / 0.96 = $12.00 per share.",
        "Now divide the dollars invested by the price actually paid: $9,000 / $12.00.",
        "Divide: 9,000 / 12 = 750 shares.",
        "Sanity-check the load. 750 shares × $11.52 NAV = $8,640 of net assets working for her, and $9,000 − $8,640 = $360 went to the sales charge. $360 / $9,000 = 4%, matching the stated charge measured on POP.",
      ],
      answer:
        "The $9,000 buys 750 shares. Mutual funds issue fractional shares, so a non-whole answer would be perfectly acceptable here.",
      watchOut:
        "Dividing the investment by NAV: $9,000 / $11.52 = 781.25 shares. That credits the client with 31.25 shares the sales charge already paid for. Buy at POP, redeem at NAV.",
    },
    {
      title: 'Qualifying for a breakpoint using rights of accumulation',
      setup:
        "A fund posts this Class A schedule — under $25,000: 5.75%; $25,000 to $49,999: 4.50%; $50,000 to $99,999: 3.50%; $100,000 and above: 2.50%. A client already owns shares of the same fund that she purchased for $35,000 and that are worth $42,000 today. She now invests another $15,000. The fund values rights of accumulation at current value. What sales charge applies, and what does ROA save her?",
      steps: [
        "Price the new purchase in isolation first. Standing alone, $15,000 falls in the lowest tier (under $25,000) and would be charged 5.75%.",
        "Apply rights of accumulation: existing holdings count toward the breakpoint on a NEW purchase. Use the valuation basis the fund specifies — here current value of $42,000, not the $35,000 originally invested.",
        "Add them: $42,000 existing + $15,000 new = $57,000 in combined holdings.",
        "Locate $57,000 on the schedule. It lands in the $50,000 to $99,999 tier, so the applicable rate is 3.50%.",
        "Apply the reduced rate to the new money only: $15,000 × 0.035 = $525.",
        "Compute what she would have paid without aggregation: $15,000 × 0.0575 = $862.50.",
        "Subtract: $862.50 − $525 = $337.50 saved.",
      ],
      answer:
        "The 3.50% breakpoint applies, the sales charge on the new $15,000 is $525, and rights of accumulation save her $337.50. ROA carries no time limit and no commitment, unlike a letter of intent.",
      watchOut:
        "Applying the reduced rate to the whole $57,000 — the discount attaches to the new purchase, not retroactively to shares already owned. Two related traps: confusing ROA with a letter of intent (13 months forward, backdatable 90 days, non-binding), and the prohibited practice of steering her to invest only $7,000 so the combined total stays at $49,000 and below the $50,000 breakpoint. That is breakpoint selling, and staying silent about the aggregation is itself a violation.",
    },
    {
      title: 'The drag of an expense ratio over twenty years',
      setup:
        "Two funds hold essentially the same portfolio and earn 7.00% a year gross. Fund A charges an expense ratio of 0.20%; Fund B charges 1.20%. A client invests $100,000 for 20 years. What does the extra one percentage point of expense cost?",
      steps: [
        "Convert gross return to net return by subtracting the expense ratio, which is deducted from fund assets every year: Fund A nets 7.00% − 0.20% = 6.80%; Fund B nets 7.00% − 1.20% = 5.80%.",
        "Compound Fund A over 20 years: 1.068 raised to the 20th power = 3.7276.",
        "Multiply: $100,000 × 3.7276 = $372,756.",
        "Compound Fund B: 1.058 raised to the 20th power = 3.0883.",
        "Multiply: $100,000 × 3.0883 = $308,826.",
        "Subtract: $372,756 − $308,826 = $63,930.",
      ],
      answer:
        "The one-percentage-point difference costs about $63,930 over 20 years — roughly 64% of the original investment, and about 21% more ending wealth in the cheaper fund. This is why the expense ratio is the first number to compare between two funds in the same category.",
      watchOut:
        "Estimating the damage as 1% × 20 years = 20% of the balance. The true drag is far larger, because every dollar taken as a fee is also a dollar that never compounds again. Note also that the expense ratio EXCLUDES sales loads — a front-end load would be deducted before any of this compounding begins, making the gap wider still.",
    },
  ],
};
