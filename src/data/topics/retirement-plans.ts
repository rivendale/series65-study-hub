import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'retirement-plans',
  title: 'Retirement Plans and Accounts',
  weight: '~4%',
  order: 23,
  summary:
    "Retirement accounts are the heaviest single subject inside the recommendations category. You need the IRA rules cold, the difference between the main employer plan types, the mechanics of rollovers, and the post-SECURE 2.0 distribution rules including age 73 RMDs and the 10-year rule for inherited accounts.",
  body: `## Traditional IRA vs Roth IRA

Both are individual accounts funded with **earned income** (wages, self-employment income, and taxable alimony under pre-2019 agreements). Investment income, Social Security, and pension payments are **not** earned income. There is **no age limit** on contributing to either type — that restriction was repealed.

The annual contribution limit is **indexed for inflation** and moves most years; as of 2026 it sits in the **$7,000–$7,500** range, with an additional **catch-up of about $1,000 for those 50 and older** (also now indexed). The limit is an aggregate across all of a person's IRAs, not per account.

### Deductibility of a Traditional IRA contribution

Anyone with earned income may **contribute**; whether the contribution is **deductible** depends on plan coverage and income.

| Situation | Deduction |
| --- | --- |
| Neither spouse covered by a workplace plan | Fully deductible at any income |
| Contributor covered by a workplace plan | Phased out over an indexed MAGI range |
| Not covered, but spouse is covered | Phased out over a much higher indexed range |

A **non-deductible** contribution is still allowed above the phaseout. It creates **basis** in the IRA, tracked on the tax return, so a later distribution is only partly taxable.

### Roth IRA

Contributions are **never deductible**; qualified distributions are **entirely tax-free**. Direct Roth contributions are barred above an indexed MAGI phaseout. That restriction is what makes the **backdoor Roth** — a non-deductible Traditional contribution followed by a conversion — a common technique. Warn clients about the **pro-rata (aggregation) rule**: if the client holds other pre-tax IRA money, the conversion is taxed proportionally across all IRA balances, not just the new non-deductible dollars.

### Qualified Roth distributions and the five-year rule

A Roth withdrawal is tax-free and penalty-free only if it is **qualified**, which requires **both**:

1. **Five taxable years** have passed since the first contribution to any Roth IRA, **and**
2. One of: age **59½**, death, disability, or a **first-time home purchase (lifetime cap of $10,000)**.

Roth IRA distributions follow **ordering rules**: contributions come out first (always tax- and penalty-free), then conversions, then earnings. Each **conversion** carries its own separate five-year clock for the 10% penalty.

Keep the two five-year clocks apart. The **contribution clock** starts once, with the first dollar into any Roth IRA, never restarts, and governs whether **earnings** come out tax-free. The **conversion clock** starts separately for each conversion and governs only the **10% penalty** on that conversion before 59½. A client over 59½ ignores the conversion clocks entirely.

### Choosing between them is a rate forecast

The decision reduces to one question: **is the client's marginal rate higher today or at withdrawal?** A deduction taken at 32% and repaid at 12% favors Traditional; a deduction skipped at 12% to buy tax-free growth favors Roth. At the same rate in both periods the two are mathematically identical, as the worked example below shows.

Everything else is a tiebreaker, and the tiebreakers mostly favor Roth: no lifetime RMDs for the original owner; a tax-free asset is a better inheritance, since the beneficiary must empty it inside ten years either way; and Roth withdrawals do not inflate the income that drives Social Security taxation and Medicare premiums. Against Roth: a certain deduction is surrendered for a benefit that depends on tax law decades away.

## Distributions

### Required minimum distributions

Under SECURE 2.0, RMDs from Traditional IRAs and most employer plans begin at **age 73**, rising to **age 75 in 2033**. The first RMD may be delayed to **April 1 of the year after** the year the owner reaches the applicable age, but then two distributions fall in the same tax year.

- The **excise tax on a shortfall is 25%**, reduced to **10%** if corrected within a two-year correction window.
- **Roth IRAs have no RMDs during the owner's lifetime.** As of 2024, **designated Roth accounts inside employer plans also have no lifetime RMDs**.
- A **still-working exception** can delay RMDs from the current employer's plan for a non-owner participant. It never applies to IRAs.

#### The first-year trap

Delaying the first RMD to April 1 sounds like free deferral and is not: the second RMD is still due by **December 31 of that same year**, so two distributions land in one tax year — pushing the client into a higher bracket, exposing more Social Security to tax, and raising Medicare premiums two years later.

#### Which accounts can be combined

| Account type | May the RMD be aggregated? |
| --- | --- |
| Multiple **traditional IRAs** | Compute for each, take the **total from any one** or any combination |
| Multiple **403(b)** accounts | Aggregate among themselves only |
| **401(k)** and other qualified plans | **No** — compute and take separately from each plan |
| Across categories | **Never** |

The factor comes from the **Uniform Lifetime Table**, except where the sole beneficiary is a spouse more than 10 years younger, in which case the more favorable Joint and Last Survivor Table applies. A **qualified charitable distribution** paid directly from an IRA to a charity beginning at 70½ counts toward the RMD and is excluded from income, up to an annual indexed limit.

### The 10% early withdrawal penalty

Distributions before **59½** carry a 10% penalty on top of ordinary income tax. Exceptions tested most often:

- **Death** and **total, permanent disability**
- **Substantially equal periodic payments (SEPP / 72(t))** — must continue for the longer of five years or until 59½
- Unreimbursed **medical expenses** above the AGI floor
- **Qualified higher education expenses** (IRA only)
- **First-time home purchase**, $10,000 lifetime (IRA only)
- **Birth or adoption**, up to $5,000 per child
- Health insurance premiums while **unemployed** (IRA only)
- IRS levy; qualified reservist; certain disaster, terminal illness, and domestic abuse distributions added by SECURE 2.0
- From an **employer plan only**: separation from service in or after the year the participant turns **55** (age 50 or 25 years of service for qualified public safety employees)

Note the split: **education and first-home exceptions are IRA-only**; the **age 55 separation-from-service exception is plan-only**.

## Employer-sponsored plans

- **401(k)** — elective salary deferrals up to an indexed limit (roughly **$24,000** in 2026) with an age-50 catch-up. **SECURE 2.0 adds an enhanced catch-up for ages 60, 61, 62, and 63** equal to the greater of about $10,000 or 150% of the regular catch-up, indexed. Higher-paid participants must make catch-ups on a **Roth** basis.
- **Roth 401(k)** — after-tax deferrals, tax-free qualified withdrawals, and **no income limit** to participate, unlike a Roth IRA.
- **403(b) / TSA** — for public school and 501(c)(3) employees; historically limited to annuities and mutual funds.
- **457(b)** — deferred compensation for state and local government and some tax-exempt employers. Its distinguishing feature: a **governmental** 457(b) carries **no 10% early withdrawal penalty** on separation from service, regardless of age. Keep the two varieties apart, because the exam does. A **tax-exempt employer ("top hat") 457(b)** is unfunded deferred compensation available only to a select group of management or highly compensated employees: the assets remain **subject to the employer's creditors**, distributions are generally available **only at separation**, and the balance **cannot be rolled to an IRA**. Answering that "the 457(b) has no early withdrawal penalty" without asking which kind is how this gets missed.
- **Solo (individual) 401(k)** — for an owner-only business with no full-time employees besides the owner and spouse. The owner contributes in **two capacities**: an employee elective deferral plus an employer profit-sharing contribution up to **25% of compensation**, subject to a combined cap. That deferral piece usually permits a **larger** contribution than a SEP at the same income. Hiring one full-time non-spouse employee ends eligibility.
- **SEP IRA** — employer-funded only, contributions up to **25% of compensation** (capped at an indexed dollar limit), easy to establish, and the employer must generally cover all eligible employees at the **same percentage**.
- **SIMPLE IRA** — for employers with **100 or fewer employees**; employee deferrals plus a mandatory employer **3% match or 2% non-elective** contribution. Employee deferrals are **immediately 100% vested**. Watch the **25% penalty** on withdrawals within the first two years of participation.
- **Defined benefit** — the employer promises a formula-based benefit and bears the investment risk; favors older, highly paid owners.
- **Defined contribution** (profit-sharing, money purchase, 401(k)) — the contribution is defined and the **employee bears the investment risk**. A **profit-sharing** plan allows discretionary contributions; a **money purchase** plan requires a fixed formula every year.
- **Vesting** — employee deferrals are always immediately vested. Employer money may vest on a **cliff** (all at once, e.g. after three years) or **graded** schedule. **Safe harbor** plans make immediately vested employer contributions in exchange for automatically passing nondiscrimination testing.

Qualified plans must be in writing, non-discriminatory, for the exclusive benefit of employees, and communicated to participants.

### 401(k), 403(b), and 457(b) side by side

| | **401(k)** | **403(b)** | **457(b)** |
| --- | --- | --- | --- |
| Sponsor | Any employer | Public schools, 501(c)(3) | State/local government, some tax-exempts |
| Investments | Whatever the plan offers | Historically annuities and mutual funds | Plan menu |
| Early withdrawal penalty | 10% before 59½ | Same | **None on separation, at any age** |
| Age-55 separation exception | Yes | Yes | Not needed |
| ERISA | Yes | Sometimes | Governmental plans, no |
| Rollover to an IRA | Yes | Yes | Governmental 457(b), yes |

The exam's favorite fact is the 457(b) penalty exemption. A separated 50-year-old draws on a governmental 457(b) with no 10% penalty; the same withdrawal from a 401(k) at 50 is penalized unless another exception applies. The trap: **rolling a 457(b) into an IRA destroys that advantage**, since IRA distributions before 59½ are penalized normally.

### Who bears the risk

The defined benefit / defined contribution distinction is about **who carries investment and longevity risk**. A **defined benefit** plan promises a formula-based payment for life, so the employer bears the risk that returns disappoint or retirees live longer than assumed. A **defined contribution** plan ends the employer's promise at the contribution; the **employee** bears investment risk and the risk of outliving the balance — which is why glide paths, guaranteed income products, and safe withdrawal rate research exist at all.

## Rollovers and transfers

| Feature | Direct transfer (trustee-to-trustee) | Indirect (60-day) rollover |
| --- | --- | --- |
| Money touches the client | No | Yes |
| Frequency limit | **Unlimited** | **One per 12 months across all IRAs** |
| Deadline | None | **60 days** |
| Withholding from an employer plan | None | **20% mandatory** |

The 20% withholding trap: a participant taking a $100,000 distribution from a 401(k) receives $80,000 but must deposit **$100,000** within 60 days to avoid tax, making up the $20,000 from other funds. This is why **direct rollovers are almost always the right recommendation**.

### What the once-per-12-months rule does and does not cover

It **applies** to an IRA-to-IRA (or Roth-to-Roth) **60-day rollover**, counted across **all** of the taxpayer's IRAs over a **rolling 12 months**, not a calendar year. A second one makes the distribution taxable, penalized if under 59½, and an excess contribution in the receiving IRA. It does **not** apply to **trustee-to-trustee transfers**, **plan-to-IRA** or **IRA-to-plan** rollovers, or **Roth conversions**. Since a direct transfer does everything a 60-day rollover does with none of the limits, the rule is **never let the client touch the money**.

## Inherited accounts

The pre-2020 lifetime "stretch" is gone for most non-spouse beneficiaries. A designated beneficiary must generally **empty the account within 10 years** of the owner's death. Whether annual distributions are also required inside those ten years turns on when the owner died: **before** the required beginning date, no annual RMDs; **on or after** it, annual RMDs in years one through nine **and** the account empty by the end of year 10.

**Eligible designated beneficiaries** who may still stretch over life expectancy: the **surviving spouse**, a **minor child of the account owner** (only until majority, then a 10-year clock starts), a **disabled or chronically ill** individual, and a beneficiary **not more than 10 years younger** than the owner. A grandchild is not an EDB. Non-designated beneficiaries such as an estate, a charity, or a non-qualifying trust fall back on a **five-year rule** (or the decedent's remaining life expectancy if RMDs had begun).

A **surviving spouse** has the widest choices: treat the IRA as their own, remain a beneficiary, or use the 10-year rule. Treating it as their own suits an older spouse who does not need the money; remaining a beneficiary suits a spouse **under 59½** who does, because **distributions from an inherited IRA carry no 10% penalty at any age**.

An **inherited Roth** is still subject to the 10-year rule — tax-free does not mean distribution-free. Earnings come out tax-free provided the deceased owner's five-year clock was satisfied; the beneficiary inherits that clock rather than starting a new one.

## Social Security claiming basics

Claiming is one of the few genuinely irreversible choices a client makes. The benefit starts from the **primary insurance amount (PIA)**, computed from the highest **35 years** of inflation-indexed earnings — fewer than 35 years means zeros are averaged in, so one more working year late in a career can raise the benefit by replacing a zero.

**Full retirement age (FRA)** is **67** for anyone born in 1960 or later. From there:

- Claiming at the earliest age, **62**, permanently reduces the benefit by roughly **30%** of PIA when FRA is 67.
- Delaying past FRA earns **delayed retirement credits of 8% per year** to age **70**, roughly **24%** above PIA. Waiting past 70 adds nothing.
- Breakeven against an early claim typically falls in the early-to-mid eighties. **Longevity, not the breakeven table, drives the right answer.**
- **Spousal benefit** — up to **50%** of the worker's PIA at the spouse's own FRA. Delayed credits do **not** raise it, so never delay a purely spousal claim past FRA.
- **Survivor benefit** — up to **100%** of what the deceased worker received. This is why the **higher earner usually should delay**: that larger benefit becomes the survivor's and lasts as long as either spouse lives.
- **Earnings test** — claiming before FRA while working withholds benefits above an annual exempt amount ($1 for every $2 over, $1 for every $3 in the FRA year). Withheld amounts are **not lost** — the benefit is recomputed upward at FRA. Say "deferred," not "forfeited."

Benefits are also **partly taxable**: depending on provisional income (AGI plus tax-exempt interest plus half the benefit), up to **85%** is included in taxable income. Those thresholds are **not indexed**, so more retirees cross them every year — a strong argument for Roth assets, since Roth withdrawals do not enter provisional income at all.

## Scenario: the 56-year-old who just left his employer

Marcus is 56 and separated from service this year. He holds a **$600,000 401(k)** at his former employer, a **$150,000 traditional IRA** including **$30,000 of non-deductible basis**, and a **$90,000 Roth IRA** opened four years ago. He needs **$40,000** and is in the 22% bracket.

Take it **from the 401(k), before rolling anything**. Because he separated in or after the year he turned 55, the plan distribution escapes the 10% penalty: $40,000 of ordinary income, roughly **$8,800** of tax, no penalty.

Take it from the **traditional IRA** instead and two things go wrong. The **pro-rata rule** treats only 30,000 ÷ 150,000 = **20%** of any distribution as basis, so $8,000 is tax-free and $32,000 is taxable — about $7,040 of tax — and the 10% penalty applies to that taxable amount for another **$3,200**. Total **$10,240**, and $8,000 of basis is consumed. The age-55 exception does not exist in an IRA.

The **Roth** reaches contributions penalty-free but spends the account with the longest tax-free runway, and at four years its five-year clock is unmet.

For the rest of the 401(k): a **direct trustee-to-trustee rollover**, no check ever issued to Marcus, avoiding the 20% withholding and the 60-day clock. But note the cost of rolling — the moment the balance sits in an IRA the age-55 exception is gone for good. **A client under 59½ who may need more money before then has a real reason to leave part of the balance in the plan.**

## Other SECURE 2.0 items worth knowing

- **529-to-Roth rollovers** are permitted, subject to conditions covered in the education accounts topic.
- Employer **matching on student loan payments** is allowed.
- New 401(k) and 403(b) plans must generally use **automatic enrollment**.
- Employers may make **matching or non-elective contributions on a Roth basis**.`,
  pitfalls: [
    'RMDs now begin at age 73 (moving to 75 in 2033) — any answer choice built on the old 70½ or 72 trigger is a distractor.',
    "A Roth IRA has no RMDs during the owner's life, but an INHERITED Roth still must be emptied under the 10-year rule; tax-free does not mean distribution-free for beneficiaries.",
    "The first-home and higher-education penalty exceptions apply to IRAs only, while the age-55 separation-from-service exception applies to employer plans only. Match the exception to the account type.",
    "The one-rollover-per-12-months rule counts across ALL of a client's IRAs and applies only to indirect rollovers — direct trustee-to-trustee transfers are unlimited.",
    'An indirect rollover from an employer plan triggers 20% mandatory withholding, so the client must replace that 20% out of pocket within 60 days or it is treated as a taxable distribution.',
    "The backdoor Roth is not tax-free when the client holds other pre-tax IRA money — the pro-rata rule taxes the conversion across all IRA balances combined.",
  ],
  keyTerms: [
    {
      term: 'Earned income',
      definition:
        'Wages, salary, self-employment income, commissions, and taxable alimony under pre-2019 agreements — the only income that supports an IRA contribution. Interest, dividends, pensions, and Social Security do not count.',
    },
    {
      term: 'Five-year rule (Roth)',
      definition:
        'The requirement that five taxable years pass from the first Roth contribution before earnings can come out tax-free; a qualifying event such as age 59½, death, disability, or a first home is also required.',
    },
    {
      term: 'Required minimum distribution (RMD)',
      definition:
        'The annual amount that must be withdrawn from a Traditional IRA or employer plan beginning at age 73 under SECURE 2.0; a shortfall carries a 25% excise tax, reduced to 10% if timely corrected.',
    },
    {
      term: 'Substantially equal periodic payments (72(t))',
      definition:
        'A schedule of computed withdrawals that avoids the 10% early distribution penalty, which must continue for the longer of five years or until the owner reaches 59½.',
    },
    {
      term: 'Direct rollover / trustee-to-trustee transfer',
      definition:
        'A movement of retirement assets between custodians without the participant taking possession — unlimited in frequency, with no 60-day deadline and no 20% withholding.',
    },
    {
      term: 'Eligible designated beneficiary',
      definition:
        "A surviving spouse, minor child of the owner, disabled or chronically ill person, or someone not more than 10 years younger than the owner — the categories that may still stretch distributions over life expectancy instead of using the 10-year rule.",
    },
    {
      term: 'Defined benefit plan',
      definition:
        'A plan promising a formula-determined retirement benefit, with the employer bearing the funding and investment risk; contrasted with a defined contribution plan where the employee bears investment risk.',
    },
    {
      term: 'Safe harbor 401(k)',
      definition:
        'A plan design that makes fully vested employer matching or non-elective contributions in exchange for automatically satisfying nondiscrimination testing.',
    },
  ],
  confusions: [
    {
      dont: 'A direct transfer, which is unlimited and has no withholding',
      with: 'A 60-day indirect rollover, limited to one per 12 months for IRAs and subject to 20% withholding from employer plans',
    },
    {
      dont: 'The Roth IRA income limit, which blocks high earners from contributing directly',
      with: 'The Roth 401(k), which has no income limit at all',
    },
    {
      dont: 'A SEP IRA, funded entirely by the employer at a uniform percentage of pay',
      with: 'A SIMPLE IRA, funded by employee deferrals plus a mandatory 3% match or 2% non-elective contribution',
    },
    {
      dont: 'A profit-sharing plan with discretionary annual contributions',
      with: 'A money purchase plan requiring a fixed contribution formula every year',
    },
    {
      dont: 'The 10-year rule that applies to most designated beneficiaries',
      with: 'The five-year rule that applies to non-designated beneficiaries such as an estate',
    },
  ],
  formulas: [
    {
      name: 'Required minimum distribution',
      formula: 'RMD = Prior year-end account balance ÷ IRS life expectancy factor',
      note: "Uses the December 31 balance of the prior year and the Uniform Lifetime Table factor for the owner's age. Multiple IRAs may be aggregated for the withdrawal; 401(k) accounts generally may not.",
    },
    {
      name: 'RMD shortfall excise tax',
      formula: 'Penalty = 25% × (Required amount − Amount actually withdrawn)',
      note: 'Reduced to 10% if corrected within the two-year correction window under SECURE 2.0.',
    },
  ],
  workedExamples: [
    {
      title: 'Required minimum distribution and the excise tax on a shortfall',
      setup:
        "A client turns 73 this year and must take a first RMD from a Traditional IRA. The IRA balance on December 31 of the PRIOR year was $850,000. Assume the Uniform Lifetime Table factor for age 73 is 26.5. The client withdraws only $20,000 and does not correct the shortfall.",
      steps: [
        'Step 1 — identify the correct balance. The RMD always uses the prior December 31 balance, not the current balance and not an average.',
        'Step 2 — write the formula: RMD = prior year-end balance ÷ life expectancy factor.',
        'Step 3 — substitute: RMD = $850,000 ÷ 26.5.',
        'Step 4 — divide: $850,000 ÷ 26.5 = $32,075.47.',
        'Step 5 — measure the shortfall: $32,075.47 − $20,000 = $12,075.47 not taken.',
        'Step 6 — apply the excise tax: 25% × $12,075.47 = $3,018.87.',
        'Step 7 — note the correction relief. If the shortfall is made up inside the two-year correction window, the excise drops to 10% × $12,075.47 = $1,207.55.',
        'Step 8 — remember the excise is on top of ordinary income tax on the amount actually distributed. It is a penalty, not a substitute for the tax.',
      ],
      answer:
        'The RMD is $32,075.47. Taking only $20,000 leaves a $12,075.47 shortfall and a 25% excise tax of $3,018.87, reduced to $1,207.55 if timely corrected.',
      watchOut:
        "Multiplying by the life expectancy factor instead of dividing — $850,000 × 26.5 produces an absurd $22,525,000, which should be an instant signal the operation is inverted. The other frequent error is using the CURRENT year-end balance; the divisor year and the balance year are different on purpose.",
    },
    {
      title: 'The 20% mandatory withholding trap on an indirect rollover',
      setup:
        "A participant leaves an employer and asks for a check for the full $200,000 401(k) balance, intending to redeposit it into an IRA within 60 days. The participant is 52 years old and is in the 24% marginal bracket. How much arrives, and how much must be deposited?",
      steps: [
        'Step 1 — apply mandatory withholding. An eligible rollover distribution paid to the participant from an employer plan is subject to 20% federal withholding: 20% × $200,000 = $40,000.',
        'Step 2 — cash actually received: $200,000 − $40,000 = $160,000.',
        'Step 3 — determine what must be deposited. To roll over the FULL distribution, the participant must deposit $200,000 into the IRA within 60 days — the withheld amount does not get a pass.',
        'Step 4 — compute the out-of-pocket gap: $200,000 − $160,000 = $40,000 must come from other savings.',
        'Step 5 — if the participant deposits only the $160,000 received, the missing $40,000 is treated as a taxable distribution. Income tax: 24% × $40,000 = $9,600.',
        'Step 6 — add the early distribution penalty, since the participant is under 59½ and separation occurred before age 55: 10% × $40,000 = $4,000.',
        'Step 7 — total cost of the shortfall: $9,600 + $4,000 = $13,600. The $40,000 that was withheld is credited against that bill at filing, so the participant gets back $40,000 − $13,600 = $26,400 as a refund — many months later, and $13,600 poorer.',
        'Step 8 — the fix: a DIRECT trustee-to-trustee rollover has no withholding, no 60-day clock, and no annual frequency limit. Nothing about this problem exists if the check never goes to the participant.',
      ],
      answer:
        'The participant receives a check for $160,000 but must deposit $200,000 within 60 days, adding $40,000 from other funds. Depositing only the $160,000 makes $40,000 taxable, costing $9,600 of tax plus a $4,000 penalty — $13,600 in all.',
      watchOut:
        "Forgetting that the withheld 20% must still be replaced out of pocket. Students routinely answer that depositing the $160,000 received completes the rollover. It does not — the rollover is measured against the gross distribution, and the $40,000 withheld is only credited back as a tax prepayment when the return is filed, months later.",
    },
    {
      title: 'Graded vesting applied to an employer account balance',
      setup:
        "A participant with exactly 4 years of service leaves a 401(k) plan. The account holds $48,000 of the participant's own elective deferrals (plus earnings on them) and $30,000 of employer matching contributions. The plan uses a six-year graded schedule: 0% after year 1, 20% after year 2, 40% after year 3, 60% after year 4, 80% after year 5, 100% after year 6.",
      steps: [
        'Step 1 — separate the two buckets. Vesting schedules apply ONLY to employer money.',
        "Step 2 — employee elective deferrals are always 100% vested from day one: the full $48,000 belongs to the participant.",
        'Step 3 — read the schedule at 4 years of service: 60% vested.',
        'Step 4 — apply that percentage to the employer bucket only: 60% × $30,000 = $18,000.',
        'Step 5 — total vested balance: $48,000 + $18,000 = $66,000.',
        'Step 6 — compute the forfeiture: the unvested 40% of employer money, 40% × $30,000 = $12,000, is forfeited on separation.',
        'Step 7 — cross-check: $66,000 vested + $12,000 forfeited = $78,000, the full account balance.',
      ],
      answer:
        'The participant may roll over or keep $66,000 — all $48,000 of deferrals plus $18,000 of the match. $12,000 of unvested employer money is forfeited.',
      watchOut:
        "Applying the vesting percentage to the entire balance: 60% × $78,000 = $46,800 wrongly strips $19,200 of the participant's own deferrals. Employee contributions can never be forfeited. Contrast this with a CLIFF schedule, where 4 years of service under a 3-year cliff would mean 100% vested and no forfeiture at all.",
    },
    {
      title: 'Traditional versus Roth at a constant tax rate — why they tie',
      setup:
        "A client has $6,000 of PRE-TAX earnings available to save, faces a 24% marginal rate now, and expects a 24% rate in retirement. The money will be invested for 20 years at 7% per year. Compare a fully deductible Traditional IRA contribution with a Roth contribution funded from the same $6,000 of pre-tax earnings.",
      steps: [
        'Step 1 — Traditional path. The contribution is deductible, so all $6,000 of pre-tax earnings goes into the account; no tax is paid now.',
        'Step 2 — grow it: $6,000 × 1.07^20 = $6,000 × 3.869684 = $23,218.11.',
        'Step 3 — tax the entire withdrawal at 24%: $23,218.11 × (1 − 0.24) = $23,218.11 × 0.76 = $17,645.76 spendable.',
        'Step 4 — Roth path. Roth contributions are not deductible, so the $6,000 of earnings is taxed first: $6,000 × (1 − 0.24) = $4,560 is what can actually be contributed.',
        'Step 5 — grow it at the same rate: $4,560 × 3.869684 = $17,645.76.',
        'Step 6 — qualified Roth withdrawals are tax-free, so that full amount is spendable.',
        'Step 7 — see why they are identical: multiplication is commutative. $6,000 × 3.869684 × 0.76 and $6,000 × 0.76 × 3.869684 are the same product. Whether the 24% haircut is taken at the front or the back does not matter if the rate is unchanged.',
        'Step 8 — break the tie by changing the rate. If the retirement rate falls to 12%: Traditional = $23,218.11 × 0.88 = about $20,432, which beats the Roth $17,645.76. If it rises to 32%: Traditional = $23,218.11 × 0.68 = $15,788.31, and the Roth wins.',
      ],
      answer:
        'Both produce exactly $17,645.76 when the tax rate is the same at contribution and at withdrawal. The Traditional-versus-Roth decision turns entirely on whether the rate at withdrawal is expected to be lower or higher than the rate today.',
      watchOut:
        "Comparing a $6,000 Traditional contribution with a $6,000 Roth contribution. That is not an equal comparison: a $6,000 Roth contribution costs $7,894.74 of pre-tax earnings at a 24% rate, so it is a larger real commitment. Equalize the PRE-TAX dollars committed, or the Roth will always appear to win for the wrong reason.",
    },
    {
      title: 'The taxable portion of a Roth IRA withdrawal under the ordering rules',
      setup:
        "A client is 45 years old and opened a first Roth IRA nine years ago. The account holds $30,000 of regular contributions, a $20,000 conversion done three years ago, and $25,000 of earnings — $75,000 in total. The client withdraws $58,000. Assume a 22% ordinary marginal rate. No penalty exception applies.",
      steps: [
        'Step 1 — test whether the distribution is QUALIFIED. Five taxable years have passed (nine years), but the client is 45 — no age 59½, death, disability, or first-home event. So it is a NON-qualified distribution and the ordering rules apply layer by layer.',
        'Step 2 — layer one, regular contributions, come out first: $30,000. Always tax-free and penalty-free, at any age, in any year.',
        'Step 3 — remaining withdrawal after layer one: $58,000 − $30,000 = $28,000.',
        'Step 4 — layer two, conversions, come out next: the full $20,000. Conversion dollars were already taxed at conversion, so there is no income tax. But this conversion is only three years old and the client is under 59½, so the conversion five-year clock is not satisfied: a 10% penalty applies. 10% × $20,000 = $2,000.',
        'Step 5 — remaining withdrawal after layer two: $28,000 − $20,000 = $8,000. This must come from earnings.',
        'Step 6 — layer three, earnings, in a non-qualified distribution are ordinary income: $8,000 taxable. Tax at 22% = $1,760.',
        'Step 7 — earnings also carry the 10% early distribution penalty: 10% × $8,000 = $800.',
        'Step 8 — total: taxable income $8,000; penalties $2,000 + $800 = $2,800; income tax $1,760. Total cost = $2,800 + $1,760 = $4,560. The remaining $17,000 of earnings stays in the account.',
      ],
      answer:
        'Only $8,000 of the $58,000 is taxable income. Total tax cost is $4,560 — $1,760 of income tax on the earnings plus $2,800 of penalties ($2,000 on the conversion layer and $800 on the earnings layer).',
      watchOut:
        "Assuming a nine-year-old Roth makes everything tax-free. The five-year clock is only half the test — a qualifying EVENT (59½, death, disability, first home) is also required, and at 45 there is none. The second trap is pro-rating the withdrawal across contributions, conversions, and earnings. Roth IRAs use strict ordering, not pro-rata; pro-rata is the rule for a Traditional IRA holding non-deductible basis.",
    },
  ],
};
