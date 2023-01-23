import Header from "./component/Header/Header";
import Sidebar from "../../component/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";

import style from "./main.module.css";

function Main() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
