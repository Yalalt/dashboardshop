import axios from "axios";
import { useState } from "react";
import Products from "./Products";

const displayNumberProducts = 5;

const ProductsController = () => {
  const [totalNumberProducts, setTotalNumberProducts] = useState();
  const [currentNumber, setCurrentNumber] = useState();

  axios.get("http://localhost:3008/products/sum", (req, res) => {
    if (res.data.productsCount) {
      setTotalNumberProducts(res.data.productsCount);
    } else {
      console.log("Aldaa garlaa");
    }
  });

  const totalPageCount = Math.ceil(totalNumberProducts / displayNumberProducts);
  

  

  return (
    <div>
      <Routes>
        <Route
          path="/page/:id"
          element={<Products setCurrentNumber={setCurrentNumber} />}
        />
      </Routes>
      <Pagination
        currentPage={currentNumber}
        setCurrentNumber={setCurrentNumber}
      />
    </div>
  );
};
export default ProductsController;
