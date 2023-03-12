import axios from "axios";
import { useEffect, useState } from "react";

import "../../style/addProductModal.css";

const AddProductModal = (props) => {
  let { closeAddProductModal } = props;

  let [addProductsMainFields, setAddProductsMainFields] = useState([]);
  let [inputSize, setInputSize] = useState();
  let [inputUnit, setInputUnit] = useState();
  let [specRows, setSpecRows] = useState([]);

  const genRandomHex = (size) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");

  const addProductSpecificSave = (e) => {
    let inputObject = {};
    const unitValue = inputUnit;
    const sizeValue = inputSize;
    inputObject[unitValue] = sizeValue;
    setSpecRows([...specRows, inputObject]);
  };

  // Main fields change event handler
  const eventHandlerMainFields = (e) => {
    e.preventDefault();

    const newProduct = {
      name: e.target.prodName.value,
      price: e.target.prodPrice.value,
      stock: e.target.prodBalance.value,
      sale: e.target.prodSale.value,
      image: e.target.prodImageUrl.value,
      description: e.target.addProdDescription.value,
      category: e.target.prodCategory.value,
      spec: specRows,
    };

    console.log(
      "Handle Event Function Submit!!!!! Object uusgesenii daraa newProduct ==> ",
      newProduct
    );

    try {
      axios.post(`http://localhost:3008/product/`, newProduct).then((res) => {
        if (res) {
          console.log("Response: ", res.status);
        }
        console.log("POST added new Product ...", newProduct);
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
    console.log(
      `Before RUN ===> unit => ${specRows.unitValue}; size => ${specRows.sizeValue}`
    );
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
                </div>

                <span className="addProduct-specSubTitle">ҮЗҮҮЛЭЛТҮҮД</span>

                {specRows !== "" && specRows !== null
                  ? specRows.map((spec) => {
                      return (
                        <div className="addProductSpecificList">
                          <label>{Object.keys(spec)} : </label>
                          <input defaultValue={Object.values(spec)} />
                        </div>
                      );
                    })
                  : null}

                <div className="addProduct-inputGroupRowSpec">
                  <div className="addProduct-inputField">
                    <label>Хэмжих нэгж</label>
                    <input
                      type="text"
                      name="unitValue"
                      placeholder="Хэмжих нэгж оруулна"
                      onChange={(e) => setInputUnit(e.target.value)}
                    />
                  </div>
                  <div className="addProduct-inputField">
                    <label>Хэмжих утга</label>
                    <input
                      type="text"
                      name="sizeValue"
                      placeholder="Хэмжих утга оруулна"
                      onChange={(e) => setInputSize(e.target.value)}
                    />
                  </div>
                  <div className="addProd-AddRemoveBtnGroup">
                    <button
                      name="addProductSpecificConfirm"
                      type="button"
                      onClick={(e) => addProductSpecificSave(e)}
                    >
                      Нэмэх
                    </button>
                  </div>
                </div>
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
