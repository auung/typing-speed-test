import {  useState, } from 'react';
import StyledApp from "./App.styles.js";
import Timer from '../Timer/Timer.js';
import Input from '../Input/Input.js';

function App() {
  const givenTime = 10;
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(givenTime);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [wpm, setWpm] = useState();

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
        { wpm && <span>{wpm}</span>}
      </div>
      
    </StyledApp>
  );
}

export default App;
