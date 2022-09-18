import Button from "../../GlobalStyles/Button.styles";
import { ContainerBetween, ContainerCenter, ContainerRight, LandingButton, LandingContainer, StyledLanding } from "./Landing.styles";

function Landing() {
  return (
    <StyledLanding>
      <LandingContainer>
        <ContainerRight>
          <Button>dark</Button>
        </ContainerRight>
        <ContainerCenter>
          <h1>Typing Speed Test</h1>
          <LandingButton href="/home">Start</LandingButton>
        </ContainerCenter>
        <ContainerBetween>
          <span>developed in React.JS</span>
          <Button>github</Button>
        </ContainerBetween>
      </LandingContainer>
    </StyledLanding>
  );
}

export default Landing;