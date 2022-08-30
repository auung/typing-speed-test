import styled from 'styled-components';

const StyledInput = styled.div`
  /* width: 1300px; */
  position: relative;

  .test_paragraph {
    width: 100ch;
    overflow: hidden;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
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

  .blurred::after {
    content: "Click to focus";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px)
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