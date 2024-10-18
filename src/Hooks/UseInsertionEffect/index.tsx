import React, { useState, useInsertionEffect } from "react";

const UseInsertionEffect = () => {
  const [dynamicColor, setDynamicColor] = useState("green");
  const dStyle = `
	.dynamic-element {
	color: ${dynamicColor};
	transition: color 0.5s ease;
	}
`;
  useInsertionEffect(() => {
    const styleEle = document.createElement("style");
    styleEle.innerHTML = dStyle;
    document.head.appendChild(styleEle);
    return () => {
      document.head.removeChild(styleEle);
    };
  }, [dynamicColor]);

  return (
    <div className="dynamic-element">
      <h1>Hello, Coding Hands!</h1>
      <h3>useInsertionEffect Hook</h3>
      <button onClick={() => setDynamicColor("red")}>Change Color</button>
    </div>
  );
};

export default UseInsertionEffect;
