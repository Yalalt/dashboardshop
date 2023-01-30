import { useState, useEffect } from "react";
import axios from "axios";
import Products from "./subComponent/Products";


const api = axios.create({
  baseURL: "http://localhost:3008",
});

const ProductsController = () => {
  let [products, setProducts] = useState([]);
  let [singleProduct, setSingleProduct] = useState(null);

  const getAllProductHandler = () => {
    api
      .get("/products")
      .then((res) => {
        console.log("in products api --> ", res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log("Products awsanii ==> ", products);

  const getSingleProductHandler = (id) => {
    api
      .get(`/product/${id}`)
      .then((response) => setSingleProduct(response.data))
      .catch((error) => {
        console.log("Single Product aldaa garlaa ==> ", error.message);
      });
  };

  const addProductHandler = (product) => {
    api.post(`/product/add`, product).catch((error) => {
      console.log("Error Add Product axios ==> ", error);
    });
  };

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
