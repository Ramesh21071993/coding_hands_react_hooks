import React, { useCallback } from "react";
import ShippingForm from "./ShippingForm";

const ProductsPage = ({
  theme,
  productId,
  productName,
}: {
  theme: string;
  productId: number;
  productName: string;
}) => {

  const handleSubmit = useCallback((orderDetails: any) => {
    console.log('orderDetails', orderDetails)
  }, [productId, productName])

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ProductsPage;
