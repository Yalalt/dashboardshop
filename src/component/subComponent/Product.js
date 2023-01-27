import { useState } from "react";
import MenuModal from "./MenuModal";

const Product = ({ index, product, openUpdateProductModal }) => {
  const [menuModalOpen, setMenuModalOpen] = useState(false);

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
        {menuModalOpen && (
          <MenuModal
            pid={product.pid}
            setOpenModal={setMenuModalOpen}
            openUpdateProductModal={openUpdateProductModal}
          />
        )}
        <button
          onClick={() => {
            setMenuModalOpen(true);
          }}
        >
          :
        </button>
      </td>
    </tr>
  );
};
export default Product;
