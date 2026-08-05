import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Trash2, RotateCcw } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import {
  overallStats,
  statsByTopic,
  statsByCategory,
  missedQuestionIds,
} from '../lib/stats';
import ProgressBar from '../components/ProgressBar';
import { examInfo } from '../data/examInfo';
import { TOPIC_TO_CATEGORY, OFFICIAL_CATEGORIES } from '../data/categories';

function barColor(pct: number) {
  if (pct >= 80) return 'emerald' as const;
  if (pct >= 65) return 'blue' as const;
  if (pct >= 50) return 'amber' as const;
  return 'red' as const;
}

export default function ProgressPage() {
  const { progress, resetAll, exportJson } = useProgress();
  const overall = overallStats(progress);
  const topicStats = statsByTopic(progress);
  const categoryStats = statsByCategory(progress);
  const missed = missedQuestionIds(progress);
  const [confirming, setConfirming] = useState(false);

  const download = () => {
    const blob = new Blob([exportJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `series65-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold">Progress</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          All data is stored locally in your browser. Nothing leaves this device.
        </p>
      </header>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <h2 className="font-semibold mb-3">Overall</h2>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3">
            <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Answered
            </div>
            <div className="text-2xl font-bold mt-0.5">{overall.answered}</div>
          </div>
          <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3">
            <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Correct
            </div>
            <div className="text-2xl font-bold mt-0.5">{overall.correct}</div>
          </div>
          <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3">
            <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Accuracy
            </div>
            <div className="text-2xl font-bold mt-0.5">{overall.pct}%</div>
          </div>
        </div>
        <ProgressBar value={overall.pct} color={barColor(overall.pct)} />
        {missed.length > 0 && (
          <Link
            to="/quiz/missed"
            className="mt-4 inline-flex items-center gap-2 px-4 py-3 rounded-lg font-semibold bg-amber-500 text-white hover:bg-amber-600 min-h-[44px]"
          >
            <RotateCcw className="w-4 h-4" />
            Drill {missed.length} missed question{missed.length === 1 ? '' : 's'}
          </Link>
        )}
      </section>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <h2 className="font-semibold mb-1">By exam category</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Readiness against the official NASAA blueprint.
        </p>
        <ul className="space-y-3">
          {categoryStats.map((c) => (
            <li key={c.id}>
              <div className="flex items-center justify-between mb-1 gap-2">
                <span className="text-sm font-medium">{c.shortName}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {c.answered}/{c.total} answered &middot; {c.pct}% &middot; worth{' '}
                  {c.blueprintPct}%
                </span>
              </div>
              <ProgressBar value={c.pct} color={barColor(c.pct)} />
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <h2 className="font-semibold mb-3">By topic</h2>
        <ul className="space-y-3">
          {topicStats
            .filter((s) => s.total > 0)
            .map((s) => (
              <li key={s.id}>
                <div className="flex items-center justify-between mb-1 gap-2">
                  <span className="text-sm font-medium">
                    {s.title}
                    {TOPIC_TO_CATEGORY[s.id] === 'cfp-advisor' && (
                      <span className="ml-2 text-xs font-normal text-violet-600 dark:text-violet-400">
                        {OFFICIAL_CATEGORIES['cfp-advisor'].shortName}
                      </span>
                    )}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {s.answered}/{s.total} &middot; {s.pct}%
                  </span>
                </div>
                <ProgressBar value={s.pct} color={barColor(s.pct)} />
              </li>
            ))}
        </ul>
      </section>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <h2 className="font-semibold mb-3">Mock exam history</h2>
        {progress.mockAttempts.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No mock attempts yet.
          </p>
        ) : (
          <ul className="space-y-2">
            {progress.mockAttempts.map((m) => (
              <li
                key={m.ts}
                className="flex items-center justify-between text-sm border-t border-slate-100 dark:border-slate-800 pt-2 first:border-0 first:pt-0"
              >
                <div>
                  <div className="font-medium">
                    {new Date(m.ts).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {m.correct}/{m.total} scored &middot; {Math.round(m.timeUsed / 60000)} min
                  </div>
                </div>
                <span
                  className={`text-sm font-semibold px-2 py-0.5 rounded-full ${
                    m.correct >= examInfo.passingScore
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                      : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
                  }`}
                >
                  {m.pct}%
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <h2 className="font-semibold mb-3">Data</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={download}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            Export progress
          </button>
          {!confirming ? (
            <button
              type="button"
              onClick={() => setConfirming(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-white dark:bg-slate-900 border border-red-300 text-red-700 dark:text-red-400 hover:bg-red-50 min-h-[44px]"
            >
              <Trash2 className="w-4 h-4" />
              Reset all progress
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  resetAll();
                  setConfirming(false);
                }}
                className="px-4 py-3 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 min-h-[44px]"
              >
                Confirm reset
              </button>
              <button
                type="button"
                onClick={() => setConfirming(false)}
                className="px-4 py-3 rounded-lg font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 min-h-[44px]"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
