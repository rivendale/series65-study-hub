import { Link, useParams, Navigate } from 'react-router-dom';
import TopicVideo from '../components/TopicVideo';
import {
  ArrowLeft,
  AlertTriangle,
  BookmarkCheck,
  Brain,
  ChevronRight,
  Shuffle,
  Sigma,
  SquareFunction,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { topics } from '../data/curriculum';
import { questions } from '../data/questions';
import { OFFICIAL_CATEGORIES, TOPIC_TO_CATEGORY } from '../data/categories';
import { useProgress } from '../hooks/useProgress';
import { useEffect, useState } from 'react';

export default function TopicReader() {
  const { id } = useParams<{ id: string }>();
  const topic = topics.find((t) => t.id === id);
  const { progress, markTopicRead } = useProgress();
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handler = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      setScrollPct(max > 0 ? Math.min(100, (scrolled / max) * 100) : 0);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [id]);

  if (!topic) return <Navigate to="/curriculum" replace />;

  const isRead = Boolean(progress.topicsRead[topic.id]);
  const catId = TOPIC_TO_CATEGORY[topic.id];
  const category = catId ? OFFICIAL_CATEGORIES[catId] : undefined;
  const questionCount = questions.filter((q) => q.topic === topic.id).length;

  return (
    <article className="max-w-3xl mx-auto">
      <div className="sticky top-0 -mx-4 md:-mx-6 px-4 md:px-6 py-3 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur z-20 border-b border-slate-200 dark:border-slate-800">
        <Link
          to="/curriculum"
          className="inline-flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Curriculum
        </Link>
        <div className="mt-2 h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all"
            style={{ width: `${scrollPct}%` }}
          />
        </div>
      </div>

      <header className="mt-4">
        <div className="flex items-center gap-2 text-sm flex-wrap">
          {category && (
            <span
              className={`font-semibold px-2 py-0.5 rounded-full text-xs ${
                category.onExam
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300'
                  : 'bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300'
              }`}
            >
              {category.shortName}
            </span>
          )}
          <span className="text-slate-600 dark:text-slate-400">{topic.weight}</span>
        </div>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          {topic.title}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{topic.summary}</p>
      </header>

      <div className="mt-6 prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:mt-8 prose-h2:mb-3 prose-h3:mt-6 prose-h3:mb-2 prose-p:leading-relaxed prose-table:text-sm prose-td:align-top">
        <TopicVideo topicId={topic.id} title={topic.title} />
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{topic.body}</ReactMarkdown>
      </div>

      {topic.workedExamples && topic.workedExamples.length > 0 && (
        <section className="mt-8 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/20 overflow-hidden">
          <h2 className="flex items-center gap-2 text-lg font-semibold px-5 py-3 border-b border-indigo-100 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200">
            <SquareFunction className="w-5 h-5" aria-hidden="true" />
            Worked examples
          </h2>
          <p className="px-5 pt-3 text-sm text-indigo-900/80 dark:text-indigo-200/70">
            Follow the method, not just the answer. Cover the steps, try it
            yourself, then check.
          </p>
          <ol className="px-5 py-4 space-y-5">
            {topic.workedExamples.map((w, i) => (
              <li
                key={i}
                className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-1.5">
                    {i + 1}.
                  </span>
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {w.setup}
                </p>
                <ol className="mt-3 space-y-1.5">
                  {w.steps.map((step, j) => (
                    <li key={j} className="flex gap-2.5 text-sm">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold flex items-center justify-center mt-0.5"
                        aria-hidden="true"
                      >
                        {j + 1}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-3 text-sm font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 rounded px-3 py-2">
                  Answer: {w.answer}
                </p>
                {w.watchOut && (
                  <p className="mt-2 text-sm text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/30 rounded px-3 py-2">
                    <span className="font-semibold">Watch out: </span>
                    {w.watchOut}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {topic.formulas && topic.formulas.length > 0 && (
        <section className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <h2 className="flex items-center gap-2 text-lg font-semibold px-5 py-3 border-b border-slate-100 dark:border-slate-800">
            <Sigma className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Formulas
          </h2>
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {topic.formulas.map((f, i) => (
              <li key={i} className="px-5 py-3">
                <div className="font-medium text-slate-900 dark:text-slate-100">
                  {f.name}
                </div>
                <div className="mt-1 overflow-x-auto">
                  <code className="inline-block font-mono text-sm text-blue-700 dark:text-blue-300 bg-slate-50 dark:bg-slate-800/60 rounded px-2 py-1 whitespace-pre">
                    {f.formula}
                  </code>
                </div>
                {f.note && (
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{f.note}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {topic.pitfalls.length > 0 && (
        <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/30 p-5">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-amber-900 dark:text-amber-200">
            <AlertTriangle className="w-5 h-5" />
            Common pitfalls
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-amber-900 dark:text-amber-100/90">
            {topic.pitfalls.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden="true">&bull;</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {topic.confusions && topic.confusions.length > 0 && (
        <section className="mt-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <h2 className="flex items-center gap-2 text-lg font-semibold px-5 py-3 border-b border-slate-100 dark:border-slate-800">
            <Shuffle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Common confusions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="text-left font-semibold px-5 py-2">Don&rsquo;t confuse</th>
                  <th className="text-left font-semibold px-5 py-2">With</th>
                </tr>
              </thead>
              <tbody>
                {topic.confusions.map((c, i) => (
                  <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                    <td className="px-5 py-2 text-slate-700 dark:text-slate-300">{c.dont}</td>
                    <td className="px-5 py-2 text-slate-700 dark:text-slate-300">{c.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {topic.keyTerms.length > 0 && (
        <section className="mt-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <h2 className="text-lg font-semibold">Key terms</h2>
          <dl className="mt-3 space-y-3">
            {topic.keyTerms.map((kt, i) => (
              <div key={i}>
                <dt className="font-semibold text-slate-900 dark:text-slate-100">
                  {kt.term}
                </dt>
                <dd className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                  {kt.definition}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={() => markTopicRead(topic.id)}
          className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition min-h-[44px] ${
            isRead
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'
          }`}
        >
          <BookmarkCheck className="w-5 h-5" />
          {isRead ? 'Marked as read' : 'Mark as read'}
        </button>
        {questionCount > 0 && (
          <Link
            to={`/quiz/topic/${topic.id}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition min-h-[44px]"
          >
            <Brain className="w-5 h-5" />
            Quiz this topic ({questionCount})
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
