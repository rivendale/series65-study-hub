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

Why does the act need both? Because registration is a cost imposed to solve one problem — an investor deciding without adequate information — and that problem can be absent for either of two independent reasons. Sometimes the **instrument** carries no meaningful issuer risk to disclose: nobody needs a prospectus to evaluate a Treasury bill. Sometimes the instrument is risky and opaque but the **circumstances** make disclosure unnecessary or the state's interest small: a sale to a bank's investment department, a one-off sale of an inherited certificate between neighbors, a trade the customer thought of first.

Because the reasons are independent, the categories behave differently. An exempt security is exempt in every transaction, forever. An exempt transaction is exempt once — **the exemption attaches to the trade, and the next trade in the same security is analyzed from scratch.** A candidate who reads "the security was exempt" into a fact pattern that actually describes an exempt transaction will answer the follow-up question wrong.

## Exempt Securities

The organizing principle: **an exempt security is one where the identity or supervision of the issuer already answers the question registration is designed to answer.** Every entry below is an application of that idea.

### Government and Sovereign

- **US government and agency securities** — Treasuries, GNMA, and other federal agency obligations. There is no issuer credit story to disclose and no promoter with an incentive to mislead; the taxing power is the disclosure.
- **Municipal securities** — obligations of any state, political subdivision, or their agencies. **All US municipal issues are exempt in every state**, not merely in the issuing state. The reason for the nationwide scope is comity: no state wants its own bonds excluded from sale in the other forty-nine, so all of them extend the exemption to each other.
- **Canadian federal and provincial (municipal) obligations** — exempt, reflecting the integration of the two markets and the comparable regulatory quality of the Canadian issuers.
- **Other foreign government securities**, but only where the **United States maintains diplomatic relations** with that country. Foreign **political subdivisions** generally do **not** get the exemption — the Canadian provincial carve-out is the exception candidates forget. The diplomatic-relations condition is a crude but real proxy for whether an American investor could ever enforce anything.

### Financial Institutions

- Securities issued or guaranteed by a **bank, savings institution, credit union, or trust company** organized or supervised under US or state law. The rationale is the same one that excludes banks from the broker-dealer and adviser definitions: a banking regulator already examines the institution continuously for solvency, which is a far stronger protection than a one-time registration.
- **A bank holding company is not a bank.** Holding company stock is **not** an exempt security — the single most repeated trap in this section. The holding company takes no deposits, is not examined as a depository, and its shares carry ordinary equity risk. Everything that justified the exemption belongs to the subsidiary.

### Insurance Companies

Securities of an **insurance company authorized to do business in the state**. State insurance departments regulate reserves, investments, and solvency, so the same "another regulator is already watching" logic applies. Note this covers the insurer's own stock and debt.

**Variable annuities and variable life are securities and are NOT exempt** — the separate account is a registered investment product, the contract owner bears the investment risk, and no solvency regulation of the insurer answers the question of how the separate account will perform. A fixed annuity, where the insurer bears the risk, is not a security at all.

### Regulated Enterprise

- **Public utility and common carrier** securities where the issuer is regulated with respect to rates or the issuance of securities by a governmental commission (state PUC, FERC, or an equivalent), and equipment trust certificates of such issuers. The condition is doing the work: the exemption is available because a commission approves the rates that generate the revenue and often approves the security issuance itself.

### Nonprofit and Institutional

- Securities issued by a person organized and operated **not for private profit** but exclusively for **religious, educational, benevolent, charitable, fraternal, social, athletic, reformatory, or trade association** purposes. The theory is that there are no promoters extracting private gain. That theory has been abused often enough — church bond programs are a recurring enforcement problem — that many states require a **notice filing** before relying on this one.
- Interests in **employee benefit plans** — pension, profit-sharing, stock purchase, savings, and similar plans, which are separately regulated under ERISA and are not offered to the public.
- Securities of **cooperatives** and certain **membership** organizations.

### Money Market Paper

**Commercial paper** is exempt **under the Act** when it meets **all three** conditions:

- maturity of **9 months (270 days) or less**;
- denominations of **at least $50,000**;
- one of the **top three** ratings from a nationally recognized rating agency.

