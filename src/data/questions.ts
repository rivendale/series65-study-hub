export interface Question {
  id: number;
  topic: string;
  q: string;
  choices: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  exp: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

import { items as q_administrative_oversight } from './questions/administrative-oversight';
import { items as q_advisor_practice_skills } from './questions/advisor-practice-skills';
import { items as q_advisory_contracts_fees } from './questions/advisory-contracts-fees';
import { items as q_alternative_investments } from './questions/alternative-investments';
import { items as q_anti_fraud } from './questions/anti-fraud';
import { items as q_bd_agent_registration } from './questions/bd-agent-registration';
import { items as q_bond_pricing_yields } from './questions/bond-pricing-yields';
import { items as q_business_cycles } from './questions/business-cycles';
import { items as q_capital_market_theory } from './questions/capital-market-theory';
import { items as q_cash_equivalents } from './questions/cash-equivalents';
import { items as q_cfp_education_planning } from './questions/cfp-education-planning';
import { items as q_cfp_estate_planning } from './questions/cfp-estate-planning';
import { items as q_cfp_insurance_planning } from './questions/cfp-insurance-planning';
import { items as q_cfp_planning_process } from './questions/cfp-planning-process';
import { items as q_cfp_retirement_planning } from './questions/cfp-retirement-planning';
import { items as q_cfp_tax_planning } from './questions/cfp-tax-planning';
import { items as q_client_profiling } from './questions/client-profiling';
import { items as q_communications_marketing } from './questions/communications-marketing';
import { items as q_custody_safekeeping } from './questions/custody-safekeeping';
import { items as q_cybersecurity_privacy } from './questions/cybersecurity-privacy';
import { items as q_derivatives } from './questions/derivatives';
import { items as q_education_accounts } from './questions/education-accounts';
import { items as q_equity_securities } from './questions/equity-securities';
import { items as q_erisa_fiduciary } from './questions/erisa-fiduciary';
import { items as q_estate_gift_basics } from './questions/estate-gift-basics';
import { items as q_etfs_closed_end } from './questions/etfs-closed-end';
import { items as q_exempt_securities_transactions } from './questions/exempt-securities-transactions';
import { items as q_fiduciary_standards } from './questions/fiduciary-standards';
import { items as q_financial_ratios } from './questions/financial-ratios';
import { items as q_financial_statements } from './questions/financial-statements';
import { items as q_fixed_income_basics } from './questions/fixed-income-basics';
import { items as q_ia_iar_registration } from './questions/ia-iar-registration';
import { items as q_insurance_annuities } from './questions/insurance-annuities';
import { items as q_interest_rates_inflation } from './questions/interest-rates-inflation';
import { items as q_investment_taxation } from './questions/investment-taxation';
import { items as q_monetary_fiscal_policy } from './questions/monetary-fiscal-policy';
import { items as q_performance_measurement } from './questions/performance-measurement';
import { items as q_pooled_investments } from './questions/pooled-investments';
import { items as q_portfolio_strategies } from './questions/portfolio-strategies';
import { items as q_quantitative_methods } from './questions/quantitative-methods';
import { items as q_retirement_plans } from './questions/retirement-plans';
import { items as q_risk_types } from './questions/risk-types';
import { items as q_securities_registration } from './questions/securities-registration';
import { items as q_trading_mechanics } from './questions/trading-mechanics';
import { items as q_types_of_clients } from './questions/types-of-clients';
import { items as q_unethical_practices } from './questions/unethical-practices';

export const questions: Question[] = [
  ...q_administrative_oversight,
  ...q_advisor_practice_skills,
  ...q_advisory_contracts_fees,
  ...q_alternative_investments,
  ...q_anti_fraud,
  ...q_bd_agent_registration,
  ...q_bond_pricing_yields,
  ...q_business_cycles,
  ...q_capital_market_theory,
  ...q_cash_equivalents,
  ...q_cfp_education_planning,
  ...q_cfp_estate_planning,
  ...q_cfp_insurance_planning,
  ...q_cfp_planning_process,
  ...q_cfp_retirement_planning,
  ...q_cfp_tax_planning,
  ...q_client_profiling,
  ...q_communications_marketing,
  ...q_custody_safekeeping,
  ...q_cybersecurity_privacy,
  ...q_derivatives,
  ...q_education_accounts,
  ...q_equity_securities,
  ...q_erisa_fiduciary,
  ...q_estate_gift_basics,
  ...q_etfs_closed_end,
  ...q_exempt_securities_transactions,
  ...q_fiduciary_standards,
  ...q_financial_ratios,
  ...q_financial_statements,
  ...q_fixed_income_basics,
  ...q_ia_iar_registration,
  ...q_insurance_annuities,
  ...q_interest_rates_inflation,
  ...q_investment_taxation,
  ...q_monetary_fiscal_policy,
  ...q_performance_measurement,
  ...q_pooled_investments,
  ...q_portfolio_strategies,
  ...q_quantitative_methods,
  ...q_retirement_plans,
  ...q_risk_types,
  ...q_securities_registration,
  ...q_trading_mechanics,
  ...q_types_of_clients,
  ...q_unethical_practices,
];
