import React, { useState } from "react";

const ProductsForm = ({ handleProducts }) => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const number = e.target.number.value;
    const newProducts = {
      name,
      email,
      number,
      password,
    };
    // console.log(newProducts);
    handleProducts(newProducts);
    if (name.length === 0) {
      setError("place Inter your name");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <h3>A products list</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <input type="number" name="number" placeholder="number" />
        <input type="submit" value="submit" />
        <p><small>{error}</small></p>
      </form>
    </div>
  );
};

export default ProductsForm;
