import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoute = () => {
    return (
        <Routes>
            <Route element={<WebLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/about" element={<AboutUs />} />
            </Route>
        </Routes>
    )
}

export default AppRoute