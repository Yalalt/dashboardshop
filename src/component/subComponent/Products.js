import React, { useState, useEffect, useContext } from "react";
import "../../style/products.css";
import Product from "./Product";
import UpdateProductModal from "../crudComponent/UpdateProductModal";
import AddProductModal from "../crudComponent/AddProductModal";
import Pagination from "./Pagination";
import axios from "axios";

import { ProductsContext } from "../../pages/Main";

const Products = () => {
  const { products1, setProducts1 } = useContext(ProductsContext);

  const displayNumberProducts = 5;
  let totalNumberProducts = 0;
  let totalPageCount = 0;

  
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedProdId, setSelectedProdId] = useState("0");
  const [product, setProduct] = useState();

  const [refreshPage, setRefreshPage] = useState("");
  const [currentNumber, setCurrentNumber] = useState(1);

  // Display interface controller
  const openUpdateProductModal = (pId, product) => {
    console.log("IIINNNNEEER Function: ", pId);
    console.log("Products orj irsen ni --->", product);

    setProduct(product);
    setSelectedProdId(pId);
    closeAddProductModal();
    setOpenUpdateModal(true);
  };

  const openAddProductModal = () => {
    closeUpdateProductModal();
    setOpenAddModal(true);
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
          {products1 &&
            products1.map((product, index) => (
              <Product
                key={`product${index}`}
                index={product.pid}
                product={product}
                openUpdateProductModal={() =>
                  openUpdateProductModal(index, product)
                }
              />
            ))}
        </tbody>
      </table>
      <Pagination
        className="paginationContainer"
        currentNumber={currentNumber ? currentNumber : "5"}
        setCurrentNumber={setCurrentNumber}
      />
      {(openUpdateModal ? (
        <UpdateProductModal
          product={product}
          selectedProdId={selectedProdId}
          closeUpdateProductModal={closeUpdateProductModal}
        />
      ) : null) ||
        (openAddModal ? (
          <AddProductModal
            refreshPage={refreshPage}
            setRefreshPage={setRefreshPage}
            closeAddProductModal={closeAddProductModal}
          />
        ) : null)}
    </div>
  );
};

export default Products;
