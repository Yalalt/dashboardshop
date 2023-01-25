import AddSpecification from "./AddSpecification";

const AddProduct = () => {
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
        <AddSpecification />
        <input type="button">Үзүүлэлт нэмэх</input>

      </div>
    </div>
  );
};
