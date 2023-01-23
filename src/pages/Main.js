import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import NoMatch from "../component/NoMatch";
import Main from "../pages/Main";
import Products from "../"
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
