import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: #EDEDED;
    width: 700px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wpm {
      width: 150px;
      display: flex;
      justify-content: space-between;
    }
  }
`

export default StyledApp;