import { ReactNode } from "react";

// Quiz types
export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IQuizResponse {
  response_code: number;
  results: IQuestion[];
}

export interface IQuizQuestion extends IQuestion {
  id: string;
  answers: string[];
}

export interface IUserAnswers {
  [questionId: string]: string;
}

// Category types
export interface ICategory {
  id: number;
  name: string;
}

export interface ICategoriesResponse {
  trivia_categories: ICategory[];
}

// Component types
export interface ITypographyProps {
  children: ReactNode;
  className?: string;
}

export interface IAnswerOptionProps {
  answer: string;
  mode: "quiz" | "results";
  userAnswer?: string;
  correctAnswer: string;
  onClick?: () => void;
}
