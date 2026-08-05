import type { Question } from '../questions';

export const items: Question[] = [
  {
    id: 298,
    topic: 'cybersecurity-privacy',
    q: 'Under Regulation S-P as amended, which statement is most accurate?',
    choices: [
      'Firms must deliver an initial privacy notice when a customer relationship is established, provide an opt-out for certain sharing with nonaffiliated third parties, maintain a written incident response program, and notify affected individuals of a breach as soon as practicable and generally within 30 days of becoming aware of it',
      'Privacy notices are required only for institutional clients',
      'Customers may opt out of all sharing of nonpublic personal information, including sharing with service providers necessary to process transactions',
      'Breach notification is left entirely to state law, with no federal timing requirement',
    ],
    answer: 0,
    exp: "Regulation S-P requires initial and, where applicable, annual privacy notices plus an opt-out right for sharing nonpublic personal information with nonaffiliated third parties. The amended rule adds a written incident response program and requires notice to affected individuals as soon as practicable, and not later than 30 days after the firm becomes aware that unauthorized access to sensitive customer information has occurred or is reasonably likely. The parallel NASAA information security model rule separately requires state-registered advisers to adopt written physical and cybersecurity policies and to deliver the privacy notice.",
    difficulty: 'medium',
  },
  {
    id: 299,
    topic: 'cybersecurity-privacy',
    q: 'A sole proprietor investment adviser tells the examiner that a business continuity and succession plan is unnecessary because the firm has only one owner and no employees. Under the NASAA model rule, this position is:',
    choices: [
      'Correct, because succession planning is a best practice rather than a requirement',
      'Incorrect, but only because the firm has custody of client assets',
      'Correct, because the model rule applies only to advisers with more than ten employees',
      'Incorrect, because every registered adviser must have a written business continuity and succession plan addressing protection and backup of books and records, alternate means of communicating with clients and regulators, office relocation, assignment of duties to qualified persons, and the death or unavailability of key personnel',
    ],
    answer: 3,
    exp: "The NASAA model rule requires every state-registered adviser to establish, implement, and maintain a written business continuity and succession plan based on the facts and circumstances of its business model. A one-person firm arguably faces the greatest key-person risk, so succession planning matters more, not less.",
    difficulty: 'medium',
  },
  {
    id: 300,
    topic: 'cybersecurity-privacy',
    q: 'An 82-year-old client suddenly requests a $75,000 wire to an unfamiliar overseas account, and the representative reasonably believes the client is being financially exploited. Under the NASAA model act on senior investor protection, the firm may:',
    choices: [
      'Place a temporary hold on the disbursement, notify the trusted contact person and the appropriate authorities, and generally maintain the hold for up to 15 business days, extendable by the Administrator or a court',
      'Refuse the request permanently without any notification obligation',
      'Do nothing, because a client instruction must always be executed as given',
      'Place a hold only after obtaining a court order authorizing it',
    ],
    answer: 0,
    exp: "The model act permits a qualified employee who reasonably believes exploitation of an eligible adult has occurred or is being attempted to delay a disbursement, with prompt notification to the state securities regulator and adult protective services and to any trusted contact who is not suspected of the exploitation. The initial hold runs 15 business days and may be extended by the Administrator or a court; a trusted contact is a resource for verification, not a person authorized to trade the account.",
    difficulty: 'medium',
  },
];
