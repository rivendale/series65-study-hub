import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'cfp-tax-planning',
  title: 'Tax Planning for Advisors',
  weight: 'Supplemental',
  order: 42,
  summary:
    "Taxes touch every recommendation an advisor makes. This topic covers the individual tax formula, marginal versus effective rates, capital gains and loss harvesting, asset location, Roth conversion planning, charitable strategies, and the professional boundary between planning and tax preparation.",
  body: `*This material is not tested on the Series 65 exam. It is here because tax awareness is a principal knowledge area of the CFP® certification and because, in practice, after-tax outcomes are the only outcomes clients actually experience.*

## The individual tax formula

Every planning conversation about taxes runs down the same ladder. Learn it as a sequence, because each rung is a different lever.

1. **Gross income** — all income from whatever source derived, unless specifically excluded.
2. Less **adjustments** (above-the-line deductions) → **Adjusted gross income (AGI)**.
3. Less the greater of the **standard deduction** or **itemized deductions**, plus any qualified business income deduction → **Taxable income**.
4. Apply the **rate schedule** → **Tax liability before credits**.
5. Less **credits**, plus other taxes → **Tax due or refund**.

Two structural insights drive most advice:

- **Deductions reduce taxable income; credits reduce tax dollar for dollar.** A $1,000 credit is worth $1,000 to everyone. A $1,000 deduction is worth $1,000 times the marginal rate.
- **AGI is a gateway number.** Dozens of provisions phase in or out based on AGI or modified AGI — IRA deductibility, education credits, the net investment income tax, ACA premium credits, Medicare IRMAA surcharges, taxation of Social Security. Reducing AGI often unlocks benefits worth far more than the deduction itself.

### Above-the-line versus itemized

**Adjustments** reduce AGI whether or not the client itemizes: deductible traditional IRA and HSA contributions, self-employed retirement plan contributions, half of self-employment tax, the self-employed health insurance deduction, and student loan interest.

**Itemized deductions** include capped state and local taxes, mortgage interest on qualifying acquisition debt, charitable gifts, and medical expenses above an AGI floor. Because the standard deduction is large, most households take it — meaning their charitable gifts and property taxes produce **no** tax benefit at all. That is the origin of bunching.

## Marginal versus effective rate

The **marginal rate** is the rate on the next dollar; the **effective rate** is total tax divided by total income. Clients quote the effective rate; advisors must think in marginal rates, because every decision — convert or not, harvest or not, defer or not, give or not — happens at the margin.

The statutory bracket is not always the true marginal rate, because phase-outs create hidden ones. A retiree in the 12% bracket whose extra IRA withdrawal makes more Social Security taxable can face a true rate near 22%; a client crossing an IRMAA threshold by a dollar pays a full year of higher premiums. Compute the rate the client actually faces.

## Capital gains planning

Long-term capital gains (assets held more than one year) and qualified dividends are taxed at preferential rates — currently 0%, 15%, and 20% depending on taxable income — while short-term gains are taxed as ordinary income. On top of that sits the **net investment income tax** of 3.8% on the lesser of net investment income or MAGI above a threshold that is not indexed.

Practical techniques:

- **Tax-loss harvesting.** Realize losses against realized gains; net losses offset up to $3,000 of ordinary income per year with the remainder carried forward indefinitely. Respect the **wash sale rule** — the loss is disallowed if substantially identical securities are bought within 30 days before or after the sale, including in the client's IRA or a spouse's account. Reinvest in a similar but not substantially identical fund to stay invested.
- **Tax-gain harvesting.** In an unusually low-income year — early retirement before Social Security and RMDs, a sabbatical, a business loss — a client may realize long-term gains inside the **0% bracket** and reset basis at no federal cost. There is no wash sale rule for gains.
- **Bracket management.** Plan the whole year in advance, not in December.
- **Specific identification** of lots rather than average cost or FIFO, so you control what is sold.
- **Holding period discipline.** Selling a day before the one-year mark converts a preferential rate into an ordinary one.

## Asset location

**Allocation** decides what you own. **Location** decides which account holds it. The general principle: put the least tax-efficient assets where they do the least damage.

| Account type | Best suited for |
| --- | --- |
| Taxable | Broad equity index funds, ETFs, municipal bonds, assets to be donated or held for a step-up |
| Tax-deferred (traditional IRA, 401(k)) | Taxable bonds, REITs, high-turnover strategies, anything throwing off ordinary income |
| Tax-free (Roth) | Highest-expected-return growth assets — you never want to share the best outcome with the IRS |

Location is a real but bounded win. Do not let it override the client's need for liquidity, or produce a portfolio so fragmented across accounts that nobody can rebalance it.

## Roth conversion planning

A conversion moves money from pre-tax to Roth, paying ordinary income tax now to buy tax-free growth and no lifetime required distributions later. It is attractive when the client's current marginal rate is lower than their expected future rate — a common situation in the "gap years" between retirement and the start of Social Security and RMDs.

The core technique is **bracket filling**: convert only the amount that fills the current bracket without spilling into the next, then stop. Repeat annually. Considerations:

- Pay the tax from **taxable** assets, not from the converted amount, or the math weakens badly.
- Watch second-order effects: IRMAA (which looks back two years), ACA premium credits, the NIIT threshold, and state income tax.
- Conversions are no longer reversible — there is no recharacterization of a conversion.
- Roth assets are also an estate planning tool: heirs subject to the 10-year distribution rule inherit a tax-free asset rather than a tax bomb.

## Qualified business income deduction, briefly

Owners of pass-through businesses may deduct up to 20% of qualified business income, subject to taxable income thresholds above which W-2 wage and property limits apply and certain service businesses phase out entirely. The planning implication is simple: for a business-owner client near a threshold, a retirement plan contribution or charitable gift that lowers taxable income can be worth far more than its face value. Run the actual computation with the CPA.

## Charitable strategies

- **Bunching with a donor-advised fund.** Concentrate several years of intended giving into one year to clear the standard deduction, deduct it then, and grant to charities over later years.
- **Gifting appreciated securities.** Donating long-term appreciated stock to a public charity generally yields a **fair market value** deduction while permanently avoiding tax on the appreciation. This should be the default giving method for any client with low-basis positions in a taxable account. Percentage-of-AGI limits differ for appreciated property versus cash.
- **Qualified charitable distributions.** From age 70½ an IRA owner may send distributions, up to an indexed limit, directly to qualifying charities. The amount is excluded from income entirely — better than a deduction, since it lowers AGI and can satisfy the RMD.
- Never let a client sell appreciated stock and donate the cash when they could have donated the shares.

## Alternative minimum tax awareness

The AMT is a parallel calculation that disallows certain deductions and applies its own exemption and rates; the taxpayer pays the higher of regular tax or AMT. Fewer households are affected than in the past, but it remains highly relevant for one group in particular: employees exercising **incentive stock options**, where the bargain element is an AMT preference item in the exercise year. If your client has ISOs, model the AMT before they exercise, not after.

## State taxes and residency

State rates run from zero to double digits, and states differ on whether they tax Social Security, pensions, and retirement distributions. Municipal bond interest is generally federally tax-exempt and often exempt in the issuing state too, which is why in-state municipal funds exist.

High-tax states audit residency changes aggressively. A genuine change of domicile requires evidence — days present, driver's license, voter registration, professional and medical relationships, where the family actually lives. Advise clients to document from day one and to coordinate with a tax professional **before** a large liquidity event, not after.

## Documents an advisor sees

| Form | What it reports |
| --- | --- |
| 1099-B | Proceeds from sales, with cost basis for covered securities |
| 1099-DIV | Ordinary and qualified dividends, capital gain distributions |
| 1099-INT | Interest income, including tax-exempt interest |
| 1099-R | Distributions from retirement accounts, with a distribution code |
| Schedule K-1 | A partner's or shareholder's share of pass-through income; often arrives late and forces extensions |
| 5498 | IRA contributions, rollovers, conversions, and year-end fair market value |

Reading a client's return and these forms carefully is one of the highest-yield habits in the profession. The return tells you things the client will never think to mention.

## The professional boundary

Advisors do **tax-aware planning**. They do not prepare or sign returns or represent clients before the IRS unless they hold the appropriate credential — CPA, enrolled agent, or attorney. Say it clearly and often: "Here is the strategy and the reasoning; please confirm the numbers with your CPA before we execute." Build real relationships with a few tax professionals, share your analysis in writing, and never make the client the messenger between you. Coordination is a service clients value enormously — and it is also your protection.`,
  pitfalls: [
    "Advising off the statutory bracket instead of the client's true marginal rate, ignoring phase-outs, Social Security taxation, IRMAA thresholds, and ACA premium credits.",
    "Harvesting losses in December without checking for wash sales triggered by automatic dividend reinvestment or purchases in the spouse's or the IRA account.",
    "Letting a client sell appreciated stock and donate the cash instead of donating the shares, needlessly realizing a gain.",
    "Converting to a Roth with money withheld from the conversion itself to pay the tax, which undercuts the entire benefit — especially before age 59½.",
    "Chasing asset location or a small deduction into a portfolio so fragmented and illiquid that rebalancing and cash needs become a problem.",
    "Drifting across the line into tax preparation or giving definitive tax opinions. Frame recommendations as strategies to confirm with the client's CPA, and document that you did.",
  ],
  keyTerms: [
    {
      term: 'Adjusted gross income (AGI)',
      definition:
        'Gross income less above-the-line adjustments; the gateway figure that drives eligibility for many deductions, credits, and surcharges.',
    },
    {
      term: 'Marginal tax rate',
      definition:
        'The rate applied to the next dollar of income, including the effect of phase-outs, not merely the statutory bracket.',
    },
    {
      term: 'Wash sale rule',
      definition:
        'Disallows a loss when substantially identical securities are bought within 30 days before or after the sale; the disallowed loss is added to the basis of the replacement shares.',
    },
    {
      term: 'Net investment income tax (NIIT)',
      definition:
        'A 3.8% surtax on the lesser of net investment income or modified AGI above a fixed, non-indexed threshold.',
    },
    {
      term: 'Asset location',
      definition:
        'Deciding which account type holds which asset class so that tax-inefficient holdings sit in sheltered accounts.',
    },
    {
      term: 'Bracket filling',
      definition:
        'Recognizing income — typically through a Roth conversion or gain harvesting — only up to the top of the current bracket, then stopping.',
    },
    {
      term: 'Qualified charitable distribution (QCD)',
      definition:
        'A direct transfer from an IRA to a qualifying charity, available from age 70½, excluded from income and able to satisfy a required minimum distribution.',
    },
    {
      term: 'Donor-advised fund',
      definition:
        'A charitable account allowing an immediate deduction on funding while grants to operating charities are recommended over later years; the core tool for bunching.',
    },
  ],
  confusions: [
    {
      dont: 'A deduction, which reduces taxable income and is worth the marginal rate',
      with: 'A credit, which reduces tax dollar for dollar regardless of bracket',
    },
    {
      dont: 'The marginal rate, which governs every decision made at the margin',
      with: 'The effective rate, which describes the average burden and should not drive decisions',
    },
    {
      dont: 'A qualified charitable distribution, which is excluded from income and lowers AGI',
      with: 'A charitable deduction, which only helps if the client itemizes',
    },
    {
      dont: 'Tax-loss harvesting, constrained by the wash sale rule',
      with: 'Tax-gain harvesting, which has no wash sale restriction and can reset basis at 0%',
    },
  ],
  formulas: [
    {
      name: 'Effective tax rate',
      formula: 'Effective rate = Total tax liability ÷ Total income',
      note: 'Useful for client communication and year-over-year comparison; never use it to evaluate an incremental decision.',
    },
    {
      name: 'After-tax return',
      formula: 'After-tax return = Pre-tax return × (1 − Marginal tax rate on that income)',
      note: 'Apply the rate matching the character of the income — ordinary, qualified dividend, or long-term capital gain.',
    },
    {
      name: 'Taxable equivalent yield',
      formula: 'TEY = Municipal yield ÷ (1 − Marginal tax rate)',
      note: 'Include the state rate and the NIIT where they apply to make an honest comparison against a taxable bond.',
    },
    {
      name: 'Roth conversion breakeven test',
      formula: 'Convert when: Marginal rate today < Expected marginal rate at future withdrawal',
      note: 'Expected future rate should account for RMDs, survivor filing status after a spouse dies, and the rate heirs would pay under the 10-year rule.',
    },
  ],
};
