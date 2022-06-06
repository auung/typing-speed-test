import { useEffect, useState } from 'react';

function Timer({ isRunning, setIsRunning, time, setIsTimeUp }) {
  let [displayTime, setDisplayTime] = useState(time);
  let [pointer, setPointer] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setDisplayTime(d => --d);
      }, 1000)
      setPointer(id);

      setTimeout(() => {
        clearInterval(id);
        setIsRunning(false);
        setIsTimeUp(true);
      }, time*1000)
    }
  }, [isRunning, time, setIsRunning, setIsTimeUp])

  function reset() {
    setIsRunning(false);
    setIsTimeUp(false);
    setDisplayTime(time);
    clearInterval(pointer);
  }

  return (
    <div className="timer">
      <p align="center">{displayTime}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;