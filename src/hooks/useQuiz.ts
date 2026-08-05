import { useCallback, useMemo, useState } from 'react';
import { questions, type Question } from '../data/questions';
import { sample, shuffle } from '../lib/shuffle';
import {
  OFFICIAL_CATEGORIES,
  TOPIC_TO_CATEGORY,
  EXAM_CATEGORY_IDS,
} from '../data/categories';
import { examInfo } from '../data/examInfo';

export type QuizMode = 'topic' | 'mock' | 'missed';

export interface QuizConfig {
  mode: QuizMode;
  topicId?: string;
  /** For 'missed' mode: question ids the user previously got wrong. */
  missedIds?: number[];
}

export interface SessionAnswer {
  qid: number;
  selected: number;
  correct: boolean;
}

/** Questions eligible for the mock exam - supplemental CFP track excluded. */
function examEligible(): Question[] {
  return questions.filter((q) => {
    const cat = TOPIC_TO_CATEGORY[q.topic];
    return cat !== undefined && cat !== 'cfp-advisor';
  });
}

/**
 * Build a 140-question mock: 130 scored items sampled in proportion to the
 * NASAA blueprint (20 / 32 / 39 / 39), plus 10 unscored pretest items mixed
 * in randomly, mirroring the real Prometric delivery.
 */
function buildMockSet(): Question[] {
  const pool = examEligible();
  const scored: Question[] = [];

  for (const catId of EXAM_CATEGORY_IDS) {
    const want = OFFICIAL_CATEGORIES[catId].questions;
    const catPool = pool.filter((q) => TOPIC_TO_CATEGORY[q.topic] === catId);
    scored.push(...sample(catPool, want));
  }

  while (scored.length < examInfo.scoredQuestions) {
    const remaining = pool.filter((q) => !scored.includes(q));
    if (remaining.length === 0) break;
    scored.push(...sample(remaining, examInfo.scoredQuestions - scored.length));
  }

  const pretestPool = pool.filter((q) => !scored.includes(q));
  const pretest = sample(pretestPool, examInfo.pretestQuestions);

  return shuffle([...scored, ...pretest]);
}

export function useQuiz(config: QuizConfig) {
  const initialQuestions = useMemo(() => {
    if (config.mode === 'topic' && config.topicId) {
      return shuffle(questions.filter((q) => q.topic === config.topicId));
    }
    if (config.mode === 'missed') {
      const ids = new Set(config.missedIds ?? []);
      return shuffle(questions.filter((q) => ids.has(q.id)));
    }
    return buildMockSet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.mode, config.topicId]);

  const [items] = useState<Question[]>(initialQuestions);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<SessionAnswer[]>([]);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [finished, setFinished] = useState(false);

  const current = items[index];

  const submit = useCallback(() => {
    if (selected === null || !current) return;
    const correct = selected === current.answer;
    setAnswers((prev) => [...prev, { qid: current.id, selected, correct }]);
    setSubmitted(true);
  }, [selected, current]);

  const next = useCallback(() => {
    if (index >= items.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setSubmitted(false);
  }, [index, items.length]);

  const select = useCallback(
    (i: number) => {
      if (!submitted) setSelected(i);
    },
    [submitted]
  );

  const recordAndAdvanceMock = useCallback(() => {
    if (selected === null || !current) return;
    const correct = selected === current.answer;
    setAnswers((prev) => [...prev, { qid: current.id, selected, correct }]);
    if (index >= items.length - 1) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setSubmitted(false);
    }
  }, [selected, current, index, items.length]);

  /** Mark the current question for later review and move on without answering. */
  const flagAndSkip = useCallback(() => {
    if (!current) return;
    setFlagged((prev) => new Set(prev).add(current.id));
    if (index >= items.length - 1) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setSubmitted(false);
    }
  }, [current, index, items.length]);

  const finishNow = useCallback(() => {
    setFinished(true);
  }, []);

  const correctCount = answers.filter((a) => a.correct).length;
  const total = items.length;

  // Mock scoring mirrors the real exam: only the first `scoredQuestions`
  // answered items count toward pass/fail; the remainder stand in for pretest.
  const scoredAnswers =
    config.mode === 'mock' ? answers.slice(0, examInfo.scoredQuestions) : answers;
  const scoredCorrect = scoredAnswers.filter((a) => a.correct).length;
  const scoredTotal = config.mode === 'mock' ? examInfo.scoredQuestions : total;
  const passed =
    config.mode === 'mock' && scoredCorrect >= examInfo.passingScore;

  return {
    items,
    current,
    index,
    selected,
    submitted,
    answers,
    flagged,
    finished,
    correctCount,
    total,
    scoredCorrect,
    scoredTotal,
    passed,
    select,
    submit,
    next,
    recordAndAdvanceMock,
    flagAndSkip,
    finishNow,
  };
}
