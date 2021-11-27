import Button from '../Button';
import Container from '../Container';
import { StartPageHero } from './styles';

const StartPage = ({ onStartClicked }) => (
  <StartPageHero>
    <Container>
      <h1>Coding Quiz Challenge</h1>
      <p>
        Try to answer the following code-related questions within the time
        limit. Keep in mind that incorrect answers will penalize your score/time
        by 10 seconds!
      </p>
      <Button onClick={onStartClicked}>Start Quiz</Button>
    </Container>
  </StartPageHero>
);

export default StartPage;
