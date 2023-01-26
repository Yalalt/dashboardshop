import React from "react";
import { NavLink, Outlet, Routes, Route } from "react-router-dom";

import "../style/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-menubar">
        <ul className="sidebar-navbar">
          <li>
            <NavLink to="controlpanel">Хянах самбар</NavLink>
          </li>
          <li>
            <NavLink to="products">Бүтээгдэхүүнүүд</NavLink>
          </li>
          <li>
            <NavLink to="orders">Захиалгууд</NavLink>
          </li>
          <li>
            <NavLink to="users">Хэрэглэгчид</NavLink>
          </li>
          <li>
            <NavLink to="moderator">Модератор</NavLink>
          </li>
          <li>
            <NavLink to="settings">Тохиргоо</NavLink>
          </li>
        </ul>
      </div>
      <main className="sidebar-mainBox">
        <Outlet />
      </main>
    </div>
  );
};
export default Sidebar;
