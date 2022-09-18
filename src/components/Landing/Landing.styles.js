import styled from 'styled-components';
import Button from "../../GlobalStyles/Button.styles";

export const StyledLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 2.25rem;
    font-weight: normal;
  }
`;

export const LandingContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 7em;
  margin-top: 12em;
`

export const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`

export const ContainerBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LandingButton = styled.a`
  font-size: 1.25rem;
  text-decoration: none;
  background-color: ${props => props.theme.green};
  padding: 0.5em 1.5em;
  border-radius: 0.5em;
`

export const LandingLink = styled(Button)`
  font-size: 1rem;
`