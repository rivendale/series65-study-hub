import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'education-accounts',
  title: 'Education and Special-Needs Accounts',
  weight: '~2%',
  order: 25,
  summary:
    "Education funding questions are almost always scenario-based: given a family's income, time horizon, and control preferences, which vehicle fits? Know the 529 inside out, then the narrower niches filled by Coverdell ESAs, UTMA/UGMA accounts, ABLE accounts, and savings bonds.",
  body: `## Start with the sequencing problem

Before any vehicle question, get the ordering right, because the exam tests judgment as often as mechanics. **Retirement funding comes before education funding.** The reason is not sentiment but the absence of alternatives: a student can borrow, receive aid, work, choose a cheaper school, or take longer, while **no one lends money for retirement**. A parent who underfunds a 401(k) to fill a 529 has swapped a problem with many solutions for a problem with none, and may end up dependent on the child the education was meant to launch. Two corollaries: **capture the full employer match first**, and where an emergency reserve is also unfunded, **the reserve wins** — its failure mode is credit-card debt at rates that swamp any education tax benefit.

## Section 529 plans

A **529 plan** is a state-sponsored, tax-advantaged education savings vehicle authorized by Section 529 of the Internal Revenue Code. Two flavors:

- **529 savings plan** — the dominant type. Contributions buy units in investment portfolios (age-based/target-enrollment tracks and static options). The value **fluctuates with the markets**, with **no guarantee** it will cover tuition.
- **529 prepaid tuition plan** — locks in future tuition at today's prices, usually at in-state public institutions. It hedges tuition inflation but is narrower, often carries residency requirements, and may have only a limited state guarantee.

The two solve different problems. A savings plan leaves the family holding both **market risk** and **tuition inflation risk**: if tuition compounds faster than the portfolio, the account falls short. A prepaid plan hands the **inflation risk back to the state**, which matters because education costs have historically outrun general inflation. The price is flexibility — prepaid credits are denominated in **in-state public tuition**, so a child who chooses a private or out-of-state school typically receives only a **cash-value equivalent**, often contributions plus a modest fixed return. Several prepaid programs have closed to new entrants or diluted guarantees when funding ratios fell, so "state-backed" is not "state-guaranteed."

### Tax treatment

Contributions are made with **after-tax dollars — never federally deductible**. Earnings grow **tax-deferred**, and withdrawals for **qualified expenses are entirely federal-income-tax-free**. Many states offer a **state income tax deduction or credit**, often only for the resident's own state plan — the main reason to prefer a home-state plan. Otherwise a client may use **any state's plan for a beneficiary in any state**.

That state overlay drives the real recommendation. Ask in order: **does my state offer a deduction or credit at all** (several have no income tax, and a few give the benefit for *any* state's plan, called tax parity); **how large is it and is it capped**; and **does the home plan have competitive options and expenses?** A generous state credit usually justifies the home-state plan even with a mediocre lineup; a small deduction rarely justifies paying an extra 40 basis points a year for eighteen years. Watch for **recapture** — many states claw back prior deductions if the account is later rolled out of state or withdrawn non-qualified.

### Contribution rules

- **No federal income limits.** A high earner can fund a 529 — this is the standard answer when a client is phased out of everything else.
- **No annual dollar cap** in the statute, but contributions are **gifts** for gift tax purposes, so the practical measure is the **annual gift tax exclusion**, an indexed figure you should look up for the current year rather than memorize.
- **Five-year gift tax averaging ("superfunding")** — a donor may contribute **up to five times the annual exclusion at once** and elect on a gift tax return to spread it over five years. A married couple electing **gift splitting** can therefore front-load ten times the exclusion for a single beneficiary. The economic point is time in the market: money contributed in year one compounds tax-free for the whole horizon rather than trickling in. Two cautions — the donor makes **no further annual-exclusion gifts to that beneficiary** during the five years without eating into the lifetime exemption, and if the donor **dies within the five years** the unused portion is pulled back into the estate.
- **Aggregate limits** are set by each **state**, based on the estimated cost of a full education, commonly **$300,000 to $600,000+** per beneficiary. Once the account reaches the cap, no further contributions are accepted, though growth may continue.

### Qualified expenses

- **Tuition, fees, books, supplies, and required equipment** at eligible post-secondary institutions
- **Room and board**, if the student is enrolled **at least half time**, capped at the school's published cost of attendance allowance
- **Computers, software, and internet access** used primarily by the beneficiary while enrolled
- **K-12 tuition**, limited to a **per-beneficiary annual cap** (originally $10,000, raised by later legislation — treat the figure as a statutory cap that has been increased rather than a permanent number)
- **Registered apprenticeship program** fees, books, supplies, and equipment
- **Qualified student loan repayment**, subject to a **$10,000 lifetime cap per beneficiary**, plus a separate $10,000 for each of the beneficiary's siblings

The boundaries are tested more than the list. **Transportation is never qualified** — flights home at the holidays come out of after-tax money. **Health insurance and campus fees for optional services** are generally not qualified. **Room and board is qualified only up to the school's own published allowance**, so a student in a luxury off-campus apartment can spend more than the account can cover tax-free. And the **K-12 and apprenticeship uses are narrower than the college use**: K-12 covers **tuition only** at the capped amount, not books, tutoring, or uniforms.

### Control, beneficiary changes, and non-qualified withdrawals

The **account owner — not the beneficiary — controls the account**, including the right to change the beneficiary or take the money back. That is the key structural difference from a custodial account, and the reason a 529 is the right recommendation when a parent or grandparent wants to keep control.

Control also solves the "what if she does not go" objection, which is the most common client hesitation and a frequent exam stem. The beneficiary may be changed **without tax consequence to a member of the beneficiary's family**, broadly defined: siblings and their spouses, parents, children, nieces and nephews, aunts and uncles, first cousins, in-laws, and **the account owner themselves**. So a parent may redirect an unused account to a younger sibling, to a future grandchild, or back to their own name for a graduate degree. A change to a beneficiary **one or more generations below** the current one can raise generation-skipping transfer tax issues.

A **non-qualified withdrawal** is taxed only on the **earnings portion**, at the recipient's ordinary rate, **plus a 10% penalty on the earnings**. The contribution portion always comes out free, because it was never deducted. Every withdrawal is **pro rata**: the account cannot elect to distribute "just basis." The 10% penalty is **waived** — but the earnings are still taxable — for death, disability, receipt of a scholarship (up to the scholarship amount), and attendance at a U.S. military academy. Note that the scholarship exception is a **refund valve, not a windfall**: the family still owes ordinary income tax on the earnings it pulls out.

### Financial aid treatment

A 529 owned by a **parent or by the dependent student** is reported as a **parental asset** on the FAFSA, assessed at a maximum of roughly **5.64%** — far gentler than the **20%** rate applied to a student's own assets. Under current FAFSA rules, distributions from a **grandparent-owned 529 are no longer counted as student income**, which removed the old "grandparent trap."

Understand why that trap was so damaging, because the mechanic still governs other assets. Aid formulas hit **income** far harder than **assets**: student income above a protected allowance was assessed at up to **50%**, versus 20% for student assets and 5.64% for parental assets, so a grandparent's $20,000 tuition payment could cut aid by as much as $10,000 the next year. Removing that penalty makes a **grandparent-owned 529 unusually efficient** — the asset sits outside the parent's balance sheet and the distribution no longer counts as student income. **Institutional** formulas such as the CSS Profile may still ask about grandparent assets, so the federal answer is not automatically the answer at a given school.

### 529-to-Roth rollovers

Leftover 529 money may be rolled into a **Roth IRA for the beneficiary**, subject to strict conditions:

- The 529 account must have been **open for at least 15 years**
- Contributions (and their earnings) made in the **last 5 years** are ineligible
- The rollover is capped at the **annual IRA contribution limit** each year and counts against it
- A **statutory lifetime cap per beneficiary** applies — look up the current figure rather than assuming it
- The beneficiary must have **earned income** at least equal to the amount rolled over; the Roth income phaseout does **not** apply

Read the conditions together and the design becomes obvious: this is a **modest release valve for genuine over-funding, not a Roth-funding strategy**. The 15-year seasoning stops a parent from opening an account solely to convert it, the five-year lookback stops a last-minute deposit from being laundered into a Roth, and the annual limit means a family with a meaningful leftover balance will need several years of rollovers. Changing the beneficiary may also restart the 15-year clock, an unsettled point that argues for caution.

## Coverdell Education Savings Account (ESA)

- Contribution limit of **$2,000 per beneficiary per year** from all sources combined — small, and **not indexed**
- **Contributor income phaseouts** apply (indexed; look up the current thresholds), a limit a 529 does not have
- Contributions must stop when the beneficiary reaches **age 18**, and the account must generally be **used by age 30** or distributed (special-needs beneficiaries excepted)
- Broad flexibility for **K-12 expenses** — not just tuition but tutoring, uniforms, and transportation — which is its remaining advantage over a 529
- **Self-directed**: the account holder chooses individual securities, unlike the pre-set 529 menus
- Unused balances may be rolled to a family member under 30

The Coverdell survives for two narrow reasons: **breadth of K-12 spending** and **investment control**. A family paying for private-school tutoring and uniforms can use Coverdell dollars a 529 cannot reach, and only here can the investor hold individual securities rather than a plan menu. Against that, the $2,000 cap means a Coverdell alone will never fund a degree. The exam framing is **supplement, not substitute**. Note the phaseout applies to the **contributor**, so a high-income grandparent is blocked even though the beneficiary's own income is irrelevant.

## UTMA and UGMA custodial accounts

A gift to a minor under the **Uniform Transfers to Minors Act** (or the older, narrower **UGMA**) is:

- **Irrevocable** — the gift is complete and cannot be taken back
- Titled with **one custodian and one minor**, and the custodian must manage the property prudently for the minor's benefit
- **The minor's property**, using the minor's Social Security number, taxed to the minor under the **kiddie tax** (a small amount of unearned income is tax-free, the next slice at the child's rate, and the excess at the **parents' marginal rate**)

Drawbacks as an education vehicle: the money becomes the **child's outright at the age of majority** (18 to 25 depending on the state) to spend on anything, it is counted as a **student asset at about 20%** for financial aid, and there is **no tax-free growth**. UTMA allows any property, including real estate and intangibles; UGMA is generally limited to securities, cash, and insurance.

Put those together and the custodial account loses to a 529 on almost every education question: worse tax treatment, worse aid treatment, and no control at the moment control matters most. Its remaining uses are narrow — a gift that is **not** for education, property a 529 cannot hold, or a completed gift where irrevocability is the *point*. One trap: a custodian who spends UTMA money on the child's **support obligations** (food, shelter, schooling a parent must legally provide) can pull the assets back into the parent's estate and may breach the custodial duty.

## ABLE accounts

A **Section 529A ABLE account** is for an individual whose qualifying disability began before a statutory age threshold (**26**, rising to **46** for tax years beginning after 2025). Contributions are after-tax, growth is tax-deferred, and withdrawals for **qualified disability expenses** — education, housing, transportation, assistive technology, health care, employment training — are tax-free. Contributions are limited to the **annual gift tax exclusion** (plus additional amounts for an employed beneficiary who is not participating in a workplace retirement plan). The essential planning point: an ABLE balance up to **$100,000 is disregarded for SSI**, and the account is disregarded entirely for **Medicaid**, so the account preserves means-tested benefits that outright ownership would destroy.

## Savings bond education exclusion

Interest on **Series EE and Series I bonds** issued after 1989 may be excluded from income when redeemed for qualified higher education expenses, but the conditions are narrow: the **owner must have been at least 24** at issuance, the bonds must be titled in the **parent's name** (not the child's), the expenses must be **tuition and fees only**, and the exclusion **phases out at indexed income levels**. Married taxpayers must file jointly.

## Scenario: two grandparents, two vehicles

Ellen and Ray want to help their four-year-old granddaughter. Their tax adviser suggests a UTMA because "it is simple." Their daughter's household expects to qualify for need-based aid.

Walk the differences. A **UTMA** is an irrevocable gift: at 18 or 21 she takes it outright with no obligation to spend it on school, it is a **student asset assessed at about 20%** for aid, its growth is taxed annually under the kiddie tax, and Ellen and Ray cannot redirect it if she wins a scholarship or does not enroll. A **grandparent-owned 529** stays on their balance sheet, is **not reported as a parental or student asset**, produces **no annual tax drag**, and can be redirected to a sibling, a cousin, or back to Ellen for a late-life course. UTMA wins only if the goal is *not* education. On these facts the 529 dominates, and the "simple" answer is the wrong one.

## Balancing the goals

When resources are finite, quantify rather than debate. Where education is underfunded the levers are **more time, more contribution, more risk, or a cheaper school**, and only the last three are usually still available. **Aid, scholarships, work, and loans** all fill an education gap, and the child has forty working years to repay while the parent has none. Funding 60% of a projected cost with a clear plan for the rest beats funding 100% at the price of a retirement shortfall.

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
    "The 529-to-Roth rollover is not a general escape hatch: the account must be 15 years old, the last five years of contributions are excluded, the beneficiary needs earned income, each year is capped at the annual IRA limit, and a statutory lifetime cap applies per beneficiary.",
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
    {
      dont: 'Aid formulas assessing student INCOME at up to 50% above the protected allowance',
      with: 'Aid formulas assessing student ASSETS at about 20% and parental assets at about 5.64%',
    },
  ],
  workedExamples: [
    {
      title: 'Projecting the cost of four years of college',
      setup:
        "A client's daughter is five years old and expected to start a four-year program 13 years from now. The current all-in annual cost at the target school is $32,000. Assume education costs inflate at 5.00% per year and that each year of school is paid at the start of that academic year. What total will the family need?",
      steps: [
        'Step 1 — identify the four payment dates in years from today: year 13 (freshman), year 14, year 15, and year 16. The last payment is 16 years away, not 13, and that is where most errors start.',
        'Step 2 — inflate the freshman year: $32,000 x 1.05^13. The factor 1.05^13 = 1.885649, so the cost is $60,340.77.',
        'Step 3 — sophomore year: $32,000 x 1.05^14. The factor is 1.979932, giving $63,357.81.',
        'Step 4 — junior year: $32,000 x 1.05^15. The factor is 2.078928, giving $66,525.70.',
        'Step 5 — senior year: $32,000 x 1.05^16. The factor is 2.182875, giving $69,851.99.',
        'Step 6 — add the four figures: $60,340.77 + $63,357.81 + $66,525.70 + $69,851.99 = $260,076.27.',
        "Step 7 — sanity-check the magnitude. Four years at today's $32,000 would be $128,000, so inflation has roughly doubled the bill over 16 years. At 5% a year, costs double in about 14 years, so a slightly more than doubled total is exactly what should be expected.",
      ],
      answer:
        "Roughly $260,076 in future dollars — $60,341, $63,358, $66,526, and $69,852 for the four years — versus $128,000 at today's prices.",
      watchOut:
        'Inflating only to year 13 and then multiplying by four, which gives 4 x $60,340.77 = $241,363 and understates the goal by nearly $19,000. Each additional year of school is one more year of inflation. The mirror error is using 4 x $32,000 = $128,000 and inflating that lump to year 13, which produces the same wrong figure.',
    },
    {
      title: 'The five-year gift election with gift splitting',
      setup:
        "Assume for this exercise that the annual gift tax exclusion is $18,000 per donee (a stated given; the real figure is indexed and must be looked up). A married couple wants to front-load a 529 for one grandchild and contributes $150,000 in a single year, electing five-year gift tax averaging and gift splitting. Is any of it a taxable gift, what filing is required, and how much room remains?",
      steps: [
        'Step 1 — find one donor ceiling: five times the annual exclusion is 5 x $18,000 = $90,000.',
        'Step 2 — find the couple ceiling. With gift splitting, each spouse is treated as making half of every gift, so together they may front-load 2 x $90,000 = $180,000 for this one beneficiary.',
        'Step 3 — compare the contribution to the ceiling: $150,000 is below $180,000, so the entire amount fits inside the election.',
        'Step 4 — spread the gift. The election treats the contribution as made ratably over five years: $150,000 / 5 = $30,000 deemed given per year.',
        'Step 5 — split each deemed year between the spouses: $30,000 / 2 = $15,000 attributed to each spouse per year.',
        'Step 6 — test each spouse against the exclusion: $15,000 is less than $18,000, so no taxable gift arises in any of the five years and no lifetime exemption is consumed.',
        'Step 7 — compute the remaining room. Each spouse has $18,000 - $15,000 = $3,000 of unused exclusion for this grandchild in each of the five years, or $6,000 combined per year.',
        'Step 8 — note the filing. Both the five-year election and gift splitting must be made on a gift tax return, so a Form 709 is required for each spouse even though no tax is due.',
        'Step 9 — test the boundary. Had they contributed $200,000, the first $180,000 would spread over five years and the excess $200,000 - $180,000 = $20,000 would be a gift in the year of contribution, applied against lifetime exemption.',
      ],
      answer:
        'No taxable gift. The $150,000 is treated as $30,000 per year for five years, split into $15,000 per spouse per year, which is under the $18,000 exclusion. Form 709 is still required from each spouse to make the elections, and $6,000 of combined annual room remains for that grandchild.',
      watchOut:
        'Forgetting that the couple ceiling is TEN times the exclusion, not five, and concluding that $150,000 exceeds a $90,000 limit by $60,000. The other frequent error is assuming no return is needed because no tax is owed — the election itself only exists if a Form 709 is filed.',
    },
    {
      title: 'Tax and penalty on a non-qualified 529 withdrawal',
      setup:
        "A 529 account is worth $60,000, made up of $45,000 of contributions and $15,000 of earnings. The owner withdraws $20,000 to buy a car — an entirely non-qualified use. The recipient's marginal ordinary rate is 22%. What does the withdrawal actually cost?",
      steps: [
        'Step 1 — compute the earnings ratio for the whole account: $15,000 / $60,000 = 0.25, or 25%.',
        'Step 2 — apply that ratio to the withdrawal, because every distribution comes out pro rata. Earnings portion = 0.25 x $20,000 = $5,000.',
        'Step 3 — identify the basis portion: $20,000 - $5,000 = $15,000. This was contributed with after-tax dollars and was never deducted, so it comes out entirely free of tax and penalty.',
        'Step 4 — tax the earnings at the ordinary rate: 0.22 x $5,000 = $1,100.',
        'Step 5 — apply the 10% additional tax to the same earnings only: 0.10 x $5,000 = $500.',
        'Step 6 — total the cost: $1,100 + $500 = $1,600. Net cash to the owner = $20,000 - $1,600 = $18,400, an effective cost of 8% of the withdrawal.',
        'Step 7 — test the scholarship variant. If the daughter had received a $20,000 scholarship and the withdrawal matched it, the 10% penalty of $500 would be waived but the $1,100 of income tax would still be owed. The exception forgives the penalty, never the tax.',
      ],
      answer:
        'The withdrawal costs $1,600 — $1,100 of income tax plus a $500 penalty, both computed only on the $5,000 earnings portion. The owner nets $18,400.',
      watchOut:
        'Taxing and penalizing the entire $20,000, which produces 0.22 x $20,000 = $4,400 plus 0.10 x $20,000 = $2,000, or $6,400 — four times the true cost. Only the EARNINGS portion is ever exposed, and the earnings ratio comes from the whole account, not from the withdrawal.',
    },
  ],
};
