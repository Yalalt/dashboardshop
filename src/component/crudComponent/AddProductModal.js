import axios from "axios";
import { useEffect, useState } from "react";

import "../../style/addProductModal.css";

const API_SERVER = "http://localhost:3008";

const AddProductModal = (props) => {
  let { closeAddProductModal } = props;

  let [addProductsMainFields, setAddProductsMainFields] = useState([]);
  let [specRows, setSpecRows] = useState([
    {
      unitValue: "",
      sizeValue: "",
    },
  ]);

  const genRandomHex = (size) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");

  const handleAddRow = () => {
    setSpecRows([...specRows, { unitValue: "", sizeValue: "" }]);
  };

  // Specification fields change event handler
  const eventHandlerSpecificationFields = (e, index) => {
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
  const eventHandlerMainFields = (e) => {
    e.preventDefault();

    const productId = genRandomHex(8);

    const specialsRows = specRows.map((field) => {
      let tempRow = {};
      tempRow[field.unitValue] = field.sizeValue;
      return tempRow;
    });

    const newProduct = {
      pid: productId,
      name: e.target.prodName.value,
      price: e.target.prodPrice.value,
      stock: e.target.prodBalance.value,
      sale: e.target.prodSale.value,
      image: e.target.prodImageUrl.value,
      description: e.target.addProdDescription.value,
      category: e.target.addProdHidden.value,
      warranty: e.target.addProdWarranty.value,
      hidden: e.target.addProdHidden.value,
      prodCuDate: Date.now().toString(),
      spec: specialsRows,
    };

    console.log("Uusgesenii daraa ==> ", newProduct);

    const options = {
      method: 'POST',
      
    };

    try {
      fetch(`${API_SERVER}/product/add`, newProduct).then(() => {
        console.log("POST added Product ...");
      });
    } catch (error) {
      console.log("Error uuslee in send POST axios===> ", error);
    }
    onCancel();
  };

  const onCancel = () => {
    closeAddProductModal();
  };
  

  useEffect(() => {
    console.log("Before RUN ===> ", specRows);
  }, []);

  return (
    <div>
      <div className="addProduct-modalBg">
        <form action="" onSubmit={eventHandlerMainFields}>
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

                <div className="addProduct-inputGroupRow">
                  <div className="addProduct-inputField">
                    <label for="prodImageUrl">Барааны зураг</label>
                    <input type="text" name="prodImageUrl" placeholder="0" />
                  </div>
                  <div className="addProduct-inputField">
                    <label for="addProdWarranty">Баталгаат хугацаа</label>
                    <input
                      type="number"
                      name="addProdWarranty"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="addProduct-inputGroupRow">
                  <div className="addProduct-inputField">
                    <label for="proddescLabel">Товч мэдээлэл оруулах</label>
                    <textarea
                      name="addProdDescription"
                      type="text"
                      cols="50"
                      rows="5"
                      className="addProduct-descTextArea"
                    ></textarea>
                  </div>
                  <div className="addProduct-inputField"></div>
                </div>
                <div className="addProduct-inputGroupRow">
                  <div className="addProduct-inputField">
                    <label for="prodCategory">Категори сонгох</label>
                    <select name="prodCategory">
                      <option value="special">Онцгой</option>
                      <option value="tablets">Таблет</option>
                      <option value="electronics">Цахилгаан бараа</option>
                      <option value="computers">Компьютер</option>
                      <option value="telescope">Телескоп</option>
                      <option value="appliance">Гэр ахуйн</option>
                      <option value="console">Консол тоглоом</option>
                    </select>
                  </div>
                  <div className="addProduct-inputField">
                    <label for="addProdHidden">Вэб хуудсанд харуулах</label>
                    <select name="addProdHidden">
                      <option value="true">Харуулах</option>
                      <option value="false">Нуух</option>
                    </select>
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
                          onChange={(e) =>
                            eventHandlerSpecificationFields(e, index)
                          }
                        />
                      </div>
                      <div className="addProduct-inputField">
                        <label>Хэмжих утга</label>
                        <input
                          type="text"
                          name="sizeValue"
                          placeholder="Хэмжих утга оруулна"
                          onChange={(e) =>
                            eventHandlerSpecificationFields(e, index)
                          }
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
              <button type="submit" id="saveBtn">
                Хадгалах
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddProductModal;
