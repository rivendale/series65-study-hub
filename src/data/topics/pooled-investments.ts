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

The three differ on a single structural question: **who decides what the portfolio holds, and can that decision change?** A face-amount certificate company promises a **fixed dollar sum** and the portfolio behind it is the issuer's problem, not the investor's — the investor holds a debt-like claim, not a share of a portfolio. A UIT's portfolio is **chosen once and frozen**, so there is no adviser to hire, no advisory fee to negotiate, no board to oversee anyone, and a stated date on which the whole thing is liquidated. A management company's portfolio is **continuously decided by an adviser** under a contract, which is exactly why it needs a **board of directors** — at least 40% of it non-interested, and in practice a majority — to approve that contract annually, approve any 12b-1 plan, and stand between the adviser's interests and the shareholders'. Governance follows discretion: where nobody has discretion, nobody needs to be supervised.

### Open-End Versus Closed-End

| | **Open-end (mutual fund)** | **Closed-end fund** |
| --- | --- | --- |
| Shares outstanding | **Continuously offered**; fluctuates | **Fixed** after the IPO |
| Purchase from | The **fund itself**, always at the **next computed price** | Another investor on an **exchange or OTC** |
| Price | **NAV** plus any sales charge | Whatever the **market** will pay — a **premium or discount to NAV** |
| Capital structure | **Common stock only** — no senior securities, so no preferred and no bonds | May issue **preferred stock and bonds** |
| Redemption | Redeemable; proceeds within **seven days** | Not redeemable; sold in the market with a commission |
| Fractional shares | Permitted | Not typically |

The tested distinction: an **open-end fund can never trade at a discount to NAV**, because the fund itself always stands ready to redeem at NAV. A **closed-end fund routinely does**, because its price is set by supply and demand.

### Diversified Versus Non-Diversified: The 75-5-10 Rule

To call itself **diversified**, a management company must satisfy the **75-5-10 test**:

- **75%** of total assets must be invested such that
- no more than **5%** of total assets sit in the securities of any **one issuer**, and
- the fund holds no more than **10% of the outstanding voting securities** of any one issuer.

The remaining **25%** is unrestricted and may be concentrated however the manager wishes. A fund failing the test is **non-diversified** — which is a label, not a violation. Sector funds and many closed-end funds are legitimately non-diversified and carry more **business risk**.

Work it through with numbers so the two prongs stay separate. A fund holds **$500 million** in total assets: the restricted bucket is $375 million and the free bucket is $125 million. Within the restricted bucket, 5% of **total** assets is the per-issuer cap, so **$25 million** is the most the fund may hold in one name and still count it toward the 75%. A **$30 million** position violates nothing — it simply cannot count toward the test and must live inside the $125 million unrestricted bucket.

The second prong measures something else entirely. If the fund owns **900,000 shares of an issuer that has 8,000,000 outstanding**, that is 900,000 / 8,000,000 = **11.25% of the issuer's voting stock**, above the 10% ceiling, so this position also falls outside the 75% bucket even if it is a trivial fraction of fund assets. The 5% prong measures the **fund's exposure to the issuer**; the 10% prong measures the **fund's control over the issuer**, and exists so a fund cannot quietly become a controlling shareholder while calling itself a diversified passive investor.

## Net Asset Value and Forward Pricing

**NAV per share = (Total Assets − Total Liabilities) / Shares Outstanding.**

The fund computes NAV at least **once each business day**, normally at the close of the New York Stock Exchange. Under **forward pricing**, an order to buy or redeem is executed at the **next NAV computed after the order is received** — never at the last published price.

Understand the reason and the design explains itself. Funds once priced **backward**: an order placed at 2 p.m. was filled at the NAV struck the previous afternoon. That handed anyone with a telephone a nearly riskless trade — if good news broke during the session, an investor could buy at yesterday's stale, lower price and capture the gain the moment the fund repriced, and the gain came out of existing shareholders, diluted by shares sold too cheaply. Forward pricing closes the door by making the price **unknowable at the moment of the order**. The same logic drives the anti-late-trading rules: an order received after the pricing time gets the **next** day's NAV.

It is also why a mutual fund has no intraday price and cannot be bought with a limit order. There is nothing to limit — the price does not exist yet.

For a fund with a front-end sales charge, the price the investor pays is the **public offering price (POP)**:

**POP = NAV / (1 − Sales Charge %)**

and running it backward,

**Sales Charge % = (POP − NAV) / POP.**

Note that the sales charge percentage is stated as a percentage of the **POP**, not of the NAV. A fund with a $9.20 NAV and a 5% charge has a POP of 9.20 / 0.95 = **$9.68**.

