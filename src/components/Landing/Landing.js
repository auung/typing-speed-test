import Button from "../../GlobalStyles/Button.styles";
import { ContainerBetween, ContainerCenter, ContainerRight, LandingButton, LandingContainer, StyledLanding } from "./Landing.styles";

function Landing({ setDark }) {

  return (
    <StyledLanding>
      <LandingContainer>
        <ContainerRight>
          <Button onClick={() => setDark(current => !current)} fontSize="1rem">dark</Button>
        </ContainerRight>
        <ContainerCenter>
          <h1>Typing Speed Test</h1>
          <LandingButton to="/home">Start</LandingButton>
        </ContainerCenter>
        <ContainerBetween>
          <span>developed in React.JS</span>
          <Button fontSize="1rem"><a href="https://github.com/auung/typing-speed-test">github</a></Button>
        </ContainerBetween>
      </LandingContainer>
    </StyledLanding>
  );
}

export default Landing;