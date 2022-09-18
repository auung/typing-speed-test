import StyledNavbar from "./Navbar.styles";
import Timer from "../Timer/Timer";
import { useContext } from "react";
import { Context } from "../App/App.js";
import Button from "../../GlobalStyles/Button.styles";
import ContainerFlex from "../../GlobalStyles/ContainerFlex.styles";
import { Link } from "react-router-dom";

function Navbar() {
  const { wpm, setDark } = useContext(Context).NavProps;

  return (
    <StyledNavbar>
      <ContainerFlex>
        <Timer />
        <Button onClick={() => setDark(current => !current)}>dark</Button>
        <Button><Link to={"/"}>back</Link></Button>
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