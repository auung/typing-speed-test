import { createContext, useState } from 'react';
import StyledApp from "./Home.styles.js";
import Navbar from "../Navbar/Navbar.js";
import Input from '../Input/Input.js';
import { ThemeProvider } from "styled-components";

export const Context = createContext();

function Home() {
  const time = 60;
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [reset, setReset] = useState(true);
  const [dark, setDark] = useState(false);
  const [wpm, setWpm] = useState({gross: 0, net: 0, accuracy: 0});

  const TimerProps = {
    time: time,
    isRunning: isRunning,
    setIsRunning: setIsRunning,
    setIsTimeUp: setIsTimeUp,
    reset: reset,
    setReset: setReset
  }

  const NavProps = {
    dark: dark,
    setDark: setDark,
    wpm: wpm
  }

  const theme = {
    white: "#000000",
    black: "#06120C",
    green: "#5BF1A0",
    red: "#F17F5B"
  }

  const themeDark = {
    white: "#000000",
    black: "#06120C",
    green: "#5BF1A0",
    red: "#F17F5B"
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Context.Provider value={{TimerProps: TimerProps, NavProps: NavProps}}>
          <Navbar />
        </Context.Provider>
        <Input
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          isTimeUp={isTimeUp}
          setWpm={setWpm}
          time={time}
          reset={reset}
        />
      </StyledApp>
    </ThemeProvider>
  );
}

export default Home;
