import { useSetAtom } from "jotai";
import { isQuizActiveAtom } from "../atoms/atoms";

export const CreateQuizButton = () => {
  const setIsQuizActive = useSetAtom(isQuizActiveAtom);

  const handleCreate = () => {
    setIsQuizActive(true);
  };

  return (
    <button id="createBtn" onClick={handleCreate}>
      Create
    </button>
  );
};
