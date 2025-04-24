import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoute from './Routes/AppRoute';

function App() {
  return (
    <>

      <AppRoute />
      <ToastContainer />
    </>
  );
}

export default App;
