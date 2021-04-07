import React, { useState, useEffect } from "react";

export default function SelectBox(props) {
  useEffect(() => {
    console.log(props.data);
  }, []);

  return (
    <div>
      <select style={{ width: "10rem" }}>
        {props.data.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
}
