import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'erisa-fiduciary',
  title: 'ERISA and Retirement Plan Fiduciary Rules',
  weight: '~2%',
  order: 24,
  summary:
    "ERISA governs private-sector retirement and welfare plans. The exam wants you to know who is a fiduciary, what the four core duties require, how the 404(c) safe harbor shifts responsibility to participants, what a prohibited transaction looks like, and the difference between a 3(21) adviser and a 3(38) investment manager.",
  body: `## What ERISA is and what it covers

The **Employee Retirement Income Security Act of 1974 (ERISA)** sets minimum standards for **private-sector** employee benefit plans. It does not require an employer to offer a plan; it regulates the plan once offered.

**Covered:** private employer qualified retirement plans (401(k), profit-sharing, money purchase, defined benefit, ESOPs) and private welfare benefit plans such as group health.

**Not covered:**

- **Government plans** — federal, state, and municipal, including public school and 457(b) governmental plans
- **Most church plans** (unless they affirmatively elect ERISA coverage)
- Plans maintained solely to comply with workers' compensation, unemployment, or disability insurance law
- Plans covering **only the owner and spouse**, or only partners
- **IRAs**, generally — an individual retirement account is not an ERISA plan, though SEP and SIMPLE IRAs sit in a gray zone because an employer establishes them

That first distinction is the most frequently tested single fact in this topic: **a city or state employee plan is outside ERISA.**

## Who is a fiduciary

ERISA defines fiduciary status **functionally**, by conduct rather than by title. A person is a fiduciary to the extent they:

1. Exercise **discretionary authority or control** over plan management or administration, **or**
2. Exercise **any authority or control over plan assets**, **or**
3. Render **investment advice for a fee** with respect to plan assets

The consequence: an investment adviser who advises a plan on its menu or manages plan assets **is a fiduciary under ERISA**, on top of any fiduciary duty already owed under the Investment Advisers Act or state law. A recordkeeper who only processes transactions on instruction is generally a **ministerial** service provider and not a fiduciary.

The **plan sponsor** is the employer that establishes the plan. The plan document must identify at least one **named fiduciary** with authority to control and manage plan operation. The plan **trustee** holds the assets.

## The four core fiduciary duties

- **Exclusive benefit (duty of loyalty).** Act solely in the interest of participants and beneficiaries and for the exclusive purpose of providing benefits and defraying reasonable expenses. The **sponsor's own business interest is irrelevant** to a plan decision.
- **Prudent expert standard.** Act with the care, skill, prudence, and diligence that a **prudent person familiar with such matters** would use. This is a **higher bar than the ordinary "prudent man" rule** — ERISA measures the fiduciary against an expert, not a reasonable layperson. If the fiduciary lacks the expertise, the prudent course is to **hire someone who has it**.
- **Diversification.** Diversify plan investments to minimize the risk of large losses unless it is clearly prudent not to.
- **Follow the plan documents**, to the extent they are consistent with ERISA. Where a plan document conflicts with the statute, **ERISA wins**.

Two practical corollaries: **process matters as much as outcome** (document how a decision was reached), and **fees must be reasonable** relative to services received. A fiduciary breach exposes the fiduciary to **personal liability** to restore losses.

## Section 404(c) safe harbor

**ERISA 404(c)** relieves plan fiduciaries of liability for the results of **participant-directed** investment decisions. It shifts the responsibility for *investment outcomes* to the participant. It does **not** relieve the fiduciary of the duty to prudently **select and monitor** the menu itself.

Conditions for the safe harbor:

- **Participant control** — participants may give investment instructions and can change allocations with a frequency appropriate to the volatility of the options, generally **at least quarterly**
- A **broad range of investment alternatives** — commonly read as at least **three diversified core options** with materially different risk and return characteristics that together let a participant build a portfolio at any point on the risk spectrum
- **Adequate disclosure** — enough information for an informed decision: objectives, risk and return characteristics, fees and expenses, and, on request, prospectuses and portfolio holdings

### Qualified default investment alternatives

When a participant is automatically enrolled and gives no instruction, the money goes to a **QDIA**. Investing a default participant in a compliant QDIA preserves 404(c)-style protection. Acceptable QDIAs are **target-date funds, balanced funds, and managed accounts** — a stable value or money market fund is only acceptable as a short-term default (generally up to 120 days) because a capital-preservation vehicle is not a prudent long-horizon default.

## Prohibited transactions and parties in interest

ERISA flatly bars certain dealings between the plan and a **party in interest** (the ERISA term; the Internal Revenue Code calls the overlapping group **disqualified persons**). Parties in interest include plan fiduciaries, service providers, the employer, unions, and certain owners and relatives.

Prohibited transactions include:

- **Sale, exchange, or lease** of property between the plan and a party in interest
- **Lending money** or extending credit between them
- **Furnishing goods or services** for more than reasonable compensation
- **Transferring or using plan assets** for the benefit of a party in interest
- **Self-dealing** — a fiduciary dealing with plan assets in their own interest, or receiving consideration from a third party in connection with a plan transaction

Statutory and administrative **exemptions** exist — participant loans on reasonable terms available to all participants, and reasonable arrangements for necessary services at reasonable compensation, are the common ones. Excise taxes apply to the party in interest who engages in a prohibited transaction.

## Bonding, reporting, and disclosure

- **Fidelity bond** — every person who handles plan funds must be bonded for at least **10% of the funds handled**, with a **$1,000 minimum** and generally a **$500,000 maximum** ($1,000,000 for plans holding employer securities). The bond protects the plan against fraud or dishonesty; it is **not** fiduciary liability insurance, which covers breaches of duty and is optional.
- **Summary plan description (SPD)** — the plain-language explanation of plan terms and participant rights, furnished to participants.
- **Form 5500** — the annual report filed with the Department of Labor, giving financial and operational information about the plan.
- **Participant fee disclosure** and quarterly benefit statements are also required.
- The **Department of Labor** is the primary enforcement agency for ERISA, with the IRS enforcing the tax-qualification rules.

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
  ],
};
