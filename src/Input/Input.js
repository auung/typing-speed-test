import { useState, useEffect, useRef } from "react";
import useDidUpdateEffect from '../hooks/useDidUpdateEffect.js';
import useFetch from "../hooks/useFetch.js";
import  { StyledInput, Paragraph, InputField, Letter } from "./Input.styles";
import { calcWpm, getTextArray } from "./Input.utils.js";

function Input({ isRunning, setIsRunning, isTimeUp, setWpm, time, reset }) {
  const data = useFetch(reset);
  const [text, setText] = useState();
  const [inputText, setInputText] = useState([]);
  const [count, setCount] = useState(0);
  const totalCount = useRef(0);
  const errorCount = useRef(0);

  useEffect(() => {
    if (data) {
      setText(getTextArray(data));
    }
    // eslint-disable-next-line
  }, [data])

  function updateArray(count, className) {
    let newArray = [...text];
    newArray[count].status = className;
    setText(newArray);
  }

  function verify() {
    if (inputText.length > count) {
      totalCount.current = totalCount.current + 1;
      if (inputText[count] === text[count].letter) {
        updateArray(count, "correct");
      } else {
        errorCount.current = errorCount.current + 1;
        updateArray(count, "incorrect");
      }
      setCount(c => ++c);
      updateArray(count + 1, "current");
    } else if (inputText.length) {
      updateArray(count, "");
      updateArray(count - 1, "current");
      setCount(c => --c);
    }
  }

  function handleTimeUp() {
    if (!isRunning) {
      if (isTimeUp) {
        const total = totalCount.current;
        const error = errorCount.current;
        const incorrect = text.filter(i => i.status === "incorrect").length;
        setWpm(calcWpm(total, error, incorrect, time));
      } else {
        setText(getTextArray(data));
        setWpm({gross: 0, net: 0, accuracy: 0});
        setInputText([]);
        setCount(0);
      }
    }
  }

  useDidUpdateEffect(verify, [inputText]);
  useDidUpdateEffect(handleTimeUp, [isRunning, isTimeUp]);

  return (
    <StyledInput>
      <Paragraph>
        {text &&
          text.map(i => <Letter key={i.id} status={i.status}>{i.letter}</Letter>)
        }
      </Paragraph>
      <form action="#">
        <InputField
          type="text"
          autoComplete="off"
          value={inputText.join("")}
          onInput={e => {
            setInputText(c => [...e.target.value]);
            setIsRunning(true);
          }}
          disabled={isTimeUp}
          autoFocus
          onBlur={e => e.target.focus()}
        />
      </form>
    </StyledInput>
  )
}

export default Input;