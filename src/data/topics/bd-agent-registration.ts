import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'bd-agent-registration',
  title: 'Broker-Dealer and Agent Registration',
  weight: '~3%',
  order: 29,
  summary:
    "Broker-dealers effect securities transactions; agents are the individuals who represent them. The exam tests the definitional exclusions, the narrow no-place-of-business exemption for institutional business, the absence of any de minimis relief for agents, the CRD filing mechanics, and how Regulation Best Interest compares to the adviser fiduciary standard.",
  body: `## Broker-Dealer Definition

A **broker-dealer** is any person engaged in the business of effecting transactions in securities for the account of others (**broker**) or for its own account (**dealer**). Under state law the term is a single combined category. The defining features are being **in the business** and **effecting transactions** — not giving advice.

### Excluded from the BD Definition

- **Agents.** An individual representing a broker-dealer is an agent, not a broker-dealer. The two categories are mutually exclusive.
- **Issuers.** A company selling its own securities is not effecting transactions for the account of others in the ordinary brokerage sense and is not a broker-dealer.
- **Banks, savings institutions, and trust companies.** Excluded under the state definition. As with investment advisers, a **bank holding company is not a bank** and enjoys no exclusion.

### The No-Place-of-Business Exemption

A person is **not a broker-dealer in a state** if it has **no place of business in that state** and deals only with:

- **institutional investors**, and
- **existing clients who are not residents** but are temporarily present in the state (the vacationing-client rule), and
- **other broker-dealers**.

Both halves matter. **A place of business in the state always defeats the exemption**, no matter who the clients are. Open an office and register — even if every client is a bank.

### Institutional Investor

An **institutional investor** typically means a bank, savings institution, trust company, insurance company, investment company, pension or profit-sharing plan of substantial size, broker-dealer, or other entity designated by the Administrator. **A wealthy individual is never an institutional investor**, regardless of net worth. A natural person may be an **accredited investor** or a **qualified purchaser** for other purposes, but institutional status attaches to entities.

## Agent Definition

An **agent** is any **individual**, other than a broker-dealer, who represents a broker-dealer or an issuer in effecting or attempting to effect purchases or sales of securities.

**An agent is always a natural person. A firm is never an agent.** Partnerships, corporations, and LLCs register as broker-dealers, not agents. Sales assistants and clerical personnel who never take orders or solicit are not agents.

### When Agent Registration Is Required

An individual must register in a state if they:

- have a **place of business** in that state, **or**
- **transact business with residents** of that state who are not institutional investors.

**There is no de minimis exemption for broker-dealer agents.** This is a direct contrast with investment adviser representatives, who get the no-place-of-business plus fewer-than-6-retail-clients relief. **One solicited retail sale into a state requires the agent to be registered there.** Calling a prospect who has moved to a new state, or emailing a former client who relocated, triggers the requirement.

### Issuer-Representative Exclusions

An individual representing an **issuer** is generally excluded from the agent definition when effecting transactions in:

- **exempt securities** — government, municipal, bank, and similar issues;
- certain **exempt transactions**;
- transactions with **employees, partners, or directors** of the issuer where **no commission or other remuneration** is paid for soliciting.

The no-commission condition is where these questions turn. Pay the person a selling commission and the exclusion evaporates.

## Filings and CRD

| Filing | Purpose |
| --- | --- |
| **Form BD** | Broker-dealer application for registration |
| **Form BDW** | Withdrawal of broker-dealer registration |
| **Form U4** | Application for individual (agent) registration |
| **Form U5** | Termination notice, filed within **30 days** of separation |

Filings run through the **CRD** system. The U4 collects employment, residence, disciplinary, financial, and disclosure history; a material change requires a **prompt amendment**, generally within **30 days** and within **10 business days** for statutory disqualification events.

### Registration Attaches to the Firm

An agent's registration is **tied to the employing broker-dealer**. When the firm's registration is **suspended or revoked, the agents' registrations become inactive** for the duration — the agent may not transact business, even personally. When an agent moves firms, **both the old and new firm and the agent** must notify the Administrator. Registrations do not travel with the individual; they are re-established at the new firm.

## Financial and Recordkeeping Requirements

States may require broker-dealers to meet **minimum net capital**, post a **surety bond**, and maintain **books and records**. But **NSMIA preempts states from imposing net capital, custody, margin, financial responsibility, recordkeeping, bonding, or financial reporting requirements that exceed the federal requirements** under the Securities Exchange Act of 1934. In practice this means a state cannot demand more capital than SEC Rule 15c3-1 requires.

A broker-dealer that maintains **net capital in excess of** the required minimum generally may not be compelled to post a surety bond. Bonds, where required, must permit recovery for violations and are usually satisfied by a deposit of cash or securities.

## Regulation Best Interest and Form CRS

**Regulation Best Interest (Reg BI)** applies when a broker-dealer or its associated person makes a **recommendation of a securities transaction or investment strategy to a retail customer**. The firm must act in the retail customer's **best interest** and may not place its own interest ahead of the customer's. Reg BI has four component obligations:

1. **Disclosure** — material facts about the relationship, scope of services, fees, and conflicts.
2. **Care** — reasonable diligence, care, and skill to understand the recommendation and to have a reasonable basis to believe it is in the customer's best interest, including consideration of **reasonably available alternatives** and cost.
3. **Conflict of interest** — identify and at minimum disclose, and in some cases mitigate or eliminate, conflicts. **Sales contests, quotas, bonuses, and non-cash compensation** tied to specific securities within a limited period must be **eliminated**, not merely disclosed.
4. **Compliance** — written policies and procedures reasonably designed to achieve compliance.

**Form CRS** (Form ADV Part 3 for advisers) is a short relationship summary that both broker-dealers and advisers must deliver to retail investors at or before the earliest of a recommendation, an account opening, or the placement of an order.

### Best Interest vs Fiduciary

| Dimension | Reg BI (broker-dealer) | Fiduciary duty (adviser) |
| --- | --- | --- |
| **Trigger** | A specific **recommendation** to a retail customer | The **entire relationship**, continuously |
| **Duration** | Point in time; no ongoing monitoring unless agreed | Ongoing, including **monitoring** |
| **Conflicts** | Disclose, mitigate, and in defined cases eliminate | Eliminate or make **full and fair disclosure** sufficient for informed consent |
| **Compensation** | Typically transaction-based | Typically asset-based or fixed |
| **Source** | SEC rule under the '34 Act | Advisers Act §206, as interpreted by the SEC and the courts |

Reg BI raised the old **suitability** standard, but it is still **not** a fiduciary standard. The most reliable exam distinction: **Reg BI attaches to a recommendation; fiduciary duty attaches to a relationship.**`,
  pitfalls: [
    "There is no de minimis exemption for broker-dealer agents. A single solicited retail transaction with a resident of a state requires registration in that state.",
    "A place of business in a state always defeats the institutional-only exemption, even if every client in the state is a bank or insurance company.",
    "A wealthy individual is never an institutional investor. Accredited investor status and institutional investor status are unrelated concepts.",
    'An agent is always a natural person. If an answer choice describes a partnership or corporation as an agent, it is wrong.',
    "When a broker-dealer's registration is suspended or revoked, its agents' registrations become inactive automatically — the agents cannot simply keep trading.",
    'NSMIA bars a state from imposing net capital, recordkeeping, or bonding requirements stricter than the federal standard, so a state cannot demand extra capital.',
    "Reg BI requires elimination — not just disclosure — of sales contests, quotas, bonuses, and non-cash compensation tied to specific securities within a limited period.",
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
