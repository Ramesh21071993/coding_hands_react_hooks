import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [countPlus2, setCountPlus2] = useState(0);

  useEffect(() => {
    setCountPlus2(count + 2);
    return () => {
      setCountPlus2(0);
    };
  }, []);

  useEffect(() => {
    setCountPlus2(count ? count + 2 : 0);
  }, [count]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <br />
      Your new value is {countPlus2}
    </>
  );
};

export default UseEffect;
