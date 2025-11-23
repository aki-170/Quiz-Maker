import { useEffect } from "react";
import { useResetAtom } from "jotai/utils";
import {
  selectedCategoryAtom,
  selectedDifficultyAtom,
  userAnswersAtom,
  isQuizActiveAtom,
} from "../atoms/atoms";

export const useQuizCleanup = () => {
  const resetIsQuizActive = useResetAtom(isQuizActiveAtom);
  const resetSelectedCategory = useResetAtom(selectedCategoryAtom);
  const resetSelectedDifficulty = useResetAtom(selectedDifficultyAtom);
  const resetUserAnswers = useResetAtom(userAnswersAtom);

  useEffect(() => {
    return () => {
      resetIsQuizActive();
      resetSelectedCategory();
      resetSelectedDifficulty();
      resetUserAnswers();
    };
  }, [
    resetIsQuizActive,
    resetSelectedCategory,
    resetSelectedDifficulty,
    resetUserAnswers,
  ]);
};
