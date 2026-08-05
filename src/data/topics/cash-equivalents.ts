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

The trade-off is **return**. Cash equivalents almost always deliver the lowest expected return of any asset class and, after taxes and inflation, frequently produce a **negative real return**. That single fact drives most suitability questions on this topic.

## The Money Market Instruments

### Treasury Bills

**T-bills** are direct obligations of the U.S. government, backed by its full faith and credit — the benchmark for a **risk-free** rate.

- Issued at a **discount** and redeemed at face value. There is **no coupon**; the investor's interest is the difference between purchase price and par.
- Standard maturities: **4, 8, 13, 17, 26, and 52 weeks**. The 13- and 26-week bills are auctioned **weekly**.
- Sold at **auction**. Non-competitive bidders (retail) agree to accept the yield set by competitive bidding and are always filled; competitive bidders specify a yield and may be shut out.
- Minimum purchase is **$100**, in $100 increments.
- Interest is **taxable at the federal level but exempt from state and local income tax** — a real advantage in high-tax states.
- T-bills are quoted on a **discount yield** basis, which understates true return; **bond-equivalent yield** is the comparable figure.

### Commercial Paper

**Commercial paper (CP)** is an **unsecured promissory note** issued by a corporation to fund short-term needs such as payroll and inventory.

- Maturity of **270 days or less** — the ceiling exists because paper maturing in 270 days or less is **exempt from registration** under the Securities Act of 1933.
- Sold at a **discount**, like a T-bill.
- Traditionally issued in large denominations, commonly **$100,000 minimum**, which keeps it an institutional instrument.
- Because it is unsecured, **credit risk is real**. CP is rated on its own scale (top tier is **A-1 / P-1 / F1**). Highly rated issuers dominate the market.

### Negotiable Certificates of Deposit

A **negotiable (jumbo) CD** is a bank time deposit of **$100,000 or more** — institutional trades are usually **$1 million** — that can be **sold in the secondary market** before maturity.

- Unlike a retail CD, there is **no early-withdrawal penalty**; you sell instead, at whatever price the market offers.
- **Interest-bearing**, not discounted, and typically pays at maturity for maturities under a year.
- FDIC insurance applies only up to **$250,000**, so most of a jumbo CD is uninsured bank credit exposure.

### Bankers' Acceptances

A **bankers' acceptance (BA)** is a time draft that a bank has stamped "accepted," making the bank primarily liable. BAs finance **international trade** — the classic exam association.

- Maturities up to **270 days** (commonly stated as nine months).
- Traded at a **discount** in the secondary market.

### Repurchase Agreements

In a **repo**, a dealer sells securities (usually Treasuries) and simultaneously agrees to **buy them back at a higher price** on a set date. Economically it is a **collateralized loan**; the price difference is the interest.

- **Overnight repo** matures the next business day; **term repo** has a fixed longer date; **open repo** rolls daily until either side cancels.
- A **reverse repurchase agreement** is the same transaction viewed from the lender's side — the party **buying** securities with an agreement to resell.

### Federal Funds

**Federal funds** are **overnight, unsecured** loans of reserve balances between depository institutions. The **fed funds rate** is a key short-term benchmark and the rate the Federal Reserve targets through open market operations. Individual investors do not buy fed funds.

## Money Market Mutual Funds

A money market mutual fund is an **open-end investment company** governed by **Rule 2a-7** under the Investment Company Act of 1940. It holds a diversified pool of the instruments above and manages to a **stable $1.00 net asset value** — an objective, not a guarantee. A fund that fails is said to have **broken the buck**.

Operating characteristics tested frequently:

- **No sales load** in the ordinary case; the expense ratio is the cost.
- **Dividends declared daily, paid monthly**, and normally reinvested at $1.00.
- Portfolio maturity is constrained (a short **weighted average maturity**, commonly cited as **60 days or less**).
- **Check-writing and redemption privileges** are typical.

### The Three Flavors

| Fund type | What it holds | NAV treatment |
| --- | --- | --- |
| **Government** (incl. Treasury) | Government securities, cash, and repos fully collateralized by government securities | Stable $1.00 permitted |
| **Prime** (general purpose) | CP, negotiable CDs, BAs, plus government paper | **Retail** (natural persons only) may hold $1.00; **institutional must float** |
| **Municipal / tax-exempt** | Short-term municipal notes; income generally federally tax-exempt | **Retail** may hold $1.00; **institutional must float** |

