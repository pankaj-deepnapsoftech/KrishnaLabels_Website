import React from 'react'
import NavBar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ReviewPanel from "../components/ReviewPanel";

const WebLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
      <ReviewPanel />
    </div>
  )
}

export default WebLayout