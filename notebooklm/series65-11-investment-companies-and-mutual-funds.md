# Investment Companies and Mutual Funds

This is one topic from the Series 65 exam, the Uniform Investment Adviser Law
Examination. It is worth about 4 percent of the exam.

## Why this topic matters

The Investment Company Act of 1940 defines three kinds of investment company, and the management company — especially the open-end mutual fund — dominates the exam. Know the structures, the 75-5-10 diversification test, how NAV and public offering price are computed, and which share class fits which holding period.

## The Three Types Under the Investment Company Act of 1940

The **Investment Company Act of 1940** classifies pooled vehicles into exactly **three** categories. Expect a question that simply asks you to name them.

1. **Face-amount certificate company** — issues a certificate obligating the company to pay a stated **face amount** at a fixed future date in exchange for lump-sum or installment payments. Essentially obsolete, but it stays on the list.
2. **Unit investment trust (UIT)** — organized under a **trust indenture**, holds a **fixed, unmanaged portfolio**, and has **no board of directors and no investment adviser**. Investors own **redeemable units**. The trust **terminates on a set date**. Variable annuity separate accounts are often organized as UITs.
3. **Management company** — a portfolio actively (or passively) supervised by an **investment adviser** under a written contract. This is where mutual funds live, and it splits two ways.

The three differ on a single structural question: **who decides what the portfolio holds, and can that decision change?** A face-amount certificate company promises a **fixed dollar sum** and the portfolio behind it is the issuer's problem, not the investor's — the investor holds a debt-like claim, not a share of a portfolio. A UIT's portfolio is **chosen once and frozen**, so there is no adviser to hire, no advisory fee to negotiate, no board to oversee anyone, and a stated date on which the whole thing is liquidated. A management company's portfolio is **continuously decided by an adviser** under a contract, which is exactly why it needs a **board of directors** — at least 40% of it non-interested, and in practice a majority — to approve that contract annually, approve any 12b-1 plan, and stand between the adviser's interests and the shareholders'. Governance follows discretion: where nobody has discretion, nobody needs to be supervised.

### Open-End Versus Closed-End

- Shares outstanding — Open-end (mutual fund): Continuously offered; fluctuates. Closed-end fund: Fixed after the IPO.
- Purchase from — Open-end (mutual fund): The fund itself, always at the next computed price. Closed-end fund: Another investor on an exchange or OTC.
- Price — Open-end (mutual fund): NAV plus any sales charge. Closed-end fund: Whatever the market will pay — a premium or discount to NAV.
- Capital structure — Open-end (mutual fund): Common stock only — no senior securities, so no preferred and no bonds. Closed-end fund: May issue preferred stock and bonds.
- Redemption — Open-end (mutual fund): Redeemable; proceeds within seven days. Closed-end fund: Not redeemable; sold in the market with a commission.
- Fractional shares — Open-end (mutual fund): Permitted. Closed-end fund: Not typically.


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

- Sales charge — Class A: Front-end load paid at purchase. Class B: Contingent deferred sales charge (CDSC) on exit, declining to zero over roughly 6–8 years. Class C: Level load, small or no CDSC after about one year.
- 12b-1 fee — Class A: Lowest. Class B: High. Class C: High, and permanent.
- Breakpoints — Class A: Yes. Class B: No. Class C: No.
- Conversion — Class A: n/a. Class B: Converts to Class A once the CDSC period ends. Class C: Traditionally does not convert.
- Best for — Class A: Large investments and long horizons. Class B: Smaller amounts held long term (largely phased out). Class C: Short to intermediate horizons, smaller amounts.


The logic: a front-end load is a one-time cost that gets amortized across a long holding period, while a level 12b-1 fee compounds forever. **Class A wins over long horizons and at large dollar amounts; Class C wins over short horizons.** Recommending Class C to a client investing for 25 years, or Class B for a very large purchase that would have qualified for a Class A breakpoint, is an unsuitable recommendation.

### Class A or Class C: finding the crossover

