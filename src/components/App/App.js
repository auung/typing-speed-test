import StyledApp from "./App.styles";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../Landing/Landing";
import Home from "../Home/Home";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/home",
      element: <Home />,
    }
  ])

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
        <RouterProvider router={router} />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;