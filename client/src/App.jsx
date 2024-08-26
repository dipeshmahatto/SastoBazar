import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BannerPage from "./pages/banner/BannerPage";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./components/topHeader/TopHeader";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <BannerPage />
      <Footer />
    </>
  );
}

export default App;
