import React, { useRef } from "react";
import MyInput, {InputRef} from './MyInput';

const UseImperativeHandle = () => {
  const ref = useRef<InputRef>(null);

  function handleClick() {
    ref.current?.focus();
    
    // This won't work because the DOM node isn't exposed:
    // ref.current.style.opacity = 0.5;
  }

  return (
    <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
};

export default UseImperativeHandle;
