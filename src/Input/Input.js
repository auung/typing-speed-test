import { useState, useEffect } from "react";
import useDidUpdateEffect from '../hooks/useDidUpdateEffect.js';
import useFetch from "../hooks/useFetch.js";
import StyledInput from "./Input.styles";
import { calcWpm, getTextArray } from "./Input.utils.js";

function Input({ isRunning, setIsRunning, isTimeUp, setWpm, time }) {
  const {data, error} = useFetch();
  const [text, setText] = useState();
  const [inputText, setInputText] = useState([]);
  const [count, setCount] = useState(0);

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
      if (inputText[count] === text[count].letter) {
        updateArray(count, "correct");
      } else {
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
        const total = inputText.length;
        const correct = text.filter(i => i.status === "correct").length;
        const incorrect = text.filter(i => i.status === "incorrect").length;
        console.log(total, correct, incorrect);
        setWpm(calcWpm(total, correct, incorrect, time));
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

  return (
    <StyledInput>
      <p className="test_paragraph">
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
            // console.log(e.key);
          }}
          disabled={isTimeUp}
        />
      </form>
      { error && <div>{ error }</div>}
    </StyledInput>
  );
}

export default Input;