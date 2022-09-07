import styled from "styled-components";

const StyledNavbar = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 2em 0;
  border-bottom: 2px ${props => props.theme.black} solid;
`

export default StyledNavbar;