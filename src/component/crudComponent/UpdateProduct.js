import { useState } from "react";

const UpdateProduct = () => {
  return (
    <div>
      <p>Бүтээгдэхүүн засварлах</p>
      <div className="addProductForm">
        <div className="addProduct-inputGroupRow">
          <div className="addProduct-inputField">
            <label for="prodName">Барааны нэр</label>
            <input type="text" name="prodName" placeholder="Барааны нэр" />
          </div>
          <div className="addProduct-inputField">
            <label for="prodPrice">Барааны үнэ</label>
            <input type="text" name="prodPrice" placeholder="Барааны үнэ" />
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

        <span>ҮЗҮҮЛЭЛТҮҮД</span>

        <div className="addProduct-inputGroupRow">
          <div className="addProduct-inputField">
            <label for="labelAddProduct1">Хэмжих нэгж</label>
            <input
              type="text"
              name="labelAddProduct1"
              placeholder="Хэмжих нэгж оруулна"
            />
          </div>
          <div className="addProduct-inputField">
            <label for="valueAddProduct1">Хэмжих утга</label>
            <input
              type="text"
              name="valueAddProduct1"
              placeholder="Хэмжих утга оруулна"
            />
          </div>
        </div>

        <input type="button" onClick={addSpecification}>
          Үзүүлэлт нэмэх
        </input>
      </div>
    </div>
  );
};
export default UpdateProduct;
