import styled from 'styled-components';
import { RotateLoader } from "react-spinners";

const StyledLoader = styled(RotateLoader)`
  margin-top: 10em;
  background-color: ${props => props.theme.font} !important; 

  span {
    background-color: ${props => props.theme.font} !important; 
  }
`

export default StyledLoader;