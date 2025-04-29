import React from "react";
import { Route, Routes,Navigate  } from "react-router-dom";
import WebLayout from "./WebLayout";
import Home from "../components/Home";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import BlogHome from "../components/Blog";
import AdminLayout from "./AdminLayout";
import Dashboard from "../page/Dashboard";
import Leets from "../page/Leads";
import ProductTable from "../page/ProductTable";
import CreateProduct from "../page/CreateProduct";
import AllReviews from "../components/AllReviews";
import BookDemo from "../components/BookDemo";
import OurProduct from "../components/OurProduct";
import LoginPage from "../components/Login";
import AdminContact from "../page/ContactData";
import NotFound from "../components/PageNotFound";
import {useAuthContext} from "../context/authContext/authContext"

const AppRoute = () => {

    const {user} = useAuthContext()

    return (
        <Routes>
            <Route element={<WebLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/allReviews" element={<AllReviews />}/>
                <Route path="/bookDemo" element={<BookDemo/>}/>
                <Route path="/products" element={<OurProduct/>}/>
            </Route>
               <Route path="/login" element={<LoginPage/>}/> 
            {user  && <Route element={<AdminLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leets" element={<Leets/>} />
                <Route path="/admincontact" element={<AdminContact/>} />
                <Route path="/createproduct" element={<CreateProduct/>} />
                <Route path="/producttable" element={<ProductTable/>} />
            </Route> }
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoute;