The **maximum sales charge on a mutual fund is 8.5% of the POP** under FINRA rules, and even that ceiling is available only if the fund offers **breakpoints, rights of accumulation, and dividend reinvestment at NAV**. Drop any one of those and the maximum drops as well. In practice, competitive pressure has pushed real front-end loads far below the ceiling.

## Share Classes

The same portfolio is sold in different fee wrappers. Choosing the wrong one is the classic suitability failure in this topic. These wrappers do not violate the no-senior-securities rule above: every class holds the identical claim on the same portfolio and they differ only in **sales charge and 12b-1 arrangements**, never in seniority.

| | **Class A** | **Class B** | **Class C** |
| --- | --- | --- | --- |
| Sales charge | **Front-end load** paid at purchase | **Contingent deferred sales charge (CDSC)** on exit, declining to zero over roughly 6–8 years | **Level load**, small or no CDSC after about one year |
| 12b-1 fee | **Lowest** | **High** | **High, and permanent** |
| Breakpoints | **Yes** | No | No |
| Conversion | n/a | **Converts to Class A** once the CDSC period ends | Traditionally **does not convert** |
| Best for | **Large investments** and **long horizons** | Smaller amounts held long term (largely phased out) | **Short to intermediate** horizons, smaller amounts |

The logic: a front-end load is a one-time cost that gets amortized across a long holding period, while a level 12b-1 fee compounds forever. **Class A wins over long horizons and at large dollar amounts; Class C wins over short horizons.** Recommending Class C to a client investing for 25 years, or Class B for a very large purchase that would have qualified for a Class A breakpoint, is an unsuitable recommendation.

### Class A or Class C: finding the crossover

The right class is a function of the holding period, and the crossover point can be located rather than guessed. A client is investing **$50,000** in a fund whose portfolio is expected to return **7.00% a year gross**. She may buy either class:

- **Class A** — a **4.50%** front-end load at the $50,000 breakpoint, total expense ratio **0.85%** (including a 0.25% 12b-1 fee).
- **Class C** — no front-end load, total expense ratio **1.60%** (including a 1.00% 12b-1 fee), with a 1% charge if she redeems within the first year.

Set up both. Class A puts only $50,000 × 0.955 = **$47,750** to work and then nets 7.00% − 0.85% = **6.15%** a year. Class C puts the full **$50,000** to work but nets only 7.00% − 1.60% = **5.40%**.

Class C starts $2,250 ahead and gives that lead back at 0.75 percentage points a year. Run the compounding:

| Years held | Class A | Class C | Difference |
| --- | --- | --- | --- |
| 3 | $57,113 | $58,545 | C ahead by $1,432 |
| 6 | $68,311 | $68,551 | C ahead by $240 |
| 7 | $72,513 | $72,253 | **A ahead by $260** |
| 20 | $157,534 | $143,147 | **A ahead by $14,387** |

The lines cross at roughly **six and a half years**. Under that, Class C is genuinely the better buy; over it, Class A wins and keeps winning, because the expense gap compounds while the load does not.

The conclusion follows from the client's stated horizon, not the rep's compensation. Saving for a house in three years points to Class C; funding a retirement twenty years out points to Class A, and the $14,387 gap is why recommending C to her is a violation rather than a matter of taste.

Two boundaries. The crossover **moves** — a lower load or a wider expense gap pulls it in, and a larger purchase reaching a deeper breakpoint pulls it in further. And fixing the mistake later only stops the bleeding: converting Class C into Class A **of the same fund** is a share-class conversion, generally **not** a taxable event, but it recovers none of the excess 12b-1 fees already paid. Many funds now convert Class C to Class A automatically after eight to ten years, capping the damage the same way. Note the boundary — moving into a **different** fund in the family is an **exchange**, which avoids a new sales charge but is a taxable sale and purchase.

### Breakpoints, LOI, and Rights of Accumulation

**Breakpoints** are volume discounts on the front-end load — the sales charge steps down at stated investment levels (for example at $25,000, $50,000, $100,000). They are available to an **individual, a spouse and minor children, and certain trusts and corporations**, but **not** to an **investment club** or to unrelated persons pooling money.

A **letter of intent (LOI)** lets an investor claim the breakpoint immediately by promising to invest the qualifying amount within **13 months**. It is **non-binding** — if the investor does not complete it, the fund simply liquidates enough of the escrowed shares to collect the higher sales charge. An LOI may be **backdated up to 90 days** to capture a recent purchase.

**Rights of accumulation (ROA)** let existing holdings count toward the next breakpoint on a **new** purchase, valued at current NAV or total dollars invested, whichever the fund specifies. Unlike an LOI, ROA has **no time limit** and requires no commitment.

