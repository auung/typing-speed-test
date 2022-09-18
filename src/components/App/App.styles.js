import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.font};
`

export default StyledApp;