import React, { useState } from "react";
import "../../style/products.css";
import Product from "./Product";
import UpdateProductModal from "../crudComponent/UpdateProductModal";
import AddProductModal from "../crudComponent/AddProductModal";

const Products = (props) => {
  let [openUpdateModal, setOpenUpdateModal] = useState(false);
  let [openAddModal, setOpenAddModal] = useState(false);

  let [selectedProdId, setSelectedProdId] = useState("0");

  const { lists } = props;

  // Display interface controller
  const openUpdateProductModal = (pId) => {
    setOpenUpdateModal(true);
    setOpenAddModal(false);
    setSelectedProdId(pId);
  };

  const openAddProductModal = () => {
    setOpenAddModal(true);
    setOpenUpdateModal(false);
  };

  const closeAddProductModal = () => {
    setOpenAddModal(false);
  };

  const closeUpdateProductModal = () => {
    setOpenUpdateModal(false);
  };

  return (
    <div className="products-bgColor">
      <div>
        <p>Бүтээгдэхүүн</p>
      </div>

      <div className="products-controlBar">
        <div className="products-controlBar-addBtn">
          <button variant="primary" onClick={openAddProductModal}>
            + Бараа нэмэх
          </button>
        </div>
        <div className="products-controlBar-filter">
          <div>
            <select>
              <option>Бүгд</option>
              <option>Шинэ бүтээгдэхүүн</option>
              <option>Устгасан бүтээгдэхүүн</option>
              <option>Нөөцөлсөн бүтээгдэхүүн</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="searchByValue"
              className="products-searchInput"
              placeholder="Хайх"
            />
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Зураг</th>
            <th>Барааны нэр</th>
            <th>Үнэ</th>
            <th>Үлдэгдэл</th>
            <th>Хямдрал %</th>
            <th>Категори</th>
            <th>:</th>
          </tr>
        </thead>
        <tbody>
          {lists &&
            lists.map((product, index) => (
              <Product
                key={`prid${index}`}
                index={product.pid}
                product={product}
                openUpdateProductModal={openUpdateProductModal}
              />
            ))}
        </tbody>
      </table>
      {(openUpdateModal ? (
        <UpdateProductModal
          selectedProdId={selectedProdId}
          closeUpdateProductModal={closeUpdateProductModal}
        />
      ) : null) ||
        (openAddModal ? (
          <AddProductModal closeAddProductModal={closeAddProductModal} />
        ) : null)}
    </div>
  );
};

export default Products;
