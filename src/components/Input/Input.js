import { useState, useEffect, useRef, useReducer } from "react";
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect.js';
import useFetch from "../../hooks/useFetch.js";
import  { StyledInput, Paragraph, InputField, Letter } from "./Input.styles";
import { calcWpm, getTextArray, reducer } from "./Input.utils.js";
import Loader from "../Loader/Loader.js";

function Input({ setIsRunning, isTimeUp, setWpm, time, reset }) {
  const {data, loading} = useFetch(reset);
  const [text, dispatch] = useReducer(reducer, []);
  const [inputText, setInputText] = useState([]);
  const input = useRef();
  const count = useRef(0);
  const totalCount = useRef(0);
  const errorCount = useRef(0);

  useEffect(() => {
    if (data) {
      dispatch({ type: "first", payload: getTextArray(data) });
    }
    // eslint-disable-next-line
  }, [data])

  useDidUpdateEffect(() => {
    if (inputText.length - 1 === count.current) {
      totalCount.current = totalCount.current + 1;
      if (inputText[count.current] === text[count.current].letter) {
        dispatch({ type: "correct", id: count.current });
      } else {
        errorCount.current = errorCount.current + 1;
        dispatch({ type: "incorrect", id: count.current });
      }
      count.current = inputText.length;
      dispatch({ type: "current", id: count.current });
    } else {
      count.current = inputText.length;
      dispatch({ type: "previous", id: count.current });
    }
  }, [inputText]);

  useDidUpdateEffect(() => {
    if (isTimeUp) {
      dispatch({ type: "timeup" });
      const total = totalCount.current;
      const error = errorCount.current;
      const incorrect = text.filter(i => i.status === "incorrect").length;
      setWpm(calcWpm(total, inputText.length, error, incorrect, time));
    } else {
      dispatch({ type: "reset" });
      setWpm({gross: 0, net: 0, accuracy: 0});
      setInputText([]);
      input.current.focus();
    }
  }, [reset, isTimeUp]);

  return (
    <StyledInput>
      { loading && <Loader /> }
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
          ref={input}
          disabled={isTimeUp}
          autoFocus
          onBlur={e => e.target.focus()}
        />
      </form>
    </StyledInput>
  )
}

export default Input;