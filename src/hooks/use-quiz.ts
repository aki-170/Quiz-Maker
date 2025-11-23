import { useQuery } from "@tanstack/react-query";
import { IQuizResponse, IQuizQuestion } from "../features/types";

const fetchQuiz = async (
  category: number,
  difficulty: string
): Promise<IQuizQuestion[]> => {
  const url = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`;
  const response = await fetch(url);
  const data: IQuizResponse = await response.json();

  return data.results.map((question, index) => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    return {
      ...question,
      id: `q-${index}`,
      answers: shuffledAnswers,
    };
  });
};

export const useQuiz = (category: number, difficulty: string) => {
  return useQuery({
    queryKey: ["quiz", category, difficulty],
    queryFn: () => fetchQuiz(category, difficulty),
    enabled: !!category && !!difficulty,
    staleTime: 1000 * 60 * 5,
  });
};
