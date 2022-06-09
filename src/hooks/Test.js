import { useEffect } from "react";
import { Fragment, useState } from "react";

function Test() {
  const [main, setMain] = useState();
  const fruits = [
    {key: 0, name: "Apple"},
    {key: 1, name: "Orange"},
    {key: 2, name: "Banana"}
  ];

  useEffect(() => {
    setMain(fruits);
    // eslint-disable-next-line
  }, [])

  function handleClick() {
    let newArr = [...main];
    newArr[1].name = "Mango";
    setMain(newArr);
  }

  function showData() {
    console.log(main);
    console.log((fruits));
  }

  return (
    <Fragment>
      {main && main.map(i => <div key={i.key}>{ i.name }</div>)}
      <button onClick={handleClick}>Change</button>
      <button onClick={showData}>Click</button>
    </Fragment>
  );
}

export default Test;