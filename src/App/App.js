import {  useState, } from 'react';
import StyledApp from "./App.styles.js";
import Timer from '../Timer/Timer.js';
import Input from '../Input/Input.js';

function App() {
  const givenTime = 60;
  const [time, setTime] = useState(givenTime);
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
        />
        <Input
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          isTimeUp={isTimeUp}
          setWpm={setWpm}
          time={time}
        />
        { wpm &&
          <div className="wpm">
            <span>Gross: {wpm.gross}</span>
            <span>Net: {wpm.net}</span>
          </div>
        }
      </div>
      
    </StyledApp>
  );
}

export default App;
