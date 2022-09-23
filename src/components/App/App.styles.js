import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.font};
`

export default StyledApp;