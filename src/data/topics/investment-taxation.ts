import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'investment-taxation',
  title: 'Taxation of Investments',
  weight: '~3%',
  order: 22,
  summary:
    "Taxes are the one drag on return an adviser can actually control, so the exam tests whether you can classify income correctly, compute a basis, apply the wash sale and capital loss rules, and compare a municipal yield to a taxable one on an after-tax basis.",
  body: `## The two buckets: ordinary income and capital gains

Every dollar an investment produces lands in one of two buckets, and the bucket determines the rate.

**Ordinary income** is taxed at the investor's graduated marginal rates. It includes wages, interest (bank, corporate bond, Treasury, CD), non-qualified dividends, short-term capital gains, rents, and taxable distributions from retirement plans.

**Long-term capital gains and qualified dividends** get a preferential rate schedule — conceptually **0%, 15%, or 20%** depending on taxable income. Most middle-income investors land at 15%.

On top of that sits the **net investment income tax (NIIT) of 3.8%**, which applies to investment income for taxpayers above a modified AGI threshold (**$200,000 single / $250,000 married filing jointly** — these thresholds are *not* indexed and have not moved since enactment). So the true top federal rate on a long-term gain is commonly cited as **23.8%**.

### Holding period

The dividing line is **more than one year**. One year *exactly* is still short term. The clock starts the **day after** the trade date of purchase and ends on the trade date of the sale.

- Held one year or less → **short-term** → taxed as ordinary income
- Held more than one year → **long-term** → preferential rates

## Qualified vs non-qualified dividends

A **qualified dividend** is taxed at long-term capital gains rates. To qualify, the payer must be a U.S. corporation or a qualified foreign corporation, and the investor must satisfy a **holding period of more than 60 days during the 121-day window beginning 60 days before the ex-dividend date**.

Payments that are **never** qualified include interest dividends from bond funds and money market funds, dividends from REITs (mostly ordinary, though a portion may qualify for the pass-through deduction), and distributions from master limited partnerships. Do not assume every check labeled "dividend" gets the low rate.

## Cost basis

**Basis** is what you paid, including commissions and, for a fund purchase, any sales charge. **Adjusted basis** reflects later events: reinvested dividends and capital gains increase basis, return-of-capital distributions reduce it, and accrued original issue discount increases it.

### Identifying which shares you sold

| Method | Who can use it | Effect |
| --- | --- | --- |
| **FIFO** | Everyone — the **default** if no election is made | Oldest shares sold first; in a rising market this maximizes the gain |
| **Specific identification** | Any investor who identifies shares at or before settlement | Best tax control — sell the highest-basis lots to shrink the gain |
| **Average cost** | **Mutual fund and certain DRIP shares only** | Simple; once elected for a fund position it generally must be used consistently |

Exam point: **specific identification gives the most control**; **FIFO is what happens if the client does nothing**; **average cost is not available for individual stocks**.

## The wash sale rule

A loss is **disallowed** if the investor buys a **substantially identical** security within **30 days before or 30 days after** the sale — a **61-day window** centered on the trade date.

The loss is not destroyed; it is **added to the basis of the replacement shares**, and the replacement shares inherit the holding period. Traps to know:

- The rule catches purchases in the **spouse's account** and in an **IRA** (in the IRA case the loss is permanently lost, not added to basis).
- It catches **call options and convertible securities** on the same issuer.
- It applies only to **losses**. Selling at a gain and buying right back is fine — that is a "wash sale" only in casual speech.
- A different issuer in the same industry, or a different index fund tracking a different index, is generally **not** substantially identical.

## Capital loss deduction and carryforward

Net capital losses offset capital gains first (short against short, long against long, then across). Any remaining net loss may offset **up to $3,000 of ordinary income per year** ($1,500 if married filing separately). Anything beyond that **carries forward indefinitely**, retaining its short- or long-term character. Individual capital losses do **not** carry back.

## Taxation by vehicle

- **Municipal bonds** — interest is **exempt from federal income tax**; usually exempt from the issuer's state tax too (**double exempt**, or **triple exempt** for a resident of the issuing city). Capital gains on munis are **fully taxable**. Private activity bond interest can be an AMT preference item.
- **U.S. Treasury securities** — interest is **taxable at the federal level but exempt from state and local tax**. The mirror image of a muni.
- **Corporate bonds** — fully taxable at all levels.
- **Zero-coupon and OID bonds** — the annual **accretion is phantom income**, taxed each year even though no cash is received (except for municipal zeros, where the accretion is exempt). Accretion raises basis. This is why zeros are often recommended for tax-deferred accounts.
- **Mutual funds** — a fund that distributes substantially all income avoids entity-level tax under Subchapter M (the **conduit** or pipeline theory). Distributions retain their character: capital gain distributions are **long term regardless of how long the shareholder owned the fund**.
- **Buying a dividend** — purchasing fund shares just before a distribution buys a taxable event, not value. The NAV drops by the distribution amount, so the investor pays tax on money that was already in the share price. Advise clients to wait until after the record date.

## Gifts vs inheritance

- **Lifetime gift → carryover basis.** The donee takes the donor's basis and holding period. (Special rule: if the value at the date of gift is *below* the donor's basis, the fair market value at the gift date is used for computing a later loss.)
- **Death → step-up (or step-down) in basis** to fair market value at the date of death, and the holding period is automatically **long term**.

This single asymmetry drives a huge amount of planning advice: **gift the high-basis assets, hold the low-basis appreciated assets until death**.

## Tax-loss harvesting

Selling a depreciated position to realize a loss, using it against gains and up to $3,000 of ordinary income, and reinvesting in a similar-but-not-identical security to stay in the market. Harvesting **defers** tax rather than eliminating it, because the replacement position carries a lower basis. It is most valuable for a client with large realized gains or a high marginal rate.

## Tax vocabulary the exam uses

- **Progressive tax** — rate rises with the base. Income, estate, and gift taxes.
- **Regressive tax** — takes a larger share of a low earner's income. Sales, excise, payroll, and gasoline taxes.
- **Marginal rate** — the rate on the *next* dollar earned. This is the rate used for every decision at the margin, including the taxable-equivalent yield calculation.
- **Effective (average) rate** — total tax divided by total income. Always lower than the marginal rate in a progressive system.`,
  pitfalls: [
    "A holding period of exactly one year is SHORT term — the statute says more than one year, so the gain must be held one year and a day to qualify for the preferential rate.",
    "The wash sale window is 61 days total (30 before, 30 after), not 30 days after only, and it reaches into the spouse's account and the client's own IRA.",
    "Municipal bond INTEREST is federally tax-exempt, but a capital GAIN on the sale of a municipal bond is fully taxable — questions love to blur this.",
    "Treasury interest is exempt from STATE tax and taxable federally; municipal interest is the reverse. Reversing these two is the single most common error on this topic.",
    "A mutual fund capital gain distribution is always long term to the shareholder no matter how briefly the shares were held — the fund's holding period controls, not the investor's.",
    "Gifts carry over the donor's basis; only property received at death gets the step-up. Advising a client to gift low-basis stock to a child destroys a future step-up.",
  ],
  keyTerms: [
    {
      term: 'Adjusted basis',
      definition:
        "Original cost plus commissions and sales charges, increased by reinvested distributions and accreted original issue discount and reduced by return-of-capital distributions; it is subtracted from proceeds to compute gain or loss.",
    },
    {
      term: 'Qualified dividend',
      definition:
        'A dividend from a U.S. or qualified foreign corporation on which the shareholder satisfied a holding period of more than 60 days within the 121-day period beginning 60 days before the ex-dividend date, making it eligible for long-term capital gains rates.',
    },
    {
      term: 'Wash sale',
      definition:
        'The purchase of a substantially identical security within 30 days before or after a loss sale, which disallows the loss currently and adds it to the basis of the replacement shares.',
    },
    {
      term: 'Specific identification',
      definition:
        'A cost basis method in which the investor designates which tax lots are being sold at or before settlement, giving maximum control over the size and character of the realized gain or loss.',
    },
    {
      term: 'Net investment income tax (NIIT)',
      definition:
        'An additional 3.8% federal tax on investment income for taxpayers whose modified AGI exceeds $200,000 single or $250,000 joint, layered on top of the ordinary or capital gains rate.',
    },
    {
      term: 'Original issue discount (OID) accretion',
      definition:
        'The annual increase in the tax basis of a bond issued below par; on a taxable zero-coupon bond it is phantom income reported and taxed each year even though no cash is received.',
    },
    {
      term: 'Step-up in basis',
      definition:
        "The resetting of an inherited asset's basis to its fair market value at the decedent's date of death, with an automatically long-term holding period.",
    },
    {
      term: 'Tax-loss harvesting',
      definition:
        'Deliberately realizing losses to offset gains and up to $3,000 of ordinary income, then reinvesting in a similar but not substantially identical security to preserve market exposure.',
    },
  ],
  confusions: [
    {
      dont: 'Municipal bond interest — exempt from federal tax, generally taxable by other states',
      with: 'Treasury interest — taxable federally, exempt from state and local tax',
    },
    {
      dont: 'Carryover basis, which applies to a lifetime gift',
      with: 'Step-up in basis, which applies only to property transferred at death',
    },
    {
      dont: 'Marginal rate, the rate on the next dollar earned',
      with: 'Effective rate, total tax divided by total income, which is always lower',
    },
    {
      dont: 'FIFO, the default method that sells the oldest and usually lowest-basis shares first',
      with: 'Specific identification, an election that lets the investor choose the highest-basis lot',
    },
    {
      dont: 'A qualified dividend taxed at capital gains rates',
      with: 'A bond fund or money market "dividend," which is really interest and is ordinary income',
    },
  ],
  formulas: [
    {
      name: 'After-tax return',
      formula: 'After-tax return = Pre-tax return × (1 − marginal tax rate)',
      note: 'Use the marginal rate, not the effective rate. For a long-term gain, substitute the applicable capital gains rate plus 3.8% NIIT if the client is over the threshold.',
    },
    {
      name: 'Taxable-equivalent yield',
      formula: 'TEY = Tax-free yield ÷ (1 − marginal tax rate)',
      note: 'A 4% muni for a client in the 32% bracket equals 4% ÷ 0.68 = 5.88% taxable. If a comparable corporate bond yields less than that, the muni wins.',
    },
    {
      name: 'Tax-free equivalent yield',
      formula: 'Tax-free equivalent = Taxable yield × (1 − marginal tax rate)',
      note: 'The reverse comparison — what a taxable bond is really worth to the client after tax.',
    },
    {
      name: 'Capital gain or loss',
      formula: 'Gain or loss = Net proceeds − Adjusted basis',
      note: 'Net proceeds are sale price less commissions; adjusted basis includes purchase commissions and reinvested distributions.',
    },
  ],
};
