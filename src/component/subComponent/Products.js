import React, { useState, useEffect } from "react";

import productsData from "../../utils/db/db.json";
import "../../style/products.css";
import { Link, Outlet, Route } from "react-router-dom";

const Products = () => {
  let [products, setProducts] = useState([productsData.products]);

  useEffect(() => {
    console.log(products[0]);
  }, [products]);

  return (
    <React.Fragment>
      <div className="products-bgColor">
        <div>
          <p>Бүтээгдэхүүн</p>
        </div>

        <div className="products-controlBar">
          <div className="products-controlBar-addBtn">
            <Link to="addproduct">
              <button type="button">+ Бараа нэмэх</button>
            </Link>
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
            <th>Зураг</th>
            <th>Барааны нэр</th>
            <th>Үнэ</th>
            <th>Үлдэгдэл</th>
            <th>Хямдрал %</th>
            <th>Категори</th>
            <th>:</th>
          </thead>
          <tbody>
            {products[0].map((product) => {
              return (
                <>
                  <tr>
                    <td></td>
                    <td>
                      <span>{product.name}</span>
                    </td>
                    <td>
                      <span>{product.price}</span>
                    </td>
                    <td>
                      <span>{product.stock}</span>
                    </td>
                    <td>
                      <span>{product.sale}</span>
                    </td>
                    <td>
                      <span className="productsCategory-table">
                        {product.category}
                      </span>
                    </td>
                    <td className="productsBtn-table ">:</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <Outlet />
      </div>
    </React.Fragment>
  );
};
export default Products;
