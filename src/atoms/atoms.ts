import { atomWithReset } from "jotai/utils";
import { IUserAnswers } from "../features/types";

export const selectedCategoryAtom = atomWithReset<number>(0);
export const selectedDifficultyAtom = atomWithReset<string>("");

export const userAnswersAtom = atomWithReset<IUserAnswers>({});
export const isQuizActiveAtom = atomWithReset<boolean>(false);
