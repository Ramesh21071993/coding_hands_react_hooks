import React, { useState } from "react";
import ProductsPage from "./ProductsPage";

const UseCallback = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark Mode
      </label>
      <ProductsPage
        productId={123}
        productName={"Coding Hands"}
        theme={isDark ? "dark-theme" : "light-theme"}
      />
    </>
  );
};

export default UseCallback;
