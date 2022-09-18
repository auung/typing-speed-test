import styled from 'styled-components';

export const StyledLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 4em;
`

export const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LandingButton = styled.a`
  text-decoration: none;
  background-color: ${props => props.theme.green};
  padding: 1.5em 3em;
`

