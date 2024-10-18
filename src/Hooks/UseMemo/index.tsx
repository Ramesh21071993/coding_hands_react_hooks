import React, { useMemo, useState } from "react";


// Function to square the value
function squareNum(number: number) {
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

const UseMemo = () => {

  const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);
    
    // Using useMemo
    const squaredNum = useMemo(() => {
      return squareNum(number);
  }, [number]);

    // Change the state to the input
    const onChangeHandler = (e: any) => {
        setNumber(e.target.value);
    };

    // Increases the counter by 1
    const counterHandler = () => {
        setCounter(counter + 1);
    };
    return (
        <div className="App">
            <h1>Welcome to Coding Hands</h1>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}>
            </input>

            <div>OUTPUT: {squaredNum}</div>
            <button onClick={counterHandler}>
                Counter ++
            </button>
            <div>Counter : {counter}</div>
        </div>
    );
};

export default UseMemo;
