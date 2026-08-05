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

Why does the code care about character at all? The preferential capital gains rate is a deliberate subsidy for holding rather than trading, justified on the grounds that part of a long-held gain is only inflation and that the corporate earnings behind a dividend were already taxed once. Every rule in this chapter follows from that: the more the code rewards patience, the more machinery it needs — holding periods, wash sales, netting orders — to stop people from claiming the reward without being patient. **The same dollar is taxed at very different rates depending only on how it was earned and how long it was held**, so getting the character right usually matters more than getting the arithmetic right.

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

### Why the rule exists

Without it, loss deductions would be free. An investor could sell a depressed holding on December 31, claim the loss, buy it back on January 2, and end the round trip owning exactly what they owned before — same shares, same exposure — while deducting a loss they never actually accepted. The rule requires the taxpayer to **genuinely part with the position**: either accept a different investment or stay out 31 days and bear the risk the stock recovers without them.

That rationale explains the rule's shape. The standard is **substantially identical**, not "similar" — the target is the pure round trip, not portfolio management. It reaches **backward** 30 days as well as forward, because otherwise an investor could double up first and sell the old lot later, arriving at the same place by a different route. And the loss is not confiscated but **added to the basis of the replacement shares**, with the holding period tacking, because nothing has economically happened yet.

### Edge cases worth knowing

- The rule catches purchases in the **spouse's account**, in a corporation the taxpayer controls, and in the taxpayer's own **IRA**. The IRA case is the harsh one: the loss is **permanently lost**, because an IRA has no basis to add it to.
- It catches **call options, warrants, and convertible securities** on the same issuer — any contract or option to acquire the substantially identical security.
- It applies only to **losses**. Selling at a gain and repurchasing immediately is entirely permitted.
- A **partial** repurchase disallows the loss **proportionally**. Sell 1,000 shares at a $10,000 loss and buy back 300 inside the window: 30%, or $3,000, is disallowed and added to the 300 replacement shares; $7,000 is deductible.
- A **different issuer in the same industry** is generally not substantially identical, nor is a fund tracking a **different index**. Two funds tracking the **same** index from different sponsors are a gray area best avoided.
- For **bonds**, substantially identical generally requires the same issuer, coupon, and maturity, so a **bond swap** into a different maturity or issuer is the standard way to harvest a fixed-income loss.
- Dividends **reinvested automatically** during the window are purchases and trigger the rule on a slice of the loss. Turn off reinvestment before harvesting.

## Capital loss deduction and carryforward

### The netting order

The order is fixed, and doing it out of order changes the answer.

1. **Net short-term against short-term**, producing a net short-term figure.
2. **Net long-term against long-term.** (Within long term the code recognizes rate groups — collectibles up to 28%, unrecaptured real estate depreciation up to 25%, everything else 0/15/20 — netted highest-rate first.)
3. **Cross-net only if one bucket is a gain and the other a loss.** If both are gains they are simply taxed at their own rates; if both are losses they add together.
4. **Apply the $3,000 ordinary-income offset** to whatever net loss survives, and only then.

Step 3 carries most of the planning value. A long-term loss that survives its own bucket can be used against a **short-term** gain otherwise taxed at ordinary rates, so harvesting a long-term loss in a year with short-term gains is worth far more than the 15% it appears to be worth.

Any remaining net loss may offset **up to $3,000 of ordinary income per year** ($1,500 if married filing separately). Anything beyond that **carries forward indefinitely**, retaining its character. Individual capital losses do **not** carry back, and the carryforward **dies with the taxpayer** — it cannot be inherited.

## Taxation by vehicle

