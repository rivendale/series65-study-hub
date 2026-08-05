import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  CalendarRange,
  Zap,
  CheckCircle2,
  Circle,
  MapPin,
  Target,
  Timer,
  BookOpen,
  Brain,
  RotateCcw,
  AlertTriangle,
  GraduationCap,
  Info,
  ListChecks,
} from 'lucide-react';
import { useProgress, type StudyPlanId, type Progress } from '../hooks/useProgress';
import {
  statsByTopic,
  statsByCategory,
  overallStats,
  missedQuestionIds,
  type TopicStat,
} from '../lib/stats';
import { topics, type Topic } from '../data/curriculum';
import { examInfo } from '../data/examInfo';
import {
  OFFICIAL_CATEGORIES,
  TOPIC_TO_CATEGORY,
  EXAM_CATEGORY_IDS,
  type OfficialCategoryId,
} from '../data/categories';
import ProgressBar from '../components/ProgressBar';

/* ------------------------------------------------------------------ */
/* Plan shapes                                                         */
/* ------------------------------------------------------------------ */

interface PlanMeta {
  id: StudyPlanId;
  label: string;
  weeks: number;
  /** Weeks at the end reserved for review, mocks and missed-question drilling. */
  reviewWeeks: number;
  hours: string;
  who: string;
  icon: typeof CalendarDays;
}

const PLANS: PlanMeta[] = [
  {
    id: 'eight-week',
    label: '8 weeks',
    weeks: 8,
    reviewWeeks: 2,
    hours: 'about 10 hrs / week',
    who: 'The default. Fits around a full-time job: roughly 90 minutes on weeknights plus a longer weekend block.',
    icon: CalendarDays,
  },
  {
    id: 'twelve-week',
    label: '12 weeks',
    weeks: 12,
    reviewWeeks: 3,
    hours: 'about 6 hrs / week',
    who: 'The least stressful pace. Smaller weekly load, more spacing between passes, which is better for retention if you have the runway.',
    icon: CalendarRange,
  },
  {
    id: 'intensive',
    label: '4 weeks',
    weeks: 4,
    reviewWeeks: 1,
    hours: 'about 20 hrs / week',
    who: 'Full-time study. Workable, but it leaves almost no slack: a bad week cannot be absorbed.',
    icon: Zap,
  },
];

const DEFAULT_PLAN: StudyPlanId = 'eight-week';

/* ------------------------------------------------------------------ */
/* Deriving the study sequence from real data                          */
/* ------------------------------------------------------------------ */

// Heaviest blueprint category first. Ties (Laws & Ethics and Client
// Recommendations are both 30%) break in this order.
const TIEBREAK: OfficialCategoryId[] = [
  'laws-ethics',
  'client-recommendations',
  'investment-vehicles',
  'economic-factors',
];

const CATEGORY_SEQUENCE: OfficialCategoryId[] = [...EXAM_CATEGORY_IDS].sort(
  (a, b) => {
    const byWeight =
      OFFICIAL_CATEGORIES[b].questions - OFFICIAL_CATEGORIES[a].questions;
    if (byWeight !== 0) return byWeight;
    return TIEBREAK.indexOf(a) - TIEBREAK.indexOf(b);
  }
);

const EXAM_TOPICS: Topic[] = topics.filter(
  (t) => TOPIC_TO_CATEGORY[t.id] !== 'cfp-advisor'
);
const CFP_TOPICS: Topic[] = topics.filter(
  (t) => TOPIC_TO_CATEGORY[t.id] === 'cfp-advisor'
);

// Every exam topic, ordered by category weight then by the topic's own
// curriculum order. Built from the data, so adding a topic re-flows the
// calendar automatically instead of leaving the page stale.
const STUDY_SEQUENCE: Topic[] = (() => {
  const byCategory = CATEGORY_SEQUENCE.flatMap((cat) =>
    EXAM_TOPICS.filter((t) => TOPIC_TO_CATEGORY[t.id] === cat).sort(
      (a, b) => a.order - b.order
    )
  );
  // Safety net: an exam topic missing from TOPIC_TO_CATEGORY still gets studied.
  const seen = new Set(byCategory.map((t) => t.id));
  const orphans = EXAM_TOPICS.filter((t) => !seen.has(t.id)).sort(
    (a, b) => a.order - b.order
  );
  return [...byCategory, ...orphans];
})();

