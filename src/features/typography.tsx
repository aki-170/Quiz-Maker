import { ITypographyProps } from "./types";

export const QuestionText = ({
  children,
  className = "",
}: ITypographyProps) => {
  return <p className={`question-text ${className}`}>{children}</p>;
};

export const AnswerText = ({ children, className = "" }: ITypographyProps) => {
  return <span className={`answer-text ${className}`}>{children}</span>;
};
