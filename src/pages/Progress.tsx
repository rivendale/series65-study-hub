import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  Trash2,
  RotateCcw,
  Upload,
  Check,
  AlertCircle,
  Cloud,
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import {
  overallStats,
  statsByTopic,
  statsByCategory,
  missedQuestionIds,
} from '../lib/stats';
import ProgressBar from '../components/ProgressBar';
import { parseProgressFile } from '../lib/mergeProgress';
import { examInfo } from '../data/examInfo';
import { TOPIC_TO_CATEGORY, OFFICIAL_CATEGORIES } from '../data/categories';

function barColor(pct: number) {
  if (pct >= 80) return 'emerald' as const;
  if (pct >= 65) return 'blue' as const;
  if (pct >= 50) return 'amber' as const;
  return 'red' as const;
}

export default function ProgressPage() {
  const { progress, resetAll, exportJson, importProgress } = useProgress();
  const fileInput = useRef<HTMLInputElement>(null);
  const [importMsg, setImportMsg] = useState<
    { kind: 'ok' | 'error'; text: string } | null
  >(null);
  const overall = overallStats(progress);
  const topicStats = statsByTopic(progress);
  const categoryStats = statsByCategory(progress);
  const missed = missedQuestionIds(progress);
  const [confirming, setConfirming] = useState(false);

  const handleFile = async (file: File) => {
    const result = parseProgressFile(await file.text());
    if (!result.ok || !result.progress) {
      setImportMsg({ kind: 'error', text: result.error ?? 'Could not read that file.' });
      return;
    }
    importProgress(result.progress);
    const s = result.stats!;
    setImportMsg({
      kind: 'ok',
      text: `Merged ${s.answered} answered question${s.answered === 1 ? '' : 's'}, ${s.topicsRead} topic${s.topicsRead === 1 ? '' : 's'} read and ${s.mockAttempts} mock attempt${s.mockAttempts === 1 ? '' : 's'}. Nothing already on this device was lost.`,
    });
  };

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
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
          To carry progress between a phone, tablet and laptop, export here and
          import the file on the other device. Importing <em>merges</em> rather
          than replaces, so work done on either device survives and it is safe
          to import the same file twice.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <button
            type="button"
            onClick={download}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            Export progress
          </button>
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void handleFile(f);
              e.target.value = '';
            }}
          />
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-blue-400 min-h-[44px]"
          >
            <Upload className="w-4 h-4" />
            Import and merge
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
        {importMsg && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-3 flex items-start gap-2 text-sm rounded-lg px-3 py-2 ${
              importMsg.kind === 'ok'
                ? 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
                : 'bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200'
            }`}
          >
            {importMsg.kind === 'ok' ? (
              <Check className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
            )}
            <span>{importMsg.text}</span>
          </p>
        )}

        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-sm font-semibold mb-1">
            Or sync automatically
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Moving files by hand gets old. Optional encrypted sync does the same
            merge over the network &mdash; but there is no shared server here, so
            it means deploying a small worker to your own account first. It is
            off until you set it up, and while it is off nothing leaves this
            device.
          </p>
          <Link
            to="/sync"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-blue-400 min-h-[44px]"
          >
            <Cloud className="w-4 h-4" aria-hidden="true" />
            Sync settings
          </Link>
        </div>
      </section>
    </div>
  );
}
