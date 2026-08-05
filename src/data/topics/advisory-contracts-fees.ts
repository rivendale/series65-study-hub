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

Required and expected contents:

- **Description of the services** to be provided;
- **Term** of the contract;
- The **fee** and **how it is calculated** — the formula, the billing frequency, and whether it is billed in advance or arrears;
- **Provision for refund of prepaid fees** on early termination, on a pro rata basis;
- Whether the contract grants **discretionary authority**, and any limits on it;
- A statement that the contract **may not be assigned without the client's consent**;
- For an adviser organized as a **partnership**, an undertaking to **notify the client of any change in the membership of the partnership within a reasonable time**.

Prohibited: any provision **waiving compliance** with the Advisers Act or state law (**§215**), and any misleading **hedge clause**.

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

**Prepaid fees create a balance sheet obligation.** An adviser collecting **more than $1,200 in fees six or more months in advance** must include an **audited balance sheet** with its brochure and meet minimum net worth or bonding requirements.

## Performance-Based Fees

**Advisers Act §205(a)(1) generally prohibits** compensation based on a **share of capital gains or capital appreciation** of client funds. The concern is the incentive to take excess risk with someone else's money.

### The Qualified Client Exception

**Rule 205-3** permits a performance fee if the client is a **qualified client**, meaning the client either:

- has at least **$1.1M in assets under management with the adviser** immediately after entering the contract, **or**
- has a **net worth of more than $2.2M**, **excluding the value of the primary residence**, or is a qualified purchaser or a knowledgeable employee of the adviser.

These dollar thresholds are **indexed for inflation** and adjusted periodically by SEC order, so know the current figures and know that they move.

### Additional Requirements

- The fee must be based on gains **net of losses** — accounting for **both gains and losses** over a measurement period of typically at least **12 months**.
- **Full disclosure** of the arrangement, how it is computed, and the conflict it creates.
- Fees based on the **average value of assets over a defined period** are **not** performance fees and are permitted for any client.

## Assignment

**No advisory contract may be assigned without the client's consent.** Assignment includes:

- an outright **sale or transfer of the contract**;
- a **change in control** of the adviser — for a partnership, the transfer of a **controlling block of partnership interests**;
- certain **pledges** of the contract.

**Not** an assignment: a change in the **minority** ownership of a partnership (which triggers only the **notification** requirement), or an internal reorganization that does not result in a change of actual control or management.

### Consent

**Affirmative (positive) consent** — the client signs or otherwise affirmatively agrees — is the safest form. **Negative consent**, where the adviser notifies the client that the contract will be assigned unless the client objects within a stated period, has been permitted by SEC no-action relief in defined circumstances, but the exam answer favors **affirmative written consent**.

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

Most importantly: **testimonials and endorsements are now permitted** on these conditions — the old blanket prohibition is gone. **Performance advertising** must show **net-of-fee** results with at least equal prominence to gross, present **1-, 5-, and 10-year** periods for most performance, and substantiate all material claims.`,
  pitfalls: [
    "Performance fees are prohibited unless the client is a qualified client — $1.1M AUM with the adviser or more than $2.2M net worth excluding the primary residence. These figures are indexed and change over time.",
    "A permitted performance fee must account for losses as well as gains. A fee on gains only, with no downside offset, is not compliant.",
    "A fee based on the average value of assets over a period is not a performance fee and is allowed for any client. Do not confuse it with a share of capital appreciation.",
    "A change in the minority membership of an advisory partnership is not an assignment — it only requires notice to clients within a reasonable time. A change in control is an assignment requiring consent.",
    "Collecting more than $1,200 in fees six or more months in advance triggers the audited balance sheet and financial disclosure requirements.",
    "The §28(e) soft dollar safe harbor covers research and brokerage services that benefit all clients. Hardware, travel, entertainment, rent, and marketing are outside it.",
    "Testimonials and endorsements are permitted under the Marketing Rule with disclosure, a written agreement, and adviser oversight. The old blanket prohibition no longer applies.",
    "Placing a client in a 12b-1 paying share class when a cheaper class of the same fund was available, without disclosure, is a fiduciary breach even if the fund itself was suitable.",
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
