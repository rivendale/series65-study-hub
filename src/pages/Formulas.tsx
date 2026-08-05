import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sigma } from 'lucide-react';
import { topics } from '../data/curriculum';
import { OFFICIAL_CATEGORIES, TOPIC_TO_CATEGORY } from '../data/categories';

interface Entry {
  name: string;
  formula: string;
  note?: string;
  topicId: string;
  topicTitle: string;
  categoryName: string;
}

export default function Formulas() {
  const [query, setQuery] = useState('');

  const entries = useMemo<Entry[]>(() => {
    const all: Entry[] = [];
    for (const t of [...topics].sort((a, b) => a.order - b.order)) {
      const catId = TOPIC_TO_CATEGORY[t.id];
      const categoryName = catId
        ? OFFICIAL_CATEGORIES[catId].shortName
        : 'Other';
      for (const f of t.formulas ?? []) {
        all.push({
          name: f.name,
          formula: f.formula,
          note: f.note,
          topicId: t.id,
          topicTitle: t.title,
          categoryName,
        });
      }
    }
    return all;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.formula.toLowerCase().includes(q) ||
        (e.note ?? '').toLowerCase().includes(q) ||
        e.topicTitle.toLowerCase().includes(q)
    );
  }, [entries, query]);

  // Group the filtered list by topic so related formulas stay together.
  const grouped = useMemo(() => {
    const map = new Map<string, Entry[]>();
    for (const e of filtered) {
      const list = map.get(e.topicId) ?? [];
      list.push(e);
      map.set(e.topicId, list);
    }
    return [...map.entries()];
  }, [filtered]);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <header>
        <div className="flex items-center gap-2">
          <Sigma className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h1 className="text-2xl font-bold">Formulas</h1>
        </div>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {entries.length} formulas worth knowing cold. The Series 65 gives you a basic
          on-screen calculator &mdash; it does not give you the formulas.
        </p>
      </header>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search formulas..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 min-h-[44px]"
          aria-label="Search formulas"
        />
      </div>

      {grouped.length === 0 && (
        <p className="text-center py-10 text-slate-500 dark:text-slate-400">
          No formulas match &ldquo;{query}&rdquo;.
        </p>
      )}

      {grouped.map(([topicId, list]) => (
        <section
          key={topicId}
          className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap">
            <Link
              to={`/curriculum/${topicId}`}
              className="font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {list[0].topicTitle}
            </Link>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {list[0].categoryName}
            </span>
          </div>
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {list.map((e, i) => (
              <li key={i} className="px-5 py-3">
                <div className="font-medium text-slate-900 dark:text-slate-100">
                  {e.name}
                </div>
                <div className="mt-1 overflow-x-auto">
                  <code className="inline-block font-mono text-sm text-blue-700 dark:text-blue-300 bg-slate-50 dark:bg-slate-800/60 rounded px-2 py-1 whitespace-pre">
                    {e.formula}
                  </code>
                </div>
                {e.note && (
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {e.note}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
