import React, { useEffect, useState } from "react";

export default function CountBox(props) {
  const [count, setCount] = useState(0);

  const addFunction = () => {
    setCount(count + 1);
  };

  const minusFunction = () => {
    setCount(count - 1);
  };

  const clear = () => {
    setCount(0);
  };

  useEffect(() => {
    console.log("fire useEffect");
    console.log("useeffect", count);
    if (count !== 0 && count % 5 === 0) {
      alert("5의배수");
    }
    return () => {
      console.log("useeffect return", count);
    };
  }, [count]);

  useEffect(() => {
    console.log("connect");
    return () => {
      console.log("disconnect");
    };
  }, []);

  return (
    <>
      <div>{count}</div>
      <button onClick={addFunction}>add</button>
      <button onClick={minusFunction}>minus</button>
      <button onClick={clear}>reset</button>
    </>
  );
}
