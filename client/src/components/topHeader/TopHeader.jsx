import React from "react";
import { FaViber } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
  return (
    <>
      <div className="font-poppins pt-1 border-b p-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaViber className="text-blue-500" />

          <NavLink to="/sastobazar-support" className="text-sm text-gray-700">
            Customer Support
          </NavLink>
        </div>
        <div className="flex items-center space-x-2">
          <NavLink
            to="/sastobazar-login"
            className="py-1 px-2 text-sm text-seconds"
          >
            Login
          </NavLink>
          <span className="text-sm text-gray-700">/</span>
          <NavLink
            to="/sastobazar-Register"
            className="py-1 px-2 text-sm text-seconds"
          >
            Register
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