Each condition removes one risk. Short maturity limits how far the credit can deteriorate before repayment. The large denomination keeps retail investors out of the instrument entirely. The rating floor supplies the credit analysis a prospectus would otherwise provide. Miss any one and the exemption is gone — candidates routinely accept 9-month paper in $25,000 denominations, or A-rated paper below the ratings floor. Keep this state test separate from the **federal** exemption from Securities Act registration, which turns on maturity of nine months or less and proceeds used for **current transactions** and imposes **no denomination minimum** at all. The same note can clear one test and fail the other.

### Federal Covered

**Exchange-listed securities and other federal covered securities** are effectively exempt from state registration by preemption, though a state may still require a notice filing. Here the substitute regulator is the exchange's listing standards and the SEC's reporting regime.

## Exempt Transactions

Exempt transactions are defined by the **manner of sale**. Rather than memorizing a flat list, group them by what each exemption is actually protecting.

### Group One: The Buyer Does Not Need Protecting

**Institutional transactions.** Sales to **institutional investors** — banks, savings institutions, trust companies, insurance companies, investment companies, broker-dealers, and large pension or profit-sharing plans. These buyers have analysts, counsel, and bargaining power; a prospectus adds nothing they could not demand for themselves. **Wealthy individuals are never institutional investors.**

### Group Two: There Is No Public Distribution

**Private placement (limited offering).** A private placement is exempt under the model act when:

- **directed to no more than 10 non-institutional (retail) persons** in the state during any **12 consecutive months** — the count runs on the people the offer is directed to, and offers to institutions are **unlimited** and do not count;
- there is **no general solicitation or advertising**;
- the seller **reasonably believes** all non-institutional buyers are purchasing **for investment**, not resale;
- **no commission or remuneration** is paid for soliciting **non-institutional** purchasers.

Note the counting rule. The model act exempts a transaction pursuant to an **offer directed to not more than ten persons** other than institutional investors, so the count is of **offerees, not purchasers**, and only **non-institutional** ones. An eleventh retail person who is offered the security breaks the exemption even if that person never buys; ten offers that produce ten sales are inside the limit. The four conditions work together to describe a sale that never reached the public — a small, private, negotiated placement to people who will hold what they bought.

**Pre-organization certificates and subscriptions.** Exempt when there are **no more than 10 subscribers**, **no commission or remuneration** is paid for soliciting, and **no payment is made by any subscriber** until the corporation is organized. All three are required. The zero-payment condition is what usually breaks the fact pattern, and it is the most important of the three: an unorganized corporation has no assets, no governance, and nobody to sue, so the exemption survives only if no money changes hands.

**Existing security holder transactions.** **Rights offerings, warrants, and conversions** offered to **existing security holders** of the issuer, provided **no commission** is paid for soliciting (or the Administrator receives notice and does not disallow). Also **stock dividends and stock splits** where nothing of value is given. The protective logic: these are not offers to the public but adjustments among people who already own the issuer, and in a split or stock dividend the holder is not investing anything new.

### Group Three: The Customer Initiated It

**Unsolicited brokerage transactions.** Any **non-issuer transaction by an agent effected at the unsolicited request of the customer** is exempt. This is far and away the most common exempt transaction in practice and on the exam. The rationale is that the entire apparatus of registration exists to police **selling effort** — a firm pushing an issue on someone who was not looking for it. Where the customer arrives with a specific security in mind, there is no selling effort to police.

That is also why the paperwork matters so much. The Administrator may require the customer to **acknowledge in writing** that the transaction was unsolicited, and the firm must **mark the order ticket unsolicited**. If a customer calls and asks to buy an unregistered security by name, the exemption applies; if the agent brought it up first, it does not. **Marking a solicited ticket unsolicited is fraud**, not paperwork — it is a false statement about the one fact the exemption turns on.

### Group Four: There Is No Promoter and No Selling Effort

**Isolated non-issuer transactions.** An occasional, one-off trade by someone not in the securities business — a private individual selling a legacy certificate to another individual. **Isolated means genuinely infrequent**; a pattern of trades is not isolated. Nobody is distributing anything, so there is nothing for registration to protect against.

**Fiduciary transactions.** Transactions by an **executor, administrator, sheriff, marshal, receiver, trustee in bankruptcy, guardian, or conservator** are exempt. These are **court-appointed** fiduciaries, and that is the whole point: a court has already vetted the person and supervises the sale, so the state securities Administrator does not need to.

