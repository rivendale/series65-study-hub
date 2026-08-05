import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'ia-iar-registration',
  title: 'Investment Adviser and IAR Registration',
  weight: '~4%',
  order: 28,
  summary:
    "Whether a person must register as an investment adviser turns on a three-prong test, a short list of exclusions, and then a jurisdictional question: SEC or state. This topic covers the three prongs, the exclusions candidates most often misapply, the $110M federal covered threshold and its buffer band, why IAR registration is always a state matter, and the Form ADV filing and brochure-delivery mechanics.",
  body: `## The Three-Prong Test

Under Section 202(a)(11) of the **Investment Advisers Act of 1940** and the parallel definition in the **Uniform Securities Act**, a person is an investment adviser if all three of the following are true:

1. **Advice about securities.** The advice must concern securities — specific recommendations, asset allocation among securities categories, or the selection and monitoring of other advisers. Advice limited to rare coins, real estate, commodities futures, life insurance without a securities component, or general economic conditions is not securities advice.
2. **Compensation.** Any economic benefit counts. It need not be a separate advisory fee, need not come from the client, and need not be labeled a fee. A commission, a markup, a subscription price, or a bundled charge all satisfy the prong.
3. **In the business.** The advisory activity must be regular, not isolated. Holding oneself out as an adviser, receiving separate compensation for advice, or giving specific securities advice with any frequency establishes this prong.

**All three must be present.** Remove any one and the person falls outside the definition. A friend who suggests a stock over dinner fails the compensation and business prongs. A newsletter that sells subscriptions but writes only about macroeconomics fails the securities prong.

## Exclusions from the IA Definition

An **exclusion** means the person is not an investment adviser at all. This differs from an **exemption**, where the person is an adviser but does not have to register.

### Banks

**Banks and bank holding companies are treated differently.** A bank or a savings institution is excluded from the federal IA definition. A **bank holding company is not a bank** — this is a favorite exam trap. If a holding company gives advisory services, it must register.

### LATE Professionals

**L**awyers, **A**ccountants, **T**eachers, and **E**ngineers are excluded when the advice is:

- **Solely incidental** to the practice of their profession, **and**
- accompanied by **no special compensation** for the advisory component.

Both conditions must hold. An accountant who mentions the tax consequences of a client's mutual fund position while preparing a return is excluded. The same accountant who charges a separate $2,000 portfolio-review fee has taken **special compensation** and lost the exclusion.

### Broker-Dealers and the Wrap Fee

A broker-dealer or its registered representative is excluded when advice is **solely incidental** to brokerage and there is **no special compensation**. Commissions are the normal compensation of a brokerage business, so commissions alone do not destroy the exclusion.

A **wrap fee account** does destroy it. A wrap fee is a single asset-based charge covering advice, execution, and custody. Because part of that charge is unmistakably compensation for advice, the firm is receiving special compensation and must register as an investment adviser. The same logic applies to any fee-based brokerage account and to a rep who charges separately for a financial plan.

### Publishers

Publishers of **bona fide** newspapers, newsletters, magazines, or business publications of **general and regular circulation** are excluded. The Supreme Court in *Lowe v. SEC* framed this around whether the publication is genuinely a publication rather than personalized advice in disguise. Three tests: the content must be **impersonal** (not tailored to individual subscribers), the publication must be **regular** (not timed to market events), and it must be **bona fide** (real content, not a promotional vehicle for a specific offering).

### Government Securities Advisers

A person whose advice relates **only to securities issued or guaranteed by the United States government** is excluded.

## Federal Covered vs State Registration

**NSMIA** divided the world between SEC registration and state registration; a single adviser generally registers in one place, not both.

| Adviser | Registers with |
| --- | --- |
| **$110M or more** in regulatory AUM | **SEC** (mandatory) |
| **$100M to $110M** | **Optional** — the buffer band; may stay state-registered |
| Under **$100M** | **State(s)** |
| Adviser to a **registered investment company** | **SEC**, at any AUM |
| Required to register in **15 or more states** | **SEC** (multi-state exemption) |
| Adviser with **no state registration requirement** in its home state | **SEC** |

The **buffer band** exists so advisers do not have to switch regulators every time markets move. An adviser that reaches $110M must register with the SEC; one that falls below $90M must withdraw and register with the states. The buffer is measured at the **annual updating amendment**.

**Federal covered advisers** are not free of the states. A state may still require a **notice filing** — a copy of the Form ADV, a consent to service of process, and a fee — and retains full **antifraud** authority.

### Private Fund and Venture Capital Adviser Exemptions

At a high level: an adviser solely to **private funds** with less than **$150M** in US assets under management is exempt from SEC registration but remains an **exempt reporting adviser** filing portions of Form ADV. An adviser solely to **venture capital funds** is exempt at any size, also as an exempt reporting adviser. Exempt does not mean unregulated — antifraud, books and records, and reporting obligations continue.

## Investment Adviser Representatives

An **IAR** is a natural person associated with an investment adviser who makes recommendations, manages accounts, determines recommendations, solicits advisory services, or supervises those who do. Clerical and purely administrative employees are not IARs.

**IAR registration is always at the state level — even for IARs of federal covered advisers.** The SEC registers firms, not individuals. This is one of the most heavily tested facts in this section.

**IAR de minimis:** an IAR of a federal covered adviser must register in a state only if the IAR has a **place of business** in that state. Under the state model, an IAR with **no place of business** in a state and **fewer than 6 retail clients** in that state during the preceding 12 months need not register there. A **place of business defeats de minimis instantly** — one client and one office means registration.

## Form ADV and Filing Mechanics

Filings go through the **IARD** system.

- **Part 1** — check-the-box regulatory data about the firm: ownership, AUM, disciplinary history, business practices.
- **Part 2A** — the **firm brochure**, written in plain English, narrative format: services, fees, conflicts, disciplinary events.
- **Part 2B** — the **brochure supplement**, covering the individual personnel who advise the client: education, experience, discipline, other business.
- **Part 3 (Form CRS)** — a short **relationship summary** for retail investors, delivered at or before the start of the relationship.

### Brochure Delivery Rule

Deliver Part 2A either:

- **at least 48 hours before** entering into the advisory contract, **or**
- **at the time** of entering the contract, in which case the client has **5 business days to rescind without penalty**.

Then deliver annually: within **120 days of the adviser's fiscal year end**, either the updated brochure or a summary of material changes with an offer to provide the full document.

### Amendments

- **Annual updating amendment** within **90 days** of fiscal year end.
- **Prompt (other-than-annual) amendment** whenever information becomes **materially inaccurate** — especially disciplinary events, custody, or contact information.

## IAR Continuing Education

The **NASAA Model Rule on IAR continuing education** requires **12 credits annually**: **6 in Products and Practice** and **6 in Ethics and Professional Responsibility**. It has been adopted by a growing majority of states; where adopted, an IAR who fails to complete CE becomes **CE inactive** and cannot renew registration until the deficiency is cured. Credits do not carry over to the following year.`,
  pitfalls: [
    'A bank is excluded from the investment adviser definition; a bank holding company is not. Do not treat them as the same entity.',
    "The LATE professional and broker-dealer exclusions require BOTH that the advice be solely incidental AND that there be no special compensation. Candidates routinely accept one condition and stop reading.",
    "A wrap fee destroys the broker-dealer exclusion because part of the single fee pays for advice. Ordinary commissions do not.",
    'IAR registration is always at the state level, including IARs of SEC-registered federal covered advisers. The SEC does not register individuals.',
    "The IAR de minimis exemption requires NO place of business in the state. A place of business defeats it immediately, no matter how few clients there are.",
    "The annual updating amendment is due within 90 days of fiscal year end, but the annual brochure delivery is within 120 days. Do not swap the two numbers.",
    "The 5-business-day rescission right exists only when the brochure is delivered at contract signing. Deliver 48 hours early and there is no rescission period.",
  ],
  keyTerms: [
    {
      term: 'Three-prong test',
      definition:
        'Advice about securities, for compensation, as part of a regular business. All three prongs must be satisfied for a person to meet the investment adviser definition.',
    },
    {
      term: 'Solely incidental',
      definition:
        "A limiting condition on several exclusions: the advisory activity must be a minor, connected part of the person's primary profession or business rather than a service offered in its own right.",
    },
    {
      term: 'Special compensation',
      definition:
        'Any charge attributable to advice itself rather than to the underlying profession or transaction. Its presence destroys the professional and broker-dealer exclusions.',
    },
    {
      term: 'Federal covered adviser',
      definition:
        'An investment adviser registered with the SEC, generally because regulatory AUM is $110M or more, it advises a registered investment company, or it would otherwise face registration in 15 or more states.',
    },
    {
      term: 'Buffer band',
      definition:
        'The $100M to $110M range in which an adviser may choose SEC or state registration, measured at the annual updating amendment, so ordinary market movement does not force a regulator change.',
    },
    {
      term: 'Notice filing',
      definition:
        "A state's limited filing requirement for a federal covered adviser — Form ADV, consent to service of process, and a fee. It is not registration and does not give the state merit-review authority.",
    },
    {
      term: 'Investment adviser representative (IAR)',
      definition:
        'A natural person associated with an adviser who makes or determines recommendations, manages accounts, solicits advisory business, or supervises those who do.',
    },
    {
      term: 'Exempt reporting adviser',
      definition:
        'An adviser relying on the private fund or venture capital exemption that does not register but still files portions of Form ADV and remains subject to antifraud provisions.',
    },
  ],
  confusions: [
    {
      dont: 'Exclusion — the person is not an investment adviser at all under the definition',
      with: 'Exemption — the person is an investment adviser but is relieved of the duty to register',
    },
    {
      dont: 'Bank — excluded from the investment adviser definition',
      with: 'Bank holding company — not a bank, and not excluded',
    },
    {
      dont: 'Investment adviser registration — SEC for federal covered advisers, states otherwise',
      with: 'IAR registration — always at the state level, regardless of how the firm is registered',
    },
    {
      dont: 'Annual updating amendment — filed within 90 days of fiscal year end',
      with: 'Annual brochure delivery — made within 120 days of fiscal year end',
    },
    {
      dont: 'Commissions received by a broker-dealer — ordinary compensation that preserves the exclusion',
      with: 'Wrap fees or separate planning fees — special compensation that destroys the exclusion',
    },
  ],
};
