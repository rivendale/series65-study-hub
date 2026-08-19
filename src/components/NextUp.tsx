import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { nextAction } from '../core/nextAction';
import type { Progress } from '../lib/progressStore';
import { questions } from '../data/questions';
import { topics } from '../data/curriculum';

/**
 * The single thing to do next.
 *
 * This is deliberately the FIRST element on Home and the only primary action on
 * the page. The app already knew what was due — spacedRepetition.ts computed it
 * and no screen ever showed it — so every session used to open by asking the
 * student to choose between reading, quizzing, a mock, and review. That is a
 * decision someone learning investing from zero cannot make well, and being
 * asked it before doing anything is what makes a study app feel like homework.
 *
 * Everything else on Home stays exactly where it was, below this. The menu is
 * not the problem; the menu being the FIRST thing was.
 */
export default function NextUp({ progress }: { progress: Progress }) {
  const read = new Set(Object.keys(progress.topicsRead));
  const a = nextAction(progress, questions, topics, read, Date.now());

  if (a.finished) {
    return (
      <section className="rounded-2xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40 p-5">
        <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
          <Check className="w-5 h-5" aria-hidden="true" />
          <h2 className="font-semibold">{a.label}</h2>
        </div>
        {a.then && (
          <p className="mt-1 text-sm text-emerald-800/80 dark:text-emerald-200/70">{a.then}</p>
        )}
        <Link
          to={a.to}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium
                     text-emerald-800 dark:text-emerald-200 underline underline-offset-4"
        >
          Browse a topic anyway
        </Link>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
        Next up
      </p>
      <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
        {a.label}
      </h2>
      {a.then && (
        <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{a.then}</p>
      )}
      <div className="mt-4 flex items-center gap-3">
        <Link
          to={a.to}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700
                     px-4 py-2.5 text-white font-medium shadow-sm transition-colors"
        >
          Continue
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          about {a.minutes} min
        </span>
      </div>
    </section>
  );
}
