import logo from "./logo.svg";
import "./App.css";
import SelectBox from "./components/SelectBox";
import CountBox from "./components/CountBox";
import React, { useState, useEffect } from "react";
import InputField from "./components/InputField";
import ColorBox from "./components/ColorBox";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";
import FetchExample from "./components/FetchExample";

function App() {
  const [color, setColor] = useState(null);
  const onchange = (e) => {
    console.log(e.currentTarget.value);
    setColor(e.currentTarget.value);
  };
  return (
    <div
      style={{
        display: "flex",
        margin: "5rem auto",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FetchExample></FetchExample>

      {/* <LeftBox></LeftBox>
      <RightBox></RightBox> */}

      {/* <div>
        <InputField onchange={onchange}></InputField>
      </div>
      <div>
        <ColorBox color={color}></ColorBox>
      </div> */}
    </div>
  );
}

export default App;
