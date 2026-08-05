import { Link } from 'react-router-dom';
import { Timer, RotateCcw } from 'lucide-react';
import { topics } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import { statsByTopic, missedQuestionIds } from '../lib/stats';
import TopicCard from '../components/TopicCard';
import { examInfo } from '../data/examInfo';
import {
  OFFICIAL_CATEGORIES,
  TOPIC_TO_CATEGORY,
  EXAM_CATEGORY_IDS,
  type OfficialCategoryId,
} from '../data/categories';

const ALL_SECTIONS: OfficialCategoryId[] = [...EXAM_CATEGORY_IDS, 'cfp-advisor'];

export default function Topics() {
  const { progress } = useProgress();
  const stats = statsByTopic(progress);
  const missed = missedQuestionIds(progress);
  const ordered = [...topics].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Quiz</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Drill a single topic, review what you have missed, or sit a full mock exam.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          to="/quiz/mock"
          className="block rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-center gap-3">
            <Timer className="w-6 h-6 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-lg">Mock exam</h2>
              <p className="text-sm text-white/85">
                {examInfo.totalQuestions} questions &middot; {examInfo.timeMinutes} min &middot;{' '}
                {examInfo.passingScore} of {examInfo.scoredQuestions} to pass
              </p>
            </div>
          </div>
        </Link>

        {missed.length > 0 && (
          <Link
            to="/quiz/missed"
            className="block rounded-xl bg-amber-500 text-white p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-lg">Review missed</h2>
                <p className="text-sm text-white/85">
                  {missed.length} question{missed.length === 1 ? '' : 's'} to revisit, oldest
                  first
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>

      {ALL_SECTIONS.map((catId) => {
        const meta = OFFICIAL_CATEGORIES[catId];
        const catTopics = ordered.filter(
          (t) => TOPIC_TO_CATEGORY[t.id] === catId
        );
        const withQuestions = catTopics.filter((t) => {
          const s = stats.find((x) => x.id === t.id);
          return s && s.total > 0;
        });
        if (withQuestions.length === 0) return null;

        return (
          <section key={catId} className="space-y-3">
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {meta.shortName}
              </h2>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {meta.onExam ? `${meta.pct}% of the exam` : 'Not on the exam'}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {withQuestions.map((t) => {
                const s = stats.find((x) => x.id === t.id)!;
                return (
                  <TopicCard
                    key={t.id}
                    topic={t}
                    to={`/quiz/topic/${t.id}`}
                    pct={s.pct}
                    answered={s.answered}
                    total={s.total}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
