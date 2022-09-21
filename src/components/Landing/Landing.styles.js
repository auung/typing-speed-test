import { Link } from "react-router-dom";
import styled from 'styled-components';

export const StyledLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.25rem;
    font-weight: normal;
  }
`;

export const LandingContainer = styled.div`
  width: clamp(400px, 50%, 80%);
  display: flex;
  flex-direction: column;
  gap: 7em;
  margin-top: -4em;
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

export const LandingButton = styled(Link)`
  font-size: 1.25rem;
  text-decoration: none;
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.black};
  padding: 0.5em 1.5em;
  border-radius: 0.5em;
`