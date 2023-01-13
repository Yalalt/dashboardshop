import React from "react";

import style from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={style.mainBg}>
      <nav className={style.headerItems}>
        <div>Logo</div>
        <input type="text" name="searchBar" />
        <button type="button" name="loginBtn">
          Login
        </button>
      </nav>
    </div>
  );
};
export default Header;
