import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../style/products.css";
import Product from "./Product";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const Products = () => {
  let [products, setProducts] = useState([]);
  const [menuModalShow, setMenuModalShow] = useState(false);

  const setMenuModalOpen = () => {
    setMenuModalShow(true);
  };

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
              <Product
                key={`prid${index}`}
                index={product.pid}
                product={product}
                setMenuModalOpen={setMenuModalOpen}
              />
            ))}
        </tbody>
      </table>
      {menuModalShow ? (
        <UpdateProductMenuModal
          show={menuModalShow}
          onHide={() => setMenuModalShow(false)}
          backdrop="static"
          keyboard={false}
        />
      ) : null}
    </div>
  );
};

function UpdateProductMenuModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">Modal header</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <h4>Бүтээгдэхүүн засварлах сонголтууд:</h4>
        <p>Өөрчлөх</p>
        <p>Устгах</p>
        <p>Вэб сайтаас нуух</p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={props.onHide}>Close</Button>
      </ModalFooter>
    </Modal>
  );
}

export default Products;
