import { createContext, useState } from 'react';
import StyledApp from "./App.styles.js";
import Navbar from "../Navbar/Navbar.js";
import Input from '../Input/Input.js';
import { ThemeProvider } from "styled-components";

export const Context = createContext();

function App() {
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
    green: "#5BF1A0",
    white: "#000000",
    black: "#06120C",
    red: "#F17F5B"
  }

  return (
    <StyledApp>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
