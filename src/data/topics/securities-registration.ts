import type { Topic } from '../curriculum';

export const topic: Topic = {
  id: 'securities-registration',
  title: 'Registration of Securities',
  weight: '~2%',
  order: 30,
  summary:
    "Unless a security is federal covered or otherwise exempt, it must be registered in each state where it is offered. State law provides three methods — notification, coordination, and qualification — that differ in who may use them and when effectiveness occurs. This topic also covers what NSMIA preempted, what notice-filing power the states kept, and the limits on the Administrator's authority.",
  body: `## The Baseline Rule

It is unlawful to **offer or sell** a security in a state unless the security is **registered**, the security is **exempt**, the transaction is **exempt**, or the security is **federal covered**. Note that the prohibition reaches **offers**, not just completed sales — an offer made before effectiveness is itself a violation.

## The Three State Registration Methods

### Registration by Notification (Filing)

The lightest method, available only to **seasoned issuers** with an established operating and earnings history. Requirements typically include several years of continuous operation and a demonstrated record of paying dividends or earnings sufficient to cover fixed charges. The issuer files a short statement and the registration becomes effective **automatically after a short waiting period** (commonly **2 business days** under the model act) if no stop order is pending.

Not every state offers this method; where it exists, it exists because a company with a long clean history poses less disclosure risk.

### Registration by Coordination

The workhorse for **public offerings registered federally under the Securities Act of 1933**. The issuer files with the state a copy of the federal **prospectus**, plus state-required items (articles of incorporation, underwriting agreements, indenture, opinion of counsel, specimen certificate) and consents to service of process. Amendments to the federal filing must be forwarded promptly.

The tested point: a coordinated registration becomes **effective at the same moment the federal registration becomes effective**, provided the state filing has been on file for the required period (commonly **10 to 20 days**), no stop order is in effect, and a **price range and underwriting terms** have been on file for the required period. **State effectiveness rides on federal effectiveness** — the Administrator does not choose the date.

### Registration by Qualification

The most demanding method and the **default**. Qualification is used for offerings **not registered federally** — intrastate offerings, offerings under exemptions from '33 Act registration — and it may be used by **any** issuer for **any** security. The issuer must file extensive information: the business, capitalization, officers and directors and their compensation and holdings, use of proceeds, financial statements, and copies of organizational and offering documents.

**A qualification registration becomes effective when the Administrator so orders.** There is no automatic date; the Administrator controls it.

| Method | Who uses it | When effective |
| --- | --- | --- |
| **Notification / Filing** | Seasoned issuers with an operating history | Automatically after a short waiting period |
| **Coordination** | Issuers concurrently registering with the SEC under the '33 Act | **Simultaneously with the federal registration** |
| **Qualification** | Any issuer; required when there is no federal registration | **When the Administrator orders it effective** |

## The Registration Statement and Administrator Powers

A state registration statement identifies the **amount of securities to be offered in that state**, the states in which the offering is proposed, any adverse order or judgment, the offering price, underwriting discounts, and the expected **use of proceeds**. It must be signed by an appropriate officer and accompanied by a **consent to service of process** appointing the Administrator as attorney for service.

The Administrator may impose conditions, including:

- **Escrow** of shares issued to promoters, officers, or others within a defined lookback period at a price below the public offering price, until the issuer meets specified conditions;
- **Impoundment** of proceeds — funds held until a specified minimum amount is raised, and returned to purchasers if it is not;
- **Specified use of proceeds**, restricting the issuer to the stated purposes.

The Administrator may also require the offering to be made through an **escrow agent** or a specified form of subscription.

### Merit Review and Its Limits

State registration is historically **merit review** — the Administrator can assess fairness, not just disclosure. But the model act constrains this: the Administrator **may not deny registration solely because the offering is speculative or risky** when the risks are **fully and adequately disclosed**. The remedy for a speculative offering is disclosure and possibly escrow or impoundment, not denial. A denial must rest on a finding such as inadequate disclosure, unreasonable underwriting compensation, unfair promoter benefits, or a filing that is incomplete or misleading.

### Effective Period and Amendments

A state registration is generally effective for **one year** from the effective date. It may continue while securities remain unsold if the offering is still being made by the underwriter. The registrant files **reports** on the progress of the offering as the Administrator requires (not more often than quarterly under the model act), and the amount registered may be **increased** by amendment on payment of the additional fee.

## Federal Covered Securities

**NSMIA (1996)** preempted state registration of a defined class of **federal covered securities**:

- Securities **listed on a national exchange** — NYSE, Nasdaq, NYSE American, and others designated by SEC rule — **and any security equal or senior in rank** to a listed security of the same issuer. So if common stock is listed, that issuer's preferred stock, bonds, warrants, and rights are also covered.
- Securities issued by an **investment company registered under the Investment Company Act of 1940** — open-end funds, closed-end funds, UITs.
- Securities sold to **qualified purchasers** as defined by the SEC.
- **Rule 506** offerings under **Regulation D** — both **506(b)** and **506(c)**.
- **Regulation A+ Tier 2** offerings (up to $75M in 12 months) sold to qualified purchasers.
- Securities issued in certain **exempt transactions**, and securities issued by the **US government**.

### What the States Kept

Preemption removed registration authority, not everything:

- States may require **notice filings** — typically a copy of the federal filing, a consent to service of process, and a **fee**.
- States retain **full antifraud authority** over federal covered securities.
- States may investigate and bring enforcement actions for fraud or deceit.

**Rule 504 is NOT federal covered.** This is the classic trap. Rule 504 permits up to **$10M** in 12 months but was never given preemption, so **504 offerings must be registered or exempt at the state level** — which is precisely why 504 is often paired with a state-level exemption or with the model act's limited offering exemption. Rule 506 is covered; Rule 504 is not. Likewise **Reg A+ Tier 1** is not preempted; only **Tier 2** is.

## The Federal Acts at a High Level

The **Securities Act of 1933** — the "paper act" — governs the **issuance** of securities in the primary market. Its central mechanism is the **registration statement** filed with the SEC and the **prospectus** delivered to purchasers, containing the material facts an investor needs. The SEC does **not** approve securities or pass on their merits; an effective registration means the disclosure appeared adequate, and it is unlawful to represent otherwise.

The **Securities Exchange Act of 1934** — the "people act" — governs the **secondary market** and the participants in it: it created the **SEC**, requires registration of exchanges, broker-dealers, and associated persons, mandates ongoing issuer reporting (10-K, 10-Q, 8-K), regulates proxies, insider reporting and short-swing profits, credit and margin through Regulation T, and contains the general antifraud provision **§10(b)** and **Rule 10b-5**.`,
  pitfalls: [
    'Registration by coordination becomes effective simultaneously with the federal registration. The Administrator does not pick the date; only qualification is effective when the Administrator so orders.',
    'Regulation D Rule 506 is a federal covered security, but Rule 504 is not. A 504 offering still needs state registration or a state exemption.',
    'Regulation A+ Tier 2 is federal covered; Tier 1 is not.',
    "Preemption removes state registration authority, but states keep notice-filing, fee, and full antifraud authority over federal covered securities.",
    "The Administrator may not deny a registration merely because the offering is speculative when the risks are fully disclosed; escrow or impoundment is the remedy, not denial.",
    'If an issuer has a listed common stock, its unlisted preferred and bonds are also federal covered because they are equal or senior in rank.',
    "It is unlawful to offer, not merely to sell, an unregistered non-exempt security. Solicitation before effectiveness is itself a violation.",
  ],
  keyTerms: [
    {
      term: 'Registration by notification',
      definition:
        'The abbreviated state method available to seasoned issuers with an established operating and earnings history; effective automatically after a short waiting period.',
    },
    {
      term: 'Registration by coordination',
      definition:
        "The state method used alongside a federal Securities Act of 1933 registration; becomes effective at the same moment as the federal registration once state filing periods are satisfied.",
    },
    {
      term: 'Registration by qualification',
      definition:
        'The most detailed state method, required when there is no federal registration and available to any issuer; effective only when the Administrator so orders.',
    },
    {
      term: 'Impoundment',
      definition:
        'A condition the Administrator may impose requiring offering proceeds to be held until a specified minimum is raised, with funds returned to purchasers if the minimum is not met.',
    },
    {
      term: 'Escrow',
      definition:
        'A condition holding promoter or insider shares acquired cheaply before the offering, restricting their sale until the issuer satisfies specified conditions.',
    },
    {
      term: 'Federal covered security',
      definition:
        'A security whose state registration is preempted by NSMIA, including exchange-listed issues and securities equal or senior to them, registered investment company shares, Rule 506 offerings, Reg A+ Tier 2, and qualified purchaser offerings.',
    },
    {
      term: 'Consent to service of process',
      definition:
        'An irrevocable appointment of the Administrator as attorney to receive legal process, filed with registrations, notice filings, and exemption filings.',
    },
    {
      term: 'Prospectus',
      definition:
        "The disclosure document delivered to purchasers in a registered public offering, drawn from the '33 Act registration statement. Its effectiveness is not SEC approval of the security.",
    },
  ],
  confusions: [
    {
      dont: 'Coordination — effective automatically when the federal registration goes effective',
      with: 'Qualification — effective only when the Administrator issues an order',
    },
    {
      dont: 'Rule 506 — a federal covered security exempt from state registration',
      with: 'Rule 504 — not federal covered, so state registration or a state exemption is still needed',
    },
    {
      dont: "Securities Act of 1933 — the primary market, registration statements, and prospectuses",
      with: "Securities Exchange Act of 1934 — the secondary market, the SEC itself, broker-dealers, reporting, and Rule 10b-5",
    },
    {
      dont: 'Escrow — holding insider shares until conditions are met',
      with: 'Impoundment — holding offering proceeds until a minimum is raised',
    },
    {
      dont: 'Notice filing — a fee-bearing informational filing a state may still require for a covered security',
      with: 'Registration — substantive review the state may no longer conduct for covered securities',
    },
  ],
};
