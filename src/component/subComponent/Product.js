import { useState } from "react";

const Product = ({ index, product, setMenuModalOpen }) => {
  return (
    <tr key={index}>
      <td className="productItem">
        <img src={product.image} alt={product.name} />
      </td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.sale}</td>
      <td>
        <span className="productsCategory-table">{product.category}</span>
      </td>
      <td className="productsBtn-table">
        <button onClick={setMenuModalOpen}>:</button>
      </td>
    </tr>
  );
};
export default Product;
