import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "../../style/products.css";
import Product from "./Product";
import UpdateProductModal from "../crudComponent/UpdateProductModal";
import AddProductModal from "../crudComponent/AddProductModal";
import axios from "axios";

const Products = (props) => {
  let [openUpdateModal, setOpenUpdateModal] = useState(false);
  let [openAddModal, setOpenAddModal] = useState(false);

  let [selectedProdId, setSelectedProdId] = useState("0");
  let [products, setProducts] = useState([]);

  const [currentNumber, setCurrentNumber] = useState(10);

  const getAllProductHandler = () => {
    axios.get("http://localhost:3008/products")
      .then((res) => {
        if (res.status === 200) {
          console.log("Success");
          return res.data;
        } else {
          console.log("Not successful");
        }
      })
      .then((data) => {
        console.log("before setState==> ", data)
        setProducts(data)})
      .catch((error) => {
        console.error(error);
      });
  };

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

  useEffect(() => {
    getAllProductHandler();
  }, []);

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
      <Routes>
        <Route path="/page/:id" element={<Page setCurrentNumber={setCurrentNumber} />} />
      </Routes>
      <Pagination currentPage={currentNumber} setCurrentNumber={setCurrentNumber} />
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
