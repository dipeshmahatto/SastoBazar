import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./components/topHeader/TopHeader";
import Home from "./pages/home/Home";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import Support from "./pages/user/support/Support";
import Cart from "./pages/user/cart/Cart";
import PageNotFound from "./pages/notfound/pagenotfound";
import AboutUs from "./pages/aboutUs/AboutUs";
import LearnMore from "./pages/learnmore/LearnMore";
import Productview from "./pages/product/productview/productview";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchedData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchedData();
  }, []);
  return (
    <>
      <Router>
        <ToastContainer />
        <TopHeader title="SastoBazar Rewards" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sastobazar-login" element={<Login />} />
          <Route path="/sastobazar-register" element={<Register />} />
          <Route path="/sastobazar-support" element={<Support />} />
          <Route path="/sastobazar-cart" element={<Cart />} />
          <Route path="/about-us-details" element={<AboutUs />} />
          <Route path="/more-info" element={<LearnMore />} />
          <Route path="/product-view/:id" element={<Productview isLoading={isLoading} products={products} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
