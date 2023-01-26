import { useState } from "react";

const Product = ({ index, product }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  return (
    <tr key={index}>
      <td>{index}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.sale}</td>
      <td>
        <span className="productsCategory-table">{product.category}</span>
      </td>
      <td className="productsBtn-table">:</td>
    </tr>
  );
};
export default Product;
