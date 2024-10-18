import React, { useRef, useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {

  const ref = useRef(null);

  const [value, setValue] = useState("CH");

  useEffect(() => {
    console.log("useEffect is called with the value of ", value, performance.now());
  }, [value]);

  useLayoutEffect(() => {
    console.log("UseLayoutEffect is called with the value of ", value, performance.now());
  }, [value]);



  setTimeout(() => {
    setValue("Coding hands");
  }, 2000);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        margin: "auto",
      }}
    >
      <h1 style={{ color: "green" }}>{value}</h1>
    </div>
  );
};

export default UseLayoutEffect;
