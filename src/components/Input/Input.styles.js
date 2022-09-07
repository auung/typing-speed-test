import styled, { css, keyframes }  from 'styled-components';

export const StyledInput = styled.div`
  width: 75%;
  margin: auto;
`

export const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 2em;
  color: ${props => props.theme.black};
  padding: 1.5em 0;
`

const Fade = props => keyframes`
  0% {
    border-bottom: ${props.theme.black} 4px solid;
  }

  100% {
    border-bottom: none;
  }
`

export const Letter = styled.span`
  animation: ${props => 
    (props.status === "current") && css`${Fade} 0.6s ease-in-out alternate infinite`};
  
  background-color: ${props => {
    switch (props.status) {
      case "correct":
        return props.theme.green;
      case "incorrect":
        return props.theme.red;
      default:
        return "";
    }
  }};
`

export const InputField = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`