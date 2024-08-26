import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FirstBanner from "../../assets/image/1.jpg";
import SecondBanner from "../../assets/image/2.jpg";
import ThirdBanner from "../../assets/image/3.jpg";
import FourthBanner from "../../assets/image/4.jpg";
import { items } from "./BannerData";

const BannerPage = () => {
  return (
    <>
      <Carousel indicators={false}>
        {items.map((value, index) => (
          <Carousel.Item>
            <img src={value.image} alt={value.title} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default BannerPage;
