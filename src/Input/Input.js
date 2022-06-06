import { useEffect, useState } from 'react';
import StyledInput from "./Input.styles";

function Input({ isRunning, setIsRunning, isTimeUp, setWpm, time }) {
  const [text, setText] = useState("");
  const [txtArr, setTxtArr] = useState();

  useEffect(() => {
    if (isTimeUp) {
      const arr = text.split("");
      setTxtArr(arr);
      const wpm = (text.length / 5) / (time / 60);
      setWpm(Math.round(wpm))
    }
  }, [isTimeUp, setWpm, time]);

  useEffect(() => {
    if (!isRunning) {
      setText("");
    }
    console.log(txtArr);
  }, [isRunning, txtArr]);

  return (
    <StyledInput>
      <p className="test_paragraph">
        When I was a little boy in elementary school, the neighborhood kids and I all looked forward to playing so many games in my backyard during the long summer holidays between grades.
      </p>
      <form action="#">
        <textarea
          type="text"
          className="test_input"
          autoComplete="off"
          value={text}
          onInput={e => {
            setText(e.target.value);
            setIsRunning(true);
          }}
          disabled={isTimeUp}
        ></textarea>
      </form>
    </StyledInput>
  );
}

export default Input;