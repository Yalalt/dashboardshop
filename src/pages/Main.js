import NoMatch from "../component/NoMatch";
import Products from "../component/subComponent/Products";
import Orders from "../component/subComponent/Orders";
import Users from "../component/subComponent/Users";
import Moderator from "../component/subComponent/Moderator";
import Settings from "../component/subComponent/Settings";
import ControlPanel from "../component/subComponent/ControlPanel";

import { Routes, Route } from "react-router-dom";
import HeaderLayout from "../component/HeaderLayout";
import AddProduct from "../component/subComponent/AddProduct";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="controlpanel" element={<ControlPanel />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="moderator" element={<Moderator />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
