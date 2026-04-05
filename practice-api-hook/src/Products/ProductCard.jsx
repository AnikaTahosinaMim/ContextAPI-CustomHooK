import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div>
      <h2>Products : {products.length}</h2>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>Products</td>
            <td>number</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {products.map((items, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{items.name}</td>
              <td>{items.number}</td>
              <td>{items.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCard;
