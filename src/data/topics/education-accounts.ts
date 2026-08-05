import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'education-accounts',
  title: 'Education and Special-Needs Accounts',
  weight: '~2%',
  order: 25,
  summary:
    "Education funding questions are almost always scenario-based: given a family's income, time horizon, and control preferences, which vehicle fits? Know the 529 inside out, then the narrower niches filled by Coverdell ESAs, UTMA/UGMA accounts, ABLE accounts, and savings bonds.",
  body: `## Section 529 plans

A **529 plan** is a state-sponsored, tax-advantaged education savings vehicle authorized by Section 529 of the Internal Revenue Code. Two flavors:

- **529 savings plan** — the dominant type. Contributions buy units in investment portfolios (age-based/target-enrollment tracks and static options). The value **fluctuates with the markets**, with **no guarantee** it will cover tuition.
- **529 prepaid tuition plan** — locks in future tuition at today's prices, usually at in-state public institutions. It hedges tuition inflation but is narrower, often carries residency requirements, and may have only a limited state guarantee.

### Tax treatment

Contributions are made with **after-tax dollars — never federally deductible**. Earnings grow **tax-deferred**, and withdrawals for **qualified expenses are entirely federal-income-tax-free**. Many states offer a **state income tax deduction or credit**, often only for the resident's own state plan — the main reason to prefer a home-state plan. Otherwise a client may use **any state's plan for a beneficiary in any state**.

### Contribution rules

- **No federal income limits.** A high earner can fund a 529 — this is the standard answer when a client is phased out of everything else.
- **No annual dollar cap** in the statute, but contributions are **gifts** for gift tax purposes, so the practical measure is the **annual gift tax exclusion** (indexed, in the neighborhood of **$19,000–$20,000 per donor per beneficiary per year** in the mid-2020s).
- **Five-year gift tax averaging ("superfunding")** — a donor may contribute **up to five times the annual exclusion at once** and elect to spread it over five years for gift tax purposes. A married couple can therefore front-load a very large sum. If the donor dies within the five years, the unused portion is pulled back into the estate.
- **Aggregate limits** are set by each **state**, based on the estimated cost of a full education, commonly **$300,000 to $600,000+** per beneficiary. Once the account reaches the cap, no further contributions are accepted, though growth may continue.

### Qualified expenses

- **Tuition, fees, books, supplies, and required equipment** at eligible post-secondary institutions
- **Room and board**, if the student is enrolled **at least half time**, capped at the school's published cost of attendance allowance
- **Computers, software, and internet access** used primarily by the beneficiary while enrolled
- **K-12 tuition**, limited to a **per-beneficiary annual cap** (originally $10,000, raised by later legislation — treat the figure as a statutory cap that has been increased rather than a permanent number)
- **Registered apprenticeship program** fees, books, supplies, and equipment
- **Qualified student loan repayment**, subject to a **$10,000 lifetime cap per beneficiary**, plus a separate $10,000 for each of the beneficiary's siblings

### Control, beneficiary changes, and non-qualified withdrawals

The **account owner — not the beneficiary — controls the account**, including the right to change the beneficiary or take the money back. That is the key structural difference from a custodial account, and the reason a 529 is the right recommendation when a parent or grandparent wants to keep control.

The beneficiary may be changed **without tax consequence to a member of the beneficiary's family**, broadly defined (siblings, parents, cousins, the owner themselves). A change to a beneficiary **one or more generations below** the current one can raise generation-skipping transfer tax issues.

A **non-qualified withdrawal** is taxed only on the **earnings portion**, at the recipient's ordinary rate, **plus a 10% penalty on the earnings**. The contribution portion always comes out free. The 10% penalty is **waived** — but the earnings are still taxable — for death, disability, receipt of a scholarship (up to the scholarship amount), and attendance at a U.S. military academy.

### Financial aid treatment

A 529 owned by a **parent or by the dependent student** is reported as a **parental asset** on the FAFSA, assessed at a maximum of roughly **5.64%** — far gentler than the **20%** rate applied to a student's own assets. Under current FAFSA rules, distributions from a **grandparent-owned 529 are no longer counted as student income**, which removed the old "grandparent trap."

### 529-to-Roth rollovers (SECURE 2.0)

Leftover 529 money may be rolled into a **Roth IRA for the beneficiary**, subject to strict conditions:

- The 529 account must have been **open for at least 15 years**
- Contributions (and their earnings) made in the **last 5 years** are ineligible
- The rollover is capped at the **annual IRA contribution limit** each year and counts against it
- **Lifetime cap of $35,000** per beneficiary
- The beneficiary must have **earned income** at least equal to the amount rolled over; the Roth income phaseout does **not** apply

## Coverdell Education Savings Account (ESA)

- Contribution limit of **$2,000 per beneficiary per year** from all sources combined — small, and **not indexed**
- Contributor **income phaseouts** apply (roughly $95,000–$110,000 single, $190,000–$220,000 joint), a limit a 529 does not have
- Contributions must stop when the beneficiary reaches **age 18**, and the account must generally be **used by age 30** or distributed (special-needs beneficiaries excepted)
- Broad flexibility for **K-12 expenses** — not just tuition but tutoring, uniforms, and transportation — which is its remaining advantage over a 529
- **Self-directed**: the account holder chooses individual securities, unlike the pre-set 529 menus
- Unused balances may be rolled to a family member under 30

## UTMA and UGMA custodial accounts

A gift to a minor under the **Uniform Transfers to Minors Act** (or the older, narrower **UGMA**) is:

- **Irrevocable** — the gift is complete and cannot be taken back
- Titled with **one custodian and one minor**, and the custodian must manage the property prudently for the minor's benefit
- **The minor's property**, using the minor's Social Security number, taxed to the minor under the **kiddie tax** (a small amount of unearned income is tax-free, the next slice at the child's rate, and the excess at the **parents' marginal rate**)

Drawbacks as an education vehicle: the money becomes the **child's outright at the age of majority** (18 to 25 depending on the state) to spend on anything, it is counted as a **student asset at about 20%** for financial aid, and there is **no tax-free growth**. UTMA allows any property, including real estate and intangibles; UGMA is generally limited to securities, cash, and insurance.

## ABLE accounts

A **Section 529A ABLE account** is for an individual whose qualifying disability began before a statutory age threshold (**26**, rising to **46** for tax years beginning after 2025). Contributions are after-tax, growth is tax-deferred, and withdrawals for **qualified disability expenses** — education, housing, transportation, assistive technology, health care, employment training — are tax-free. Contributions are limited to the **annual gift tax exclusion** (plus additional amounts for an employed beneficiary who is not participating in a workplace retirement plan). The essential planning point: an ABLE balance up to **$100,000 is disregarded for SSI**, and the account is disregarded entirely for **Medicaid**, so the account preserves means-tested benefits that outright ownership would destroy.

## Savings bond education exclusion

Interest on **Series EE and Series I bonds** issued after 1989 may be excluded from income when redeemed for qualified higher education expenses, but the conditions are narrow: the **owner must have been at least 24** at issuance, the bonds must be titled in the **parent's name** (not the child's), the expenses must be **tuition and fees only**, and the exclusion **phases out at indexed income levels**. Married taxpayers must file jointly.

## Choosing among vehicles

| Client priority | Best fit |
| --- | --- |
| High income, large sums, keep control | **529 savings plan** |
| Lock in in-state public tuition | **529 prepaid** |
| Broad K-12 costs, wants to pick securities | **Coverdell ESA** |
| Wants an irrevocable gift usable for anything | **UTMA/UGMA** |
| Disabled beneficiary on means-tested benefits | **ABLE account** |`,
  pitfalls: [
    "529 contributions are never deductible on the FEDERAL return — the deduction some clients receive is a STATE benefit and often only for the home-state plan.",
    "The 529 ACCOUNT OWNER keeps control and can change the beneficiary; a UTMA gift is irrevocable and belongs to the child, who takes it outright at the age of majority.",
    'Only the EARNINGS portion of a non-qualified 529 withdrawal is taxed and penalized; the contributions come out tax-free, and the 10% penalty is waived (but earnings still taxed) for scholarship, death, or disability.',
    "A Coverdell has income phaseouts for the contributor and a $2,000 annual cap; a 529 has neither. Recommending a Coverdell to a high earner is a classic wrong answer.",
    'A parent-owned 529 counts as a parental asset at roughly 5.64% for aid, while a UTMA counts as a student asset at about 20% — the aid math favors the 529 substantially.',
    "The 529-to-Roth rollover is not a general escape hatch: the account must be 15 years old, the last five years of contributions are excluded, the beneficiary needs earned income, and the lifetime cap is $35,000.",
  ],
  keyTerms: [
    {
      term: '529 savings plan',
      definition:
        'A state-sponsored account funded with after-tax dollars in which earnings grow tax-deferred and withdrawals for qualified education expenses are federally tax-free; the account owner retains control and may change the beneficiary.',
    },
    {
      term: '529 prepaid tuition plan',
      definition:
        "A 529 variant that locks in future tuition at today's prices, typically at in-state public institutions, hedging tuition inflation but offering less flexibility than a savings plan.",
    },
    {
      term: 'Five-year gift tax averaging (superfunding)',
      definition:
        'An election allowing a donor to contribute up to five times the annual gift tax exclusion to a 529 in one year and treat it as made ratably over five years for gift tax purposes.',
    },
    {
      term: 'Qualified education expense',
      definition:
        'Tuition, fees, books, supplies, required equipment, and — for at least half-time students — room and board within the school allowance; also apprenticeship costs, capped K-12 tuition, and up to $10,000 lifetime of student loan repayment.',
    },
    {
      term: 'Coverdell ESA',
      definition:
        'An education account limited to $2,000 per beneficiary per year with contributor income phaseouts, contributions ending at beneficiary age 18 and use required by age 30, offering self-directed investments and broad K-12 flexibility.',
    },
    {
      term: 'UTMA custodial account',
      definition:
        "An irrevocable gift of property to a minor managed by a custodian until the state's age of majority, at which point the beneficiary takes the assets outright to use for any purpose.",
    },
    {
      term: 'Kiddie tax',
      definition:
        "The rule taxing a dependent child's unearned income above a small indexed threshold at the parents' marginal rate, which limits the tax benefit of shifting income to children.",
    },
    {
      term: 'ABLE account',
      definition:
        'A Section 529A account for an individual whose disability began before the statutory age threshold, allowing tax-free withdrawals for qualified disability expenses while preserving eligibility for SSI and Medicaid.',
    },
  ],
  confusions: [
    {
      dont: 'A 529 plan, where the owner keeps control and can change beneficiaries',
      with: 'A UTMA/UGMA account, which is an irrevocable gift owned by the minor',
    },
    {
      dont: 'A 529 savings plan whose value fluctuates with the markets',
      with: 'A 529 prepaid tuition plan that locks in tuition credits rather than a dollar balance',
    },
    {
      dont: 'A Coverdell ESA, with a $2,000 limit, income phaseouts, and age deadlines',
      with: 'A 529 plan, with no income limits, very high aggregate caps, and no age deadline',
    },
    {
      dont: 'A parent-owned 529 assessed as a parental asset at roughly 5.64% for financial aid',
      with: 'A custodial account assessed as a student asset at roughly 20%',
    },
    {
      dont: 'An ABLE account for qualified disability expenses that preserves means-tested benefits',
      with: 'A special needs trust, a separate legal arrangement with no contribution ceiling but far more complexity',
    },
  ],
};
