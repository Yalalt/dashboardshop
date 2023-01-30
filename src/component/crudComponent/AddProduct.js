const { useState } = require("react");

const AddProduct = () => {
  let [productSpecRows, setAddProductSpecRows] = useState([]);

  let [specRows, setSpecRows] = useState(1);
  let [rowsDisplay, setRowsDisplay] = useState([]);

  const addRow = () => {
    setSpecRows(specRows + 1);
  };

  const addSpecificationDisplay = () => {
    addRow();
    setRowsDisplay.push(
      <div key={specRows} className="addProduct-inputGroupRow">
        <div className="addProduct-inputField">
          <label for={`addProductUnitLabel${specRows}`}>Хэмжих нэгж</label>
          <input
            type="text"
            name={`addProductUnitValue${specRows}`}
            placeholder="Хэмжих нэгж оруулна"
          />
        </div>
        <div className="addProduct-inputField">
          <label for={`addProductSizeLabel${specRows}`}>Хэмжих утга</label>
          <input
            type="text"
            name={`addProductSizeValue${specRows}`}
            placeholder="Хэмжих утга оруулна"
          />
        </div>
      </div>
    );
  };

  const allSpecificationDisplay = () => {
    return rowsDisplay;
  }

  const oneSpecificationDisplay = () => {
    return (<div key={specRows} className="addProduct-inputGroupRow">
    <div className="addProduct-inputField">
      <label for={`addProductUnitLabel${specRows}`}>Хэмжих нэгж</label>
      <input
        type="text"
        name={`addProductUnitValue${specRows}`}
        placeholder="Хэмжих нэгж оруулна"
      />
    </div>
    <div className="addProduct-inputField">
      <label for={`addProductSizeLabel${specRows}`}>Хэмжих утга</label>
      <input
        type="text"
        name={`addProductSizeValue${specRows}`}
        placeholder="Хэмжих утга оруулна"
      />
    </div>
  </div>);
  }

  const displaySpecificRows = () => {
    if (specRows > 1) {
      allSpecificationDisplay();
    } else {
      oneSpecificationDisplay();
    }
  }

  // Main fields change event handler
  const eventHandlerMainFields = () => {

  }

  // Specification fields change event handler
  const eventHandlerSpecificationFields = () => {

  }

  return (
    <div>
      <p>Бүтээгдэхүүн нэмэх</p>
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

        {/* Heden specs rows bgaag aruulah heseg */}
        <
        {displaySpecificRows}
        <input type="button">
          Үзүүлэлт нэмэх
        </input>
      </div>
    </div>
  );
};
export default AddProduct;