import React, { useState, useEffect } from "react";

export default function ColorBox(props) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: props.color,
        border: "solid 1px black",
      }}
    ></div>
  );
}
