import styled from 'styled-components';

const StyledInput = styled.div`
  width: 500px;
  position: relative;

  .test_paragraph {
    width: 500px;
    height: 400px;
    font-size: 24px;
    line-height: 2em;
    letter-spacing: 2px;
    font-weight: bold;
    color: #C6C6C6;
    background-color: white;
    padding: 1em;
    margin: 0;
  }

  .test_input {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 500px;
    height: 400px;
    background: rgb(0, 0, 0, 0);
    word-break: break-word;
    padding: 1em;
    font-family: inherit;
    font-size: 24px;
    line-height: 2em;
    letter-spacing: 2px;
    font-weight: bold;
  }
`

export default StyledInput;