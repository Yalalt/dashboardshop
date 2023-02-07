import NoMatch from "../component/NoMatch";
import Products from "../component/subComponent/Products";
import Orders from "../component/subComponent/Orders";
import Users from "../component/subComponent/Users";
import Moderator from "../component/subComponent/Moderator";
import Settings from "../component/subComponent/Settings";
import ControlPanel from "../component/subComponent/ControlPanel";
import HeaderLayout from "../component/HeaderLayout";

import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { clippingParents } from "@popperjs/core";

export const ProductsContext = createContext();

function Main() {
  const [products1, setProducts1] = useState();


  useEffect(()=>{
    axios.get("http://localhost:3008/products").then(res => {
         if (res.status === 200) {
      console.log("Success");
      console.log("++++ Data ", res.data);
      setProducts1(res.data);
    } else {
      console.log("Not successful");
    }
    })
  }, [])

  return (
    <div>
      <ProductsContext.Provider value={{products1, setProducts1}}>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route path="controlpanel" element={<ControlPanel />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="moderator" element={<Moderator />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ProductsContext.Provider>
    </div>
  );
}

export default Main;
