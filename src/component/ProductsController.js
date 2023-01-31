import { useState, useEffect } from "react";
import axios from "axios";
import Products from "./subComponent/Products";


const api = axios.create({
  baseURL: "http://localhost:3008",
});

const ProductsController = () => {
  let [products, setProducts] = useState([]);
  let [singleProduct, setSingleProduct] = useState(null);

  const getAllProductHandler = async () => {
    const tempProducts = await api
      .get("/products")
      .then((res) => res.data)
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        setProducts(tempProducts);
        console.log("in products api --> ", tempProducts);
      })
  };

  console.log("Products awsanii ==> ", products);



  const deleteProductHandler = (pid) => {
    console.log("Delete request dotor: ", pid);
    api.delete(`/product/${pid}`).catch((error) => {
      console.log("Delete Axios ==> ", error);
    });
    console.log(`Delete dotor: api/product/${pid}`);
  };

  useEffect(() => {
    getAllProductHandler();
  }, []);

  return (
    <div>
      {
        <Products
          lists={products}
        />
      }
    </div>
  );
};
export default ProductsController;
