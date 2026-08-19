# Taxation of Investments

This is one topic from the Series 65 exam, the Uniform Investment Adviser Law
Examination. It is worth about 3 percent of the exam.

## Why this topic matters

Taxes are the one drag on return an adviser can actually control, so the exam tests whether you can classify income correctly, compute a basis, apply the wash sale and capital loss rules, and compare a municipal yield to a taxable one on an after-tax basis.

## The two buckets: ordinary income and capital gains

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

- Method: FIFO. Who can use it: Everyone — the default if no election is made. Effect: Oldest shares sold first; in a rising market this maximizes the gain.
- Method: Specific identification. Who can use it: Any investor who identifies shares at or before settlement. Effect: Best tax control — sell the highest-basis lots to shrink the gain.
- Method: Average cost. Who can use it: Mutual fund and certain DRIP shares only. Effect: Simple; once elected for a fund position it generally must be used consistently.


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
- **Effective (average) rate** — total tax divided by total income. Always lower than the marginal rate in a progressive system.

## The questions this topic is tested with

**During the tax year an investor realizes $4,000 of long-term capital gains and $13,000 of capital losses. She has more than enough ordinary income to absorb the maximum allowable deduction and has no other capital transactions. How much capital loss may she carry forward into the following tax year?**

Losses first offset gains: $13,000 − $4,000 = $9,000 net capital loss. Up to $3,000 of a net capital loss may be deducted against ordinary income in a year, leaving $9,000 − $3,000 = $6,000 to carry forward indefinitely.

**A client bought 100 shares of a stock for $5,000. On October 1 he sold all 100 shares for $3,200. On October 20 he repurchased 100 shares of the same stock for $3,500. What is the tax result?**

The repurchase occurred within 30 days of the sale, so the wash sale rule disallows the $5,000 − $3,200 = $1,800 loss currently. The loss is not lost — it is added to the basis of the replacement shares: $3,500 + $1,800 = $5,300, and the holding period of the old shares tacks on.

**A client in the 32% federal marginal bracket is comparing a general obligation municipal bond yielding 3.6% with a taxable corporate bond. Ignoring state taxes, what taxable yield would the client need to be indifferent between the two?**

Taxable-equivalent yield = tax-free yield ÷ (1 − marginal tax rate) = 0.036 ÷ (1 − 0.32) = 0.036 ÷ 0.68 = 5.29%. A taxable bond must yield more than 5.29% to beat the municipal for this investor.

**How is interest paid on direct US Treasury obligations treated for income tax purposes?**

Treasury interest is federally taxable but exempt from state and local income tax. Municipal bond interest is the mirror image — generally exempt from federal tax, and also exempt from the issuing state tax for residents of that state.

**A father purchased stock years ago for $10,000. When the shares were worth $60,000 he gifted them to his adult daughter. She later sold the entire position for $75,000. What gain does the daughter report?**

A lifetime gift of appreciated property carries over the donor basis — there is no step-up. Gain = $75,000 − $10,000 = $65,000, and the donor holding period tacks on, so it is long-term. A step-up to fair market value applies only to property received at death.

**Which of the following distributions would NOT be treated as a qualified dividend eligible for long-term capital gains rates?**

REIT dividends paid from ordinary operating income are generally non-qualified and taxed as ordinary income (subject to the separate qualified business income deduction). Qualified dividends require a domestic or qualified foreign payer plus satisfaction of the minimum holding period around the ex-dividend date.