const HEAVY_CATEGORIES: OfficialCategoryId[] = CATEGORY_SEQUENCE.slice(0, 2);

function chunkEvenly<T>(items: T[], parts: number): T[][] {
  const out: T[][] = [];
  if (parts <= 0) return out;
  const base = Math.floor(items.length / parts);
  let extra = items.length % parts;
  let i = 0;
  for (let p = 0; p < parts; p += 1) {
    const size = base + (extra > 0 ? 1 : 0);
    if (extra > 0) extra -= 1;
    out.push(items.slice(i, i + size));
    i += size;
  }
  return out;
}

type WeekKind = 'content' | 'review';

interface WeekPlan {
  week: number;
  kind: WeekKind;
  theme: string;
  topics: Topic[];
  milestone: string;
  mockNumber: number | null;
  /** Cumulative mocks that should be in the log by the end of this week. */
  requiredMocks: number;
}

function mockWeeksFor(weeks: number): number[] {
  const first = Math.max(1, Math.round(weeks * 0.4));
  const last = weeks;
  let second = Math.max(first + 1, Math.round(weeks * 0.7));
  if (second >= last) second = last - 1;
  const set = [first, second, last].filter((w) => w >= 1);
  return Array.from(new Set(set)).sort((a, b) => a - b);
}

function buildWeeks(plan: PlanMeta): WeekPlan[] {
  const contentWeeks = Math.max(1, plan.weeks - plan.reviewWeeks);
  const chunks = chunkEvenly(STUDY_SEQUENCE, contentWeeks);
  const mocks = mockWeeksFor(plan.weeks);

  const raw: WeekPlan[] = [];

  for (let w = 1; w <= plan.weeks; w += 1) {
    const isContent = w <= contentWeeks;
    const weekTopics = isContent ? chunks[w - 1] : [];
    const mockIndex = mocks.indexOf(w);
    const mockNumber = mockIndex === -1 ? null : mockIndex + 1;
    const requiredMocks = mocks.filter((m) => m <= w).length;

    const cats = Array.from(
      new Set(weekTopics.map((t) => TOPIC_TO_CATEGORY[t.id]))
    ).filter(Boolean) as OfficialCategoryId[];

    let theme: string;
    if (isContent) {
      theme = cats.map((c) => OFFICIAL_CATEGORIES[c].shortName).join(' then ');
    } else if (w === plan.weeks) {
      theme = 'Final review and last mock';
    } else if (mockNumber !== null) {
      theme = 'Timed mock and weak-area repair';
    } else {
      theme = 'Spaced second pass over the two 30% categories';
    }

    const milestoneParts: string[] = [];
    if (isContent) {
      milestoneParts.push(
        'Every topic above marked read, and at least 70% of this week’s questions attempted.'
      );
    } else if (w === plan.weeks) {
      milestoneParts.push(
        'Missed-question queue emptied at least once this week.'
      );
    } else {
      milestoneParts.push(
        'Re-read the weakest topics above, then clear the missed-question queue.'
      );
    }

    if (mockNumber === 1) {
      milestoneParts.push(
        'Diagnostic mock: take it cold, full length, timed. A low score here is a map, not a verdict.'
      );
    } else if (mockNumber === 2) {
      milestoneParts.push(
        'Second full mock. Look at the two 30% categories, not just the headline number.'
      );
    } else if (mockNumber !== null) {
      milestoneParts.push(
        'Final mock under real conditions. Sit the exam only once you are clearing ' +
          examInfo.passingScore +
          ' of ' +
          examInfo.scoredQuestions +
          ' with room to spare.'
      );
    }

    raw.push({
      week: w,
      kind: isContent ? 'content' : 'review',
      theme,
      topics: weekTopics,
      milestone: milestoneParts.join(' '),
      mockNumber,
      requiredMocks,
    });
  }

  // Number repeated themes ("Laws & Ethics", part 1 of 3, ...).
  const counts = new Map<string, number>();
  raw.forEach((w) => {
    counts.set(w.theme, (counts.get(w.theme) ?? 0) + 1);
  });
  const seen = new Map<string, number>();
  return raw.map((w) => {
    const total = counts.get(w.theme) ?? 1;
    if (total < 2) return w;
    const n = (seen.get(w.theme) ?? 0) + 1;
    seen.set(w.theme, n);
    return { ...w, theme: w.theme + ' — part ' + n + ' of ' + total };
  });
}

