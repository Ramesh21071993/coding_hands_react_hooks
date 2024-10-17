import React, { useState, createContext } from "react";
import ProductsPage from "./ProductsPage";

export const ThemeContext = createContext('');

const UseContext = () => {
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
      <ThemeContext.Provider value={isDark ? "dark-theme" : "light-theme"}>
      <ProductsPage
        productName={"Coding Hands"}
      />
      </ThemeContext.Provider>
    </>
  );
};

export default UseContext;
