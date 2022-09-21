import styled from 'styled-components';

const ContainerFlex = styled.div`
  display: flex;
  gap: 4em;

  @media screen and (max-width: 500px) {
    gap: 3em;
  }
`

export default ContainerFlex