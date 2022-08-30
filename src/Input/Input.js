import { useState, useEffect, useRef } from "react";
import useDidUpdateEffect from '../hooks/useDidUpdateEffect.js';
import useFetch from "../hooks/useFetch.js";
import StyledInput from "./Input.styles";
import { calcWpm, getTextArray } from "./Input.utils.js";

function Input({ isRunning, setIsRunning, isTimeUp, setWpm, time, reset }) {
  const data = useFetch(reset);
  const [text, setText] = useState();
  const [inputText, setInputText] = useState([]);
  const [count, setCount] = useState(0);
  const [textBlur, setTextBlur] = useState(false);
  const totalCount = useRef(0);
  const errorCount = useRef(0);

  useEffect(() => {
    if (data) {
      setText(getTextArray(data));
      console.log(text);
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
      console.log(text);
      console.log(count);
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
        setWpm({gross: 0, net: 0});
        setInputText([]);
        setCount(0);
      }
    }
  }

  useDidUpdateEffect(verify, [inputText]);
  useDidUpdateEffect(handleTimeUp, [isRunning, isTimeUp]);

  function getTextClass() {
    return ["test_paragraph", (textBlur ? "blurred" : "")];
  }

  return (
    <StyledInput>
      <p className={getTextClass().join(" ")}>
        {text && 
          text.map(i => <span key={i.id} className={i.status}>{i.letter}</span>)
        }
      </p>
      <form action="#">
        <input
          type="text"
          className="test_input"
          autoComplete="off"
          value={inputText.join("")}
          onInput={e => {
            setInputText(c => [...e.target.value]);
            setIsRunning(true);
          }}
          onFocus={() => setTextBlur(false)}
          onBlur={() => setTextBlur(true)}
          disabled={isTimeUp}
          autoFocus
        />
      </form>
    </StyledInput>
  )
}

export default Input;