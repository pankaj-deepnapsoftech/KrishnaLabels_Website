import React from "react";
import Header from "../page/Header";
import Footer from "../page/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className=" w-full h-[100%] " >
      <div className=" flex gap-1.5  w-[100%] h-[95vh] ">
        <Header />
        <Outlet />
      </div>
      <Footer />                         
    </div>
  );
};

export default AdminLayout;
