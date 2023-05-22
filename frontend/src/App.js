// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @page
import HomePage from "./Modules/Home";
import ProductPage from "./Modules/Product/";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
