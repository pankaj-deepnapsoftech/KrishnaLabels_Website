import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import HomePage from './components/Home';
import BlogHome from './components/Blog';
import AboutUs from "./components/AboutUs";
import ReviewPanel from './components/ReviewPanel';


function App() {
  return (
    <Router>
      <NavBar />
      <ReviewPanel />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
