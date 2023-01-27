import { useState } from "react";
import "../../style/updateProductModal.css";

const UpdateProductModal = (props) => {
  const { selectedProdId, setOpenUpdateModal } = props;
  console.log("selected ID ", selectedProdId);

  let [state, setState] = useState({
    prodName: "",
    price: 0,
    balance: 0,
    sale: "",
    specification: [
      {
        unit: "",
        value: "",
      },
    ],
  });

  return (
    <div>
      <div className="updateProd-modalBg">
        <div className="updateProd-modalContainer">
          <div className="updateProd-titleCloseBtn">
            <button
              onClick={() => {
                props.setOpenUpdateModal(false);
              }}
            >
              x
            </button>
          </div>
          <div className="updateProd-ModalTitle">
            <span>БҮТЭЭГДЭХҮҮН ЗАСВАРЛАХ</span>
          </div>
          <div className="updateProd-ModalBody">
            <div className="addProductForm">
              <div className="addProduct-inputGroupRow">
                <div className="addProduct-inputField">
                  <label htmlFor="prodName">Барааны нэр</label>
                  <input
                    type="text"
                    name="prodName"
                    placeholder="Барааны нэр"
                  />
                </div>
                <div className="addProduct-inputField">
                  <label htmlFor="prodPrice">Барааны үнэ</label>
                  <input
                    type="text"
                    name="prodPrice"
                    placeholder="Барааны үнэ"
                  />
                </div>
              </div>

              <div className="addProduct-inputGroupRow">
                <div className="addProduct-inputField">
                  <label htmlFor="prodBalance">Барааны тоо</label>
                  <input type="number" name="prodBalance" placeholder="0" />
                </div>
                <div className="addProduct-inputField">
                  <label htmlFor="prodSale">Хямдрал (%-иар)</label>
                  <input type="number" name="prodSale" placeholder="0" />
                </div>
              </div>

              <span className="updateProduct-specSubTitle">ҮЗҮҮЛЭЛТҮҮД</span>

              <div className="addProduct-inputGroupRow">
                <div className="addProduct-inputField">
                  <label htmlFor="labelAddProduct1">Хэмжих нэгж</label>
                  <input
                    type="text"
                    name="labelAddProduct1"
                    placeholder="Хэмжих нэгж оруулна"
                  />
                </div>
                <div className="addProduct-inputField">
                  <label htmlFor="valueAddProduct1">Хэмжих утга</label>
                  <input
                    type="text"
                    name="valueAddProduct1"
                    placeholder="Хэмжих утга оруулна"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="updateProd-ModalFooter">
            <button
              onClick={() => {
                props.setOpenUpdateModal(false);
              }}
              id="cancelBtn"
            >
              Гарах
            </button>
            <button>Хадгалах</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateProductModal;
