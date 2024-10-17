import React, { useDebugValue, useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 2000);
  useDebugValue(`count is ${count}`);
  return count;
};

const UseDebugValue = () => {
  const count = useCount();
  return <>count: {count}</>;
};

export default UseDebugValue;
