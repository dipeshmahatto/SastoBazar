import React from "react";
import Logo from "../../assets/image/loggo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-evenly py-12 mt-8">
        <footer className="font-poppins flex flex-col container w-full">
          <div className="flex justify-between">
            <div className="max-w-md">
              <img
                src={Logo}
                alt="SastoBazar"
                className="h-full max-h-12 w-56 pr-2 mb-7"
              />
              <p className="text-gray-800 text-base">
                <h2 className="text-gray-900 font-medium my-3">
                  SastoBazar - Your Affordable Online Shopping Destination
                  Explore{" "}
                </h2>
                "Quality products at unbeatable prices with secure payments,
                fast delivery, and exceptional service."
              </p>
              <div className="flex gap-8 mt-4">
                <a href="" className="text-cyan-500 duration-300">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com" className="text-blue-600 duration-300">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="" className="text-rose-600 duration-300">
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="flex gap-16">
              <div>
                <span className="uppercase text-gray-400 font-medium text-base tracking-wider">
                  Company
                </span>
                <ul className="mt-2 p-0 m-0 text-gray-800">
                  <li className="flex">
                    <NavLink 
                      to="/about-us-details"
                      className="no-underline text-gray-800 py-2 hover:text-orange-600 duration-300 ease-in-out"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 py-2 hover:text-orange-600 duration-300 ease-in-out"
                    >
                      Features
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 py-2 hover:text-orange-600 duration-300 ease-in-out"
                    >
                      Shop
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 py-2 hover:text-orange-600 duration-300 ease-in-out"
                    >
                      Download App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <span className="uppercase text-gray-400 font-medium text-base tracking-wider">
                  Help
                </span>
                <ul className="mt-2 p-0 m-0 text-gray-800">
                  <li className="flex">
                    <NavLink
                      to="/sastobazar-support"
                      className="no-underline text-gray-800 py-2 hover:text-orange-600 duration-300 ease-in-out"
                    >
                      Customer Support
                    </NavLink>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 py-2 hover:text-orange-600 duration-300 ease-in-out"
                    >
                      Delivery Details
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 py-2 hover:text-orange-600 duration-300 ease-in-out"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 py-2 hover:text-orange-600 duration-300 ease-in-out"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <span className="uppercase text-gray-400 font-medium text-base tracking-wider">
                  Subscribe to our newsletter
                </span>

                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-gray border border-gray-300 py-3 px-2 pr-8 text-base focus:outline-none rounded w-96 mt-3 block"
                />
                <button className="bg-orange-600 text-white py-3 px-4 rounded mt-2 hover:bg-orange-500 ease-in-out duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <hr className="mt-12 text-gray-400" />
          <div className="text-center mt-8 text-gray-500">
            &copy; Copyright 2024, All rights reserved by SastoBazar
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
