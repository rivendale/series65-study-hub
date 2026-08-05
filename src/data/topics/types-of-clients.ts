import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'types-of-clients',
  title: 'Types of Clients and Account Registration',
  weight: '~3%',
  order: 17,
  summary:
    "How an account is registered determines who may trade it, who is taxed on it, what happens at death, and what documentation the firm must collect. The exam concentrates on joint account survivorship, business entity liability and taxation, trusts, custodial accounts, and the difference between trading authority and full power of attorney.",
  body: `Every registration answers four questions, and exam items are almost always testing one of them: **who may give instructions**, **who is taxed**, **what happens at death**, and **what documentation the firm must hold** before accepting an order. Work through those four and most account-type questions resolve themselves.

## Individual and Joint Accounts

### Individual Account

One owner, one decision-maker, one taxpayer. At death assets pass by **will through probate** unless a beneficiary designation or a **transfer on death (TOD)** registration overrides that.

### Joint Tenants with Right of Survivorship (JTWROS)

Two or more owners hold **undivided equal interests**. At the death of one tenant that share passes **automatically to the surviving tenant(s) by operation of law**, bypassing probate and the will. Any owner may trade, but **checks and distributions must be payable to all owners**.

### Tenants in Common (TIC)

Owners may hold **unequal percentages**. At death the decedent's share passes to that owner's **estate** and heirs under the will, **not** to the surviving co-owner. TIC is the natural registration for unrelated business partners, or a second marriage where each spouse wants their share to go to their own children.

### Tenancy by the Entirety (TBE)

Available only to **married couples**, and only in recognizing states. It behaves like JTWROS with survivorship but adds a creditor shield: **neither spouse can unilaterally sever or encumber** the property, so a creditor of one spouse alone generally cannot reach it.

### Community Property

In community property states, most property acquired **during the marriage** is owned equally by both spouses regardless of whose name is on it. Property owned before marriage or received by gift or inheritance stays **separate property**. At death each spouse controls their own half — there is **no automatic survivorship** unless the couple elects it. A significant tax feature: community property may receive a **full step-up in basis on both halves** at the first death, versus a step-up on only the decedent's half in JTWROS.

### Why the Distinctions Exist

**Survivorship is a transfer by operation of law, not by will.** That is why JTWROS overrides the will: the survivor's interest was already there and simply expands when the other is extinguished, so nothing passes through probate. Hence the trap — a client who leaves everything to the children in a will, then opens a JTWROS account with a new spouse, has disinherited them from that account.

**Unequal contribution is the reason TIC exists.** JTWROS assumes equal undivided interests, so an owner who funded 80% gets 50% back if the tenancy is severed. Tenants in common lets ownership match contribution, and each share passes to its owner's estate and heirs.

**Severance** is the other difference. A joint tenant may generally sever a JTWROS unilaterally, converting it to a tenancy in common and destroying survivorship. A **tenant by the entirety cannot** — and that inability to act alone is exactly what creates the creditor protection, since a creditor cannot attach an interest the debtor spouse cannot convey.

**The basis rule follows ownership, not the label.** In JTWROS only the decedent's half is included in the estate, so only that half is revalued. Community property belongs to the marital community, so the whole asset is revalued at the first death — the **double step-up**. For non-spouse joint tenants the **consideration-furnished** rule applies instead: the estate includes the portion attributable to what the decedent actually contributed.

### Scenario: Second Marriage, Wrong Registration

A client remarries at 61. She has two adult children from her first marriage and $900,000 in a brokerage account funded entirely from premarital assets. Her will leaves everything to her children. At the new spouse's suggestion the account is retitled **JTWROS**. She dies four years later.

The children receive nothing from that account. Survivorship operates outside the will, so the whole $900,000 passes automatically to the surviving spouse, who may then leave it to anyone. The will was not overridden — it never governed the account.

What would have matched her intent: **tenants in common**, so her share passes under her will, or an individual account with a **TOD** naming the children. If she wanted the spouse supported for life with the remainder to her children, only a **trust** works, because only a trust separates the income interest from the remainder.

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

An **S corporation** is a tax election, not a separate legal form: corporate limited liability with pass-through taxation, but restricted to a capped number of shareholders, generally individuals and certain trusts, U.S. persons only, and **one class of stock**. A **C corporation** has no such limits but pays entity-level tax.

For any entity account the firm must obtain documentation establishing **who is authorized to act**: a **corporate resolution** for corporations, the **partnership agreement** for partnerships, the **operating agreement** for an LLC. Margin and options trading require the authorizing document to permit those activities specifically — general authority to open an account is not authority to sell uncovered options.

The recurring exam point: **the entity, not the individual, is the client.** An authorized officer acts for the corporation, so instructions to move assets to that officer personally fall outside the authorization however senior they are. In a **limited partnership** only the **general partner** may act.

### Non-Profits, Endowments, and Foundations

Charitable organizations, endowments, and private foundations are governed by their **charter, bylaws, and board resolutions**, and by a state prudence standard — in most states the **Uniform Prudent Management of Institutional Funds Act (UPMIFA)**. UPMIFA directs the board to invest and spend as a prudent person would, weighing purposes, economic conditions, inflation, and expected total return. Two features are tested:

- **Total return spending.** UPMIFA abandoned the older rule that a fund could spend income only and never dip below historic dollar value. The board may spend a prudent portion of total return, freeing the portfolio from high-yield holdings that impair growth.
- **Perpetual horizon with an annual liability.** An endowment funds a spending rate forever, so inflation matters more than for most institutions. A donor restriction on a specific gift overrides general policy.

### Investment Clubs

An **investment club** pools money from individuals investing jointly, usually as a **general partnership**. Members vote on holdings, income flows through on **K-1s**, and the firm needs the **partnership agreement** naming who may place orders. A club is generally **not** an investment company or an adviser so long as members invest their own money and nobody is paid for advising the others; as a general partnership, members bear **unlimited joint and several liability**.

## Trusts

A trust separates legal title from beneficial enjoyment. Three roles: the **grantor** (settlor, trustor) creates and funds it, the **trustee** holds legal title and owes fiduciary duties, and the **beneficiary** receives the benefit as either an income beneficiary or a remainderman.

**The trust document governs.** It defines investment powers, distribution standards, successor trustees, and termination — investment authority that is not granted does not exist. Firms obtain a **trustee certification** before opening the account.

### Revocable Versus Irrevocable

A **revocable (living) trust** can be amended or revoked by the grantor, who usually serves as trustee and beneficiary during life. It **avoids probate** but gives **no creditor protection and no estate tax reduction** — the assets stay in the grantor's taxable estate. An **irrevocable trust** generally cannot be changed; giving up control is what buys potential **creditor protection and estate exclusion**.

### Trusts by Type

- **Living (inter vivos) trust** — created during life. A **testamentary trust** is created by the will, so it takes effect only at death and does **not** avoid probate.
- **Bypass (credit shelter) trust** — funded at the first death to use that spouse's estate tax exclusion, keeping the assets out of the survivor's estate.
- **Marital / QTIP trust** — income to the surviving spouse for life while the grantor controls the remainder. The classic second-marriage answer.
- **Special needs trust** — supplements a disabled beneficiary without displacing means-tested public benefits.
- **Charitable remainder trust** — income for a term, remainder to charity; a **charitable lead trust** reverses the order.

### The Prudent Investor Rule

Where the document is silent the **Uniform Prudent Investor Act** governs, and it changed trust investing in four ways:

1. **Risk is judged at the portfolio level**, not security by security. No investment is imprudent in isolation; a small aggressive allocation can be prudent inside a diversified portfolio.
2. **Diversification is a duty**. Failing to diversify is a breach unless the trust purposes require concentration.
3. **Delegation is permitted** — a trustee may hire a manager provided the selection, terms, and ongoing monitoring are themselves prudent. Under the older rule delegation was itself a breach.
4. **Duty of impartiality.** The trustee must balance the **income beneficiary**, who wants yield now, against the **remainderman**, who wants growth. Loading up on high-coupon bonds favours the first at the second's expense and is a breach even though every holding is conservative.

The document outranks the default rule: if the instrument directs or forbids something, the trustee follows the instrument.

### Simple Versus Complex

A **simple trust** must distribute **all income currently**, makes no charitable gifts, and distributes no principal — beneficiaries are taxed on that income. A **complex trust** may **accumulate** income, distribute principal, or give to charity; retained income is taxed to the trust on a **highly compressed rate schedule** that reaches the top bracket at a very low income level. In a **grantor trust**, income is taxed to the grantor personally regardless of who receives it.

## Estates, Guardianships, and Conservatorships

An **estate account** is opened by the **executor** (named in the will) or **administrator** (appointed when there is none), who provides **letters testamentary** or **letters of administration**. It exists to marshal assets, pay debts and taxes, and distribute — not to pursue growth, so speculation is presumptively unsuitable.

**Guardianship** and **conservatorship** accounts are opened under **court order** for minors or incapacitated adults. The order defines authority, and courts commonly require **conservative, income-oriented investing** and periodic accountings.

## UTMA and UGMA Custodial Accounts

A custodial account holds property for one **minor**, with one **custodian**, registered in the minor's name with the minor's **Social Security number**.

- The gift is an **irrevocable, completed gift**; the donor cannot take it back and the custodian may not use the assets for their own benefit.
- The custodian has full investment control but must act **prudently**; speculative and margin trading are generally prohibited.
- **Income is taxed to the minor.** Under the **kiddie tax**, a small amount of unearned income is offset by the standard deduction, a similar next tranche is taxed at the child's rate, and unearned income above that threshold is taxed at the **parents' marginal rate** (the thresholds are indexed annually). The rules apply through age 18, and to full-time students under 24.
- Control transfers at the **age of majority** set by state law — commonly **18 or 21**, up to 25 in some UTMA states — after which the adult owner may spend it on anything.
- **UGMA** covers largely cash and securities; **UTMA** permits a broader range including real estate, and often a later transfer age.
- Custodial assets count as the **student's** asset in aid formulas, weighing against them relative to a parent-owned 529.

### Scenario: The UTMA That Reached Majority

A grandparent funded a UTMA in 2008 with $40,000 for college. It is now worth $138,000 and the beneficiary has just turned 21, the age of majority in that state. He announces he is buying a boat.

Nothing can be done. The 2008 transfer was an **irrevocable completed gift**, and the custodian's authority ended at majority. The custodian must retitle the account into the beneficiary's name; retitling it back to the donor or continuing to trade it is conversion of someone else's property.

What would have preserved control: a **529 plan** owned by the grandparent, who may change the beneficiary or reclaim the money subject to tax and penalty on earnings, or a **trust** whose distribution standards run past 21.

## Institutional and Retirement Accounts

**Retirement plan accounts** — IRAs, 401(k)s, profit-sharing and pension plans — are governed by the plan document and, for employer plans, by **ERISA**. Four features recur on the exam:

- **The beneficiary designation controls** and overrides the will. A stale designation naming an ex-spouse generally still pays the ex-spouse.
- An IRA is **individual by definition** — there is no joint IRA, and a spouse has no ownership interest in the other spouse's IRA.
- **Tax-advantaged products are wasted inside** an already tax-deferred account: municipals and annuities add cost while buying a benefit the wrapper already provides.
- **Prohibited transaction rules** bar self-dealing, and ERISA fiduciaries owe duties of loyalty, prudence, diversification, and adherence to plan documents.

**Institutional accounts** — pensions, endowments, foundations, banks, insurers — require documentation of authority and usually carry their own written investment policy the adviser must follow.

## Third-Party Authorization

- **Limited (trading) authorization** permits **buy and sell orders** only — no withdrawal of cash or securities.
- **Full trading authorization** adds the power to **withdraw cash and securities**.
- A **full power of attorney** is a broader instrument reaching matters beyond the account. A **durable** power survives the principal's **incapacity**; a non-durable one does not.
- **All powers of attorney terminate at the death of the principal**, durable or not, as does a trading authorization. On notice of death the firm freezes the account, cancels open orders, and deals only with the executor or administrator on production of court papers.
- A **springing** power takes effect only on a stated event, typically certified incapacity; the firm needs evidence the trigger occurred before accepting orders.
- Revocation is effective when the firm has **notice** — telling the agent is not telling the firm.

**Discretionary authority** is different again: it lets the adviser choose **asset, action, and amount** without contacting the client, and requires **prior written authorization**. Choosing only **time and price** is not discretion.

## Transfer on Death

A **TOD** (or payable on death) registration lets an **individual or JTWROS** account pass directly to named beneficiaries, **avoiding probate**. It does **not** avoid estate tax and does **not** override a retirement account beneficiary designation. The beneficiary has no rights while the owner lives, and the owner may change the designation at any time.`,
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
  workedExamples: [
    {
      title: 'Basis at the first death: JTWROS versus community property',
      setup:
        'A married couple bought stock years ago for $200,000 using joint funds. It is now worth $600,000. One spouse dies and the survivor sells the entire position immediately for $600,000. Compare the outcome if the account was titled JTWROS with the outcome if the same asset was community property. Assume a 15% long-term capital gains rate.',
      steps: [
        'Split the asset into halves, because basis is adjusted only on what is included in the decedent estate.',
        'Original basis per half: $200,000 / 2 = $100,000 each',
        'Fair market value per half at death: $600,000 / 2 = $300,000 each',
        'JTWROS between spouses — only the decedent half is included, so only that half is stepped up.',
        "Decedent half new basis: $300,000. Survivor half keeps its original basis: $100,000",
        'JTWROS total basis: $300,000 + $100,000 = $400,000',
        'JTWROS gain on sale: $600,000 − $400,000 = $200,000',
        'Tax at 15%: $200,000 × 0.15 = $30,000',
        'Community property — the entire asset belongs to the marital community, so BOTH halves are revalued.',
        'Community property total basis: $300,000 + $300,000 = $600,000',
        'Community property gain: $600,000 − $600,000 = $0, so no tax',
        'Difference in basis: $600,000 − $400,000 = $200,000. Difference in tax: $30,000',
      ],
      answer:
        'Under JTWROS the survivor has a $400,000 basis and a $200,000 taxable gain, costing about $30,000 in tax. Under community property the double step-up produces a $600,000 basis and no gain at all — the same asset, the same death, $30,000 apart on registration alone.',
      watchOut:
        'Assuming a full step-up on a spousal JTWROS account. That reports a $600,000 basis and zero gain, understating the gain by $200,000 and the tax by $30,000. Only the decedent half is included in the estate outside a community property state. The mirror error applies to non-spouse joint tenants, where neither rule governs: the consideration-furnished rule steps up the portion attributable to what the decedent actually contributed, so a parent who funded the whole account is treated as having owned the whole account.',
    },
    {
      title: 'Kiddie tax on a UTMA account',
      setup:
        "A 14-year-old has no earned income. His UTMA account produced $2,400 of taxable bond interest and $1,700 of non-qualified dividends this year, all ordinary income. Assume as givens for this problem that the first $1,300 of unearned income is offset by the standard deduction, the next $1,300 is taxed at the child's own rate of 10%, and unearned income above $2,600 is taxed at the parents' marginal rate of 32%. Compute the tax and identify how much is exposed to the parents' rate.",
      steps: [
        'Total unearned income: $2,400 + $1,700 = $4,100',
        'Tier 1 — first $1,300 offset by the standard deduction. Tax: $0',
        "Tier 2 — next $1,300 at the child's own rate: $1,300 × 0.10 = $130",
        'Tier 3 — everything above the $2,600 threshold is exposed to the parents rate.',
        'Amount in tier 3: $4,100 − $2,600 = $1,500',
        "Tax at the parents' rate: $1,500 × 0.32 = $480",
        'Total tax: $0 + $130 + $480 = $610',
        'Share of unearned income taxed at the parents rate: $1,500 / $4,100 = 36.6%',
      ],
      answer:
        "Total tax is $610. Only $1,500 of the $4,100 — about 36.6% — is exposed to the parents' 32% rate; the rest is sheltered or taxed at the child's own 10%.",
      watchOut:
        "Applying the parents' rate to the whole $4,100. That gives $4,100 × 0.32 = $1,312, overstating the tax by $702, because it ignores the two lower tiers. Two further traps: the income is taxed to the MINOR, not to the custodian or the donor, so the custodian's own bracket is irrelevant; and a UTMA is not a tax-deferred account, so the income is reported every year whether or not anything is withdrawn.",
    },
    {
      title: 'Splitting trust income between a simple trust and its beneficiary',
      setup:
        "A simple trust receives $60,000 of taxable interest and pays $4,000 of deductible trustee and administration fees allocable to that income. It also realizes $25,000 of long-term capital gain which, under the governing instrument and state law, is allocated to principal and retained by the trust. The sole income beneficiary is in a 24% bracket. Assume the trust's marginal rate on the retained gain is 23.8% including the net investment income tax. Who pays what?",
      steps: [
        'A simple trust must distribute all income currently, so the income is taxed to the beneficiary, not to the trust.',
        'Distributable net income: $60,000 interest − $4,000 deductible fees = $56,000',
        'The trust distributes $56,000 and takes an offsetting $56,000 distribution deduction, leaving it no taxable ordinary income.',
        "Beneficiary tax on the K-1 income: $56,000 × 0.24 = $13,440",
        'Beneficiary keeps: $56,000 − $13,440 = $42,560',
        'The $25,000 capital gain was allocated to principal, so it stays with the trust and is taxed at trust rates.',
        'Trust tax on the retained gain: $25,000 × 0.238 = $5,950',
        'Trust retains after tax: $25,000 − $5,950 = $19,050',
        'Total tax paid: $13,440 + $5,950 = $19,390',
        'Check against pre-tax economics: $60,000 − $4,000 + $25,000 = $81,000, and $81,000 − $19,390 = $61,610 = $42,560 + $19,050',
      ],
      answer:
        'The beneficiary reports $56,000 and pays $13,440, keeping $42,560. The trust reports only the $25,000 retained gain and pays $5,950, retaining $19,050. Total tax on $81,000 of economic income is $19,390.',
      watchOut:
        "Taxing the $56,000 of income inside the trust. Trust brackets are severely compressed and reach the top rate at a very low income level, so at 37% the same $56,000 would cost $20,720 instead of $13,440 — $7,280 more for identical income. That gap is exactly why a simple trust is required to distribute income currently, and why complex trusts that accumulate income pay dearly for it. A second slip is deducting the $4,000 of fees from the capital gain rather than from the interest, which understates the beneficiary's K-1 and overstates the trust's taxable gain.",
    },
  ],
};
