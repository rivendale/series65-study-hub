/**
 * Items flagged for review by a licensed professional.
 *
 * Everything here was written from public sources and is internally consistent,
 * but each entry is a place where an agent writing or auditing the content was
 * not certain enough to assert it flatly — sources disagree, a figure is
 * indexed, a rule varies by adopting state, or competent practitioners would
 * reasonably differ.
 *
 * This file is the single source of truth for both the in-app review page and
 * REVIEW.md, so the two cannot drift apart.
 *
 * When an item is resolved, set `status` to 'confirmed' or 'corrected' and fill
 * in `resolution`. If the resolution changes a rule, check `questionIds` — the
 * whole reason this list exists is that an error in a chapter propagates into
 * every question written from it.
 */

export type ReviewCategory =
  | 'source-disagreement'
  | 'indexed-figure'
  | 'state-variation'
  | 'contested-judgment'
  | 'scope-nuance';

export type ReviewStatus = 'open' | 'confirmed' | 'corrected';

export interface ReviewItem {
  id: string;
  /** Curriculum topic id, for linking to the chapter. */
  topic: string;
  title: string;
  category: ReviewCategory;
  status: ReviewStatus;
  /** What the app currently tells the student. */
  asserted: string;
  /** Why this was flagged rather than stated flatly. */
  concern: string;
  /** The specific thing to check. */
  verify: string;
  /** Question ids that would need changing if the rule turns out to be wrong. */
  questionIds?: number[];
  /** Filled in once reviewed. */
  resolution?: string;
}

export const REVIEW_CATEGORY_LABELS: Record<ReviewCategory, string> = {
  'source-disagreement': 'Sources disagree',
  'indexed-figure': 'Inflation-indexed figure',
  'state-variation': 'Varies by state',
  'contested-judgment': 'Reasonable advisors differ',
  'scope-nuance': 'Scope or nuance',
};

export const REVIEW_CATEGORY_NOTES: Record<ReviewCategory, string> = {
  'source-disagreement':
    'Study material and primary sources give different answers. The app picked the better-supported one and says so, but it is worth confirming which is tested.',
  'indexed-figure':
    'The figure changes with inflation. The app avoids asserting a current number, supplying it as a scenario given instead. Confirm the treatment reads correctly for this year.',
  'state-variation':
    'The Uniform Securities Act is model legislation and adopting states differ. The app describes the structure rather than pinning a national number.',
  'contested-judgment':
    'There is no single correct answer, only a defensible one. Confirm the keyed answer matches how you would actually advise.',
  'scope-nuance':
    'The rule is right but its boundary is easy to state too broadly or too narrowly.',
};