Institutional prime and institutional municipal funds must price at a **floating NAV**, carried to **four decimal places**, so share value visibly moves. SEC rules also authorize **liquidity fees** on those funds when redemptions are heavy — a reminder that money funds are **not risk-free**.

## FDIC Versus SIPC

Candidates lose points here more than anywhere else in this topic.

| | **FDIC** | **SIPC** |
| --- | --- | --- |
| Protects against | Failure of an **insured bank** | Failure of a **broker-dealer** |
| Limit | **$250,000** per depositor, per bank, per ownership category | **$500,000** per customer, of which no more than **$250,000** may be **cash** |
| Covers | Checking, savings, money market **deposit accounts**, bank CDs | Securities and cash held in the customer's brokerage account |
| Does **not** cover | Mutual funds, stocks, bonds, annuities, money market **mutual funds**, crypto, safe deposit box contents | **Market losses**, bad advice, unsuitable recommendations, most commodities and futures |

Two takeaways: a **money market deposit account** at a bank is FDIC-insured; a **money market mutual fund** is not. And SIPC never makes an investor whole for a decline in value — it restores missing property when a brokerage fails.

## Suitability

Cash equivalents are appropriate for an **emergency reserve**, a **known near-term liability** (a down payment, a tuition bill, a tax payment), a **parking place** between investment decisions, and the liquidity sleeve of a portfolio.

They are **not** appropriate as the core of a long-horizon portfolio. Over decades, **purchasing power risk (inflation risk)** is the dominant threat, and cash is the asset class least able to defend against it. Money market funds also carry **reinvestment risk**: when short rates fall, the entire portfolio reprices downward within weeks. A client who says "I want no risk" is usually describing an aversion to volatility, and the adviser's job is to explain the risk being accepted in exchange.`,
  pitfalls: [
    "Do not treat a money market mutual fund as FDIC-insured. It is a securities product; the stable $1.00 NAV is an objective, not a guarantee, and funds have broken the buck.",
    "SIPC does not protect against market losses or bad advice. It replaces missing securities and cash when a broker-dealer fails, with a $500,000 ceiling of which only $250,000 may be cash.",
    "The 270-day commercial paper limit is a registration-exemption threshold under the Securities Act of 1933, not a market convention — paper longer than 270 days loses the exemption.",
    "T-bill interest is exempt from state and local tax but fully taxable federally. Candidates routinely reverse this or assume it is tax-free everywhere.",
    "Only institutional prime and institutional municipal money funds must use a floating NAV. Government funds and retail funds may still transact at a stable $1.00.",
    "A negotiable CD is FDIC-insured only to $250,000, so a $1 million jumbo CD leaves $750,000 exposed to the bank's credit.",
    "Recommending an all-cash portfolio to a young investor with a 30-year horizon is an inflation-risk suitability failure, even though it feels conservative.",
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
      term: 'Commercial paper',
      definition:
        "An unsecured corporate promissory note maturing in 270 days or less, sold at a discount, exempt from Securities Act registration and typically issued in $100,000 minimums.",
    },
    {
      term: 'Negotiable CD',
      definition:
        'A bank time deposit of $100,000 or more that trades in the secondary market, so the holder sells rather than paying an early-withdrawal penalty.',
    },
    {
      term: "Bankers' acceptance",
      definition:
        'A time draft accepted (guaranteed) by a bank, used to finance international trade, with maturities up to 270 days and traded at a discount.',
    },
    {
      term: 'Repurchase agreement',
      definition:
        'A sale of securities coupled with an agreement to repurchase them at a higher price on a set date; economically a collateralized short-term loan.',
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
  ],
  confusions: [
    {
      dont: 'Money market deposit account (a bank product, FDIC-insured)',
      with: 'Money market mutual fund (a securities product, not FDIC-insured)',
    },
    {
      dont: 'FDIC — insures bank deposits against bank failure, $250,000 per depositor per bank per ownership category',
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
      dont: 'Interest rate risk — the dominant risk in long bonds',
      with: 'Purchasing power (inflation) risk and reinvestment risk — the dominant risks in cash equivalents',
    },
  ],
};
