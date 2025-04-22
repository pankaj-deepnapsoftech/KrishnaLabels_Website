import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WebLayout from "./WebLayout"
import Home from '../components/Home'
import Contact from '../components/Contact'
import AboutUs from '../components/AboutUs'
import BlogHome from '../components/Blog'
import AllReviews from '../components/AllReviews'
import BookDemo from '../components/BookDemo'
import OurProduct from '../components/OurProduct'


const AppRoute = () => {
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
        </Routes>
    )
}

export default AppRoute