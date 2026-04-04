import React from "react";

const ProductsFiled = () => {
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
    </div>
  );
};

export default ProductsFiled;
