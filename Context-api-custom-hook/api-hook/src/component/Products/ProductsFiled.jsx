import React, { useState } from "react";

const ProductsFiled = ({ handleAddProducts }) => {
  const [error, setError] = useState("");
  const handleProductsSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quentity = e.target.quentity.value;
    // console.log(name, price, quentity);
    const newProducts = {
      name,
      price,
      quentity,
    };
    console.log(newProducts);

    if (name.length === 0) {
      setError("plese enter your name");
    } else if (price.length === 0) {
      setError("ueefi");
    } else {
      setError("");
    }
    if (!error) {
      handleAddProducts(newProducts);
    }
  };
  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleProductsSubmit}>
        <input placeholder="Product name" name="name" type="text" />
        <br />
        <input placeholder="Products price" name="price" type="text" />
        <br />
        <input placeholder="Products quentity" name="quentity" type="text" />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductsFiled;
