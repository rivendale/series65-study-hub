/**
 * Regression harness for src/core/nextAction.ts. Plain Node, no browser, no
 * test framework — matching scripts/storage-regression.mjs rather than adding
 * vitest as a dependency for six assertions.
 *
 *   node --experimental-strip-types --import ./scripts/ts-resolve-register.mjs \
 *        scripts/next-action-regression.mjs
 *
 * Each case is a claim about LEARNING, not about code shape. If one of these
 * starts failing, the app has begun asking the student to make a decision the
 * scheduler should be making for her.
 */
import { nextAction, MAX_DUE_PER_SESSION, MOCK_UNLOCK_TOPICS_READ }
  from '../src/core/nextAction.ts';

const NOW = 1_700_000_000_000;
let pass = 0, fail = 0;
const check = (name, cond, detail = '') => {
  if (cond) { pass++; console.log(`  ok    ${name}`); }
  else { fail++; console.log(`  FAIL  ${name} ${detail}`); }
};

const q = (id, topic) => ({ id, topic });
const topics = [
  { id: 'a', title: 'Heavy topic', weight: '~20%' },
  { id: 'b', title: 'Light topic', weight: '~3%' },
];
const pool = [q(1, 'a'), q(2, 'a'), q(3, 'b')];
const due = (t) => ({ correct: true, ts: 0, due: t, box: 2 });

// 1 — spacing only works if the due queue is actually served.
check('due reviews come before anything else',
  nextAction({ answers: { 1: due(NOW - 1000) } }, pool, topics, new Set(), NOW).kind === 'review');

// 2 — a backlog after a week away must not be a wall.
{
  const answers = {}; const big = Array.from({ length: 40 }, (_, i) => q(i + 1, 'a'));
  big.forEach((x) => (answers[x.id] = due(NOW - 1000)));
  const a = nextAction({ answers }, big, topics, new Set(), NOW);
  check('due queue is capped and says how many remain',
    a.label.includes(String(MAX_DUE_PER_SESSION)) && a.label.includes('more waiting'), a.label);
}

// 3 — exam weight is the only honest answer to "what is worth my next hour".
check('reads the HEAVIEST unread topic, not the first listed',
  nextAction({ answers: {} }, pool, topics, new Set(), NOW).label === 'Heavy topic');

// 4 — reading before quizzing on first exposure.
check('first exposure is a read, not a cold quiz',
  nextAction({ answers: {} }, pool, topics, new Set(), NOW).kind === 'read');

// 5 — a mock before the map is walked measures absence, not knowledge.
check('no mock before the map has been walked',
  nextAction({ answers: {} }, [], [], new Set(['a', 'b']), NOW).kind !== 'mock');
check('mock unlocks once enough topics are read',
  nextAction({ answers: {} }, [], [],
    new Set(Array.from({ length: MOCK_UNLOCK_TOPICS_READ }, (_, i) => `t${i}`)), NOW).kind === 'mock');

// 6 — when nothing is owed, say so. Never invent work to look busy.
{
  const a = nextAction({ answers: {} }, [], [], new Set(), NOW);
  check('says plainly when nothing is due', a.finished === true && a.minutes === 0);
}

console.log(`\n  ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
