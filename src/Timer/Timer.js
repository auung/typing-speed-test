import { useEffect, useState } from 'react';

function Timer({ isRunning, time, setIsRunning, setIsTimeUp }) {
  let [displayTime, setDisplayTime] = useState(time);
  const [intervalID, setIntervalID] = useState();
  const [timeoutID, setTimeoutID] = useState();

  useEffect(() => {
    if (isRunning) {
      const intervalPointer = setInterval(() => {
        setDisplayTime(d => --d);
      }, 1000)
      setIntervalID(intervalPointer);

      const timeoutPointer = setTimeout(() => {
        clearInterval(intervalPointer);
        setIsRunning(false);
        setIsTimeUp(true);
      }, time*1000)
      setTimeoutID(timeoutPointer);
    }
  }, [isRunning, time, setIsRunning, setIsTimeUp])

  function reset() {
    setIsRunning(false);
    setIsTimeUp(false);
    setDisplayTime(time);
    clearInterval(intervalID);
    clearTimeout(timeoutID);
  }

  return (
    <div className="timer">
      <p align="center">{displayTime}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;