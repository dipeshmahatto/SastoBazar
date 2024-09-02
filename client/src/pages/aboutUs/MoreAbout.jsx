import React, { useState } from "react";

import AboutUsImg from "../../assets/image/about.png";
import DetailsInfo from "../detailsInfo/DetailsInfo";
const MoreAbout = () => {
  const [showMore, setShowMore] = useState(false);

  const handleshow = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="font-poppins px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={AboutUsImg}
              alt=""
              className="w-full h-full max-w-md object-contain animate-moveUpDown"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl">
              <span className="mr-2">Learn</span>
              <span className="text-orange-600">Our Story</span>
            </h2>
            <p className="mb-4 text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              aperiam quia voluptates labore esse quaerat tempore quae quod
              illum assumenda quibusdam earum sequi pariatur id, dolor rerum
              sunt aliquid. Nihil.
            </p>
            <>
              <p className="mb-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eligendi illum quos possimus non. Distinctio iste
                dicta perferendis error, alias accusamus consectetur doloremque
                sunt totam fuga natus, voluptate facere ipsam!
              </p>
            </>

            <button
              className="inline-block py-3 px-4 text-white bg-orange-500 hover:bg-orange-600  rounded-lg no-underline"
              onClick={handleshow}
            >
              About Our Company
            </button>
          </div>
        </div>
        {showMore ? <DetailsInfo /> :""}
      </div>
    </>
  );
};

export default MoreAbout;
