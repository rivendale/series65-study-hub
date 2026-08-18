import { useEffect, useRef, useState } from 'react';
import CloudSyncCard from '../components/CloudSyncCard';
import { Link } from 'react-router-dom';
import {
  Download,
  Trash2,
  RotateCcw,
  Upload,
  Check,
  AlertCircle,
  AlertTriangle,
  HardDrive,
  Smartphone,
  Scissors,
  Cloud,
  LifeBuoy,
} from 'lucide-react';
import { readQuarantinedRecord, useProgress } from '../hooks/useProgress';
import { formatBytes, refreshEstimate } from '../core/storage';
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

/**
 * Storage health, shown inside the Data card.
 *
 * The loud case is a write that is not landing. Everywhere else in this app the
 * screen is the truth — answers appear, counters move — and that is exactly
 * what makes a refused write dangerous: it looks identical to a healthy one
 * until a reload wipes the session. So the warning is prominent, cannot be
 * dismissed, and carries the one action that salvages the situation.
 *
 * The quiet cases matter too. "Saved on this device" is worth stating plainly,
 * and a browser tab on iOS is a normal, non-broken state that still deserves a
 * word about eviction, since the fix is something only the student can do.
 */
function StorageHealth({
  storage,
  onExport,
  onDownloadRecoverable,
  onDiscardRecoverable,
}: {
  storage: ReturnType<typeof useProgress>['storage'];
  onExport: () => void;
  onDownloadRecoverable: () => void;
  onDiscardRecoverable: () => void;
}) {
  const failing = storage.writeStatus === 'failing';
  const showDurabilityNote =
    !failing && !storage.standalone && storage.persistence !== 'persisted';

  return (
    <div className="mb-4 space-y-3">
      {failing ? (
        <div
          role="alert"
          className="rounded-lg border-2 border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-950/50 p-4"
        >
          <h3 className="flex items-start gap-2 font-bold text-red-900 dark:text-red-100">
            <AlertTriangle
              className="w-5 h-5 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span>Your progress is not being saved</span>
          </h3>
          <p className="mt-2 text-sm text-red-900 dark:text-red-100">
            {storage.failureKind === 'quota'
              ? 'This browser has run out of room for this site, so nothing you answer is reaching storage.'
              : 'This browser is refusing to store data for this site — a private window, or a setting that blocks site data, will do that.'}{' '}
            What you see on screen is held in memory only and will be gone when
            you close or reload this tab.
          </p>
          <button
            type="button"
            onClick={onExport}
            className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 min-h-[44px] w-full sm:w-auto"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Export progress now
          </button>
          <p className="mt-3 text-sm text-red-900 dark:text-red-100">
            {storage.failureKind === 'quota' ? (
              <>
                Then make room: clearing stored data for other sites in your
                browser settings is usually enough. If nothing else can go,
                resetting progress here frees the space this record takes and
                your export file becomes the backup &mdash; import it again once
                there is room, and the merge puts everything back.
              </>
            ) : (
              <>
                Then leave the private window, or allow site data for this
                address, and saving will start working again. Import the file
                afterwards to pick up where you left off.
              </>
            )}
          </p>
        </div>
      ) : storage.writeStatus === 'ok' ? (
        <p className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
          <HardDrive
            className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-400 dark:text-slate-500"
            aria-hidden="true"
          />
          <span>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Saved on this device.
            </span>{' '}
            {storage.recordBytes !== null && (
              <>Your record is about {formatBytes(storage.recordBytes)}. </>
            )}
            {storage.estimate ? (
              <>
                This site is using {formatBytes(storage.estimate.usedBytes)} of
                the {formatBytes(storage.estimate.quotaBytes)} the browser
                allows, counting the offline copy of the app.
              </>
            ) : (
              <>This browser does not report how much storage is left.</>
            )}
            {storage.persistence === 'persisted' && (
              <> Storage here is marked persistent, so it will not be evicted.</>
            )}
          </span>
        </p>
      ) : (
        // Status is settled in an effect on first mount, so 'unknown' lasts a
        // single frame. Saying nothing for that frame is better than claiming
        // the record is saved before anything has proved that it is.
        null
      )}

      {storage.recovery && (
        <div
          role="alert"
          className="rounded-lg text-sm px-3 py-3 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
        >
          <p className="flex items-start gap-2">
            <LifeBuoy className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <span className="font-semibold">
                An earlier record could not be read.
              </span>{' '}
              Something was stored here &mdash; about{' '}
              {formatBytes(storage.recovery.bytes)} of it &mdash; that this
              version of the app could not open, so progress on this device
              started again from empty. That happens if a save was cut short, or
              if the record was written by a different version.{' '}
              {storage.recovery.preserved ? (
                <>
                  The original has been set aside untouched and nothing has
                  overwritten it. Download it before discarding it: a later
                  version may be able to read it, and it is the only copy.
                </>
              ) : (
                <>
                  This browser would not let it be copied somewhere safe, so it
                  is still under the main key and the next thing you save will
                  replace it. Fixing whatever is blocking storage and reloading
                  is the only way to keep the chance of recovering it.
                </>
              )}
            </span>
          </p>
          {storage.recovery.preserved && (
            <div className="mt-3 flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={onDownloadRecoverable}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-amber-600 text-white hover:bg-amber-700 min-h-[44px]"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download the unreadable record
              </button>
              <button
                type="button"
                onClick={onDiscardRecoverable}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 min-h-[44px]"
              >
                <Trash2 className="w-4 h-4" aria-hidden="true" />
                Discard it
              </button>
            </div>
          )}
        </div>
      )}

      {storage.trim && (
        <p className="flex items-start gap-2 text-sm rounded-lg px-3 py-2 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          <Scissors className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            <span className="font-semibold">Mock history was trimmed.</span>{' '}
            Storage filled up, so the {storage.trim.dropped} oldest mock attempt
            {storage.trim.dropped === 1 ? '' : 's'} had to be dropped to keep
            saving. The {storage.trim.kept} most recent are kept, and your
            answers and topics read were not touched. Export now if you want a
            copy before it happens again.
          </span>
        </p>
      )}

      {showDurabilityNote && (
        <p className="flex items-start gap-2 text-sm rounded-lg px-3 py-2 bg-slate-50 text-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
          <Smartphone className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            <span className="font-semibold">Worth doing:</span> add this app to
            your home screen. Running in a browser tab, iOS may clear the record
            after about a week without opening it &mdash; easily a holiday
            inside a study cycle. Installed, it stays put. On iPhone: Share, then
            Add to Home Screen. Exporting now and then covers the rest.
          </span>
        </p>
      )}
    </div>
  );
}

