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

## Wills and intestacy

A **will** directs probate property, names an **executor (personal representative)**, and — critically for families with children — names a **guardian**. Dying without a valid will is **intestacy**, and **state law** then decides who inherits, typically spouse and blood relatives in a fixed order, with no provision for stepchildren, unmarried partners, or charity. A **codicil** amends a will.

## Titling and its estate consequences

| Form | Who may own | At death |
| --- | --- | --- |
| **Sole ownership** | One person | Passes by will or intestacy — **probate** |
| **JTWROS** | Any two or more | Passes automatically to survivors — **no probate** |
| **Tenants in common (TIC)** | Any two or more, **unequal shares allowed** | The decedent's share passes by will — **probate** |
| **Tenancy by the entirety** | **Spouses only** (where recognized) | Passes to the spouse; adds creditor protection against one spouse's creditors |
| **Community property** | Spouses in community property states | Each spouse owns half; a **full double step-up** on the whole property is generally available at the first death |

That last line matters: in a community property state both halves get a new basis at the first death, whereas with JTWROS only the decedent's fractional share is stepped up.

## Trusts

A **trust** separates legal title (held by the **trustee**) from beneficial enjoyment (the **beneficiary**), on terms set by the **grantor** (settlor).

### Revocable living trust

The grantor can amend or revoke it, usually serves as their own trustee, and reports the income on their own return. What it does and does not do:

- **Does** avoid probate for assets actually retitled into it, keep the disposition **private**, and provide a seamless management structure if the grantor becomes incapacitated
- **Does not** reduce income tax, **does not** reduce estate tax (the assets are fully includible in the gross estate), and **does not** protect assets from the grantor's creditors

A **pour-over will** catches anything the client forgot to retitle and sends it into the trust — through probate.

### Irrevocable trust

The grantor gives up control. Because the transfer is complete, assets can be **removed from the gross estate** and can offer **creditor protection**, at the price of flexibility. Irrevocable trusts are their own taxpayers and hit the top bracket at very low income, so income is often distributed to beneficiaries instead.

Also recognize: **testamentary trust** (created by the will, so it does pass through probate), **bypass/credit shelter trust**, **ILIT** (holds life insurance to keep the death benefit out of the estate), and **QTIP** (provides for a surviving spouse while the grantor controls the remainder).

## Incapacity documents

- **Durable power of attorney** — authorizes an agent to act on financial matters and, because it is *durable*, **survives the principal's incapacity**. A non-durable POA terminates on incapacity, exactly when it is needed. A **springing** POA takes effect only on a defined event. **Every POA terminates at death.**
- **Health care proxy (medical POA)** — names someone to make medical decisions.
- **Living will (advance directive)** — states the client's own wishes about life-sustaining treatment.

An adviser taking instructions from an agent must have the **document on file** and confirm it has not been revoked.

## Gift tax

- **Annual exclusion** — an indexed amount **per donee, per year** (roughly **$19,000–$20,000** in the mid-2020s) with no gift tax and no filing, and **no limit on the number of donees**. **Gift splitting** lets a married couple treat gifts as made half by each, doubling the exclusion, but requires a return.
- **Unlimited exclusions** — direct payments of **tuition to the school** and **medical expenses to the provider**, on top of the annual exclusion. The payment must go **to the institution, not the individual**.
- **Lifetime exemption (unified credit)** — a large indexed amount, in the **$13–15 million** range per person in the mid-2020s, sheltering lifetime gifts and the taxable estate together. Legislation has repeatedly changed this figure and is scheduled to change it again; verify it rather than memorizing it.
- The **donor**, not the recipient, pays any gift tax, and a gift is **not taxable income to the donee**.

## Estate tax

The **gross estate** includes everything the decedent owned or controlled: probate and non-probate assets, the death benefit of life insurance the decedent **owned**, retirement accounts, and their share of jointly held property. Subtract debts, expenses, and the **charitable** and **marital** deductions to reach the taxable estate.

- **Unlimited marital deduction** — anything passing to a **U.S. citizen spouse** passes free of estate and gift tax. It **defers** rather than eliminates tax; the assets are taxed in the survivor's estate. (A **QDOT** is required for a non-citizen spouse.)
- **Portability** — a surviving spouse may use the deceased spouse's unused exemption amount, but only if an **estate tax return is filed** to elect it. This is why a return is often filed for an estate that owes nothing.

## Basis: the reason gifting strategy looks the way it does

- **Lifetime gift → carryover basis.** The donee inherits the donor's basis and holding period, and inherits the unrealized gain with it.
- **Transfer at death → step-up (or step-down) to fair market value**, with an automatically long-term holding period.

Therefore: **gift high-basis or cash assets; hold deeply appreciated, low-basis assets until death.** Gifting appreciated stock transfers a tax bill; bequeathing it erases the gain. The exception is charity, where donating **appreciated securities held more than a year** lets the client deduct fair market value and avoid the gain entirely.

## Charitable vehicles

- **Donor-advised fund (DAF)** — immediate deduction on funding, grants recommended over time. Simple and low-cost.
- **Charitable remainder trust (CRT)** — the donor receives an **income stream first**, the charity the **remainder**. Common for a low-basis concentrated position.
- **Charitable lead trust (CLT)** — the mirror image: the **charity gets the income first**, the remainder returns to family.
- **Qualified charitable distribution (QCD)** — an IRA owner **age 70½ or older** may send up to an indexed annual amount (about **$108,000** and rising) **directly from the IRA to a qualified charity**, excluded from income and able to satisfy the RMD. Note the mismatch: **QCDs start at 70½ even though RMDs now start at 73**.

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
  ],
};
