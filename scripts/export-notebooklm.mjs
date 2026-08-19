/**
 * Render each topic as a NotebookLM-ready source.
 *
 *   node --experimental-strip-types --import ./scripts/ts-resolve-register.mjs \
 *        scripts/export-notebooklm.mjs
 *
 * WHY THIS IS NOT JUST A FILE COPY. NotebookLM narrates whatever the source
 * contains, so the SOURCE is the constraint and the customise box is only an
 * instruction the model may decline. A document that lacks a sentence cannot
 * produce it. Measured against these 46 topics:
 *
 *   505 table rows  -> arrive as a stream of cell values with the column
 *                      headings gone, which is worse than useless in audio
 *    46 raw slugs   -> spoken aloud verbatim, personifying an internal id
 *
 * So tables are rewritten into sentences that carry their own headings, and
 * slugs never reach the file. Humans keep the tables — that view is the app.
 * Same material, two shapes.
 *
 * FILENAMES CARRY THE WARNING, NOT THE FOLDER. An upload is a drag out of a
 * file picker; the folder's meaning is stripped off in transit and the name is
 * the only part that travels with the file.
 */
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { topics } from '../src/data/curriculum.ts';
import { questions } from '../src/data/questions.ts';

const OUT = 'notebooklm';

/** A markdown table becomes sentences that still say what each column meant. */
function tablesToProse(md) {
  const lines = md.split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const isRow = (s) => /^\s*\|.*\|\s*$/.test(s);
    const isRule = (s) => /^\s*\|[\s:|-]+\|\s*$/.test(s);
    if (isRow(lines[i]) && isRule(lines[i + 1] ?? '')) {
      const cells = (s) => s.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = cells(lines[i]);
      i += 2;
      const rows = [];
      while (i < lines.length && isRow(lines[i])) { rows.push(cells(lines[i])); i++; }
      for (const r of rows) {
        // Each row becomes one sentence pairing every value with its heading,
        // because the heading is exactly what the audio loses.
        // An EMPTY first heading means that column is the row's subject, not a
        // labelled field. Pairing it produced "- : Felony. 1956 act...", which
        // narrates as a stumble before the sentence starts.
        const clean = (s) => s.replace(/\*\*/g, '').trim();
        const parts = [];
        let subject = null;
        head.forEach((h, k) => {
          if (!r[k]) return;
          if (!clean(h)) { if (!subject) subject = clean(r[k]); return; }
          parts.push(`${clean(h)}: ${clean(r[k])}`);
        });
        const sentence = subject ? `${subject} — ${parts.join('. ')}` : parts.join('. ');
        if (sentence.trim()) out.push(`- ${sentence}.`);
      }
      out.push('');
      continue;
    }
    out.push(lines[i]); i++;
  }
  return out.join('\n');
}

function weightWords(w) {
  const m = /([\d.]+)/.exec(w ?? '');
  return m ? `about ${m[1]} percent of the exam` : 'a small share of the exam';
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const ordered = [...topics].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
const index = [];

for (const [n, t] of ordered.entries()) {
  const num = String(n + 1).padStart(2, '0');
  const pool = questions.filter((q) => q.topic === t.id);
  const body = tablesToProse(t.body ?? '');

  // No slug anywhere in the file. It would be read aloud.
  const doc = `# ${t.title}

This is one topic from the Series 65 exam, the Uniform Investment Adviser Law
Examination. It is worth ${weightWords(t.weight)}.

## Why this topic matters

${t.summary ?? ''}

${body}

## The questions this topic is tested with

${pool.slice(0, 6).map((q) => `**${q.q}**\n\n${q.exp}`).join('\n\n')}
`;

  const safe = t.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const file = `series65-${num}-${safe}.md`;
  writeFileSync(`${OUT}/${file}`, doc);
  index.push({ n: n + 1, id: t.id, title: t.title, file, words: doc.split(/\s+/).length });
}

// The app reads this to map a topic to its video once one exists.
writeFileSync(`${OUT}/manifest.json`, JSON.stringify(
  { generated: 'run scripts/export-notebooklm.mjs to regenerate',
    topics: index.map(({ id, title, file }) => ({ id, title, file, youtubeId: null })) },
  null, 2));

const total = index.reduce((s, x) => s + x.words, 0);
console.log(`  ${index.length} sources written to ${OUT}/`);
console.log(`  ${total.toLocaleString()} words  (~${Math.round(total / 150)} min of narration)`);
console.log(`  manifest.json has a youtubeId slot per topic, all null until filled`);
