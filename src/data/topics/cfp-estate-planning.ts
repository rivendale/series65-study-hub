import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'cfp-estate-planning',
  title: 'Estate Planning for Advisors',
  weight: 'Supplemental',
  order: 44,
  summary:
    "Estate planning is where titling, beneficiary designations, documents, and taxes meet family relationships. This topic covers the core documents, probate avoidance, trust types, the federal transfer tax framework, step-up in basis, incapacity planning, and the advisor's coordinating role alongside an attorney.",
  body: `*This material is not tested on the Series 65 exam. It is here because estate planning is a principal knowledge area of the CFP® certification, and because advisors are usually the first professional to notice that a client's documents are stale, missing, or contradicted by their beneficiary forms.*

## The core documents

Every adult client — not merely wealthy ones — should have five things:

1. **A will.** Directs probate assets, names an executor, and — most importantly for parents — **names a guardian for minor children**. It does nothing for assets passing by title or contract.
2. **A durable power of attorney for finances.** Names an agent to act if the client cannot. "Durable" means it survives incapacity, which is the entire point. Springing versions sound appealing but can be slow to invoke.
3. **A healthcare proxy** naming someone to make medical decisions.
4. **An advance directive or living will**, stating wishes on life-sustaining treatment so the proxy is not guessing.
5. **A HIPAA authorization.** Without it, providers may refuse to share information with the very people who need it.

Many clients should add a **revocable living trust**, which holds assets during life (the grantor is usually their own trustee), passes them privately without probate, and — often underappreciated — provides seamless management on incapacity because the successor trustee simply steps in. It only helps for assets actually **retitled into it**; an unfunded trust is a very expensive folder.

## Probate, and why clients want to avoid it

Probate is the court-supervised process of validating a will, paying debts, and distributing what remains. Not a disaster, but public, sometimes slow and expensive, and a separate proceeding in **each state** where real property sits — which is why a client with an out-of-state vacation home may need a trust or a transfer-on-death deed.

Assets bypass probate when they pass by **beneficiary designation** (retirement accounts, life insurance, annuities, TOD and POD registrations), by **joint tenancy with right of survivorship** or tenancy by the entirety, or by **trust ownership**.

## Titling and beneficiaries control most transfers

This is the single most useful thing an advisor can internalize: **for a typical household, the will governs a minority of the wealth.** Retirement accounts, life insurance, annuities, jointly held real estate, and TOD brokerage accounts all pass outside it — and a beneficiary designation **overrides** what the will says.

So build the habit:

- Audit designations — primary **and contingent** — annually and after every life event, watching for a deceased person, an ex-spouse, "my estate," or a minor named outright.
- Know the ownership forms: **joint tenancy with right of survivorship** (passes to the survivor), **tenancy in common** (each share passes under that owner's will), **tenancy by the entirety** (spouses only, with creditor protection in some states), and **community property** (with a valuable double step-up at the first death).
- Adding an adult child as joint owner to "avoid probate" is a common do-it-yourself mistake: it creates a completed gift, exposes the asset to the child's creditors and divorce, and forfeits part of the step-up.

## Trusts and what they are for

| Trust | Primary purpose |
| --- | --- |
| Revocable living trust | Probate avoidance, privacy, seamless incapacity management |
| Irrevocable life insurance trust (ILIT) | Keeps a death benefit out of the insured's gross estate and provides estate liquidity |
| Credit shelter / bypass trust | Uses the first spouse's exclusion while providing for the survivor; assets are excluded from the survivor's estate |
| Marital / QTIP trust | Qualifies for the marital deduction while the grantor controls the ultimate remainder — common in blended families |
| Special needs trust | Supplements a beneficiary with a disability without disqualifying them from means-tested benefits |
| Charitable remainder trust (CRT) | Income stream to the donor or family for a term or life, remainder to charity; partial deduction and gain deferral on funding |
| Charitable lead trust (CLT) | Income to charity for a term, remainder to family |
| Dynasty trust | Multi-generational wealth transfer leveraging the GST exemption, where state law permits long or perpetual duration |
| Grantor trust | Grantor pays the income tax on trust income, effectively an additional tax-free transfer to beneficiaries |

For most families the non-tax work matters more: protecting a beneficiary from creditors, divorce, or their own judgment; providing for a child from a prior marriage; keeping a family business intact; and staging distributions rather than handing a 22-year-old a lump sum.

## The federal transfer tax framework

- The **unified credit** shelters a lifetime exclusion amount from gift and estate tax combined. The amount is large and indexed, and it has been subject to scheduled changes — always verify the current figure before advising.
- The **annual exclusion** allows gifts of a set amount per donee per year, with no limit on the number of donees and no use of the lifetime exclusion. A married couple may **gift-split** to double it. Only gifts of a **present interest** qualify.
- Direct payments of **tuition to an educational institution** and **medical expenses to a provider** are unlimited and excluded entirely — a widely underused technique for grandparents.
- The **unlimited marital deduction** allows transfers to a **U.S. citizen** spouse free of gift and estate tax. For a **non-citizen** spouse, the deduction is unavailable; a **QDOT** (qualified domestic trust) preserves deferral, and a larger annual exclusion applies to lifetime gifts to a non-citizen spouse.
- **Portability** lets a surviving spouse use the **deceased spousal unused exclusion (DSUE)**, but only if an estate tax return is timely filed at the first death **even when no tax is due**. This is missed constantly. Portability does not apply to the GST exemption, which is one reason bypass trusts still have a role.
- The **generation-skipping transfer tax** is a separate, flat-rate tax on transfers to persons two or more generations below the transferor, with its own exemption. Allocation of that exemption is technical and belongs to the attorney and CPA.

## Step-up in basis

Assets included in a decedent's gross estate generally receive a basis adjustment to fair market value at death. This has enormous planning consequences:

- **Do not gift highly appreciated assets during life** if the client will die with an estate below the exclusion. The donee takes the donor's carryover basis and pays tax on the full appreciation; had they inherited, the gain would have disappeared.
- **Gift high-basis or cash assets** instead when lifetime gifting is desired, and hold the low-basis assets to death.
- In **community property** states, both halves of community property receive a basis adjustment at the first spouse's death — a significant advantage worth identifying.
- The mirror image: an asset that has **declined** in value gets a step-**down**. Consider selling losers during life to capture the loss.

For most families today the binding constraint is **income tax basis**, not estate tax — a genuine shift from how estate planning was taught a generation ago.

## State death taxes

Several states impose their own **estate tax**, often with thresholds far below the federal amount, and a handful impose an **inheritance tax** on the recipient at rates varying by relationship — spouses and children lightly taxed or exempt, distant and unrelated beneficiaries much more heavily. A client with no federal exposure can have real state exposure, and moving across a state line changes the answer.

## Business succession and digital assets

For a business owner, the estate plan and the succession plan are the same plan: a funded **buy-sell agreement** with a defensible valuation method, developed successors, liquidity to pay taxes and to equalize inheritances between children who are and are not in the business, and coordination among the operating agreement, the will, and any trusts. Illiquidity is the classic failure mode — an estate rich in business value and poor in cash forces a fire sale.

Modern estates also include email, photos, cloud storage, cryptocurrency, domain names, and business accounts. Fiduciaries often cannot lawfully access them without explicit authorization, and self-custodied cryptocurrency is simply lost if the keys are. Encourage an inventory, a password manager with emergency access, and digital asset authority language in the will and power of attorney.

## Incapacity planning and family conversations

Incapacity is more likely than sudden death and is planned for far less. Beyond documents: simplify and consolidate accounts, automate bill payment, designate a **trusted contact** on brokerage accounts, and introduce the successor decision-makers while the client is well.

Then there is the conversation itself. Many families have never discussed intentions, and the resulting surprises — an unequal inheritance, a chosen executor, a business left to one child — cause lasting damage. Advisors are unusually well placed to facilitate: neutral, informed, and not a family member. Offer to host a family meeting. Suggest a short letter of intent explaining the reasoning behind decisions. Encourage the client to tell the executor and the agent that they have been named, and where the documents are.

## The boundary

Advisors do not draft documents, and drafting them is the unauthorized practice of law. What advisors do: inventory what exists, spot gaps, model the tax and cash-flow consequences, prepare the client for the attorney meeting so the billable hours are productive, ensure titling and beneficiaries actually match the plan the attorney designed, and re-check it all every few years. Attorneys draft; advisors make sure the plan works and stays true over time.`,
  pitfalls: [
    "Assuming the will controls the estate. Retirement accounts, insurance, annuities, and jointly titled property pass outside it, and a beneficiary designation beats the will every time.",
    "Helping a client set up a revocable trust and never confirming that assets were retitled into it. An unfunded trust accomplishes nothing.",
    "Suggesting that a client add an adult child as joint owner to avoid probate, which creates a gift, exposes the asset to the child's creditors, and forfeits part of the step-up in basis.",
    "Encouraging lifetime gifts of highly appreciated stock for a family well below the estate tax exclusion, trading away a free basis step-up for no benefit.",
    "Failing to flag the estate tax return filing needed at the first spouse's death to elect portability, so the deceased spousal unused exclusion is lost permanently.",
    "Focusing only on federal exclusion amounts and missing a state estate or inheritance tax with a much lower threshold.",
    "Drafting or editing document language. Prepare the client, coordinate with the attorney, and stay on your side of the line.",
  ],
  keyTerms: [
    {
      term: 'Durable power of attorney',
      definition:
        'A document naming an agent to act on financial matters that remains effective after the principal becomes incapacitated.',
    },
    {
      term: 'Probate',
      definition:
        'The court-supervised process of validating a will, settling debts, and distributing assets titled solely in the decedent name; public and state-specific.',
    },
    {
      term: 'Annual exclusion',
      definition:
        'An indexed amount that may be given per donee per year without gift tax or use of the lifetime exclusion; requires a gift of a present interest.',
    },
    {
      term: 'Portability / DSUE',
      definition:
        "A surviving spouse's ability to use the deceased spouse's unused federal exclusion, available only if an estate tax return is timely filed at the first death.",
    },
    {
      term: 'Unlimited marital deduction',
      definition:
        'Full gift and estate tax deduction for transfers to a U.S. citizen spouse; unavailable for a non-citizen spouse absent a QDOT.',
    },
    {
      term: 'Step-up in basis',
      definition:
        "Adjustment of an inherited asset's cost basis to fair market value at the date of death, eliminating tax on lifetime appreciation.",
    },
    {
      term: 'Irrevocable life insurance trust (ILIT)',
      definition:
        "A trust that owns a life policy so the death benefit stays outside the insured's gross estate while providing liquidity to the estate.",
    },
    {
      term: 'Generation-skipping transfer tax',
      definition:
        'A separate flat-rate transfer tax on gifts and bequests to persons two or more generations below the transferor, with its own non-portable exemption.',
    },
  ],
  confusions: [
    {
      dont: 'A revocable living trust, which avoids probate but is fully included in the gross estate',
      with: 'An irrevocable trust, which can remove assets from the gross estate but gives up control',
    },
    {
      dont: 'An estate tax, imposed on the estate before distribution',
      with: 'An inheritance tax, imposed on the recipient at rates that depend on the relationship to the decedent',
    },
    {
      dont: 'A will, which controls only probate assets',
      with: 'Beneficiary designations and titling, which control most of a typical household balance sheet',
    },
    {
      dont: 'Portability, which applies to the estate and gift exclusion',
      with: 'The GST exemption, which is not portable and must be affirmatively allocated',
    },
  ],
  formulas: [
    {
      name: 'Taxable estate',
      formula:
        'Taxable estate = Gross estate − Debts and administration expenses − Marital deduction − Charitable deduction',
      note: 'Adjusted taxable gifts are then added back before applying the unified credit to compute tax.',
    },
    {
      name: 'Gain on a lifetime gift versus an inheritance',
      formula:
        'Gifted asset gain = Sale price − Donor carryover basis;  Inherited asset gain = Sale price − Date-of-death fair market value',
      note: "The difference is the entire argument for holding appreciated assets until death when the estate is below the exclusion.",
    },
    {
      name: 'Annual exclusion capacity',
      formula: 'Total excluded gifts = Annual exclusion amount × Number of donees × (2 if gift-splitting)',
      note: 'Direct payments of tuition and medical expenses to the institution or provider are unlimited and sit entirely outside this calculation.',
    },
  ],
};
