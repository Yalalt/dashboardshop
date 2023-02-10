import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import "../../style/updateProductModal.css";

const UpdateProductModal = (props) => {
  const { product, selectedProdId, closeUpdateProductModal } = props;
  const [inputUnit, setInputUnit] = useState([]);
  const [inputSize, setInputSize] = useState([]);
  const [specRows, setSpecRows] = useState([]);
  const [localdom, setLocaldom] = useState([]);


  console.log(")0_0)/  0>0)//===> START");

  const editProductEventHandler = (e) => {
    e.preventDefault();


    console.log("ene yyg yu we", e.target);
  
   
  };

  const onCancel = () => {
    closeUpdateProductModal();
  };

  return (
    <div>
      <form onSubmit={editProductEventHandler}>
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

                {product.spec.map((oneSpecific, index) => {
                  return Object.entries(oneSpecific).map(
                    ([key, value], subIndex) => {
                      // let rowSpecValues = {};
                      // rowSpecValues[key] = value;
                      // setSpecRows([...specRows, rowSpecValues]);


                      return (
                        <div
                          key={`${index}_${subIndex}`}
                          className="updateProduct-inputGroupRow"
                        >
                          <div className="updateProduct-inputField">
                            <label htmlFor="labelUpdateProduct1">
                              Хэмжих нэгж
                            </label>
                            <input
                              
                              type="text"
                              name={`unitValueUpdateProduct${index}`}
                              placeholder="Хэмжих нэгж оруулна"
                              defaultValue={key ? key : ""}
                            />
                          </div>
                          <div className="updateProduct-inputField">
                            <label htmlFor="valueAddProduct1">
                              Хэмжих утга
                            </label>
                            <input
                              
                              type="text"
                              name={`sizeValueUpdateProduct${index}`}
                              placeholder="Хэмжих утга оруулна"
                              defaultValue={value ? value : ""}
                            />
                          </div>
                        </div>
                      );
                    }
                  );
                })}
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
              <button type="submit">Хадгалах</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UpdateProductModal;
