import { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import Timer from '../Timer';
import Question from '../Question';

const Quiz = ({ questions, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(75);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(100);
  const [isAnswering, setIsAnswering] = useState(true);

  useInterval(() => {
    if (isAnswering) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);

  const pointsPerScore = Math.floor(100 / questions.length);

  const nextQuestion = () => {
    if (question + 1 === questions.length) {
      onComplete(score);
    } else {
      setQuestion(question + 1);
    }
    setIsAnswering(true);
  };

  const questionAnsweredCorrectly = () => {
    setIsAnswering(false);
  };

  const questionAnsweredIncorrectly = () => {
    setIsAnswering(false);
    setTimeLeft(timeLeft - 10);
    setScore(score - pointsPerScore);
  };

  return (
    <>
      <Timer timeLeft={timeLeft} />
      {questions.map((q, i) => (
        <>
          {i === question && (
            <Question
              {...q}
              key={i}
              onNextQuestionClicked={nextQuestion}
              onQuestionAnsweredCorrectly={questionAnsweredCorrectly}
              onQuestionAnsweredIncorrectly={questionAnsweredIncorrectly}
            />
          )}
        </>
      ))}
    </>
  );
};

export default Quiz;
