import React from "react";
import PageNotFoundImg from "../../assets/image/pagenotfound.png";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen font-poppins">
        <img src={PageNotFoundImg} alt="not foundImg" className="max-w-full" />
        <NavLink
          to="/"
          className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-sm no-underline mt-4"
        >
          Back to home
        </NavLink>
      </div>
    </>
  );
};

export default PageNotFound;