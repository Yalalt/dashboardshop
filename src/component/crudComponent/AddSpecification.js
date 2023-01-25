import { useState } from "react";

const AddSpecification = () => {
  let [selectedValue, setSelect] = useState("");

  return (

    // Songogdson vzvvleltees oruulah bolomjtoi bolgoh

    <div>
      <p>Үзүүлэлт нэмэх</p>
      <div className="addProduct-inputGroupRow">
        <div className="addProduct-inputField">
          <label>Тодорхойлох нэр</label>
          <input type="text" name="addSpecLabel" placeholder="" />
        </div>
        <div className="addProduct-inputField">
          <label>Үзүүлэлтээ оруулна уу</label>
          <input type="text" name="prodSpec" placeholder="Үзүүлэлт" />
        </div>
      </div>
      <button type="button">Нэмэх</button>
      <button type="button">Болих</button>
    </div>
  );
};
export default AddSpecification;
