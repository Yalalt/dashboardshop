import React from "react";

import style from "../sidemenu.module.css";

const SideMenu = () => {
  return (
    <div className={style.mainBg}>
      <ul>
        <li>Хянах самбар</li>
        <li>Бүтээгдэхүүнүүд</li>
        <li>Захиалгууд</li>
        <li>Хэрэглэгчид</li>
        <li>Модератор</li>
        <li>Тохиргоо</li>
      </ul>
    </div>
  );
};
export default SideMenu;
