import React from "react";
import Header from "../page/Header";
import Footer from "../page/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className=" w-full " >
      <div className=" flex gap-1 bg-[#696969] w-[100%] h-[92vh] ">
        <Header />
        <Outlet />
      </div>
      <Footer />                         
    </div>
  );
};

export default AdminLayout;
