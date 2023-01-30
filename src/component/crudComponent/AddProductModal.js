import { useEffect, useState } from "react";

import "../../style/addProductModal.css";

const AddProductModal = (props) => {
  let { closeAddProductModal } = props;

  // let [productSpecRows, setAddProductSpecRows] = useState([]);
  let [specRows, setSpecRows] = useState([
    {
      unitValue: "",
      sizeValue: "",
    },
  ]);

  const handleAddRow = () => {
    setSpecRows([...specRows, { unitValue: "", sizeValue: "" }]);
  };

  const handleInputChange = (e, index) => {
    const { unit, value } = e.target;
    const list = [...specRows];
    list[index][unit] = value;
    setSpecRows(list);
  };

  const handleRemoveRow = (index) => {
    const list = [...specRows];
    list.splice(index, 1);
    setSpecRows(list);
  };

  // Main fields change event handler
  const eventHandlerMainFields = () => {};

  // Specification fields change event handler
  const eventHandlerSpecificationFields = () => {};

  const onCancel = () => {
    closeAddProductModal();
  };
  const onSave = () => {};

  useEffect(() => {
    console.log("Before RUN ===> ", specRows);
  }, []);

  return (
    <div>
      <div className="addProduct-modalBg">
        <div className="addProduct-modalContainer">
          <div className="addProduct-titleCloseBtn">
            <button
              onClick={() => {
                onCancel();
              }}
            >
              x
            </button>
          </div>
          <div className="addProduct-modalTitle">
            <span>БҮТЭЭГДЭХҮҮН НЭМЭХ</span>
          </div>
          <div className="addProduct-modalBody">
            <div className="addProductModalForm">
              <div className="addProduct-inputGroupRow">
                <div className="addProduct-inputField">
                  <label for="prodName">Барааны нэр</label>
                  <input
                    type="text"
                    name="prodName"
                    placeholder="Барааны нэр"
                  />
                </div>
                <div className="addProduct-inputField">
                  <label for="prodPrice">Барааны үнэ</label>
                  <input
                    type="text"
                    name="prodPrice"
                    placeholder="Барааны үнэ"
                  />
                </div>
              </div>

              <div className="addProduct-inputGroupRow">
                <div className="addProduct-inputField">
                  <label for="prodBalance">Барааны тоо</label>
                  <input type="number" name="prodBalance" placeholder="0" />
                </div>
                <div className="addProduct-inputField">
                  <label for="prodSale">Хямдрал (%-иар)</label>
                  <input type="number" name="prodSale" placeholder="0" />
                </div>
              </div>

              <span className="addProduct-specSubTitle">ҮЗҮҮЛЭЛТҮҮД</span>

              {/* Heden specs rows bgaag aruulah heseg */}

              {specRows.map((item, index) => {
                return (
                  <div key={index} className="addProduct-inputGroupRowSpec">
                    <div className="addProduct-inputField">
                      <label>Хэмжих нэгж</label>
                      <input
                        type="text"
                        name="unitValue"
                        placeholder="Хэмжих нэгж оруулна"
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                    <div className="addProduct-inputField">
                      <label>Хэмжих утга</label>
                      <input
                        type="text"
                        name="sizeValue"
                        placeholder="Хэмжих утга оруулна"
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                    <div className="addProd-AddRemoveBtnGroup">
                      {specRows.length !== 1 && (
                        <button
                          type="button"
                          id="addProd-removeButton"
                          onClick={(index) => handleRemoveRow(index)}
                        >
                          Хасах
                        </button>
                      )}
                      {specRows.length - 1 === index && (
                        <button
                          type="button"
                          id="addProd-addMoreButton"
                          onClick={() => handleAddRow()}
                        >
                          Нэмэх
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="addProduct-modalFooter">
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
              id="saveBtn"
            >
              Хадгалах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProductModal;
