import { useContext, useEffect, useState } from 'react';
import { Context } from "../App/App.js";
import Button from "../../GlobalStyles/Button.styles";
import ContainerFlex from "../../GlobalStyles/ContainerFlex.styles";
import { Clock } from "./Timer.styles";

function Timer() {
  const {
    time,
    isRunning,
    handleTimeUp,
    handleReset
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
        handleTimeUp();
      }, time*1000)
      setTimeoutID(timeoutPointer);
    }
    // eslint-disable-next-line
  }, [isRunning])

  function formatSeconds(second) {
    return (second === 60) ? "01:00" : (second < 10) ? `00:0${second}` : `00:${second}`;
  }

  return (
    <ContainerFlex>
      <Clock>{formatSeconds(displayTime)}</Clock>
      <Button onClick={() => {
        handleReset();
        setDisplayTime(time);
        clearInterval(intervalID);
        clearTimeout(timeoutID);
      }}
      >reset</Button>
    </ContainerFlex>
  );
}

export default Timer;