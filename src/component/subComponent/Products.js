import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import "../../style/products.css";

const Products = () => {
  let [products, setProducts] = useState([]);

  const getAllProducts = () => {
    try {
      axios
        .get("http://localhost:3007/products")
        .then((response) => setProducts(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="products-bgColor">
        <div>
          <p>Бүтээгдэхүүн</p>
        </div>

        <div className="products-controlBar">
          <div className="products-controlBar-addBtn">
            <button variant="primary">+ Бараа нэмэх</button>
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
                <tr key={index}>
                  <td></td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.sale}</td>
                  <td>
                    <span className="productsCategory-table">
                      {product.category}
                    </span>
                  </td>
                  <td className="productsBtn-table ">:</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Products;
