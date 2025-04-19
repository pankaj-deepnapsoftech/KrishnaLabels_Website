import React from "react";
import Header from "../page/Header";
import Footer from "../page/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div >
      <div className=" flex w-[100%] ">
        <Header />
        <Outlet />
      </div>
      <Footer />                         
    </div>
  );
};

export default AdminLayout;
