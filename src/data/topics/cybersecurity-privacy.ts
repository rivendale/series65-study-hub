import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'cybersecurity-privacy',
  title: 'Cybersecurity, Privacy, and Business Continuity',
  weight: '~2%',
  order: 39,
  summary:
    "Protecting client information and keeping the firm running are now written regulatory obligations, not best practices: Regulation S-P and S-ID govern privacy and identity theft, and NASAA model rules require state-registered advisers to maintain written information security and business continuity and succession plans.",
  body: `## Regulation S-P — privacy of consumer financial information

**Regulation S-P** implements the privacy provisions of the **Gramm-Leach-Bliley Act** for broker-dealers, investment advisers, investment companies, and transfer agents.

### Who is protected

- A **consumer** is an individual who obtains a financial product or service for personal, family, or household purposes — including someone who merely applies.
- A **customer** is a consumer with a **continuing relationship**, such as an advisory client.
- **Non-public personal information (NPI)** is personally identifiable financial information — account numbers, balances, transaction history, income, Social Security number — plus any list derived from it. Publicly available information is not NPI.

Only **natural persons** are covered. A corporate or institutional client is outside Reg S-P.

Reg S-P implements three ideas from Gramm-Leach-Bliley, and the exam questions track them: **notice** (tell people what you collect and share), **choice** (let them stop some of the sharing), and **safeguards** (protect what you hold, whether or not you share any of it). The safeguards duty is the one candidates underweight: it binds even a firm that shares nothing with anyone, because holding the information is what creates it.

### The notices

| Notice | When |
| --- | --- |
| **Initial privacy notice** | To a **customer** not later than when the customer relationship is established; to a **consumer** before disclosing NPI to a nonaffiliated third party |
| **Annual privacy notice** | Once in any 12-month period while the relationship continues — **excused** if the firm shares NPI only within statutory exceptions and its policies have not changed since the last notice delivered |
| **Revised notice** | Before sharing in a new way not covered by the prior notice |
| **Opt-out notice** | With the initial notice, describing the right and a reasonable means to exercise it |

### The opt-out right

A customer may **opt out of the firm sharing NPI with nonaffiliated third parties**. The opt-out must remain available at any time, and the firm must give a reasonable period to respond before sharing. Exceptions where **no opt-out applies**: sharing with **service providers** under contract, sharing to **process or service a transaction the customer requested**, and disclosures required by **law, subpoena, or regulator**.

Opting out does **not** stop sharing with affiliates or block the disclosures listed above — this is a classic distractor.

### The safeguards rule and disposal rule

Firms must adopt **written policies and procedures reasonably designed** to (1) ensure the **security and confidentiality** of customer records and information, (2) protect against **anticipated threats or hazards**, and (3) protect against **unauthorized access or use** that could result in substantial harm or inconvenience. The **disposal rule** requires reasonable measures to protect against unauthorized access when disposing of consumer report information — shredding paper, wiping or destroying drives.

### Amended incident response and customer notification

The amendments to Regulation S-P added an explicit **incident response program** requirement. Covered firms must:

- **Detect, respond to, and recover** from unauthorized access to or use of customer information;
- **Assess the nature and scope** of any incident and take steps to contain and control it;
- Oversee **service providers** by contract, requiring them to take appropriate measures and to **notify the firm of a breach**; and
- **Notify affected individuals as soon as practicable, and no later than 30 days** after becoming aware that unauthorized access to or use of sensitive customer information has occurred or is reasonably likely to have occurred — unless the firm determines the information has not been and is not reasonably likely to be used in a manner that would result in substantial harm or inconvenience.

The notice must describe **what happened, what information was involved, and what the individual can do to protect themselves**, including contact information.

Note also the separate SEC **Form ADV** and examination expectations, plus state data-breach statutes that may impose **shorter** deadlines and **attorney-general notification**. When state law is stricter, the firm complies with both.

### Worked scenario: the vendor is breached

A state-registered adviser keeps client records in a cloud CRM. In March the vendor discovers unauthorized access to a database containing client names, Social Security numbers, and account numbers. It tells the adviser eight days later. Work through who owes what.

- **The obligation is the adviser's.** Reg S-P runs to the covered firm, not its vendors: an adviser can outsource the processing, never the duty. The firm assesses scope, contains the incident, and notifies.
- **Eight days is itself a finding.** The amended rule requires oversight of service providers by **written contract** obligating them to take appropriate measures and to notify the firm **as soon as possible and no later than 72 hours** after becoming aware of a breach. A vendor that took eight days either had no such clause or ignored it — either way the oversight program failed independently of the breach.
- **The 30-day clock starts when the firm becomes aware** that unauthorized access to sensitive customer information has occurred or is reasonably likely to have occurred. Notice must go out **as soon as practicable and in no event later than 30 days**. Note that the clock runs from **awareness of the incident**, not from the conclusion of the investigation — a firm that waits to finish its forensics before starting the count has already misread the rule.
- **These requirements are fully in force.** Compliance was phased: **December 3, 2025** for larger entities and **June 3, 2026** for smaller ones. Both dates have now passed, so treat the amended rule as live for every covered firm rather than as a forthcoming change.
- **The exception requires a determination, not silence.** A firm may withhold notice only if it determines the information has not been and is not reasonably likely to be used in a way causing substantial harm or inconvenience. The default is to notify, and the determination must be documented.
- **The vendor may deliver the notices; the firm remains responsible** for them and their content.
- **State law still applies on top.** Many state breach statutes impose shorter deadlines and require notice to the attorney general; where they are stricter, the firm satisfies both.

## Regulation S-ID — identity theft red flags

**Regulation S-ID** requires firms that offer or maintain **covered accounts** — accounts permitting multiple payments or transfers to third parties, or any account with a reasonably foreseeable risk of identity theft — to maintain a written **Identity Theft Prevention Program** that:

1. **Identifies** relevant red flags;
2. **Detects** them in day-to-day operations;
3. **Responds appropriately** to prevent and mitigate identity theft; and
4. Is **periodically updated** for changing risks.

The program must be approved by the **board or senior management**, with staff training and oversight of service providers. Typical red flags: alerts from consumer reporting agencies, suspicious documents or personal identifying information, unusual account activity, and notices from customers or law enforcement.

## NASAA model rule on information security and privacy

Several states have adopted the NASAA model rule requiring **state-registered investment advisers** to establish, implement, and maintain **written policies and procedures** on cybersecurity and privacy. Failure to do so is itself a **dishonest or unethical practice** in adopting states. The core elements:

- **Written information security program** covering the physical office, electronic systems, and any information stored with third parties
- **Annual review** of the policies, at a minimum, and updating as the business or the threat environment changes
- **An incident response plan** — how the firm identifies, contains, remediates, and reports an event, and who is responsible
- **Employee training** on the policies and on recognizing threats
- **Third-party and vendor due diligence**, including contractual security obligations and ongoing monitoring
- **Recordkeeping of incidents** and of the firm's response
- **Delivery of the firm's privacy policy** to each client **initially and annually**, and maintaining a copy of each version

The parallel NASAA model recordkeeping amendment requires advisers to keep **records of the information security policies in effect** and of any **cybersecurity incident**.

## NASAA model rule on business continuity and succession planning

State-registered advisers must adopt a **written business continuity and succession plan** based on the **facts and circumstances of the firm's business model**, including its size, the types of services provided, and the number of locations. Required elements:

- **Protection, backup, and recovery of books and records** — including off-site or cloud backup that is tested
- **Alternate means of communicating with clients, key personnel, employees, vendors, service providers, and regulators**, including a way to reach clients when the primary office and phone system are down
- **Office relocation** in the event of a temporary or permanent loss of a principal place of business
- **Assignment of duties to qualified responsible persons** in the event of the death or unavailability of key personnel
- **Minimizing service disruption and client harm** that could result from a sudden significant business interruption

**Succession** is the piece candidates forget. For a **solo adviser**, the plan should identify who will step in, how clients will be told, and how accounts will be transitioned or the business wound down. Regulators consider the absence of a succession arrangement at a one-person firm a direct client-harm risk.

Business continuity sits in a rulebook rather than an operations manual because its failures land on clients, not on the firm. A client who cannot reach anyone to raise cash during a dislocation, or whose account sits unmanaged for months after a solo adviser dies, has suffered a real loss caused by the adviser's planning. Continuity and succession are **client-protection obligations**, and their absence is a **deficiency**, not a business risk the adviser may choose to accept.

## Common threats and practical controls

| Threat | How it works | Primary controls |
| --- | --- | --- |
| **Phishing / spear phishing** | Fraudulent email impersonating a trusted party to harvest credentials | Training, email filtering, flagging external senders, MFA |
| **Social engineering** | Manipulating staff by phone or in person to bypass procedures | Callback verification, scripted authentication, culture of escalation |
| **Ransomware** | Malware encrypting firm data and demanding payment | Tested offline backups, patching, endpoint protection, least-privilege access |
| **Account takeover** | Stolen credentials used to access client accounts | **Multi-factor authentication**, login anomaly monitoring, session timeouts |
| **Wire fraud / business email compromise** | Spoofed client email requesting a funds transfer to a new account | **Verbal verification with the client using a previously known phone number**, dual approval, delayed release on new instructions |

Baseline hygiene the exam expects an adviser to have: **encryption of data at rest and in transit**, **multi-factor authentication**, **least-privilege access** with prompt removal on termination, **prompt patching**, a **written mobile-device and remote-work policy**, and **no business communications on unmonitored personal channels**.

Never verify a change of wire instructions by replying to the email that requested it. That is the single most tested practical control.

### Worked scenario: the urgent wire

A representative receives an email from a client of eleven years — correct address, familiar signature block — asking that $85,000 be wired to a new account for a property closing tomorrow. A second line adds: in meetings all day, please just email.

Every element of that message is the attack. The **new destination**, the **artificial deadline**, and the **pre-emptive excuse for not talking** are the pattern, and the excuse is the tell: an attacker who controls the mailbox can answer any question sent to it, so replying to the email and receiving a confirmation proves nothing at all. Verification must move to a **different channel** — a callback to the number already on file, never a number supplied in the request.

The controls that stop this are procedural rather than technical: **verbal verification on a known number**, **dual approval** for changes to disbursement instructions, and a **delayed release** on first use of new instructions. If the client is elderly and the story is thin, the matter also escalates as possible exploitation, where the delayed-disbursement framework may apply.

Note where the violation lands if the money leaves: the firm's exposure is a **failure to follow and supervise its own procedure**, and that failure exists whether or not the wire is recovered.

### What an examiner actually asks for

Regulators test cybersecurity by asking for artifacts:

- The **written information security program** and the date of its last review
- The **incident response plan**, with named roles, plus the log of any incidents and the firm's response
- Evidence that **multi-factor authentication** is enforced — on email above all, since email is the entry point for wire fraud and credential theft
- Proof of **encryption** in transit and at rest, including laptops and mobile devices
- A current **access review**, with evidence that access was removed promptly on termination
- **Training records** with dates, attendance, and content, including phishing simulations
- **Vendor due diligence** files: what was reviewed before onboarding, what the contract requires on security and breach notification, and what monitoring has happened since
- The **privacy policy delivered to clients** initially and annually, with each version retained

A plan never tested and training nobody attended are recurring deficiencies; "we have a policy" answers none of these questions.

## Senior and vulnerable client protection

### Trusted contact person

Firms should make a **reasonable effort to obtain the name and contact information of a trusted contact person** at or after account opening. The trusted contact is someone the firm may contact to:

- Address possible **financial exploitation**;
- Confirm the client's **current contact information, health status, and whereabouts**; and
- Identify any **legal guardian, executor, trustee, or holder of a power of attorney**.

The trusted contact **may not trade or access the account** and is not a beneficiary or an agent. A client may **decline** to name one; the firm documents the request and the refusal.

### Permitted holds on disbursements

Under the **NASAA Model Act to Protect Vulnerable Adults from Financial Exploitation** and the parallel **FINRA framework**, a qualified person who **reasonably believes financial exploitation of an eligible adult** — generally someone **65 or older**, or an adult with a mental or physical impairment that impairs the ability to protect their own interests — has occurred, is occurring, or is attempted may:

- **Delay a disbursement or transaction** from the account, and
- **Notify the trusted contact and other authorized parties**, and
- **Report to the state securities Administrator and adult protective services**.

The typical timeline: the hold may last **15 business days**, extendable by **10 additional business days** if the internal review supports the belief, and further extended by **court order or by the Administrator or agency**. Notice of the hold and the reason must go to all parties authorized to transact on the account (other than any party suspected of the exploitation), generally **within 2 business days**.

Persons acting in **good faith and with reasonable care** under these provisions receive **immunity** from administrative and civil liability. Firms must maintain **records** of the report, the hold, and the internal review, and make them available to the regulator.

### Elder exploitation reporting

Reporting obligations run to the **state securities regulator and adult protective services** under the NASAA model act. Firms should train staff on **diminished-capacity indicators** — repeated or confused instructions, sudden interest from a new "friend" or caregiver, uncharacteristic large withdrawals, isolation from family — and should have a documented internal escalation path. Suspicion is enough to trigger escalation; certainty is not required.`,
  pitfalls: [
    "Opting out under Regulation S-P blocks sharing with NONAFFILIATED third parties only — it does not stop sharing with affiliates, with service providers under contract, or where disclosure is required to process the client's own transaction or by law.",
    "The annual privacy notice can be excused when the firm shares only within the statutory exceptions and its policies have not changed, so an answer stating the annual notice is unconditionally required is wrong.",
    "The amended Regulation S-P breach requirement is notification to affected individuals as soon as practicable and no later than 30 days after becoming aware — and stricter state breach statutes still apply on top of it.",
    "Regulation S-P protects natural persons obtaining products for personal, family, or household purposes; institutional and corporate client information is outside its scope.",
    "A trusted contact person cannot trade, withdraw, or direct the account — naming one is not the same as granting a power of attorney or adding a beneficiary.",
    "A hold on a suspected exploitative disbursement is temporary, typically 15 business days plus a 10-business-day extension, and requires prompt notice to authorized parties other than the suspected exploiter, plus documented internal review.",
    "A breach at a service provider does not shift the obligation: the covered firm still owes the customer notice, the contract must require the vendor to report a breach within 72 hours, and the vendor may deliver the notices only on the firm's continuing responsibility.",
    "Business continuity plans must include SUCCESSION — a solo adviser without a named successor and a client transition plan is a compliance deficiency, not merely a business risk.",
  ],
  keyTerms: [
    {
      term: 'Non-public personal information (NPI)',
      definition:
        "Personally identifiable financial information about a consumer, and any list derived from it, that is not publicly available; the category Regulation S-P is designed to protect.",
    },
    {
      term: 'Opt-out right',
      definition:
        "The consumer's right under Regulation S-P to direct that non-public personal information not be shared with nonaffiliated third parties, subject to exceptions for service providers, transaction processing, and legally required disclosures.",
    },
    {
      term: 'Safeguards rule',
      definition:
        "The Regulation S-P requirement that firms adopt written policies reasonably designed to ensure the security and confidentiality of customer records and protect against anticipated threats and unauthorized access.",
    },
    {
      term: 'Incident response program',
      definition:
        "The amended Regulation S-P requirement to detect, assess, contain, and recover from unauthorized access to customer information, oversee service providers, and notify affected individuals no later than 30 days after becoming aware.",
    },
    {
      term: 'Regulation S-ID',
      definition:
        "The identity theft red flags rule requiring firms with covered accounts to maintain a written, board-approved program to identify, detect, respond to, and periodically update for identity theft risks.",
    },
    {
      term: 'Business continuity and succession plan',
      definition:
        "The written plan required by NASAA model rule covering records backup and recovery, alternate client and staff communication, office relocation, assignment of duties to qualified persons, and minimizing client harm from a business interruption.",
    },
    {
      term: 'Trusted contact person',
      definition:
        "An individual the firm makes reasonable efforts to identify at account opening who may be contacted about suspected exploitation, the client's whereabouts or health, and the existence of a guardian or power of attorney, but who has no trading or withdrawal authority.",
    },
    {
      term: 'Eligible adult',
      definition:
        "Under the NASAA vulnerable adult model act, a person 65 or older or an adult whose mental or physical impairment limits the ability to protect their own interests, whose account may be subject to a temporary disbursement hold on reasonable belief of exploitation.",
    },
    {
      term: 'Business email compromise',
      definition:
        "A wire fraud technique in which an attacker spoofs or takes over a client email account to request a transfer to a new destination, defeated by verbal verification with the client at a previously known phone number.",
    },
  ],
  confusions: [
    {
      dont: 'Regulation S-P, which governs privacy, safeguarding, and breach notification for consumer financial information',
      with: 'Regulation S-ID, which requires an identity theft red flags detection and response program',
    },
    {
      dont: 'A trusted contact person, who receives information but cannot act on the account',
      with: 'An agent under a power of attorney, who can direct transactions',
    },
    {
      dont: 'The business continuity plan, which keeps the firm operating through a disruption',
      with: 'The succession plan, which addresses the death or permanent unavailability of key personnel',
    },
    {
      dont: 'Sharing with nonaffiliated third parties, which triggers the opt-out right',
      with: 'Sharing with affiliates or service providers processing the client transaction, which does not',
    },
    {
      dont: 'The initial privacy notice, due no later than when the customer relationship is established',
      with: 'The annual notice, which may be excused if sharing stays within exceptions and policies are unchanged',
    },
  ],
};
