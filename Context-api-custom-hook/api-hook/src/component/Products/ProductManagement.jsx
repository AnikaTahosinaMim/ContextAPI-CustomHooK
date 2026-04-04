import React, { useState } from "react";
import ProductCart from "./ProductCart";
import ProductsFiled from "./ProductsFiled";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const handleAddProducts = (newProducts) => {
    const newProduct = [...products, newProducts];
    setProducts(newProduct);
  };
  return (
    <div>
      <ProductsFiled handleAddProducts={handleAddProducts}></ProductsFiled>
      <ProductCart products={products}></ProductCart>
    </div>
  );
};

export default ProductManagement;
