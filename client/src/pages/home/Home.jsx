import React from "react";
import BannerPage from "../banner/BannerPage";
import Products from "../product/Products";

const Home = () => {
  return <>
  <div className="bannerpage">
    <BannerPage/>
  </div>
  <div>
    <Products/>
  </div>
  </>;
};

export default Home;