import React, { memo, useCallback, useState } from "react";

interface ShippingProps {
  onSubmit: (e: any) => void;
}

const ShippingForm = ({ onSubmit }: ShippingProps) => {
  const [count, setCount] = useState(0)

  // making the render slow by using loop
  console.log('Rendering')
  const startTime = performance.now();
  while(performance.now() - startTime < 500) {
    // 
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    };
    onSubmit(orderDetails)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Total Items:
        <button onClick={() => setCount(count - 1)}>-</button>
        {
          count
        }
        <button onClick={() => setCount(count + 1)}>+</button>
      </label>
      <br />
      <label>
        Street:
        <input name="street" type={"text"} />
      </label>
      <br />
      <label>
        City:
        <input name="city" type={"text"} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default memo(ShippingForm);
