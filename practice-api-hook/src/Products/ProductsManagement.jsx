import React, { useState } from "react";
import ProductsForm from "./ProductsForm";
import ProductCard from "./ProductCard";

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);
  const handleProducts = (newProducts) => {
    const newproduct = [...products, newProducts];
    setProducts(newproduct);
  };
  return (
    <div>
      <ProductsForm handleProducts={handleProducts}></ProductsForm>
      <ProductCard products={products}></ProductCard>
    </div>
  );
};

export default ProductsManagement;
