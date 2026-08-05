# Content review queue

The curriculum and question bank in this app are original work, written from public sources: the Uniform Securities Act model law, NASAA model rules and Statements of Policy, and the Investment Advisers Act of 1940 and the rules under it. The material is internally consistent — chapters agree with the questions written from them, and a figure is stated the same way everywhere it appears.

This file lists the places where internal consistency was not enough. Each entry marks a point where the writer or the auditor stopped short of asserting something flatly: sources disagree about what is actually tested, a figure is inflation-indexed and will drift, a rule varies by adopting state, or the answer is a matter of judgment on which competent advisors differ. **Nothing here is known to be wrong.** These are the points where certainty ran out, and where a licensed reviewer's judgment is worth more than another pass through the same public sources.

Each item states exactly what the app currently tells a student, why it was flagged rather than asserted, and the single specific thing to check. The intent is that a review is an hour or two of targeted checking rather than a re-read of the whole curriculum.

**29 items — 13 open, 6 confirmed, 10 corrected — across 17 chapters and 38 questions.**

| Category | Items | Open | What the category means |
|---|---:|---:|---|
| Sources disagree | 2 | 0 | Study material and primary sources give different answers. The app picked the better-supported one and says so, but it is worth confirming which is tested. |
| Inflation-indexed figure | 4 | 0 | The figure changes with inflation. The app avoids asserting a current number, supplying it as a scenario given instead. Confirm the treatment reads correctly for this year. |
| Varies by state | 7 | 4 | The Uniform Securities Act is model legislation and adopting states differ. The app describes the structure rather than pinning a national number. |
| Reasonable advisors differ | 7 | 7 | There is no single correct answer, only a defensible one. Confirm the keyed answer matches how you would actually advise. |
| Scope or nuance | 9 | 2 | The rule is right but its boundary is easy to state too broadly or too narrowly. |

*Generated from [`src/data/reviewItems.ts`](src/data/reviewItems.ts) by `npm run review:md`. Edit that file, not this one — the in-app `/review` page renders the same data, so the two cannot disagree.*

## Checklist

Paste this section into a GitHub issue or a PR body to track the review there; the boxes are live task-list syntax. Items already resolved are pre-ticked and listed for the record rather than for action.

**Sources disagree**

