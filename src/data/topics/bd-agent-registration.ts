import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'bd-agent-registration',
  title: 'Broker-Dealer and Agent Registration',
  weight: '~3%',
  order: 29,
  summary:
    "Broker-dealers effect securities transactions; agents are the individuals who represent them. The exam tests the definitional exclusions, the narrow no-place-of-business exemption for institutional business, the absence of any de minimis relief for agents, the CRD filing mechanics, and how Regulation Best Interest compares to the adviser fiduciary standard.",
  body: `## Why Broker-Dealers Are Regulated Separately

An investment adviser is regulated because a client trusts it with judgment. A broker-dealer is regulated because it stands between the customer and the market, holding the money and the securities while the trade is in flight. Those are different risks, and they produce different rules. Adviser regulation is built around **fiduciary duty and disclosure of conflicts**; broker-dealer regulation is built around **financial responsibility, custody of customer property, and honest execution**. That is why the BD rules are full of net capital, segregation, bonding, and recordkeeping requirements that have no adviser counterpart, and why a broker-dealer's core standard of conduct historically attached to individual recommendations rather than to a continuing relationship.

Keep the two definitions apart from the start. **An adviser is defined by what it says; a broker-dealer is defined by what it does.** Advice is the adviser trigger. **Effecting transactions** is the broker-dealer trigger.

## Broker-Dealer Definition

A **broker-dealer** is any person engaged in the business of effecting transactions in securities for the account of others (**broker**) or for its own account (**dealer**). Under state law the term is a single combined category. The defining features are being **in the business** and **effecting transactions** — not giving advice.

"Effecting" is broader than executing. Soliciting orders, taking orders, handling customer funds or securities, negotiating terms, and receiving transaction-based compensation are all effecting activity. **Transaction-based compensation is the single strongest indicator** — if a person is paid per trade or per dollar raised, regulators start from the premise that the person is in the business of effecting transactions.

### Excluded from the BD Definition

- **Agents.** An individual representing a broker-dealer is an agent, not a broker-dealer. The two categories are mutually exclusive, and the reason is structural: the firm carries the capital, the books, and the supervisory obligation, while the individual carries a license that lives inside the firm. Regulating the same person twice would serve nothing.
- **Issuers.** A company selling its own securities is not effecting transactions for the account of others in the ordinary brokerage sense and is not a broker-dealer. The issuer is already the party responsible for the disclosure in the offering; it is the seller, not an intermediary standing between two other parties.
- **Banks, savings institutions, and trust companies.** Excluded under the state definition, for the same reason banks are excluded from the adviser definition — they are already examined for safety and soundness by banking regulators, and their customer funds are protected by an entirely separate apparatus.

### Why a Bank Holding Company Is Not a Bank

This is worth stating as its own point because it is tested repeatedly, in this topic and in the exempt-securities topic. A **bank** is a chartered depository institution: it takes deposits, is examined by a banking authority, and its obligations are typically insured. A **bank holding company** is simply a corporation that owns the bank's stock. It takes no deposits, its own securities are not insured, and the examination that justifies the exclusion is directed at the subsidiary, not at it.

So the exclusion, which exists because another regulator is already doing the work, does not reach the holding company. The same reasoning applies to a bank's non-bank affiliates and subsidiaries. **Every time you see "holding company" in an answer choice, the answer is almost certainly that no bank treatment applies.**

### The No-Place-of-Business Exemption

A person is **not a broker-dealer in a state** if it has **no place of business in that state** and deals only with:

- **institutional investors**, and
- **existing clients who are not residents** but are temporarily present in the state (the vacationing-client rule), and
- **other broker-dealers**.

The logic behind each half is worth understanding. The **institutional limit** rests on who needs protecting: a bank or an insurance company has its own analysts, its own counsel, and enough bargaining power to demand terms, so the state's registration apparatus adds little. The **place of business condition** rests on presence: an office in the state is an operation in the state, visible to the public and capable of attracting walk-in retail business, and no state will let a firm run one unlicensed.

Both halves matter. **A place of business in the state always defeats the exemption**, no matter who the clients are. Open an office and register — even if every client is a bank.

### Worked Scenario: One Retail Client Destroys It

Cascade Securities is registered in Oregon, where it has its only office. It does business with 11 institutions in Idaho — three banks, two insurers, and six pension plans — and has no Idaho office, no Idaho phone number, and no Idaho employees. Cascade is **not a broker-dealer in Idaho** and need not register there.

An Idaho physician, Dr. Vance, reads about Cascade and calls to open a personal account. Cascade accepts the account and executes one trade.

Cascade now transacts business in Idaho with a person who is not an institutional investor, and the exemption is gone. **It is a broker-dealer in Idaho and must register**, notwithstanding that a single retail account represents a rounding error against eleven institutional relationships. Nothing in the exemption is proportional; it is a status test, and the status fails the moment a non-institutional client appears.

Change one fact and it comes out the other way. Suppose Dr. Vance had been a long-standing Oregon client of Cascade who happened to be in Idaho for a two-week conference when she placed the order. Then she is an **existing client who is not a resident**, temporarily present, and the exemption survives. The vacationing-client rule exists precisely so that a customer relationship does not have to be suspended whenever the customer travels. **The distinguishing fact is residency and pre-existing relationship, not physical location at the moment of the order.**

### Institutional Investor

An **institutional investor** typically means a bank, savings institution, trust company, insurance company, investment company, pension or profit-sharing plan of substantial size, broker-dealer, or other entity designated by the Administrator. **A wealthy individual is never an institutional investor**, regardless of net worth. A natural person may be an **accredited investor** or a **qualified purchaser** for other purposes, but institutional status attaches to entities.

The reason the categories do not overlap is that they measure different things. Accredited investor status measures **ability to absorb loss** and is used to decide who may be sold an unregistered offering. Institutional status measures **capacity to protect oneself in a dealing relationship** — in-house expertise, counsel, negotiating leverage — and is used to decide when a firm may operate in a state without registering. A retired executive with $40M is plainly able to absorb loss; that says nothing about whether she can supervise a broker.

## Agent Definition

An **agent** is any **individual**, other than a broker-dealer, who represents a broker-dealer or an issuer in effecting or attempting to effect purchases or sales of securities.

**An agent is always a natural person. A firm is never an agent.** Partnerships, corporations, and LLCs register as broker-dealers, not agents. This is not a drafting accident: agent registration exists to license a *person* — to test that individual's competence, examine that individual's disciplinary history, and be able to bar that individual from the industry. An entity cannot sit for an exam or be barred in the way an individual can.

Note the phrase **attempting to effect**. Solicitation alone triggers the definition. An individual who cold-calls prospects, describes securities, and hands completed interest over to a licensed colleague is attempting to effect transactions and is an agent. Sales assistants and clerical personnel who never take orders or solicit are not agents — the line is whether the person's function touches the transaction, not what title appears on the door.

### When Agent Registration Is Required

An individual must register in a state if they:

- have a **place of business** in that state, **or**
- **transact business with residents** of that state who are not institutional investors.

**There is no de minimis exemption for broker-dealer agents.** This is a direct contrast with investment adviser representatives, who get the no-place-of-business plus fewer-than-6-retail-clients relief. **One solicited retail sale into a state requires the agent to be registered there.** Calling a prospect who has moved to a new state, or emailing a former client who relocated, triggers the requirement.

### Why Agents Get No De Minimis and IARs Do

The asymmetry looks arbitrary until you look at what each relief was designed to protect. The IAR de minimis exists to preserve **continuing relationships** — an advisory client is typically a long-term relationship with ongoing duties, and forcing an adviser to abandon a client who retires and moves is a real cost with no offsetting benefit. The relief is narrow: no office, and a handful of clients.

Brokerage does not present that problem in the same shape. A brokerage transaction is discrete, it is frequently the product of **outbound solicitation**, and the classic state-law abuse — the boiler room dialing into a state where nobody is licensed and nobody can be sanctioned — is exactly the conduct a de minimis exemption would shelter. A de minimis rule for agents would create a defense of "I only defrauded a few people here." So the model act simply does not provide one.

**The practical consequence: for an agent, count states, not clients.**

### Worked Scenario: The Client Who Moves

Priya is an agent registered in Texas with a Texas firm. Her client Ben, a Texas resident for nine years, retires and moves to New Mexico, where neither Priya nor her firm is registered. Ben calls Priya and asks her to sell 400 shares of a listed stock.

Priya cannot rely on any de minimis relief; none exists. Three questions decide the outcome. First, **is the firm registered in New Mexico?** If not, the firm has a problem of its own, because a broker-dealer transacting with a New Mexico retail resident is a broker-dealer there. Second, **is Priya registered in New Mexico?** If not, she may not effect the transaction. Third, **was it solicited?** An unsolicited order from the customer is an exempt *transaction* under the state act, which addresses the security's registration status — but it does not cure the **person's** registration problem. The exemption goes to the trade, not to the license.

The realistic outcome is that both the firm and Priya must register in New Mexico, or the account must be transferred. Some states offer limited relief for a small number of existing customers who relocate, but that is state-specific and not the model act rule. **Assume no relief unless the fact pattern gives it to you.**

### Issuer-Representative Exclusions

An individual representing an **issuer** is generally excluded from the agent definition when effecting transactions in the categories below. Take them one branch at a time, because each rests on a different rationale.

**Branch one: exempt securities.** An individual representing an issuer in transactions in **exempt securities** — government, municipal, bank, and similar issues — is not an agent. The rationale is that the exemption already reflects a judgment that the instrument carries little issuer-credit risk and no promoter with an incentive to mislead, so licensing the person who hands it across the counter adds little. Note the sharp limit: this branch covers a person representing the **issuer**. An individual representing a **broker-dealer** who sells the very same municipal bond is an agent and must register.

**Branch two: certain exempt transactions.** An individual representing an issuer in specified exempt transactions is likewise excluded. The exemption is doing the work here — a transaction the act has already declared low-risk does not need a licensed intermediary bolted onto it.

**Branch three: transactions with the issuer's own people.** An individual effecting transactions with **employees, partners, or directors** of the issuer is excluded **where no commission or other remuneration is paid for soliciting**. The rationale is that an employee stock purchase or a partner subscription is an internal corporate matter, not a public distribution, and the treasurer who administers it is not running a sales business.

The no-commission condition is where these questions turn, and it appears in more than one branch. Pay the person a selling commission and the exclusion evaporates — because a commission converts an administrative role into a sales role, and sales into the public is exactly what agent registration exists to license. A salaried officer of the issuer who processes the plan is excluded; the same officer who receives 2% of every dollar raised is an agent.

## Filings and CRD

| Filing | Purpose |
| --- | --- |
| **Form BD** | Broker-dealer application for registration |
| **Form BDW** | Withdrawal of broker-dealer registration |
| **Form U4** | Application for individual (agent) registration |
| **Form U5** | Termination notice, filed within **30 days** of separation |

Filings run through the **CRD** system. The U4 collects employment, residence, disciplinary, financial, and disclosure history; a material change requires a **prompt amendment**, generally within **30 days** and within **10 business days** for statutory disqualification events.

The point of the U4 and U5 pair is that an individual's record follows the individual. A firm that terminates an agent for cause must say so on the **U5**, and the next firm sees it before hiring. That is the entire mechanism by which the industry keeps a problem agent from quietly moving down the street — which is also why a false or misleadingly incomplete U5 is itself a serious violation.

### Registration Attaches to the Firm

An agent's registration is **tied to the employing broker-dealer**. When the firm's registration is **suspended or revoked, the agents' registrations become inactive** for the duration — the agent may not transact business, even personally. The rule follows from supervision: an agent's license is meaningful only because a registered firm is responsible for supervising it, so when the supervising firm goes away, the individual authority goes with it.

### Notice Obligations on a Move

When an agent moves firms, **all three parties notify the Administrator**: the **old broker-dealer**, the **new broker-dealer**, and the **agent**. Registrations do not travel with the individual; they are re-established at the new firm. In practice the old firm files the U5, the new firm files a U4, and the agent is unregistered in the interval unless the state provides for a temporary transfer.

Two consequences follow. First, an agent between firms is **not registered anywhere** and may not effect transactions during that gap. Second, an agent who fails to disclose a new outside business, a new residence, or a new disclosure event on the amended U4 has a filing violation independent of whatever the underlying conduct was.

## Financial and Recordkeeping Requirements

States may require broker-dealers to meet **minimum net capital**, post a **surety bond**, and maintain **books and records**. But **NSMIA preempts states from imposing net capital, custody, margin, financial responsibility, recordkeeping, bonding, or financial reporting requirements that exceed the federal requirements** under the Securities Exchange Act of 1934. In practice this means a state cannot demand more capital than SEC Rule 15c3-1 requires.

The preemption solved a coordination problem. Capital adequacy is measured at the firm level, not state by state — a firm either has enough liquid capital to meet its obligations or it does not. If fifty states each set their own minimum, a national firm would have to satisfy the strictest one, which would make one state's legislature the effective national regulator, and the firm would still be carrying a single balance sheet. Congress therefore fixed the financial standards federally.

**What the states kept is the more testable half:**

- **Registration itself.** States still license broker-dealers and agents operating within their borders.
- **Examination and qualification of agents**, including exam and, where adopted, continuing education requirements.
- **Full antifraud authority**, including investigation, subpoena power, cease and desist orders, and enforcement in court.
- **The power to deny, suspend, or revoke** a registration for cause.
- **Notice filings and fees.**

So the division is: **the federal government sets how much capital a firm holds and what books it keeps; the states decide who may operate within their borders and punish those who cheat.** A state may not demand extra capital, but it may bar the firm entirely.

A broker-dealer that maintains **net capital in excess of** the required minimum generally may not be compelled to post a surety bond. Bonds, where required, must permit recovery for violations and are usually satisfied by a deposit of cash or securities.

## Regulation Best Interest and Form CRS

**Regulation Best Interest (Reg BI)** applies when a broker-dealer or its associated person makes a **recommendation of a securities transaction or investment strategy to a retail customer**. The firm must act in the retail customer's **best interest** and may not place its own interest ahead of the customer's. Reg BI has four component obligations:

1. **Disclosure** — material facts about the relationship, scope of services, fees, and conflicts.
2. **Care** — reasonable diligence, care, and skill to understand the recommendation and to have a reasonable basis to believe it is in the customer's best interest, including consideration of **reasonably available alternatives** and cost.
3. **Conflict of interest** — identify and at minimum disclose, and in some cases mitigate or eliminate, conflicts. **Sales contests, quotas, bonuses, and non-cash compensation** tied to specific securities within a limited period must be **eliminated**, not merely disclosed.
4. **Compliance** — written policies and procedures reasonably designed to achieve compliance.

The elimination requirement in the third obligation is worth pausing on. Disclosure works when a customer can act on the information; it fails when the conflict operates on the representative's incentives in a way no disclosure can offset. A contest awarding a trip to whoever sells the most of one product for six weeks does not merely tilt advice, it manufactures recommendations. The SEC concluded that no disclosure cures that, so the practice is banned outright.

**Form CRS** (Form ADV Part 3 for advisers) is a short relationship summary that both broker-dealers and advisers must deliver to retail investors at or before the earliest of a recommendation, an account opening, or the placement of an order.

### Best Interest vs Fiduciary

| Dimension | Reg BI (broker-dealer) | Fiduciary duty (adviser) |
| --- | --- | --- |
| **Trigger** | A specific **recommendation** to a retail customer | The **entire relationship**, continuously |
| **Duration** | Point in time; no ongoing monitoring unless agreed | Ongoing, including **monitoring** |
| **Conflicts** | Disclose, mitigate, and in defined cases eliminate | Eliminate or make **full and fair disclosure** sufficient for informed consent |
| **Compensation** | Typically transaction-based | Typically asset-based or fixed |
| **Source** | SEC rule under the '34 Act | Advisers Act §206, as interpreted by the SEC and the courts |

Reg BI raised the old **suitability** standard, but it is still **not** a fiduciary standard. The most reliable exam distinction: **Reg BI attaches to a recommendation; fiduciary duty attaches to a relationship.** A broker who recommends a suitable fund and never speaks to the customer again has discharged the obligation. An adviser who does the same has not, because the duty did not end when the trade did.`,
  pitfalls: [
    "There is no de minimis exemption for broker-dealer agents. A single solicited retail transaction with a resident of a state requires registration in that state.",
    "A place of business in a state always defeats the institutional-only exemption, even if every client in the state is a bank or insurance company.",
    "A wealthy individual is never an institutional investor. Accredited investor status and institutional investor status are unrelated concepts.",
    'An agent is always a natural person. If an answer choice describes a partnership or corporation as an agent, it is wrong.',
    "When a broker-dealer's registration is suspended or revoked, its agents' registrations become inactive automatically — the agents cannot simply keep trading.",
    'NSMIA bars a state from imposing net capital, recordkeeping, or bonding requirements stricter than the federal standard, so a state cannot demand extra capital.',
    "Reg BI requires elimination — not just disclosure — of sales contests, quotas, bonuses, and non-cash compensation tied to specific securities within a limited period.",
    "The issuer-representative exclusion covers a person representing the ISSUER. An individual selling the same exempt security on behalf of a broker-dealer is an agent and must register.",
    "An unsolicited order is an exempt transaction, which addresses the security. It does not cure an unregistered agent or firm — the exemption runs to the trade, not to the license.",
    "When an agent changes firms, the old firm, the new firm, and the agent all notify the Administrator. The registration does not travel with the individual.",
  ],
  keyTerms: [
    {
      term: 'Broker-dealer',
      definition:
        'A person in the business of effecting securities transactions for the account of others or for its own account; excludes agents, issuers, and banks under state law.',
    },
    {
      term: 'Agent',
      definition:
        'An individual, never a firm, who represents a broker-dealer or an issuer in effecting or attempting to effect securities transactions.',
    },
    {
      term: 'Effecting transactions',
      definition:
        'The broker-dealer trigger: soliciting or taking orders, handling customer funds or securities, negotiating terms, or receiving transaction-based compensation. Advice is the adviser trigger; effecting is the broker-dealer trigger.',
    },
    {
      term: 'Institutional investor',
      definition:
        'An entity such as a bank, insurance company, investment company, broker-dealer, or large plan. Natural persons do not qualify regardless of wealth.',
    },
    {
      term: 'Place of business',
      definition:
        'Any office or location where a person regularly provides services or is held out to the public as doing so. Its presence in a state defeats every no-place-of-business exemption.',
    },
    {
      term: 'Form U5',
      definition:
        "The uniform termination notice a broker-dealer files through CRD within 30 days of an agent's separation, disclosing the reason for termination.",
    },
    {
      term: 'Net capital',
      definition:
        "A broker-dealer's minimum required liquid capital under SEC Rule 15c3-1. States may not require more than the federal standard.",
    },
    {
      term: 'Regulation Best Interest',
      definition:
        "The SEC rule requiring a broker-dealer recommending a securities transaction or strategy to a retail customer to act in that customer's best interest, comprising disclosure, care, conflict, and compliance obligations.",
    },
    {
      term: 'Form CRS',
      definition:
        'A brief relationship summary that broker-dealers and advisers must deliver to retail investors describing services, fees, conflicts, standards of conduct, and disciplinary history.',
    },
  ],
  confusions: [
    {
      dont: 'Broker-dealer agent — no de minimis relief; registration is triggered by a single retail transaction',
      with: 'Investment adviser representative — de minimis relief for no place of business plus fewer than 6 retail clients in 12 months',
    },
    {
      dont: 'Bank — excluded from the broker-dealer definition under state law',
      with: 'Bank holding company — a separate corporate entity with no exclusion',
    },
    {
      dont: 'Reg BI best-interest obligation — triggered by a recommendation, point in time',
      with: 'Adviser fiduciary duty — spans the entire relationship, including ongoing monitoring',
    },
    {
      dont: 'Institutional investor — an entity category used for BD and transaction exemptions',
      with: 'Accredited investor — an offering-eligibility category under Regulation D that includes wealthy individuals',
    },
    {
      dont: 'Form U4 — the individual application for registration',
      with: 'Form U5 — the termination notice, due within 30 days of separation',
    },
  ],
};
