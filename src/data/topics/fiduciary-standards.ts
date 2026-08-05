import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'fiduciary-standards',
  title: 'Fiduciary Duty and Standards of Conduct',
  weight: '~4%',
  order: 32,
  summary:
    "An investment adviser is a fiduciary. That duty is not written out as a checklist in the statute — it comes from Advisers Act §206 as interpreted by the Supreme Court and the SEC, and it comprises a duty of loyalty and a duty of care that run for the entire relationship. This topic covers both duties, the conflicts that must be disclosed, and how the adviser standard differs from suitability, Reg BI, and ERISA.",
  body: `## Why an Adviser Is Held to This Standard

Start with what an adviser sells. A broker historically sold a **product** in a **discrete transaction**, and the customer could judge product and price on the spot. An adviser sells what the client cannot inspect: **judgment, exercised continuously, over the client's own money.** The client hires an adviser precisely because the client cannot evaluate the advice, and cannot tell good advice from bad until a loss appears — often not even then. The law attaches fiduciary duties wherever reliance is unavoidable and verification impractical.

Two consequences follow. **Compensation shapes the conflict:** an adviser paid for advice has conflicts about *what it recommends*; a broker paid per trade had conflicts about *whether a trade happens*. Hence broker rules that police the recommendation and adviser rules that police the relationship. And **the "solely incidental" line:** a broker-dealer whose advice is solely incidental to brokerage, with **no special compensation** for it, is not an investment adviser — but once advice stops being incidental, the firm is one, and the standard follows it across.

## Where the Duty Comes From

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

### What Makes Disclosure Full and Fair

The 2019 interpretation is specific about the gap between disclosure that is **complete** and disclosure that is **effective**. Four failure modes recur:

- **Hedged language for a certain conflict.** "May receive 12b-1 fees," when the firm receives them on nearly every recommended fund, tells the client a risk exists — not that it has already materialized.
- **Burying it.** A conflict on page 34 amid generic risk language is present and invisible. It must reach the client in time to act, **before** commitment.
- **Fact without magnitude.** "Receives compensation from third parties" omits the number a client would use: that the firm earns three times more on proprietary funds.
- **Assuming sophistication.** Informed consent is measured against **the actual client**; what an institutional consultant parses instantly can fail a retail client.

**Consent may be implied** — a client who receives adequate disclosure and proceeds has consented — but implied consent to a conflict never understood is not consent, and the burden of making it comprehensible is the **adviser's**. Where no reasonable client could consent, the adviser must **eliminate the conflict or decline the business**; **scalping** is the paradigm, since nothing short of "I am selling into this recommendation" would cure it. The trap is the reflexive answer that disclosure fixes everything. It usually does. Not always.

## The Duty of Care

The duty of care has three tested components.

### 1. Reasonable Basis and Suitability

The adviser must have a **reasonable belief that the advice is in the best interest of the specific client** in light of that client's objectives, risk tolerance, time horizon, tax situation, and constraints. That requires a **reasonable inquiry** into the client's circumstances, and a **reasonable investigation** of the investment itself — the adviser cannot outsource due diligence to a sales brochure.

### 2. Best Execution

When the adviser selects broker-dealers, it must seek **best execution** — the most favorable **total** terms reasonably available. Best execution is **not simply the lowest commission**; it accounts for execution quality, speed, likelihood of settlement, and research value. The adviser must **periodically and systematically evaluate** the execution it receives.

Why this belongs to **care**: the adviser spends the **client's** money on commissions, and the client cannot observe execution quality — a filled trade reveals nothing about the fill available elsewhere. So the obligation is procedural: have a process, apply it, review it. Routing everything to an affiliate without testing whether it is competitive breaches the duty; so does taking the cheapest broker whose fills are consistently late.

### 3. Advice and Monitoring Over the Relationship

The duty of care includes **monitoring** at a frequency appropriate to the scope of the relationship. An adviser to a discretionary ongoing account owes more continuous monitoring than one engaged for a one-time plan. **The duty runs for the entire relationship, not just at the moment of a recommendation.**

**Scope shapes the duty, and conduct can override the paperwork.** A single plan for a flat fee carries no perpetual monitoring if the engagement says so and the marketing does not imply otherwise; an ongoing asset-based fee does, because that is what the fee purports to buy.

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

## Principal Trades and Agency Crosses: Two Different Consents

These look alike and have **different consent mechanics**. A **principal transaction** is the adviser or an affiliated dealer trading **from its own account** with the client — selling the client a bond out of firm inventory. The adviser is its own client's counterparty, its interest in the price directly opposed, and the conflict is priced into **each individual trade**; consent "to principal transactions generally" would be consent to nothing evaluable. An **agency cross** is the adviser acting as **broker for both sides**, paid by each — not a party, but an intermediary with two masters. That conflict is **structural rather than trade-specific**, which is why a revocable blanket consent, backed by per-trade confirmations and an annual accounting, suffices.

| | Principal transaction | Agency cross |
| --- | --- | --- |
| Adviser's role | Counterparty, own account | Broker for both sides |
| Consent | **Trade by trade, before completion** | **Advance blanket, revocable** |
| Per-trade paperwork | Written disclosure of capacity | Confirmation of capacity and remuneration |
| Annual requirement | None | Count of transactions and total commissions |
| Hard limit | — | May not have recommended it to **both** sides |

## Soft Dollars and the §28(e) Safe Harbor

Soft dollars are a loyalty problem: when an adviser directs client trades to a broker that supplies it research, **the client pays and the adviser benefits**. Congress answered with a safe harbor rather than a ban. **Section 28(e) of the Securities Exchange Act of 1934** says an adviser does not breach its duty solely by paying **more than the lowest available commission**, if it determines **in good faith** that the amount is reasonable relative to the **brokerage and research services** received, judged against the particular trade *or* its **overall responsibilities** to all clients.

Two boundaries define the harbor: the service must **assist investment decision-making** and **benefit clients**, not relieve the adviser of overhead. Research, market data, analytics, execution and clearing are inside; **rent, salaries, hardware, marketing, travel and entertainment are outside**, because paying overhead with client commissions bills the client twice. **Mixed-use** items must be reasonably allocated, the non-research share paid in hard dollars, and the arrangement disclosed in **Part 2A**. The harbor's job is narrow: it defeats the claim that **paying up was itself a breach**, and nothing more.

## Code of Ethics, Access Persons, and Personal Trading

The rationale first: an employee who knows a large client order is coming can **front-run** it, and one who wants a scarce private-placement allocation is tempted to take it ahead of clients. The machinery exists to **detect personal trading that shadows client activity**.

**Rule 204A-1** requires every SEC-registered adviser to adopt a **written code of ethics**, and the NASAA model rule imposes a parallel obligation on state-registered advisers. The code must set a **standard of business conduct** reflecting the fiduciary duty, require compliance with the securities laws, require **access persons** to report **personal holdings and transactions**, require **pre-approval of personal investments in IPOs and limited offerings**, require prompt **internal reporting of violations**, and be delivered to every supervised person with a **written acknowledgment**.

An **access person** has access to **nonpublic information about client transactions or holdings**, or participates in making recommendations; where advice is the firm's primary business, **all directors, officers and partners are presumed access persons.** Reports run **initial holdings within 10 days**, **annual holdings** thereafter, and **quarterly transactions within 30 days** of quarter end — excluding accounts the person has **no direct or indirect influence or control** over, automatic investment plans, and direct government obligations, money market funds, bank CDs, and open-end funds the adviser does not advise.

## Comparing the Standards

| Standard | Applies to | Trigger | Core obligation |
| --- | --- | --- | --- |
| **Fiduciary duty** (Advisers Act §206) | Investment advisers and IARs | The **entire relationship** | Loyalty and care; eliminate or fully disclose conflicts for informed consent; ongoing monitoring |
| **Suitability** (traditional FINRA) | Broker-dealers, historically | A **recommendation** | The recommendation must be suitable given the customer profile |
| **Reg BI best interest** | Broker-dealers and their reps | A **recommendation** to a **retail customer** | Act in the retail customer's best interest; disclosure, care, conflict, and compliance obligations; consider reasonably available alternatives and cost |
| **ERISA prudent expert** | Fiduciaries of qualified retirement plans | Plan management | Act with the care, skill, prudence, and diligence of a prudent person **familiar with such matters**; exclusive benefit rule; diversification |

The **ERISA standard is often described as the highest**, because the prudent expert rule measures the fiduciary against an expert rather than a merely prudent layperson, and **ERISA prohibits certain transactions outright** rather than permitting them with disclosure.

Order of increasing stringency as commonly framed: **suitability → Reg BI best interest → adviser fiduciary duty → ERISA prudent expert**.

The distinction people blur is **best interest** versus **fiduciary**. Reg BI does require a broker to act in the retail customer's best interest, weigh **cost**, and consider **reasonably available alternatives** — materially more than bare suitability, which asked only whether a recommendation *fit* the profile. But Reg BI attaches to a **recommendation**, expires with it, and lets conflicts be **disclosed and mitigated**; the adviser's duty attaches to the **relationship**, persists, and sometimes demands **elimination**.

### Which Hat: The Dual Registrant

For someone registered both as an **IAR** and as a **broker-dealer agent**, the obligation follows **the capacity in which the person acts on that account**, not the business card: **full fiduciary duty** on an advisory account paying an asset-based fee, **Reg BI** on a brokerage account at each recommendation to a retail customer. And the **account-type recommendation is itself a recommendation** — steering a client into an advisory account, or into an IRA rollover the adviser will then manage, puts the adviser's own compensation directly at stake. **Form CRS** exists so the client can tell which hat is on.

## Worked Scenarios

### The Brochure That Said "May"

Meridian Advisory Group manages $180 million for 300 retail clients. For eleven of the fourteen funds on its recommended list it picks Class A shares, which pay Meridian's affiliated broker-dealer a 0.25% 12b-1 fee; institutional shares of the same funds, with no 12b-1 fee, are open to these clients on the same platform at the same minimums. Meridian's Part 2A says the affiliate "may receive 12b-1 fees in connection with certain mutual fund investments, which presents a conflict of interest."

Nothing there is false. But **"may receive"** casts as a contingency what happens on most of the list, and the disclosure never says the **identical fund is available to this client in a cheaper class** — the one fact a client would use to object. Complete, and still inadequate: no client could give **informed consent** on it. Note what the violation does not require: **every fund may have been perfectly suitable**, and it is still a §206 breach. Change one fact and it flips — had Meridian said it **does** receive these fees, quantified them, and noted the cheaper classes while explaining that the platform waives transaction charges on Class A so small accounts net out ahead, the conflict would not have vanished. It would have become **consentable**.

### The Commission That Was Not the Cheapest

Corbin Asset Management routes most equity trades to Halberd Securities at 3.2 cents a share when two other approved brokers would fill at 1.1 cents. Halberd supplies a research platform Corbin uses across all client accounts. A client discovers the gap and complains that Corbin failed to obtain best execution.

The client's premise is wrong, and knowing why is the point: **best execution is not the lowest commission**, and §28(e) protects paying up for research. What decides the case is whether Corbin made a **good-faith determination** that 3.2 cents was reasonable for what Halberd provides, whether the research **assists investment decision-making** and **benefits clients** generally, whether Corbin **periodically and systematically reviews** Halberd's fills and spreads, and whether the arrangement is **disclosed in Part 2A**. Move the facts slightly and it comes out the other way: if Halberd instead supplies Corbin's portfolio accounting system, an office rent contribution and golf tickets, none of that is in the harbor, and Corbin is paying triple the going rate in **client money** for **its own expenses** — a loyalty breach, with no §28(e) defense however sincere the good faith.

### The Plan That Went Stale

Ana Reyes, an IAR, is engaged for a one-time retirement plan at a flat fee of $2,500. The engagement letter describes the deliverable and states that the firm will not monitor the portfolio or update the plan. She delivers in March; in November the client is laid off and calls, angry that she never revisited the allocation.

Ana is fine, and the reason is scope: the duty runs for the **duration and scope the parties actually agreed to**. Contrast an adviser charging **1% annually for ongoing discretionary management**, where the fee itself buys a continuing service and "the client never asked" is no defense. Two ways Ana loses. Had her marketing promised an "ongoing relationship" while the letter stayed silent, **conduct and representations** set the scope, not the fine print. And had the letter added that she "shall not be liable for any losses arising from the recommendations herein," that is a **hedge clause**, void under §215 insofar as it leads a retail client to believe non-waivable rights were surrendered.

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
    "Principal trades require written disclosure and client consent before completion of each individual transaction — a one-time blanket consent in the advisory agreement is not enough for retail clients. An agency cross is the opposite: a revocable blanket consent given in advance is the mechanism.",
    "An adviser has roughly 10 business days of oral discretionary authority pending written authorization; a broker-dealer agent has no such grace period.",
    "The §28(e) safe harbor only defeats the claim that paying more than the lowest commission was itself a breach. It does not protect misallocated mixed-use items or research that is really the adviser's overhead.",
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
      term: 'Access person',
      definition:
        "A supervised person with access to nonpublic information about client transactions or holdings, or who participates in making securities recommendations, subject to the personal trading reports and pre-approval requirements of the code of ethics.",
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
    {
      dont: 'Principal transaction consent — required trade by trade, before completion',
      with: 'Agency cross consent — a blanket advance authorization, revocable at any time',
    },
  ],
};