- [x] [Form ADV-W effective timing](#adv-w-timing) — Investment Adviser and IAR Registration · corrected, no action needed
- [x] [ERISA long-term part-time employee eligibility](#erisa-ltpt) — ERISA and Retirement Plan Fiduciary Rules · corrected, no action needed

**Inflation-indexed figure**

- [x] [Qualified client thresholds](#qualified-client) — Advisory Contracts, Fees, and Compensation · corrected, no action needed
- [x] [Regulation A+ Tier 2 offering cap](#reg-a-tier-2) — Registration of Securities · corrected, no action needed
- [x] [Trust Indenture Act dollar threshold](#trust-indenture-threshold) — Fixed-Income Securities · confirmed, no action needed
- [x] [529-to-Roth rollover conditions](#529-conditions) — Education and Special-Needs Accounts · corrected, no action needed

**Varies by state**

- [ ] [Dual registration as agent and IAR](#dual-registration) — Broker-Dealer and Agent Registration · Q565
- [ ] [Minimum net worth and bonding amounts](#net-worth-bonding) — Investment Adviser and IAR Registration · Q546, Q547, Q571
- [ ] [State private placement purchaser limit](#private-placement-limit) — Exempt Securities and Exempt Transactions · Q241
- [x] [Standing letter of authorization and custody relief](#sloa-custody) — Custody, Safekeeping, and Client Assets · confirmed, no action needed
- [x] [Criminal penalties and statute of limitations](#criminal-penalties) — Administrative Oversight, Remedies, and Penalties · corrected, no action needed
- [ ] [Statutory disqualification lookback](#felony-window) — Administrative Oversight, Remedies, and Penalties · Q669
- [x] [Registration by coordination filing period](#coordination-period) — Registration of Securities · corrected, no action needed

**Reasonable advisors differ**

- [ ] [Delaying Social Security to 70 for the higher earner](#cfp-social-security-delay) — Retirement Planning and Income Distribution · Q1019
- [ ] [Joint and survivor versus pension maximization](#cfp-pension-election) — Retirement Planning and Income Distribution · Q1024
- [ ] [Sizing an annuity to the essential-spending gap](#cfp-annuity-sizing) — Retirement Planning and Income Distribution · Q1004
- [ ] [Asset location ordering](#cfp-asset-location) — Tax Planning for Advisors · Q1008
- [ ] [Mental accounting against high-interest debt](#cfp-mental-accounting) — Advisor Practice Skills and Behavioral Finance · Q1049
- [ ] [Deferring irreversible decisions after a death](#cfp-widow-deferral) — Advisor Practice Skills and Behavioral Finance · Q1052
- [ ] [Safe withdrawal rate and replacement ratios](#withdrawal-heuristics) — Retirement Planning and Income Distribution · Q1016, Q1018

**Scope or nuance**

- [x] [Pension consultant SEC registration threshold](#pension-consultant-threshold) — Investment Adviser and IAR Registration · confirmed, no action needed
- [x] [Issuer-representative exclusion and the no-commission condition](#issuer-rep-exclusion) — Broker-Dealer and Agent Registration · confirmed, no action needed
- [x] [Accredited investor and qualified purchaser qualification routes](#accredited-qualified-purchaser) — Alternative Investments and Direct Participation · corrected, no action needed
- [ ] [Coverdell excess contribution excise tax](#coverdell-excise) — Education and Special-Needs Accounts · Q505
- [x] [Governmental versus tax-exempt 457(b) early withdrawal](#457b-penalty) — Retirement Plans and Accounts · corrected, no action needed
- [ ] [Municipal bond de minimis rule](#muni-de-minimis) — Fixed-Income Securities · chapter text only
- [x] [Marketing Rule promoter agreement de minimis](#promoter-de-minimis) — Communications, Advertising, and the Marketing Rule · confirmed, no action needed
- [x] [Regulation S-P breach notification window](#reg-sp-breach) — Cybersecurity, Privacy, and Business Continuity · confirmed, no action needed
- [x] [Form CRS amendment delivery timing](#form-crs-amendment) — Advisory Contracts, Fees, and Compensation · corrected, no action needed

## Sources disagree

> Study material and primary sources give different answers. The app picked the better-supported one and says so, but it is worth confirming which is tested.

<a id="adv-w-timing"></a>

### Form ADV-W effective timing

**Status:** Corrected · **Item id:** `adv-w-timing`

**Chapter:** [Investment Adviser and IAR Registration](src/data/topics/ia-iar-registration.ts) — topic id `ia-iar-registration` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/ia-iar-registration)

**The app asserts.** Withdrawal is not immediate, a pending proceeding suspends it, and the Administrator retains jurisdiction for one year. No day count is asserted.

**Why it is flagged.** Two agents independently flagged this. The model act sets 30 days for a state withdrawal; the SEC rule governing a federal covered adviser is longer, and study material commonly cites 60. An earlier version of question 545 forced the 60-day answer while pairing 30 days with a wrong five-year jurisdiction, so the model-act-correct combination was not among the choices.

**To verify.** Confirm the one-year retained jurisdiction is the durable tested point, and whether the exam expects a specific day count for a state withdrawal.

**Questions that change with it.** 545 in [`src/data/questions/ia-iar-registration.ts`](src/data/questions/ia-iar-registration.ts)

**Resolution.** Question rewritten to test retained jurisdiction and the suspending effect of a pending proceeding, with the waiting period described as varying by source.

<a id="erisa-ltpt"></a>

### ERISA long-term part-time employee eligibility

**Status:** Corrected · **Item id:** `erisa-ltpt`

**Chapter:** [ERISA and Retirement Plan Fiduciary Rules](src/data/topics/erisa-fiduciary.ts) — topic id `erisa-fiduciary` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/erisa-fiduciary)

**The app asserts.** Two consecutive years of at least 500 hours, age 21, effective for plan years beginning in 2025 and extended to ERISA-covered 403(b) plans. The duty reaches elective deferrals only.

**Why it is flagged.** SECURE 2.0 reduced the SECURE 1.0 three-year rule to two years, and the 403(b) application has had regulatory churn. Written vaguely on purpose.

**To verify.** Confirm the current year count and whether it reads correctly for a 2026 candidate.

**Questions that change with it.** 502 in [`src/data/questions/erisa-fiduciary.ts`](src/data/questions/erisa-fiduciary.ts)

**Resolution.** The churn has settled, so the vagueness is no longer earning its keep. Confirmed: SECURE 2.0 cut the count from three consecutive years to two, effective for plan years beginning in 2025, and ERISA-covered 403(b) plans are in scope. Now stated concretely in the chapter and in question 502, whose correct choice previously read "a shorter period of consecutive years of limited hours" — true but untestable. Added the boundary that the obligation covers elective deferrals only; an employer may extend match or nonelective contributions but is not required to.

## Inflation-indexed figure

> The figure changes with inflation. The app avoids asserting a current number, supplying it as a scenario given instead. Confirm the treatment reads correctly for this year.

<a id="qualified-client"></a>

### Qualified client thresholds

**Status:** Corrected · **Item id:** `qualified-client`

**Chapter:** [Advisory Contracts, Fees, and Compensation](src/data/topics/advisory-contracts-fees.ts) — topic id `advisory-contracts-fees` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/advisory-contracts-fees)

**The app asserts.** \$1.4M assets under management with the adviser, or \$2.7M net worth excluding primary residence, indexed and tested at contract inception, with existing contracts grandfathered when the thresholds rise.

**Why it is flagged.** The SEC adjusts these by order. A stale figure would be wrong rather than merely dated.

**To verify.** Confirm the current figures and that "tested at inception" is right.

**Questions that change with it.** 253, 594, 1083 in [`src/data/questions/advisory-contracts-fees.ts`](src/data/questions/advisory-contracts-fees.ts)

**Resolution.** The concern was justified and the figures were stale. An SEC order effective June 29, 2026 raised the thresholds from \$1.1M/\$2.2M to \$1.4M/\$2.7M, with contracts already in place grandfathered. Corrected in the chapter body, pitfalls, key terms, the cheat sheet and CLAUDE.md, and in questions 253, 594 and 1083. Two knock-on fixes the figure swap alone would have missed: the worked example offered "\$1.2M under management" as a permissible variant, which no longer clears the new threshold and is now \$1.5M, and the same example gave the client a \$1.6M net worth that had been \$1.4M — numerically identical to the new AUM threshold and needlessly confusing. "Tested at inception" is confirmed, and the grandfathering in the order is a clean illustration of it.

<a id="reg-a-tier-2"></a>

### Regulation A+ Tier 2 offering cap

**Status:** Corrected · **Item id:** `reg-a-tier-2`

**Chapter:** [Registration of Securities](src/data/topics/securities-registration.ts) — topic id `securities-registration` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/securities-registration)

**The app asserts.** Tier 1 capped at \$20M and Tier 2 at \$75M in a 12-month period, with the preemption structure flagged as the durable point.

**Why it is flagged.** The cap has been raised more than once. Deliberately omitted rather than risk a stale number.

**To verify.** Decide whether the current cap is worth stating, given it may change again.

**Questions that change with it.** 618 in [`src/data/questions/securities-registration.ts`](src/data/questions/securities-registration.ts)

**Resolution.** The premise was partly wrong: the chapter body did already state \$75M, so only question 618 was hedging. Verified that \$75M has been the Tier 2 cap since the March 2021 amendments and is unchanged as of August 2026; Tier 1 remains \$20M. Both figures are now stated in question 618 alongside a note that increases have been proposed, so a student meets the number without being taught to trust it permanently. Worth re-checking if the pending Regulation A+ Improvement Act (which would double Tier 2 to \$150M) becomes law.

<a id="trust-indenture-threshold"></a>

### Trust Indenture Act dollar threshold

**Status:** Confirmed · **Item id:** `trust-indenture-threshold`

**Chapter:** [Fixed-Income Securities](src/data/topics/fixed-income-basics.ts) — topic id `fixed-income-basics` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/fixed-income-basics)

**The app asserts.** Left as "a stated dollar threshold" rather than a number.

**Why it is flagged.** Deliberately vague. May be worth stating if the exam tests it.

**To verify.** Decide whether to state the figure.

**Questions that change with it.** None — this one is chapter text only.

**Resolution.** Verified for the record: TIA §304(a)(9) and Rule 4a-3 exempt indentures limited to \$10,000,000 aggregate principal outstanding, measured over a rolling 36-month period from the initial offering — not the 12 months one would assume by analogy to the other offering caps. Treatment deliberately left qualitative, because this sits well below Series 65 depth and the 36-month measurement is more likely to mislead than help at this level. Recorded here so the next contributor does not have to re-derive it.

<a id="529-conditions"></a>

### 529-to-Roth rollover conditions

**Status:** Corrected · **Item id:** `529-conditions`

**Chapter:** [Education and Special-Needs Accounts](src/data/topics/education-accounts.ts) — topic id `education-accounts` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/education-accounts)

**The app asserts.** Fifteen-year account seasoning, a five-year lookback on contributions, and a \$35,000 lifetime cap per beneficiary that is not indexed.

**Why it is flagged.** The cap is statutory but may be indexed. Stated qualitatively to avoid going stale.

**To verify.** Confirm the conditions and whether the cap should be named.

**Questions that change with it.** 503, 509 in [`src/data/questions/education-accounts.ts`](src/data/questions/education-accounts.ts)

**Resolution.** The caution was unnecessary: the \$35,000 cap SECURE 2.0 set is a flat statutory figure with no indexing provision, and it has not moved in the three years since. Now named in the chapter, the pitfall, and question 509. The 15-year seasoning and 5-year lookback were both verified as stated. Added the practical consequence that because the annual IRA limit also binds, moving the full \$35,000 takes several years — students read the cap as a one-time transfer amount.

## Varies by state

> The Uniform Securities Act is model legislation and adopting states differ. The app describes the structure rather than pinning a national number.

<a id="dual-registration"></a>

### Dual registration as agent and IAR

**Status:** Open · **Item id:** `dual-registration`

**Chapter:** [Broker-Dealer and Agent Registration](src/data/topics/bd-agent-registration.ts) — topic id `bd-agent-registration` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/bd-agent-registration)

**The app asserts.** Framed as permitted at state discretion rather than as a uniform national rule.

**Why it is flagged.** Practice varies by state and the exam may expect a single answer.

**To verify.** Confirm whether the exam treats dual registration as generally permitted.

**Questions that change with it.** 565 in [`src/data/questions/bd-agent-registration.ts`](src/data/questions/bd-agent-registration.ts)

<a id="net-worth-bonding"></a>

### Minimum net worth and bonding amounts

**Status:** Open · **Item id:** `net-worth-bonding`

**Chapter:** [Investment Adviser and IAR Registration](src/data/topics/ia-iar-registration.ts) — topic id `ia-iar-registration` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/ia-iar-registration)

**The app asserts.** Described as set by state rule and tiered by risk — custody, discretion, prepayment — with a next-business-day notice duty when net worth falls below the minimum. No national dollar figure.

**Why it is flagged.** Candidates often memorise specific figures from a single state. Confirm the notice duty is the durable tested point.

**To verify.** Confirm the notice obligation and its timing as the exam states it.

**Questions that change with it.** 546, 547 in [`src/data/questions/ia-iar-registration.ts`](src/data/questions/ia-iar-registration.ts); 571 in [`src/data/questions/bd-agent-registration.ts`](src/data/questions/bd-agent-registration.ts)

<a id="private-placement-limit"></a>

### State private placement purchaser limit

**Status:** Open · **Item id:** `private-placement-limit`

**Chapter:** [Exempt Securities and Exempt Transactions](src/data/topics/exempt-securities-transactions.ts) — topic id `exempt-securities-transactions` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/exempt-securities-transactions)

**The app asserts.** Ten non-institutional purchasers in twelve months, per the model act.

**Why it is flagged.** Adopting states vary. The app states the model-act number.

**To verify.** Confirm the model-act figure is what the exam tests.

**Questions that change with it.** 241 in [`src/data/questions/exempt-securities-transactions.ts`](src/data/questions/exempt-securities-transactions.ts)

<a id="sloa-custody"></a>

### Standing letter of authorization and custody relief

**Status:** Confirmed · **Item id:** `sloa-custody`

**Chapter:** [Custody, Safekeeping, and Client Assets](src/data/topics/custody-safekeeping.ts) — topic id `custody-safekeeping` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/custody-safekeeping)

**The app asserts.** The surprise-examination relief conditions are described as resting on SEC staff no-action relief, with state treatment noted as varying.

**Why it is flagged.** This is staff relief rather than a rule, and states do not treat standing letters uniformly.

**To verify.** Confirm the conditions and how your state treats standing letters.

**Questions that change with it.** 649, 1085 in [`src/data/questions/custody-safekeeping.ts`](src/data/questions/custody-safekeeping.ts)

**Resolution.** Federal framing verified: the Investment Adviser Association no-action letter dated February 21, 2017 sets seven conditions, and the relief is narrower than it is often described. The adviser still HAS custody under Rule 206(4)-2; what the letter withholds is an enforcement recommendation over the missing surprise examination, and failing any one of the seven conditions restores the exam requirement. The app states this correctly, so no content change. The state half is left to you as a practice question rather than a lookup: the letter binds no state administrator, and how your own state treats a standing letter is something you would know better than a source search.

<a id="criminal-penalties"></a>

### Criminal penalties and statute of limitations

**Status:** Corrected · **Item id:** `criminal-penalties`

**Chapter:** [Administrative Oversight, Remedies, and Penalties](src/data/topics/administrative-oversight.ts) — topic id `administrative-oversight` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/administrative-oversight)

**The app asserts.** The \$5,000 fine and three-year imprisonment maximum are labelled as model-act figures, with adopting states noted as setting their own.

**Why it is flagged.** An earlier version asserted these as national figures, contradicting another question that correctly said they vary. Both were reconciled.

**To verify.** Confirm the model-act figures and how your state differs.

**Questions that change with it.** 286, 673 in [`src/data/questions/administrative-oversight.ts`](src/data/questions/administrative-oversight.ts)

**Resolution.** Question 286 rescoped to the model act and its explanation now notes that adopting states set higher fines and different limitations periods.

<a id="felony-window"></a>

### Statutory disqualification lookback

**Status:** Open · **Item id:** `felony-window`

**Chapter:** [Administrative Oversight, Remedies, and Penalties](src/data/topics/administrative-oversight.ts) — topic id `administrative-oversight` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/administrative-oversight)

**The app asserts.** Any felony within ten years, and securities-related misdemeanors with no time limit — the classic tested formulation.

**Why it is flagged.** The chapter itself notes many states apply a ten-year lookback to both. The questions stick to the tested version.

**To verify.** Confirm which formulation the exam expects.

**Questions that change with it.** 669 in [`src/data/questions/administrative-oversight.ts`](src/data/questions/administrative-oversight.ts)

<a id="coordination-period"></a>

### Registration by coordination filing period

**Status:** Corrected · **Item id:** `coordination-period`

**Chapter:** [Registration of Securities](src/data/topics/securities-registration.ts) — topic id `securities-registration` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/securities-registration)

**The app asserts.** Model act: registration statement on file at least ten days, pricing statement on file two full business days, no stop order in effect. Adopting states may lengthen the filing period.

**Why it is flagged.** States vary and not all offer every registration method.

**To verify.** Confirm the model-act period.

**Questions that change with it.** 608, 609 in [`src/data/questions/securities-registration.ts`](src/data/questions/securities-registration.ts)

**Resolution.** The model act is more specific than "ten to twenty days" suggested, and the vaguer phrasing was obscuring a testable condition. Verified: effectiveness is simultaneous with federal effectiveness provided the registration statement has been on file with the Administrator at least ten days, a statement of maximum and minimum proposed offering prices and maximum underwriting discounts has been on file two full business days, and no stop order is in effect or proceeding pending. All three now stated in the chapter and in question 608, with the note that adopting states may lengthen the filing period so a fact pattern giving a different number is not necessarily wrong.

## Reasonable advisors differ

> There is no single correct answer, only a defensible one. Confirm the keyed answer matches how you would actually advise.

<a id="cfp-social-security-delay"></a>

### Delaying Social Security to 70 for the higher earner

**Status:** Open · **Item id:** `cfp-social-security-delay`

**Chapter:** [Retirement Planning and Income Distribution](src/data/topics/cfp-retirement-planning.ts) — topic id `cfp-retirement-planning` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/cfp-retirement-planning)

**The app asserts.** Keyed as the better course for a healthy couple with adequate bridge assets, with those facts stipulated in the stem.

**Why it is flagged.** Widely accepted, but a minority favour earlier claiming on breakeven or portfolio-return grounds.

**To verify.** Confirm this matches how you would advise.

**Questions that change with it.** 1019 in [`src/data/questions/cfp-retirement-planning.ts`](src/data/questions/cfp-retirement-planning.ts)

<a id="cfp-pension-election"></a>

### Joint and survivor versus pension maximization

**Status:** Open · **Item id:** `cfp-pension-election`

**Chapter:** [Retirement Planning and Income Distribution](src/data/topics/cfp-retirement-planning.ts) — topic id `cfp-retirement-planning` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/cfp-retirement-planning)

**The app asserts.** Keyed toward joint and survivor unless a properly priced permanent policy genuinely covers the need. The distractor fails on "term" and "always" rather than on the strategy.

**Why it is flagged.** Advisors who routinely run pension max would call the single-life election defensible.

**To verify.** Confirm the keyed reasoning.

**Questions that change with it.** 1024 in [`src/data/questions/cfp-retirement-planning.ts`](src/data/questions/cfp-retirement-planning.ts)

<a id="cfp-annuity-sizing"></a>

### Sizing an annuity to the essential-spending gap

**Status:** Open · **Item id:** `cfp-annuity-sizing`

**Chapter:** [Retirement Planning and Income Distribution](src/data/topics/cfp-retirement-planning.ts) — topic id `cfp-retirement-planning` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/cfp-retirement-planning)

**The app asserts.** Keyed as a process answer — quantify the gap, compare against cheaper alternatives — rather than a product recommendation.

**Why it is flagged.** Some advisors would decline any annuity here; others would annuitize more.

**To verify.** Confirm the process framing is the right answer to teach.

**Questions that change with it.** 1004 in [`src/data/questions/cfp-insurance-planning.ts`](src/data/questions/cfp-insurance-planning.ts)

<a id="cfp-asset-location"></a>

### Asset location ordering

**Status:** Open · **Item id:** `cfp-asset-location`

**Chapter:** [Tax Planning for Advisors](src/data/topics/cfp-tax-planning.ts) — topic id `cfp-tax-planning` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/cfp-tax-planning)

**The app asserts.** High-yield in the IRA, growth in the Roth, with the explanation flagging that location is a bounded win.

**Why it is flagged.** A real client's liquidity needs and horizon can override the standard ordering.

**To verify.** Confirm the ordering and the caveat.

**Questions that change with it.** 1008 in [`src/data/questions/cfp-tax-planning.ts`](src/data/questions/cfp-tax-planning.ts)

<a id="cfp-mental-accounting"></a>

### Mental accounting against high-interest debt

**Status:** Open · **Item id:** `cfp-mental-accounting`

**Chapter:** [Advisor Practice Skills and Behavioral Finance](src/data/topics/advisor-practice-skills.ts) — topic id `advisor-practice-skills` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/advisor-practice-skills)

**The app asserts.** The fuller answer — pay the guaranteed 19% while honouring the emotional label — is keyed over the purely quantitative one, whose flaw is that it lectures.

**Why it is flagged.** A purely quantitative advisor might prefer the other answer, which reaches the same destination.

**To verify.** Confirm the keyed answer teaches the right instinct.

**Questions that change with it.** 1049 in [`src/data/questions/advisor-practice-skills.ts`](src/data/questions/advisor-practice-skills.ts)

<a id="cfp-widow-deferral"></a>

### Deferring irreversible decisions after a death

**Status:** Open · **Item id:** `cfp-widow-deferral`

**Chapter:** [Advisor Practice Skills and Behavioral Finance](src/data/topics/advisor-practice-skills.ts) — topic id `advisor-practice-skills` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/advisor-practice-skills)

**The app asserts.** Keyed as deferring, with the stem stipulating that cash needs are covered for a year.

**Why it is flagged.** Occasionally a relocation genuinely is urgent.

**To verify.** Confirm the stipulation makes deferral clearly best.

**Questions that change with it.** 1052 in [`src/data/questions/advisor-practice-skills.ts`](src/data/questions/advisor-practice-skills.ts)

<a id="withdrawal-heuristics"></a>

### Safe withdrawal rate and replacement ratios

**Status:** Open · **Item id:** `withdrawal-heuristics`

**Chapter:** [Retirement Planning and Income Distribution](src/data/topics/cfp-retirement-planning.ts) — topic id `cfp-retirement-planning` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/cfp-retirement-planning)

**The app asserts.** The 4% rule and wage replacement ratios are presented as starting heuristics with their assumptions named, not as settled fact.

**Why it is flagged.** Both are actively contested in the profession.

**To verify.** Confirm the framing is one you would stand behind with a client.

**Questions that change with it.** 1016, 1018 in [`src/data/questions/cfp-retirement-planning.ts`](src/data/questions/cfp-retirement-planning.ts)

## Scope or nuance

> The rule is right but its boundary is easy to state too broadly or too narrowly.

<a id="pension-consultant-threshold"></a>

### Pension consultant SEC registration threshold

**Status:** Confirmed · **Item id:** `pension-consultant-threshold`

**Chapter:** [Investment Adviser and IAR Registration](src/data/topics/ia-iar-registration.ts) — topic id `ia-iar-registration` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/ia-iar-registration)

**The app asserts.** A pension consultant with \$200M or more in plan assets under advisement may elect SEC registration.

**Why it is flagged.** Stated as an election under SEC Rule 203A-2(a) rather than a mandate. The figure and the elective framing both come from the rule, but study material sometimes presents it as compulsory.

**To verify.** Confirm the threshold and that the exam treats it as elective.

**Questions that change with it.** 533 in [`src/data/questions/ia-iar-registration.ts`](src/data/questions/ia-iar-registration.ts)

**Resolution.** Verified against 17 CFR 275.203A-2(a). The \$200,000,000 figure is correct, counting only the portion of plan assets on which the adviser advises. The rule is titled "Exemptions from prohibition on Commission registration" — it lifts the §203A bar rather than imposing a duty, so the elective framing is right. A compliance vendor guide read during verification stated it as "must register with the SEC", which is precisely the misreading this item anticipated. No content change.

<a id="issuer-rep-exclusion"></a>

### Issuer-representative exclusion and the no-commission condition

**Status:** Confirmed · **Item id:** `issuer-rep-exclusion`

**Chapter:** [Broker-Dealer and Agent Registration](src/data/topics/bd-agent-registration.ts) — topic id `bd-agent-registration` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/bd-agent-registration)

**The app asserts.** Under USA section 401(b) an individual representing an issuer in exempt securities falls outside the agent definition regardless of commission; the no-remuneration condition attaches specifically to the employees, partners and directors branch.

**Why it is flagged.** The branches are commonly collapsed in study material into a blanket "no commission" rule, which would make the app disagree with a candidate's other materials.

**To verify.** Confirm which branch the no-remuneration condition actually modifies.

**Questions that change with it.** 559, 560 in [`src/data/questions/bd-agent-registration.ts`](src/data/questions/bd-agent-registration.ts)

**Resolution.** Verified against the 2002 Uniform Securities Act text. The exclusion for an individual representing an issuer runs to exempt securities, exempt transactions, and federal covered securities with no compensation condition attached; the "no commission or other remuneration for soliciting" condition modifies only the separate branch covering transactions with the issuer's existing employees, partners and directors. The app reads the statute correctly and the collapsed blanket version is the error. No content change.

<a id="accredited-qualified-purchaser"></a>

### Accredited investor and qualified purchaser qualification routes

**Status:** Corrected · **Item id:** `accredited-qualified-purchaser`

**Chapter:** [Alternative Investments and Direct Participation](src/data/topics/alternative-investments.ts) — topic id `alternative-investments` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/alternative-investments)

**The app asserts.** The dollar tests: \$1M net worth excluding primary residence, \$200,000 individual or \$300,000 joint income for accredited investor; \$5M in investments for qualified purchaser. Plus the non-financial routes added in 2020.

**Why it is flagged.** An auditor flagged this deliberately rather than editing it. The dollar tests are statutory and stable, but the qualification routes were amended in 2020 to add professional certifications and knowledgeable employees, and the app may state the routes too narrowly.

**To verify.** Confirm the current qualification routes, not just the dollar tests, and whether the exam tests the non-financial routes.

**Questions that change with it.** None — this one is chapter text only.

**Resolution.** The auditor was right to flag it. The dollar tests were verified unchanged, but the chapter disposed of the 2020 amendments in five words ("with additional professional-credential paths") without naming them. Now stated in full: an individual qualifies by holding the Series 7, Series 65, or Series 82 in good standing, or as a knowledgeable employee of the fund making the offering, and the amendments widened the routes without moving the dollar tests. A pitfall was added because "only net worth or income can qualify an individual" is now an affirmatively wrong answer. Worth Colleen knowing directly: passing the Series 65 and registering as an IAR makes her an accredited investor on credential alone.

<a id="coverdell-excise"></a>

### Coverdell excess contribution excise tax

**Status:** Open · **Item id:** `coverdell-excise`

**Chapter:** [Education and Special-Needs Accounts](src/data/topics/education-accounts.ts) — topic id `education-accounts` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/education-accounts)

**The app asserts.** A 6% excise under IRC section 4973 on excess contributions.

**Why it is flagged.** The rate is right. The framing — whether the excess is attributable to the over-contribution as a whole or to a specific contributor — is the uncertain part.

**To verify.** Confirm the attribution framing.

**Questions that change with it.** 505 in [`src/data/questions/education-accounts.ts`](src/data/questions/education-accounts.ts)

<a id="457b-penalty"></a>

### Governmental versus tax-exempt 457(b) early withdrawal

**Status:** Corrected · **Item id:** `457b-penalty`

**Chapter:** [Retirement Plans and Accounts](src/data/topics/retirement-plans.ts) — topic id `retirement-plans` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/retirement-plans)

**The app asserts.** The absence of a 10% early withdrawal penalty is scoped to governmental 457(b) plans, with the tax-exempt "top hat" variety described separately.

**Why it is flagged.** Tax-exempt employer 457(b) plans behave differently, and study material often states the exemption without the qualifier. The distinction may deserve more prominence.

**To verify.** Confirm the scoping and whether the exam draws the distinction.

**Questions that change with it.** 484 in [`src/data/questions/retirement-plans.ts`](src/data/questions/retirement-plans.ts)

**Resolution.** The scoping was only half applied — exactly the failure mode this manifest exists to catch. The chapter's comparison section correctly said "governmental 457(b)", but the plan-type list forty lines earlier named both employer types and then asserted the no-penalty feature unqualified. Fixed, and the tax-exempt top-hat plan is now described on its own terms: assets subject to the employer's creditors, distributions generally only at separation, no rollover to an IRA. Question 484 was already correctly scoped in its stem; its explanation now adds the two boundaries on the exemption — amounts rolled IN from a 401(k) or IRA keep their own penalty treatment, and rolling the balance OUT to an IRA surrenders the advantage.

<a id="muni-de-minimis"></a>

### Municipal bond de minimis rule

**Status:** Open · **Item id:** `muni-de-minimis`

**Chapter:** [Fixed-Income Securities](src/data/topics/fixed-income-basics.ts) — topic id `fixed-income-basics` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/fixed-income-basics)

**The app asserts.** A quarter point per full year to maturity, framed as a discount amount in one chapter and as a price in another, reaching the same result.

**Why it is flagged.** An auditor confirmed the two framings agree. Worth a second look that both are stated in a way a candidate will recognise.

**To verify.** Confirm both framings are correct and consistently presented.

**Questions that change with it.** None — this one is chapter text only.

<a id="promoter-de-minimis"></a>

### Marketing Rule promoter agreement de minimis

**Status:** Confirmed · **Item id:** `promoter-de-minimis`

**Chapter:** [Communications, Advertising, and the Marketing Rule](src/data/topics/communications-marketing.ts) — topic id `communications-marketing` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/communications-marketing)

**The app asserts.** A written promoter agreement is required above de minimis compensation, stated as \$1,000 or its non-cash equivalent over the preceding twelve months, measured in aggregate.

**Why it is flagged.** The threshold and its measurement period are worth confirming.

**To verify.** Confirm the de minimis figure and period.

**Questions that change with it.** 678 in [`src/data/questions/communications-marketing.ts`](src/data/questions/communications-marketing.ts)

**Resolution.** Confirmed against Rule 206(4)-1: \$1,000 or the equivalent value in non-cash compensation during the preceding twelve months, with the exception reaching only the written-agreement condition — disclosure and oversight apply at any amount, which the app already said. Added one point verification surfaced that the app was missing: the measurement is AGGREGATE across the twelve months, and SEC examiners have cited advisers who treated a series of sub-\$1,000 payments as separately exempt when the total exceeded the threshold. That is a better distractor than the raw figure.

<a id="reg-sp-breach"></a>

### Regulation S-P breach notification window

**Status:** Confirmed · **Item id:** `reg-sp-breach`

**Chapter:** [Cybersecurity, Privacy, and Business Continuity](src/data/topics/cybersecurity-privacy.ts) — topic id `cybersecurity-privacy` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/cybersecurity-privacy)

**The app asserts.** A 30-day individual notification requirement under the amended rule, now fully in effect for all covered firms, with stricter state statutes applying on top.

**Why it is flagged.** Compliance dates were tiered by firm size. Confirm the timing as it now stands.

**To verify.** Confirm the window and whether it is fully in effect.

**Questions that change with it.** 688, 298, 1102 in [`src/data/questions/cybersecurity-privacy.ts`](src/data/questions/cybersecurity-privacy.ts)

**Resolution.** Both tiers are now live: December 3, 2025 for larger entities and June 3, 2026 for smaller ones, so as of this revision the amended rule binds every covered firm and should not be taught as forthcoming. The 30-day window is confirmed. Added the point that most often gets it wrong in practice — the clock runs from awareness that unauthorised access has occurred or is reasonably likely to have occurred, not from the close of the investigation, so a firm waiting on forensics before starting to count has already misread the rule.

<a id="form-crs-amendment"></a>

### Form CRS amendment delivery timing

**Status:** Corrected · **Item id:** `form-crs-amendment`

**Chapter:** [Advisory Contracts, Fees, and Compensation](src/data/topics/advisory-contracts-fees.ts) — topic id `advisory-contracts-fees` · [read in the app](https://rivendale.github.io/series65-study-hub/#/curriculum/advisory-contracts-fees)

**The app asserts.** Filed within 30 days of the information becoming materially inaccurate; changes delivered to existing retail clients within 60 days after that filing was required.

**Why it is flagged.** The filing window and the delivery window differ, and the agent declined to pin either.

**To verify.** Confirm both windows and whether they are worth stating.

**Questions that change with it.** 597 in [`src/data/questions/advisory-contracts-fees.ts`](src/data/questions/advisory-contracts-fees.ts)

**Resolution.** Both windows confirmed and now stated: 30 days to file the amendment, 60 days after that filing was required to deliver the changes to existing retail clients, with changed text marked or a summary of material changes provided. The agent was right that they differ and wrong to hide the difference — that the two clocks are separate is the tested point, and "within the periods specified by the rule" taught nothing. Added to the chapter body, which had no coverage of amendment timing at all, as well as to question 597.

## Feeding corrections back

A correction is not finished when the chapter is right. Every question written from a rule repeats it — in the stem, in the keyed answer index, and in the explanation — and the explanation is the part a student reads most carefully.

This is not hypothetical. One chapter stated the oral-discretion grace period backwards. The error propagated into a question that keyed the wrong choice and then taught the reversal in its explanation, so a student who read the chapter, answered the question, and read the feedback met the same mistake three times and had it confirmed twice. The `questionIds` field exists because of that.

**A half-applied correction is worse than no correction.** Fix the chapter and leave the question, and the surviving instance now stands alone and unqualified — the student has no contradiction to notice, just a wrong rule delivered with the app's full authority in the one place they are being graded on it.

### Where each piece lives

| What | File |
|---|---|
| The rule, as taught | `src/data/topics/<topic-id>.ts` — linked on every item above |
| The questions built on it | `src/data/questions/<module>.ts` — the ids are listed on every item |
| The flag itself | [`src/data/reviewItems.ts`](src/data/reviewItems.ts) |
| Thresholds repeated out of context | [`src/pages/CheatSheet.tsx`](src/pages/CheatSheet.tsx), plus any `keyTerms` or `formulas` entry in the topic module |

### The loop

1. **Correct the chapter** in its topic module. If the point is genuinely contested, say so in the text rather than picking a side silently.
2. **Work every id in `questionIds`.** For each one check the stem, the `answer` index, and the `exp` string. A rule reversal usually means all three move; changing only `answer` leaves an explanation that argues for the old answer.
3. **Grep for the figure.** A dollar threshold or day count often also appears on the cheat sheet, in a `confusions` row, or in a chapter that cross-references this one.
4. **Update the item** in `src/data/reviewItems.ts`: set `status` to `confirmed` (the app was right) or `corrected` (it was not), and write a `resolution` saying what was checked and against what. A confirmed item is a finding worth keeping — it stops the same question being reopened next year.
5. **Regenerate this file:** `npm run review:md`. It is not part of `npm run build`, so it will not update itself.
6. **Build:** `npm run lint && npm run build`.

Do not edit `REVIEW.md` by hand — the next regeneration discards it, and the in-app `/review` page would never have shown the change anyway.

### Every affected question, in one place

38 questions across the whole list. If a question appears against two items, both rules have to be settled before it is safe to touch.

| Question | Module | Item |
|---:|---|---|
| 241 | [`src/data/questions/exempt-securities-transactions.ts`](src/data/questions/exempt-securities-transactions.ts) | [State private placement purchaser limit](#private-placement-limit) |
| 253 | [`src/data/questions/advisory-contracts-fees.ts`](src/data/questions/advisory-contracts-fees.ts) | [Qualified client thresholds](#qualified-client) |
| 286 | [`src/data/questions/administrative-oversight.ts`](src/data/questions/administrative-oversight.ts) | [Criminal penalties and statute of limitations](#criminal-penalties) |
| 298 | [`src/data/questions/cybersecurity-privacy.ts`](src/data/questions/cybersecurity-privacy.ts) | [Regulation S-P breach notification window](#reg-sp-breach) |
| 484 | [`src/data/questions/retirement-plans.ts`](src/data/questions/retirement-plans.ts) | [Governmental versus tax-exempt 457(b) early withdrawal](#457b-penalty) |
| 502 | [`src/data/questions/erisa-fiduciary.ts`](src/data/questions/erisa-fiduciary.ts) | [ERISA long-term part-time employee eligibility](#erisa-ltpt) |
| 503 | [`src/data/questions/education-accounts.ts`](src/data/questions/education-accounts.ts) | [529-to-Roth rollover conditions](#529-conditions) |
| 505 | [`src/data/questions/education-accounts.ts`](src/data/questions/education-accounts.ts) | [Coverdell excess contribution excise tax](#coverdell-excise) |
| 509 | [`src/data/questions/education-accounts.ts`](src/data/questions/education-accounts.ts) | [529-to-Roth rollover conditions](#529-conditions) |
| 533 | [`src/data/questions/ia-iar-registration.ts`](src/data/questions/ia-iar-registration.ts) | [Pension consultant SEC registration threshold](#pension-consultant-threshold) |
| 545 | [`src/data/questions/ia-iar-registration.ts`](src/data/questions/ia-iar-registration.ts) | [Form ADV-W effective timing](#adv-w-timing) |
| 546 | [`src/data/questions/ia-iar-registration.ts`](src/data/questions/ia-iar-registration.ts) | [Minimum net worth and bonding amounts](#net-worth-bonding) |
| 547 | [`src/data/questions/ia-iar-registration.ts`](src/data/questions/ia-iar-registration.ts) | [Minimum net worth and bonding amounts](#net-worth-bonding) |
| 559 | [`src/data/questions/bd-agent-registration.ts`](src/data/questions/bd-agent-registration.ts) | [Issuer-representative exclusion and the no-commission condition](#issuer-rep-exclusion) |
| 560 | [`src/data/questions/bd-agent-registration.ts`](src/data/questions/bd-agent-registration.ts) | [Issuer-representative exclusion and the no-commission condition](#issuer-rep-exclusion) |
| 565 | [`src/data/questions/bd-agent-registration.ts`](src/data/questions/bd-agent-registration.ts) | [Dual registration as agent and IAR](#dual-registration) |
| 571 | [`src/data/questions/bd-agent-registration.ts`](src/data/questions/bd-agent-registration.ts) | [Minimum net worth and bonding amounts](#net-worth-bonding) |
| 594 | [`src/data/questions/advisory-contracts-fees.ts`](src/data/questions/advisory-contracts-fees.ts) | [Qualified client thresholds](#qualified-client) |
| 597 | [`src/data/questions/advisory-contracts-fees.ts`](src/data/questions/advisory-contracts-fees.ts) | [Form CRS amendment delivery timing](#form-crs-amendment) |
| 608 | [`src/data/questions/securities-registration.ts`](src/data/questions/securities-registration.ts) | [Registration by coordination filing period](#coordination-period) |
| 609 | [`src/data/questions/securities-registration.ts`](src/data/questions/securities-registration.ts) | [Registration by coordination filing period](#coordination-period) |
| 618 | [`src/data/questions/securities-registration.ts`](src/data/questions/securities-registration.ts) | [Regulation A+ Tier 2 offering cap](#reg-a-tier-2) |
| 649 | [`src/data/questions/custody-safekeeping.ts`](src/data/questions/custody-safekeeping.ts) | [Standing letter of authorization and custody relief](#sloa-custody) |
| 669 | [`src/data/questions/administrative-oversight.ts`](src/data/questions/administrative-oversight.ts) | [Statutory disqualification lookback](#felony-window) |
| 673 | [`src/data/questions/administrative-oversight.ts`](src/data/questions/administrative-oversight.ts) | [Criminal penalties and statute of limitations](#criminal-penalties) |
| 678 | [`src/data/questions/communications-marketing.ts`](src/data/questions/communications-marketing.ts) | [Marketing Rule promoter agreement de minimis](#promoter-de-minimis) |
| 688 | [`src/data/questions/cybersecurity-privacy.ts`](src/data/questions/cybersecurity-privacy.ts) | [Regulation S-P breach notification window](#reg-sp-breach) |
| 1004 | [`src/data/questions/cfp-insurance-planning.ts`](src/data/questions/cfp-insurance-planning.ts) | [Sizing an annuity to the essential-spending gap](#cfp-annuity-sizing) |
| 1008 | [`src/data/questions/cfp-tax-planning.ts`](src/data/questions/cfp-tax-planning.ts) | [Asset location ordering](#cfp-asset-location) |
| 1016 | [`src/data/questions/cfp-retirement-planning.ts`](src/data/questions/cfp-retirement-planning.ts) | [Safe withdrawal rate and replacement ratios](#withdrawal-heuristics) |
| 1018 | [`src/data/questions/cfp-retirement-planning.ts`](src/data/questions/cfp-retirement-planning.ts) | [Safe withdrawal rate and replacement ratios](#withdrawal-heuristics) |
| 1019 | [`src/data/questions/cfp-retirement-planning.ts`](src/data/questions/cfp-retirement-planning.ts) | [Delaying Social Security to 70 for the higher earner](#cfp-social-security-delay) |
| 1024 | [`src/data/questions/cfp-retirement-planning.ts`](src/data/questions/cfp-retirement-planning.ts) | [Joint and survivor versus pension maximization](#cfp-pension-election) |
| 1049 | [`src/data/questions/advisor-practice-skills.ts`](src/data/questions/advisor-practice-skills.ts) | [Mental accounting against high-interest debt](#cfp-mental-accounting) |
| 1052 | [`src/data/questions/advisor-practice-skills.ts`](src/data/questions/advisor-practice-skills.ts) | [Deferring irreversible decisions after a death](#cfp-widow-deferral) |
| 1083 | [`src/data/questions/advisory-contracts-fees.ts`](src/data/questions/advisory-contracts-fees.ts) | [Qualified client thresholds](#qualified-client) |
| 1085 | [`src/data/questions/custody-safekeeping.ts`](src/data/questions/custody-safekeeping.ts) | [Standing letter of authorization and custody relief](#sloa-custody) |
| 1102 | [`src/data/questions/cybersecurity-privacy.ts`](src/data/questions/cybersecurity-privacy.ts) | [Regulation S-P breach notification window](#reg-sp-breach) |
