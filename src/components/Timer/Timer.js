import { useContext, useEffect, useState } from 'react';
import { Context } from "../Home/Home";
import Button from "../../GlobalStyles/Button.styles";
import ContainerFlex from "../../GlobalStyles/ContainerFlex.styles";
import { Clock } from "./Timer.styles";

function Timer() {
  const {
    time,
    isRunning,
    setIsRunning,
    setIsTimeUp,
    reset,
    setReset
  } = useContext(Context).TimerProps;
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
    // eslint-disable-next-line
  }, [isRunning])

  function resetTimer() {
    setIsRunning(false);
    setIsTimeUp(false);
    setReset(!reset);
    setDisplayTime(time);
    clearInterval(intervalID);
    clearTimeout(timeoutID);
  }

  function formatSeconds(second) {
    return (second === 60) ? "01:00" : (second < 10) ? `00:0${second}` : `00:${second}`;
  }

  return (
    <ContainerFlex>
      <Clock>{formatSeconds(displayTime)}</Clock>
      <Button onClick={resetTimer}>reset</Button>
    </ContainerFlex>
  );
}

export default Timer;