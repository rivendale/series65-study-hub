import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'anti-fraud',
  title: 'Anti-Fraud Provisions and Insider Trading',
  weight: '~3%',
  order: 36,
  summary:
    "Anti-fraud is the one part of securities law from which nothing is exempt: it reaches every person, every security, and every transaction, registered or not, and it supplies the framework for insider trading, manipulation, and misleading performance claims.",
  body: `## The universal reach of anti-fraud

Registration exemptions are exemptions from **registration**. They are never exemptions from **fraud liability**. The anti-fraud provisions of the Uniform Securities Act apply to:

- **Any person** — registered, exempt from registration, or never registered at all
- **Any security** — registered, federal covered, or exempt (including government and municipal securities)
- **Any offer, sale, or purchase** — including exempt transactions

Say it as a rule: **there is no exemption from the anti-fraud provisions.** A question describing an unregistered person selling an exempt security in an exempt transaction and lying about it has an easy answer.

The **Administrator's jurisdiction** follows the communication. An offer is made in a state if it **originates** there, is **directed** there, or is **accepted** there. A fraudulent phone call placed from State A to a client in State B is actionable in **both**.

## The three prohibited categories

Anti-fraud statutes — USA §101, Securities Exchange Act §10(b) and Rule 10b-5, and Advisers Act §206 — are all built on the same three prongs. It is unlawful, in connection with the offer, sale, or purchase of a security, to:

1. Employ any **device, scheme, or artifice to defraud**;
2. Make an **untrue statement of a material fact**, or **omit** a material fact necessary to make statements made, in light of the circumstances, **not misleading**; or
3. Engage in any **act, practice, or course of business** that **operates or would operate as a fraud or deceit** upon another person.

Prong 2 is the reason a **half-truth is a lie**. An adviser who touts a fund's five-year return without mentioning that the strategy changed two years ago has made a technically accurate statement that is materially misleading.

### Fraud does not require a sale

Under the USA the prohibition covers the **offer** as well as the sale, and under §206 it covers advice regardless of whether any transaction occurs. **No purchase, no loss, and no profit are required** for the Administrator to act.

## Materiality

A fact is **material** if there is a **substantial likelihood that a reasonable investor would consider it important in making an investment decision** — the standard from **TSC Industries v. Northway**. For contingent or speculative events (a merger under negotiation, for example), **Basic v. Levinson** applies a **probability-times-magnitude** test: the more likely the event and the bigger its impact, the more likely it is material even at an early stage.

Common material facts on the exam: pending litigation, a change in portfolio manager, disciplinary history, financial condition of the issuer or the adviser, compensation arrangements and conflicts, and the identity of who is really managing the money.

## Advisers Act §206 — the fiduciary anti-fraud provision

**Section 206** is a separate anti-fraud provision aimed squarely at advisers, and it applies to **all advisers, registered or not**. Two features matter for the exam:

- It reaches **fraud upon clients and prospective clients**, not merely "in connection with the purchase or sale of a security." An adviser who never trades anything can still violate §206.
- **SEC v. Capital Gains Research Bureau (1963)** held that §206 imposes a **federal fiduciary duty** and that the SEC need not prove **scienter** or actual client injury to obtain an injunction — a failure to disclose a material conflict is itself the violation. The Court read the statute in light of Congress's intent to eliminate conflicts of interest, not merely to punish intentional deceit. In practice, **negligence can suffice** for civil liability under §206(2), while **§10(b)/Rule 10b-5 requires scienter** (intent or recklessness).

That contrast — **scienter for 10b-5, negligence sufficient for 206(2)** — is a favorite distinction.

## Insider trading

### The prohibition

It is unlawful to trade a security while in possession of **material, non-public information (MNPI)** in breach of a duty, or to tip such information to another who trades.

- **Classical theory** — a corporate insider (officer, director, controlling shareholder, or a **temporary insider** such as the company's lawyer, accountant, banker, or consultant) trades on information belonging to the corporation, breaching a duty to shareholders.
- **Misappropriation theory** — a person **outside** the issuer trades on confidential information in breach of a duty owed to the **source** of the information. *United States v. O'Hagan* upheld this theory: a lawyer whose firm represented an acquirer defrauded his own firm and client, not the target's shareholders.

### Tipper and tippee liability

A **tippee** inherits the tipper's duty and is liable only if the **tipper breached a duty for a personal benefit** and the tippee **knew or should have known** of that breach. **Dirks v. SEC** established the personal-benefit requirement; **Salman v. United States** confirmed that a **gift of confidential information to a trading relative or friend** is itself a sufficient personal benefit — no cash need change hands. A tip that serves a **legitimate corporate purpose**, by contrast, creates no liability.

**Overhearing information from a stranger with no duty** — on a train, in an elevator — generally creates no liability, because no duty was breached. But if the listener knows the information was disclosed in breach of a duty, trading on it is not safe.

### Compliance architecture

- **Rule 10b5-1 plans** — a written trading plan adopted **while not in possession of MNPI**, specifying amounts, prices, and dates or a formula, provides an affirmative defense. Amendments tightened the regime with **cooling-off periods** before the first trade, a **director and officer certification**, limits on **overlapping plans** and single-trade plans, and **disclosure of plan adoption and termination**.
- **Regulation FD** — an issuer that discloses material non-public information to securities professionals or holders likely to trade must disclose it **publicly**: **simultaneously** if intentional, and **promptly** (within 24 hours or before the next market open) if unintentional.
- **Information barriers** ("Chinese walls") — physical and electronic separation of investment banking from research and trading, plus **restricted lists** (no trading or recommending) and **watch lists** (confidential surveillance).
- **ITSFEA (1988)** requires firms to **establish, maintain, and enforce written policies and procedures reasonably designed to prevent misuse of MNPI**, and creates **controlling person liability** for firms that fail to do so.

### Penalties

- **Civil:** disgorgement plus a civil penalty of up to **three times the profit gained or loss avoided (treble damages)** for the violator; controlling persons face the greater of a statutory amount or three times the profit.
- **Criminal:** substantial fines and imprisonment for willful violations, prosecuted by the Department of Justice.
- **Bounty:** whistleblowers may receive a percentage of sanctions collected.

## Market manipulation

Manipulation is fraud aimed at the **price** rather than at a particular investor.

| Practice | What it is |
| --- | --- |
| **Pump-and-dump** | Hyping a thinly traded stock with false or exaggerated claims, then selling into the demand created |
| **Marking the close** | Entering orders near the close to move the settlement or reported price |
| **Matched orders** | Prearranged buy and sell orders between colluding parties creating an illusion of activity |
| **Painting the tape** | A series of trades reported to the tape to give a false appearance of volume or interest |
| **Wash trades** | Buying and selling the same security with no change in beneficial ownership |
| **Spoofing / layering** | Entering orders with no intent to execute in order to move the quote and induce others to trade |

None of these require a lie to a specific person — the deception is on the market itself.

## Predictions, projections, and guarantees

- **Baseless specific predictions are fraud.** "This stock will hit $80 by December" with nothing behind it is an untrue statement of material fact in the guise of an opinion.
- **A forward-looking statement with a reasonable basis, clearly labeled as an opinion or projection and accompanied by the assumptions and risks, is permitted.** The distinction is **reasonable basis plus framing**, not the mere use of the word "may."
- **Guaranteeing a return or guaranteeing against loss is prohibited** in every context. So is representing that registration constitutes approval by the SEC or an Administrator, or that an exempt security is "approved" or "safe" because it is exempt.
- **Selective omission of a security's risks**, presenting a hypothetical or backtested return as an actual result, or cherry-picking a favorable period are all prong-2 violations.`,
  pitfalls: [
    "An exemption from registration is never an exemption from the anti-fraud provisions — the Administrator retains jurisdiction over fraud in exempt securities and exempt transactions by unregistered persons.",
    "Fraud liability attaches to an OFFER, not just a completed sale, and under Advisers Act Section 206 it attaches to advice even when no security is ever bought or sold.",
    "Rule 10b-5 requires scienter, but Section 206(2) can be violated by negligence — SEC v. Capital Gains held the SEC need not prove intent or client injury to enjoin a nondisclosed conflict.",
    "A tippee is liable only if the tipper breached a duty for a personal benefit and the tippee knew or should have known; overhearing information from someone who owed no duty generally is not insider trading.",
    "A gift of confidential information to a trading friend or relative counts as a personal benefit under Salman — no cash needs to change hands for tipper liability.",
    "Insider trading penalties reach up to three times the profit gained or loss avoided, and a firm can be liable as a controlling person for failing to maintain policies to prevent misuse of inside information even if no supervisor knew.",
    "A projection is not automatically fraud; a projection with a reasonable basis, disclosed assumptions, and clear labeling is permitted, while a specific price-and-date prediction with no support is fraudulent.",
  ],
  keyTerms: [
    {
      term: 'Materiality',
      definition:
        "The standard from TSC Industries v. Northway under which a fact is material if a reasonable investor would consider it important in making an investment decision; for contingent events Basic v. Levinson weighs probability against magnitude.",
    },
    {
      term: 'Scienter',
      definition:
        "The intent to deceive, manipulate, or defraud, or recklessness amounting to the same; required for Rule 10b-5 liability but not for civil liability under Advisers Act Section 206(2).",
    },
    {
      term: 'Material non-public information (MNPI)',
      definition:
        "Information not disseminated to the investing public that a reasonable investor would consider important; trading on it in breach of a duty, or tipping it, constitutes insider trading.",
    },
    {
      term: 'Misappropriation theory',
      definition:
        "The doctrine upheld in United States v. O'Hagan under which an outsider who trades on confidential information in breach of a duty to the source of that information commits securities fraud.",
    },
    {
      term: 'Personal benefit test',
      definition:
        "The Dirks requirement, extended in Salman, that a tipper must receive some benefit — including the benefit of gifting information to a trading friend or relative — before the tippee can be liable.",
    },
    {
      term: 'Rule 10b5-1 plan',
      definition:
        "A written pre-arranged trading plan adopted while not in possession of inside information that provides an affirmative defense, subject to cooling-off periods, certifications, and limits on overlapping plans.",
    },
    {
      term: 'Regulation FD',
      definition:
        "The SEC rule requiring an issuer that discloses material non-public information to market professionals to make public disclosure simultaneously if the selective disclosure was intentional, or promptly if unintentional.",
    },
    {
      term: 'ITSFEA',
      definition:
        "The Insider Trading and Securities Fraud Enforcement Act of 1988, which requires firms to maintain and enforce written procedures to prevent misuse of inside information and imposes controlling person liability with treble civil penalties.",
    },
    {
      term: 'Market manipulation',
      definition:
        "Conduct such as pump-and-dump schemes, matched orders, wash trades, painting the tape, marking the close, and spoofing that creates a false appearance of price or trading activity.",
    },
  ],
  confusions: [
    {
      dont: 'Exemption from registration, which relieves only the filing obligation',
      with: 'Anti-fraud liability, which has no exemption for any person, security, or transaction',
    },
    {
      dont: 'Rule 10b-5, which requires scienter and a purchase or sale',
      with: 'Advisers Act Section 206, which reaches advice to clients and prospective clients and can be violated negligently',
    },
    {
      dont: 'The classical theory, where a corporate insider breaches a duty to shareholders',
      with: 'The misappropriation theory, where an outsider breaches a duty to the source of the information',
    },
    {
      dont: 'A wash trade, which involves no change in beneficial ownership',
      with: 'A wash sale, a tax rule disallowing a loss when a substantially identical security is repurchased',
    },
    {
      dont: 'A reasonable, clearly labeled projection with disclosed assumptions',
      with: 'A baseless specific price prediction, which is a fraudulent statement of material fact',
    },
  ],
};
