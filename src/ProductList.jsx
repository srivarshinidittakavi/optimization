
import React from "react";

const ProductList = ({ products, onSelect }) => {
  console.log("ProductList rendered!");
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} - ${p.price}
          <button onClick={() => onSelect(p)}>Select</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;