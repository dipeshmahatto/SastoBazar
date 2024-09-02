import React from "react";
import CommonPages from "../commonPages/CommonPages";
import LearnMoreImg from "../../assets/image/logo.png";

const LearnMore = () => {
  return (
    <>
      <CommonPages
        title="Information"
        subTitle="MoreOver"
        desc=" Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                fuga cum optio qui eos doloremque sed perspiciatis fugit nemo
                magni?"
        desc1=" ByeLorem ipsum dolor sit amet consectetur adipisicing elit. Non
                fuga cum optio qui eos doloremque sed perspiciatis fugit nemo
                magni?"
        btnAbout="Expoler our services"
        visit="/more-info"
        imgAbout={LearnMoreImg}
      />
      
    </>
  );
};

export default LearnMore;
