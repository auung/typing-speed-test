import StyledNavbar from "./Navbar.styles";
import Timer from "../Timer/Timer";
import { useContext } from "react";
import { Context } from "../Home/Home";
import Button from "../../GlobalStyles/Button.styles";
import ContainerFlex from "../../GlobalStyles/ContainerFlex.styles";
import ContainerMain from "../../GlobalStyles/ContainerMain.styles";

function Navbar() {
  const { dark, setDark, wpm } = useContext(Context).NavProps;

  return (
    <StyledNavbar>
      <ContainerFlex>
        <Timer />
        <Button>dark</Button>
        <Button>back</Button>
      </ContainerFlex>
      <ContainerFlex>
        <span>Gross: {wpm.gross}</span>
        <span>Net: {wpm.net}</span>
        <span>Accuracy: {wpm.accuracy}%</span>
      </ContainerFlex>
    </StyledNavbar>
  );
}

export default Navbar;