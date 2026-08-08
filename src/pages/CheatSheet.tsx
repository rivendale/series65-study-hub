import { Link } from 'react-router-dom';
import { Clock, Award, FileText, AlertTriangle, Sigma } from 'lucide-react';
import { examInfo } from '../data/examInfo';
import { OFFICIAL_CATEGORIES, EXAM_CATEGORY_IDS } from '../data/categories';

const thresholds: { rule: string; threshold: string }[] = [
  { rule: 'Federal covered IA — AUM threshold', threshold: '$110M+' },
  { rule: 'State-registered IA — AUM', threshold: 'Under $100M' },
  { rule: 'Buffer band (adviser may choose)', threshold: '$100M – $110M' },
  { rule: 'Multi-state IA exemption', threshold: 'Required in 15+ states' },
  { rule: 'IAR de minimis (federal covered IA)', threshold: 'No place of business + under 6 retail clients / 12 mo' },
  { rule: 'Qualified client — AUM with adviser', threshold: '$1.4M (raised from $1.1M on 6/29/2026)' },
  { rule: 'Qualified client — net worth', threshold: '$2.7M excl. primary residence (raised from $2.2M)' },
  { rule: 'Brochure delivery', threshold: '48+ hrs before contract, or at signing with 5-day rescission' },
  { rule: 'Brochure annual delivery', threshold: 'Within 120 days of fiscal year end' },
  { rule: 'Form ADV annual updating amendment', threshold: 'Within 90 days of fiscal year end' },
  { rule: 'Custody — adviser-payable check', threshold: 'Custody for ANY period held' },
  { rule: 'Custody — third-party check forwarded', threshold: 'Within 3 business days = NOT custody' },
  { rule: 'Form U5 filing', threshold: 'Within 30 days of termination' },
  { rule: 'Hearing request after notice', threshold: 'Within 15 days' },
  { rule: 'Registration withdrawal effective', threshold: '30 days; Administrator keeps jurisdiction 1 year' },
  { rule: 'Statute of limitations (civil)', threshold: '3 yrs from violation OR 2 yrs from discovery' },
  { rule: 'Criminal penalty per willful violation', threshold: '$5,000 and/or 3 years' },
  { rule: 'Commercial paper exemption', threshold: '≤ 9 months, ≥ $50,000, top-3 ratings' },
  { rule: 'State private placement limit', threshold: '≤ 10 non-institutional buyers / 12 mo' },
  { rule: 'Pre-organization subscription limit', threshold: '≤ 10 subscribers' },
  { rule: 'Reg T initial margin', threshold: '50%' },
  { rule: 'Regular-way settlement', threshold: 'T+1' },
  { rule: 'Long-term capital gain holding period', threshold: 'More than 1 year' },
  { rule: 'Wash sale window', threshold: '30 days before and after' },
  { rule: 'Capital loss vs ordinary income', threshold: '$3,000 per year, excess carries forward' },
  { rule: 'RMD age (post-SECURE 2.0)', threshold: '73 (rises to 75 in 2033)' },
  { rule: 'Early withdrawal penalty age', threshold: 'Under 59½ = 10% penalty (exceptions apply)' },
  { rule: 'Inherited IRA — most non-spouse', threshold: '10-year rule' },
  { rule: 'IAR continuing education', threshold: '12 credits/yr (6 Products + 6 Ethics)' },
  { rule: 'Diversified fund 75-5-10 rule', threshold: '75% of assets: ≤5% in one issuer, ≤10% of its voting stock' },
  { rule: '12b-1 fee to still call a fund "no-load"', threshold: '≤ 0.25%' },
];

