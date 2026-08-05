import { topics } from '../data/curriculum';
import {
  OFFICIAL_CATEGORIES,
  TOPIC_TO_CATEGORY,
  EXAM_CATEGORY_IDS,
  type OfficialCategoryId,
} from '../data/categories';
import TopicCard from '../components/TopicCard';
import { useProgress } from '../hooks/useProgress';

const ALL_SECTIONS: OfficialCategoryId[] = [
  ...EXAM_CATEGORY_IDS,
  'cfp-advisor',
];

export default function Curriculum() {
  const { progress } = useProgress();
  const ordered = [...topics].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Curriculum</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {topics.length} topics, grouped by the official NASAA exam categories, plus a
          supplemental CFP and advisor-skills track.
        </p>
      </header>

      {ALL_SECTIONS.map((catId) => {
        const meta = OFFICIAL_CATEGORIES[catId];
        const catTopics = ordered.filter(
          (t) => TOPIC_TO_CATEGORY[t.id] === catId
        );
        if (catTopics.length === 0) return null;

        const readCount = catTopics.filter(
          (t) => progress.topicsRead[t.id]
        ).length;

        return (
          <section key={catId} className="space-y-3">
            <div
              className={`rounded-xl p-4 ${
                meta.onExam
                  ? 'bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50'
                  : 'bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-900/50'
              }`}
            >
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <h2
                  className={`font-semibold ${
                    meta.onExam
                      ? 'text-blue-900 dark:text-blue-200'
                      : 'text-violet-900 dark:text-violet-200'
                  }`}
                >
                  {meta.name}
                </h2>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${
                    meta.onExam
                      ? 'bg-blue-600 text-white'
                      : 'bg-violet-600 text-white'
                  }`}
                >
                  {meta.onExam
                    ? `${meta.pct}% · ${meta.questions} questions`
                    : 'Not on the exam'}
                </span>
              </div>
              <p
                className={`mt-2 text-sm ${
                  meta.onExam
                    ? 'text-blue-900/80 dark:text-blue-100/80'
                    : 'text-violet-900/80 dark:text-violet-100/80'
                }`}
              >
                {meta.blurb}
              </p>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                {readCount} of {catTopics.length} topics marked read
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {catTopics.map((t) => (
                <TopicCard
                  key={t.id}
                  topic={t}
                  to={`/curriculum/${t.id}`}
                  read={Boolean(progress.topicsRead[t.id])}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
