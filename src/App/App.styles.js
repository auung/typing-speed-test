import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;

  .container {
    background-color: #EDEDED;
    width: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wpm {
      display: flex;
      gap: 50px;
      margin: 50px 0;
    }
  }
`

export default StyledApp;