export const reviewItems: ReviewItem[] = [
  /* ---------------------------------------------------------------- */
  /* Registration and adviser status                                   */
  /* ---------------------------------------------------------------- */
  {
    id: 'adv-w-timing',
    topic: 'ia-iar-registration',
    title: 'Form ADV-W effective timing',
    category: 'source-disagreement',
    status: 'corrected',
    asserted:
      'Withdrawal is not immediate, a pending proceeding suspends it, and the Administrator retains jurisdiction for one year. No day count is asserted.',
    concern:
      'Two agents independently flagged this. The model act sets 30 days for a state withdrawal; the SEC rule governing a federal covered adviser is longer, and study material commonly cites 60. An earlier version of question 545 forced the 60-day answer while pairing 30 days with a wrong five-year jurisdiction, so the model-act-correct combination was not among the choices.',
    verify:
      'Confirm the one-year retained jurisdiction is the durable tested point, and whether the exam expects a specific day count for a state withdrawal.',
    questionIds: [545],
    resolution:
      'Question rewritten to test retained jurisdiction and the suspending effect of a pending proceeding, with the waiting period described as varying by source.',
  },
  {
    id: 'pension-consultant-threshold',
    topic: 'ia-iar-registration',
    title: 'Pension consultant SEC registration threshold',
    category: 'scope-nuance',
    status: 'confirmed',
    asserted:
      'A pension consultant with $200M or more in plan assets under advisement may elect SEC registration.',
    concern:
      'Stated as an election under SEC Rule 203A-2(a) rather than a mandate. The figure and the elective framing both come from the rule, but study material sometimes presents it as compulsory.',
    verify: 'Confirm the threshold and that the exam treats it as elective.',
    questionIds: [533],
    resolution:
      'Verified against 17 CFR 275.203A-2(a). The $200,000,000 figure is correct, counting only the portion of plan assets on which the adviser advises. The rule is titled "Exemptions from prohibition on Commission registration" — it lifts the §203A bar rather than imposing a duty, so the elective framing is right. A compliance vendor guide read during verification stated it as "must register with the SEC", which is precisely the misreading this item anticipated. No content change.',
  },
  {
    id: 'issuer-rep-exclusion',
    topic: 'bd-agent-registration',
    title: 'Issuer-representative exclusion and the no-commission condition',
    category: 'scope-nuance',
    status: 'confirmed',
    asserted:
      'Under USA section 401(b) an individual representing an issuer in exempt securities falls outside the agent definition regardless of commission; the no-remuneration condition attaches specifically to the employees, partners and directors branch.',
    concern:
      'The branches are commonly collapsed in study material into a blanket "no commission" rule, which would make the app disagree with a candidate\'s other materials.',
    verify: 'Confirm which branch the no-remuneration condition actually modifies.',
    questionIds: [559, 560],
    resolution:
      'Verified against the 2002 Uniform Securities Act text. The exclusion for an individual representing an issuer runs to exempt securities, exempt transactions, and federal covered securities with no compensation condition attached; the "no commission or other remuneration for soliciting" condition modifies only the separate branch covering transactions with the issuer\'s existing employees, partners and directors. The app reads the statute correctly and the collapsed blanket version is the error. No content change.',
  },
  {
    id: 'dual-registration',
    topic: 'bd-agent-registration',
    title: 'Dual registration as agent and IAR',
    category: 'state-variation',
    status: 'open',
    asserted: 'Framed as permitted at state discretion rather than as a uniform national rule.',
    concern: 'Practice varies by state and the exam may expect a single answer.',
    verify: 'Confirm whether the exam treats dual registration as generally permitted.',
    questionIds: [565],
  },
  {
    id: 'net-worth-bonding',
    topic: 'ia-iar-registration',
    title: 'Minimum net worth and bonding amounts',
    category: 'state-variation',
    status: 'open',
    asserted:
      'Described as set by state rule and tiered by risk — custody, discretion, prepayment — with a next-business-day notice duty when net worth falls below the minimum. No national dollar figure.',
    concern:
      'Candidates often memorise specific figures from a single state. Confirm the notice duty is the durable tested point.',
    verify: 'Confirm the notice obligation and its timing as the exam states it.',
    questionIds: [546, 547, 571],
  },

  /* ---------------------------------------------------------------- */
  /* Thresholds and indexed figures                                    */
  /* ---------------------------------------------------------------- */
  {
    id: 'accredited-qualified-purchaser',
    topic: 'alternative-investments',
    title: 'Accredited investor and qualified purchaser qualification routes',
    category: 'scope-nuance',
    status: 'corrected',
    asserted:
      'The dollar tests: $1M net worth excluding primary residence, $200,000 individual or $300,000 joint income for accredited investor; $5M in investments for qualified purchaser. Plus the non-financial routes added in 2020.',
    concern:
      'An auditor flagged this deliberately rather than editing it. The dollar tests are statutory and stable, but the qualification routes were amended in 2020 to add professional certifications and knowledgeable employees, and the app may state the routes too narrowly.',
    verify:
      'Confirm the current qualification routes, not just the dollar tests, and whether the exam tests the non-financial routes.',
    resolution:
      'The auditor was right to flag it. The dollar tests were verified unchanged, but the chapter disposed of the 2020 amendments in five words ("with additional professional-credential paths") without naming them. Now stated in full: an individual qualifies by holding the Series 7, Series 65, or Series 82 in good standing, or as a knowledgeable employee of the fund making the offering, and the amendments widened the routes without moving the dollar tests. A pitfall was added because "only net worth or income can qualify an individual" is now an affirmatively wrong answer. Worth Colleen knowing directly: passing the Series 65 and registering as an IAR makes her an accredited investor on credential alone.',
  },
  {
    id: 'qualified-client',
    topic: 'advisory-contracts-fees',
    title: 'Qualified client thresholds',
    category: 'indexed-figure',
    status: 'corrected',
    asserted:
      '$1.4M assets under management with the adviser, or $2.7M net worth excluding primary residence, indexed and tested at contract inception, with existing contracts grandfathered when the thresholds rise.',
    concern: 'The SEC adjusts these by order. A stale figure would be wrong rather than merely dated.',
    verify: 'Confirm the current figures and that "tested at inception" is right.',
    questionIds: [253, 594, 1083],
    resolution:
      'The concern was justified and the figures were stale. An SEC order effective June 29, 2026 raised the thresholds from $1.1M/$2.2M to $1.4M/$2.7M, with contracts already in place grandfathered. Corrected in the chapter body, pitfalls, key terms, the cheat sheet and CLAUDE.md, and in questions 253, 594 and 1083. Two knock-on fixes the figure swap alone would have missed: the worked example offered "$1.2M under management" as a permissible variant, which no longer clears the new threshold and is now $1.5M, and the same example gave the client a $1.6M net worth that had been $1.4M — numerically identical to the new AUM threshold and needlessly confusing. "Tested at inception" is confirmed, and the grandfathering in the order is a clean illustration of it.',
  },
  {
    id: 'reg-a-tier-2',
    topic: 'securities-registration',
    title: 'Regulation A+ Tier 2 offering cap',
    category: 'indexed-figure',
    status: 'corrected',
    asserted: 'Tier 1 capped at $20M and Tier 2 at $75M in a 12-month period, with the preemption structure flagged as the durable point.',
    concern: 'The cap has been raised more than once. Deliberately omitted rather than risk a stale number.',
    verify: 'Decide whether the current cap is worth stating, given it may change again.',
    questionIds: [618],
    resolution:
      'The premise was partly wrong: the chapter body did already state $75M, so only question 618 was hedging. Verified that $75M has been the Tier 2 cap since the March 2021 amendments and is unchanged as of August 2026; Tier 1 remains $20M. Both figures are now stated in question 618 alongside a note that increases have been proposed, so a student meets the number without being taught to trust it permanently. Worth re-checking if the pending Regulation A+ Improvement Act (which would double Tier 2 to $150M) becomes law.',
  },
  {
    id: 'private-placement-limit',
    topic: 'exempt-securities-transactions',
    title: 'State private placement purchaser limit',
    category: 'state-variation',
    status: 'open',
    asserted: 'Ten non-institutional purchasers in twelve months, per the model act.',
    concern: 'Adopting states vary. The app states the model-act number.',
    verify: 'Confirm the model-act figure is what the exam tests.',
    questionIds: [241],
  },
  {
    id: 'trust-indenture-threshold',
    topic: 'fixed-income-basics',
    title: 'Trust Indenture Act dollar threshold',
    category: 'indexed-figure',
    status: 'confirmed',
    asserted: 'Left as "a stated dollar threshold" rather than a number.',
    concern: 'Deliberately vague. May be worth stating if the exam tests it.',
    verify: 'Decide whether to state the figure.',
    resolution:
      'Verified for the record: TIA §304(a)(9) and Rule 4a-3 exempt indentures limited to $10,000,000 aggregate principal outstanding, measured over a rolling 36-month period from the initial offering — not the 12 months one would assume by analogy to the other offering caps. Treatment deliberately left qualitative, because this sits well below Series 65 depth and the 36-month measurement is more likely to mislead than help at this level. Recorded here so the next contributor does not have to re-derive it.',
  },

  /* ---------------------------------------------------------------- */
  /* Retirement, tax and benefits                                      */
  /* ---------------------------------------------------------------- */
  {
    id: 'erisa-ltpt',
    topic: 'erisa-fiduciary',
    title: 'ERISA long-term part-time employee eligibility',
    category: 'source-disagreement',
    status: 'corrected',
    asserted:
      'Two consecutive years of at least 500 hours, age 21, effective for plan years beginning in 2025 and extended to ERISA-covered 403(b) plans. The duty reaches elective deferrals only.',
    concern:
      'SECURE 2.0 reduced the SECURE 1.0 three-year rule to two years, and the 403(b) application has had regulatory churn. Written vaguely on purpose.',
    verify: 'Confirm the current year count and whether it reads correctly for a 2026 candidate.',
    questionIds: [502],
    resolution:
      'The churn has settled, so the vagueness is no longer earning its keep. Confirmed: SECURE 2.0 cut the count from three consecutive years to two, effective for plan years beginning in 2025, and ERISA-covered 403(b) plans are in scope. Now stated concretely in the chapter and in question 502, whose correct choice previously read "a shorter period of consecutive years of limited hours" — true but untestable. Added the boundary that the obligation covers elective deferrals only; an employer may extend match or nonelective contributions but is not required to.',
  },
  {
    id: 'coverdell-excise',
    topic: 'education-accounts',
    title: 'Coverdell excess contribution excise tax',
    category: 'scope-nuance',
    status: 'open',
    asserted: 'A 6% excise under IRC section 4973 on excess contributions.',
    concern:
      'The rate is right. The framing — whether the excess is attributable to the over-contribution as a whole or to a specific contributor — is the uncertain part.',
    verify: 'Confirm the attribution framing.',
    questionIds: [505],
  },
  {
    id: '457b-penalty',
    topic: 'retirement-plans',
    title: 'Governmental versus tax-exempt 457(b) early withdrawal',
    category: 'scope-nuance',
    status: 'corrected',
    asserted:
      'The absence of a 10% early withdrawal penalty is scoped to governmental 457(b) plans, with the tax-exempt "top hat" variety described separately.',
    concern:
      'Tax-exempt employer 457(b) plans behave differently, and study material often states the exemption without the qualifier. The distinction may deserve more prominence.',
    verify: 'Confirm the scoping and whether the exam draws the distinction.',
    questionIds: [484],
    resolution:
      'The scoping was only half applied — exactly the failure mode this manifest exists to catch. The chapter\'s comparison section correctly said "governmental 457(b)", but the plan-type list forty lines earlier named both employer types and then asserted the no-penalty feature unqualified. Fixed, and the tax-exempt top-hat plan is now described on its own terms: assets subject to the employer\'s creditors, distributions generally only at separation, no rollover to an IRA. Question 484 was already correctly scoped in its stem; its explanation now adds the two boundaries on the exemption — amounts rolled IN from a 401(k) or IRA keep their own penalty treatment, and rolling the balance OUT to an IRA surrenders the advantage.',
  },
  {
    id: '529-conditions',
    topic: 'education-accounts',
    title: '529-to-Roth rollover conditions',
    category: 'indexed-figure',
    status: 'corrected',
    asserted:
      'Fifteen-year account seasoning, a five-year lookback on contributions, and a $35,000 lifetime cap per beneficiary that is not indexed.',
    concern: 'The cap is statutory but may be indexed. Stated qualitatively to avoid going stale.',
    verify: 'Confirm the conditions and whether the cap should be named.',
    questionIds: [503, 509],
    resolution:
      'The caution was unnecessary: the $35,000 cap SECURE 2.0 set is a flat statutory figure with no indexing provision, and it has not moved in the three years since. Now named in the chapter, the pitfall, and question 509. The 15-year seasoning and 5-year lookback were both verified as stated. Added the practical consequence that because the annual IRA limit also binds, moving the full $35,000 takes several years — students read the cap as a one-time transfer amount.',
  },
  {
    id: 'muni-de-minimis',
    topic: 'fixed-income-basics',
    title: 'Municipal bond de minimis rule',
    category: 'scope-nuance',
    status: 'open',
    asserted:
      'A quarter point per full year to maturity, framed as a discount amount in one chapter and as a price in another, reaching the same result.',
    concern:
      'An auditor confirmed the two framings agree. Worth a second look that both are stated in a way a candidate will recognise.',
    verify: 'Confirm both framings are correct and consistently presented.',
  },

  /* ---------------------------------------------------------------- */
  /* Conduct, custody and enforcement                                  */
  /* ---------------------------------------------------------------- */
  {
    id: 'sloa-custody',
    topic: 'custody-safekeeping',
    title: 'Standing letter of authorization and custody relief',
    category: 'state-variation',
    status: 'confirmed',
    asserted:
      'The surprise-examination relief conditions are described as resting on SEC staff no-action relief, with state treatment noted as varying.',
    concern:
      'This is staff relief rather than a rule, and states do not treat standing letters uniformly.',
    verify: 'Confirm the conditions and how your state treats standing letters.',
    questionIds: [649, 1085],
    resolution:
      'Federal framing verified: the Investment Adviser Association no-action letter dated February 21, 2017 sets seven conditions, and the relief is narrower than it is often described. The adviser still HAS custody under Rule 206(4)-2; what the letter withholds is an enforcement recommendation over the missing surprise examination, and failing any one of the seven conditions restores the exam requirement. The app states this correctly, so no content change. The state half is left to you as a practice question rather than a lookup: the letter binds no state administrator, and how your own state treats a standing letter is something you would know better than a source search.',
  },
  {
    id: 'criminal-penalties',
    topic: 'administrative-oversight',
    title: 'Criminal penalties and statute of limitations',
    category: 'state-variation',
    status: 'corrected',
    asserted:
      'The $5,000 fine and three-year imprisonment maximum are labelled as model-act figures, with adopting states noted as setting their own.',
    concern:
      'An earlier version asserted these as national figures, contradicting another question that correctly said they vary. Both were reconciled.',
    verify: 'Confirm the model-act figures and how your state differs.',
    questionIds: [286, 673],
    resolution:
      'Question 286 rescoped to the model act and its explanation now notes that adopting states set higher fines and different limitations periods.',
  },
  {
    id: 'felony-window',
    topic: 'administrative-oversight',
    title: 'Statutory disqualification lookback',
    category: 'state-variation',
    status: 'open',
    asserted:
      'Any felony within ten years, and securities-related misdemeanors with no time limit — the classic tested formulation.',
    concern:
      'The chapter itself notes many states apply a ten-year lookback to both. The questions stick to the tested version.',
    verify: 'Confirm which formulation the exam expects.',
    questionIds: [669],
  },
  {
    id: 'promoter-de-minimis',
    topic: 'communications-marketing',
    title: 'Marketing Rule promoter agreement de minimis',
    category: 'scope-nuance',
    status: 'confirmed',
    asserted:
      'A written promoter agreement is required above de minimis compensation, stated as $1,000 or its non-cash equivalent over the preceding twelve months, measured in aggregate.',
    concern: 'The threshold and its measurement period are worth confirming.',
    verify: 'Confirm the de minimis figure and period.',
    questionIds: [678],
    resolution:
      'Confirmed against Rule 206(4)-1: $1,000 or the equivalent value in non-cash compensation during the preceding twelve months, with the exception reaching only the written-agreement condition — disclosure and oversight apply at any amount, which the app already said. Added one point verification surfaced that the app was missing: the measurement is AGGREGATE across the twelve months, and SEC examiners have cited advisers who treated a series of sub-$1,000 payments as separately exempt when the total exceeded the threshold. That is a better distractor than the raw figure.',
  },
  {
    id: 'reg-sp-breach',
    topic: 'cybersecurity-privacy',
    title: 'Regulation S-P breach notification window',
    category: 'scope-nuance',
    status: 'confirmed',
    asserted:
      'A 30-day individual notification requirement under the amended rule, now fully in effect for all covered firms, with stricter state statutes applying on top.',
    concern: 'Compliance dates were tiered by firm size. Confirm the timing as it now stands.',
    verify: 'Confirm the window and whether it is fully in effect.',
    questionIds: [688, 298, 1102],
    resolution:
      'Both tiers are now live: December 3, 2025 for larger entities and June 3, 2026 for smaller ones, so as of this revision the amended rule binds every covered firm and should not be taught as forthcoming. The 30-day window is confirmed. Added the point that most often gets it wrong in practice — the clock runs from awareness that unauthorised access has occurred or is reasonably likely to have occurred, not from the close of the investigation, so a firm waiting on forensics before starting to count has already misread the rule.',
  },
  {
    id: 'form-crs-amendment',
    topic: 'advisory-contracts-fees',
    title: 'Form CRS amendment delivery timing',
    category: 'scope-nuance',
    status: 'corrected',
    asserted: 'Filed within 30 days of the information becoming materially inaccurate; changes delivered to existing retail clients within 60 days after that filing was required.',
    concern:
      'The filing window and the delivery window differ, and the agent declined to pin either.',
    verify: 'Confirm both windows and whether they are worth stating.',
    questionIds: [597],
    resolution:
      'Both windows confirmed and now stated: 30 days to file the amendment, 60 days after that filing was required to deliver the changes to existing retail clients, with changed text marked or a summary of material changes provided. The agent was right that they differ and wrong to hide the difference — that the two clocks are separate is the tested point, and "within the periods specified by the rule" taught nothing. Added to the chapter body, which had no coverage of amendment timing at all, as well as to question 597.',
  },
  {
    id: 'coordination-period',
    topic: 'securities-registration',
    title: 'Registration by coordination filing period',
    category: 'state-variation',
    status: 'corrected',
    asserted: 'Model act: registration statement on file at least ten days, pricing statement on file two full business days, no stop order in effect. Adopting states may lengthen the filing period.',
    concern: 'States vary and not all offer every registration method.',
    verify: 'Confirm the model-act period.',
    questionIds: [608, 609],
    resolution:
      'The model act is more specific than "ten to twenty days" suggested, and the vaguer phrasing was obscuring a testable condition. Verified: effectiveness is simultaneous with federal effectiveness provided the registration statement has been on file with the Administrator at least ten days, a statement of maximum and minimum proposed offering prices and maximum underwriting discounts has been on file two full business days, and no stop order is in effect or proceeding pending. All three now stated in the chapter and in question 608, with the note that adopting states may lengthen the filing period so a fact pattern giving a different number is not necessarily wrong.',
  },

  /* ---------------------------------------------------------------- */
  /* CFP track — judgment rather than rule                             */
  /* ---------------------------------------------------------------- */
  {
    id: 'cfp-social-security-delay',
    topic: 'cfp-retirement-planning',
    title: 'Delaying Social Security to 70 for the higher earner',
    category: 'contested-judgment',
    status: 'open',
    asserted:
      'Keyed as the better course for a healthy couple with adequate bridge assets, with those facts stipulated in the stem.',
    concern:
      'Widely accepted, but a minority favour earlier claiming on breakeven or portfolio-return grounds.',
    verify: 'Confirm this matches how you would advise.',
    questionIds: [1019],
  },
  {
    id: 'cfp-pension-election',
    topic: 'cfp-retirement-planning',
    title: 'Joint and survivor versus pension maximization',
    category: 'contested-judgment',
    status: 'open',
    asserted:
      'Keyed toward joint and survivor unless a properly priced permanent policy genuinely covers the need. The distractor fails on "term" and "always" rather than on the strategy.',
    concern: 'Advisors who routinely run pension max would call the single-life election defensible.',
    verify: 'Confirm the keyed reasoning.',
    questionIds: [1024],
  },
  {
    id: 'cfp-annuity-sizing',
    topic: 'cfp-retirement-planning',
    title: 'Sizing an annuity to the essential-spending gap',
    category: 'contested-judgment',
    status: 'open',
    asserted:
      'Keyed as a process answer — quantify the gap, compare against cheaper alternatives — rather than a product recommendation.',
    concern: 'Some advisors would decline any annuity here; others would annuitize more.',
    verify: 'Confirm the process framing is the right answer to teach.',
    questionIds: [1004],
  },
  {
    id: 'cfp-asset-location',
    topic: 'cfp-tax-planning',
    title: 'Asset location ordering',
    category: 'contested-judgment',
    status: 'open',
    asserted:
      'High-yield in the IRA, growth in the Roth, with the explanation flagging that location is a bounded win.',
    concern: 'A real client\'s liquidity needs and horizon can override the standard ordering.',
    verify: 'Confirm the ordering and the caveat.',
    questionIds: [1008],
  },
  {
    id: 'cfp-mental-accounting',
    topic: 'advisor-practice-skills',
    title: 'Mental accounting against high-interest debt',
    category: 'contested-judgment',
    status: 'open',
    asserted:
      'The fuller answer — pay the guaranteed 19% while honouring the emotional label — is keyed over the purely quantitative one, whose flaw is that it lectures.',
    concern:
      'A purely quantitative advisor might prefer the other answer, which reaches the same destination.',
    verify: 'Confirm the keyed answer teaches the right instinct.',
    questionIds: [1049],
  },
  {
    id: 'cfp-widow-deferral',
    topic: 'advisor-practice-skills',
    title: 'Deferring irreversible decisions after a death',
    category: 'contested-judgment',
    status: 'open',
    asserted:
      'Keyed as deferring, with the stem stipulating that cash needs are covered for a year.',
    concern: 'Occasionally a relocation genuinely is urgent.',
    verify: 'Confirm the stipulation makes deferral clearly best.',
    questionIds: [1052],
  },

  /* ---------------------------------------------------------------- */
  /* Heuristics presented as heuristics                                */
  /* ---------------------------------------------------------------- */
  {
    id: 'withdrawal-heuristics',
    topic: 'cfp-retirement-planning',
    title: 'Safe withdrawal rate and replacement ratios',
    category: 'contested-judgment',
    status: 'open',
    asserted:
      'The 4% rule and wage replacement ratios are presented as starting heuristics with their assumptions named, not as settled fact.',
    concern: 'Both are actively contested in the profession.',
    verify: 'Confirm the framing is one you would stand behind with a client.',
    questionIds: [1016, 1018],
  },
];

export function reviewItemsByStatus(status: ReviewStatus): ReviewItem[] {
  return reviewItems.filter((i) => i.status === status);
}

export function reviewItemsByCategory(category: ReviewCategory): ReviewItem[] {
  return reviewItems.filter((i) => i.category === category);
}
