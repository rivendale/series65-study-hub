// Series 65 exam structure per NASAA, current as of 2026.
// 140 questions delivered: 130 scored + 10 unscored pretest items
// distributed randomly and unidentified. 180-minute window.
// Pass = 94 of 130 scored (72%).

export const examInfo = {
  name: 'Series 65',
  fullName: 'Uniform Investment Adviser Law Examination',
  totalQuestions: 140,
  scoredQuestions: 130,
  pretestQuestions: 10,
  passingScore: 94,
  passPercentage: 72,
  timeMinutes: 180,
  retakeWaitDays: {
    afterFirstFail: 30,
    afterSecondFail: 30,
    afterThirdFail: 180,
  },
  enrollmentWindowDays: 120,
  testCenter: 'Prometric',
  sponsor: 'NASAA / FINRA-administered',
  developer: 'NASAA',
  contentRevisionDate: '2024-01-01',
  version: '1.0.0',
  // Series 65 has no prerequisite and no sponsorship requirement -
  // candidates may sit for it without broker-dealer affiliation.
  requiresSponsorship: false,
};
