import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import {
  userAnswersAtom,
  selectedCategoryAtom,
  selectedDifficultyAtom,
} from "../atoms/atoms";
import { useQuiz } from "../hooks/use-quiz";
import { QuestionList } from "../features/question-list";
import { getScoreColor } from "../features/utils";
import { useQuizCleanup } from "../hooks/use-quiz-cleanup";

export const Results = () => {
  const selectedCategory = useAtomValue(selectedCategoryAtom);
  const selectedDifficulty = useAtomValue(selectedDifficultyAtom);
  const userAnswers = useAtomValue(userAnswersAtom);
  const navigate = useNavigate();
  useQuizCleanup();

  const { data: questions } = useQuiz(selectedCategory, selectedDifficulty);

  if (!questions || questions.length === 0) {
    return null;
  }

  const correctAnswers = questions.filter(
    (q) => userAnswers[q.id] === q.correct_answer
  ).length;

  const handleNewQuiz = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Results</h1>
      <QuestionList mode="results" questions={questions} />
      <div className={`score-display ${getScoreColor(correctAnswers)}`}>
        <h2>
          You scored {correctAnswers} out of {questions.length}
        </h2>
      </div>
      <button className="new-quiz-button" onClick={handleNewQuiz}>
        Create New Quiz
      </button>
    </div>
  );
};
