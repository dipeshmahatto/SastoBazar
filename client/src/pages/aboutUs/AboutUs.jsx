import React from "react";
import CommonPages from "../commonPages/CommonPages";
import AboutUsImg from "../../assets/image/about.png";
import MoreAbout from "./MoreAbout";


const AboutUs = () => {
  return (
    <>
      <CommonPages
        title="About"
        subTitle="SastoBazar"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                fuga cum optio qui eos doloremque sed perspiciatis fugit nemo
                magni?"
        desc1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                fuga cum optio qui eos doloremque sed perspiciatis fugit nemo
                magni?"
        btnAbout="Learn More"
        visit="/more-info"
        imgAbout={AboutUsImg}
      />
      <MoreAbout />
    </>
  );
};

export default AboutUs;
