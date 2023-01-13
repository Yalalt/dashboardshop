import Header from "./component/Header";
import SideMenu from "./component/SideMenu";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";

import style from "./app.module.css";

function App() {
  return (
    <div>
      <Header className={style.headerBg} />
      <div className={style.contFlex}>
        <SideMenu className={style.sideMenuBg} />
        <Routes className={style.mainBodyBg}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
