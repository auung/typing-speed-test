import styled from 'styled-components';
import { RotateLoader } from "react-spinners";

const StyledLoader = styled(RotateLoader)`
  color: ${props => props.theme.black};
  margin-top: 10em;
`

export default StyledLoader;