**Breakpoint selling** — recommending a purchase **just below** a breakpoint so the client pays a higher sales charge and the rep earns a larger commission — is a **prohibited practice**. So is failing to inform a client that a modestly larger investment would qualify for a discount. Note the boundary: the violation is not that the client bought a smaller amount, which is her right, but that the representative **stayed silent about an available discount** or steered her under the line. Spreading a large purchase across several fund families so that no single family reaches a breakpoint is the same violation wearing a diversification argument, and it is the version most likely to appear in a fact pattern.

## 12b-1 Fees and the Expense Ratio

A **Rule 12b-1 fee** is an **annual asset-based charge** paid out of fund assets to cover **distribution and shareholder servicing** — advertising, printing and mailing prospectuses to prospective investors, and compensation to selling representatives. The plan must be approved and **renewed annually** by the board, including a majority of the **non-interested (independent) directors**.

Two numbers matter:

- A fund may only describe itself as **"no-load" if its 12b-1 fee does not exceed 0.25%** of average net assets per year.
- The distribution portion of a 12b-1 plan is capped at **0.75%**, plus up to **0.25%** as a service fee — a practical maximum near **1.00%**.

The **expense ratio** is total annual fund operating expenses divided by average net assets: management fee, 12b-1 fee, administrative and custodial costs. It **excludes sales loads** and portfolio transaction costs. Because it reduces return every single year, the expense ratio is the most durable predictor of relative performance within a category, and it is the number an adviser should compare first.

## Disclosure Documents

The **statutory prospectus** must be delivered **no later than with the confirmation** of a purchase, and describes objectives, strategies, risks, fees, performance, and management. Many funds use a **summary prospectus**, with the full document available online or on request. The **Statement of Additional Information (SAI)** contains detailed financial statements, the full list of holdings, director compensation, and portfolio policies — it must be provided **free upon request**, but is not automatically delivered.

The division of labor is deliberate. The prospectus carries what an investor **needs in order to decide**, and its **fee table** — which restates every charge as the dollar cost of a hypothetical $10,000 investment over one, three, five and ten years — is the most useful page in the document, because it converts percentages into dollars. The SAI carries what a diligent analyst **might want in order to dig**, including the auditor's report and the fund's fundamental policies, which can be changed only by a **shareholder vote**. Note the timing rule precisely: the prospectus may arrive **with** the confirmation rather than before the sale, so it is not a pre-purchase disclosure the way a client might assume.

## Shareholder Services

- **Automatic reinvestment** of dividends and capital gains distributions, purchased at **NAV** (no sales charge). Reinvested distributions are **still taxable in the year distributed** — a point clients routinely misunderstand.
- **Exchange privilege** allows moving among funds in the same **family** without a new sales charge. It is **not** tax-free: an exchange is a **sale and a purchase**, and any gain is currently taxable. The privilege exists so a client can change objectives without paying a second load; it does not exist to let a rep churn a portfolio, and frequent switching between families to generate loads is **fund switching**, a prohibited practice.
- **Systematic withdrawal plans** pay out a **fixed dollar amount**, a **fixed percentage**, a **fixed number of shares**, or a **fixed period**. Withdrawals that exceed the portfolio's growth will exhaust principal, and a plan is never guaranteed.
- **Dollar-cost averaging** invests a **fixed dollar amount at regular intervals**, buying more shares when prices are low and fewer when high. The mathematical result is that the investor's **average cost per share is lower than the average price per share** over the period. It requires ongoing investment through downturns and **does not guarantee a profit or protect against loss** in a declining market.

## Redemption and the Seven-Day Rule

The defining feature of an open-end fund is the **redemption right**. Section 22(e) of the 1940 Act requires the fund to pay redemption proceeds **within seven days** of a shareholder's tender. That obligation is what makes the shares redeemable securities and what guarantees an open-end fund can never persistently trade below NAV — anyone who could buy at a discount would simply redeem at NAV instead.

The right is **suspendable only in narrow circumstances**: when the New York Stock Exchange is closed other than for customary weekends and holidays, when trading on the Exchange is restricted, when an emergency makes disposal of portfolio securities or fair valuation impracticable, or by **SEC order** for the protection of shareholders. A fund cannot suspend redemptions simply because it dislikes the volume of them.

That obligation shapes the portfolio. Because a mutual fund must be able to raise cash on a week's notice, it holds a **liquidity buffer** and is constrained in how much illiquid stock it may own — which is precisely why a closed-end fund, which faces no redemptions, can hold private loans and thin municipal issues that an open-end fund cannot.

## Capital Gains Distributions and the Buy-Before-Distribution Trap

A fund that qualifies as a **regulated investment company** and distributes essentially all of its net investment income and realized gains passes the tax liability through to shareholders and avoids tax at the fund level. Shareholders owe tax on distributions **whether taken in cash or reinvested**, with **long-term capital gain distributions taxed at long-term rates regardless of how long the shareholder has owned the fund**. Short-term realized gains are distributed as **ordinary income**. Losses do **not** pass through — the fund carries them forward to offset its own future gains.

