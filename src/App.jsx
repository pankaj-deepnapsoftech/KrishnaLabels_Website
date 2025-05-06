import React from 'react';
import AppRoute from './Routes/AppRoute';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <>
      <ScrollToTop/>
      <AppRoute />
      <ToastContainer />
    </>
  );
}

export default App;
