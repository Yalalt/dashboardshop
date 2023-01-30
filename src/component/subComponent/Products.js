import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../style/products.css";
import Product from "./Product";
import UpdateProductModal from "../crudComponent/UpdateProductModal";
import AddProduct from "../crudComponent/AddProduct";

const Products = () => {
  let [products, setProducts] = useState([]);
  let [openUpdateModal, setOpenUpdateModal] = useState(false);
  let [openAddModal, setOpenAddModal] = useState(false);
  let [selectedProdId, setSelectedProdId] = useState("0");

  const openUpdateProductModal = (pId) => {
    setOpenUpdateModal(true);
    setSelectedProdId(pId);
  };

  const openAddProductModal = () => {
    setOpenAddModal(true);
  }

  const getAllProducts = () => {
    try {
      axios
        .get("http://localhost:3008/products")
        .then((response) => setProducts(response.data));
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="products-bgColor">
      {
      // openUpdateModal && (
      //   <UpdateProductModal
      //     selectedProdId={selectedProdId}
      //     setOpenUpdateModal={setOpenUpdateModal}
      //   />
      // )
      
      openAddModal && (
        <AddProduct />
      )}
      <div>
        <p>Бүтээгдэхүүн</p>
      </div>

      <div className="products-controlBar">
        <div className="products-controlBar-addBtn">
          <button variant="primary" onClick={openAddProductModal}>+ Бараа нэмэх</button>
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
          {products &&
            products.map((product, index) => (
              <Product
                key={`prid${index}`}
                index={product.pid}
                product={product}
                openUpdateProductModal={openUpdateProductModal}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
