import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../style/updateProductModal.css";

const UpdateProductModal = (props) => {
  const API_HOST = "http://localhost:3008";
  const PRODUCTS_API_URL = `${API_HOST}/products`;
  // const USERS_API_URL = `${API_HOST}/users`;

  const { selectedProdId, setOpenUpdateModal } = props;

  const [product, setProduct] = useState({});

  let [stateProduct, setStateProduct] = useState({
    id: "",
    prodName: "",
    price: "",
    balance: "",
    sale: "",
    specification: [{}],
  });

  const fetchProducts = () => {
    try {
      axios.get(`${PRODUCTS_API_URL}/${selectedProdId}`).then((res) => setProduct(res.data));
    } catch (error) {
      console.log("DB ogogdol unshihad aldaa garlaa!!!")
    }
  };

  const onSave = () => {
    // Some edit function here
    console.log("saved edit data");
  };

  const onCancel = () => {
    setOpenUpdateModal(false);
  };

  const initializeProductData = () => {
    console.log("Inserted Products: ", product);

    setStateProduct({
      id: product[0].pid,
      prodName: product[0].name,
      price: product[0].price,
      balance: product[0].stock,
      sale: product[0].sale,
      specification: [...product[0].spec],
    });
  };

  const getSpecificationRows = () => {
    const dataSpecRows = [];
    console.log("Specific: --> ", stateProduct.specification);

    stateProduct.specification.map((oneSpecific) => {
      for (const [key, value] of Object.entries(oneSpecific)) {
        dataSpecRows.push(
          <div key={key} className="updateProduct-inputGroupRow">
            <div className="updateProduct-inputField">
              <label htmlFor="labelUpdateProduct1">Хэмжих нэгж</label>
              <input
                type="text"
                name="labelUpdateProduct1"
                placeholder="Хэмжих нэгж оруулна"
                defaultValue={key}
              />
            </div>
            <div className="updateProduct-inputField">
              <label htmlFor="valueAddProduct1">Хэмжих утга</label>
              <input
                type="text"
                name="valueAddProduct1"
                placeholder="Хэмжих утга оруулна"
                defaultValue={value}
              />
            </div>
          </div>
        );
      }
    });
    return dataSpecRows;
  };

  useEffect(() => {
    fetchProducts();
    initializeProductData();
  }, []);

  return (
    <div>
      <div className="updateProd-modalBg">
        <div className="updateProd-modalContainer">
          <div className="updateProd-titleCloseBtn">
            <button
              onClick={() => {
                onCancel();
              }}
            >
              x
            </button>
          </div>
          <div className="updateProd-ModalTitle">
            <span>БҮТЭЭГДЭХҮҮН ЗАСВАРЛАХ</span>
          </div>

          <div key={stateProduct.id} className="updateProd-ModalBody">
            <div className="updateProductModalForm">
              <div className="updateProduct-inputGroupRow">
                <div className="updateProduct-inputField">
                  <label htmlFor="prodName">Барааны нэр</label>
                  <input
                    type="text"
                    name="prodName"
                    placeholder="Барааны нэр"
                    defaultValue={stateProduct.prodName}
                  />
                </div>
                <div className="updateProduct-inputField">
                  <label htmlFor="prodPrice">Барааны үнэ</label>
                  <input
                    type="text"
                    name="prodPrice"
                    placeholder="Барааны үнэ"
                    defaultValue={stateProduct.price}
                  />
                </div>
              </div>

              <div className="updateProduct-inputGroupRow">
                <div className="updateProduct-inputField">
                  <label htmlFor="prodBalance">Барааны тоо</label>
                  <input
                    type="text"
                    name="prodBalance"
                    defaultValue={stateProduct.balance}
                  />
                </div>
                <div className="updateProduct-inputField">
                  <label htmlFor="prodSale">Хямдрал (%-иар)</label>
                  <input
                    type="text"
                    name="prodSale"
                    defaultValue={stateProduct.sale}
                  />
                </div>
              </div>

              <span className="updateProduct-specSubTitle">ҮЗҮҮЛЭЛТҮҮД</span>
              {getSpecificationRows()}
            </div>
          </div>

          <div className="updateProd-ModalFooter">
            <button
              onClick={() => {
                onCancel();
              }}
              id="cancelBtn"
            >
              Гарах
            </button>
            <button
              onClick={() => {
                onSave();
              }}
            >
              Хадгалах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateProductModal;
