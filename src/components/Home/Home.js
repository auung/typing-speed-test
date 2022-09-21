import { useState, useCallback } from "react";
import Navbar from "../Navbar/Navbar.js";
import Input from '../Input/Input.js';
import { Context } from "../App/App.js";

function Home({ setDark }) {
  const time = 60;
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [reset, setReset] = useState(true);
  const [wpm, setWpm] = useState({gross: 0, net: 0, accuracy: 0});

  const handleTimeUp = useCallback(() => {
    setIsRunning(false);
    setIsTimeUp(true);
  }, [])

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setIsTimeUp(false);
    setReset(!reset);
  }, [reset])

  const TimerProps = {
    time: time,
    isRunning: isRunning,
    handleTimeUp: handleTimeUp,
    handleReset: handleReset
  }

  const NavProps = {
    setDark: setDark,
    wpm: wpm
  }

  const InputProps = {
    isRunning: isRunning,
    setIsRunning: setIsRunning,
    isTimeUp: isTimeUp,
    setWpm: setWpm,
    time: time,
    reset: reset
  }

  return (
    <Context.Provider value={{TimerProps: TimerProps, NavProps: NavProps, InputProps: InputProps}}>
      <Navbar />
      <Input />
    </Context.Provider>
  );
}

export default Home;
