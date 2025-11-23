import { useAtomValue } from "jotai";
import { CategorySelect } from "../features/category-select";
import { DifficultySelect } from "../features/difficulty-select";
import { CreateQuizButton } from "../features/create-quiz-button";
import { ActiveQuiz } from "../features/active-quiz";
import { isQuizActiveAtom } from "../atoms/atoms";

export const Home = () => {
  const isQuizActive = useAtomValue(isQuizActiveAtom);

  return (
    <div>
      <h1>Quiz Maker</h1>
      <div className="quiz-setup">
        <CategorySelect />
        <DifficultySelect />
        <CreateQuizButton />
      </div>
      {isQuizActive && <ActiveQuiz />}
    </div>
  );
};
