import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'custody-safekeeping',
  title: 'Custody, Safekeeping, and Client Assets',
  weight: '~3%',
  order: 34,
  summary:
    "Custody is defined by control, not by intent — an adviser who can reach client funds or securities has custody whether or not it ever touches them, and that triggers the qualified custodian, notice, quarterly statement, surprise examination, and net worth rules the exam tests relentlessly.",
  body: `## What the rule is actually preventing

Every element of the rule traces to one fact pattern: an adviser holds or can reach client assets, tells the client the account is worth what it is not, and the client has **no independent source of truth** to check against. Where the adviser and the custodian are the same enterprise, the statement a client receives is the adviser's own arithmetic, and nothing in the portfolio has to exist for the number to look right.

Read each requirement as an answer to that problem:

- **Qualified custodian** — puts the assets somewhere the adviser does not control, held by a third party with its own regulator and its own records.
- **Statements sent directly by the custodian** — gives the client a number the adviser did not compute and cannot intercept.
- **Urge the client to compare** — makes the client the auditor of the gap between the two documents.
- **Surprise examination** — sends an independent accountant to confirm the assets are actually there, on a date the adviser cannot prepare for.
- **Internal control report** — where the adviser or an affiliate *is* the custodian, restores part of the independence that arrangement destroys.

This is why custody is defined by **capability rather than conduct**. An adviser who *could* move client money is an adviser whose reported numbers cannot be independently trusted, whether or not a dollar ever moved.

## What custody actually means

**Custody is holding client funds or securities, directly or indirectly, or having any authority to obtain possession of them.** The definition is deliberately broad. The exam wants you to reason from *capability*, not from what the adviser actually did. If the adviser **could** take the money, the adviser has custody.

Custody exists when the adviser:

- **Physically possesses** client cash or certificates, even briefly.
- Has **any arrangement or authority to withdraw** funds or securities from a client account — including a standing letter of authorization to move money to a third party.
- Holds a **general power of attorney** over the account.
- Serves as **trustee**, executor, conservator, or in a similar capacity for a client account.
- Serves as **general partner of a limited partnership, managing member of an LLC, or in a comparable role** for a pooled investment vehicle it advises. This is a capacity-based trigger — the adviser has legal access to pool assets by definition.
- **Deducts advisory fees directly** from client accounts. Under the SEC rule this is custody; under most state rules it is custody too, but with a lighter compliance path (below).
- Holds **client login credentials that permit withdrawal or transfer.** Having the client's username and password to a custodial account, where those credentials could move money, is authority to obtain possession. Read-only or adviser-level trading access generally is not.

### The standing letter of authorization

The **SLOA** is the trigger advisers least expect. The client signed it, the custodian honors it, the adviser never touches the account — but the adviser can direct money to **someone other than the client**, and that is authority to obtain possession.

The treatment is more nuanced than a one-line rule. SEC staff have said in no-action guidance that an adviser with a third-party standing letter may avoid the **surprise examination** where defined conditions are met: the client gives the custodian a **written instruction naming the recipient**, the client may change or terminate it, the **custodian verifies** the instruction and sends a transfer notice, the **adviser cannot designate or alter the recipient**, and records are kept. Two cautions: that relief is **staff guidance addressed to the surprise exam**, not a declaration that no custody exists, and **state treatment varies**. Treat it as conditional relief whose availability depends on the regulator, not a national safe harbor.

### What is NOT custody

**Discretionary trading authority alone is not custody.** A limited power of attorney that lets the adviser choose securities, amount, and timing but does **not** permit withdrawal of assets is discretion, not custody. This distinction is worth points on its own — but note that many states impose a **separate minimum net worth or bonding requirement on advisers with discretion**, so the two topics travel together.

## The check rules

These fact patterns appear constantly.

| Situation | Custody? | Required action |
| --- | --- | --- |
| Check made payable to the **adviser** | **Yes** — for any period, even one minute | Custody rules apply the moment it is received |
| **Third-party check payable to the qualified custodian**, forwarded within **3 business days** | **No** | Forward promptly; keep a record of receipt and forwarding |
| Same third-party check held **4+ business days** | **Yes** | Custody attaches |
| **Inadvertent receipt** of client funds or securities | No, if handled properly | **Return to the sender promptly** — the common benchmark is **3 business days** |
| Client's **own** securities certificate mailed to the adviser | No, if returned promptly | Return within 3 business days; do not deposit |

The trap: a check payable to the **adviser** is custody no matter how fast it is forwarded. Speed only saves you when the check was payable to someone else.

## Requirements once custody exists

### 1. Qualified custodian

Client assets must be maintained with a **qualified custodian**, defined as:

- A **bank or savings association** whose deposits are federally insured
- A **registered broker-dealer** holding the assets in customer accounts
- A **registered futures commission merchant** (for futures and related assets)
- A **foreign financial institution** that customarily holds financial assets for customers and segregates them from its own

Assets are held either in the **client's own name** or in the **adviser's name as agent or trustee for clients**, segregated from the adviser's proprietary assets. The requirement is about **separation**: the entity that computes a client's performance should not also be the entity holding the assets and producing the record of what is held. Segregation matters for a second reason — commingled assets cannot be traced to a particular client if the firm becomes insolvent.

### 2. Notice to the client

When the adviser opens an account with a qualified custodian on the client's behalf, it must **notify the client in writing** of the custodian's **name, address, and the manner in which the assets are held**, promptly upon opening and again whenever that information changes.

### 3. Account statements direct from the custodian

The qualified custodian must send **account statements at least quarterly directly to each client**, showing all funds and securities held and all transactions in the period. "Directly" is the operative word — routing statements through the adviser defeats the control.

If the adviser also sends its own statements, it must **urge the client to compare** the two. That instruction is not boilerplate: it makes the client the control. An adviser whose performance report shows a balance the custodian's statement does not is exactly the situation the rule exists to surface, and the client is the only party holding both pieces of paper.

### 4. Annual surprise examination

An **independent public accountant** must verify client funds and securities **at least once during each calendar year, at a time chosen by the accountant without prior notice to the adviser**. The accountant files **Form ADV-E** with the results and must notify the regulator within **one business day** of discovering any material discrepancy.

**Why "surprise" carries the weight.** A scheduled audit tests whether assets exist on a date the adviser knew about in advance — exactly the date an adviser running a shortfall would arrange to have them. Letting the accountant pick an undisclosed date removes the ability to prepare, which is the whole evidentiary value of the exercise. A thorough year-end audit on a known schedule therefore does **not** satisfy the rule.

**Exception:** the surprise exam is generally not required where the adviser's only form of custody is **direct fee deduction** meeting the conditions below, or where the adviser has custody solely because a **related person** holds assets and that person is operationally independent, or under the **pooled vehicle audit alternative**.

The fee-deduction carve-out is the boundary most often missed. Fee deduction is custody of a peculiarly limited kind: the adviser can take only a **computable amount**, from an account whose custodian reports every disbursement straight to the client. Where that is the adviser's **only** custody, the exam is waived. Add one second trigger — a third-party standing letter, a trustee appointment, a check made out to the firm — and the surprise examination returns.

### 5. Internal control report

If the adviser or a **related person** serves as the qualified custodian, the adviser must obtain an annual **internal control report** (a SOC-1 type report) from an independent public accountant registered with and subject to inspection by the **PCAOB**, opining that the controls over custody are suitably designed and operating effectively.

### 6. Pooled investment vehicle audit alternative

An adviser to a **limited partnership, LLC, or other pooled vehicle** may satisfy the surprise-exam and statement-delivery requirements by having the pool **audited annually by a PCAOB-registered independent accountant** in accordance with GAAP and **distributing audited financial statements to all investors within 120 days of the pool's fiscal year end** (180 days for a fund of funds). If the adviser winds up the pool, audited statements must go out promptly on liquidation.

### 7. Disclosure and notice filings

Custody must be disclosed on **Form ADV Part 1 (Item 9)** and in the **Part 2A brochure**. State-registered advisers generally must **notify the Administrator** that they have or will have custody, and some states **prohibit custody outright** unless the adviser gives written notice and the state does not object.

## Direct fee deduction — the leniency and its conditions

Most states treat direct fee deduction as custody but waive the surprise examination if the adviser:

1. Obtains **written authorization from the client** to deduct fees from the account held by the qualified custodian;
2. Sends the qualified custodian **notice of the amount of the fee** each time a fee is deducted;
3. Sends the client an **invoice or statement itemizing the fee**, including the formula used, the assets under management the fee was based on, and the time period covered; and
4. Confirms that the **custodian sends statements at least quarterly directly to the client** showing all disbursements, including the advisory fee.

Miss any one condition and the full custody apparatus snaps back into place.

## Minimum financial requirements

States set **minimum net worth** thresholds keyed to the adviser's activity. The classic model-rule figures are:

| Adviser activity | Typical state minimum net worth |
| --- | --- |
| **Custody** of client funds or securities | **$35,000** |
| **Discretionary authority** but no custody | **$10,000** |
| **Neither** custody nor discretion — accepts prepayment of more than $500, six or more months in advance | **Positive net worth** (and a balance sheet in the brochure) |

An adviser whose net worth falls **below** the required minimum must **notify the Administrator by the close of the next business day** and then file a **detailed financial report within one additional business day**. In lieu of net worth, many states allow a **surety bond** in the required amount; the bond must run to the state for the benefit of clients.

Federal covered advisers are not subject to state net worth rules — the SEC does not impose a general minimum net worth, relying instead on the custody rule itself. This is a preemption point, not a policy point.

## Structuring a practice to avoid custody entirely

Most small firms deliberately arrange never to have custody, because the surprise exam, net worth and notice apparatus is expensive. Custody is a **status an adviser can design around**, and the design is a checklist:

- **Never accept a check payable to the firm.** Have clients make checks payable to the qualified custodian, and forward third-party checks within **three business days** with a log entry.
- **Take discretion, not access.** A limited power of attorney authorizing trading and nothing else is discretion. Never accept a **general** power of attorney.
- **Deduct fees under the four conditions, or bill the client directly.** Direct billing is the only path that avoids custody on fees altogether.
- **Decline appointments** as trustee, executor, or attorney-in-fact, and decline **general partner** or managing member roles in pooled vehicles unless prepared for the full rule.
- **Refuse third-party standing letters**, or satisfy the no-action conditions and confirm the treatment in every state where clients reside.
- **Do not hold client credentials** that permit withdrawal. Use read-only or adviser-level access issued by the custodian.
- **Return anything received inadvertently within three business days**, with a record of receipt and return.

## Worked scenarios

### Three ways to receive the same $50,000

A client wants to add $50,000 to her managed account at Pinnacle Trust Company, the qualified custodian. Consider three deliveries to Rowan Advisers.

**A check payable to "Rowan Advisers."** Custody attaches the moment it arrives, and it does not matter that Rowan forwards it that afternoon. A check payable to the firm is an instrument the firm could have deposited into its own account, and that capability is what the definition targets. Speed cannot undo it.

**A check payable to "Pinnacle Trust Company."** No custody — provided Rowan forwards it **within three business days** and logs receipt and forwarding. Rowan could not have deposited this instrument to itself. Hold it a week and custody attaches, because Rowan is then holding client property.

**A wire straight to Pinnacle that Rowan never sees.** No custody, nothing to log.

Same client, same $50,000, three answers. Reason from **who could have taken the money**, never from what happened to it.

### The fee deduction that grew into custody

Ellery Wealth Management deducts fees quarterly from accounts held at a qualified custodian. It has written client authorization, notifies the custodian of each deduction, sends every client an invoice showing the formula, the assets the fee was computed on, and the period covered, and the custodian mails quarterly statements directly to clients showing the fee as a disbursement. Ellery has custody, and **no surprise examination is required**.

A longstanding client then asks Ellery to send $4,000 a month to her daughter and signs a standing letter authorizing it. Ellery now has authority to move client money **to a third party** — a second, independent form of custody. The fee-deduction leniency covers fee deduction and nothing else. Unless Ellery satisfies the staff no-action conditions for standing letters and confirms its state accepts that treatment, it needs the **annual surprise examination** and everything traveling with it.

Compare the near case that stays clean: had the client asked Ellery to move $4,000 a month to **her own identically titled account** elsewhere, that is generally treated as a transfer between the client's own accounts rather than custody — again subject to the conditions and to state treatment.

## Practical safeguards the exam rewards

- Never accept cash or bearer securities.
- Log every receipt of client property with date, form, and disposition.
- Reconcile the adviser's records to the custodian's statements — most enforcement cases begin with a reconciliation failure.
- Treat a **standing letter of authorization** to move money to a **third party** as custody; a standing instruction to move money to the client's **own identically titled account** is generally treated as a transfer, not custody, if specific conditions are met.`,
  pitfalls: [
    "Discretionary authority is NOT custody — but a general power of attorney or any right to withdraw assets IS, so read the fact pattern for the ability to move money rather than the ability to trade.",
    "A check made payable to the ADVISER creates custody the instant it is received, no matter how quickly it is forwarded; only a third-party check payable to the qualified custodian escapes custody, and only if forwarded within 3 business days.",
    "Quarterly account statements must come from the qualified custodian DIRECTLY to the client; statements produced or relayed by the adviser do not satisfy the rule and are the classic fraud fact pattern.",
    "The annual verification must be a SURPRISE examination — the accountant picks the date and gives no advance notice, so a scheduled year-end audit does not qualify.",
    "Serving as general partner of a fund or trustee of a client trust is custody by virtue of the role itself, even if the adviser never touches a dollar.",
    "Direct fee deduction is custody in most states; the surprise exam is waived only if the client authorized it in writing, the custodian is notified of the amount, the client receives an itemized invoice, and the custodian sends quarterly statements to the client.",
    "Net worth deficiency notice is due by the close of the NEXT business day, with the detailed financial report due one business day after that — not within 30 days.",
    "A standing letter of authorization to pay a third party is custody. SEC staff no-action relief can excuse the surprise examination if specific conditions are met, but it is conditional staff guidance aimed at the exam, not a declaration that custody does not exist, and state treatment varies.",
    "The fee-deduction leniency applies only when fee deduction is the adviser's ONLY form of custody. One additional trigger brings the surprise examination back for the whole practice.",
    "Holding client login credentials that could be used to withdraw or transfer funds is custody. Read-only or adviser-level trading access generally is not.",
  ],
  keyTerms: [
    {
      term: 'Custody',
      definition:
        "Holding client funds or securities directly or indirectly, or having any authority to obtain possession of them, including a general power of attorney, trustee or general partner status, and direct fee deduction.",
    },
    {
      term: 'Qualified custodian',
      definition:
        'A federally insured bank or savings association, a registered broker-dealer, a registered futures commission merchant, or a qualifying foreign financial institution that segregates client assets from its own.',
    },
    {
      term: 'Surprise examination',
      definition:
        "An unannounced annual verification of client funds and securities by an independent public accountant, timed at the accountant's discretion and reported to the regulator on Form ADV-E.",
    },
    {
      term: 'Internal control report',
      definition:
        "An annual report from a PCAOB-registered accountant, required when the adviser or a related person is the qualified custodian, opining that custody controls are suitably designed and operating effectively.",
    },
    {
      term: 'Pooled vehicle audit alternative',
      definition:
        "A substitute for the surprise exam and statement delivery under which the pool is audited annually by a PCAOB-registered accountant and audited financials are distributed to all investors within 120 days of fiscal year end.",
    },
    {
      term: 'Direct fee deduction',
      definition:
        "The practice of billing advisory fees straight from the custodial account, which constitutes custody but carries a reduced compliance burden when written client authorization, custodian notice, itemized client invoices, and direct custodian statements are all present.",
    },
    {
      term: 'Inadvertent receipt',
      definition:
        "Unsolicited receipt of client funds or securities that does not create custody if the property is returned to the sender promptly, generally within three business days, with a record of the receipt and return.",
    },
    {
      term: 'Standing letter of authorization',
      definition:
        "A client instruction permitting the adviser to direct transfers from the account. A letter permitting payment to a third party is custody; SEC staff no-action relief may excuse the surprise examination where defined conditions are satisfied, and state treatment varies.",
    },
    {
      term: 'Minimum net worth',
      definition:
        "The state-imposed financial threshold for advisers — commonly $35,000 with custody, $10,000 with discretion, and positive net worth for substantial prepayments — which may be satisfied by a surety bond in many states.",
    },
  ],
  confusions: [
    {
      dont: 'Custody, the ability to obtain possession of or withdraw client assets',
      with: 'Discretion, the authority to decide which securities to trade without touching the assets',
    },
    {
      dont: 'A check payable to the adviser, which is custody immediately',
      with: 'A third-party check payable to the qualified custodian, which is not custody if forwarded within three business days',
    },
    {
      dont: 'The surprise examination by an independent public accountant, required annually when custody exists',
      with: 'The internal control report, required only when the adviser or a related person is itself the qualified custodian',
    },
    {
      dont: 'The $35,000 net worth minimum for custody',
      with: 'The $10,000 minimum for discretion without custody',
    },
    {
      dont: 'Custodian statements sent directly to the client, which the rule requires',
      with: "Adviser-generated statements, which supplement but never replace the custodian's",
    },
  ],
};