The right class is a function of the holding period, and the crossover point can be located rather than guessed. A client is investing **$50,000** in a fund whose portfolio is expected to return **7.00% a year gross**. She may buy either class:

- **Class A** — a **4.50%** front-end load at the $50,000 breakpoint, total expense ratio **0.85%** (including a 0.25% 12b-1 fee).
- **Class C** — no front-end load, total expense ratio **1.60%** (including a 1.00% 12b-1 fee), with a 1% charge if she redeems within the first year.

Set up both. Class A puts only $50,000 × 0.955 = **$47,750** to work and then nets 7.00% − 0.85% = **6.15%** a year. Class C puts the full **$50,000** to work but nets only 7.00% − 1.60% = **5.40%**.

Class C starts $2,250 ahead and gives that lead back at 0.75 percentage points a year. Run the compounding:

- Years held: 3. Class A: $57,113. Class C: $58,545. Difference: C ahead by $1,432.
- Years held: 6. Class A: $68,311. Class C: $68,551. Difference: C ahead by $240.
- Years held: 7. Class A: $72,513. Class C: $72,253. Difference: A ahead by $260.
- Years held: 20. Class A: $157,534. Class C: $143,147. Difference: A ahead by $14,387.


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

The exam framing: a hedge fund is **not** suitable merely because a client is wealthy. Suitability turns on **liquidity needs, time horizon, and ability to bear a total loss** of the committed capital. A **fund of hedge funds** adds diversification and a second layer of fees; registering it lowers the investor gate without removing the liquidity constraints.

## The questions this topic is tested with

**The Investment Company Act of 1940 classifies registered investment companies into which three types?**

The 1940 Act recognizes exactly three types of investment company: face-amount certificate companies, unit investment trusts, and management companies. Management companies are then subdivided into open-end and closed-end, and separately into diversified and non-diversified.

**A client contributes $500 to the same mutual fund on the first business day of every month regardless of the share price. Over the year the fund price fluctuates widely. This approach is best described as:**

Investing a fixed dollar amount at regular intervals buys more shares when prices are low and fewer when prices are high, so the average cost per share is lower than the simple average of the purchase prices. Dollar-cost averaging does not guarantee a profit or protect against loss in a falling market.

**An open-end fund reports total assets of $848 million and total liabilities of $23 million, with 25 million shares outstanding. What is the net asset value per share?**

NAV per share = (total assets − total liabilities) ÷ shares outstanding = ($848,000,000 − $23,000,000) ÷ 25,000,000 = $825,000,000 ÷ 25,000,000 = $33.00. Forgetting to subtract liabilities produces the $33.92 distractor.

**A Class A share fund has a net asset value of $18.60 per share and a maximum sales charge of 5.5%. What is the public offering price?**

The sales charge is stated as a percentage of the POP, not of NAV, so POP = NAV ÷ (100% − sales charge %) = $18.60 ÷ 0.945 = $19.68. Multiplying NAV by 1.055 gives $19.62, the classic error of applying the percentage to the wrong base.

**A 34-year-old client intends to invest $150,000 in a fund family and hold the position for at least 20 years. The family offers Class A shares with a front-end load and breakpoints beginning at $100,000, Class B shares with a declining CDSC and a 0.75% 12b-1 fee, and Class C shares with a 1% level 12b-1 fee. Which recommendation is most suitable?**

Large purchases held for long periods favor Class A shares: the breakpoint sharply reduces the one-time front-end load, and A shares carry the lowest ongoing 12b-1 fee, which dominates total cost over 20 years. B and C shares carry higher annual expenses that compound against the investor, and C shares generally suit only short holding periods.

**A fund offers a breakpoint at $50,000. A client tells his agent he wants to invest $52,000. The agent recommends putting $48,000 in the fund and the remaining $4,000 in a money market account, which keeps the fund purchase just below the breakpoint. This conduct is:**

Breakpoint selling — structuring a purchase just below a breakpoint so the client pays a higher sales charge and the agent earns a larger commission — is an unethical practice under NASAA policy. Disclosure does not cure it, because the recommendation itself is not in the client's interest.
