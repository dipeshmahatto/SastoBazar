import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./components/topHeader/TopHeader";
import Home from "./pages/home/Home";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import Support from "./pages/user/support/Support";
import Cart from "./pages/user/cart/Cart";

function App() {
  return (
    <>
      <Router>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sastobazar-login" element={<Login />} />
          <Route path="/sastobazar-register" element={<Register />} />
          <Route path="/sastobazar-support" element={<Support />} />
          <Route path="/sastobazar-cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
