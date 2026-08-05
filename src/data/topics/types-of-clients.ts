import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'types-of-clients',
  title: 'Types of Clients and Account Registration',
  weight: '~3%',
  order: 17,
  summary:
    "How an account is registered determines who may trade it, who is taxed on it, what happens at death, and what documentation the firm must collect. The exam concentrates on joint account survivorship, business entity liability and taxation, trusts, custodial accounts, and the difference between trading authority and full power of attorney.",
  body: `## Individual and Joint Accounts

### Individual Account

One owner, one decision-maker, one taxpayer. At death the assets pass by **will through probate**, unless a beneficiary designation or a **transfer on death (TOD)** registration overrides that.

### Joint Tenants with Right of Survivorship (JTWROS)

Two or more owners hold **undivided equal interests**. At the death of one tenant, that share passes **automatically to the surviving tenant(s) by operation of law**, bypassing probate and the will. Any owner can trade the account, but **checks and distributions must be payable to all owners**.

### Tenants in Common (TIC)

Owners may hold **unequal percentages**. At death, the decedent's share passes to that owner's **estate** — to heirs under the will — **not** to the surviving co-owner. TIC is the natural registration for unrelated business partners or a second marriage where each spouse wants their share to go to their own children.

### Tenancy by the Entirety (TBE)

Available only to **married couples**, and only in states that recognize it. It behaves like JTWROS with survivorship but adds a creditor shield: **neither spouse can unilaterally sever or encumber** the property, so a creditor of one spouse alone generally cannot reach it.

### Community Property

In community property states, most property acquired **during the marriage** is owned equally by both spouses regardless of whose name is on it. Property owned before marriage or received by gift or inheritance remains **separate property**. At death each spouse controls the disposition of their half — there is **no automatic survivorship** unless the couple elects it. A significant tax feature: community property may receive a **full step-up in basis on both halves** at the first death, versus a step-up on only the decedent's half in JTWROS.

| Registration | Survivorship? | At death, decedent's share goes to | Notes |
| --- | --- | --- | --- |
| **JTWROS** | Yes | Surviving joint tenant(s) | Avoids probate; equal undivided interests |
| **Tenants in common** | No | Decedent's **estate** | Unequal shares allowed |
| **Tenancy by the entirety** | Yes | Surviving spouse | Married couples only; creditor protection |
| **Community property** | Generally no | Decedent's estate (their half) | Potential double step-up in basis |

## Business Entity Accounts

| Entity | Liability | Taxation | Key documentation |
| --- | --- | --- | --- |
| **Sole proprietorship** | Unlimited personal | Pass-through on the owner's return | Usually treated as an individual account |
| **General partnership** | Unlimited, joint and several | Pass-through via Schedule K-1 | **Partnership agreement** naming authorized traders |
| **Limited partnership** | GP unlimited; LPs limited to investment | Pass-through via K-1 | Partnership agreement; LPs cannot manage |
| **LLC** | Limited for all members | Default pass-through; may elect corporate | **Operating agreement** and member/manager authority |
| **C corporation** | Limited | **Double taxation** — corporate level, then dividends | **Corporate resolution** authorizing the account |
| **S corporation** | Limited | Pass-through; shareholder limits and one class of stock | Corporate resolution |

An **S corporation** is a tax election, not a different legal form. It gives corporate limited liability with pass-through taxation, but is restricted — a capped number of shareholders, generally only individuals and certain trusts, U.S. persons only, and **one class of stock**. A **C corporation** has no such limits but pays entity-level tax.

For any entity account the firm must obtain documentation establishing **who is authorized to act**: a **corporate resolution** for corporations, the **partnership agreement** for partnerships, the **operating agreement** for an LLC. Margin and options trading require the authorizing document to permit those activities specifically.

## Trusts

A trust separates legal title from beneficial enjoyment. Three roles:

- **Grantor** (settlor, trustor) — creates and funds the trust.
- **Trustee** — holds legal title, manages assets, owes fiduciary duties.
- **Beneficiary** — receives the benefit; may be an income beneficiary or a remainderman.

**The trust document governs.** It defines investment powers, distribution standards, successor trustees, and termination — investment authority that is not granted does not exist. Where the document is silent, state law (often the **Uniform Prudent Investor Act**) supplies default duties: diversify, evaluate risk at the **portfolio level**, and act impartially between income and remainder beneficiaries. Firms obtain a **trustee certification** before opening the account.

### Revocable Versus Irrevocable

A **revocable (living) trust** can be amended or revoked by the grantor, who typically serves as trustee and beneficiary during life. It **avoids probate** but provides **no creditor protection and no estate tax reduction** — the assets remain in the grantor's taxable estate. An **irrevocable trust** generally cannot be changed; the grantor gives up control, which is what buys potential **creditor protection and estate exclusion**.

### Simple Versus Complex

A **simple trust** must distribute **all income currently**, makes no charitable contributions, and distributes no principal — beneficiaries are taxed on the income. A **complex trust** may **accumulate** income, distribute principal, or give to charity; retained income is taxed to the trust at a **highly compressed rate schedule** that reaches the top bracket at a very low income level. In a **grantor trust**, income is taxed to the grantor personally regardless of who receives it.

## Estates, Guardianships, and Conservatorships

An **estate account** is opened by the **executor** (named in the will) or **administrator** (appointed when there is no will), who provides **letters testamentary** or **letters of administration**. The account exists to marshal assets, pay debts and taxes, and distribute — not to pursue growth, so speculation is presumptively unsuitable.

**Guardianship** and **conservatorship** accounts are opened under **court order** for minors or incapacitated adults. The order defines authority, and courts commonly require **conservative, income-oriented investing** and periodic accountings.

## UTMA and UGMA Custodial Accounts

A custodial account holds property for one **minor**, with one **custodian**, registered in the minor's name with the minor's **Social Security number**.

- The gift is an **irrevocable, completed gift**. The donor cannot take it back, and the custodian may not use the assets for their own benefit.
- The custodian has full investment control but must act **prudently**; speculative and margin trading are generally prohibited.
- **Income is taxed to the minor.** Under the **kiddie tax**, a small amount of unearned income is offset by the standard deduction, a similar next tranche is taxed at the child's rate, and unearned income above that threshold is taxed at the **parents' marginal rate** (the thresholds are indexed annually). The rules apply through age 18, and to full-time students under 24.
- Control transfers to the beneficiary at the **age of majority** set by state law — commonly **18 or 21**, and up to 25 in some UTMA states. At that point the now-adult owner may spend the money on anything.
- **UGMA** is limited largely to cash and securities; **UTMA** permits a broader range of property including real estate and often a later transfer age.
- Custodial assets count as the **student's** asset in financial aid formulas, which weighs against them relative to a parent-owned 529.

## Institutional and Retirement Accounts

**Retirement plan accounts** — IRAs, 401(k)s, profit-sharing and pension plans — are governed by the plan document and, for employer plans, by **ERISA**. The **beneficiary designation controls** and overrides the will; municipal bonds and other tax-advantaged vehicles are unsuitable inside an already tax-deferred account; and prohibited transaction rules restrict self-dealing.

**Institutional accounts** — corporations, pensions, endowments, foundations, banks, insurers — require documentation of authority and often carry their own written investment policy the adviser must follow.

## Third-Party Authorization

- **Limited (trading) authorization** lets a third party place **buy and sell orders** only. No withdrawal of cash or securities.
- **Full trading authorization** adds the ability to **withdraw cash and securities** from the account.
- A **full power of attorney** is a broader legal instrument that may permit acting for the principal on matters beyond the account entirely. A **durable** power of attorney survives the principal's **incapacity**; a non-durable one does not.
- **All powers of attorney terminate at the death of the principal**, durable or not. So does a trading authorization.

**Discretionary authority** granted to the adviser is different again: it lets the adviser choose **asset, action, and amount** without contacting the client, and requires **prior written authorization**. Deciding only **time and price** is not discretion.

## Transfer on Death

A **TOD** (or payable on death) registration lets an **individual or JTWROS** account pass directly to named beneficiaries at death, **avoiding probate**. It does **not** avoid estate tax and does **not** override a beneficiary designation on a retirement account. The beneficiary has no rights while the owner lives, and the owner may change the designation at any time.`,
  pitfalls: [
    "In tenants in common, the deceased owner's share goes to their estate, not to the surviving co-owner. Only JTWROS and tenancy by the entirety carry automatic survivorship.",
    "A revocable living trust avoids probate but provides no creditor protection and no estate tax savings — the assets stay in the grantor's taxable estate.",
    "A UTMA/UGMA gift is irrevocable. The donor cannot reclaim the assets, and at the age of majority the beneficiary receives full control regardless of the donor's wishes.",
    "Every power of attorney and trading authorization terminates at the death of the principal. Continuing to accept orders from the agent after death is a violation.",
    "Limited trading authorization permits orders only. Withdrawing cash or securities requires full authorization, and moving assets to the agent's own account is never permitted under either.",
    "An S corporation is a tax election layered on a corporation, not a separate legal entity — it keeps limited liability but adds shareholder-count, shareholder-type, and single-class-of-stock restrictions.",
    "Do not place municipal bonds or other tax-advantaged products inside an IRA or qualified plan; the tax benefit is wasted inside an already tax-deferred account.",
  ],
  keyTerms: [
    {
      term: 'JTWROS',
      definition:
        'Joint tenants with right of survivorship — equal undivided ownership in which a decedent share passes automatically to the surviving tenants outside probate.',
    },
    {
      term: 'Tenants in common',
      definition:
        "A joint registration permitting unequal ownership percentages in which a decedent's share passes to that owner's estate rather than to the surviving co-owner.",
    },
    {
      term: 'Tenancy by the entirety',
      definition:
        'A survivorship registration available only to married couples in recognizing states, adding creditor protection because neither spouse may act unilaterally.',
    },
    {
      term: 'Community property',
      definition:
        'A marital property system in which most assets acquired during marriage are owned equally by both spouses, with each spouse controlling disposition of their half at death.',
    },
    {
      term: 'Corporate resolution',
      definition:
        'The board document that authorizes opening a brokerage account and names the individuals permitted to trade it, including any margin or options authority.',
    },
    {
      term: 'Irrevocable trust',
      definition:
        'A trust the grantor cannot amend or revoke; surrendering control is what enables potential creditor protection and exclusion from the taxable estate.',
    },
    {
      term: 'Simple trust',
      definition:
        'A trust that must distribute all income currently, makes no charitable gifts, and distributes no principal, so beneficiaries are taxed on the income.',
    },
    {
      term: 'Kiddie tax',
      definition:
        "The rule taxing a minor's unearned income above an annually indexed threshold at the parents' marginal rate, applicable through age 18 and to full-time students under 24.",
    },
    {
      term: 'Durable power of attorney',
      definition:
        'A power of attorney that remains effective after the principal becomes incapacitated, but which still terminates at the principal death.',
    },
  ],
  confusions: [
    {
      dont: 'JTWROS — decedent share passes automatically to the surviving joint tenant',
      with: "Tenants in common — decedent share passes to the decedent's estate and heirs",
    },
    {
      dont: 'Revocable living trust — probate avoidance only, assets remain in the taxable estate',
      with: 'Irrevocable trust — grantor gives up control in exchange for creditor and estate tax benefits',
    },
    {
      dont: 'Limited trading authorization — orders only',
      with: 'Full trading authorization — orders plus withdrawal of cash and securities',
    },
    {
      dont: 'Discretionary authority — adviser chooses asset, action, and amount, requiring prior written client authorization',
      with: 'Time and price discretion — choosing only when and at what price to execute a client-specified trade, which is not discretion',
    },
    {
      dont: 'C corporation — entity-level tax plus tax on dividends, unlimited shareholders',
      with: 'S corporation — pass-through taxation with shareholder-count, eligibility, and single-class-of-stock restrictions',
    },
  ],
};
