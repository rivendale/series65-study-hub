import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'advisory-contracts-fees',
  title: 'Advisory Contracts, Fees, and Compensation',
  weight: '~3%',
  order: 33,
  summary:
    "Advisers Act §205 and the NASAA model rules dictate what must appear in an advisory contract, what may not, and how an adviser may be paid. The tested items are the mandatory contract terms, the performance-fee prohibition and its qualified client exception, the meaning of assignment and the consent required for it, and the disclosure obligations attaching to third-party compensation, soft dollars, and promoters.",
  body: `## Contract Requirements

Under **Advisers Act §205** and the **NASAA model rule on advisory contracts**, most state rules require the contract to be **in writing**; the federal act does not require a writing for all advisers but conditions several protections on the contract terms.

Each required term closes a specific abuse. Learn the pairing, not the list:

- **Description of the services** — so an ongoing fee cannot be charged for a relationship whose content was never defined;
- **Term** of the contract — so the client can see when it ends and decide again;
- The **fee** and **how it is calculated** — formula, billing frequency, advance or arrears, so the client can verify a bill rather than take it on faith;
- **Pro rata refund of prepaid fees** on early termination — so prepayment cannot function as a lock-in penalty;
- Whether the contract grants **discretionary authority**, and its limits — because discretion is the power to trade without asking, and must be granted knowingly;
- A statement that the contract **may not be assigned without the client's consent** — because the client chose *this* adviser, and advice is personal;
- For a **partnership**, an undertaking to **notify the client of any change in the membership within a reasonable time** — so turnover among the people doing the work does not go unnoticed.

Prohibited: any provision **waiving compliance** with the Advisers Act or state law (**§215**), and any misleading **hedge clause**.

### Why a Hedge Clause Cannot Work

A **hedge clause** is language limiting the adviser's liability — "shall not be liable for any loss," or "shall not be liable except for gross negligence or willful misconduct." Section 215 voids it, for a structural reason rather than a technical one: the fiduciary duty is a **statutory protection conferred on clients as a class**, not a private bargain. If a client could sign it away, every adviser would put the waiver in its standard form and the duty would survive only for clients who negotiate — which is to say, not for retail clients at all.

That is also why the analysis does not turn on whether a court would enforce the clause. Even an unenforceable clause **violates the rule on its own**, because it is **misleading**: a client who believes he has no claim does not bring one. The test is whether the language **could lead a client to believe he has waived a non-waivable right**, and for a retail client most general disclaimers do. The permitted move is the mirror image — an adviser may **narrow the scope**, advising only on a named account or excluding held-away assets. Limiting **what the adviser is engaged to do** is legitimate; limiting **the standard applied to what it does** is void.

### Discretion

**Discretionary authority** means the adviser may choose the **security, the amount, or whether to buy or sell** without contacting the client first. Choosing only **time and price** on an otherwise fully specified order is **not** discretion. Discretion must be granted in writing; an adviser may generally act on **oral authority for up to 10 business days** after the first discretionary transaction while written authorization is obtained.

## Fee Structures

| Structure | How it works | Typical use |
| --- | --- | --- |
| **Percentage of AUM** | Tiered or flat percentage of assets, billed quarterly | Ongoing portfolio management |
| **Hourly** | Billed for time | Consulting, one-off advice |
| **Fixed or flat fee** | A set amount for a defined deliverable | Financial plans |
| **Subscription or retainer** | Recurring periodic charge | Ongoing planning relationships |
| **Commission-based** | Compensation from product sales, requires BD registration | Hybrid firms |
| **Performance-based** | A share of capital gains or appreciation | Only with **qualified clients** |

Fees must be **reasonable in relation to the services provided** and broadly **comparable to what other advisers charge for similar services**. There is no fixed maximum, but a fee materially above prevailing rates must be **disclosed as such** — that the client could obtain comparable services elsewhere for less. Differing fee schedules for different clients are permitted but are a **conflict requiring disclosure**.

### The Conflict Inside Each Model

No fee model is neutral. Each pays the adviser to do something, and the conflict sits wherever the money is:

- **Percentage of AUM** rewards **gathering and keeping assets** — so the adviser is paid less for any advice that shrinks the account (pay off the mortgage, buy an annuity, make a large gift) and more for rollovers that pull outside money under the fee. The most heavily tested fee conflict.
- **Hourly** rewards **time spent**: longer engagements, more meetings.
- **Fixed or flat fee** rewards **finishing fast**, so the risk runs the other way — a thin plan against a full fee.
- **Subscription or retainer** rewards **renewal**; broadly aligned, but it pressures the adviser to look busy.
- **Commission-based** rewards **transactions** — the classic churning incentive.
- **Performance-based** rewards **upside volatility**: the adviser shares the gains but not personally the losses, so the incentive is more risk than the client would choose. That asymmetry is why §205 restricts it.
- **Wrap fee** bundles advisory fee, execution and custody into one asset-based charge. It removes the incentive to over-trade and installs the opposite: **the fewer trades, the more of the wrap the sponsor keeps.** A wrap account that barely trades is the reverse-churning pattern, and the brochure must say the wrap **may cost more** than paying separately.

### Layered Fees

An advisory fee on assets held in funds or ETFs sits **on top of** each fund's expense ratio, and the client pays both. Not prohibited — it is what managing a fund portfolio looks like — but the layering must be **disclosed**, and it becomes a problem in three places: a full advisory fee on the adviser's **own proprietary funds** with no layer waived or offset; the fee charged on large **cash** balances held for long stretches; and a third layer stacked through a **fund of funds** or wrap program. The client must see **every layer**, and reasonableness is tested against the **total**.

### Prepayment and Refunds

**Prepaid fees create a balance sheet obligation.** An adviser taking **substantial prepayment** must include an **audited balance sheet** with its brochure and meet minimum net worth or bonding requirements. The logic is solvency: a client who prepaid is an **unsecured creditor**, and if the firm fails his refund claim stands in line with everyone else's. The threshold depends on who regulates the adviser: the **SEC** brochure rule (Form ADV Part 2A) uses **more than $1,200 six or more months in advance**, while the **NASAA model rule** that states apply to **state-registered** advisers uses **more than $500** on the same timing. Adopting states vary, so read the fact pattern for which regime is in play rather than defaulting to one number. The **refund** is a separate duty: on termination the unearned portion goes back **pro rata**, and a contract keeping the whole prepayment is a prohibited penalty.

## Performance-Based Fees

**Advisers Act §205(a)(1) generally prohibits** compensation based on a **share of capital gains or capital appreciation** of client funds. The concern is the incentive to take excess risk with someone else's money.

### The Qualified Client Exception

**Rule 205-3** permits a performance fee if the client is a **qualified client**, meaning the client either:

- has at least **$1.1M in assets under management with the adviser** immediately after entering the contract, **or**
- has a **net worth of more than $2.2M**, **excluding the value of the primary residence**, or is a qualified purchaser or a knowledgeable employee of the adviser.

These dollar thresholds are **indexed for inflation** and adjusted periodically by SEC order, so know the current figures and know that they move.

**Status is tested at inception**, when the client enters into the contract. A client who qualified at signing and later drops below the threshold need not be moved off the fee; a client who does not qualify at signing cannot be given one on the expectation of growing into it. The exception exists because a qualified client can absorb the risk the fee encourages and can bargain over it, which an ordinary retail client cannot.

### Additional Requirements

- The fee must be based on gains **net of losses** — accounting for **both gains and losses** over a measurement period of typically at least **12 months**. Without the loss offset, a manager could collect on an up quarter that merely recovers a prior drawdown.
- **Full disclosure** of the arrangement, how it is computed, and the conflict it creates.
- Fees based on the **average value of assets over a defined period** are **not** performance fees and are permitted for any client.

## Assignment

The rule exists because **advice is personal**. A client picked this adviser — these people, this philosophy, this fee schedule — so handing the relationship to someone the client never chose demands a **fresh decision**, not a notice. That also explains the boundary: what matters is whether **actual control** changed hands, not whether a legal entity was reshuffled.

**No advisory contract may be assigned without the client's consent.** Assignment includes:

- an outright **sale or transfer of the contract**;
- a **change in control** of the adviser — for a partnership, the transfer of a **controlling block of partnership interests**;
- certain **pledges** of the contract.

**Not** an assignment: a change in the **minority** ownership of a partnership (which triggers only the **notification** requirement), or an internal reorganization that does not result in a change of actual control or management.

### Consent

**Affirmative (positive) consent** — the client signs or otherwise affirmatively agrees — is the safest form. **Negative consent**, where the adviser notifies the client that the contract will be assigned unless the client objects within a stated period, has been permitted by SEC no-action relief in defined circumstances, but the exam answer favors **affirmative written consent**.

## Delivering the Brochure, and Form CRS

The contract fixes the terms; the **brochure** is how the client comes to understand them. **Rule 204-3** governs delivery of **Form ADV Part 2A** (the firm brochure) and **Part 2B** (the supplement covering the individuals who actually advise the client):

- **At or before entering into the contract.** The federal rule, as amended in 2010, requires delivery **before or at the time** of entry and gives no rescission right; the **NASAA model rule** applied to **state-registered** advisers instead requires delivery **at least 48 hours before** signing, or at signing with a **five-business-day right to terminate without penalty**. The reason is plain once stated: disclosure delivered after the client is committed cannot inform the decision it was meant to inform.
- **Annually**, within **120 days of fiscal year end**, deliver either the updated brochure with a **summary of material changes**, or the summary alone with an **offer** of the full brochure.
- **Promptly** whenever brochure information becomes **materially inaccurate**, disciplinary information above all.

**Form CRS (Part 3)** does a different job. The brochure runs to whatever length full disclosure requires; Form CRS is a **relationship summary** capped at **two pages** for a standalone firm (four for a dual registrant), in plain English, answering what a long brochure answers badly: *what kind of firm is this, and what will it cost me?*

| | Brochure (Part 2A) | Form CRS (Part 3) |
| --- | --- | --- |
| Purpose | Full disclosure of services, fees, conflicts, discipline | Short comparison tool |
| Length | As long as needed | **2 pages** (4 for dual registrants) |
| Audience | All clients | **Retail investors** |
| Delivery | Federal: at or before the contract. State (NASAA model rule): 48 hours before, or at signing with a 5-business-day right to terminate. Annually within 120 days either way | **Before or at the earliest** of a recommendation, an account opening, or placing an order |
| Style | Narrative | Prescribed headings and required **conversation starters** |

They do not substitute for one another: an adviser with retail clients delivers **both**.

## Third-Party Compensation and Conflicts

Any compensation an adviser receives from someone other than the client is a **conflict of interest requiring full and fair disclosure**.

- **12b-1 fees** — annual distribution and servicing fees paid out of fund assets. When an adviser or its affiliate receives them, it has an incentive to choose funds that pay.
- **Revenue sharing** — payments from fund families or product sponsors for shelf space, platform access, or marketing support.
- **Share-class selection** is a sustained SEC enforcement priority: placing a client in a 12b-1 paying share class when a **lower-cost class of the same fund was available** to that client, without disclosing the conflict, has been charged as a §206 fiduciary breach — even where the fund itself was suitable.
- **Markups, commissions, and insurance compensation** received by affiliated entities.

The rule to internalize: **the existence of the conflict is not the violation — the failure to disclose it fully and fairly is.**

## Soft Dollars and §28(e)

**Soft dollars** are the practice of directing client brokerage to a broker-dealer in exchange for **research and brokerage services**. The client pays the commission and the adviser receives the benefit, so this is a conflict — expressly protected within limits.

**Section 28(e) of the Securities Exchange Act of 1934** provides a **safe harbor**: an adviser does not breach its fiduciary duty solely by paying **more than the lowest available commission** if it determines **in good faith** that the amount is reasonable in relation to the value of the **brokerage and research services** received, viewed in terms of either the particular transaction or the adviser's **overall responsibilities** to its clients.

| Inside the safe harbor | Outside the safe harbor |
| --- | --- |
| Research reports, analyses, and market data | Computer hardware and general office equipment |
| Seminars and conferences on relevant topics | Travel, entertainment, meals, lodging |
| Quantitative analytics and portfolio attribution software used for research | Rent, salaries, marketing, and overhead |
| Trade execution, clearance, and settlement services | Legal and compliance expenses |
| Certain financial newsletters and periodicals used in the investment process | Products used for administration rather than research |

Two conditions run through the safe harbor: the services must **assist in the investment decision-making process** and must **benefit all clients**, not merely the account whose commissions paid for them. Mixed-use items must be **reasonably allocated**, with the non-research portion paid in hard dollars. Soft dollar arrangements are **disclosed in Form ADV Part 2A**.

## Promoters (Solicitors) Under the Marketing Rule

The old cash solicitation rule (206(4)-3) was **rescinded and folded into the Marketing Rule, Rule 206(4)-1**, with a compliance date of **November 4, 2022**. Under the current framework:

- A **promoter** is a person compensated, in cash or non-cash, for a **testimonial or endorsement** — which includes referring prospective clients.
- The adviser must have a **written agreement** with any compensated promoter (narrow exception for **de minimis** compensation of **$1,000 or less** in 12 months).
- **Disclosure at the time of the testimonial or endorsement** must state whether the promoter is a **client**, that the promoter is **compensated**, and the **material conflicts** arising from the relationship. The disclosure is the **adviser's responsibility**, though the promoter may deliver it.
- **Disqualified persons** may not act as compensated promoters, and the adviser must **oversee** the promoter's compliance.

Most importantly: **testimonials and endorsements are now permitted** on these conditions — the old blanket prohibition is gone. **Performance advertising** must show **net-of-fee** results with at least equal prominence to gross, present **1-, 5-, and 10-year** periods for most performance, and substantiate all material claims.

## Worked Scenarios

### The Fee That Followed the Firm

Kestrel Capital is an LLC with three members: the founder holds 70%, two junior partners hold 15% each. The founder sells her entire 70% interest to an outside acquirer and retires. Kestrel emails clients that "the ownership of the firm has changed" and keeps billing under the existing contracts.

That is an **assignment**. Transfer of a **controlling block** is a change in control however it is papered, and an assignment requires the client's **consent**, not notice. An email announcing what already happened is not consent, and billing on under an improperly assigned contract charges fees under an agreement the client never made. Two near cases come out the other way. Had one **15% junior partner** sold out, no control would have moved — a **minority membership change**, requiring only **notification within a reasonable time**. And had Kestrel converted from an LLC to a corporation with the same owners and the same people advising, no actual control changes and there is **no assignment at all**.

### The Performance Fee Nobody Could Consent To

Bram Vogel manages $600,000 for a client whose net worth excluding a primary residence is roughly $1.4M. The client is sophisticated, wants aggressive management, and himself proposes 1% of assets plus 20% of any gain above an 8% annual return. Both sides sign, and Bram discloses the conflict in detail.

Bram still cannot take it. **Section 205** bars performance compensation unless the client is a **qualified client**, and this client meets neither test — not **$1.1M under management with the adviser** ($600,000), not **more than $2.2M net worth** excluding the residence ($1.4M). Note what fails to save it: sophistication, the fact that the client proposed it, and complete disclosure. This is a rule about **who may pay**, not about what was disclosed — the cleanest exam example of a conflict consent cannot cure. Two variants: at $1.2M under management the fee is permissible provided it accounts for **losses as well as gains** over at least 12 months; and "1% of the **average value of assets** over the year" is not a performance fee at all and is open to any client.`,
  pitfalls: [
    "Performance fees are prohibited unless the client is a qualified client — $1.1M AUM with the adviser or more than $2.2M net worth excluding the primary residence. These figures are indexed and change over time.",
    "A permitted performance fee must account for losses as well as gains. A fee on gains only, with no downside offset, is not compliant.",
    "A fee based on the average value of assets over a period is not a performance fee and is allowed for any client. Do not confuse it with a share of capital appreciation.",
    "A change in the minority membership of an advisory partnership is not an assignment — it only requires notice to clients within a reasonable time. A change in control is an assignment requiring consent.",
    "Substantial prepayment triggers the audited balance sheet and financial disclosure requirements, but the trigger differs by regime: more than $1,200 six or more months in advance under the SEC brochure rule, more than $500 under the NASAA model rule applied to state-registered advisers.",
    "The §28(e) soft dollar safe harbor covers research and brokerage services that benefit all clients. Hardware, travel, entertainment, rent, and marketing are outside it.",
    "Testimonials and endorsements are permitted under the Marketing Rule with disclosure, a written agreement, and adviser oversight. The old blanket prohibition no longer applies.",
    "Placing a client in a 12b-1 paying share class when a cheaper class of the same fund was available, without disclosure, is a fiduciary breach even if the fund itself was suitable.",
    "Qualified client status is tested at inception. Falling below the threshold later does not unwind a valid performance fee, and expecting to grow into the threshold does not create one.",
    "Brochure delivery timing splits by regime: the federal rule delivers at or before the contract, while the NASAA model rule for state-registered advisers requires 48 hours before signing, or at signing with a five-business-day right to terminate without penalty. Either way the brochure is updated annually within 120 days of fiscal year end. Form CRS is a separate two-page relationship summary for retail investors — an adviser with retail clients delivers both, not one instead of the other.",
    "A hedge clause is a violation even if a court would refuse to enforce it, because the violation is the misleading impression that rights were waived.",
  ],
  keyTerms: [
    {
      term: 'Assignment',
      definition:
        "A transfer of the advisory contract or a change in control of the adviser. It requires the client's consent; a change in minority partnership membership requires only notice.",
    },
    {
      term: 'Qualified client',
      definition:
        'A client permitted to pay performance-based fees: at least $1.1M under management with the adviser, or net worth exceeding $2.2M excluding the primary residence, or a qualified purchaser or knowledgeable employee. Thresholds are indexed.',
    },
    {
      term: 'Performance-based fee',
      definition:
        'Compensation calculated as a share of capital gains or capital appreciation of client assets. Generally prohibited under §205 except for qualified clients, and must reflect losses as well as gains.',
    },
    {
      term: 'Soft dollars',
      definition:
        'Client brokerage commissions used to obtain research and brokerage services for the adviser, protected within the §28(e) safe harbor when the services aid investment decision-making and benefit clients.',
    },
    {
      term: 'Section 28(e) safe harbor',
      definition:
        "The provision under which an adviser paying more than the lowest commission does not breach its fiduciary duty if it determines in good faith that the amount is reasonable relative to the research and brokerage services received.",
    },
    {
      term: '12b-1 fee',
      definition:
        'An annual distribution and shareholder servicing fee charged against mutual fund assets. Receipt by an adviser or affiliate is a conflict requiring disclosure.',
    },
    {
      term: 'Promoter',
      definition:
        'A person compensated for a testimonial or endorsement, including client referrals, subject to the written agreement, disclosure, disqualification, and oversight conditions of the Marketing Rule.',
    },
    {
      term: 'Form CRS (Part 3)',
      definition:
        'A two-page plain-English relationship summary for retail investors (four pages for a dual registrant), delivered before or at the earliest of a recommendation, an account opening, or the placing of an order. It supplements rather than replaces the brochure.',
    },
    {
      term: 'Wrap fee',
      definition:
        'A single asset-based charge bundling advisory services, execution, and custody. It removes the incentive to over-trade and creates the opposite one, so the brochure must disclose that the wrap may cost more than paying separately for a low-activity account.',
    },
    {
      term: 'Marketing Rule (Rule 206(4)-1)',
      definition:
        'The SEC advertising rule effective November 4, 2022 that permits testimonials and endorsements with conditions, replaces the old cash solicitation rule, and imposes strict standards on performance advertising.',
    },
  ],
  confusions: [
    {
      dont: 'Performance-based fee — a share of capital gains or appreciation, limited to qualified clients',
      with: 'Fee on the average value of assets over a period — an ordinary AUM fee permitted for any client',
    },
    {
      dont: 'Assignment — a transfer or change of control that requires client consent',
      with: 'Change in minority partnership membership — requires only notice within a reasonable time',
    },
    {
      dont: 'Discretionary authority — choosing the security, the amount, or whether to trade',
      with: 'Time and price discretion — choosing only when and at what price to fill a fully specified order',
    },
    {
      dont: 'Research and brokerage services inside the §28(e) safe harbor',
      with: 'Hardware, rent, travel, entertainment, and marketing, which fall outside it',
    },
    {
      dont: 'The current Marketing Rule — testimonials and endorsements permitted with disclosure and oversight',
      with: 'The obsolete advertising rule — testimonials flatly prohibited',
    },
  ],
};
