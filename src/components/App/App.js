import { createContext, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import StyledApp from "./App.styles";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../Landing/Landing";
import Home from "../Home/Home";

export const Context = createContext();

function App() {
  const [dark, setDark] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing setDark={setDark} />,
    },
    {
      path: "/home",
      element: <Home setDark={setDark} />,
    }
  ])

  const theme = {
    bg: "#FFFFFF",
    font: "#06120C",
    green: "#5BF1A0",
    red: "#F17F5B",
    black: "#06120C"
  }

  const themeDark = {
    bg: "#06120C",
    font: "#5BF1A0",
    green: "#5BF1A0",
    red: "#F17F5B",
    black: "#06120C"
  }

  return (
    <ThemeProvider theme={dark ? themeDark : theme}>
      <StyledApp>
        <RouterProvider router={router} />
      </StyledApp>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default App;