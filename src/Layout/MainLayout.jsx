import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className=" max-w-6xl mx-auto">
      <Navbar></Navbar>
      <div className="py-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
