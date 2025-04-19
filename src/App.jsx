import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/Navbar';
// import Footer from './components/Footer';
// import Contact from './components/Contact';
// import HomePage from './components/Home';
// import BlogHome from './components/Blog';
// import AboutUs from "./components/AboutUs";
// import ReviewPanel from './components/ReviewPanel';
import AppRoute from './Routes/AppRoute';


function App() {
  return (
    <Router>
      <AppRoute/>
    </Router>
  );
}

export default App;
