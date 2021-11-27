import { useState } from 'react';
import {
  StyledQuestion,
  AnswerList,
  Result,
  QuestionForm,
  AnswerButton,
} from './styles';
import Button from '../Button';

const Question = ({
  question,
  options,
  answer,
  onQuestionAnsweredCorrectly,
  onQuestionAnsweredIncorrectly,
  onNextQuestionClicked,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  const submitAnswer = (index) => {
    setSelectedAnswer(index);
    if (index > -1) {
      if (index === answer) {
        onQuestionAnsweredCorrectly();
      } else {
        onQuestionAnsweredIncorrectly();
      }
    }
  };

  const handleNextClicked = () => {
    if (selectedAnswer > -1) {
      onNextQuestionClicked();
    }
  };

  return (
    <QuestionForm>
      <StyledQuestion>{question.replace('{line}', '______')}</StyledQuestion>
      <AnswerList>
        {options.map((option, i) => (
          <AnswerButton
            key={i}
            onClick={() => submitAnswer(i)}
            active={selectedAnswer === i}
          >
            {i + 1}: {option}
          </AnswerButton>
        ))}
      </AnswerList>
      <Button onClick={handleNextClicked}>Next question</Button>
      {selectedAnswer > -1 && (
        <Result>{selectedAnswer === answer ? 'Correct!' : 'Wrong!'}</Result>
      )}
    </QuestionForm>
  );
};

export default Question;
