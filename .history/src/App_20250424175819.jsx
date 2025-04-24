import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoute from './Routes/AppRoute';

function App() {
  return (
    <>
    <Router>
      <AppRoute/>
    </Router>
    </>
  );
}

export default App;
