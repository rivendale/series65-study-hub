import { Link } from 'react-router-dom';
import {
  BookOpen,
  Brain,
  Timer,
  BarChart3,
  BookMarked,
  Sparkles,
  Sigma,
  RotateCcw,
  GraduationCap,
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { overallStats, statsByCategory, missedQuestionIds } from '../lib/stats';
import { topics } from '../data/curriculum';
import { questions } from '../data/questions';
import { examInfo } from '../data/examInfo';
import { TOPIC_TO_CATEGORY } from '../data/categories';
import ProgressBar from '../components/ProgressBar';

export default function Home() {
  const { progress } = useProgress();
  const overall = overallStats(progress);
  const categoryStats = statsByCategory(progress);
  const missed = missedQuestionIds(progress);
  const lastMock = progress.mockAttempts[0];

  const examTopics = topics.filter(
    (t) => TOPIC_TO_CATEGORY[t.id] !== 'cfp-advisor'
  );
  const cfpTopics = topics.filter(
    (t) => TOPIC_TO_CATEGORY[t.id] === 'cfp-advisor'
  );
  const topicsReadCount = Object.keys(progress.topicsRead).length;

  return (
    <div className="space-y-5">
      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 sm:p-6 shadow-sm">
        <p className="text-sm font-medium text-white/80">Series 65</p>
        <h1 className="text-2xl sm:text-3xl font-bold mt-1">
          Uniform Investment Adviser Law
        </h1>
        <p className="mt-2 text-sm text-white/90 max-w-prose">
          {examInfo.totalQuestions} questions ({examInfo.scoredQuestions} scored +{' '}
          {examInfo.pretestQuestions} pretest) in {examInfo.timeMinutes} minutes. You need{' '}
          {examInfo.passingScore} of {examInfo.scoredQuestions} to pass.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-white/10 p-3">
            <div className="text-xs uppercase tracking-wide text-white/70">Answered</div>
            <div className="text-xl font-semibold mt-0.5">{overall.answered}</div>
          </div>
          <div className="rounded-xl bg-white/10 p-3">
            <div className="text-xs uppercase tracking-wide text-white/70">Accuracy</div>
            <div className="text-xl font-semibold mt-0.5">{overall.pct}%</div>
          </div>
          <div className="rounded-xl bg-white/10 p-3">
            <div className="text-xs uppercase tracking-wide text-white/70">Topics read</div>
            <div className="text-xl font-semibold mt-0.5">
              {topicsReadCount}/{topics.length}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <h2 className="font-semibold mb-1">Where the points are</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Study in blueprint order. Client Recommendations and Laws &amp; Ethics are 60% of
          the exam between them.
        </p>
        <ul className="space-y-3">
          {[...categoryStats]
            .sort((a, b) => b.blueprintQuestions - a.blueprintQuestions)
            .map((c) => (
              <li key={c.id}>
                <div className="flex items-center justify-between mb-1 gap-2">
                  <span className="text-sm font-medium">{c.shortName}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {c.blueprintQuestions} Q &middot; {c.blueprintPct}%
                    {c.answered > 0 && ` · ${c.pct}% correct`}
                  </span>
                </div>
                <ProgressBar
                  value={c.answered === 0 ? 0 : c.pct}
                  color={
                    c.answered === 0
                      ? 'blue'
                      : c.pct >= 80
                        ? 'emerald'
                        : c.pct >= 65
                          ? 'blue'
                          : c.pct >= 50
                            ? 'amber'
                            : 'red'
                  }
                />
              </li>
            ))}
        </ul>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          to="/curriculum"
          className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-400 transition"
        >
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="mt-3 font-semibold">Read curriculum</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {examTopics.length} exam topics across the four NASAA categories.
          </p>
        </Link>

        <Link
          to="/topics"
          className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-400 transition"
        >
          <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="mt-3 font-semibold">Topic quiz</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Drill {questions.length} questions with immediate feedback.
          </p>
        </Link>

        <Link
          to="/quiz/mock"
          className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-400 transition"
        >
          <Timer className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="mt-3 font-semibold">Mock exam</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Full {examInfo.totalQuestions}-question simulation, {examInfo.timeMinutes} minutes,
            blueprint-weighted.
          </p>
        </Link>

        {missed.length > 0 ? (
          <Link
            to="/quiz/missed"
            className="rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-900/60 p-5 hover:border-amber-500 transition"
          >
            <RotateCcw className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            <h2 className="mt-3 font-semibold">Review missed</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {missed.length} question{missed.length === 1 ? '' : 's'} you have gotten wrong.
              Oldest first.
            </p>
          </Link>
        ) : (
          <Link
            to="/progress"
            className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-400 transition"
          >
            <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="mt-3 font-semibold">Progress</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Stats by category and by topic, plus mock history.
            </p>
          </Link>
        )}

        <Link
          to="/formulas"
          className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-400 transition"
        >
          <Sigma className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="mt-3 font-semibold">Formulas</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Every calculation you need, in one searchable place.
          </p>
        </Link>

        <Link
          to="/cheatsheet"
          className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-400 transition"
        >
          <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="mt-3 font-semibold">Cheat Sheet</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Thresholds, deadlines, and the most-tested rules.
          </p>
        </Link>

        <Link
          to="/glossary"
          className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-400 transition"
        >
          <BookMarked className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="mt-3 font-semibold">Glossary</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Every key term across the curriculum, searchable.
          </p>
        </Link>

        {cfpTopics.length > 0 && (
          <Link
            to="/curriculum"
            className="rounded-xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-900/50 p-5 hover:border-violet-400 transition"
          >
            <GraduationCap className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            <h2 className="mt-3 font-semibold text-violet-900 dark:text-violet-200">
              CFP &amp; advisor skills
            </h2>
            <p className="mt-1 text-sm text-violet-900/80 dark:text-violet-100/80">
              {cfpTopics.length} supplemental topics. Not on the exam &mdash; but this is the
              job.
            </p>
          </Link>
        )}
      </section>

      {lastMock && (
        <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">Last mock exam</h2>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                lastMock.correct >= examInfo.passingScore
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                  : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
              }`}
            >
              {lastMock.correct >= examInfo.passingScore ? 'Pass' : 'Below pass'}
            </span>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            {lastMock.correct}/{lastMock.total} correct &middot; {lastMock.pct}% &middot;{' '}
            {Math.round(lastMock.timeUsed / 60000)} min used
          </div>
          <ProgressBar
            value={lastMock.pct}
            color={
              lastMock.correct >= examInfo.passingScore ? 'emerald' : 'amber'
            }
            className="mt-3"
          />
        </section>
      )}
    </div>
  );
}
