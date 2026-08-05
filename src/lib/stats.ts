import type { Progress } from '../hooks/useProgress';
import { questions } from '../data/questions';
import { topics } from '../data/curriculum';
import {
  OFFICIAL_CATEGORIES,
  TOPIC_TO_CATEGORY,
  EXAM_CATEGORY_IDS,
  type OfficialCategoryId,
} from '../data/categories';

export interface TopicStat {
  id: string;
  title: string;
  total: number;
  answered: number;
  correct: number;
  pct: number;
}

export interface CategoryStat {
  id: OfficialCategoryId;
  name: string;
  shortName: string;
  blueprintQuestions: number;
  blueprintPct: number;
  total: number;
  answered: number;
  correct: number;
  pct: number;
}

export function overallStats(progress: Progress) {
  const ids = Object.keys(progress.answers);
  const answered = ids.length;
  const correct = ids.filter((id) => progress.answers[Number(id)].correct).length;
  const pct = answered === 0 ? 0 : Math.round((correct / answered) * 100);
  return { answered, correct, pct };
}

export function statsByTopic(progress: Progress): TopicStat[] {
  return topics.map((t) => {
    const topicQuestions = questions.filter((q) => q.topic === t.id);
    let answered = 0;
    let correct = 0;
    for (const q of topicQuestions) {
      const a = progress.answers[q.id];
      if (a) {
        answered += 1;
        if (a.correct) correct += 1;
      }
    }
    const pct = answered === 0 ? 0 : Math.round((correct / answered) * 100);
    return {
      id: t.id,
      title: t.title,
      total: topicQuestions.length,
      answered,
      correct,
      pct,
    };
  });
}

/** Progress against the four official NASAA exam categories. */
export function statsByCategory(progress: Progress): CategoryStat[] {
  return EXAM_CATEGORY_IDS.map((catId) => {
    const meta = OFFICIAL_CATEGORIES[catId];
    const catQuestions = questions.filter(
      (q) => TOPIC_TO_CATEGORY[q.topic] === catId
    );
    let answered = 0;
    let correct = 0;
    for (const q of catQuestions) {
      const a = progress.answers[q.id];
      if (a) {
        answered += 1;
        if (a.correct) correct += 1;
      }
    }
    const pct = answered === 0 ? 0 : Math.round((correct / answered) * 100);
    return {
      id: catId,
      name: meta.name,
      shortName: meta.shortName,
      blueprintQuestions: meta.questions,
      blueprintPct: meta.pct,
      total: catQuestions.length,
      answered,
      correct,
      pct,
    };
  });
}

/** Question ids the user has answered incorrectly, oldest first. */
export function missedQuestionIds(progress: Progress): number[] {
  return Object.entries(progress.answers)
    .filter(([, a]) => !a.correct)
    .sort((a, b) => a[1].ts - b[1].ts)
    .map(([id]) => Number(id))
    .filter((id) => questions.some((q) => q.id === id));
}
