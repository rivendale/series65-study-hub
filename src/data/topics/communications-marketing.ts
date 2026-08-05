import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'communications-marketing',
  title: 'Communications, Advertising, and the Marketing Rule',
  weight: '~3%',
  order: 38,
  summary:
    "The SEC Marketing Rule replaced the old advertising and cash-solicitation rules effective November 4, 2022: testimonials and endorsements are now permitted with disclosure, written agreements, and oversight, while performance advertising is governed by a detailed set of conditions built around net-of-fee presentation.",
  body: `## The rule that replaced two old ones

**Rule 206(4)-1 under the Investment Advisers Act — the Marketing Rule** — took effect with a **compliance date of November 4, 2022**. It consolidated and replaced:

- the former **advertising rule**, which flatly banned **testimonials**, and
- the former **cash solicitation rule** (206(4)-3), which governed paid referrals.

The single most important update for a candidate studying older material: **testimonials and endorsements are no longer prohibited.** They are permitted, subject to conditions. An answer choice asserting a blanket ban on client testimonials is now **wrong**.

### What the rule was actually fixing

The advertising rule it replaced was adopted in **1961**, when an advertisement meant print, radio, or a mailed circular. Its method was prophylactic: rather than ask whether a particular testimonial misled anyone, it banned testimonials outright, on the theory that a happy client is a selected client and selection cannot be policed. That works until advertising moves to platforms built on reviews, ratings, and shared experience, at which point a blanket ban stops protecting investors and simply pushes the practice into places nobody supervises.

The cash solicitation rule had the opposite defect. It reached **cash** payments for **client referrals** and little else, so a firm could pay a promoter in software licenses, conference sponsorships, or directed brokerage and fall outside it. Two rules, written decades apart, imposed inconsistent duties on what was economically the same activity: paying someone to say good things about you.

The Marketing Rule collapses both into one framework and swaps bright-line prohibitions for **conditions plus disclosure**. Testimonials and endorsements become permissible because the investor is told who is speaking, whether they are paid, and what conflict that creates — and because the adviser must supervise the arrangement rather than merely stay clear of it.

## What counts as an advertisement

The rule uses a **two-prong definition**.

**Prong 1 — traditional advertising.** Any direct or indirect communication an adviser makes to **more than one person**, or to one person if it includes **hypothetical performance**, that offers the adviser's advisory services to prospective clients or investors, or offers new services to existing clients.

Excluded from prong 1: extemporaneous **live oral** communications, most **regulatory filings**, information required by statute, and one-on-one communications that contain no hypothetical performance.

**Prong 2 — compensated testimonials and endorsements.** Any **testimonial** (by a current client or investor) or **endorsement** (by anyone who is not a current client or investor) for which the adviser provides **compensation, directly or indirectly, cash or non-cash**. Non-cash compensation counts: free software, event tickets, directed brokerage, or reduced fees.

Prong 2 has **no "more than one person" requirement** — a single paid referral is covered.

### Worked scenario: is it an advertisement?

Three communications from the same firm in the same week.

**A live seminar.** The founder speaks extemporaneously to sixty prospects about the firm's philosophy, with no deck and no performance figures. **Not** a prong-1 advertisement: extemporaneous live oral communications are excluded. Record that talk and post it, though, and the recording is no longer extemporaneous live oral — it becomes an advertisement, and every condition attaches to it.

**A one-to-one email.** A prospect receives a personalized email describing the firm's services. Not an advertisement — prong 1 requires more than one recipient. Now add a table projecting what a $500,000 account might grow to under the strategy. That is **hypothetical performance**, and hypothetical performance drags a **single-recipient** communication inside the definition. The one-on-one exclusion evaporates.

**A CPA who refers clients.** The firm sends the accountant roughly $250 a year in dinners and event tickets for steering clients its way. Non-cash compensation counts, and **prong 2 has no more-than-one-person requirement**, so each referral is an advertisement. Because the value is under the **$1,000** de minimis, no written promoter agreement is required — but the **disclosure of compensation and conflicts, and the adviser's oversight duty, apply regardless of amount**. Candidates routinely read de minimis as an exemption from the whole rule. It is an exemption from one condition.

## The seven general prohibitions

An advertisement may not:

1. Include an **untrue statement of a material fact**, or omit a material fact necessary to make the statement not misleading.
2. Include a **material statement of fact the adviser cannot substantiate** upon SEC demand. The SEC expects a **contemporaneous record** supporting the claim; failure to produce one raises an inference the claim was unsubstantiated.
3. Include information that would **reasonably likely cause an untrue or misleading implication or inference** about a material fact.
4. Discuss **potential benefits without fair and balanced treatment of associated material risks or limitations**.
5. Reference **specific investment advice** in a manner that is not **fair and balanced**.
6. Include or exclude **performance results, or present performance time periods, in a manner that is not fair and balanced**.
7. Be **otherwise materially misleading**.

Notice how much of the rule turns on the phrase **fair and balanced**. It replaced the old rule's rigid prohibitions with a principles-based standard — which means the exam tests judgment, not just lists.

## Testimonials and endorsements — the conditions

### Required disclosures, clear and prominent

At the time the testimonial or endorsement is disseminated, the adviser must disclose:

- Whether the person giving it is a **client or investor** (or **not** one);
- Whether the person is **compensated**, cash or non-cash; and
- A brief statement of **material conflicts of interest** arising from the relationship or compensation.

"Clear and prominent" means **at least as prominent as the testimonial itself** — in the same communication, not buried in a footnote or behind a link, for oral testimonials delivered orally.

Additional disclosure (which may be provided at the same time or separately, and need not be by the adviser itself) includes the **material terms of the compensation arrangement** and a description of **all material conflicts**.

### Oversight and written agreement

- The adviser must have a **reasonable basis for believing** the testimonial or endorsement complies with the rule — this is an ongoing **oversight** obligation, not a one-time check.
- The adviser must have a **written agreement** with any compensated promoter describing the scope of activities and the compensation — **unless the compensation is de minimis**, meaning **$1,000 or less (or the equivalent in non-cash) during the preceding twelve months**.

### Disqualification

An **ineligible person** — one subject to a disqualifying SEC action or certain criminal or regulatory events — may not be compensated for a testimonial or endorsement, unless a partial exemption applies (for example, a person already covered by comparable broker-dealer or SEC-order regimes).

### Exemptions from the agreement and disclosure conditions

Affiliated personnel whose affiliation is **readily apparent or disclosed** are exempt from the written-agreement requirement, and certain **registered broker-dealers** are partially exempt where their own rules provide comparable protection.

### Where the adviser's responsibility starts and stops

The oversight condition is easy to state and easy to fail. The adviser needs a **reasonable basis for believing** each testimonial and endorsement complies — an ongoing obligation, not a one-time approval. In practice that means periodic review of what promoters are actually saying, not merely a signed agreement in a file.

**Disqualification** bars compensating an **ineligible person** — one subject to a disqualifying SEC action or certain criminal or regulatory events — for a testimonial or endorsement. The adviser must have a reasonable basis for believing the promoter is not disqualified, which means checking rather than assuming. Partial exemptions exist where another regime already supplies comparable protection, notably for certain registered broker-dealers.

Two boundaries worth holding. A **de minimis** promoter escapes the **written agreement**, not the disclosure, oversight, or disqualification conditions. And affiliated personnel whose affiliation is **readily apparent or disclosed** escape the written agreement too — the agreement exists to document an arm's-length arrangement, and there is nothing arm's-length about an employee.

## Performance advertising

This is where most exam points live.

### Net performance is mandatory

Any presentation of **gross performance must be accompanied by net performance**, calculated over the **same time period** using the **same methodology**, and displayed with **at least equal prominence** and in a format **designed to facilitate comparison**. Net means net of **fees and expenses the investor actually paid or would pay**, including advisory fees.

### Prescribed time periods

Performance of a portfolio (other than a private fund) must include **1-, 5-, and 10-year periods**, each ending on a date no less recent than the most recent calendar year end, with **equal prominence**. If the portfolio has not existed for a period, the period since inception is used.

### The four special performance categories

| Type | What it is | Core condition |
| --- | --- | --- |
| **Hypothetical** | Model, backtested, targeted, or projected returns | Policies and procedures to ensure relevance to the **intended audience**; provide the **criteria and assumptions** used; provide information sufficient to understand **risks and limitations**. Effectively limited to sophisticated audiences who can evaluate it |
| **Extracted** | The performance of a **subset** of investments pulled from a portfolio | Must provide, or offer to provide promptly, the performance of the **total portfolio** from which it was extracted |
| **Related** | Performance of other portfolios with **substantially similar** objectives, policies, and strategies | Must include **all** related portfolios, unless excluding one does not raise the net result and does not alter the prescribed time periods |
| **Predecessor** | Performance from an adviser's **prior firm** | The person primarily responsible must have been at the prior firm; the accounts must be **sufficiently similar**; **all** similar accounts must be included unless exclusion does not raise results; and clear disclosure that the performance was achieved at a prior entity |

### Worked scenario: gross, net, and equal prominence

A firm's website reports: **"Our core strategy returned 12.4% in 2025."** A footnote in grey type reads: returns are gross of advisory fees; net returns available on request. The firm's fee is 1%.

Everything about that presentation fails.

- **Net must accompany gross**, over the **same period**, using the **same methodology**, with **at least equal prominence** and in a format designed to facilitate comparison. Net figures held back until a prospect asks are the opposite of equal prominence.
- **The prescribed periods are missing.** A portfolio other than a private fund must show **1-, 5-, and 10-year** returns, each ending no less recently than the most recent calendar year end, with equal prominence — or since inception if shorter. A single flattering calendar year, standing alone, presents performance in a manner that is not fair and balanced.
- **Substantiation.** The firm must be able to produce, on SEC demand, the working papers behind 12.4%. Being unable to raises the inference the number was unsupported.
- If 12.4% is the return of one sleeve of a larger portfolio, it is **extracted performance**, and the total portfolio's performance must be provided or promptly offered.

Why the SEC treats prominence as substantive rather than cosmetic: at a 1% fee, 12.4% gross is roughly **11.3% net**. Over a decade, $100,000 compounds to about **$321,900** at the gross rate and about **$291,700** at the net rate — a gap of roughly **$30,000**, or nearly a third of the original investment, hidden inside a footnote.

### Specific investment advice

Referencing **past specific recommendations** is permitted only if presented in a **fair and balanced** manner. Showing only the winners is **cherry-picking** and violates prohibition 5. The old "all recommendations in the past year" list is no longer the only path — but the substance of the requirement (context, losers as well as winners, disclosure of methodology) survives.

### Third-party ratings

A **third-party rating** — a ranking or award produced by someone unaffiliated with the adviser — may be used in an advertisement, but two conditions attach.

- The adviser must have a **reasonable basis for believing** the questionnaire or survey behind the rating is structured so that it is **equally easy to give favorable and unfavorable responses**, and is **not designed to produce a predetermined result**. A "best adviser" list that ranks by how much the adviser paid to be listed fails this on its face.
- The advertisement must **clearly and prominently disclose** (or the adviser must reasonably believe the rating itself discloses) the **date of the rating and the period it covers**, the **identity of the third party** that produced it, and whether **any compensation** was provided, directly or indirectly, in connection with obtaining or using it.

A rating is also a species of endorsement in substance, so the same instinct applies: say who said it, when, and what it cost.

### Never permitted

- Any statement that the SEC or a state Administrator has **approved or sponsored** the adviser or an advertisement.
- **Guarantees** of specific results or against loss.

## Designations, titles, and status claims

- **Professional designations** may be used only if actually held, current, and issued by a body with **meaningful curriculum, examination, and continuing education requirements**. Using a lapsed or unaccredited credential is a dishonest practice.
- **"RIA" is a firm status, not a personal title.** An individual is an **investment adviser representative**; the firm is the **registered investment adviser**. Placing "RIA" after a personal name is misleading and is specifically discouraged by regulators.
- Never imply that registration signifies **skill, endorsement, or approval**.
- **Senior-focused designations** are restricted or require pre-approval in many states.
- **"Fee-only"** may not be used by anyone receiving commissions or other transaction-based compensation from any source.

## Supervision of electronic communications

Everything above applies with equal force on **social media, blogs, podcasts, video, and messaging apps**.

- A third party's unsolicited comment on an adviser's page is generally not the adviser's advertisement — **unless the adviser adopts it** (by endorsing, liking, or promoting it) or **is entangled with it** (by drafting, editing, or paying for it). Those two words, **adoption** and **entanglement**, are the test.
- Firms must have **written policies** on which channels may be used and must **capture and retain** business communications regardless of channel.
- **Off-channel communications** — personal text messaging, WhatsApp, and personal email used for business — have been a major enforcement priority, producing very large penalties. The violation is the **recordkeeping failure and the failure to supervise**, not necessarily anything said in the messages.

## Books and records

Under **Rule 204-2**, advisory records are generally kept for **five years from the end of the fiscal year in which the last entry was made**, with the **first two years in an appropriate office of the adviser**. For advertising specifically:

- **All advertisements** disseminated, directly or indirectly, must be retained.
- **Supporting documentation for performance claims** — the working papers, calculations, and account statements substantiating the numbers.
- **Written agreements with compensated promoters**, plus records of the disclosures provided.
- Records of communications relating to recommendations, receipt and disbursement of funds, and any complaint.

Two special retention periods: **partnership articles, articles of incorporation, charters, and minute books** are kept for **three years after termination of the enterprise**, and records of a **predecessor** adviser must be preserved.

## Complaints

Every **written customer complaint** — including email and, in practice, complaints received through social channels — must be recorded and retained, with the action taken. Firms must have procedures for routing complaints to compliance, investigating, and responding. A pattern of complaints on the same representative is a supervisory red flag and can independently support an unethical-practices finding.`,
  pitfalls: [
    "The blanket prohibition on testimonials is obsolete — since the Marketing Rule compliance date of November 4, 2022, testimonials and endorsements are permitted with clear and prominent disclosure, a written promoter agreement above the de minimis threshold, and adviser oversight.",
    "Gross performance may never stand alone: net performance must appear over the same period, with the same methodology, and with at least equal prominence.",
    "Prong two of the advertisement definition has no more-than-one-person requirement, so a single compensated referral to one prospect is an advertisement subject to the rule.",
    "The written agreement with a compensated promoter is required only above the de minimis threshold of $1,000 or its non-cash equivalent in the prior twelve months — but the disclosure and oversight obligations apply regardless of amount.",
    "Extracted performance requires the total portfolio's performance to be provided or promptly offered; showing only the winning sleeve of a strategy is cherry-picking.",
    "RIA describes the firm's registration status and is not a personal designation — an individual should be identified as an investment adviser representative.",
    "Off-channel business communications on personal devices violate the books-and-records rule even when nothing improper is said, because the firm cannot capture and supervise them.",
    "Hypothetical performance pulls a communication into the advertisement definition even when it goes to a single person, so a projection in a one-on-one email is an advertisement while the same email without it is not.",
  ],
  keyTerms: [
    {
      term: 'Marketing Rule (Rule 206(4)-1)',
      definition:
        "The consolidated SEC rule effective November 4, 2022 that replaced the former advertising and cash-solicitation rules, defining advertisements in two prongs and imposing seven general prohibitions plus conditions on testimonials, endorsements, and performance.",
    },
    {
      term: 'Testimonial',
      definition:
        "A statement by a current client or private fund investor about their experience with the adviser, permitted when accompanied by clear and prominent disclosure of client status, compensation, and material conflicts.",
    },
    {
      term: 'Endorsement',
      definition:
        "A statement by a person who is not a current client or investor that indicates approval of or refers prospective clients to the adviser, subject to the same disclosure, agreement, oversight, and disqualification conditions.",
    },
    {
      term: 'De minimis compensation',
      definition:
        "Compensation of $1,000 or less, or its non-cash equivalent, paid to a promoter during the preceding twelve months, below which no written agreement with the promoter is required.",
    },
    {
      term: 'Net performance',
      definition:
        "Performance reduced by the fees and expenses an investor paid or would have paid, required to accompany any gross performance with equal prominence over the same period and methodology.",
    },
    {
      term: 'Hypothetical performance',
      definition:
        "Model, backtested, targeted, or projected results not actually achieved by a real portfolio, permitted only with policies ensuring relevance to the intended audience plus disclosure of criteria, assumptions, risks, and limitations.",
    },
    {
      term: 'Predecessor performance',
      definition:
        "Track record earned at a prior firm, usable only if the responsible personnel came along, the accounts are sufficiently similar, all similar accounts are included, and the prior-entity origin is clearly disclosed.",
    },
    {
      term: 'Third-party rating',
      definition:
        "A ranking or award from an unaffiliated party, usable in an advertisement only where the adviser reasonably believes the underlying questionnaire allowed favorable and unfavorable responses equally and did not target a predetermined result, and where the date, period, producer, and any compensation are clearly and prominently disclosed.",
    },
    {
      term: 'Adoption and entanglement',
      definition:
        "The test for whether third-party social media content becomes the adviser's own communication: adoption through endorsing or approving it, entanglement through drafting, editing, or paying for it.",
    },
    {
      term: 'Rule 204-2 retention',
      definition:
        "The books-and-records requirement to preserve advisory records, including advertisements and performance support, for five years from the end of the fiscal year of the last entry, with the first two years in an appropriate office.",
    },
  ],
  confusions: [
    {
      dont: 'The current Marketing Rule, under which testimonials are permitted with disclosure',
      with: 'The pre-2022 advertising rule, which banned testimonials outright',
    },
    {
      dont: 'Prong one advertisements, which require communication to more than one person unless hypothetical performance is included',
      with: 'Prong two, compensated testimonials and endorsements, which are covered even when directed at a single person',
    },
    {
      dont: 'Extracted performance, a subset of a real portfolio',
      with: 'Hypothetical performance, results never actually achieved by any real portfolio',
    },
    {
      dont: 'RIA, the registration status of the advisory firm',
      with: 'IAR, the individual who provides advice on behalf of that firm',
    },
    {
      dont: 'The five-year general records retention period, with two years in an appropriate office',
      with: 'The three-years-after-termination period for partnership articles, charters, and minute books',
    },
  ],
};
