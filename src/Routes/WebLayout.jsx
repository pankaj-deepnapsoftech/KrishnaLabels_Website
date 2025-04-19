import React from 'react'
import NavBar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const WebLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default WebLayout