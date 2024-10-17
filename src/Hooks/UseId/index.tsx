import React, { useId } from "react";

const Item = () => {
  const id = useId();

  return (
    <>
      <div id={id}>First</div>
      Your id is {id}
    </>
  );
};

const UseId = () => {
  const id = useId();

  return (
    <>
      <div id={id}>First</div>
      Your id is {id}
      <Item />
      <Item />
      <Item />
    </>
  );
};

export default UseId;