- **Municipal bonds** — interest is **exempt from federal income tax**; usually exempt from the issuer's state tax too (**double exempt**, or **triple exempt** for a resident of the issuing city). Capital gains on munis are **fully taxable**. Private activity bond interest can be an AMT preference item.
- **U.S. Treasury securities** — interest is **taxable at the federal level but exempt from state and local tax**. The mirror image of a muni.
- **Corporate bonds** — fully taxable at all levels.
- **Zero-coupon and OID bonds** — the annual **accretion is phantom income**, taxed each year even though no cash is received (except for municipal zeros, where the accretion is exempt). Accretion raises basis. This is why zeros are often recommended for tax-deferred accounts.

### The municipal de minimis rule

A muni bought in the **secondary market** below par carries **market discount**, and market discount is not the same thing as original issue discount. OID is created at issuance and accretes as tax-exempt interest on a muni. Market discount is created by the market after issuance and is compensation for a **rate move**, not for the issuer's credit — so the code treats it as **ordinary income**, taxable even on a tax-exempt bond.

The **de minimis rule** decides which side of the line a bond falls on. The threshold is **0.25% of par for each full year remaining to maturity**. Below it, the discount is ignored and the gain at sale or maturity is simply **capital gain**. At or above it, the accrued market discount is **ordinary income**.

Worked through: a muni with **10 years** to maturity has a threshold of 0.25% × 10 = **2.5% of par**, or $25 on a $1,000 bond, so the cutoff price is **$975**. Bought at $980, the $20 discount is de minimis and returns as capital gain. Bought at $950, the $50 discount exceeds the threshold, so the accrued market discount is taxed as **ordinary income** — on a bond bought precisely to avoid ordinary rates. This is why deeply discounted munis trade at a visible yield concession.

### Imputed interest generally

The same principle runs wider: the code taxes interest that **economically accrued**, whether or not cash changed hands. That produces annual OID accretion on a Treasury STRIP, imputed interest on a below-market family loan, and the interest component of an installment sale. **Cash received is not the test — economic accrual is.**
- **Mutual funds** — a fund that distributes substantially all income avoids entity-level tax under Subchapter M (the **conduit** or pipeline theory). Distributions retain their character: capital gain distributions are **long term regardless of how long the shareholder owned the fund**.
- **Buying a dividend** — purchasing fund shares just before a distribution buys a taxable event, not value. The NAV drops by the distribution amount, so the investor pays tax on money that was already in the share price. Advise clients to wait until after the record date.

## Gifts vs inheritance

- **Lifetime gift → carryover basis.** The donee takes the donor's basis and holding period. (Special rule: if the value at the date of gift is *below* the donor's basis, the fair market value at the gift date is used for computing a later loss.)
- **Death → step-up (or step-down) in basis** to fair market value at the date of death, and the holding period is automatically **long term**.

This single asymmetry drives a huge amount of planning advice: **gift the high-basis assets, hold the low-basis appreciated assets until death**.

## The alternative minimum tax

The **AMT** is a parallel calculation, not an extra tax. The taxpayer computes regular tax and tentative minimum tax under a system with a different exemption, fewer deductions, and its own rates, and **pays the higher**. The exemption amounts are indexed and were raised substantially, so far fewer taxpayers are caught than in the past.

What matters for investments: **interest on certain private activity municipal bonds is an AMT preference item**, so a bond that is federally tax-exempt for most investors is not for an AMT payer. The other classic trigger is exercising an **incentive stock option** and holding past year end — the bargain element is invisible for regular tax and fully countable for AMT, which is how a client owes real tax on a paper gain that later evaporates.

## Constructive receipt

Income is taxable when it is **credited, set apart, or otherwise made available** without substantial limitation — not when the taxpayer chooses to touch it. This doctrine closes the door on most casual deferral schemes.

- A **reinvested** mutual fund distribution is fully taxable; the client never saw the cash, but the cash was theirs.
- Interest **credited** to a savings account on December 31 is taxable that year even if left in place.
- A **dividend check** mailed in December and available to the shareholder is that year's income even if deposited in January.
- **Non-qualified deferred compensation** works only if the election was made **before** the income was earned and the deferred amount stays subject to the employer's general creditors. An arrangement the executive can reach at will is constructively received now.

