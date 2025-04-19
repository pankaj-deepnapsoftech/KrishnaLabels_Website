import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WebLayout from "./WebLayout"
import Home from '../components/Home'
import Contact from '../components/Contact'
import AboutUs from '../components/AboutUs'
import BlogHome from '../components/Blog'


const AppRoute = () => {
    return (
        <Routes>
            <Route element={<WebLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/about" element={<AboutUs />} />
            </Route>
        </Routes>
    )
}

export default AppRoute