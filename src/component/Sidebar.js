import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "../style/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-menubar">
        <ul className="sidebar-navbar">
          <NavLink to="controlpanel">
            <li>Хянах самбар</li>
          </NavLink>
          <NavLink to="products">
            <li>Бүтээгдэхүүнүүд</li>
          </NavLink>
          <NavLink to="orders">
            <li>Захиалгууд</li>
          </NavLink>
          <NavLink to="users">
            <li>Хэрэглэгчид</li>
          </NavLink>
          <NavLink to="moderator">
            <li>Модератор</li>
          </NavLink>
          <NavLink to="settings">
            <li>Тохиргоо</li>
          </NavLink>
        </ul>
      </div>
      <main className="sidebar-mainBox">
        <Outlet />
      </main>
    </div>
  );
};
export default Sidebar;
