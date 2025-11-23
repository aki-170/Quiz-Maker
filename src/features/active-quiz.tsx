import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import {
  userAnswersAtom,
  selectedCategoryAtom,
  selectedDifficultyAtom,
} from "../atoms/atoms";
import { useQuiz } from "../hooks/use-quiz";
import { QuestionList } from "./question-list";

export const ActiveQuiz = () => {
  const selectedCategory = useAtomValue(selectedCategoryAtom);
  const selectedDifficulty = useAtomValue(selectedDifficultyAtom);
  const userAnswers = useAtomValue(userAnswersAtom);
  const navigate = useNavigate();

  const { data: questions } = useQuiz(selectedCategory, selectedDifficulty);

  const allQuestionsAnswered =
    questions &&
    questions.length > 0 &&
    questions.every((question) => userAnswers[question.id]);

  const handleSubmit = () => {
    navigate("/results");
  };

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <div>
      <QuestionList mode="quiz" questions={questions} />
      {allQuestionsAnswered && (
        <button className="submit-button" onClick={handleSubmit}>
          Submit Quiz
        </button>
      )}
    </div>
  );
};
