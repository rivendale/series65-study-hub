/**
 * Topic -> YouTube video id.
 *
 * NotebookLM turns each file in `notebooklm/` into a video overview; the video
 * is uploaded to YouTube and its id goes here. Null means no video yet, and the
 * player simply does not render -- a missing video must never look like a broken
 * one, because 46 of these will be null for a long time.
 *
 * Regenerate the source files with scripts/export-notebooklm.mjs. That script
 * rewrites tables into sentences that carry their own column headings, because
 * NotebookLM narrates a table as a stream of cell values with the headings gone.
 */
export const topicVideos: Record<string, string | null> = {
  'business-cycles': null,
  'monetary-fiscal-policy': null,
  'interest-rates-inflation': null,
  'financial-statements': null,
  'financial-ratios': null,
  'quantitative-methods': null,
  'cash-equivalents': null,
  'equity-securities': null,
  'fixed-income-basics': null,
  'bond-pricing-yields': null,
  'pooled-investments': null,
  'etfs-closed-end': null,
  'derivatives': null,
  'insurance-annuities': null,
  'alternative-investments': null,
  'client-profiling': null,
  'types-of-clients': null,
  'capital-market-theory': null,
  'risk-types': null,
  'portfolio-strategies': null,
  'performance-measurement': null,
  'investment-taxation': null,
  'retirement-plans': null,
  'erisa-fiduciary': null,
  'education-accounts': null,
  'estate-gift-basics': null,
  'trading-mechanics': null,
  'ia-iar-registration': null,
  'bd-agent-registration': null,
  'securities-registration': null,
  'exempt-securities-transactions': null,
  'fiduciary-standards': null,
  'advisory-contracts-fees': null,
  'custody-safekeeping': null,
  'unethical-practices': null,
  'anti-fraud': null,
  'administrative-oversight': null,
  'communications-marketing': null,
  'cybersecurity-privacy': null,
  'cfp-planning-process': null,
  'cfp-insurance-planning': null,
  'cfp-tax-planning': null,
  'cfp-retirement-planning': null,
  'cfp-estate-planning': null,
  'cfp-education-planning': null,
  'advisor-practice-skills': null,
};

export function videoFor(topicId: string): string | null {
  return topicVideos[topicId] ?? null;
}
