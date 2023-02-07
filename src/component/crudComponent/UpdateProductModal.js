import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../style/updateProductModal.css";

const UpdateProductModal = (props) => {
  const PRODUCTS_API_URL = "http://localhost:3008/product";

  const { selectedProdId, closeUpdateProductModal } = props;
  const [product, setProduct] = useState({});

  const fetchProducts = () => {
    axios
      .get(`${PRODUCTS_API_URL}/${selectedProdId}`)
      .then((res) => {
        setProduct(res.data.userData);
        console.log("res ==> ", res.data.userData);
      })
      .catch((error) => {
        console.log("DB ogogdol unshihad aldaa garlaa!!!");
      });
  };

  const onSave = () => {
    // Some edit function here
    console.log("saved edit data");
  };

  const onCancel = () => {
    closeUpdateProductModal();
  };

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

          <div key={product.pid} className="updateProd-ModalBody">
            <div className="updateProductModalForm">
              <div className="updateProduct-inputGroupRow">
                <div className="updateProduct-inputField">
                  <label htmlFor="prodName">Барааны нэр</label>
                  <input
                    type="text"
                    name="prodName"
                    placeholder="Барааны нэр"
                    defaultValue={product.name}
                  />
                </div>
                <div className="updateProduct-inputField">
                  <label htmlFor="prodPrice">Барааны үнэ</label>
                  <input
                    type="text"
                    name="prodPrice"
                    placeholder="Барааны үнэ"
                    defaultValue={product.price}
                  />
                </div>
              </div>

              <div className="updateProduct-inputGroupRow">
                <div className="updateProduct-inputField">
                  <label htmlFor="prodBalance">Барааны тоо</label>
                  <input
                    type="text"
                    name="prodBalance"
                    defaultValue={product.stock}
                  />
                </div>
                <div className="updateProduct-inputField">
                  <label htmlFor="prodSale">Хямдрал (%-иар)</label>
                  <input
                    type="text"
                    name="prodSale"
                    defaultValue={product.sale}
                  />
                </div>
              </div>

              <span className="updateProduct-specSubTitle">ҮЗҮҮЛЭЛТҮҮД</span>

              {
              console.log("ssssss===> ", product.spec)

              // product.spec.forEach((oneSpecific) => {
              //   for (const [key, value] of Object.entries(oneSpecific)) {
              //     <div key={key} className="updateProduct-inputGroupRow">
              //       <div className="updateProduct-inputField">
              //         <label htmlFor="labelUpdateProduct1">Хэмжих нэгж</label>
              //         <input
              //           type="text"
              //           name="labelUpdateProduct1"
              //           placeholder="Хэмжих нэгж оруулна"
              //           defaultValue={key}
              //         />
              //       </div>
              //       <div className="updateProduct-inputField">
              //         <label htmlFor="valueAddProduct1">Хэмжих утга</label>
              //         <input
              //           type="text"
              //           name="valueAddProduct1"
              //           placeholder="Хэмжих утга оруулна"
              //           defaultValue={value}
              //         />
              //       </div>
              //     </div>;
              //   }
              // })
              
              }
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
