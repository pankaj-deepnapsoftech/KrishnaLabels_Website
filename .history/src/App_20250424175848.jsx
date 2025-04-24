import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoute from './Routes/AppRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>

      <AppRoute />
      <ToastContainer />
    </>
  );
}

export default App;
