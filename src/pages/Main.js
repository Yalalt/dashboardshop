import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import NoMatch from "../component/NoMatch";
import Products from "../component/subComponent/Products";
import Orders from "../component/subComponent/Orders";
import Users from "../component/subComponent/Users";
import Moderator from "../component/subComponent/Moderator";
import Settings from "../component/subComponent/Settings";

import { Routes, Route } from "react-router-dom";
import ControlPanel from "../component/subComponent/ControlPanel";

function Main() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <Routes>
          <Route path="/controlpanel" element={<ControlPanel />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/moderator" element={<Moderator />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
