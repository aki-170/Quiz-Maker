import { AnswerText } from "./typography";
import { decodeHtml } from "./utils";
import { IAnswerOptionProps } from "./types";

export const AnswerOption = ({
  answer,
  mode,
  userAnswer,
  correctAnswer,
  onClick,
}: IAnswerOptionProps) => {
  const isUserAnswer = answer === userAnswer;
  const isCorrectAnswer = answer === correctAnswer;

  const selected = mode === "quiz" && isUserAnswer;
  const correct = mode === "results" && isCorrectAnswer;
  const wrong = mode === "results" && isUserAnswer && !isCorrectAnswer;

  const className = `answer-option ${selected ? "selected" : ""} ${
    correct ? "correct" : ""
  } ${wrong ? "wrong" : ""}`.trim();

  const content = <AnswerText>{decodeHtml(answer)}</AnswerText>;

  if (onClick) {
    return (
      <button className={className} onClick={onClick}>
        {content}
      </button>
    );
  }

  return <div className={className}>{content}</div>;
};
