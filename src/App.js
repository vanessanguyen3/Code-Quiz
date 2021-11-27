import { useState } from 'react';
import FinalScore from './components/FinalScore';
import Layout from './components/Layout';
import Quiz from './components/Quiz';
import StartPage from './components/StartPage';
import questions from './questions.json';

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(-1);

  const onStartClicked = () => {
    setHasStarted(true);
  };

  const onComplete = (score) => {
    setHasFinished(true);
    setFinalScore(score);
  };

  return (
    <Layout>
      {!hasStarted && !hasFinished && (
        <StartPage onStartClicked={onStartClicked} />
      )}
      {hasStarted && !hasFinished && (
        <Quiz questions={questions} onComplete={onComplete} />
      )}
      {hasStarted && hasFinished && <FinalScore score={finalScore} />}
    </Layout>
  );
};

export default App;