const topRules: string[] = [
  'An investment adviser is a fiduciary — duty of loyalty plus duty of care. That standard is higher than BD suitability and higher than Reg BI.',
  'Anti-fraud reaches every security, every transaction, and every person — registered or not, exempt or not. There is no exemption from anti-fraud.',
  'IAR registration is always at the STATE level, even when the adviser is federal covered.',
  'Banks are excluded from the IA and BD definitions. Bank holding companies are NOT.',
  'A wrap fee is special compensation — it destroys the broker-dealer exclusion from the IA definition.',
  'A CPA, attorney, teacher, or engineer who charges separately for investment advice IS an investment adviser.',
  'A client check made payable to the ADVISER is custody for any period. A third-party check forwarded within 3 business days is not.',
  'Performance fees require a qualified client, and the fee must account for losses as well as gains.',
  'Advisory contracts cannot be assigned without client consent.',
  'Advisers Act §206 can reach negligent conduct civilly; federal Rule 10b-5 requires scienter.',
  'Testimonials and endorsements are PERMITTED post-Marketing Rule (Nov 4, 2022) with disclosure, written promoter agreements, and oversight.',
  'Net performance must be presented with at least equal prominence to gross performance.',
  'Diversification eliminates unsystematic risk only. Systematic (market) risk cannot be diversified away.',
  'Beta measures systematic risk; standard deviation measures total risk. Sharpe uses standard deviation, Treynor uses beta.',
  'Time-weighted return evaluates the manager; dollar-weighted (IRR) reflects the client’s actual experience.',
  'Duration rises with maturity and falls as coupon rises. Zero-coupon duration equals its maturity.',
  'Bond prices and yields move inversely. For a premium bond: nominal > current yield > YTM > YTC.',
  'Leveraged and inverse ETFs reset daily — they are generally unsuitable as long-term holdings.',
  'Non-qualified annuity withdrawals are LIFO, taxed as ordinary income, with a 10% penalty before 59½.',
  'Municipal interest is federally tax-exempt; Treasury interest is exempt from state and local tax.',
  'Assets get a step-up in basis at death but carryover basis when gifted during life.',
  'Uncovered call writing carries theoretically unlimited risk; a covered call caps upside, a protective put caps downside.',
  'Lost profits are NOT recoverable under civil rescission — principal plus interest, minus income received, plus reasonable attorney fees.',
  'The Administrator can deny, suspend, revoke, and issue cease-and-desist orders — but cannot imprison. That is a court function.',
  'Conviction grounds: a felony (any category) or a securities/fraud/property misdemeanor within the past 10 years works under either model act. Past 10 years they split — the 1956 act cuts off both, the 2002 act keeps any felony indefinitely. A non-qualifying misdemeanor (e.g. DUI) is never a ground, however recent.',
];

export default function CheatSheet() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold">Cheat Sheet</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Last-minute reference. Everything here is fair game on the exam.
        </p>
      </header>

      <section className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-5 h-5" />
          <h2 className="font-semibold text-lg">Exam structure</h2>
        </div>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-white/70 text-xs uppercase tracking-wide">Questions</dt>
            <dd className="font-semibold text-lg">{examInfo.totalQuestions}</dd>
          </div>
          <div>
            <dt className="text-white/70 text-xs uppercase tracking-wide">Scored</dt>
            <dd className="font-semibold text-lg">
              {examInfo.scoredQuestions} (+{examInfo.pretestQuestions} pretest)
            </dd>
          </div>
          <div>
            <dt className="text-white/70 text-xs uppercase tracking-wide">Time</dt>
            <dd className="font-semibold text-lg">{examInfo.timeMinutes} min</dd>
          </div>
          <div>
            <dt className="text-white/70 text-xs uppercase tracking-wide">Pass</dt>
            <dd className="font-semibold text-lg">
              {examInfo.passingScore}/{examInfo.scoredQuestions} ({examInfo.passPercentage}%)
            </dd>
          </div>
        </dl>
        <p className="mt-3 text-xs text-white/80">
          No sponsorship required &mdash; you can sit for the Series 65 without
          broker-dealer affiliation. Delivered at {examInfo.testCenter}.
        </p>
      </section>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="font-semibold text-lg">
            NASAA blueprint ({examInfo.scoredQuestions} scored questions)
          </h2>
        </div>
        <ul className="space-y-2">
          {EXAM_CATEGORY_IDS.map((id) => {
            const c = OFFICIAL_CATEGORIES[id];
            return (
              <li key={id} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-slate-700 dark:text-slate-300">{c.shortName}</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                  {c.questions} ({c.pct}%)
                </span>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Client Recommendations and Laws &amp; Ethics are 60% of the exam between them.
          Drill those first.
        </p>
      </section>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-5 pb-3 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="font-semibold text-lg">Numbers, limits, and deadlines</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="text-left font-semibold px-5 py-2">Rule</th>
                <th className="text-left font-semibold px-5 py-2">Threshold</th>
              </tr>
            </thead>
            <tbody>
              {thresholds.map((t, i) => (
                <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="px-5 py-2 text-slate-700 dark:text-slate-300">{t.rule}</td>
                  <td className="px-5 py-2 font-medium text-slate-900 dark:text-slate-100">
                    {t.threshold}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-300" />
          <h2 className="font-semibold text-lg text-amber-900 dark:text-amber-200">
            Most-tested rules
          </h2>
        </div>
        <ol className="space-y-2 text-sm text-amber-900 dark:text-amber-100/90 list-decimal list-inside">
          {topRules.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>
      </section>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/formulas"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 min-h-[44px]"
        >
          <Sigma className="w-4 h-4" />
          Formula sheet
        </Link>
        <Link
          to="/glossary"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 min-h-[44px]"
        >
          Full glossary
        </Link>
      </div>
    </div>
  );
}
