import React from "react";

import style from "../styles/sidemenu.module.css";

const SideMenu = () => {
  return (
    <div className={style.mainBg}>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Specials</li>
        <li>Category</li>
        <li>About</li>
      </ul>
    </div>
  );
};
export default SideMenu;