The mirror principle: **appreciation is not income**. An unrealized gain is not constructively received no matter how liquid the position — which is why unrealized appreciation is the most powerful deferral available to an ordinary investor, and why turnover is so expensive.

## Deferral versus exemption

These are constantly confused and are not close to the same thing.

**Deferral** postpones tax. A traditional IRA, a non-qualified annuity, an unrealized gain, a 1031 exchange, and an installment sale all push the liability forward without erasing it. Deferral is valuable because the deferred dollars keep compounding and the rate at withdrawal may be lower — but it carries a cost the exam likes: **deferral can convert character**. Long-term capital gain earned inside a non-qualified annuity or a traditional IRA emerges as **ordinary income**, so a client can defer tax and still pay more of it.

**Exemption** means never taxed at all: municipal interest at the federal level, qualified Roth distributions, a life insurance death benefit, HSA withdrawals for qualified medical expenses.

A third category sits between them. The **step-up in basis at death** is neither deferral nor exemption but **forgiveness** — decades of deferred gain simply erased.

## Tax-loss harvesting

Selling a depreciated position to realize a loss, using it against gains and up to $3,000 of ordinary income, and reinvesting in a similar-but-not-identical security to stay in the market. Harvesting **defers** tax rather than eliminating it, because the replacement position carries a lower basis. It is most valuable for a client with large realized gains or a high marginal rate.

### Scenario: a December tax review

A client in the 32% ordinary and 15% long-term brackets comes in on December 5. Year to date she has realized **$22,000 of short-term gains** and **$6,000 of long-term gains**. She holds two losers: Position X, bought eight months ago and down **$9,000**, and Position Y, held three years and down **$16,000**. She also plans to put $50,000 into a new fund next week, and an existing fund has declared a capital gain distribution with a December 20 record date.

Do nothing and the bill is $22,000 at 32% plus $6,000 at 15% — **$7,940**.

Harvest both losers instead. Short term nets to $22,000 − $9,000 = **+$13,000**; long term nets to $6,000 − $16,000 = **−$10,000**. One bucket is a gain and the other a loss, so they cross-net: $13,000 − $10,000 = **$3,000 of net short-term gain**, taxed at 32% for **$960**. The saving is **$6,980** on $25,000 of harvested loss — about 28%, far above the 15% the long-term loss appears to be worth, precisely because $10,000 of it landed on income taxed at 32%.

