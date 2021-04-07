import React, { useState, useEffect } from "react";

export default function InputField(props) {
  return (
    <div style={{ margin: "2rem auto" }}>
      <input type="text" onChange={props.onchange}></input>
    </div>
  );
}
