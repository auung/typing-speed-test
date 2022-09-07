import styled from 'styled-components';

const Button = styled.button`
  font-family: inherit;
  font-size: ${props => props.fontSize || 1.25}rem;
  background-color: unset;
  cursor: pointer;
  border: none;
  padding: 0.5em;
  text-decoration: underline;
`
export default Button;
