import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'administrative-oversight',
  title: 'Administrative Oversight, Remedies, and Penalties',
  weight: '~3%',
  order: 37,
  summary:
    "The Administrator can investigate, subpoena, order, deny, suspend, revoke, and refer for prosecution — but cannot fine criminally or imprison, because those are court powers, and the exam tests that boundary along with the rescission formula and the numeric deadlines.",
  body: `## Who the Administrator is and what the office can do

The **Administrator** is the state official or agency charged with enforcing the state's securities act. The powers fall into four groups.

### 1. Rulemaking and orders

The Administrator may **make, amend, and rescind rules, forms, and orders** necessary to carry out the act. Rules apply generally; **orders** apply to a specific person or situation. A rule or order is effective only if it is in the **public interest** and consistent with the purposes of the act. Notably, **no person is criminally liable for violating a rule or order of which the person had no actual knowledge** — publication and notice matter.

### 2. Investigation

The Administrator may investigate **within or outside the state** whenever it appears that a violation has occurred, is occurring, or is about to occur — including conduct **outside the state that affects persons within the state**, and conduct **inside the state that affects persons elsewhere**. Investigations may be **public or private**, and the Administrator may:

- **Subpoena witnesses and compel testimony under oath**
- **Subpoena books, records, and correspondence**
- Take evidence and require written sworn statements

If a person **refuses to comply with a subpoena**, the Administrator applies to a **court** for an order compelling compliance; disobedience of the court order is **contempt of court**. The Administrator cannot punish contempt directly. A witness may not refuse on self-incrimination grounds where the state provides **immunity**, but such testimony cannot be used against the witness in a criminal case.

The out-of-state reach exists because securities fraud travels. A statute limited to conduct occurring physically inside the state would leave every resident exposed to any boiler room willing to dial long distance, and would let an in-state operator escape by aiming only at victims elsewhere. Jurisdiction therefore follows the **effect**, in both directions.

### 3. Administrative enforcement

- **Cease-and-desist orders**, with or without a prior hearing depending on urgency
- **Denial, suspension, revocation, cancellation**, or restriction of a registration
- Denial or revocation of an **exemption** for a specific security or transaction
- **Stop orders** suspending the effectiveness of a securities registration statement
- **Civil administrative fines and orders of restitution and disgorgement** where the state act provides for them

### 4. Referral

The Administrator may refer a matter to the **attorney general or the appropriate prosecutor** for **criminal prosecution**, and may apply to a **court** for an **injunction**, a temporary restraining order, appointment of a **receiver**, or an order freezing assets.

### The hard limit

**The Administrator cannot imprison anyone, cannot impose a criminal fine, and cannot issue an injunction.** Those are **judicial** functions. An Administrator who wants any of them must go to court. This single boundary is one of the most frequently tested facts in the whole exam.

That line is not a drafting accident. The Administrator sits in the **executive** branch: it licenses, examines, and orders. Taking a person's liberty, or compelling conduct on pain of contempt, are **judicial** acts, and the separation of powers puts them in a court where the respondent gets a judge, rules of evidence, and — for a crime — a jury and proof beyond a reasonable doubt. So the Administrator's real lever is not force but **access**: it controls whether a person may lawfully do securities business in the state. Everything heavier requires a courtroom.

## Grounds for denial, suspension, or revocation

An adverse action must be **in the public interest** AND supported by at least one enumerated ground:

- Filing an application that was **incomplete, false, or misleading in any material respect**
- **Willful violation** of the state act, a rule or order under it, or federal securities, commodities, banking, or insurance law
- **Criminal conviction** — the two model acts draw the time limit differently, so read the section below rather than memorising one sentence
- Being **permanently or temporarily enjoined by a court** from engaging in the securities business
- Being the subject of an **order of another state Administrator, the SEC, or a federal agency**, or **expulsion or suspension by an SRO** such as FINRA
- Engaging in **dishonest or unethical practices** in the securities, commodities, banking, or insurance business
- **Insolvency** — either inability to pay debts as they come due or liabilities exceeding assets
- **Lack of qualification** based on training, experience, or knowledge (see the limits below)
- Failure to pay the **filing fee** — this results in an order **denying, suspending, or revoking** the registration, which is **vacated when the fee is paid**
- Being **not qualified** or having failed to comply with the state's **examination** requirement

### Limits on the qualification ground

The Administrator **may not** base a denial solely on **lack of experience** if training and knowledge are adequate, and must consider that an **agent or representative** is not required to have the same qualifications as a **principal or supervisor**. The Administrator **may** require an applicant who has not been registered in any state within the prior two years to pass an examination, including one written or oral.

### Criminal convictions: two dimensions, and a genuine split between the acts

Two things decide whether a conviction is an enumerated ground: **what kind of offense it was** and **how long ago**.

**Kind of offense.** For a **misdemeanor**, only certain categories count — securities, an investment-related business, fraud, false statements, or the wrongful taking of property. A misdemeanor outside those categories is not an enumerated ground however recent. For a **felony**, the category does not matter; any felony can qualify.

**How long ago.** Here the model acts genuinely differ, and study material often states one as though it were universal:

| | 1956 act §204(a)(2)(B) | 2002 act §412(d)(3) |
| --- | --- | --- |
| Felony | within the past 10 years | **any felony, no time limit** |
| Qualifying misdemeanor | within the past 10 years | within the previous 10 years |

**Safe ground under either act:** a **felony or a qualifying misdemeanor within the past 10 years** is an enumerated ground. Beyond 10 years the acts part company, and which answer is right depends on the version your state adopted. Be wary of any source asserting that qualifying *misdemeanors* have no time limit — neither model act says that, and it inverts the 2002 act's actual structure.

### Worked scenario: which convictions disqualify

An applicant in 2026 discloses three items: a **felony** conviction for aggravated assault in **2019**, a **misdemeanor** conviction for check fraud in **2021**, and a **misdemeanor** for driving under the influence in **2020**.

Take them separately. The 2019 felony is inside the 10-year window, so it is an enumerated ground under **either** act — the category of a felony never matters. The 2021 check-fraud misdemeanor is fraud-related and involves the wrongful taking of property, and it is inside the window, so it qualifies under either act too. The DUI is the most recent of the three and is **not** an enumerated ground at all: it is a misdemeanor unrelated to securities, investments, fraud, false statements, or property.

The trap is assuming recency decides. **The DUI is newer than both of the others and counts for nothing.** For a misdemeanor the nature of the offense has to clear the bar before the calendar is even consulted.

Now change one fact and watch the acts diverge: move the assault felony back to **2013**. Under the **1956 act** it falls outside the 10-year window and stops being an enumerated ground, though the Administrator may still weigh the conduct in the public-interest determination. Under the **2002 act** it remains a ground indefinitely. Nothing about the applicant changed — only which statute the state enacted.

## Due process

The Administrator may not enter a final adverse order without:

1. **Appropriate prior notice** to the applicant, registrant, employer, and any affected person;
2. **Opportunity for a hearing**, which the Administrator must grant **within 15 days of a written request**; and
3. **Written findings of fact and conclusions of law**.

Any person aggrieved by a final order may seek **judicial review** by filing a petition in the appropriate court, generally **within 60 days** of the order. **Filing the petition does not by itself stay the order** — a stay must be obtained from the court.

Review is on the **administrative record**. The court asks whether the findings are supported by substantial evidence and whether the Administrator stayed within the statute, not whether the judge would have decided the same way — which is exactly why the **written findings of fact and conclusions of law** matter so much. They are what gets reviewed.

### Summary (emergency) orders

The Administrator may issue an order **summarily** — postponing or suspending a registration pending final determination, or entering a cease-and-desist order — **without a prior hearing**, when the public interest requires immediate action. The Administrator must **promptly notify** the affected persons that the order has been entered, state the reasons, and inform them that a **hearing will be held within 15 days of a written request**. If no hearing is requested and none is ordered, the summary order **remains in effect until modified or vacated**.

### Why a summary order survives due process

Due process normally means notice and a hearing **before** the state takes something away. A summary order inverts that, and the justification is urgency: where money is being dissipated or investors solicited right now, a pre-deprivation hearing would guarantee the harm it exists to prevent. The trade is a **prompt post-deprivation hearing** — the order issues at once, notice goes out immediately, and the hearing follows within 15 days of a written request.

Two consequences get tested. A summary order is **not a finding of guilt**; it is provisional relief pending final determination. And it does not lapse on its own: if nobody requests a hearing it **stays in effect until modified or vacated**. Silence favors the order, not the respondent.

## The five outcomes — precise distinctions

| Outcome | Applies when | Key feature |
| --- | --- | --- |
| **Denial** | Applied for but not granted | Prospective — no registration ever existed |
| **Suspension** | Existing registration | Temporary; **must have a definite end date** |
| **Revocation** | Existing registration | Permanent termination of the registration |
| **Cancellation** | Registrant has **died, become mentally incompetent, ceased to exist, or cannot be located** | **Not punitive and not disciplinary** — it is a housekeeping action, so no hearing is required |
| **Withdrawal** | Registrant voluntarily files to withdraw | **Effective 30 days after filing** if no proceeding is pending; the Administrator **retains jurisdiction for 1 year** to revoke or suspend |

**Cancellation carries no stigma.** A question describing an agent who died, was declared incompetent, or simply cannot be found is testing cancellation, not revocation.

## Civil liability and rescission

A purchaser who bought a security sold in violation of the act may sue for **rescission** or, if the security has already been sold, for damages. The recovery formula:

**Consideration paid + interest at the state legal rate − any income received on the security + reasonable attorneys' fees and court costs**, upon **tender of the security** back to the seller.

Points the exam presses:

- **Lost profits are not recoverable.** The remedy restores the purchaser to the original position; it does not deliver what the investment might have earned.
- **Income received (dividends, interest) is subtracted**, because the purchaser already had the use of it.
- A purchaser who **no longer owns the security** sues for damages measured the same way, less the amount realized on the disposition.
- The same framework extends to a **client of an investment adviser** who was harmed by unlawful advice — recovery is the **advisory fees paid plus interest and costs, less any income received**, and, where the client acted on the advice, losses on the resulting transactions.

### Worked scenario: computing the rescission amount

On **March 1, 2023** a client pays **$30,000** for 1,000 shares in a transaction that violated the act. She collects **$600** of dividends in each of the next two years. She sues in **March 2025**. The state legal rate is **6%** simple, and the court awards **$2,500** in attorneys' fees and costs.

Run the formula in order:

- **Consideration paid:** $30,000
- **Plus interest** at 6% for two years: 30,000 × 0.06 × 2 = **$3,600**
- **Less income received** on the security: 600 + 600 = **$1,200**
- **Plus fees and costs:** **$2,500**

30,000 + 3,600 − 1,200 + 2,500 = **$34,900**, payable **on tender of the shares**.

Notice what never entered the arithmetic. The current market value of the shares is irrelevant, because she hands them back. So is anything the investment might have earned: **lost profits are not recoverable**.

**Variation — she already sold.** Having disposed of the shares she cannot tender them, so she sues for damages on the same measure less what she realized. If the sale brought $18,000: 30,000 + 3,600 − 1,200 − 18,000 + 2,500 = **$16,900**.

**Variation — unlawful advice rather than a sale.** A client who paid **$8,000** in fees over two years under an unlawful advisory contract, received **$2,000** of income by acting on the advice, and is awarded **$1,500** in costs recovers the consideration paid for the advice plus interest, less that income: 8,000 + 480 + 480 − 2,000 + 1,500 = **$8,460**.

### The rescission offer

A seller who realizes it has violated the act may make a written **offer of rescission** — repurchasing the security at the same formula amount plus interest — before suit is filed. If the buyer **does not accept in writing within 30 days** of receipt, the buyer **loses the right to sue** on that violation. Joint and several liability extends to **partners, officers, directors, employees who materially aided the sale, and broker-dealers or agents who participated**, subject to a defense that the person did not know and could not reasonably have known of the facts.

## Criminal penalties

**Willful violation** of the act, of a rule under it, or of an order of which the person had knowledge is a crime punishable by a fine of **up to $5,000, imprisonment of up to 3 years, or both, per violation** under the model act. Treat those as the **model act's figures, not a national standard** — each adopting state sets its own, and many are higher.

Two defenses to remember:

- **No knowledge of the rule or order = no criminal liability.** A person may still be subject to administrative and civil consequences.
- **"Willful" means intending the act, not intending to break the law.** Ignorance of the statute is not a defense; ignorance of a specific rule or order is.

Only the **courts** impose these penalties — the Administrator refers the case.

## Consent orders and settlements

Most enforcement matters end by agreement rather than hearing. In a **consent order** the respondent accepts a sanction — a suspension, a bar, restitution, a fine, undertakings such as retaining a compliance consultant — and the Administrator forgoes litigation. The characteristic formula is that the respondent **neither admits nor denies** the findings.

What that formula does and does not accomplish is the tested point.

- It **avoids an admission** that a private plaintiff could later use as an established fact.
- It does **not** make the matter private. A consent order is a public disciplinary event, disclosable on **Form U-4 and Form ADV** and carried on the CRD and IARD record.
- It does **not** neutralize the order as a **ground for future action**. An order of another state's Administrator is itself an enumerated ground, so a consent order in one state can support a proceeding in the next.
- Breaching the undertakings reopens the matter.

## How state and federal proceedings interact

NSMIA divided **registration** authority — federal covered advisers and covered securities belong to the SEC — but it expressly **preserved state anti-fraud jurisdiction**. A federal covered adviser that deceives a client in a state answers to that state's Administrator even though it never registered there.

- **Parallel proceedings are permitted.** The SEC, the state, an SRO, and a criminal prosecutor may all act on the same facts; separate sovereigns and remedial administrative sanctions mean double jeopardy does not bar them.
- **Each other's orders are grounds.** An SEC order, an SRO expulsion or suspension, or another state's order is an enumerated basis for state action, so one proceeding often begets several.
- **Regulators share.** Administrators cooperate through NASAA and exchange examination findings and investigative material routinely.

## Statute of limitations

- **Civil:** generally the **earlier of 3 years after the sale or contract for sale, or 2 years after discovery** of the violation. States vary — several use 2 years after discovery but not more than 5 years after the transaction.
- **Criminal:** generally **5 years** under the model act.

## Consent to service of process

Every application for registration, and every notice filing, must be accompanied by an irrevocable **consent to service of process** appointing the **Administrator as attorney to receive service** in any noncriminal proceeding arising out of the applicant's securities activities in that state. Service on the Administrator has the same force as personal service. It is filed **once, with the initial application** — **not annually**. Non-resident issuers, broker-dealers, advisers, agents, and representatives all file it, and so does any person who engages in conduct in the state that subjects them to the act even without registering.`,
  pitfalls: [
    "The Administrator can issue cease-and-desist orders but cannot issue an injunction, levy a criminal fine, or imprison — those require going to court.",
    "Cancellation is not discipline: it applies when a registrant dies, becomes incompetent, ceases to exist, or cannot be located, and requires no hearing or finding of wrongdoing.",
    "A withdrawal becomes effective 30 days after filing, but the Administrator keeps jurisdiction to revoke or suspend for one year afterward, so filing a withdrawal does not end an investigation.",
    "Rescission returns the price paid plus interest and attorneys' fees, MINUS income received, on tender of the security — lost profits or what the investment would have earned are never recoverable.",
    "A rescission offer must be rejected or ignored for 30 days to bar the buyer's suit; a buyer who fails to accept in writing within 30 days loses the right to sue on that violation.",
    "Criminal penalties under the model act are up to $5,000 and three years per violation, and a person who had no knowledge of the rule or order cannot be criminally liable — though administrative and civil exposure remains.",
    "A hearing must be granted within 15 days of a WRITTEN request; the Administrator is not required to hold a hearing that nobody asks for, and a summary order stays in effect until modified or vacated.",
    "A consent order in which the respondent neither admits nor denies the findings is still a public disciplinary event: it is reportable on Form U-4 and Form ADV and can itself be the enumerated ground for another state's proceeding.",
    "For a misdemeanor the nature of the offense decides before the calendar is consulted: only securities, investment-related, fraud, false-statement, or wrongful-taking offenses qualify, so a recent DUI counts for nothing. A felony qualifies whatever its category. On timing the model acts split — the 1956 act applies a 10-year window to both, the 2002 act keeps any felony available indefinitely while holding misdemeanors to 10 years. A conviction within the past 10 years is a ground under either.",
  ],
  keyTerms: [
    {
      term: 'Administrator',
      definition:
        "The state official or agency responsible for administering the securities act, with rulemaking, investigative, subpoena, order, and referral powers but no authority to imprison or enjoin.",
    },
    {
      term: 'Cease-and-desist order',
      definition:
        "An administrative order directing a person to stop a violation, issuable with or without a prior hearing, and enforceable in court if ignored.",
    },
    {
      term: 'Summary order',
      definition:
        "An order entered without a prior hearing when the public interest requires immediate action, followed by prompt notice and a hearing within 15 days of written request.",
    },
    {
      term: 'Cancellation',
      definition:
        "A non-punitive administrative termination of a registration when the registrant has died, become mentally incompetent, ceased to exist, or cannot be located.",
    },
    {
      term: 'Withdrawal',
      definition:
        "A voluntary termination of registration effective 30 days after filing absent a pending proceeding, with the Administrator retaining jurisdiction to institute revocation or suspension for one year.",
    },
    {
      term: 'Rescission',
      definition:
        "The civil remedy restoring the purchaser to the pre-transaction position: consideration paid plus interest at the legal rate, less income received, plus reasonable attorneys' fees and costs, upon tender of the security.",
    },
    {
      term: 'Offer of rescission',
      definition:
        "A written offer by a violating seller to repurchase the security at the statutory amount, which bars the purchaser's suit if not accepted in writing within 30 days of receipt.",
    },
    {
      term: 'Consent to service of process',
      definition:
        "An irrevocable appointment of the Administrator as agent to receive service in noncriminal proceedings, filed once with the initial application or notice filing and not renewed annually.",
    },
    {
      term: 'Consent order',
      definition:
        "A negotiated resolution in which the respondent accepts a sanction while neither admitting nor denying the findings; it avoids an admission usable in private litigation but remains a public, reportable disciplinary event and a ground for action by other regulators.",
    },
    {
      term: 'Willful violation',
      definition:
        "Intentionally committing the act constituting the violation, whether or not the person intended to break the law; it supports criminal prosecution, though lack of knowledge of a specific rule or order is a defense.",
    },
  ],
  confusions: [
    {
      dont: 'Revocation, a punitive permanent termination requiring notice and an opportunity for hearing',
      with: 'Cancellation, a ministerial action for a registrant who has died, become incompetent, ceased to exist, or vanished',
    },
    {
      dont: "The Administrator's power to issue a cease-and-desist order",
      with: "A court's power to issue an injunction, impose criminal fines, or order imprisonment",
    },
    {
      dont: 'The 15 days within which a hearing must be granted after written request',
      with: 'The 30 days for a withdrawal to become effective and for a rescission offer to be accepted',
    },
    {
      dont: 'Rescission, which returns principal plus interest less income received',
      with: 'Damages for lost profits, which the act does not provide',
    },
    {
      dont: 'Suspension, which must have a fixed end date',
      with: 'Revocation, which is permanent until the person successfully reapplies',
    },
  ],
};
