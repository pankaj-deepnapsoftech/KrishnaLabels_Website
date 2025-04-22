import React from "react";
import { Route, Routes } from "react-router-dom";
import WebLayout from "./WebLayout";
import Home from "../components/Home";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import BlogHome from "../components/Blog";
import AdminLayout from "./AdminLayout";
import Dashboard from "../page/Dashboard";
import Leets from "../page/Leets";
import Contect2 from "../page/ContectData";
import ProductTable from "../page/ProductTable";
import CreateProduct from "../page/CreateProduct";

const AppRoute = () => {
    return (
        <Routes>
            <Route element={<WebLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/about" element={<AboutUs />} />
            </Route>
            <Route element={<AdminLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leets" element={<Leets/>} />
                <Route path="/contect" element={<Contect2/>} />
                <Route path="/createproduct" element={<CreateProduct/>} />
                <Route path="/producttable" element={<ProductTable/>} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
