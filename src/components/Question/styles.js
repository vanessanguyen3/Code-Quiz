import styled from 'styled-components';
import Button from '../Button';

export const QuestionForm = styled.div``;

export const StyledQuestion = styled.div`
  font-size: 36px;
`;

export const AnswerList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin: 32px 0;
`;

export const AnswerButton = styled(Button)`
  width: 200px;
`;

export const Result = styled.div`
  opacity: 0.6;
  font-size: 36px;
`;
