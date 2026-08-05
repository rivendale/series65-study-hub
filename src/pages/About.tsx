import { Link } from 'react-router-dom';
import { ScrollText } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { examInfo } from '../data/examInfo';
import { topics } from '../data/curriculum';
import { questions } from '../data/questions';
import { reviewItems, reviewItemsByStatus } from '../data/reviewItems';

export default function About() {
  const { progress, setPreferences } = useProgress();
  const { theme, fontSize } = progress.preferences;
  const openReviewItems = reviewItemsByStatus('open').length;

  return (
    <div className="space-y-5 max-w-2xl">
      <header>
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Version {examInfo.version} &middot; {topics.length} topics &middot;{' '}
          {questions.length} questions
        </p>
      </header>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <h2 className="font-semibold mb-3">Display</h2>

        <div className="mb-4">
          <span className="text-sm font-medium mb-2 block">Theme</span>
          <div className="grid grid-cols-3 gap-2">
            {(['system', 'light', 'dark'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setPreferences({ theme: t })}
                className={`px-3 py-2 rounded-lg border text-sm font-medium capitalize min-h-[44px] ${
                  theme === t
                    ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
                    : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-sm font-medium mb-2 block">Font size</span>
          <div className="grid grid-cols-3 gap-2">
            {(['sm', 'md', 'lg'] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setPreferences({ fontSize: s })}
                className={`px-3 py-2 rounded-lg border text-sm font-medium uppercase min-h-[44px] ${
                  fontSize === s
                    ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
                    : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <h2 className="font-semibold mb-3">The exam</h2>
        <dl className="text-sm space-y-2">
          <div className="flex justify-between gap-3">
            <dt className="text-slate-600 dark:text-slate-400">Full name</dt>
            <dd className="font-medium text-right">{examInfo.fullName}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-slate-600 dark:text-slate-400">Questions</dt>
            <dd className="font-medium text-right">
              {examInfo.totalQuestions} ({examInfo.scoredQuestions} scored +{' '}
              {examInfo.pretestQuestions} pretest)
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-slate-600 dark:text-slate-400">Time</dt>
            <dd className="font-medium text-right">{examInfo.timeMinutes} minutes</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-slate-600 dark:text-slate-400">Passing score</dt>
            <dd className="font-medium text-right">
              {examInfo.passingScore} of {examInfo.scoredQuestions} ({examInfo.passPercentage}%)
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-slate-600 dark:text-slate-400">Sponsorship</dt>
            <dd className="font-medium text-right">Not required</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-slate-600 dark:text-slate-400">Developed by</dt>
            <dd className="font-medium text-right">{examInfo.developer}</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <div className="flex items-center gap-2 mb-2">
          <ScrollText
            className="w-5 h-5 text-blue-600 dark:text-blue-400"
            aria-hidden="true"
          />
          <h2 className="font-semibold">Flagged for review</h2>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          The content is written from public sources and is internally
          consistent. {reviewItems.length} passages are flagged anyway &mdash;
          places where sources disagree, a figure is indexed, a rule varies by
          adopting state, or two competent advisors would key the answer
          differently. {openReviewItems} are still open. The list names what the
          app asserts, why it was flagged and what to check, alongside the
          questions that would change with the rule.
        </p>
        <Link
          to="/review"
          className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-blue-400 min-h-[44px]"
        >
          <ScrollText className="w-4 h-4" aria-hidden="true" />
          Open the review list
        </Link>
      </section>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 prose prose-slate dark:prose-invert max-w-none prose-headings:mt-0 prose-p:text-sm">
        <h2>Disclaimers</h2>
        <p>
          This app is an unofficial study aid for the NASAA Series 65 exam. It is not
          affiliated with, endorsed by, or sponsored by NASAA, FINRA, the SEC, the CFP
          Board, or any commercial exam-prep provider.
        </p>
        <p>
          All content is original, written from publicly available sources including the
          Uniform Securities Act model law, NASAA model rules and Statements of Policy, and
          the Investment Advisers Act of 1940 and rules thereunder. No actual exam questions
          appear here &mdash; Series 65 exam content is confidential to NASAA and FINRA.
        </p>
        <p>
          The CFP and advisor-skills track is supplemental background material. It is not
          tested on the Series 65, is not CFP Board curriculum, and does not substitute for
          a registered CFP&reg; education program.
        </p>
        <p>
          This app is provided &ldquo;as is&rdquo; with no warranty. It is not legal, tax,
          compliance, investment, or examination advice. Securities laws and dollar
          thresholds change &mdash; verify current rules against primary sources before
          relying on anything here professionally.
        </p>
        <p>
          Open-source under the MIT License. Source:{' '}
          <a
            href="https://github.com/rivendale/series65-study-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/rivendale/series65-study-hub
          </a>
        </p>
      </section>
    </div>
  );
}
