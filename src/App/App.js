import { useState } from 'react';
import StyledApp from "./App.styles.js";
import Timer from '../Timer/Timer.js';
import Input from '../Input/Input.js';

function App() {
  const time = 60;
  const [reset, setReset] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [wpm, setWpm] = useState({gross: 0, net: 0});

  return (
    <StyledApp>
      <div className="container">
        <Timer
          isRunning={isRunning}
          time={time}
          setIsRunning={setIsRunning}
          setIsTimeUp={setIsTimeUp}
          reset={reset}
          setReset={setReset}
        />
        <Input
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          isTimeUp={isTimeUp}
          setWpm={setWpm}
          time={time}
          reset={reset}
        />
        { wpm &&
          <div className="wpm">
            <span>Gross: {wpm.gross}</span>
            <span>Net: {wpm.net}</span>
            <span>Accuracy: {wpm.accuracy}%</span>
          </div>
        }
      </div>
    </StyledApp>
  );
}

export default App;
