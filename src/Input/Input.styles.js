import styled from 'styled-components';

const StyledInput = styled.div`
  width: 500px;
  position: relative;

  .test_paragraph {
    width: 500px;
    height: 400px;
    font-size: 20px;
    line-height: 2em;
    letter-spacing: 2px;
    font-weight: bold;
    color: #424242;
    background-color: white;
    padding: 1em;
    margin: 0;
    text-align: justify;
  }

  .test_input {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 500px;
    height: 400px;
    opacity: 0;
    word-break: break-word;
    padding: 1em;
    font-family: inherit;
    font-size: 24px;
    line-height: 2em;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .current {
    animation: fade 0.6s ease-in-out alternate infinite;
  }

  .correct {
    color: #ffffff;
    background-color: #00AE28;
  }

  .incorrect {
    color: #ffffff;
    background-color: #E61010;
  }

  @keyframes fade {
    from {
      border-bottom: 4px black solid;
    }

    to {
      border-bottom: none;
    }
  }
`

export default StyledInput;