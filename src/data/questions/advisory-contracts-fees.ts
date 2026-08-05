import type { Question } from '../questions';

export const items: Question[] = [
  {
    id: 251,
    topic: 'advisory-contracts-fees',
    q: 'Under the NASAA model rule, an advisory contract with a state-registered investment adviser must be in writing and must set out all of the following EXCEPT:',
    choices: [
      'The services to be provided, the term of the contract and the amount of the fee',
      'The formula used to compute the fee and the amount of any prepaid fee to be returned on early termination',
      'Whether the contract grants the adviser discretionary authority over the account',
      'The names of the other clients the adviser currently serves',
    ],
    answer: 3,
    exp: 'The written contract must state the services, the term, the fee and the formula for computing it, the amount of any prepaid fee refunded on early termination, and whether discretion is granted. Client identities are confidential and never appear in another client contract.',
    difficulty: 'easy',
  },
  {
    id: 252,
    topic: 'advisory-contracts-fees',
    q: 'Aurora Advisory is a partnership with four general partners. In January a third party purchases 100% of the partnership interests. Separately, in June one of the four partners retires and is replaced. Which statement is correct?',
    choices: [
      'The January purchase is an assignment requiring client consent; the June change in a minority of the partners requires only notification to clients within a reasonable time',
      'Neither event has any effect on the existing advisory contracts',
      'The June retirement is an assignment; the January purchase is not',
      'Both events are assignments requiring prior client consent',
    ],
    answer: 0,
    exp: 'An advisory contract may not be assigned without client consent, and a sale of the firm or a transfer of a controlling block of its equity is an assignment. Where the adviser is a partnership, a change involving a minority of the partners is not an assignment and requires only that clients be notified within a reasonable time.',
    difficulty: 'medium',
  },
  {
    id: 253,
    topic: 'advisory-contracts-fees',
    q: 'An investment adviser wishes to charge a fee equal to 20% of the capital appreciation of an account above a stated benchmark. Such an arrangement is permitted only where:',
    choices: [
      'The client is a qualified client — at least $1.1 million under management with the adviser, or a net worth of more than $2.2 million excluding the primary residence',
      'The client signs a waiver of the protections of the Investment Advisers Act',
      'The adviser also offers the client an asset-based fee alternative',
      'The adviser itself has at least $110 million in regulatory assets under management',
    ],
    answer: 0,
    exp: 'Performance-based compensation is generally prohibited, but Rule 205-3 permits it for qualified clients, currently defined as at least $1.1 million in assets under management with the adviser or more than $2.2 million in net worth excluding the primary residence. These dollar thresholds are adjusted for inflation periodically, so verify them against the current rule.',
    difficulty: 'medium',
  },
  {
    id: 254,
    topic: 'advisory-contracts-fees',
    q: 'Which of the following, if paid for with client brokerage commissions, fall within the §28(e) soft dollar safe harbor?\n\nI. Third-party research reports on portfolio companies\nII. Analytical software used to evaluate portfolio attribution\nIII. Salaries of the back-office staff of the adviser\nIV. Registration fees for a conference at which the adviser markets its services',
    choices: [
      'I only',
      'I and II only',
      'I, II and III only',
      'I, II, III and IV',
    ],
    answer: 1,
    exp: "The safe harbor covers brokerage and research services that provide lawful and appropriate assistance in the investment decision-making process, such as research reports and analytical software. Overhead items — salaries, rent, computer hardware and marketing expenses — fall outside the safe harbor and must be paid from the adviser's own resources.",
    difficulty: 'hard',
  },
  {
    id: 255,
    topic: 'advisory-contracts-fees',
    q: 'Under the SEC Marketing Rule, an adviser that pays a third-party promoter more than $1,000 during a twelve-month period to refer clients:',
    choices: [
      'May do so, provided there is a written agreement with the promoter, disclosure of the compensation and material conflicts is made at the time of the endorsement, and the adviser oversees the promoter for compliance',
      'May do so only if the promoter is registered as an investment adviser representative in every state where referred clients reside',
      'May do so only where the referral fee is paid by the client rather than by the adviser',
      'May not do so, because compensating anyone for testimonials or client referrals is prohibited',
    ],
    answer: 0,
    exp: 'The Marketing Rule replaced the former advertising and cash solicitation rules and permits paid testimonials and endorsements. Above the $1,000 de minimis, the adviser needs a written agreement with the promoter, clear and prominent disclosure of the paid status and material conflicts delivered at the time of the endorsement, and oversight of compliance; disqualified persons may not be compensated as promoters.',
    difficulty: 'medium',
  },
];