/* ------------------------------------------------------------------ */
/* Live overlay helpers                                                */
/* ------------------------------------------------------------------ */

interface WeekStatus {
  read: number;
  readTotal: number;
  answered: number;
  correct: number;
  questionTotal: number;
  accuracy: number | null;
  complete: boolean;
}

function weekStatus(
  w: WeekPlan,
  displayTopics: Topic[],
  statMap: Map<string, TopicStat>,
  progress: Progress
): WeekStatus {
  let read = 0;
  let answered = 0;
  let correct = 0;
  let questionTotal = 0;
  displayTopics.forEach((t) => {
    if (progress.topicsRead[t.id]) read += 1;
    const s = statMap.get(t.id);
    if (s) {
      answered += s.answered;
      correct += s.correct;
      questionTotal += s.total;
    }
  });
  const accuracy = answered === 0 ? null : Math.round((correct / answered) * 100);
  const mocksOk = progress.mockAttempts.length >= w.requiredMocks;

  let complete: boolean;
  if (w.kind === 'content') {
    const drilled = questionTotal === 0 || answered / questionTotal >= 0.7;
    complete = read === displayTopics.length && drilled && mocksOk;
  } else {
    const allRead = EXAM_TOPICS.every((t) => progress.topicsRead[t.id]);
    complete = allRead && mocksOk;
  }

  return {
    read,
    readTotal: displayTopics.length,
    answered,
    correct,
    questionTotal,
    accuracy,
    complete,
  };
}

/** Weakest topics right now: unread first, then lowest accuracy. */
function weakestTopics(
  statMap: Map<string, TopicStat>,
  progress: Progress,
  pool: Topic[],
  limit: number
): Topic[] {
  const scored = pool.map((t) => {
    const s = statMap.get(t.id);
    const unread = progress.topicsRead[t.id] ? 0 : 1;
    const acc = !s || s.answered === 0 ? 60 : s.pct;
    return { t, unread, acc, order: t.order };
  });
  scored.sort((a, b) => {
    if (a.unread !== b.unread) return b.unread - a.unread;
    if (a.acc !== b.acc) return a.acc - b.acc;
    return a.order - b.order;
  });
  return scored.slice(0, limit).map((s) => s.t);
}

interface Readout {
  label: string;
  text: string;
  tone: 'good' | 'close' | 'low' | 'none';
}

