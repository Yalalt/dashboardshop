import React, { useState, useEffect } from "react";
import "../../style/products.css";
import Product from "./Product";
import UpdateProductModal from "../crudComponent/UpdateProductModal";
import AddProductModal from "../crudComponent/AddProductModal";
import Pagination from "./Pagination";
import axios from "axios";


const Products = (props) => {
  const displayNumberProducts = 5;
  let totalNumberProducts = 0;
  let totalPageCount = 0;


  let [openUpdateModal, setOpenUpdateModal] = useState(false);
  let [openAddModal, setOpenAddModal] = useState(false);

  let [selectedProdId, setSelectedProdId] = useState("0");
  let [products, setProducts] = useState([]);

  let [refreshPage, setRefreshPage] = useState("");

  const [currentNumber, setCurrentNumber] = useState(1);
  // const [totalNumberProducts, setTotalNumberProducts] = useState();
  // const [currentPage ,setCurrentPage] = useState();
  // const [firstProductIndex, setFirstProductIndex] = useState();
  // const [lastProductIndex, setLastProductIndex] = useState();


  const getAllProductHandler = () => {
    axios
      .get("http://localhost:3008/products")
      .then((res) => {
        if (res.status === 200) {
          console.log("Success");
          return res.data;
        } else {
          console.log("Not successful");
        }
      })
      .then((data) => {
        console.log("before setState==> ", data);
        setProducts(data);
        totalNumberProducts = data.length;
        totalPageCount = Math.ceil(totalNumberProducts / displayNumberProducts);
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        console.log("Total number products: ", totalNumberProducts);
        console.log("Page number: ", totalPageCount);
      });
  };

  // Display interface controller
  const openUpdateProductModal = (pId) => {
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
                key={`product${index}`}
                index={product.pid}
                product={product}
                openUpdateProductModal={openUpdateProductModal(index, product)}
              />
            ))}
        </tbody>
      </table>
      <Pagination
        className="paginationContainer"
        currentNumber={currentNumber? currentNumber : "5"}
        setCurrentNumber={setCurrentNumber}
      />
      {(openUpdateModal ? (
        <UpdateProductModal
          selectedProdId={selectedProdId}
          closeUpdateProductModal={closeUpdateProductModal}
        />
      ) : null) ||
        (openAddModal ? (
          <AddProductModal refreshPage={refreshPage} setRefreshPage={setRefreshPage} closeAddProductModal={closeAddProductModal} />
        ) : null)}
    </div>
  );
};

export default Products;
