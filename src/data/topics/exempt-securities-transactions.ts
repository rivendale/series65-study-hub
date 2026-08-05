import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'exempt-securities-transactions',
  title: 'Exempt Securities and Exempt Transactions',
  weight: '~3%',
  order: 31,
  summary:
    "State law exempts some securities because of what they are and some transactions because of how they are conducted. The exam wants you to sort a fact pattern into the right bucket, remember the numeric limits, and never forget that no exemption of either kind excuses fraud or relieves a person of registration as an agent or broker-dealer.",
  body: `## Two Different Kinds of Exemption

- An **exempt security** is exempt **because of what it is** — the issuer or instrument type carries the exemption wherever and however it is sold.
- An **exempt transaction** is exempt **because of how the sale happens** — the same common stock may be exempt in one trade and require registration in the next.

The distinction drives most questions. Ask first: *is the answer about the instrument, or about the circumstances of the sale?*

## Exempt Securities

### Government and Sovereign

- **US government and agency securities** — Treasuries, GNMA, and other federal agency obligations.
- **Municipal securities** — obligations of any state, political subdivision, or their agencies. **All US municipal issues are exempt in every state**, not merely in the issuing state.
- **Canadian federal and provincial (municipal) obligations** — exempt.
- **Other foreign government securities**, but only where the **United States maintains diplomatic relations** with that country. Foreign **political subdivisions** generally do **not** get the exemption — the Canadian provincial carve-out is the exception candidates forget.

### Financial Institutions

- Securities issued or guaranteed by a **bank, savings institution, credit union, or trust company** organized or supervised under US or state law.
- **A bank holding company is not a bank.** Holding company stock is **not** an exempt security — the single most repeated trap in this section.

### Insurance Companies

Securities of an **insurance company authorized to do business in the state**. Note this covers the insurer's own stock and debt. **Variable annuities and variable life are securities and are NOT exempt** — the separate account is a registered investment product.

### Regulated Enterprise

- **Public utility and common carrier** securities where the issuer is regulated with respect to rates or the issuance of securities by a governmental commission (state PUC, FERC, or an equivalent), and equipment trust certificates of such issuers.

### Nonprofit and Institutional

- Securities issued by a person organized and operated **not for private profit** but exclusively for **religious, educational, benevolent, charitable, fraternal, social, athletic, reformatory, or trade association** purposes. Many states require a **notice filing** before relying on this one.
- Interests in **employee benefit plans** — pension, profit-sharing, stock purchase, savings, and similar plans.
- Securities of **cooperatives** and certain **membership** organizations.

### Money Market Paper

**Commercial paper** is exempt when it meets **all three** conditions:

- maturity of **9 months (270 days) or less**;
- denominations of **at least $50,000**;
- one of the **top three** ratings from a nationally recognized rating agency.

Miss any one and the exemption is gone. Candidates routinely accept 9-month paper in $25,000 denominations, or A-rated paper below the ratings floor.

### Federal Covered

**Exchange-listed securities and other federal covered securities** are effectively exempt from state registration by preemption, though a state may still require a notice filing.

## Exempt Transactions

Exempt transactions are defined by the **manner of sale**.

### Unsolicited Brokerage Transactions

Any **non-issuer transaction by an agent effected at the unsolicited request of the customer** is exempt. This is far and away the most common exempt transaction in practice and on the exam.

The critical operational point: the Administrator may require the customer to **acknowledge in writing** that the transaction was unsolicited, and the firm must **mark the order ticket unsolicited**. If a customer calls and asks to buy an unregistered security by name, the exemption applies; if the agent brought it up first, it does not. **Marking a solicited ticket unsolicited is fraud**, not paperwork.

### Institutional Transactions

Sales to **institutional investors** — banks, savings institutions, trust companies, insurance companies, investment companies, broker-dealers, and large pension or profit-sharing plans. **Wealthy individuals are never institutional investors.**

### Private Placement (Limited Offering)

A private placement is exempt under the model act when:

- directed to **no more than 10 non-institutional (retail) purchasers** in the state during any **12 consecutive months** — offers to institutions are **unlimited** and do not count;
- there is **no general solicitation or advertising**;
- the seller **reasonably believes** all non-institutional buyers are purchasing **for investment**, not resale;
- **no commission or remuneration** is paid for soliciting **non-institutional** purchasers.

Note the counting rule: it counts **purchasers**, not offerees, and only **non-institutional** ones.

### Pre-Organization Certificates and Subscriptions

Exempt when:

- there are **no more than 10 subscribers**;
- **no commission or remuneration** is paid for soliciting;
- **no payment is made by any subscriber** until the corporation is organized.

All three are required. The zero-payment condition is what usually breaks the fact pattern.

### Isolated Non-Issuer Transactions

An occasional, one-off trade by someone not in the securities business — a private individual selling a legacy certificate to another individual. **Isolated means genuinely infrequent**; a pattern of trades is not isolated.

### Fiduciary Transactions

Transactions by an **executor, administrator, sheriff, marshal, receiver, trustee in bankruptcy, guardian, or conservator** are exempt. These are **court-appointed** fiduciaries.

**A trustee of an inter vivos (living) trust is NOT court-appointed** — that trustee is named in a private document by the grantor. Transactions by a living-trust trustee do **not** qualify for this exemption. This is a very frequently tested trap. A **custodian** under UTMA is likewise not court-appointed.

### Existing Security Holder Transactions

- **Rights offerings, warrants, and conversions** offered to **existing security holders** of the issuer, provided **no commission** is paid for soliciting (or the Administrator receives notice and does not disallow).
- **Stock dividends and stock splits** where nothing of value is given.

### Issuer and Underwriter Transactions

- Transactions **between an issuer and an underwriter**, and **among underwriters**.
- Transactions by a **pledgee** of a security in a bona fide pledge, such as a lender liquidating collateral.
- Certain **unit-secured** and mortgage-note transactions where the entire mortgage is sold as a unit.

## The Two Things Exemptions Never Do

**1. No exemption ever excuses fraud.** The **antifraud provisions apply to every security and every transaction**, exempt or not, registered or not, federal covered or not. If a question offers "because the security was exempt, the antifraud rules did not apply," that answer is always wrong. The Administrator retains jurisdiction to investigate and sanction fraud in an exempt offering.

**2. An exempt transaction does not exempt the people.** The **agent and broker-dealer registration requirements survive**. An agent selling an exempt municipal bond in a state where they are not registered has violated the act — the bond is exempt, the person is not. Only the specific issuer-representative exclusions relieve an individual.

### Burden of Proof

The **person claiming an exemption bears the burden of proving it**. And the Administrator may **deny, suspend, or revoke** a transactional or securities exemption by order — usually prospectively, and with notice and an opportunity for a hearing.`,
  pitfalls: [
    "Bank securities are exempt; bank holding company stock is not. The holding company is a separate issuer with no exemption.",
    "Commercial paper needs all three conditions — 9 months or less, at least $50,000 denominations, and a top-three rating. Failing any one destroys the exemption.",
    "A trustee of a living trust is not a court-appointed fiduciary, so the fiduciary transaction exemption does not apply. Executors, receivers, guardians, and trustees in bankruptcy do qualify.",
    "The private placement limit counts non-institutional PURCHASERS, not offerees, and offers to institutional investors are unlimited.",
    "Pre-organization subscriptions require no payment from any subscriber until the corporation is organized — not merely a cap of 10 subscribers.",
    "No exemption of any kind excuses fraud. Antifraud provisions reach every security and every transaction.",
    "An exempt transaction does not relieve the agent or broker-dealer of registration. The security may be exempt while the person selling it is not.",
    'Canadian provincial obligations are exempt, but political subdivisions of other foreign countries generally are not.',
  ],
  keyTerms: [
    {
      term: 'Exempt security',
      definition:
        'A security exempt from state registration because of the nature of the issuer or instrument, regardless of how it is sold.',
    },
    {
      term: 'Exempt transaction',
      definition:
        'A sale exempt because of the manner in which it occurs — the purchaser, the solicitation method, or the parties — rather than because of the security itself.',
    },
    {
      term: 'Unsolicited transaction',
      definition:
        "A non-issuer trade initiated by the customer rather than the agent. It is exempt, must be marked unsolicited on the ticket, and the Administrator may require the customer's written acknowledgment.",
    },
    {
      term: 'Private placement exemption',
      definition:
        'A state exemption for offerings to 10 or fewer non-institutional purchasers in 12 months with no general solicitation, investment intent, and no commission on retail sales.',
    },
    {
      term: 'Pre-organization certificate',
      definition:
        'A subscription taken before a corporation exists; exempt when there are 10 or fewer subscribers, no commissions, and no payment until organization is complete.',
    },
    {
      term: 'Court-appointed fiduciary',
      definition:
        'An executor, administrator, receiver, trustee in bankruptcy, guardian, conservator, sheriff, or marshal acting under court authority. A living-trust trustee is not one.',
    },
    {
      term: 'Isolated non-issuer transaction',
      definition:
        'An infrequent, one-off secondary trade by a person not engaged in the securities business; frequency defeats the exemption.',
    },
    {
      term: 'Burden of proof',
      definition:
        'The rule that the person claiming an exemption or exception must establish it. The Administrator does not have to disprove it.',
    },
  ],
  confusions: [
    {
      dont: 'Exempt security — exempt because of what it is',
      with: 'Exempt transaction — exempt because of how it is sold',
    },
    {
      dont: 'Bank or trust company securities — exempt',
      with: 'Bank holding company stock — not exempt',
    },
    {
      dont: 'Court-appointed fiduciary such as an executor or receiver — transactions exempt',
      with: 'Trustee of an inter vivos trust or UTMA custodian — not court-appointed, not exempt',
    },
    {
      dont: 'Insurance company securities — exempt when the insurer is authorized in the state',
      with: 'Variable annuities and variable life — securities that are not exempt',
    },
    {
      dont: 'An exemption from registration — relieves the filing requirement only',
      with: 'The antifraud provisions — apply to every security and every transaction without exception',
    },
  ],
};
