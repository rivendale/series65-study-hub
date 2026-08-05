export interface Topic {
  id: string;
  title: string;
  weight: string;
  order: number;
  summary: string;
  body: string;
  pitfalls: string[];
  keyTerms: { term: string; definition: string }[];
  /** Optional pairs of easily-confused concepts. */
  confusions?: { dont: string; with: string }[];
  /** Formulas worth memorizing for this topic. */
  formulas?: { name: string; formula: string; note?: string }[];
}

import { topic as t_business_cycles } from './topics/business-cycles';
import { topic as t_monetary_fiscal_policy } from './topics/monetary-fiscal-policy';
import { topic as t_interest_rates_inflation } from './topics/interest-rates-inflation';
import { topic as t_financial_statements } from './topics/financial-statements';
import { topic as t_financial_ratios } from './topics/financial-ratios';
import { topic as t_quantitative_methods } from './topics/quantitative-methods';
import { topic as t_cash_equivalents } from './topics/cash-equivalents';
import { topic as t_equity_securities } from './topics/equity-securities';
import { topic as t_fixed_income_basics } from './topics/fixed-income-basics';
import { topic as t_bond_pricing_yields } from './topics/bond-pricing-yields';
import { topic as t_pooled_investments } from './topics/pooled-investments';
import { topic as t_etfs_closed_end } from './topics/etfs-closed-end';
import { topic as t_derivatives } from './topics/derivatives';
import { topic as t_insurance_annuities } from './topics/insurance-annuities';
import { topic as t_alternative_investments } from './topics/alternative-investments';
import { topic as t_client_profiling } from './topics/client-profiling';
import { topic as t_types_of_clients } from './topics/types-of-clients';
import { topic as t_capital_market_theory } from './topics/capital-market-theory';
import { topic as t_risk_types } from './topics/risk-types';
import { topic as t_portfolio_strategies } from './topics/portfolio-strategies';
import { topic as t_performance_measurement } from './topics/performance-measurement';
import { topic as t_investment_taxation } from './topics/investment-taxation';
import { topic as t_retirement_plans } from './topics/retirement-plans';
import { topic as t_erisa_fiduciary } from './topics/erisa-fiduciary';
import { topic as t_education_accounts } from './topics/education-accounts';
import { topic as t_estate_gift_basics } from './topics/estate-gift-basics';
import { topic as t_trading_mechanics } from './topics/trading-mechanics';
import { topic as t_ia_iar_registration } from './topics/ia-iar-registration';
import { topic as t_bd_agent_registration } from './topics/bd-agent-registration';
import { topic as t_securities_registration } from './topics/securities-registration';
import { topic as t_exempt_securities_transactions } from './topics/exempt-securities-transactions';
import { topic as t_fiduciary_standards } from './topics/fiduciary-standards';
import { topic as t_advisory_contracts_fees } from './topics/advisory-contracts-fees';
import { topic as t_custody_safekeeping } from './topics/custody-safekeeping';
import { topic as t_unethical_practices } from './topics/unethical-practices';
import { topic as t_anti_fraud } from './topics/anti-fraud';
import { topic as t_administrative_oversight } from './topics/administrative-oversight';
import { topic as t_communications_marketing } from './topics/communications-marketing';
import { topic as t_cybersecurity_privacy } from './topics/cybersecurity-privacy';
import { topic as t_cfp_planning_process } from './topics/cfp-planning-process';
import { topic as t_cfp_insurance_planning } from './topics/cfp-insurance-planning';
import { topic as t_cfp_tax_planning } from './topics/cfp-tax-planning';
import { topic as t_cfp_retirement_planning } from './topics/cfp-retirement-planning';
import { topic as t_cfp_estate_planning } from './topics/cfp-estate-planning';
import { topic as t_cfp_education_planning } from './topics/cfp-education-planning';
import { topic as t_advisor_practice_skills } from './topics/advisor-practice-skills';

export const topics: Topic[] = [
  t_business_cycles,
  t_monetary_fiscal_policy,
  t_interest_rates_inflation,
  t_financial_statements,
  t_financial_ratios,
  t_quantitative_methods,
  t_cash_equivalents,
  t_equity_securities,
  t_fixed_income_basics,
  t_bond_pricing_yields,
  t_pooled_investments,
  t_etfs_closed_end,
  t_derivatives,
  t_insurance_annuities,
  t_alternative_investments,
  t_client_profiling,
  t_types_of_clients,
  t_capital_market_theory,
  t_risk_types,
  t_portfolio_strategies,
  t_performance_measurement,
  t_investment_taxation,
  t_retirement_plans,
  t_erisa_fiduciary,
  t_education_accounts,
  t_estate_gift_basics,
  t_trading_mechanics,
  t_ia_iar_registration,
  t_bd_agent_registration,
  t_securities_registration,
  t_exempt_securities_transactions,
  t_fiduciary_standards,
  t_advisory_contracts_fees,
  t_custody_safekeeping,
  t_unethical_practices,
  t_anti_fraud,
  t_administrative_oversight,
  t_communications_marketing,
  t_cybersecurity_privacy,
  t_cfp_planning_process,
  t_cfp_insurance_planning,
  t_cfp_tax_planning,
  t_cfp_retirement_planning,
  t_cfp_estate_planning,
  t_cfp_education_planning,
  t_advisor_practice_skills,
];
