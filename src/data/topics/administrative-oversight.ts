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

## Grounds for denial, suspension, or revocation

An adverse action must be **in the public interest** AND supported by at least one enumerated ground:

- Filing an application that was **incomplete, false, or misleading in any material respect**
- **Willful violation** of the state act, a rule or order under it, or federal securities, commodities, banking, or insurance law
- **Conviction of a felony within the past 10 years**, or conviction at any time of a **misdemeanor involving securities, an investment-related business, fraud, false statements, or the wrongful taking of property** — there is **no 10-year limit on securities-related misdemeanors** in the classic formulation, though many states apply the 10-year lookback to both; know the tested rule: **any felony within 10 years, or a securities-related misdemeanor**
- Being **permanently or temporarily enjoined by a court** from engaging in the securities business
- Being the subject of an **order of another state Administrator, the SEC, or a federal agency**, or **expulsion or suspension by an SRO** such as FINRA
- Engaging in **dishonest or unethical practices** in the securities, commodities, banking, or insurance business
- **Insolvency** — either inability to pay debts as they come due or liabilities exceeding assets
- **Lack of qualification** based on training, experience, or knowledge (see the limits below)
- Failure to pay the **filing fee** — this results in an order **denying, suspending, or revoking** the registration, which is **vacated when the fee is paid**
- Being **not qualified** or having failed to comply with the state's **examination** requirement

### Limits on the qualification ground

The Administrator **may not** base a denial solely on **lack of experience** if training and knowledge are adequate, and must consider that an **agent or representative** is not required to have the same qualifications as a **principal or supervisor**. The Administrator **may** require an applicant who has not been registered in any state within the prior two years to pass an examination, including one written or oral.

## Due process

The Administrator may not enter a final adverse order without:

1. **Appropriate prior notice** to the applicant, registrant, employer, and any affected person;
2. **Opportunity for a hearing**, which the Administrator must grant **within 15 days of a written request**; and
3. **Written findings of fact and conclusions of law**.

Any person aggrieved by a final order may seek **judicial review** by filing a petition in the appropriate court, generally **within 60 days** of the order. **Filing the petition does not by itself stay the order** — a stay must be obtained from the court.

### Summary (emergency) orders

The Administrator may issue an order **summarily** — postponing or suspending a registration pending final determination, or entering a cease-and-desist order — **without a prior hearing**, when the public interest requires immediate action. The Administrator must **promptly notify** the affected persons that the order has been entered, state the reasons, and inform them that a **hearing will be held within 15 days of a written request**. If no hearing is requested and none is ordered, the summary order **remains in effect until modified or vacated**.

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

### The rescission offer

A seller who realizes it has violated the act may make a written **offer of rescission** — repurchasing the security at the same formula amount plus interest — before suit is filed. If the buyer **does not accept in writing within 30 days** of receipt, the buyer **loses the right to sue** on that violation. Joint and several liability extends to **partners, officers, directors, employees who materially aided the sale, and broker-dealers or agents who participated**, subject to a defense that the person did not know and could not reasonably have known of the facts.

## Criminal penalties

**Willful violation** of the act, of a rule under it, or of an order of which the person had knowledge is a crime punishable by a fine of **up to $5,000, imprisonment of up to 3 years, or both, per violation** under the model act. Many states adopt higher amounts; the exam uses the model figures.

Two defenses to remember:

- **No knowledge of the rule or order = no criminal liability.** A person may still be subject to administrative and civil consequences.
- **"Willful" means intending the act, not intending to break the law.** Ignorance of the statute is not a defense; ignorance of a specific rule or order is.

Only the **courts** impose these penalties — the Administrator refers the case.

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
