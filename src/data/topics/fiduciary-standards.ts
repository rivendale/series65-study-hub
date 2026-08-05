import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'fiduciary-standards',
  title: 'Fiduciary Duty and Standards of Conduct',
  weight: '~4%',
  order: 32,
  summary:
    "An investment adviser is a fiduciary. That duty is not written out as a checklist in the statute — it comes from Advisers Act §206 as interpreted by the Supreme Court and the SEC, and it comprises a duty of loyalty and a duty of care that run for the entire relationship. This topic covers both duties, the conflicts that must be disclosed, and how the adviser standard differs from suitability, Reg BI, and ERISA.",
  body: `## Where the Duty Comes From

**Section 206 of the Investment Advisers Act of 1940** makes it unlawful for an adviser to employ any device, scheme, or artifice to defraud a client, or to engage in any transaction, practice, or course of business that operates as a fraud or deceit. The statute never uses the word *fiduciary*. The duty was read into it.

In **SEC v. Capital Gains Research Bureau (1963)**, the Supreme Court held that the Advisers Act is **remedial legislation** aimed at eliminating conflicts of interest, and that it reflects a congressional intent to establish **federal fiduciary standards**. The case involved **scalping** — an adviser buying a security, recommending it, and selling into the rise it caused. The Court held that the SEC could obtain an injunction **without proving intent to injure or actual client loss**, because the Act reaches the **failure to disclose a material conflict** itself.

Two consequences the exam tests:

1. **Nondisclosure of a material conflict is itself the violation.** The adviser need not have profited or the client lost.
2. **§206 liability can rest on negligence.** Under **Rule 10b-5** of the '34 Act, a private fraud claim requires **scienter** — intent or recklessness. Under §206, at least for SEC enforcement of certain subsections, **negligent conduct may suffice**. This is the standard comparison question.

The SEC restated the duty in its **2019 Interpretation Regarding Standard of Conduct for Investment Advisers**, which is the framework most current exam questions follow.

## The Duty of Loyalty

The adviser must **not subordinate the client's interests to its own**. Operationally:

- **Act in the best interest of the client** at all times, and never place the adviser's interest ahead of the client's.
- **Eliminate or make full and fair disclosure of all material conflicts** so that the client can give **informed consent**. Disclosure must be specific enough that a client actually understands the conflict — the SEC has said that describing a conflict with the word **"may"** when the conflict in fact **exists** is inadequate.
- **Do not favor one client over another** without disclosure. Allocation of investment opportunities, trade sequencing, and block-trade allocations must follow disclosed, consistently applied policies.

Disclosure is not a magic wand. Where a conflict is so severe that no reasonable client could give informed consent, the adviser must **eliminate** it or **decline the business**.

## The Duty of Care

The duty of care has three tested components.

### 1. Reasonable Basis and Suitability

The adviser must have a **reasonable belief that the advice is in the best interest of the specific client** in light of that client's objectives, risk tolerance, time horizon, tax situation, and constraints. That requires a **reasonable inquiry** into the client's circumstances, and a **reasonable investigation** of the investment itself — the adviser cannot outsource due diligence to a sales brochure.

### 2. Best Execution

When the adviser selects broker-dealers, it must seek **best execution** — the most favorable **total** terms reasonably available. Best execution is **not simply the lowest commission**; it accounts for execution quality, speed, likelihood of settlement, and research value. The adviser must **periodically and systematically evaluate** the execution it receives.

### 3. Advice and Monitoring Over the Relationship

The duty of care includes **monitoring** at a frequency appropriate to the scope of the relationship. An adviser to a discretionary ongoing account owes more continuous monitoring than one engaged for a one-time plan. **The duty runs for the entire relationship, not just at the moment of a recommendation.**

## The Duty Cannot Be Waived

The fiduciary duty **cannot be contracted away**. Advisers Act §215 voids any provision that purports to waive compliance. Specifically:

- A **hedge clause** disclaiming liability for negligence, or purporting to limit liability generally, is **misleading** and impermissible when it would lead a retail client to believe they have waived non-waivable rights.
- A contract **may** define the **scope** of the relationship — an adviser can agree to advise only on a specified account and not on held-away assets. Narrowing the scope is legitimate; waiving the standard within that scope is not.

## Conflicts Requiring Disclosure

| Conflict | Why it matters |
| --- | --- |
| **Proprietary products** | Recommending the adviser's own funds generates additional revenue |
| **Principal trading** | Selling from the adviser's own inventory to the client requires **written disclosure and client consent for each transaction** before completion of that trade |
| **Agency cross transactions** | The adviser acts for both sides and may collect compensation from both |
| **Affiliate compensation** | Commissions or fees to a related broker-dealer, insurance agency, or fund |
| **Soft dollars** | Research paid with client brokerage; benefits the adviser at client expense unless within the safe harbor |
| **Referral compensation** | Payment to or from promoters for client introductions |
| **Differential fees** | Charging clients different rates for materially the same service, or fees that vary by product |
| **Outside business activities** | Other employment, board seats, or ownership interests that compete for time or create incentives |
| **Custody and affiliations** | Any arrangement where the adviser or an affiliate touches client assets |

Every one of these belongs in **Form ADV Part 2A** and, for individual personnel, **Part 2B**.

## Comparing the Standards

| Standard | Applies to | Trigger | Core obligation |
| --- | --- | --- | --- |
| **Fiduciary duty** (Advisers Act §206) | Investment advisers and IARs | The **entire relationship** | Loyalty and care; eliminate or fully disclose conflicts for informed consent; ongoing monitoring |
| **Suitability** (traditional FINRA) | Broker-dealers, historically | A **recommendation** | The recommendation must be suitable given the customer profile |
| **Reg BI best interest** | Broker-dealers and their reps | A **recommendation** to a **retail customer** | Act in the retail customer's best interest; disclosure, care, conflict, and compliance obligations; consider reasonably available alternatives and cost |
| **ERISA prudent expert** | Fiduciaries of qualified retirement plans | Plan management | Act with the care, skill, prudence, and diligence of a prudent person **familiar with such matters**; exclusive benefit rule; diversification |

The **ERISA standard is often described as the highest**, because the prudent expert rule measures the fiduciary against an expert rather than a merely prudent layperson, and **ERISA prohibits certain transactions outright** rather than permitting them with disclosure.

Order of increasing stringency as commonly framed: **suitability → Reg BI best interest → adviser fiduciary duty → ERISA prudent expert**.

## State-Level Standards

NASAA has adopted model rules on **unethical business practices** for both investment advisers and broker-dealer agents. These reach conduct that may not be outright fraud: **churning**, **unauthorized transactions**, **borrowing from or lending to clients**, **guaranteeing against loss**, **sharing in profits or losses** without written authorization and proportional capital contribution, **commingling** client and firm funds, **misrepresenting qualifications**, **failing to disclose conflicts**, and **exercising discretion without written authority**.

Two often-missed details: an adviser generally may exercise **discretion orally for the first 10 business days** after the initial discretionary transaction while awaiting written authorization — a broker-dealer agent has **no such grace period** and needs written authority first (aside from **time and price** discretion, which is good for the day only). And **third-party trading authorization** must be in writing regardless of who holds it.`,
  pitfalls: [
    "The fiduciary duty attaches to the entire advisory relationship, not to individual recommendations. Reg BI is the one that attaches to a recommendation.",
    "Disclosure alone does not cure every conflict. Where no reasonable client could give informed consent, the adviser must eliminate the conflict or decline the engagement.",
    "Saying a conflict MAY exist when it actually does exist is inadequate disclosure under the SEC interpretation.",
    "Best execution does not mean the lowest commission. It means the most favorable total terms, evaluated periodically and systematically.",
    "Under Advisers Act §206 negligence can support liability, whereas a Rule 10b-5 fraud claim requires scienter. Do not apply the scienter requirement to §206.",
    "A hedge clause purporting to waive the fiduciary standard is void under §215. Narrowing the scope of the engagement is permissible; waiving the duty within that scope is not.",
    "Principal trades require written disclosure and client consent before completion of each individual transaction — a one-time blanket consent in the advisory agreement is not enough for retail clients.",
    "An adviser has roughly 10 business days of oral discretionary authority pending written authorization; a broker-dealer agent has no such grace period.",
  ],
  keyTerms: [
    {
      term: 'Duty of loyalty',
      definition:
        "The fiduciary obligation not to subordinate the client's interests to the adviser's, requiring elimination or full and fair disclosure of material conflicts sufficient for informed consent.",
    },
    {
      term: 'Duty of care',
      definition:
        "The fiduciary obligation to provide advice with a reasonable basis and in the client's best interest, to seek best execution, and to monitor the advice over the relationship.",
    },
    {
      term: 'SEC v. Capital Gains Research Bureau',
      definition:
        'The 1963 Supreme Court decision holding the Advisers Act to be remedial legislation imposing federal fiduciary standards, and that failure to disclose a material conflict is actionable without proof of intent to injure or client loss.',
    },
    {
      term: 'Scalping',
      definition:
        'Buying a security, recommending it to clients, and selling into the resulting price rise without disclosing the position. The conduct at issue in Capital Gains.',
    },
    {
      term: 'Scienter',
      definition:
        'Intent to deceive or reckless disregard for the truth, required for a Rule 10b-5 fraud claim but not necessarily for civil liability under Advisers Act §206.',
    },
    {
      term: 'Hedge clause',
      definition:
        "A contract provision purporting to limit an adviser's liability. It is misleading and impermissible when it would lead a client to believe non-waivable rights have been given up.",
    },
    {
      term: 'Best execution',
      definition:
        'The obligation to seek the most favorable total terms of execution reasonably available under the circumstances, considering more than commission rate alone.',
    },
    {
      term: 'Prudent expert rule',
      definition:
        'The ERISA fiduciary standard requiring the care, skill, prudence, and diligence of a prudent person familiar with such matters, together with diversification and the exclusive benefit rule.',
    },
  ],
  confusions: [
    {
      dont: 'Advisers Act §206 — civil liability may rest on negligent conduct',
      with: 'Rule 10b-5 under the 1934 Act — requires scienter, meaning intent or recklessness',
    },
    {
      dont: 'Fiduciary duty — spans the whole relationship and includes ongoing monitoring',
      with: 'Reg BI best-interest obligation — triggered by a specific recommendation to a retail customer',
    },
    {
      dont: 'Eliminating a conflict — required when no reasonable client could consent',
      with: 'Disclosing a conflict — sufficient only when the disclosure is full, fair, and specific enough for informed consent',
    },
    {
      dont: 'Narrowing the scope of an engagement by contract — permitted',
      with: 'Waiving the fiduciary standard by contract — void under §215',
    },
    {
      dont: 'Best execution — most favorable total terms available',
      with: 'Lowest commission — only one input into best execution, and not decisive',
    },
  ],
};
