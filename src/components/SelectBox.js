import React, { useState, useEffect } from "react";

export default function SelectBox(props) {
  return (
    <div>
      <select style={{ width: "10rem" }}>
        {props.data.map((item, i) => {
          return <option key={i}>{item}</option>;
        })}
      </select>
    </div>
  );
}
