import type { Question } from '../questions';

export const items: Question[] = [
  {
    id: 293,
    topic: 'communications-marketing',
    q: 'A registered investment adviser posts a video in which a satisfied client describes her experience with the firm. Under the SEC Marketing Rule, this is:',
    choices: [
      'Prohibited, because testimonials by clients remain banned',
      'Permitted only if the client is compensated and the compensation is disclosed',
      'Permitted, subject to clear and prominent disclosure of client status and whether compensation was paid, disclosure of material conflicts, adviser oversight, and a written agreement if the promoter is compensated above the de minimis amount',
      'Permitted without conditions, because the client spoke voluntarily',
    ],
    answer: 2,
    exp: "The Marketing Rule, effective November 4, 2022, replaced the old blanket prohibition and permits testimonials and endorsements with conditions: clear and prominent disclosure of whether the speaker is a client and whether compensation was paid, disclosure of material conflicts, adviser oversight and compliance with the rule, and a written agreement with compensated promoters above the de minimis threshold. Disqualified persons may not be compensated promoters.",
    difficulty: 'medium',
  },
  {
    id: 294,
    topic: 'communications-marketing',
    q: 'An adviser advertisement displays a five-year gross return of 11.4% in large type, with net-of-fee returns shown in a footnote in six-point type. This presentation:',
    choices: [
      'Complies, because gross performance is the industry standard for institutional presentations',
      'Violates the rule only if the advertisement is directed at retail investors',
      'Complies, because the net figures are disclosed somewhere in the advertisement',
      'Violates the Marketing Rule, because net performance must be presented with at least equal prominence to and in a format designed to facilitate comparison with gross performance',
    ],
    answer: 3,
    exp: "The Marketing Rule prohibits presenting gross performance unless net performance is shown with at least equal prominence, in a format facilitating comparison, and calculated over the same time period using the same methodology. Burying net returns in a footnote fails the equal-prominence requirement for any audience.",
    difficulty: 'medium',
  },
  {
    id: 295,
    topic: 'communications-marketing',
    q: 'Which of the following would NOT be considered an advertisement under the Marketing Rule?',
    choices: [
      'A compensated endorsement by a third party describing the adviser services',
      'A mass email offering new advisory services to existing clients',
      'A firm social media page describing the adviser services to prospective clients',
      'An extemporaneous live oral communication that is not broadcast on radio, television, or similar medium',
    ],
    answer: 3,
    exp: "The rule expressly excludes extemporaneous live oral communications that are not broadcast. Compensated testimonials and endorsements fall within the second prong of the definition, and communications offering new advisory services to existing clients are within the first prong.",
    difficulty: 'hard',
  },
  {
    id: 296,
    topic: 'communications-marketing',
    q: 'An adviser wishes to describe past specific recommendations in a client newsletter. Under the Marketing Rule, the adviser must:',
    choices: [
      'Present the recommendations in a manner that is fair and balanced, which generally means not cherry-picking only profitable picks',
      'Present only the five most profitable recommendations of the past year',
      'Obtain prior approval of the newsletter from the state Administrator',
      'Avoid naming any specific security under all circumstances',
    ],
    answer: 0,
    exp: "The general prohibitions require advertisements to be fair and balanced and to avoid material omissions or misleading inferences, so an adviser cannot show only its winners. Extracted performance and case studies must be accompanied by the context needed to evaluate them; neither prior Administrator approval nor an absolute ban on naming securities applies.",
    difficulty: 'medium',
  },
  {
    id: 297,
    topic: 'communications-marketing',
    q: 'Which of the following statements about adviser books and records is accurate?\n\nI. Advertisements and the records supporting performance claims must generally be retained for five years\nII. Records must be kept in an easily accessible place, with the first two years in an appropriate office of the adviser\nIII. Business-related messages sent through a representative personal texting app are outside the recordkeeping requirements\nIV. Written client complaints and their resolution must be retained',
    choices: [
      'I and IV only',
      'I, II and IV only',
      'II and III only',
      'I, II, III and IV',
    ],
    answer: 1,
    exp: "The five-year retention period, with the first two years in an appropriate office, applies to advertisements, performance support, and complaint files. Off-channel business communications sent through personal apps are still firm records — regulators have brought numerous enforcement actions over exactly this failure.",
    difficulty: 'medium',
  },
];
