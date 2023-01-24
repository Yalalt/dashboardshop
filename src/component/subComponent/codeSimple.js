import React, { useEffect, useState } from "react";
import "../../style/controlpanel.css";
import api from "../../api/Connection";
import productsData from "../../utils/db/db.json";

const ControlPanel = () => {
  let [products, setProducts] = useState[['']];

  const retrieveProducts = async () => {
    const responseData = await api.get("/products");
    return responseData.data;
  };

  const addProductHandler = async (product) => {
    console.log(product);

    const request = {
      id: "123456789",
      ...product
    }

    const response = await api.post("/products", request)
    console.log(response);
    setProducts([...products, response.data]);
  };

  const removeProductHandler = async (id) => {

    await api.delete(`/products/${id}`);

    const newProductList = products.filter((product) => {
      return product.pid !== id;
    });

    setProducts(newProductList);
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await retrieveProducts();
      if (allProducts) setProducts(allProducts);
    };

    getAllProducts();
  }, []);

  useEffect(() => {

  })

  return (
    <div className="controlPanel-bgColor">
      <p>ControlPanel page</p>
    </div>
  );
};
export default ControlPanel;