Two moves complete the review. **Delay the $50,000 purchase past the December 20 record date**, so she is not buying someone else's taxable distribution. And **do not repurchase X or Y for 31 days**, dividend reinvestment turned off in both, or part of the $6,980 disappears into a wash sale.

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
  workedExamples: [
    {
      title: 'Netting gains and losses, the $3,000 offset, and the carryforward',
      setup:
        "A client realizes four transactions this year: a short-term gain of $4,000, a short-term loss of $10,000, a long-term gain of $6,000, and a long-term loss of $14,000. The client also has wage income taxed at ordinary rates. How much is deductible this year, and what carries forward?",
      steps: [
        'Step 1 — net within the short-term bucket first: +$4,000 − $10,000 = −$6,000 net short-term loss.',
        'Step 2 — net within the long-term bucket: +$6,000 − $14,000 = −$8,000 net long-term loss.',
        'Step 3 — both buckets are losses, so there is nothing to offset across. Combine them: −$6,000 + (−$8,000) = −$14,000 net capital loss.',
        'Step 4 — apply the ordinary-income offset. The deduction is capped at $3,000 per year ($1,500 if married filing separately), so $3,000 of the $14,000 reduces wage income this year.',
        'Step 5 — compute the carryforward: $14,000 − $3,000 = $11,000 carried forward indefinitely.',
        'Step 6 — track the character. Short-term loss is used first against ordinary income, so the $3,000 comes entirely out of the $6,000 short-term loss. Short-term carryforward = $6,000 − $3,000 = $3,000; long-term carryforward = $8,000, untouched.',
      ],
      answer:
        "$3,000 is deducted against ordinary income this year. $11,000 carries forward — $3,000 short-term and $8,000 long-term — and it keeps that character in every future year until used up.",
      watchOut:
        "Applying the $3,000 limit before netting. The cap is the last step, not the first: a student who deducts $3,000 against each of the two losses, or who caps each transaction at $3,000, gets the wrong deduction and the wrong carryforward. Also note individuals carry losses forward only — there is no carryback.",
    },
    {
      title: 'Wash sale: the disallowed loss and the basis of the replacement shares',
      setup:
        'A client buys 500 shares of XYZ at $40 per share. Ten months later, with the stock at $28, the client sells all 500 shares. Twelve days after that sale the client buys 500 shares of XYZ back at $30. Ignore commissions.',
      steps: [
        'Step 1 — original cost basis: 500 × $40 = $20,000.',
        'Step 2 — sale proceeds: 500 × $28 = $14,000.',
        'Step 3 — realized loss: $14,000 − $20,000 = −$6,000.',
        'Step 4 — test the window. The repurchase is 12 days after the sale, inside the 30-days-after half of the 61-day window (30 days before + trade date + 30 days after). The loss is disallowed.',
        'Step 5 — cost of the replacement shares: 500 × $30 = $15,000.',
        'Step 6 — add the disallowed loss to that cost: $15,000 + $6,000 = $21,000 adjusted basis, or $21,000 ÷ 500 = $42 per share. The replacement shares also inherit the original holding period.',
        'Step 7 — sanity check the economics. If the client later sells the replacement shares at $46 (500 × $46 = $23,000), the gain is $23,000 − $21,000 = $2,000, not $23,000 − $15,000 = $8,000. The $6,000 was deferred, not destroyed.',
      ],
      answer:
        'The $6,000 loss is disallowed this year. The 500 replacement shares carry an adjusted basis of $21,000 ($42 per share) and tack on the original holding period.',
      watchOut:
        "Subtracting the disallowed loss from the replacement basis instead of adding it. Adding is what defers the deduction to the eventual sale. The one case where the loss really does vanish is a repurchase inside the client's own IRA — there is no basis in an IRA to add it to.",
    },
    {
      title: 'Taxable-equivalent yield on a municipal bond',
      setup:
        'A client in the 32% federal marginal bracket is choosing between a general obligation municipal bond yielding 3.40% (federally tax-exempt) and a comparable-quality corporate bond yielding 4.75%. Ignore state tax and the NIIT.',
      steps: [
        'Step 1 — write the formula: TEY = tax-free yield ÷ (1 − marginal rate).',
        'Step 2 — substitute: TEY = 3.40% ÷ (1 − 0.32) = 3.40% ÷ 0.68.',
        'Step 3 — divide: 3.40 ÷ 0.68 = 5.00%.',
        'Step 4 — compare: the muni is worth 5.00% of taxable yield to this client; the corporate offers only 4.75%. The muni wins by 25 basis points.',
        "Step 5 — confirm from the other direction. Corporate after tax = 4.75% × (1 − 0.32) = 4.75% × 0.68 = 3.23%, which is below the muni's 3.40%. Same conclusion, so the arithmetic is consistent.",
      ],
      answer:
        'The taxable-equivalent yield of the 3.40% muni is 5.00%. Since the corporate yields only 4.75% pre-tax (3.23% after tax), the municipal bond is the better after-tax choice for this client.',
      watchOut:
        "Multiplying by (1 − rate) instead of dividing when converting a muni yield up to a taxable equivalent. That gives 3.40% × 0.68 = 2.31% and makes the muni look terrible. Divide to go tax-free → taxable; multiply to go taxable → tax-free. Also use the MARGINAL rate here, never the effective rate.",
    },
    {
      title: 'Stepped-up basis at death versus carryover basis on a lifetime gift',
      setup:
        "A parent bought 1,000 shares years ago at $12 per share. The shares are worth $50 per share today. Compare two paths: (a) the parent holds the shares until death, when they are worth $50, and the child inherits them; (b) the parent gifts the shares today at $50. In both cases the child later sells all 1,000 shares at $56. Assume a 15% long-term capital gains rate.",
      steps: [
        "Step 1 — the parent's basis: 1,000 × $12 = $12,000. Current value: 1,000 × $50 = $50,000. Sale proceeds either way: 1,000 × $56 = $56,000.",
        'Step 2 — path (a), inheritance. Basis steps up to fair market value at death: $50,000. Holding period is automatically long-term.',
        'Step 3 — gain on the inherited shares: $56,000 − $50,000 = $6,000. Tax at 15% = $900.',
        "Step 4 — path (b), lifetime gift. Value at the gift date ($50,000) exceeds the donor's basis ($12,000), so the plain carryover rule applies: the child takes a $12,000 basis and tacks on the donor's holding period.",
        'Step 5 — gain on the gifted shares: $56,000 − $12,000 = $44,000. Tax at 15% = $6,600.',
        'Step 6 — the cost of gifting instead of bequeathing: $6,600 − $900 = $5,700 of extra tax, which is 15% of the $38,000 of appreciation that the step-up would have erased.',
      ],
      answer:
        'Inherited: $6,000 gain and $900 of tax. Gifted: $44,000 gain and $6,600 of tax. Gifting the low-basis shares during life costs the family $5,700 more.',
      watchOut:
        "Applying a step-up to a lifetime gift. Only transfers at death reset basis to fair market value. This is exactly why the planning rule runs the other way: gift the HIGH-basis assets and hold the low-basis appreciated ones until death. (Separate special rule: if the gift-date value were BELOW the donor's basis, the donee would use that lower value when computing a later loss.)",
    },
    {
      title: 'Marginal rate versus effective rate on the same income',
      setup:
        "Assume this year a single filer faces these given brackets: 10% on the first $12,000 of taxable income, 12% on income from $12,000 to $48,000, 22% on income from $48,000 to $100,000, and 24% above $100,000. (Treat these figures as supplied by the question; real brackets are indexed and move each year.) The client has $90,000 of taxable income.",
      steps: [
        'Step 1 — fill the 10% bracket: 10% × $12,000 = $1,200.',
        'Step 2 — fill the 12% bracket: the slice is $48,000 − $12,000 = $36,000, so 12% × $36,000 = $4,320.',
        'Step 3 — fill the 22% bracket only up to the income actually earned: the slice is $90,000 − $48,000 = $42,000, so 22% × $42,000 = $9,240.',
        'Step 4 — the 24% bracket is never reached, because income stops at $90,000.',
        'Step 5 — total tax: $1,200 + $4,320 + $9,240 = $14,760.',
        'Step 6 — effective (average) rate: $14,760 ÷ $90,000 = 0.164 = 16.4%.',
        'Step 7 — marginal rate: the next dollar earned lands in the 22% bracket, so the marginal rate is 22%.',
      ],
      answer:
        'Total tax $14,760. Marginal rate 22%; effective rate 16.4%. Every at-the-margin decision — a taxable-equivalent yield, the value of one more deductible dollar — uses 22%.',
      watchOut:
        'Multiplying all income by the top bracket rate: 22% × $90,000 = $19,800, overstating the tax by $5,040. Brackets are filled in slices, not applied to the whole. The mirror error is plugging the 16.4% effective rate into a taxable-equivalent yield calculation, which understates the value of a municipal bond.',
    },
    {
      title: 'After-tax value of tax-deferred growth versus an annually taxed account',
      setup:
        'A client invests $10,000 of after-tax money for 20 years and earns 7% per year. In Account A (a non-qualified tax-deferred annuity) nothing is taxed until withdrawal, when the accumulated earnings are taxed as ordinary income. In Account B the 7% is taxed as ordinary income every year as it is earned. The marginal rate is 24% throughout. Compare the amounts the client can actually spend at the end.',
      steps: [
        'Step 1 — Account A grows at the full 7%: $10,000 × 1.07^20 = $10,000 × 3.869684 = $38,696.84.',
        'Step 2 — separate the taxable earnings from the after-tax principal: $38,696.84 − $10,000 = $28,696.84 of earnings. The $10,000 of basis comes back tax-free.',
        'Step 3 — tax on the earnings at withdrawal: 24% × $28,696.84 = $6,887.24.',
        'Step 4 — Account A after tax: $38,696.84 − $6,887.24 = $31,809.60.',
        'Step 5 — Account B compounds at the after-tax rate: 7% × (1 − 0.24) = 5.32% per year.',
        'Step 6 — Account B ending value: $10,000 × 1.0532^20 = $10,000 × 2.819792 = $28,197.92. Nothing further is owed; the tax was paid annually.',
        'Step 7 — difference: $31,809.60 − $28,197.92 = $3,611.68, about 12.8% more spendable money, at the identical 7% gross return and the identical 24% rate.',
      ],
      answer:
        'Account A (deferred) delivers $31,809.60 after tax; Account B (annually taxed) delivers $28,197.92. Deferral is worth $3,611.68 here purely from compounding on dollars that would otherwise have gone to the IRS each year.',
      watchOut:
        "Comparing the deferred account's PRE-tax balance of $38,696.84 with the taxable account's after-tax $28,197.92 and claiming a $10,499 advantage. That is not a fair comparison — subtract the deferred tax first. A second trap: deferral converts what might have been long-term capital gain into ordinary income inside an annuity, so a high-turnover comparison is not always this favorable.",
    },
    {
      title: 'A capital gains distribution right after purchase — why it is not free money',
      setup:
        'On December 10 a client invests $20,000 in a mutual fund at a NAV of $40.00, buying 500 shares. On December 15 the fund pays a long-term capital gain distribution of $2.00 per share, and the NAV drops to $38.00. The client reinvests the distribution. The client is in the 15% long-term capital gains bracket.',
      steps: [
        'Step 1 — shares purchased: $20,000 ÷ $40.00 = 500 shares.',
        'Step 2 — distribution received: 500 × $2.00 = $1,000.',
        'Step 3 — value of the original shares after the NAV drop: 500 × $38.00 = $19,000.',
        'Step 4 — total value immediately after the distribution: $19,000 + $1,000 = $20,000. Exactly what the client started with. The distribution moved value out of the share price; it did not create any.',
        'Step 5 — reinvest: $1,000 ÷ $38.00 = 26.3158 additional shares, for 526.3158 shares. Confirm: 526.3158 × $38.00 = $20,000. Still unchanged.',
        "Step 6 — the tax bill: $1,000 × 15% = $150. The distribution is LONG-TERM to the shareholder even though the client has owned the fund for five days, because the fund's holding period controls.",
        'Step 7 — net position: $20,000 of value less $150 owed to the IRS = $19,850 economically. Basis rises to $20,000 + $1,000 = $21,000, so the $150 is a prepayment, not a permanent loss — but it is a prepayment for no benefit.',
      ],
      answer:
        'The account is worth the same $20,000 it was before the distribution, but the client now owes $150 of tax — a real economic loss of $150 from buying five days too early. Waiting until after the record date would have avoided it.',
      watchOut:
        'Assuming a five-day holding period makes the distribution short-term. Capital gain distributions from a fund are always long-term to the shareholder regardless of how briefly the shares were held. The related error is treating the distribution as investment income the client came out ahead on — the NAV fell by exactly the distribution.',
    },
  ],
};
