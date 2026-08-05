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
};