**A trustee of an inter vivos (living) trust is NOT court-appointed** — that trustee is named in a private document by the grantor, with no judicial screening whatsoever. Transactions by a living-trust trustee do **not** qualify for this exemption. This is a very frequently tested trap. A **custodian** under UTMA is likewise not court-appointed.

### Group Five: The Parties Are Professionals

- Transactions **between an issuer and an underwriter**, and **among underwriters**. These are wholesale steps in a distribution, not sales to investors; the retail leg is what gets registered.
- Transactions by a **pledgee** of a security in a bona fide pledge, such as a lender liquidating collateral. The lender is realizing on security for a loan, not distributing an issue.
- Certain **unit-secured** and mortgage-note transactions where the entire mortgage is sold as a unit.

### Worked Scenario: Sorting a Fact Pattern

Halstead Partners, an unregistered issuer, sells its common stock in three ways during one year in the same state.

**Sale one:** to a state-chartered bank's investment department, $2M. This is an **exempt transaction** — an institutional sale. Halstead stock is not an exempt security; the bank's status is what makes this particular sale exempt.

**Sale two:** to seven local individuals, each introduced personally by a partner, with no advertising, each signing a representation that she is buying for investment, and no one paid a commission. This is an **exempt transaction** — the private placement exemption, with the offer directed to seven of the ten permitted retail persons.

**Sale three:** one of those seven individuals decides four months later to sell her shares to her neighbor, who asked her about them. That is a **non-issuer transaction**, and if genuinely one-off it is an **isolated** transaction, exempt on its own footing.

Now the point of the exercise. Notice that Halstead common stock was never exempt at any moment. Each sale had to find its own exemption, and if a fourth sale were made by advertisement to twenty strangers, none of the previous three would help it. **Exempt transactions do not accumulate into an exempt security.**

## How an Exemption Is Lost

Transactional exemptions are conditional, and the conditions are not decorative. Three failure modes account for most exam questions and most enforcement actions.

**General solicitation.** Any advertisement, mass mailing, seminar open to the public, cold-calling campaign, or unrestricted website posting destroys the private placement exemption. The condition exists because general solicitation is the definition of a public distribution — the moment the offering is broadcast, the state's interest in registration is fully engaged, regardless of how few people ultimately buy. Note the trap: **the exemption is lost by the solicitation itself, not by the number of resulting sales.** An issuer that advertises in a newspaper and sells to only two people has still made a general solicitation and has still lost the exemption.

**Exceeding the numerical limits.** The eleventh non-institutional **offeree** inside 12 months breaks the private placement exemption, whether or not that person buys; the eleventh subscriber breaks the pre-organization exemption. Two counting rules save candidates here: count **offerees, not purchasers**, and count only **non-institutional** ones. Note also that the private placement count runs over any **12 consecutive months**, not a calendar year, so a promoter cannot reset it on January 1.

**Paying commissions.** The private placement, pre-organization, and existing-security-holder exemptions all condition on **no commission or remuneration for soliciting** the protected class of purchasers. Transaction-based pay is the engine of selling pressure — it is what turns a passive offering into a sales campaign — so its presence is treated as proof that the transaction was the kind of distribution the exemptions were never meant to cover. Salary paid to an officer who happens to answer questions is not a commission; a percentage of the amount raised is.

### Worked Scenario: The Private Placement That Is Not One

Ostend Renewables intends a private placement of $3M in its home state. It identifies 8 wealthy local individuals and 2 insurance companies as targets and hires a consultant, paying her 3% of whatever she raises.

Count the non-institutional offerees first: 8, which is within 10 — the 2 insurers are institutional and do not count. So far, so good. But the consultant is being paid **remuneration for soliciting non-institutional purchasers**, and that condition alone destroys the exemption for the retail leg. If Ostend closes anyway, the sales to the 8 individuals were unregistered, non-exempt sales, and each purchaser has a **rescission right**.

Now change the facts. Ostend pays the consultant a flat monthly retainer regardless of results, and she solicits only the 2 insurance companies while the founders personally approach the 8 individuals. The commission condition is not violated, no advertising occurred, the retail offeree count is inside the limit, and the exemption holds.

