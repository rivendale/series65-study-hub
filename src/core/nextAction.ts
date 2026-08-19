/**
 * What to do next — the one decision the app should make for the student.
 *
 * The scheduler in spacedRepetition.ts already knows which questions are due.
 * Nothing surfaced it. Home opened with statistics and a menu of eight
 * destinations, so every session began by asking a career-changer with no
 * finance background to choose between reading curriculum, quizzing a topic,
 * sitting a mock, and reviewing misses — a decision she is not equipped to make,
 * asked before she has done anything. That is the moment a study app becomes
 * homework.
 *
 * This module answers the question instead of posing it. Everything it needs
 * already existed; none of it was ever shown.
 *
 * The rules, in order, and each is a claim about learning rather than a
 * convenience:
 *
 *   1. DUE REVIEWS FIRST, capped. Spacing only works if the due queue is
 *      actually served. Capped because an unbounded backlog after a week away is
 *      a wall, and a wall is a reason to close the app.
 *   2. THEN AN UNREAD TOPIC, chosen by exam weight. Reading before quizzing on
 *      first exposure: a question you cannot answer is not a diagnostic, it is
 *      discouragement.
 *   3. THEN QUESTIONS ON WHAT WAS JUST READ, so the reading is tested while it
 *      is warm and enters the spacing ladder at box 1.
 *   4. ONLY THEN a mock, and only once enough of the map has been walked that a
 *      mock measures knowledge instead of absence.
 *
 * There is deliberately no streak and no score. This is a professional
 * licensing exam being taken by an adult changing careers; points would read as
 * condescension, and a streak that breaks on a missed day is a reason to stop
 * opening it.
 */
import { selectDue, selectMissed } from './spacedRepetition';
import type { ProgressLike, QuestionLike } from './types';

/** Roughly how long one question takes, including reading the explanation. */
export const SECONDS_PER_QUESTION = 45;
/** Roughly how long a topic page takes to read properly. */
export const SECONDS_PER_TOPIC_READ = 240;
/** The session we are aiming at. Short enough to fit a real evening. */
export const TARGET_SESSION_SECONDS = 600;
/** Never hand back more than this many due reviews at once. A backlog is a wall. */
export const MAX_DUE_PER_SESSION = 12;
/** Mocks stay hidden until the map has been walked; before that they measure absence. */
export const MOCK_UNLOCK_TOPICS_READ = 8;

export type NextKind = 'review' | 'read' | 'quiz' | 'mock' | 'done';

export interface NextAction {
  kind: NextKind;
  /** The single line under the button. Written for a beginner, not a dashboard. */
  label: string;
  /** Where the button goes. */
  to: string;
  /** What comes after this, if anything — shown as a second line, never a menu. */
  then?: string;
  /** Estimated minutes, rounded to something a person would say out loud. */
  minutes: number;
  /** True when there is genuinely nothing due and nothing new. */
  finished: boolean;
}

export interface TopicLike {
  id: string;
  title: string;
  /** e.g. "~3%" — the exam weight, used to pick what is worth reading next. */
  weight?: string;
}

function weightOf(t: TopicLike): number {
  const m = /([\d.]+)/.exec(t.weight ?? '');
  return m ? parseFloat(m[1]) : 0;
}

function minutes(seconds: number): number {
  return Math.max(1, Math.round(seconds / 60));
}

/**
 * `readTopicIds` is the set the student has actually opened. It is passed in
 * rather than derived here because "has read" lives in progress, and this
 * module deliberately knows nothing about storage.
 */
export function nextAction(
  progress: ProgressLike,
  questions: QuestionLike[],
  topics: TopicLike[],
  readTopicIds: ReadonlySet<string>,
  now: number
): NextAction {
  // 1 — due reviews, capped.
  const due = selectDue(progress, questions, now);
  if (due.length > 0) {
    const n = Math.min(due.length, MAX_DUE_PER_SESSION);
    const more = due.length > n ? ` (${due.length - n} more waiting)` : '';
    return {
      kind: 'review',
      label: `${n} question${n === 1 ? '' : 's'} ready for review${more}`,
      to: '/review',
      then: 'then something new',
      minutes: minutes(n * SECONDS_PER_QUESTION),
      finished: false,
    };
  }

  // 2 — the heaviest unread topic. Weight decides, because exam weight is the
  // only honest answer to "what is worth my next hour".
  const unread = topics
    .filter((t) => !readTopicIds.has(t.id))
    .sort((a, b) => weightOf(b) - weightOf(a));
  if (unread.length > 0) {
    const t = unread[0];
    const pool = questions.filter((q) => (q as { topic?: string }).topic === t.id);
    return {
      kind: 'read',
      label: t.title,
      to: `/curriculum/${t.id}`,
      then: pool.length ? `then ${Math.min(pool.length, 8)} questions on it` : undefined,
      minutes: minutes(SECONDS_PER_TOPIC_READ + Math.min(pool.length, 8) * SECONDS_PER_QUESTION),
      finished: false,
    };
  }

  // 3 — everything read, nothing due: re-drill what is still wrong.
  const missed = selectMissed(progress, questions);
  if (missed.length > 0) {
    const n = Math.min(missed.length, MAX_DUE_PER_SESSION);
    return {
      kind: 'quiz',
      label: `${n} question${n === 1 ? '' : 's'} you have got wrong before`,
      to: '/quiz/missed',
      minutes: minutes(n * SECONDS_PER_QUESTION),
      finished: false,
    };
  }

  // 4 — a mock, once the map has actually been walked.
  if (readTopicIds.size >= MOCK_UNLOCK_TOPICS_READ) {
    return {
      kind: 'mock',
      label: 'Sit a practice exam',
      to: '/quiz/mock',
      then: 'nothing is due — this is the useful thing left',
      minutes: 60,
      finished: false,
    };
  }

  // 5 — genuinely nothing owed. Say so plainly and stop.
  return {
    kind: 'done',
    label: 'Nothing is due today',
    to: '/topics',
    then: 'come back tomorrow, or browse a topic if you want to',
    minutes: 0,
    finished: true,
  };
}