function mockReadout(progress: Progress, firstMockWeek: number): Readout {
  const attempts = progress.mockAttempts;
  if (attempts.length === 0) {
    return {
      tone: 'none',
      label: 'No mock logged yet',
      text:
        'You have not sat a full mock yet. The first one is scheduled for week ' +
        firstMockWeek +
        '. Do not delay it until you feel ready — an early bad score tells you where to spend the next month.',
    };
  }
  const recent = attempts.slice(0, 3);
  const latest = recent[0];
  const best = recent.reduce((m, a) => (a.pct > m ? a.pct : m), 0);
  const projected = Math.round((latest.pct / 100) * examInfo.scoredQuestions);
  const comfortable = Math.round(0.8 * examInfo.scoredQuestions);
  const stem =
    'Most recent mock: ' +
    latest.correct +
    '/' +
    latest.total +
    ' (' +
    latest.pct +
    '%), which projects to roughly ' +
    projected +
    ' of ' +
    examInfo.scoredQuestions +
    ' scored questions. Pass is ' +
    examInfo.passingScore +
    '. Best of your last ' +
    recent.length +
    ': ' +
    best +
    '%.';

  if (projected >= comfortable) {
    return {
      tone: 'good',
      label: 'Comfortably above the line',
      text:
        stem +
        ' That is the margin you want before booking. Keep drilling missed questions so the margin holds.',
    };
  }
  if (projected >= examInfo.passingScore) {
    return {
      tone: 'close',
      label: 'Over the line, but thin',
      text:
        stem +
        ' Passing on paper, but a single bad category on exam day erases that gap. Aim for ' +
        comfortable +
        '+ before you book.',
    };
  }
  return {
    tone: 'low',
    label: 'Below the pass mark',
    text:
      stem +
      ' Not ready yet, and that is fine at this stage. Work the missed-question queue and your two weakest categories before the next mock.',
  };
}

function accuracyLabel(answered: number, pct: number): string {
  if (answered === 0) return 'Not started';
  if (pct >= 80) return 'Strong';
  if (pct >= 70) return 'On track';
  if (pct >= 55) return 'Shaky';
  return 'Weak';
}

