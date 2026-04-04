import React from "react";

const ProductCart = ({ products }) => {
  return (
    <div>
      <h2>Products : {products.length}</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>product</th>
            <th>price</th>
            <th>quentity</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quentity}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCart;