function barColor(pct: number) {
  if (pct >= 80) return 'emerald' as const;
  if (pct >= 65) return 'blue' as const;
  if (pct >= 50) return 'amber' as const;
  return 'red' as const;
}

export default function ProgressPage() {
  const { progress, storage, resetAll, discardRecoverable, exportJson, importProgress } =
    useProgress();
  const fileInput = useRef<HTMLInputElement>(null);
  const [importMsg, setImportMsg] = useState<
    { kind: 'ok' | 'error'; text: string } | null
  >(null);
  const overall = overallStats(progress);
  const topicStats = statsByTopic(progress);
  const categoryStats = statsByCategory(progress);
  const missed = missedQuestionIds(progress);
  const [confirming, setConfirming] = useState(false);

  // The usage figure is only interesting on the page that shows it, and it can
  // move between visits, so it is re-read here rather than left at whatever the
  // reading was when the app started.
  useEffect(() => {
    void refreshEstimate();
  }, []);

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

  const saveFile = (contents: string, name: string) => {
    const blob = new Blob([contents], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  };

  const today = () => new Date().toISOString().split('T')[0];

  const download = () => saveFile(exportJson(), `series65-progress-${today()}.json`);

  const downloadRecoverable = () => {
    const raw = readQuarantinedRecord();
    if (raw === null) {
      // Gone between the notice rendering and the tap — nothing to hand over,
      // and pretending otherwise by downloading an empty file would be worse.
      discardRecoverable();
      return;
    }
    saveFile(raw, `series65-unreadable-record-${today()}.json`);
  };

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold">Progress</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Progress is stored on this device. Sign in below and it also follows
          you between your phone and laptop; without signing in, nothing ever
          leaves this browser.
        </p>
      </header>

      <CloudSyncCard />

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
        <StorageHealth
          storage={storage}
          onExport={download}
          onDownloadRecoverable={downloadRecoverable}
          onDiscardRecoverable={discardRecoverable}
        />
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
