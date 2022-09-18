import { ContainerBetween, ContainerCenter, ContainerRight, LandingButton, LandingContainer, LandingLink, StyledLanding } from "./Landing.styles";

function Landing() {
  return (
    <StyledLanding>
      <LandingContainer>
        <ContainerRight>
          <LandingLink>dark</LandingLink>
        </ContainerRight>
        <ContainerCenter>
          <h1>Typing Speed Test</h1>
          <LandingButton href="/home">Start</LandingButton>
        </ContainerCenter>
        <ContainerBetween>
          <span>developed in React.JS</span>
          <LandingLink>github</LandingLink>
        </ContainerBetween>
      </LandingContainer>
    </StyledLanding>
  );
}

export default Landing;