Because a shareholder inherits the fund's realized gains rather than her own, buying shares shortly before a distribution buys a tax bill.

### Buying the distribution

A fund's NAV is **$30.00** per share on December 14. It has declared a distribution of **$2.00 per share** — $1.50 of long-term capital gain and $0.50 of ordinary dividend income — payable to holders of record on December 15. A client invests **$60,000** in this no-load fund on December 14, receiving $60,000 / $30.00 = **2,000 shares**.

On December 15 the fund distributes. NAV falls by the amount paid out, from $30.00 to **$28.00**, and she receives 2,000 × $2.00 = **$4,000**. Reinvesting at the new $28.00 NAV buys $4,000 / $28.00 = **142.857 shares**, bringing her to **2,142.857 shares**. Value her position: 2,142.857 × $28.00 = **$60,000**.

She is exactly where she started. Nothing has been earned. But she now owes tax on the $4,000: at, say, a 15% long-term rate on the $3,000 gain and a 24% ordinary rate on the $1,000 of income, that is $450 + $240 = **$690** payable for the year — on an investment held for one day that produced no economic return.

Now run the alternative. Had she waited until December 16 and invested the same $60,000 at the post-distribution NAV of $28.00, she would have bought $60,000 / $28.00 = **2,142.857 shares** — the identical position, with **no tax bill at all**.

Two boundaries keep this honest. The tax is a **timing** cost, not a permanent one — the $4,000 reinvested is added to her basis, so she reports $4,000 less gain on eventual sale; the damage is $690 paid years early and the compounding it forgoes. And it only bites in a **taxable** account: inside an IRA or 401(k) the distribution is invisible, so a question specifying a retirement account is testing whether you know the trap does not apply. The practical rule is to check a fund's distribution date and estimate before investing a lump sum late in the year.

## Hedge Funds and the Private-Fund Gate

Everything above describes **registered** investment companies, which must file a prospectus, price daily, redeem on demand, limit leverage, and cap performance fees. A **hedge fund** is deliberately built to sit **outside** that regime, excluding itself from the definition of an investment company under one of two provisions of the 1940 Act: **Section 3(c)(1)**, for a fund with no more than a limited number of beneficial owners (generally **100**), or **Section 3(c)(7)**, for a fund selling solely to **qualified purchasers**. Neither may publicly offer its securities.

Interests are sold under a **private placement** exemption, so investors must generally meet the **accredited investor** standard — an income test or a net worth test that excludes the primary residence. The dollar thresholds for accredited investor and qualified purchaser status are set by SEC rule and have repeatedly been proposed for amendment, so confirm the current figures rather than memorizing them.

What the investor surrenders for access is **liquidity and transparency**. **Lock-up periods** bar redemption for an initial term, often one to two years. **Gates** cap the share of the fund redeemable in any single period, so a run cannot force a fire sale. **Side pockets** segregate illiquid positions until they are realized. Redemption windows are typically **quarterly with advance written notice**, nothing like the seven-day rule, and valuation may rest on **manager marks** rather than observable prices.

Fees differ too: a **management fee plus a performance (incentive) fee** — the "2 and 20" shorthand — usually subject to a **high-water mark** so the manager is not paid twice for recovering the same losses. Under the Advisers Act a performance fee may generally be charged only to a **qualified client**, and those thresholds are **indexed for inflation and adjusted periodically by SEC order**.

The exam framing: a hedge fund is **not** suitable merely because a client is wealthy. Suitability turns on **liquidity needs, time horizon, and ability to bear a total loss** of the committed capital. A **fund of hedge funds** adds diversification and a second layer of fees; registering it lowers the investor gate without removing the liquidity constraints.`,
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
        'A mutual fund that continuously offers redeemable shares priced at the next computed net asset value, may issue common stock but no senior securities, and cannot trade at a discount to NAV.',
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
        "Compound Fund A over 20 years: 1.068 raised to the 20th power = 3.72756.",
        "Multiply: $100,000 × 3.72756 = $372,756.",
        "Compound Fund B: 1.058 raised to the 20th power = 3.08826.",
        "Multiply: $100,000 × 3.08826 = $308,826.",
        "Subtract: $372,756 − $308,826 = $63,930.",
      ],
      answer:
        "The one-percentage-point difference costs about $63,930 over 20 years — roughly 64% of the original investment, and about 21% more ending wealth in the cheaper fund. This is why the expense ratio is the first number to compare between two funds in the same category.",
      watchOut:
        "Estimating the damage as 1% × 20 years = 20% of the balance. The true drag is far larger, because every dollar taken as a fee is also a dollar that never compounds again. Note also that the expense ratio EXCLUDES sales loads — a front-end load would be deducted before any of this compounding begins, making the gap wider still.",
    },
  ],
};
