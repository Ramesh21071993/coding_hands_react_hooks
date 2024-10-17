import React, { useContext } from "react";
import { ThemeContext } from ".";
const ProductsPage = ({
  productName,
}: {
  productName: string;
}) => {
  const theme = useContext(ThemeContext);

  return <div className={theme}>Product Name: {productName}</div>;
};

export default ProductsPage;
