import React from "react";

import "../style/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-navbar">
        <nav className="headerItems-d">
          <div>Logo</div>
          <input type="text" name="searchBar" />
          <div className="header-loginGroup">
            <button type="button" name="loginBtn">
              нэвтрэх
            </button>
            <button type="button" name="loginBtn">
              Гарах
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
