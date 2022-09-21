import styled from "styled-components";

const StyledNavbar = styled.div`
  width: clamp(300px, 1300px, 90%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 2em 0;
  border-bottom: 2px ${props => props.theme.font} solid;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 2em;
  }
`

export default StyledNavbar;