function accuracyColor(
  answered: number,
  pct: number
): 'blue' | 'emerald' | 'amber' | 'red' {
  if (answered === 0) return 'blue';
  if (pct >= 80) return 'emerald';
  if (pct >= 70) return 'blue';
  if (pct >= 55) return 'amber';
  return 'red';
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const guidance: { title: string; body: string }[] = [
  {
    title: 'Drill before you feel ready',
    body: 'Pulling an answer out of memory builds retention far better than reading the same page again. Re-reading feels productive because the material looks familiar; familiarity is not recall. Read a topic once, then go straight to its quiz even if you expect to do badly.',
  },
  {
    title: 'Space the review, do not cram it',
    body: 'The same total hours produce more durable memory when they are spread out and revisited after you have partly forgotten. That is exactly what the missed-questions drill is for: it feeds you the items you got wrong, oldest first, at a point where you have to reconstruct rather than recognize.',
  },
  {
    title: 'Explain why the wrong answer was wrong',
    body: 'Every explanation in this app names the trap in the distractors. Say it out loud: not just "the answer is the fiduciary standard" but "B was wrong because it describes suitability, which is the broker-dealer test". The exam is built out of near-misses, so the discrimination is the skill being tested.',
  },
  {
    title: 'Take mocks under real conditions',
    body:
      'Full ' +
      examInfo.totalQuestions +
      ' questions, ' +
      examInfo.timeMinutes +
      ' minutes, no notes, no phone, no pausing. A mock taken in three sittings with the cheat sheet open tells you nothing about whether you can pass. Pacing is roughly ' +
      Math.floor((examInfo.timeMinutes * 60) / examInfo.totalQuestions) +
      ' seconds per question.',
  },
  {
    title: 'The CFP track is enrichment, not exam material',
    body: 'The supplemental advisor topics are excluded from mock-exam sampling and none of it is scored on the Series 65. It is genuinely useful for the job. It is not useful for the test. Do not let it eat exam hours.',
  },
  {
    title: 'Verify the numbers against primary sources',
    body: 'This app is one resource, written from the USA model law and NASAA materials. Dollar thresholds drift — qualified-client figures, contribution limits, RMD ages. Before exam day, check the current figures against NASAA, SEC and IRS publications rather than trusting any prep app, including this one.',
  },
];

export default function StudyPlan() {
  const { progress, setPreferences } = useProgress();

  const planId: StudyPlanId = progress.preferences.studyPlan ?? DEFAULT_PLAN;
  const plan = PLANS.find((p) => p.id === planId) ?? PLANS[0];

  const weeks = useMemo(() => buildWeeks(plan), [plan]);
  const topicStats = statsByTopic(progress);
  const statMap = useMemo(() => {
    const m = new Map<string, TopicStat>();
    topicStats.forEach((s) => m.set(s.id, s));
    return m;
  }, [topicStats]);

  const categoryStats = statsByCategory(progress);
  const overall = overallStats(progress);
  const missed = missedQuestionIds(progress);

  const heavyPool = EXAM_TOPICS.filter((t) =>
    HEAVY_CATEGORIES.includes(TOPIC_TO_CATEGORY[t.id])
  );

  // Resolve display topics per week (review weeks are filled from live stats).
  const resolved = weeks.map((w) => {
    const displayTopics =
      w.kind === 'content'
        ? w.topics
        : weakestTopics(
            statMap,
            progress,
            w.week === plan.weeks ? EXAM_TOPICS : heavyPool,
            6
          );
    return {
      week: w,
      displayTopics,
      status: weekStatus(w, displayTopics, statMap, progress),
    };
  });

  const currentWeek =
    resolved.find((r) => !r.status.complete)?.week.week ?? plan.weeks;

  const firstMockWeek = mockWeeksFor(plan.weeks)[0];
  const readout = mockReadout(progress, firstMockWeek);
  const readoutTone =
    readout.tone === 'good'
      ? 'border-emerald-300 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/30'
      : readout.tone === 'close'
        ? 'border-amber-300 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30'
        : readout.tone === 'low'
          ? 'border-red-300 dark:border-red-900/60 bg-red-50 dark:bg-red-950/30'
          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900';

  const topicsReadCount = EXAM_TOPICS.filter(
    (t) => progress.topicsRead[t.id]
  ).length;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold">Study Plan</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          A week-by-week route through all {EXAM_TOPICS.length} exam topics,
          sequenced heaviest-weight-first, with mocks built in. It updates as you
          work, so it is a checklist and not a poster.
        </p>
      </header>

      {/* ---------------------------------------------------------- */}
      {/* Plan selector                                               */}
      {/* ---------------------------------------------------------- */}
      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="font-semibold text-lg">Pick a pace</h2>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          role="group"
          aria-label="Study plan pace"
        >
          {PLANS.map((p) => {
            const Icon = p.icon;
            const active = p.id === plan.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setPreferences({ studyPlan: p.id })}
                aria-pressed={active}
                className={
                  'text-left rounded-xl border p-4 min-h-[44px] transition ' +
                  (active
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:border-blue-400 ring-1 ring-blue-600 dark:ring-blue-400'
                    : 'border-slate-200 dark:border-slate-800 hover:border-blue-400')
                }
              >
                <div className="flex items-center justify-between gap-2">
                  <Icon
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    aria-hidden="true"
                  />
                  {active && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      Selected
                    </span>
                  )}
                </div>
                <div className="mt-2 font-semibold">{p.label}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {p.hours}
                </div>
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          {plan.who}
        </p>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          All three cover the same {EXAM_TOPICS.length} topics and reserve the
          last {plan.reviewWeeks} of {plan.weeks} weeks for review, mocks and
          missed-question drilling. Your choice is saved on this device.
        </p>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Readiness                                                   */}
      {/* ---------------------------------------------------------- */}
      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <div className="flex items-center gap-2 mb-3">
          <ListChecks className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="font-semibold text-lg">Where you actually are</h2>
        </div>

        <dl className="grid grid-cols-3 gap-3 text-sm mb-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3">
            <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Topics read
            </dt>
            <dd className="font-semibold text-lg">
              {topicsReadCount}/{EXAM_TOPICS.length}
            </dd>
          </div>
          <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3">
            <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Answered
            </dt>
            <dd className="font-semibold text-lg">{overall.answered}</dd>
          </div>
          <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3">
            <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Accuracy
            </dt>
            <dd className="font-semibold text-lg">{overall.pct}%</dd>
          </div>
        </dl>

        <h3 className="text-sm font-semibold mb-2">
          By blueprint category
        </h3>
        <ul className="space-y-3">
          {[...categoryStats]
            .sort((a, b) => b.blueprintQuestions - a.blueprintQuestions)
            .map((c) => (
              <li key={c.id}>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-sm font-medium">{c.shortName}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {c.blueprintQuestions} Q &middot; {c.blueprintPct}% &middot;{' '}
                    {accuracyLabel(c.answered, c.pct)}
                    {c.answered > 0 && ' (' + c.pct + '%)'}
                  </span>
                </div>
                <ProgressBar
                  value={c.answered === 0 ? 0 : c.pct}
                  color={accuracyColor(c.answered, c.pct)}
                />
              </li>
            ))}
        </ul>

        <div className={'mt-4 rounded-lg border p-4 ' + readoutTone}>
          <div className="flex items-center gap-2 mb-1">
            <Timer
              className="w-4 h-4 text-slate-700 dark:text-slate-300"
              aria-hidden="true"
            />
            <h3 className="text-sm font-semibold">{readout.label}</h3>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            {readout.text}
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Weekly schedule                                             */}
      {/* ---------------------------------------------------------- */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="font-semibold text-lg">
            {plan.label}, {plan.hours}
          </h2>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Weeks run heaviest category first, because that is where the marginal
          hour pays most. Laws &amp; Ethics and Client Recommendations are 60% of
          the scored exam between them.
        </p>

        {resolved.map(({ week: w, displayTopics, status }) => {
          const isHere = w.week === currentWeek;
          return (
            <article
              key={w.week}
              className={
                'rounded-xl border p-5 ' +
                (isHere
                  ? 'border-blue-600 dark:border-blue-400 bg-blue-50/60 dark:bg-blue-950/30 ring-1 ring-blue-600 dark:ring-blue-400'
                  : status.complete
                    ? 'border-emerald-300 dark:border-emerald-900/60 bg-white dark:bg-slate-900'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900')
              }
            >
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Week {w.week}
                </span>
                {isHere && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-600 text-white">
                    <MapPin className="w-3 h-3" aria-hidden="true" />
                    You are here
                  </span>
                )}
                {status.complete && !isHere && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                    Done
                  </span>
                )}
                {w.mockNumber !== null && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    <Timer className="w-3 h-3" aria-hidden="true" />
                    Mock {w.mockNumber}
                  </span>
                )}
                {w.kind === 'review' && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
                    <RotateCcw className="w-3 h-3" aria-hidden="true" />
                    Review
                  </span>
                )}
              </div>

              <h3 className="font-semibold">{w.theme}</h3>

              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {status.readTotal > 0 && (
                  <span>
                    {status.read}/{status.readTotal} read
                  </span>
                )}
                {status.answered > 0 && (
                  <span>
                    {status.readTotal > 0 ? ' · ' : ''}
                    {status.answered} answered
                    {status.accuracy !== null &&
                      ' · ' +
                        status.accuracy +
                        '% correct (' +
                        accuracyLabel(status.answered, status.accuracy) +
                        ')'}
                  </span>
                )}
                {status.answered === 0 && status.readTotal > 0 && (
                  <span> &middot; no questions attempted yet</span>
                )}
              </div>

              {w.kind === 'review' && (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {w.week === plan.weeks
                    ? 'Your weakest topics overall, recalculated from what you have actually answered.'
                    : 'Your weakest topics inside the two 30% categories, recalculated live.'}
                </p>
              )}

              {displayTopics.length > 0 && (
                <ul className="mt-3 divide-y divide-slate-100 dark:divide-slate-800">
                  {displayTopics.map((t) => {
                    const s = statMap.get(t.id);
                    const isRead = Boolean(progress.topicsRead[t.id]);
                    return (
                      <li key={t.id} className="flex items-center gap-2 py-1">
                        {isRead ? (
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <Circle
                            className="w-4 h-4 flex-shrink-0 text-slate-400 dark:text-slate-600"
                            aria-hidden="true"
                          />
                        )}
                        <span className="sr-only">
                          {isRead ? 'Read.' : 'Not read yet.'}
                        </span>
                        <Link
                          to={'/curriculum/' + t.id}
                          className="flex-1 min-h-[44px] flex items-center text-sm text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          {t.title}
                        </Link>
                        {s && s.answered > 0 && (
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                            {s.pct}%
                          </span>
                        )}
                        {s && s.total > 0 && (
                          <Link
                            to={'/quiz/topic/' + t.id}
                            aria-label={'Quiz: ' + t.title}
                            className="inline-flex items-center justify-center gap-1 min-w-[44px] min-h-[44px] px-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:border-blue-400"
                          >
                            <Brain className="w-4 h-4" aria-hidden="true" />
                            <span className="hidden sm:inline">Quiz</span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}

              {w.kind === 'review' && displayTopics.length === 0 && (
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  Nothing flagged weak yet. Answer some questions and this fills in.
                </p>
              )}

              <div className="mt-3 flex items-start gap-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3">
                <Target
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-600 dark:text-slate-400"
                  aria-hidden="true"
                />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-semibold">Milestone: </span>
                  {w.milestone}
                </p>
              </div>

              {(w.mockNumber !== null || w.kind === 'review') && (
                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  {w.mockNumber !== null && (
                    <Link
                      to="/quiz/mock"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 min-h-[44px]"
                    >
                      <Timer className="w-4 h-4" aria-hidden="true" />
                      Start mock {w.mockNumber}
                    </Link>
                  )}
                  {w.kind === 'review' && missed.length > 0 && (
                    <Link
                      to="/quiz/missed"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold border border-slate-200 dark:border-slate-700 hover:border-amber-500 min-h-[44px]"
                    >
                      <RotateCcw className="w-4 h-4" aria-hidden="true" />
                      Drill {missed.length} missed
                    </Link>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* ---------------------------------------------------------- */}
      {/* How to use the app                                          */}
      {/* ---------------------------------------------------------- */}
      <section className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="font-semibold text-lg">How to study, honestly</h2>
        </div>
        <ul className="space-y-4">
          {guidance.map((g) => (
            <li key={g.title}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {g.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {g.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 p-5">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle
            className="w-5 h-5 text-amber-700 dark:text-amber-300"
            aria-hidden="true"
          />
          <h2 className="font-semibold text-amber-900 dark:text-amber-200">
            One resource, not the only one
          </h2>
        </div>
        <p className="text-sm text-amber-900 dark:text-amber-100/90">
          This app is free, opinionated and written by hand. It is not affiliated
          with NASAA or FINRA, and no prep material can promise a pass. Use it
          alongside a full question bank if you can, and confirm every dollar
          threshold and deadline against primary sources before exam day.
        </p>
      </section>

      {CFP_TOPICS.length > 0 && (
        <section className="rounded-xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-900/50 p-5">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap
              className="w-5 h-5 text-violet-600 dark:text-violet-400"
              aria-hidden="true"
            />
            <h2 className="font-semibold text-violet-900 dark:text-violet-200">
              The CFP track sits outside this plan
            </h2>
          </div>
          <p className="text-sm text-violet-900/90 dark:text-violet-100/90">
            The {CFP_TOPICS.length} CFP and advisor-skills topics are supplemental
            career preparation. None of it is scored on the Series 65, it is
            excluded from mock-exam sampling, and it is deliberately absent from
            every week above. Save it for after the exam material is solid —
            or dip into it when you need a change of pace and the alternative is
            not studying at all.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-violet-900/70 dark:text-violet-100/70">
            <Info className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <span>Find these topics at the end of the curriculum list.</span>
          </div>
          <Link
            to="/curriculum"
            className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold border border-violet-300 dark:border-violet-800 text-violet-900 dark:text-violet-200 hover:border-violet-500 min-h-[44px]"
          >
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            Browse the curriculum
          </Link>
        </section>
      )}
    </div>
  );
}
