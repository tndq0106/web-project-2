// import logo from './logo.svg';
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @page
import HomePage from "./Modules/Home";
import ProductPage from "./Modules/Product/";
import LoginPage from "./Modules/Authenticate/Login";
import RegisterPage from "./Modules/Authenticate/Register";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
