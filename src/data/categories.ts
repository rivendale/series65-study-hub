// Official NASAA Series 65 content outline.
// Four exam categories covering the 130 scored questions, plus a
// supplemental CFP / advisor-skills track that is NOT on the exam.

export type OfficialCategoryId =
  | 'economic-factors'
  | 'investment-vehicles'
  | 'client-recommendations'
  | 'laws-ethics'
  | 'cfp-advisor';

export interface OfficialCategory {
  id: OfficialCategoryId;
  name: string;
  shortName: string;
  questions: number;
  pct: number;
  onExam: boolean;
  blurb: string;
}

export const OFFICIAL_CATEGORIES: Record<OfficialCategoryId, OfficialCategory> = {
  'economic-factors': {
    id: 'economic-factors',
    name: 'Economic Factors and Business Information',
    shortName: 'Economics & Business',
    questions: 20,
    pct: 15,
    onExam: true,
    blurb:
      'Business cycles, monetary and fiscal policy, interest rates and inflation, financial statement analysis, and the quantitative methods used to evaluate investments.',
  },
  'investment-vehicles': {
    id: 'investment-vehicles',
    name: 'Investment Vehicle Characteristics',
    shortName: 'Investment Vehicles',
    questions: 32,
    pct: 25,
    onExam: true,
    blurb:
      'Equity and fixed-income securities, pooled vehicles, derivatives, insurance-based products, alternatives, and cash equivalents.',
  },
  'client-recommendations': {
    id: 'client-recommendations',
    name: 'Client Investment Recommendations and Strategies',
    shortName: 'Client Recommendations',
    questions: 39,
    pct: 30,
    onExam: true,
    blurb:
      'Client profiling and account types, portfolio theory, risk, performance measurement, taxation, retirement and education planning, estate basics, and trading mechanics.',
  },
  'laws-ethics': {
    id: 'laws-ethics',
    name:
      'Laws, Regulations, and Guidelines, including Prohibition on Unethical Business Practices',
    shortName: 'Laws & Ethics',
    questions: 39,
    pct: 30,
    onExam: true,
    blurb:
      'IA and IAR registration, fiduciary duty, advisory contracts and custody, anti-fraud, administrative oversight, communications, and cybersecurity.',
  },
  'cfp-advisor': {
    id: 'cfp-advisor',
    name: 'CFP Intro and Advisor Skills (supplemental)',
    shortName: 'CFP & Advisor Skills',
    questions: 0,
    pct: 0,
    onExam: false,
    blurb:
      'Not tested on the Series 65. An introduction to the CFP principal knowledge areas and the practical skills that make a great advisor: the planning process, insurance, tax, retirement, estate, education funding, behavioral finance, and client communication.',
  },
};

// Convenience: only the four scored exam categories, in blueprint order.
export const EXAM_CATEGORY_IDS: OfficialCategoryId[] = [
  'economic-factors',
  'investment-vehicles',
  'client-recommendations',
  'laws-ethics',
];

// Maps each study topic id to the category it belongs to.
// Mock-exam sampling and category-level progress reporting use this map.
export const TOPIC_TO_CATEGORY: Record<string, OfficialCategoryId> = {
  // --- Economic Factors and Business Information (15%) ---
  'business-cycles': 'economic-factors',
  'monetary-fiscal-policy': 'economic-factors',
  'interest-rates-inflation': 'economic-factors',
  'financial-statements': 'economic-factors',
  'financial-ratios': 'economic-factors',
  'quantitative-methods': 'economic-factors',

  // --- Investment Vehicle Characteristics (25%) ---
  'cash-equivalents': 'investment-vehicles',
  'equity-securities': 'investment-vehicles',
  'fixed-income-basics': 'investment-vehicles',
  'bond-pricing-yields': 'investment-vehicles',
  'pooled-investments': 'investment-vehicles',
  'etfs-closed-end': 'investment-vehicles',
  derivatives: 'investment-vehicles',
  'insurance-annuities': 'investment-vehicles',
  'alternative-investments': 'investment-vehicles',

  // --- Client Investment Recommendations and Strategies (30%) ---
  'client-profiling': 'client-recommendations',
  'types-of-clients': 'client-recommendations',
  'capital-market-theory': 'client-recommendations',
  'risk-types': 'client-recommendations',
  'portfolio-strategies': 'client-recommendations',
  'performance-measurement': 'client-recommendations',
  'investment-taxation': 'client-recommendations',
  'retirement-plans': 'client-recommendations',
  'erisa-fiduciary': 'client-recommendations',
  'education-accounts': 'client-recommendations',
  'estate-gift-basics': 'client-recommendations',
  'trading-mechanics': 'client-recommendations',

  // --- Laws, Regulations, Guidelines and Ethics (30%) ---
  'ia-iar-registration': 'laws-ethics',
  'bd-agent-registration': 'laws-ethics',
  'securities-registration': 'laws-ethics',
  'exempt-securities-transactions': 'laws-ethics',
  'fiduciary-standards': 'laws-ethics',
  'advisory-contracts-fees': 'laws-ethics',
  'custody-safekeeping': 'laws-ethics',
  'unethical-practices': 'laws-ethics',
  'anti-fraud': 'laws-ethics',
  'administrative-oversight': 'laws-ethics',
  'communications-marketing': 'laws-ethics',
  'cybersecurity-privacy': 'laws-ethics',

  // --- CFP Intro and Advisor Skills (supplemental, not on exam) ---
  'cfp-planning-process': 'cfp-advisor',
  'cfp-insurance-planning': 'cfp-advisor',
  'cfp-tax-planning': 'cfp-advisor',
  'cfp-retirement-planning': 'cfp-advisor',
  'cfp-estate-planning': 'cfp-advisor',
  'cfp-education-planning': 'cfp-advisor',
  'advisor-practice-skills': 'cfp-advisor',
};
