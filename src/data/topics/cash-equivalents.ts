import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'cash-equivalents',
  title: 'Cash and Cash Equivalents',
  weight: '~2%',
  order: 7,
  summary:
    "Cash equivalents are short-term, highly liquid debt instruments that trade near par and mature in about a year or less. The exam tests the individual money market instruments, how money market funds are regulated, and the sharp line between FDIC and SIPC protection.",
  body: `## What Makes Something a "Cash Equivalent"

A cash equivalent is a debt instrument that is **short-term** (generally **one year or less** to maturity, often 90 days or less for accounting purposes), **highly liquid**, and carries **minimal credit and price risk**. Because maturity is so short, price barely moves when interest rates change — duration is tiny. That is the whole appeal: you get your principal back on a known date, at a known amount, and you can sell before then without much loss.

The reason the price barely moves is arithmetic, not a promise. A debt security's percentage price change is roughly its **duration** times the change in yield. A 90-day instrument has a duration near 0.25 years, so a one-percentage-point jump in short rates costs about **0.25%** of principal; the same move on a 20-year bond with a duration near 14 costs about **14%**. Nothing shields the bill holder except the shortness of the wait — which is also why an instrument stops being a cash equivalent as its maturity stretches.

The trade-off is **return**. Cash equivalents almost always deliver the lowest expected return of any asset class and, after taxes and inflation, frequently produce a **negative real return**. That single fact drives most suitability questions on this topic.

## The Money Market Instruments

### Treasury Bills

**T-bills** are direct obligations of the U.S. government, backed by its full faith and credit — the benchmark for a **risk-free** rate.

- Issued at a **discount** and redeemed at face value. There is **no coupon**; the investor's interest is the difference between purchase price and par.
- Standard maturities: **4, 8, 13, 17, 26, and 52 weeks**. The 13- and 26-week bills are auctioned **weekly**.
- Minimum purchase is **$100**, in $100 increments.
- Interest is **taxable at the federal level but exempt from state and local income tax** — a real advantage in high-tax states.

**Why discount pricing.** A bill has no coupon, so the Treasury never has to run a payment stream for it — it simply sells the paper for less than it hands back. Buy a $10,000 bill for $9,900 and the $100 difference *is* the interest.

**Why the quoted yield understates the return.** The **discount yield** divides the dollar discount by **face value** and annualizes over a **360-day** year. Both choices push the number down: face is larger than what you actually paid, and a 360-day year makes each day count for less. The **bond-equivalent yield (BEY)** fixes both, dividing by the **price paid** and annualizing over **365 days**, which is what makes a bill comparable to a coupon bond. On any bill, **BEY is higher than the quoted discount yield** — a direction worth memorizing even when you cannot recall the decimals.

**Competitive versus non-competitive bidding.** Treasury auctions are **single-price (Dutch)** auctions. Competitive bidders — dealers, banks, large institutions — each name a yield they will accept and a size. The Treasury fills them from the **lowest yield upward** until the offering is sold; the highest accepted yield is the **stop-out**, and every winner pays the price corresponding to it. A competitive bidder who names a yield above the stop-out receives **nothing**. Non-competitive bidders — individuals through TreasuryDirect or a broker — name no yield at all. They accept whatever the stop-out turns out to be and in exchange are **always filled**, up to a stated maximum per bidder per auction. The tested trade: **certainty of quantity in exchange for surrender of price control.**

**No default risk is not no risk.** A T-bill will not default, because the obligor issues the currency the debt is denominated in. The holder still bears **purchasing power risk** — the dollars arrive on schedule and buy less than the dollars that went in — and **reinvestment risk**, since a 13-week bill must be replaced four times a year at whatever the market then offers. The bill guarantees the *number* of dollars, never their *value*.

### Commercial Paper

**Commercial paper (CP)** is an **unsecured promissory note** issued by a corporation to fund short-term needs such as payroll and inventory. It is sold at a **discount**, like a T-bill.

The **270-day** ceiling is not a market convention; it is the edge of the Securities Act registration exemption, and the exemption is a package of conditions rather than a single number. The paper must mature in **nine months or less**, the **proceeds must fund current transactions** (receivables, inventory, payroll — not a new plant or a long-term acquisition), and it must be of **prime quality** sold to sophisticated buyers. Stretch the maturity past 270 days, or use the money to build a factory, and the exemption is gone. That **federal** exemption imposes no minimum denomination, so the **$100,000 and larger** blocks the market actually trades are convention rather than a federal requirement — but do not carry that conclusion across to state law. The **Uniform Securities Act has its own commercial paper exemption**, and it does set a denomination floor: maturity of **nine months or less**, denominations of **at least $50,000**, and a rating in one of the **three highest categories**. Two separate tests on the same instrument, and the exam asks about both. Either way the practical effect is identical: retail investors reach CP through a **prime money market fund**, not directly.

Because it is unsecured, **credit risk is real**, and CP carries its own short-term rating scale (top tier **A-1 / P-1 / F1**) rather than the long-term letter scale. The separate scale exists because the instrument's real vulnerability is not the 30-day credit of a strong company but **rollover risk**: CP is repaid almost entirely by issuing new paper to retire maturing paper, and when buyers step back the issuer must draw on **backup bank lines of credit**. The CP market can shut with almost no notice, as it did in 2008.

### Negotiable Certificates of Deposit

A **negotiable (jumbo) CD** is a bank time deposit of **$100,000 or more** — institutional trades are usually **$1 million** — that can be **sold in the secondary market** before maturity. It is **interest-bearing**, not discounted, and typically pays at maturity for maturities under a year.

The contrast with a **retail (non-negotiable) bank CD** is the tested distinction, and each solves the early-exit problem differently. A retail CD cannot be sold, so the bank lets the depositor out and charges an **interest penalty**: the downside is capped at forfeited interest and principal is protected. A negotiable CD carries no penalty because the holder **sells at whatever the market pays**, which is below cost if rates have risen. One product converts early-exit risk into a known penalty; the other converts it into **price risk**.

**How FDIC coverage is structured.** Deposit insurance is not one lump per person. It is computed **per depositor, per insured bank, per ownership category**, at the **standard maximum deposit insurance amount (SMDIA)** — the figure in the table below, set by statute and subject to periodic adjustment. Each qualifier does work:

- **Per depositor** — coverage follows the person; in a joint account each co-owner is separately insured for their **share**.
- **Per insured bank** — accounts at two different banks are separately covered; accounts at two *branches* of one bank are not.
- **Per ownership category** — single, joint, certain retirement, trust, and business accounts are each their own bucket, and the SMDIA applies **within each bucket**. (The FDIC consolidated revocable and irrevocable trusts into a single **trust accounts** category in 2024, insured per beneficiary up to a stated cap.)

That is why a couple can hold well more than one SMDIA at a single bank fully insured while one person holding the same total in one name cannot. Coverage also attaches to the **deposit** — principal plus accrued interest — never to the market price of a negotiable CD sold early.

### Bankers' Acceptances

A **bankers' acceptance (BA)** is a time draft that a bank has stamped "accepted," making the bank primarily liable. BAs finance **international trade**, carry maturities up to **270 days**, and trade at a **discount**.

The instrument solves a trust problem: an exporter will not ship on the promise of an importer abroad whose credit it cannot judge, so a bank the exporter does trust accepts the draft, substituting **bank credit for corporate credit**, and the exporter sells that accepted draft immediately instead of waiting for payment. Set against commercial paper — CP is **corporate credit with no guarantee**, a BA is **bank-guaranteed**. Same maturity range, different credit tier.

### Repurchase Agreements

In a **repo**, a dealer sells securities (usually Treasuries) and simultaneously agrees to **buy them back at a higher price** on a set date. Economically it is a **collateralized loan**; the price difference is the interest. **Overnight repo** matures the next business day; **term repo** has a fixed longer date; **open repo** rolls daily until either side cancels. A **reverse repurchase agreement** is the same trade from the lender's side — **buying** securities with an agreement to resell.

Because the cash lender holds the securities outright for the life of the trade, the **repo rate sits below** unsecured rates for the same counterparty and tenor. The lender adds a **haircut**, advancing less cash than the collateral is worth, so a fall in collateral value is absorbed before the lender is impaired. The residual risk is the combination: the **borrower fails and the collateral has simultaneously lost value**. Treasury-collateralized repo is the safest, and is what a **government money market fund** may hold while keeping a stable share price.

### Federal Funds

**Federal funds** are **overnight, unsecured** loans of reserve balances between depository institutions, and the **fed funds rate** is the short-term benchmark the Federal Reserve targets through open market operations. Individuals cannot buy fed funds for a definitional reason: these are balances **held at a Federal Reserve Bank**, and only depository institutions hold them. Note the pairing — fed funds **unsecured**, repo **secured**, both overnight — which is why the fed funds rate normally prints above the repo rate.

## Money Market Mutual Funds

A money market mutual fund is an **open-end investment company** governed by **Rule 2a-7** under the Investment Company Act of 1940. It holds a diversified pool of the instruments above and manages to a **stable $1.00 net asset value** — an objective, not a guarantee. A fund that fails is said to have **broken the buck**.

Operating characteristics tested frequently:

- **No sales load** in the ordinary case; the expense ratio is the cost.
- **Dividends declared daily, paid monthly**, and normally reinvested at $1.00.
- Portfolio maturity is constrained (a short **weighted average maturity**, commonly cited as **60 days or less**).
- **Check-writing and redemption privileges** are typical.

Rule 2a-7 is four simultaneous constraints that together make a stable price *plausible*: high **credit quality**, tight per-issuer **diversification**, a short **weighted average maturity**, and minimum **daily and weekly liquid asset** buffers so redemptions are met from maturing paper rather than fire sales. None of the four is a guarantee. Funds have broken the buck — most visibly when a large prime fund held the commercial paper of a failed investment bank in 2008 — and the run that followed spread to funds owning nothing of the kind. A money fund's real vulnerability is **the behavior of its other shareholders**.

### The Three Flavors

| Fund type | What it holds | NAV treatment |
| --- | --- | --- |
| **Government** (incl. Treasury) | Government securities, cash, and repos fully collateralized by government securities | Stable $1.00 permitted |
| **Prime** (general purpose) | CP, negotiable CDs, BAs, plus government paper | **Retail** (natural persons only) may hold $1.00; **institutional must float** |
| **Municipal / tax-exempt** | Short-term municipal notes; income generally federally tax-exempt | **Retail** may hold $1.00; **institutional must float** |

Institutional prime and institutional municipal funds must price at a **floating NAV**, carried to **four decimal places**. The four-decimal convention is deliberate: at two decimals a portfolio could drift meaningfully and still round to $1.00, concealing exactly the movement the rule exists to reveal.

**Liquidity fees and gates.** The framework has changed and both versions circulate in study material, so learn the mechanism and the direction of travel. The older regime paired **liquidity fees** with **redemption gates** — a temporary suspension of redemptions — triggered when weekly liquid assets fell below a threshold. Amendments adopted in 2023 **removed gates entirely** and reworked the fees: non-government funds may impose a **discretionary** liquidity fee when the board finds it in the fund's best interest, and **institutional prime and institutional tax-exempt funds must impose a mandatory fee** when daily net redemptions exceed a stated share of net assets. Government and retail funds are not subject to the mandatory fee. Either version makes the same point: **a money fund can make you pay to leave, and once could make you wait. A bank deposit can do neither.** Note also where the money goes — the fee is charged to **redeemers** and paid **into the fund**, so the cost of a rush for the exits falls on those causing it.

## FDIC Versus SIPC

Candidates lose points here more than anywhere else in this topic.

| | **FDIC** | **SIPC** |
| --- | --- | --- |
| Protects against | Failure of an **insured bank** | Failure of a **broker-dealer** |
| Limit | **$250,000** per depositor, per bank, per ownership category | **$500,000** per customer, of which no more than **$250,000** may be **cash** |
| Covers | Checking, savings, money market **deposit accounts**, bank CDs | Securities and cash held in the customer's brokerage account |
| Does **not** cover | Mutual funds, stocks, bonds, annuities, money market **mutual funds**, crypto, safe deposit box contents | **Market losses**, bad advice, unsuitable recommendations, most commodities and futures |

Two takeaways: a **money market deposit account** at a bank is FDIC-insured; a **money market mutual fund** is not. And SIPC never makes an investor whole for a decline in value.

The underlying difference is what each insures *against*. FDIC insures a **promise**: the bank owes you a stated amount, and if it cannot pay, the FDIC does. SIPC insures **custody**: the securities were always yours, the broker merely held them, and if they go missing in a failure SIPC restores them. Neither touches the value of what you own — a client whose $400,000 portfolio falls to $250,000 at a perfectly solvent broker has a loss no program addresses.

## Suitability and the Role of Cash in a Portfolio

Cash equivalents are appropriate for an **emergency reserve**, a **known near-term liability** (a down payment, a tuition bill, a tax payment), a **parking place** between investment decisions, and the liquidity sleeve of a portfolio.

They are **not** appropriate as the core of a long-horizon portfolio. Over decades **purchasing power risk** dominates, and cash is the asset class least able to defend against it. Money funds also carry **reinvestment risk**: when short rates fall the entire portfolio reprices downward within weeks. A client who says "I want no risk" is usually describing an aversion to volatility, and the adviser's job is to name the risk being accepted in exchange.

**How much is enough?** The planning benchmark is **three to six months of non-discretionary expenses** — housing, food, insurance, debt service, transportation, not vacations. The range is a starting point and the adviser moves within it for cause: toward **three months** for a tenured two-income household with strong disability coverage and low fixed costs; toward **six or more** for a single earner, a commission or contract worker, a business owner, or a household with a high-deductible health plan. Push **above the range** whenever a dated liability is already scheduled — a known tax bill or a closing date belongs in cash no matter how large the reserve already is.

Holding too much has a cost that deserves to be named as plainly as the risk of holding too little. Excess cash creates **cash drag**: capital parked at a short-term rate while the client's goals require a real return. Size the reserve to a **purpose**, then invest the surplus — the failure mode is rarely one dramatic mistake but a comfortable, permanent underinvestment.

### Scenario: The Million-Dollar CD at One Bank

A client rolls a business sale into a single **$1,000,000 negotiable CD** at one bank and calls the position "insured." Apply the structure: this is a **single ownership** account at **one insured bank**, so exactly one SMDIA applies. At $250,000, **$750,000 is unsecured exposure to that bank's credit**. Opening a second account at the same bank in the same category adds nothing. The clean fixes are to **spread the deposit across unaffiliated banks** or move the excess into a **Treasury-only money market fund** — not insured at all, but holding direct obligations of the government rather than the credit of one institution.

Then the question the client has not asked: what if the money is needed in month four of a twelve-month CD? A retail CD would forfeit interest and return principal. This one must be **sold at whatever the market pays**, and if short rates have risen since purchase, that price is **below** the $1,000,000 deposited. "No early-withdrawal penalty" is not "no loss."

### Scenario: The Retiree Who Wanted No Risk

A 65-year-old retires with **$500,000** and insists on rolling T-bills, reasoning that Treasuries cannot default. They cannot. But assume prices rise **3% a year** across a 25-year retirement — an illustration, not a forecast. If the portfolio merely holds its nominal value, purchasing power falls to 500,000 divided by 1.03 raised to the 25th power, roughly **$238,800** in today's dollars. Less than half. The client never sees a statement she would call a loss, and yet **more than half of what the money buys is gone**.

The tax treatment makes it worse: T-bill interest is **fully taxable federally** every year even though it escapes state tax, so the nominal return is taxed before inflation takes its share. The conversation is not "you are wrong to want safety" but "safety of what?" — and over 25 years the answer is **purchasing power**, not principal.

### Scenario: Twenty-Five Basis Points of Extra Yield

A treasurer holding **$2,000,000** in an institutional **government** money fund is offered an institutional **prime** fund yielding **0.25% more**. The extra income is 2,000,000 × 0.0025 = **$5,000 a year**. What is bought with it?

A **floating NAV** to four decimals: a routine 0.1% move on $2,000,000 is $2,000 — **40% of the entire annual pickup** created or erased in one day's repricing. A **mandatory liquidity fee** if daily net redemptions cross the threshold, so the cash costs extra precisely when it is most needed. And the credit itself: prime funds hold **commercial paper, negotiable CDs, and bankers' acceptances** — corporate and bank obligations.

If the $2,000,000 meets payroll, the answer is no: the asset must be liquid on a fixed date at a known amount, and $5,000 does not buy uncertainty in either. If it is a strategic reserve with no scheduled call for two years, the answer may well be yes. **No instrument is suitable in the abstract; it is suitable against a stated use for the money.**`,
  pitfalls: [
    "Do not treat a money market mutual fund as FDIC-insured. It is a securities product; the stable $1.00 NAV is an objective, not a guarantee, and funds have broken the buck.",
    "SIPC does not protect against market losses or bad advice. It replaces missing securities and cash when a broker-dealer fails, with a $500,000 ceiling of which only $250,000 may be cash.",
    "The 270-day commercial paper limit is a registration-exemption threshold under the Securities Act of 1933, not a market convention — paper longer than 270 days loses the exemption.",
    "Federal and state commercial paper exemptions are different tests. The federal exemption sets no minimum denomination (the $100,000 blocks are market practice), while the Uniform Securities Act exemption requires nine months or less, denominations of at least $50,000, and a top-three rating.",
    "T-bill interest is exempt from state and local tax but fully taxable federally. Candidates routinely reverse this or assume it is tax-free everywhere.",
    "Only institutional prime and institutional municipal money funds must use a floating NAV. Government funds and retail funds may still transact at a stable $1.00.",
    "A negotiable CD is FDIC-insured only up to the standard maximum per depositor, per bank, per ownership category, so a $1 million jumbo CD in one name at one bank is mostly uninsured bank credit.",
    "Recommending an all-cash portfolio to a young investor with a 30-year horizon is an inflation-risk suitability failure, even though it feels conservative.",
    "Bond-equivalent yield on a T-bill is always higher than the quoted discount yield, because BEY divides by the price paid rather than by face value and uses a 365-day year rather than 360.",
    "A non-competitive bidder at a Treasury auction is always filled but gives up control of the yield; a competitive bidder names a yield and can be shut out entirely. Do not reverse which one is guaranteed an allocation.",
  ],
  keyTerms: [
    {
      term: 'Cash equivalent',
      definition:
        'A short-term, highly liquid debt instrument with minimal credit and price risk, generally maturing in one year or less and trading close to par.',
    },
    {
      term: 'Treasury bill',
      definition:
        'A direct U.S. government obligation with maturities from 4 to 52 weeks, issued at a discount with no coupon; interest is federally taxable and state-tax exempt.',
    },
    {
      term: 'Discount yield',
      definition:
        "The conventional T-bill quoting basis: the dollar discount divided by face value, annualized over a 360-day year. It understates the true return because it divides by face rather than by the price paid.",
    },
    {
      term: 'Bond-equivalent yield',
      definition:
        "The T-bill return restated on a coupon-bond basis: the dollar discount divided by the price actually paid, annualized over 365 days. Always higher than the discount yield on the same bill.",
    },
    {
      term: 'Commercial paper',
      definition:
        "An unsecured corporate promissory note maturing in 270 days or less, sold at a discount, exempt from Securities Act registration when the proceeds fund current transactions, and traded in $100,000 and larger blocks by market convention. The separate Uniform Securities Act exemption additionally requires denominations of at least $50,000 and a top-three rating.",
    },
    {
      term: 'Negotiable CD',
      definition:
        'A bank time deposit of $100,000 or more that trades in the secondary market, so the holder sells at market price rather than paying an early-withdrawal penalty.',
    },
    {
      term: "Bankers' acceptance",
      definition:
        'A time draft accepted (guaranteed) by a bank, used to finance international trade, with maturities up to 270 days and traded at a discount.',
    },
    {
      term: 'Repurchase agreement',
      definition:
        'A sale of securities coupled with an agreement to repurchase them at a higher price on a set date; economically a collateralized short-term loan, protected by a haircut on the collateral.',
    },
    {
      term: 'Ownership category',
      definition:
        'The FDIC classification — single, joint, certain retirement, trust, business — that determines how many separate coverage buckets a depositor has at one insured bank.',
    },
    {
      term: 'Rule 2a-7',
      definition:
        'The Investment Company Act rule governing money market fund credit quality, diversification, liquidity, and maturity limits, and permitting a stable $1.00 NAV for qualifying funds.',
    },
    {
      term: 'Breaking the buck',
      definition:
        'A money market fund whose net asset value falls below $1.00 per share, demonstrating that money funds are not principal-guaranteed.',
    },
    {
      term: 'Liquidity fee',
      definition:
        "A charge imposed on redeeming money market fund shareholders and paid into the fund, discretionary for non-government funds and mandatory for institutional prime and tax-exempt funds when net redemptions exceed a stated threshold.",
    },
  ],
  confusions: [
    {
      dont: 'Money market deposit account (a bank product, FDIC-insured)',
      with: 'Money market mutual fund (a securities product, not FDIC-insured)',
    },
    {
      dont: 'FDIC — insures bank deposits against bank failure, per depositor, per bank, per ownership category',
      with: 'SIPC — restores customer property when a broker-dealer fails, $500,000 per customer with a $250,000 cash sub-limit',
    },
    {
      dont: 'Repurchase agreement — the dealer sells now and buys back later (borrowing cash)',
      with: 'Reverse repurchase agreement — the same trade from the counterparty side, buying now and reselling later (lending cash)',
    },
    {
      dont: "Bankers' acceptance — bank-guaranteed time draft financing international trade",
      with: 'Commercial paper — unsecured corporate note with no bank guarantee',
    },
    {
      dont: 'Discount yield — discount divided by face value, 360-day year, the quoted figure',
      with: 'Bond-equivalent yield — discount divided by price paid, 365-day year, the comparable figure',
    },
    {
      dont: 'Retail CD — cannot be sold, so early exit costs an interest penalty and principal is protected',
      with: 'Negotiable CD — no penalty, but early exit means selling at market, which can be below cost',
    },
    {
      dont: 'Interest rate risk — the dominant risk in long bonds',
      with: 'Purchasing power (inflation) risk and reinvestment risk — the dominant risks in cash equivalents',
    },
  ],
  formulas: [
    {
      name: 'Discount yield (T-bill quoting basis)',
      formula: 'Discount Yield = [(Face − Price) / Face] × (360 / Days to Maturity)',
      note: 'Divides by face value and uses a 360-day year, so it always understates the true return.',
    },
    {
      name: 'Bond-equivalent yield on a T-bill',
      formula: 'BEY = [(Face − Price) / Price] × (365 / Days to Maturity)',
      note: 'Divides by the price actually paid and uses 365 days, making the bill comparable to a coupon bond.',
    },
    {
      name: 'Taxable-equivalent yield',
      formula: 'TEY = After-Tax Yield / (1 − Combined Marginal Tax Rate)',
      note: 'Divide to gross a tax-favored yield up; multiply by (1 − rate) to bring a taxable yield down.',
    },
    {
      name: 'Months of emergency reserve',
      formula: 'Months Covered = Liquid Reserve Assets / Monthly Non-Discretionary Expenses',
      note: 'Count only assets available at a known amount on demand. Retirement accounts and equity funds do not qualify.',
    },
  ],
  workedExamples: [
    {
      title: 'Discount yield versus bond-equivalent yield on a T-bill',
      setup:
        "A Treasury bill with $10,000 face value and 90 days remaining to maturity is purchased for $9,900. Compute the discount yield (the quoting convention) and the bond-equivalent yield (the comparable figure), and explain why they differ.",
      steps: [
        "Find the dollar discount, which is the entire return on a bill because there is no coupon: $10,000 − $9,900 = $100.",
        "Discount yield formula: [(Face − Price) / Face] × (360 / Days). Note the denominator is FACE, and the year is 360 days.",
        "Substitute: ($100 / $10,000) × (360 / 90) = 0.0100 × 4 = 0.0400.",
        "Bond-equivalent yield formula: [(Face − Price) / Price] × (365 / Days). Now the denominator is the PRICE PAID, and the year is 365 days.",
        "Substitute: ($100 / $9,900) × (365 / 90) = 0.010101 × 4.05556 = 0.040965.",
        "Compare the two adjustments. Switching the denominator from $10,000 to $9,900 raises the ratio, because the investor only ever put up $9,900. Switching from 360 to 365 days raises it again, because each day is credited at a full 1/365 of the year. Both changes push the same direction.",
      ],
      answer:
        "Discount yield is 4.00%; bond-equivalent yield is 4.10% (4.0965%). The BEY is the figure to compare against a corporate or municipal bond, because those are quoted on a price-paid, 365-day basis. On any T-bill, BEY is always higher than the quoted discount yield.",
      watchOut:
        "Reporting the 4.00% discount yield as the investor's return when a question asks for a comparison against a coupon bond. That understates by 10 basis points here and by more on longer bills. The reverse error is just as common: assuming BEY is lower because it sounds like a more conservative measure. It is structurally higher, always.",
    },
    {
      title: 'FDIC coverage across two ownership categories at one bank',
      setup:
        "Assume the standard maximum deposit insurance amount (SMDIA) is $250,000 per depositor, per insured bank, per ownership category. Maria holds two accounts at First Regional Bank: a single-name savings account with $300,000, and a joint account with her husband Tomas holding $400,000, owned equally. How much of Maria's money is insured, and how much is exposed?",
      steps: [
        "Separate the accounts by ownership category. The single-name savings account is in the SINGLE ownership category. The account with Tomas is in the JOINT ownership category. These are two different buckets, each getting its own SMDIA.",
        "Single category: Maria's balance is $300,000. Coverage is capped at the SMDIA: insured = $250,000. Uninsured = $300,000 − $250,000 = $50,000.",
        "Joint category: coverage follows each co-owner's SHARE, not the account total. Maria's share = $400,000 / 2 = $200,000. Tomas's share is the other $200,000.",
        "Test Maria's joint share against the SMDIA: $200,000 is less than $250,000, so her entire $200,000 joint share is insured.",
        "Total Maria has at risk in the bank: $300,000 (single) + $200,000 (her joint share) = $500,000.",
        "Total insured for Maria: $250,000 (single) + $200,000 (joint share) = $450,000. Uninsured: $500,000 − $450,000 = $50,000.",
        "Check the household: Tomas's $200,000 joint share is likewise fully insured, so the joint account is covered in full at $400,000. Household insured total = $250,000 + $400,000 = $650,000, with $50,000 uninsured — all of it the excess in Maria's single-name account.",
      ],
      answer:
        "$450,000 of Maria's $500,000 is insured and $50,000 is uninsured. The fix is not to open a second account at the same bank in the same category, which would add nothing; it is to move the $50,000 excess to a different insured bank, or into a different ownership category that reflects genuine ownership.",
      watchOut:
        "Adding the two account balances first and comparing the total to one SMDIA — $700,000 against $250,000 would show $450,000 uninsured, nine times the true exposure. The opposite error is insuring the joint ACCOUNT to $250,000 rather than each co-owner's share, which would report $150,000 uninsured. Coverage is per depositor, per bank, per ownership category, and all three qualifiers must be applied.",
    },
    {
      title: 'Sizing an emergency reserve and measuring the shortfall',
      setup:
        "A single-income client working on annual contracts has non-discretionary monthly expenses of $5,200. Liquid holdings: $4,400 in checking, $9,000 in a bank savings account, and $2,200 in a government money market fund. The client also holds $30,000 in a 401(k) and $8,000 in an equity mutual fund. Given the contract income, the adviser targets a six-month reserve. How large is the gap, and how long does it take to close at $650 per month?",
      steps: [
        "Decide what counts as reserve. A reserve asset must be available on demand at a KNOWN amount. Checking, savings, and the government money market fund qualify. The 401(k) does not (taxes and a possible early-distribution penalty). The equity fund is liquid but not known in amount, since it can be down exactly when the client is laid off.",
        "Total the qualifying reserve: $4,400 + $9,000 + $2,200 = $15,600.",
        "Compute months of coverage: $15,600 / $5,200 = 3.0 months.",
        "Compute the target: 6 months × $5,200 = $31,200.",
        "Compute the shortfall: $31,200 − $15,600 = $15,600.",
        "Compute the time to close at $650 per month of saving: $15,600 / $650 = 24 months.",
        "Sanity-check the recommendation against the profile. Single income and contract work push toward the high end of the three-to-six-month range, so six months is the right target here rather than the three months the client already has.",
      ],
      answer:
        "The client holds exactly 3.0 months of expenses against a 6-month target, a shortfall of $15,600, which takes 24 months to fund at $650 per month. Until the reserve is complete, additional long-horizon investing should generally wait — with the standard exception of contributing at least enough to a 401(k) to capture a full employer match.",
      watchOut:
        "Counting the 401(k) and the equity fund as reserve. That would show $53,600 of liquid assets, or 10.3 months, and produce advice that the client is over-reserved and should invest more — the exact opposite of the correct recommendation. Retirement money is not an emergency fund, and an asset whose value moves is not a known amount.",
    },
    {
      title: 'Choosing among three money market funds after tax',
      setup:
        "A client is in a 35% federal marginal bracket and a 5% state marginal bracket; assume the two rates simply add to a 40% combined rate on fully taxable income. Three funds are available: a prime fund yielding 4.00% (taxable federally and by the state), a Treasury money market fund yielding 3.80% (federally taxable, state-exempt), and a national tax-exempt municipal money market fund yielding 2.40% (federally exempt, but taxable by the state because the holdings are out-of-state). Rank them.",
      steps: [
        "Prime fund: fully taxable, so apply the combined rate. After-tax yield = 4.00% × (1 − 0.40) = 4.00% × 0.60 = 2.40%.",
        "Treasury fund: federal tax only, because Treasury interest is state-exempt. After-tax yield = 3.80% × (1 − 0.35) = 3.80% × 0.65 = 2.47%.",
        "Municipal fund: state tax only, because the interest is federally exempt but the bonds are out-of-state. After-tax yield = 2.40% × (1 − 0.05) = 2.40% × 0.95 = 2.28%.",
        "Rank on after-tax yield: Treasury 2.47% > prime 2.40% > municipal 2.28%.",
        "Restate on a taxable-equivalent basis as a cross-check. TEY = after-tax yield / (1 − combined rate). Municipal: 2.28% / 0.60 = 3.80%. Treasury: 2.47% / 0.60 = 4.12%. The prime fund is already fully taxable, so its own 4.00% is its taxable-equivalent yield.",
        "Confirm the same ordering: Treasury 4.12% > prime 4.00% > municipal 3.80%. Both methods agree, which is the point of running the cross-check.",
      ],
      answer:
        "The Treasury money market fund wins, at 2.47% after tax (4.12% taxable-equivalent), despite quoting the second-lowest headline yield. The prime fund's highest headline yield of 4.00% finishes second, and the tax-exempt fund finishes last for this client. The result flips for a client in a very high federal bracket and a no-income-tax state, which is exactly why the calculation must be run against the specific client rather than assumed.",
      watchOut:
        "Grossing the municipal fund up at the federal rate only — 2.40% / 0.65 = 3.69% — which ignores that a national municipal fund's income is still taxed by the client's state. The larger and more common error is multiplying instead of dividing when converting to a taxable-equivalent basis: 2.40% × 0.60 = 1.44% is nonsense, because grossing a tax-favored yield up to its pre-tax equivalent can never make it smaller.",
    },
  ],
};
