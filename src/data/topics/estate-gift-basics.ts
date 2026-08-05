import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'estate-gift-basics',
  title: 'Estate and Gift Planning Basics',
  weight: '~2%',
  order: 26,
  summary:
    "You will not be asked to draft documents, but you will be asked how property passes at death, which arrangements avoid probate, how titling and beneficiary designations override a will, and why the step-up in basis at death drives so much gifting advice.",
  body: `## Probate vs non-probate transfer

**Probate** is the court-supervised process of validating a will, paying debts and taxes, and distributing what is left. It is **public, slow, and costly**, and it runs separately in **every state where the decedent owned real property**.

Property passes **outside probate** when a contract or form of ownership already names the next owner: **beneficiary designations** (life insurance, annuities, IRAs, employer plans), **TOD** registration on securities accounts and **POD** on bank accounts, **joint tenancy with right of survivorship** and **tenancy by the entirety**, and **assets titled in a trust**.

The tested consequence: **a beneficiary designation or survivorship title beats the will.** A will leaving "everything to my children" does not touch an IRA that still names an ex-spouse, so advisers should prompt a beneficiary review after every marriage, divorce, birth, or death. Note too that avoiding probate is **not** avoiding estate tax — non-probate assets are still in the **gross estate**.

### Why a beneficiary form beats a will

This follows from what each document is. A **will is an instruction to a probate court** about property the court has jurisdiction over — assets the decedent owned individually with no other transfer mechanism attached. A **beneficiary designation is a contract term** between the owner and the custodian, insurer, or plan; at death the custodian simply performs its contract and pays the named person. The property never enters the estate, so the court never acquires jurisdiction and the will never reaches it. **Survivorship titling** works the same way — the survivor's interest expands to the whole, leaving nothing to probate.

So "I updated my will" is an incomplete answer to almost every estate question. The review list is short: **retirement accounts, life insurance, annuities, TOD and POD registrations, and how the house and joint accounts are titled**. Two wrinkles the exam likes: under ERISA a **married participant's 401(k) death benefit goes to the spouse** unless the spouse consents in writing, overriding both the will and a contrary form — but an **IRA is not an ERISA plan**, so no consent is required and a stale form can still leave it to an ex-spouse.

## Wills and intestacy

A **will** directs probate property, names an **executor (personal representative)**, and — critically for families with children — names a **guardian**. Dying without a valid will is **intestacy**, and **state law** then decides who inherits, typically spouse and blood relatives in a fixed order, with no provision for stepchildren, unmarried partners, or charity. A **codicil** amends a will.

A will **can** name a guardian, create a **testamentary trust**, apportion taxes, and dispose of tangible property. It **cannot** reach non-probate assets, avoid publicity or court, or operate during life — it does nothing until death, which is why a **durable power of attorney** is its necessary companion. Intestacy is worst where families are complicated: a second spouse may take a statutory share that disinherits children of a first marriage, an **unmarried partner** inherits nothing, and a **minor's** inheritance goes into a court guardianship paying out outright at 18.

## Titling and its estate consequences

| Form | Who may own | At death |
| --- | --- | --- |
| **Sole ownership** | One person | Passes by will or intestacy — **probate** |
| **JTWROS** | Any two or more | Passes automatically to survivors — **no probate** |
| **Tenants in common (TIC)** | Any two or more, **unequal shares allowed** | The decedent's share passes by will — **probate** |
| **Tenancy by the entirety** | **Spouses only** (where recognized) | Passes to the spouse; adds creditor protection against one spouse's creditors |
| **Community property** | Spouses in community property states | Each spouse owns half; a **full double step-up** on the whole property is generally available at the first death |

That last line matters: in a community property state both halves get a new basis at the first death, whereas with JTWROS only the decedent's fractional share is stepped up.

**TOD and POD** registrations are free, revocable, and convert an account to non-probate with one form — but they are **blunt**. Most carry no contingent beneficiary, so a predeceased beneficiary sends the account back into probate; they **ignore per stirpes intent** unless the form allows it; they cannot hold funds for a minor; and they can **wreck an otherwise balanced plan** when one child is named on a large account and the will divides everything equally. A TOD is a transfer mechanism, not a plan.

## Trusts

A **trust** separates legal title (held by the **trustee**) from beneficial enjoyment (the **beneficiary**), on terms set by the **grantor** (settlor).

### Revocable living trust

The grantor can amend or revoke it, usually serves as their own trustee, and reports the income on their own return. What it does and does not do:

- **Does** avoid probate for assets actually retitled into it, keep the disposition **private**, and provide a seamless management structure if the grantor becomes incapacitated
- **Does not** reduce income tax, **does not** reduce estate tax (the assets are fully includible in the gross estate), and **does not** protect assets from the grantor's creditors

A **pour-over will** catches anything the client forgot to retitle and sends it into the trust — through probate.

Why does a revocable trust dodge probate but not estate tax? The two rules ask different questions. **Probate asks who holds title** — the trust does, so no court is needed. **Estate tax asks who held control** — a grantor who can revoke and retrieve the property has relinquished nothing, and the Code pulls back any property over which the decedent kept the power to alter, amend, revoke, or enjoy. **Creditor protection fails for the identical reason**: you cannot shield an asset you can retrieve at will.

### Irrevocable trust

The grantor gives up control. Because the transfer is complete, assets can be **removed from the gross estate** and can offer **creditor protection**, at the price of flexibility. Irrevocable trusts are their own taxpayers and hit the top bracket at very low income, so income is often distributed to beneficiaries instead.

Also recognize: **testamentary trust** (created by the will, so it does pass through probate), **bypass/credit shelter trust**, **ILIT** (holds life insurance to keep the death benefit out of the estate), and **QTIP** (provides for a surviving spouse while the grantor controls the remainder).

Two family situations generate most trust questions. A **special needs trust** holds assets for a disabled beneficiary without giving them ownership, preserving **SSI and Medicaid** eligibility an outright inheritance would destroy; a **first-party** trust funded with the beneficiary's own money carries a Medicaid payback that a **third-party** trust funded by a parent does not. In a **blended family**, leaving everything outright to a second spouse relies on that spouse remembering the first marriage's children; a **QTIP trust** solves it structurally.

## Incapacity documents

- **Durable power of attorney** — authorizes an agent to act on financial matters and, because it is *durable*, **survives the principal's incapacity**. A non-durable POA terminates on incapacity, exactly when it is needed. A **springing** POA takes effect only on a defined event. **Every POA terminates at death.**
- **Health care proxy (medical POA)** — names someone to make medical decisions.
- **Living will (advance directive)** — states the client's own wishes about life-sustaining treatment.

An adviser taking instructions from an agent must have the **document on file** and confirm it has not been revoked.

Without a durable POA a family facing incapacity must petition for a **guardianship or conservatorship** — public, expensive, slow, and ongoing. A springing POA sounds prudent but often stalls at the custodian's desk, because someone must first certify the incapacity. And because **a POA dies with the principal**, the agent's authority ends at death; only the executor or successor trustee may act.

## Gift tax

- **Annual exclusion** — an indexed amount **per donee, per year** with no gift tax and no filing, and **no limit on the number of donees**. **Gift splitting** lets a married couple treat gifts as made half by each, doubling the exclusion, but requires a return.
- **Unlimited exclusions** — direct payments of **tuition to the school** and **medical expenses to the provider**, on top of the annual exclusion. The payment must go **to the institution, not the individual**.
- **Lifetime exemption (unified credit)** — a large indexed amount sheltering lifetime gifts and the taxable estate together. Legislation has repeatedly changed this figure and is scheduled to change it again; verify it rather than memorizing it.
- The **donor**, not the recipient, pays any gift tax, and a gift is **not taxable income to the donee**.

Two mechanics matter. The annual exclusion requires a **present interest**, so a gift into a trust the beneficiary cannot touch is a **future interest** and does not qualify — which is why irrevocable trusts use **Crummey withdrawal rights** to convert it. And "unified" means what it says: the **gift and estate systems share one exemption**, and lifetime taxable gifts are added back when the estate is computed. Gifting does not multiply the exemption; what it removes is **post-gift appreciation**, the whole reason to gift an asset expected to grow.

## Estate tax

The **gross estate** includes everything the decedent owned or controlled: probate and non-probate assets, the death benefit of life insurance the decedent **owned**, retirement accounts, and their share of jointly held property. Subtract debts, expenses, and the **charitable** and **marital** deductions to reach the taxable estate.

- **Unlimited marital deduction** — anything passing to a **U.S. citizen spouse** passes free of estate and gift tax. It **defers** rather than eliminates tax; the assets are taxed in the survivor's estate. (A **QDOT** is required for a non-citizen spouse.)
- **Portability** — a surviving spouse may use the deceased spouse's unused exemption amount, but only if an **estate tax return is filed** to elect it. This is why a return is often filed for an estate that owes nothing.

The marital deduction defers rather than forgives because spouses are treated as **one economic unit**: no tax until wealth leaves the couple. The trap is that leaving everything outright to a spouse used to **waste the first spouse's exemption**. **Portability** fixes that, but only for a couple who files. Two tested details: the ported **DSUE** is frozen at the first spouse's unused figure and **does not grow with inflation**, and a survivor who remarries and outlives the second spouse may generally use only the **most recent** deceased spouse's DSUE. A **credit shelter trust** shelters without an election and keeps post-death appreciation out of the survivor's estate too — at the price of a second step-up.

## Basis: the reason gifting strategy looks the way it does

- **Lifetime gift → carryover basis.** The donee inherits the donor's basis and holding period, and inherits the unrealized gain with it.
- **Transfer at death → step-up (or step-down) to fair market value**, with an automatically long-term holding period.

Therefore: **gift high-basis or cash assets; hold deeply appreciated, low-basis assets until death.** Gifting appreciated stock transfers a tax bill; bequeathing it erases the gain. The exception is charity, where donating **appreciated securities held more than a year** lets the client deduct fair market value and avoid the gain entirely.

The rule cuts both ways, and the **step-down** is the half people forget. An asset worth less than its basis at death takes the **lower** value and the built-in loss disappears — no one ever deducts it. So **sell depreciated assets during life** to harvest the loss rather than holding them to death. A gift of a loss asset also carries a **split basis** (donor's basis for gain, lower fair market value for loss), which usually makes selling first and gifting the cash cleaner.

## Scenario: the beneficiary form that beat the will

Ray divorced in 2009 and remarried in 2012. In 2014 he executed a new will leaving everything to his second wife, Nadia. He died owning a $900,000 rollover IRA whose beneficiary form, completed in 2003, still named his first wife; a $500,000 401(k) with no beneficiary form on file; a house titled JTWROS with Nadia; and a $300,000 brokerage account in his sole name.

The **IRA** passes by contract to the **first wife** — a beneficiary designation is not overridden by a later will, and an IRA is outside ERISA's spousal-consent rule. The **401(k)** goes to **Nadia**, because ERISA makes the surviving spouse the default beneficiary. The **house** passes to Nadia by survivorship. Only the **brokerage account** is governed by the will. Ray's careful 2014 will controlled $300,000 of a $1.7 million estate, and the fix cost nothing: one beneficiary form.

## Scenario: the trust that saved probate but not tax

Wanda funds a revocable living trust with her home, brokerage accounts, and a rental property, naming herself trustee and her son as successor. She tells her adviser she has "taken the house out of her estate."

She has not. Because she can revoke the trust and retrieve every asset, the property is **fully includible in her gross estate**, its income stays on her personal return, and a judgment creditor can reach it as before. What she did accomplish is still real: **no probate** on the retitled assets, **no ancillary probate** in the rental's state, **privacy**, and a **successor trustee** ready to act without a court if she loses capacity. Note what she has not done, though — anything she failed to retitle still passes through probate under the pour-over will, so funding the trust is the entire point.

## The cost of doing nothing

Clients defer estate planning because the benefit is invisible. Name the concrete costs. **Intestacy** substitutes a legislature's guess for the client's intent. **No guardian nomination** leaves a judge to choose who raises the children. **No durable power of attorney** forces a guardianship petition at the worst moment. **Stale beneficiary forms** pay ex-spouses. **Unnecessary probate** costs a percentage of the estate and months of delay, repeated in every state holding real property. **No portability election** can forfeit an entire exemption. None of this requires wealth to matter — a client with $400,000 and two young children has more at stake in the guardian nomination than a wealthy client has in the exemption.

## Charitable vehicles

- **Donor-advised fund (DAF)** — immediate deduction on funding, grants recommended over time. Simple and low-cost.
- **Charitable remainder trust (CRT)** — the donor receives an **income stream first**, the charity the **remainder**. Common for a low-basis concentrated position.
- **Charitable lead trust (CLT)** — the mirror image: the **charity gets the income first**, the remainder returns to family.
- **Qualified charitable distribution (QCD)** — an IRA owner **age 70½ or older** may send up to an indexed annual amount **directly from the IRA to a qualified charity**, excluded from income and able to satisfy the RMD. Note the mismatch: **QCDs start at 70½ even though RMDs now start at 73**.

## Three taxes that sound alike

- **Estate tax** — imposed on the **estate**, based on the total value transferred. Federal, plus a minority of states.
- **Inheritance tax** — imposed on the **recipient**, at rates that usually depend on the beneficiary's relationship to the decedent. A **state-level** tax only; spouses are typically exempt.
- **Income in respect of a decedent (IRD)** — income the decedent had earned but not yet received, such as a **Traditional IRA balance**, accrued interest, or unpaid wages. IRD is taxable as **ordinary income to the recipient** and **gets no step-up in basis**. This is the reason a Traditional IRA is a poor asset to leave to a high-bracket heir and an excellent one to leave to charity.`,
  pitfalls: [
    "A beneficiary designation and survivorship titling override the will; an outdated IRA beneficiary form will defeat even the most carefully drafted estate plan.",
    'A revocable living trust avoids probate but provides NO estate tax reduction and NO creditor protection — only an irrevocable transfer does that.',
    "Avoiding probate is not avoiding estate tax. Non-probate assets such as life insurance the decedent owned and TOD accounts are still in the gross estate.",
    "A Traditional IRA is income in respect of a decedent — it receives NO step-up in basis and is fully ordinary income to the heir, unlike appreciated stock.",
    'Tuition and medical gifts are unlimited only when paid DIRECTLY to the school or provider; writing the check to the individual makes it an ordinary gift subject to the annual exclusion.',
    "QCDs are available beginning at age 70½ even though the RMD age is now 73, and portability of a deceased spouse's unused exemption requires filing an estate tax return to elect it even when no tax is owed.",
  ],
  keyTerms: [
    {
      term: 'Probate',
      definition:
        "The court-supervised process of proving a will, settling debts, and distributing the decedent's individually owned property; it is public, can be slow and costly, and must be repeated in each state where real property is held.",
    },
    {
      term: 'JTWROS',
      definition:
        "Joint tenancy with right of survivorship — co-ownership in which a deceased owner's interest passes automatically to the surviving owners outside of probate.",
    },
    {
      term: 'Tenants in common',
      definition:
        "Co-ownership permitting unequal shares in which a deceased owner's fractional interest passes through their estate rather than to the other owners.",
    },
    {
      term: 'Revocable living trust',
      definition:
        'A trust the grantor may amend or revoke that avoids probate and provides incapacity management but offers no estate tax savings and no creditor protection.',
    },
    {
      term: 'Durable power of attorney',
      definition:
        "A written authorization for an agent to act on financial matters that remains effective after the principal becomes incapacitated, and terminates at the principal's death.",
    },
    {
      term: 'Annual gift tax exclusion',
      definition:
        'An indexed amount a donor may give to each donee each year free of gift tax and without filing a return; there is no limit on the number of donees, and spouses may elect gift splitting to double it.',
    },
    {
      term: 'Unlimited marital deduction',
      definition:
        'The rule allowing an unlimited amount to pass to a U.S. citizen spouse free of gift and estate tax, deferring rather than eliminating the tax until the surviving spouse dies.',
    },
    {
      term: 'Income in respect of a decedent (IRD)',
      definition:
        'Income the decedent had a right to but had not received, such as a Traditional IRA balance or accrued interest, which is taxable as ordinary income to the recipient and receives no step-up in basis.',
    },
  ],
  confusions: [
    {
      dont: 'Estate tax, imposed on the estate based on the total value transferred',
      with: 'Inheritance tax, a state-level tax imposed on the recipient at rates depending on relationship',
    },
    {
      dont: 'A revocable trust, which avoids probate only',
      with: 'An irrevocable trust, which can also remove assets from the gross estate and shelter them from creditors',
    },
    {
      dont: 'A charitable remainder trust, which pays income to the donor first and the remainder to charity',
      with: 'A charitable lead trust, which pays income to charity first and returns the remainder to the family',
    },
    {
      dont: 'Carryover basis on a lifetime gift, which passes the unrealized gain to the donee',
      with: 'Step-up in basis at death, which erases the unrealized gain',
    },
    {
      dont: 'A durable power of attorney, effective through incapacity',
      with: 'A non-durable power of attorney, which terminates the moment the principal becomes incapacitated',
    },
    {
      dont: 'Probate, which asks who holds title to an asset',
      with: 'The gross estate, which asks what the decedent owned or controlled — a much wider net',
    },
  ],
  workedExamples: [
    {
      title: 'Gift splitting across multiple recipients',
      setup:
        "Assume for this exercise that the annual gift tax exclusion is $18,000 per donee (a stated given; the real figure is indexed and must be looked up for the current year). A married couple has two adult children and four grandchildren — six donees. How much can they transfer in one year with no gift tax and no use of lifetime exemption? Separately, the husband alone writes a $30,000 check from his own account to each of the six, and the couple elects gift splitting. Is any of that taxable?",
      steps: [
        'Step 1 — establish the per-donee couple amount. Each spouse has a separate exclusion for each donee, so together they may give 2 x $18,000 = $36,000 to any one person.',
        'Step 2 — multiply by the number of donees. There is no limit on how many people may receive an annual-exclusion gift: 6 x $36,000 = $216,000 in a single year.',
        'Step 3 — now take the second question. The husband gave 6 x $30,000 = $180,000 entirely from his own funds, which without an election is $30,000 per donee from one donor.',
        'Step 4 — test that against one donor exclusion: $30,000 - $18,000 = $12,000 of taxable gift per donee, or 6 x $12,000 = $72,000 against lifetime exemption. That is the result if they do nothing.',
        'Step 5 — apply gift splitting. The election treats each gift as made one half by each spouse: $30,000 / 2 = $15,000 attributed to each spouse per donee.',
        'Step 6 — retest: $15,000 is below the $18,000 exclusion, so no taxable gift arises and no lifetime exemption is used. Each spouse still has $18,000 - $15,000 = $3,000 of room per donee.',
        'Step 7 — note the filing requirement. Gift splitting is an election, so both spouses must file a gift tax return consenting to it, even though the tax due is zero.',
        'Step 8 — add the free transfers on top. If the couple also pays a $45,000 tuition bill DIRECTLY to a grandchild university, that payment is excluded entirely and does not touch the $216,000 of annual-exclusion capacity.',
      ],
      answer:
        'The couple can move $216,000 in one year gift-tax-free across the six donees. With gift splitting elected, the $180,000 of checks written by the husband alone produces no taxable gift and consumes no exemption, though both spouses must file returns. Without the election it would have created $72,000 of taxable gifts.',
      watchOut:
        'Treating the exclusion as an annual TOTAL rather than a per-donee amount, which yields $36,000 for the couple instead of $216,000 — an error of $180,000. The second trap is assuming gift splitting is automatic for married couples; it must be elected on a filed return, and without it the husband here uses $72,000 of lifetime exemption.',
    },
    {
      title: 'Stepped-up basis at death versus carryover basis on a gift',
      setup:
        "A 78-year-old client owns stock purchased years ago for $80,000 that is now worth $300,000. She wants her daughter to have it. Compare two routes: gift it now, or leave it at death. Assume that in either case the daughter sells for $340,000, that the shares are worth $320,000 on the date of death, and that the long-term capital gains rate is 15%.",
      steps: [
        "Step 1 — route A, lifetime gift. A gift carries over the donor's basis, so the daughter's basis is $80,000, not the $300,000 value on the gift date.",
        'Step 2 — compute the gain on sale: $340,000 - $80,000 = $260,000.',
        'Step 3 — compute the tax: 0.15 x $260,000 = $39,000.',
        'Step 4 — route B, bequest. Property acquired from a decedent takes a basis equal to fair market value at death, $320,000, with an automatically long-term holding period.',
        'Step 5 — compute the gain: $340,000 - $320,000 = $20,000.',
        'Step 6 — compute the tax: 0.15 x $20,000 = $3,000.',
        'Step 7 — compare: $39,000 - $3,000 = $36,000 of tax saved by waiting. The $240,000 of appreciation that accrued during the client lifetime is never taxed to anyone.',
        'Step 8 — check the mirror case. Had the stock instead fallen to $60,000 by the date of death, the basis would STEP DOWN to $60,000 and the $20,000 built-in loss would vanish unrecovered. For that asset the right move is to sell during life and harvest the loss.',
      ],
      answer:
        'Gifting produces a $260,000 gain and $39,000 of tax; bequeathing produces a $20,000 gain and $3,000 of tax. Holding the appreciated position until death saves $36,000. Gift high-basis assets and cash; bequeath low-basis appreciated assets.',
      watchOut:
        "Applying a step-up to the gifted shares — using $300,000 as the daughter's basis and answering $6,000 of tax. There is no step-up on a lifetime gift; basis carries over. The other error is forgetting the step-DOWN, which turns the same rule into a trap for depreciated property.",
    },
    {
      title: 'Splitting an estate into probate and non-probate assets',
      setup:
        "A married decedent leaves: a home titled JTWROS with the spouse, worth $600,000; a brokerage account of $400,000 in his sole name with no TOD; an IRA of $250,000 naming his daughter; a life insurance policy he owned with a $500,000 death benefit payable to the spouse; a checking account of $60,000 registered POD to his son; a one-half tenants-in-common interest in a cabin, his share worth $180,000; and a car and personal effects in his sole name worth $40,000. Identify the probate estate, the non-probate transfers, and the federal gross estate.",
      steps: [
        'Step 1 — probate items are those owned individually with no survivorship or beneficiary mechanism: the brokerage account $400,000, the tenants-in-common cabin share $180,000 (a TIC interest does NOT pass by survivorship), and the car and effects $40,000.',
        'Step 2 — total the probate estate: $400,000 + $180,000 + $40,000 = $620,000.',
        'Step 3 — non-probate items pass by title or contract: the JTWROS home $600,000, the IRA $250,000, the life insurance $500,000, and the POD checking $60,000.',
        'Step 4 — total the non-probate transfers: $600,000 + $250,000 + $500,000 + $60,000 = $1,410,000.',
        'Step 5 — note the combined value of everything: $620,000 + $1,410,000 = $2,030,000.',
        'Step 6 — build the gross estate, which is a different question. Start with the full probate estate, $620,000.',
        'Step 7 — add the spousal JTWROS home at ONE HALF. Under the qualified joint interest rule, property held jointly by spouses is included 50% in the first decedent estate regardless of who paid for it: 0.50 x $600,000 = $300,000.',
        'Step 8 — add the remaining non-probate items in full, because the decedent owned or controlled them: IRA $250,000 + life insurance $500,000 (he owned the policy) + POD account $60,000 = $810,000.',
        'Step 9 — total the gross estate: $620,000 + $300,000 + $810,000 = $1,730,000. The marital deduction will later remove amounts passing to the spouse, but they enter the gross estate first.',
      ],
      answer:
        'Probate estate $620,000; non-probate transfers $1,410,000; federal gross estate $1,730,000 (probate $620,000, half the joint home $300,000, IRA $250,000, insurance $500,000, POD account $60,000).',
      watchOut:
        'Assuming non-probate means out of the estate, which produces a gross estate of $620,000 and understates it by $1,110,000. Avoiding probate is not avoiding estate tax. The second trap is treating the tenants-in-common cabin like a JTWROS asset; a TIC share has no survivorship feature and goes through probate.',
    },
    {
      title: 'How portability changes a surviving spouse exclusion',
      setup:
        "Take these figures as given for the exercise: the estate tax exclusion is $13,000,000 in the year the first spouse dies and $14,000,000 in the year the survivor dies, and the flat estate tax rate above the exclusion is 40%. The first spouse dies leaving $4,000,000 to the children and $6,000,000 outright to the surviving spouse. The survivor later dies with a $22,000,000 taxable estate (her own $16,000,000 plus the $6,000,000 inherited). Compute the result with and without a portability election.",
      steps: [
        'Step 1 — find the exclusion used at the first death. The $6,000,000 passing to the spouse is sheltered by the unlimited marital deduction and uses no exclusion; only the $4,000,000 to the children does.',
        'Step 2 — compute the deceased spousal unused exclusion: $13,000,000 - $4,000,000 = $9,000,000 of DSUE.',
        'Step 3 — note the condition. The DSUE is available only if the executor files an estate tax return at the first death and elects portability, even though that estate owes nothing.',
        'Step 4 — with the election, add the survivor own exclusion to the DSUE: $14,000,000 + $9,000,000 = $23,000,000 of available exclusion.',
        'Step 5 — compare to the estate: $22,000,000 is less than $23,000,000, so the taxable amount is zero and no federal estate tax is due.',
        'Step 6 — now redo it without the election. The survivor has only her own $14,000,000, so the taxable estate is $22,000,000 - $14,000,000 = $8,000,000.',
        'Step 7 — compute the tax: 0.40 x $8,000,000 = $3,200,000. That is the entire cost of not filing a return at the first death.',
        'Step 8 — observe the freeze. The DSUE stays at $9,000,000; it is NOT re-indexed to the year of the second death. Only the survivor own exclusion grew, from $13,000,000 to $14,000,000.',
      ],
      answer:
        'With portability elected, $23,000,000 of exclusion covers the $22,000,000 estate and no federal estate tax is owed. Without the election, $8,000,000 is taxable and the tax is $3,200,000 — the price of skipping a return that showed no tax due.',
      watchOut:
        "Indexing the DSUE up to the second-death year, which would give $14,000,000 + $10,000,000 = $24,000,000 and overstates the shelter by $1,000,000. The DSUE is frozen at the first spouse's unused figure. The second trap is assuming portability is automatic — it exists only if a timely estate tax return is filed and the election made.",
    },
  ],
};