One more variation. Ostend keeps the clean structure but posts a summary of the offering on its public website to "let people know what we are building." That is **general solicitation**, and it is fatal even though every actual purchaser was contacted personally. **The exemption dies at the broadcast, not at the sale.**

## The Two Things Exemptions Never Do

**1. No exemption ever excuses fraud.** The **antifraud provisions apply to every security and every transaction**, exempt or not, registered or not, federal covered or not. If a question offers "because the security was exempt, the antifraud rules did not apply," that answer is always wrong. The Administrator retains jurisdiction to investigate and sanction fraud in an exempt offering.

The reason is that exemption and fraud address different things. An exemption is a judgment that **prior disclosure through registration** is unnecessary — because the issuer is a government, or the buyer is a bank, or the sale reached nobody. None of those judgments implies that lying is acceptable. Registration is a filing requirement; antifraud is a rule of conduct, and the act never trades one away for the other.

**2. An exempt transaction does not exempt the people.** The **agent and broker-dealer registration requirements survive**. An agent selling an exempt municipal bond in a state where they are not registered has violated the act — the bond is exempt, the person is not. Only the specific issuer-representative exclusions relieve an individual.

Hold the two questions apart deliberately, because a fact pattern will often answer one and leave the other hanging:

- **Does the security have to be registered?** Look at the instrument (exempt security), the manner of sale (exempt transaction), or preemption (federal covered).
- **Does the person have to be registered?** Look at the definitions of broker-dealer, agent, investment adviser, and IAR, and at their exclusions and exemptions. The security's status is almost irrelevant to this question.

So a registered representative who fills an unsolicited order for an unregistered security in a state where she is licensed has done nothing wrong on either axis. The same representative filling the same order for a resident of a state where she is not licensed has a clean answer on the first question and a violation on the second.

### Burden of Proof

The **person claiming an exemption bears the burden of proving it**. That allocation is deliberate: the facts that establish an exemption — who solicited whom, how many purchasers there were, what the buyers intended, what anyone was paid — are known to the seller and nearly invisible to the regulator. Putting the burden on the seller is also what makes the recordkeeping conditions meaningful, since the unsolicited-order ticket and the investment-intent letter exist to be produced later.

The Administrator may **deny, suspend, or revoke** a transactional or securities exemption by order — usually prospectively, and with notice and an opportunity for a hearing. Exemptions are not permanent grants; they are standing permissions the Administrator can withdraw when they are being misused.`,
  pitfalls: [
    "Bank securities are exempt; bank holding company stock is not. The holding company is a separate issuer with no exemption.",
    "Commercial paper needs all three conditions for the STATE exemption — 9 months or less, at least $50,000 denominations, and a top-three rating. Failing any one destroys it. The federal Securities Act exemption is a different test and has no denomination minimum.",
    "A trustee of a living trust is not a court-appointed fiduciary, so the fiduciary transaction exemption does not apply. Executors, receivers, guardians, and trustees in bankruptcy do qualify.",
    "The private placement limit counts non-institutional OFFEREES, not purchasers — an eleventh retail person offered the security breaks it even if nobody buys. Offers to institutional investors are unlimited.",
    "Pre-organization subscriptions require no payment from any subscriber until the corporation is organized — not merely a cap of 10 subscribers.",
    "No exemption of any kind excuses fraud. Antifraud provisions reach every security and every transaction.",
    "An exempt transaction does not relieve the agent or broker-dealer of registration. The security may be exempt while the person selling it is not.",
    'Canadian provincial obligations are exempt, but political subdivisions of other foreign countries generally are not.',
    "A general solicitation destroys the private placement exemption at the moment of the broadcast, regardless of how few people actually buy. Do not count the sales — look for the advertisement.",
    "Exempt transactions do not accumulate into an exempt security. Each sale of the same stock must find its own exemption; the previous one never helps.",
    "The private placement offeree count runs over any 12 consecutive months, not a calendar year, so it cannot be reset on January 1.",
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
        'A state exemption for an offer directed to 10 or fewer non-institutional persons in 12 months, with no general solicitation, investment intent on the part of the buyers, and no commission for soliciting retail purchasers.',
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
    {
      dont: 'The private placement count — offers directed to no more than 10 non-institutional persons',
      with: 'Regulation D — a federal rule counting up to 35 non-accredited purchasers',
    },
  ],
};
