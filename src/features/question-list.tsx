import { useAtom } from "jotai";
import { userAnswersAtom } from "../atoms/atoms";
import { AnswerOption } from "./answer-option";
import { decodeHtml } from "./utils";
import { IQuizQuestion } from "./types";
import { QuestionText } from "./typography";

interface IQuestionListProps {
  mode: "quiz" | "results";
  questions: IQuizQuestion[];
}

export const QuestionList = ({ mode, questions }: IQuestionListProps) => {
  const [userAnswers, setUserAnswers] = useAtom(userAnswersAtom);

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id} className="question-card">
          <QuestionText>{decodeHtml(question.question)}</QuestionText>
          <div className="answers-container">
            {question.answers.map((answer) => (
              <AnswerOption
                key={answer}
                answer={answer}
                mode={mode}
                userAnswer={userAnswers[question.id]}
                correctAnswer={question.correct_answer}
                onClick={
                  mode === "quiz"
                    ? () => handleAnswerSelect(question.id, answer)
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
