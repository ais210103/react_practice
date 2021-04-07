import React, { useState, useEffect } from "react";
import SelectBox from "./SelectBox";
export default function FetchExample(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    //　public/json/voltageClass.jsonのデータを取得して
    //　listに setするfunctionを定義
    async function getData() {
      const res = await fetch("json/voltageClass.json");
      const data = await res.json();
      console.log("fetched", data);
      setList(data);
    }

    getData();
  }, []);

  //   useEffect(async () => {
  //     //　public/json/voltageClass.jsonのデータを取得して
  //     //　listに setするfunctionを定義
  //     const res = await fetch("json/voltageClass.json");
  //     const data = await res.json();
  //     console.log("fetched", data);
  //     setList(data);
  //   }, []);

  return (
    <div>
      <SelectBox data={list}></SelectBox>
    </div>
  );
}
