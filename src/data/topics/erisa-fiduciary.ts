import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'erisa-fiduciary',
  title: 'ERISA and Retirement Plan Fiduciary Rules',
  weight: '~2%',
  order: 24,
  summary:
    "ERISA governs private-sector retirement and welfare plans. The exam wants you to know who is a fiduciary, what the four core duties require, how the 404(c) safe harbor shifts responsibility to participants, what a prohibited transaction looks like, and the difference between a 3(21) adviser and a 3(38) investment manager.",
  body: `## What ERISA is and why it exists

The **Employee Retirement Income Security Act of 1974 (ERISA)** sets minimum standards for **private-sector** employee benefit plans. It does not require an employer to offer a plan; it regulates the plan once offered.

The history explains the statute. Before 1974 a pension promise was close to a gratuity: when Studebaker closed its South Bend plant in 1963, workers with decades of service got a fraction of what they were promised, because the plan was underfunded and nothing required otherwise. ERISA makes the promise enforceable — money must be set aside, it must belong to the employee on a schedule the employer cannot manipulate, and whoever touches it owes a duty of loyalty. That is the bargain: a **deduction** for the employer and **tax deferral** for the employee, in exchange for federal rules on **participation, vesting, funding, fiduciary conduct, and disclosure**. The **DOL** polices fiduciary conduct, the **IRS** tax qualification, and the **PBGC** insures **defined benefit** pensions only.

## What ERISA covers and what it does not

**Covered:** private employer qualified retirement plans (401(k), profit-sharing, money purchase, defined benefit, ESOPs) and private welfare benefit plans such as group health.

**Not covered:**

- **Government plans** — federal, state, and municipal, including public school and governmental 457(b) plans
- **Most church plans** (unless they affirmatively elect ERISA coverage)
- Plans maintained solely to comply with workers' compensation, unemployment, or disability insurance law
- Plans covering **only the owner and spouse**, or only partners
- **IRAs**, generally — an individual retirement account is not an ERISA plan, though SEP and SIMPLE IRAs sit in a gray zone because an employer establishes them

That first distinction is the most frequently tested single fact in this topic: **a city or state employee plan is outside ERISA.** The exclusion is deliberate — ERISA reaches private employers through the Commerce Clause, and Congress declined to bind **sovereign states and municipalities**, exempting **church plans** on establishment-clause grounds. The governing law is **state, not ERISA**. Related trap: a **403(b) at a public school** is outside ERISA, while a **403(b) at a private hospital or charity** is generally **inside** it.

## Who is a fiduciary

ERISA defines fiduciary status **functionally**, by conduct rather than by title. A person is a fiduciary to the extent they:

1. Exercise **discretionary authority or control** over plan management or administration, **or**
2. Exercise **any authority or control over plan assets**, **or**
3. Render **investment advice for a fee** with respect to plan assets

If status came from a label it could be avoided with a label. So ERISA asks what the person actually **does**, and "to the extent that" makes the status **partial and activity-specific**: a **recordkeeper** allocating contributions per participant elections is **ministerial**, but the same recordkeeper deciding who inherits an account with no valid beneficiary form has exercised discretion. Prong two needs **no discretion at all** — signature authority over plan cash suffices. An adviser who advises on a plan menu or manages plan assets **is an ERISA fiduciary**, and a disclaimer in the engagement letter changes nothing.

The **plan sponsor** is the employer that establishes the plan. The plan document must identify at least one **named fiduciary** with authority to control and manage plan operation. The plan **trustee** holds the assets.

## The four core fiduciary duties

- **Exclusive benefit (duty of loyalty).** Act solely in the interest of participants and beneficiaries and for the exclusive purpose of providing benefits and defraying reasonable expenses. The **sponsor's own business interest is irrelevant** to a plan decision.
- **Prudent expert standard.** Act with the care, skill, prudence, and diligence that a **prudent person familiar with such matters** would use. This is a **higher bar than the ordinary "prudent man" rule** — ERISA measures the fiduciary against an expert, not a reasonable layperson. If the fiduciary lacks the expertise, the prudent course is to **hire someone who has it**.
- **Diversification.** Diversify plan investments to minimize the risk of large losses unless it is clearly prudent not to.
- **Follow the plan documents**, to the extent they are consistent with ERISA. Where a plan document conflicts with the statute, **ERISA wins**.

Two practical corollaries: **process matters as much as outcome** (document how a decision was reached), and **fees must be reasonable** relative to services received. A fiduciary breach exposes the fiduciary to **personal liability** to restore losses.

### Why an expert standard rather than a prudent person standard

General trust law asks what a prudent person would do with their own property; ERISA asks what a prudent person **familiar with such matters** would do. The reason is structural: a 401(k) participant did not choose the plan, cannot negotiate its terms, cannot move the money while employed, and has no competing provider. Where the beneficiary cannot protect themselves through choice, the law raises the standard of whoever chooses for them. That is also why the duty is satisfied by **hiring expertise, not by trying hard** — sincere effort from an unqualified fiduciary is a breach, while a documented process that produced a poor return generally is not.

Exclusive benefit is absolute for the same reason: "balance the interests fairly" would license every self-interested choice as a balancing judgment. Hence plan assets may pay **plan expenses** (administration, recordkeeping, audit) but never **settlor expenses**, the employer's own cost of deciding whether to have a plan.

### Scenario: the concentrated employer stock position

Ridgeline Manufacturing's 401(k) committee finds 41% of plan assets in Ridgeline stock, from an old match paid in shares. The CFO, who chairs the committee, resists change because a large plan sale would pressure the share price ahead of a financing round.

**Exclusive benefit** disposes of the CFO's reason at once: the share price is the *sponsor's* interest, which the committee may not weigh. **Diversification** is implicated, but employer securities in an eligible individual account plan carry a statutory exemption, so concentration alone is not automatically a breach. **Prudence** decides it — has the committee monitored the position, let participants diversify out, and documented its judgment? The wrong answer is "the committee must sell"; the right one is that it must decide on the merits for participants, and the CFO should recuse.

## Section 404(c) safe harbor

**ERISA 404(c)** relieves plan fiduciaries of liability for the results of **participant-directed** investment decisions. It shifts responsibility for *investment outcomes* to the participant, but does **not** relieve the fiduciary of the duty to prudently **select and monitor** the menu itself.

Conditions for the safe harbor:

- **Participant control** — participants may give investment instructions and can change allocations with a frequency appropriate to the volatility of the options, generally **at least quarterly**
- A **broad range of investment alternatives** — commonly read as at least **three diversified core options** with materially different risk and return characteristics that together let a participant build a portfolio at any point on the risk spectrum
- **Adequate disclosure** — enough information for an informed decision: objectives, risk and return characteristics, fees and expenses, and, on request, prospectuses and portfolio holdings

### Qualified default investment alternatives

When a participant is automatically enrolled and gives no instruction, the money goes to a **QDIA**. Investing a default participant in a compliant QDIA preserves 404(c)-style protection. Acceptable QDIAs are **target-date funds, balanced funds, and managed accounts** — a stable value or money market fund is only acceptable as a short-term default (generally up to 120 days), because a QDIA is judged against the participant's **actual objective**, income decades away. Parking a 27-year-old in cash for thirty-five years is not conservative but a near-certain failure to fund the goal.

### Scenario: a 404(c) plan that is still liable

Harbor Logistics runs a 401(k) with daily valuation, twenty funds across every asset class, quarterly disclosure packets, and a 404(c) notice. A participant sues after losing 38% in a sector fund she picked herself. Separately, the plan's core large-cap option has trailed its benchmark by two points a year for six years and charges 1.15%, when the institutional share class of the same fund, available at this plan's size, costs 0.42%.

Two claims, two answers. The **sector fund loss is inside 404(c)** — she controlled the choice and disclosure was adequate. The **core fund is not**, because 404(c) never covers putting a fund on the menu or leaving it there. The committee owed a continuing duty to monitor, remove imprudent options, and use the **lowest-cost share class the plan qualified for**. Fee litigation attacks the menu, not the picks: **404(c) protects the participant's choices, never the fiduciary's.**

## Prohibited transactions and parties in interest

ERISA flatly bars certain dealings between the plan and a **party in interest** (the ERISA term; the Internal Revenue Code calls the overlapping group **disqualified persons**). Parties in interest include plan fiduciaries, service providers, the employer, unions, and certain owners and relatives.

Prohibited transactions include:

- **Sale, exchange, or lease** of property between the plan and a party in interest
- **Lending money** or extending credit between them
- **Furnishing goods or services** for more than reasonable compensation
- **Transferring or using plan assets** for the benefit of a party in interest
- **Self-dealing** — a fiduciary dealing with plan assets in their own interest, or receiving consideration from a third party in connection with a plan transaction

Statutory and administrative **exemptions** exist — participant loans on reasonable terms available to all participants, and reasonable arrangements for necessary services at reasonable compensation, are the common ones. Excise taxes apply to the party in interest who engages in a prohibited transaction.

These are **per se** rules layered on top of prudence. A sale between the plan and the employer is barred **even at a fair, appraised price**, because Congress did not want courts adjudicating each insider deal when the fiduciary always holds better information. **Prudence asks whether you thought it through; the prohibited transaction rules do not care what you thought.** A founder proposing that the plan buy the company building at appraisal and lease it back has a prohibited sale plus a prohibited lease; the only route is an **individual DOL exemption**.

## Participation, vesting, and the plan document

The plan document is the operating manual, and ERISA sets floors a plan may exceed but never go below.

**Eligibility.** A plan may require **age 21** and **one year of service** (generally 1,000 hours), and no more. Entry must then occur no later than the **earlier** of the first day of the next plan year or **six months** later, which is why most plans use **semiannual entry dates** of January 1 and July 1. A plan vesting employer money immediately may use a **two-year** service condition, but not for elective deferrals, and **long-term part-time** employees working **500 hours in consecutive years** must be allowed to defer. IRS **coverage and nondiscrimination** testing separately stops plans favoring **highly compensated employees**, the reason **safe harbor 401(k)** designs exist.

**Vesting** means ownership that survives termination. The rule that answers half of all vesting questions: **employee elective deferrals, after-tax contributions, and rollovers are always 100% vested immediately** — it is the employee's own money. Only **employer** contributions may be scheduled, within these maximums:

| Schedule | Maximum permitted delay |
| --- | --- |
| **Cliff** | **3-year cliff** — 0% until three years, then **100%** |
| **Graded** | **2-to-6-year graded** — 20% after 2 years, +20% each year, 100% after 6 |
| **Safe harbor and SIMPLE contributions** | **Immediate 100%** |
| **QACA safe harbor match** | **2-year cliff** maximum |

Unvested amounts are **forfeited** and either reduce future employer contributions or are reallocated — the retention effect a schedule is designed to produce. A **top-heavy** plan, where key employees hold more than 60% of benefits, faces accelerated vesting. Vesting jumps to 100% at **normal retirement age** and on **plan termination**, so an employer cannot escape its schedule by shutting the plan down.

## Bonding, reporting, and disclosure

- **Fidelity bond** — every person who handles plan funds must be bonded for at least **10% of the funds handled**, with a **$1,000 minimum** and generally a **$500,000 maximum** ($1,000,000 for plans holding employer securities). The bond protects the plan against fraud or dishonesty; it is **not** fiduciary liability insurance, which covers breaches of duty and is optional.
- **Summary plan description (SPD)** — the plain-language explanation of plan terms and participant rights, furnished to participants.
- **Form 5500** — the annual report filed with the Department of Labor, giving financial and operational information about the plan.
- **Participant fee disclosure** and quarterly benefit statements are also required.

Two fee-disclosure regimes run in opposite directions and are easy to swap. **Section 408(b)(2)** runs from **provider to sponsor** — services, fiduciary status, and **all direct and indirect compensation** including revenue sharing, in writing and in advance; failure to disclose makes the arrangement itself a **prohibited transaction**. **Section 404a-5** runs from **plan to participants** — an annual comparative chart of expenses and benchmarked returns, then quarterly statements showing the **dollar actually deducted**. Also tested: a **blackout notice 30 days in advance** when participants lose the ability to trade for more than three business days.

## ERISA duty versus the Advisers Act duty

| | **ERISA fiduciary** | **Advisers Act fiduciary** |
| --- | --- | --- |
| Owed to | **Participants and beneficiaries** | **The client** — usually the plan, not each participant |
| Conflicts | Many are **flatly prohibited**, curable only by exemption | Generally curable by **full disclosure and informed consent** |
| Care standard | **Prudent expert**, judged on process | Reasonable basis, suitability, best execution |
| Remedy | Restore plan losses, excise taxes, **participant suit** | Regulatory enforcement, rescission, disgorgement, bar |

The sharpest difference is the conflicts row: **disclosure does not cure a prohibited transaction.** Telling a committee exactly how much 12b-1 revenue you collect from three menu funds satisfies 408(b)(2) but still does not make it lawful to be paid more for recommending one fund over another.

So an adviser taking plan business carries real exposure: agree in writing whether you are a **3(21)** or a **3(38)**; deliver 408(b)(2) disclosure before the engagement starts; **levelize your compensation**; never let the plan pay settlor expenses; and **document process, not outcome**, because the plaintiff's theory is nearly always failure of process. Do not count on a hold-harmless clause either — **ERISA Section 410 voids any provision relieving a fiduciary of liability for breach.**

## 3(21) vs 3(38)

| | **ERISA 3(21) investment adviser** | **ERISA 3(38) investment manager** |
| --- | --- | --- |
| Authority | **Recommends**; the plan sponsor decides | **Discretionary** — selects, buys, and sells |
| Fiduciary role | **Co-fiduciary** alongside the sponsor | Takes on fiduciary responsibility for the decisions made |
| Sponsor's remaining duty | Full responsibility for the investment decision | Prudent **selection and monitoring of the manager** |
| Who must it be | Any advice-for-a-fee provider | A **registered investment adviser, bank, or insurance company** that acknowledges fiduciary status **in writing** |

The distinction the exam wants: a **3(38) transfers investment discretion and its associated liability**; a **3(21) shares it**. Neither arrangement lets the sponsor walk away entirely — the duty to monitor never goes away.

## Rollover recommendations as a conflict

Recommending that a participant **roll a 401(k) into an IRA the adviser will manage** is a textbook conflict: the adviser is advising a plan participant into an arrangement that generates the adviser a fee. Regulators expect a documented comparison of **fees and expenses, available investments, services, creditor protection, RMD treatment, and the age-55 separation exception** in the plan versus the IRA, plus a written explanation of why the rollover is in the client's best interest. "The IRA has more choices" is not, standing alone, an adequate justification.`,
  pitfalls: [
    'ERISA does NOT cover government plans (including public school and governmental 457 plans) or most church plans — a question about a state employee retirement system is outside ERISA entirely.',
    "ERISA applies the prudent EXPERT standard, not the ordinary prudent man rule; a fiduciary who lacks the necessary expertise must hire it rather than do its best.",
    "Section 404(c) shifts liability for investment RESULTS to participants but never relieves the fiduciary of the duty to prudently select and monitor the investment menu.",
    'A fidelity bond (10% of funds handled, $1,000 minimum, generally $500,000 maximum) protects the plan against dishonesty and is mandatory; fiduciary liability insurance protects the fiduciary and is optional.',
    "Fiduciary status under ERISA is functional, not titular — an adviser who renders investment advice for a fee to a plan is a fiduciary regardless of what the service agreement calls the relationship.",
    "Recommending a rollover out of a plan into an adviser-managed IRA is a conflicted recommendation requiring documented, apples-to-apples comparison — not a routine account-opening step.",
    "Employee elective deferrals are ALWAYS 100% vested immediately; only employer contributions may be subject to a vesting schedule, capped at a 3-year cliff or 2-to-6-year graded.",
    "Disclosure cures an Advisers Act conflict but does NOT cure an ERISA prohibited transaction — a fair, appraised price does not make a sale between the plan and the employer lawful.",
  ],
  keyTerms: [
    {
      term: 'ERISA',
      definition:
        'The Employee Retirement Income Security Act of 1974, which sets minimum participation, vesting, funding, fiduciary, reporting, and disclosure standards for private-sector employee benefit plans.',
    },
    {
      term: 'Named fiduciary',
      definition:
        'The person or entity identified in the plan document as having authority to control and manage the operation and administration of the plan.',
    },
    {
      term: 'Exclusive benefit rule',
      definition:
        'The ERISA duty of loyalty requiring a fiduciary to act solely in the interest of participants and beneficiaries, for the exclusive purpose of providing benefits and defraying reasonable plan expenses.',
    },
    {
      term: 'Prudent expert standard',
      definition:
        'The ERISA care standard measuring a fiduciary against a prudent person familiar with such matters — an expert benchmark rather than the ordinary reasonable-person benchmark.',
    },
    {
      term: 'ERISA 404(c) safe harbor',
      definition:
        'A provision relieving fiduciaries of liability for losses resulting from participant-directed investment choices, conditioned on participant control, a broad range of alternatives, and adequate disclosure.',
    },
    {
      term: 'Qualified default investment alternative (QDIA)',
      definition:
        'A default investment such as a target-date fund, balanced fund, or managed account used for automatically enrolled participants who give no instruction, which preserves fiduciary protection.',
    },
    {
      term: 'Party in interest',
      definition:
        'Any person whose dealings with the plan are restricted — including fiduciaries, service providers, the employer, unions, and certain owners and relatives. The Internal Revenue Code term for the overlapping group is disqualified person.',
    },
    {
      term: 'Form 5500',
      definition:
        "The annual report filed with the Department of Labor disclosing a plan's financial condition, investments, and operations.",
    },
    {
      term: 'Graded vesting',
      definition:
        'A schedule under which an employee owns an increasing percentage of employer contributions with each year of service; ERISA caps the delay at 20% after two years rising to 100% after six.',
    },
    {
      term: 'Settlor expense',
      definition:
        "An employer cost of deciding whether to establish, amend, or terminate a plan, which must be paid by the employer rather than from plan assets, unlike ongoing plan administration expenses.",
    },
  ],
  confusions: [
    {
      dont: 'A 3(21) adviser, who recommends and shares fiduciary responsibility with the sponsor',
      with: 'A 3(38) investment manager, who has discretion and assumes responsibility for the investment decisions',
    },
    {
      dont: 'A mandatory ERISA fidelity bond covering fraud and dishonesty by those handling plan funds',
      with: "Optional fiduciary liability insurance covering a fiduciary's breach of duty",
    },
    {
      dont: 'Private-sector plans, which ERISA governs',
      with: 'Government and most church plans, which ERISA excludes',
    },
    {
      dont: 'A discretionary fiduciary such as a plan trustee or investment manager',
      with: 'A ministerial service provider such as a recordkeeper acting only on instructions',
    },
    {
      dont: 'The prudent expert standard imposed by ERISA',
      with: 'The ordinary prudent man rule applied under general trust law',
    },
    {
      dont: 'Section 408(b)(2) disclosure, which runs from the service provider to the plan sponsor',
      with: 'Section 404a-5 disclosure, which runs from the plan to its participants',
    },
  ],
  workedExamples: [
    {
      title: 'Applying a six-year graded vesting schedule at termination',
      setup:
        "Dana resigns after exactly four years of service. Her 401(k) holds $80,000: $32,000 from her own elective deferrals and their earnings, and $48,000 from employer matching and profit-sharing contributions and their earnings. The plan uses the maximum permitted 2-to-6-year graded schedule (20% after two years of service, increasing 20 percentage points each year to 100% after six). How much does Dana take with her, and how much is forfeited?",
      steps: [
        'Step 1 — split the account by source. Vesting schedules can never apply to employee money, so separate the $32,000 of deferrals from the $48,000 of employer contributions.',
        'Step 2 — vest the employee portion. Elective deferrals, after-tax contributions, and rollovers are 100% vested at all times. Dana keeps the full $32,000 regardless of service.',
        'Step 3 — read the schedule at four years of service. Graded 2-to-6 gives 20% at 2 years, 40% at 3, 60% at 4, 80% at 5, and 100% at 6. Four years of service equals 60%.',
        'Step 4 — apply 60% to the employer portion only: 0.60 x $48,000 = $28,800.',
        'Step 5 — total the vested balance: $32,000 + $28,800 = $60,800.',
        'Step 6 — compute the forfeiture: $48,000 - $28,800 = $19,200, which stays in the plan and is either reallocated among remaining participants or used to reduce future employer contributions.',
        'Step 7 — sanity-check the overall vested percentage: $60,800 / $80,000 = 0.76, or 76%. It must land between the 60% employer rate and 100%, and it does.',
        'Step 8 — price one more year. Staying to five years of service would vest 80% of $48,000 = $38,400, a total of $70,400. The fifth year is worth $38,400 - $28,800 = $9,600 of otherwise forfeited money.',
      ],
      answer:
        'Dana keeps $60,800 — all $32,000 of her own deferrals plus 60% of the $48,000 employer balance, or $28,800. She forfeits $19,200. Her account is 76% vested overall.',
      watchOut:
        'Applying the 60% to the entire $80,000 account, which produces $48,000 vested and $32,000 forfeited. That understates what Dana keeps by $12,800 and illegally forfeits her own salary deferrals. Always split by contribution source before touching the schedule.',
    },
    {
      title: 'What 25 basis points of plan fees costs over a career',
      setup:
        "Two 401(k) plans hold identical index funds with an identical 7.00% gross return. Plan A's all-in cost (fund expenses plus recordkeeping and advisory fees) is 0.50% per year; Plan B's is 0.75% — a difference of 25 basis points. A participant has a $50,000 balance and leaves it invested for 30 years with no further contributions. What does the extra quarter point cost her?",
      steps: [
        'Step 1 — convert fees to net returns. Plan A: 7.00% - 0.50% = 6.50%. Plan B: 7.00% - 0.75% = 6.25%.',
        'Step 2 — note the first-year dollar difference, because it is the number that makes the fee look trivial: 0.25% x $50,000 = $125.',
        'Step 3 — grow the Plan A balance: $50,000 x 1.0650^30. The growth factor 1.0650^30 = 6.614366, so the balance is $330,718.31.',
        'Step 4 — grow the Plan B balance: $50,000 x 1.0625^30. The growth factor 1.0625^30 = 6.164079, so the balance is $308,203.93.',
        'Step 5 — take the difference: $330,718.31 - $308,203.93 = $22,514.38.',
        'Step 6 — express it as a share of the better outcome: $22,514.38 / $330,718.31 = 6.81%. A quarter-point fee difference consumed roughly 6.8% of the ending balance.',
        'Step 7 — compare the cost to the fee itself. The participant paid roughly $125 more in year one, but lost more than $22,500 by year 30, because every dollar of fee also forfeits every dollar that fee would have earned.',
      ],
      answer:
        'The 25-basis-point difference costs $22,514.38 on a single $50,000 balance over 30 years — $330,718.31 versus $308,203.93, or about 6.8% of the ending value.',
      watchOut:
        'Estimating the damage as 30 years x $125 = $3,750, or as 0.25% x 30 = 7.5% of the starting $50,000 = $3,750. Both ignore compounding on the forgone amounts and understate the true cost by roughly $18,750. This arithmetic is why fee reasonableness is a fiduciary duty rather than a housekeeping matter.',
    },
    {
      title: 'Determining a participant entry date from a hire date',
      setup:
        "Marcus was born October 5, 2004 and hired full time on April 1, 2024. His employer's calendar-year 401(k) uses the maximum eligibility conditions ERISA permits — age 21 and one year of service — with semiannual entry dates of January 1 and July 1. He works more than 1,000 hours in every twelve-month period. When may he first participate?",
      steps: [
        'Step 1 — test the service condition. One year of service runs from the hire date, so it is satisfied on April 1, 2025.',
        'Step 2 — test the age condition. Marcus turns 21 on October 5, 2025. On April 1, 2024 he was 19, so age, not service, is the binding constraint.',
        'Step 3 — find the later of the two. Both conditions are satisfied only as of October 5, 2025.',
        'Step 4 — apply the entry-date rule. October 5, 2025 is not an entry date, so he enters on the next one: January 1, 2026.',
        'Step 5 — confirm the plan is legal. Entry must be no later than the earlier of (a) the first day of the plan year beginning after the conditions are met, which for a calendar-year plan is January 1, 2026, or (b) six months after the conditions are met, which is April 5, 2026. The earlier is January 1, 2026, so semiannual entry satisfies the statute exactly.',
        'Step 6 — check the alternatives. If the plan had monthly entry dates he would enter November 1, 2025. If the plan required only one year of service with no age condition he would enter July 1, 2025. If he averaged under 1,000 hours, the long-term part-time rule would still let him defer after two consecutive years of at least 500 hours.',
      ],
      answer:
        'Marcus first participates on January 1, 2026 — the first semiannual entry date after both the age-21 and one-year-of-service conditions are satisfied on October 5, 2025.',
      watchOut:
        'Answering April 1, 2025 by using the service condition alone and ignoring age 21, or answering October 5, 2025 by letting him enter the day both conditions are met instead of on the next entry date. The rule is: satisfy BOTH conditions, then wait for the next entry date.',
    },
  ],
};
