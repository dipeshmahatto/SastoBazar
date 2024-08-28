import React from "react";
import { NavLink } from "react-router-dom";

const Support = () => {
  return (
    <>
      <div className="font-poppins max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md my-2">
        <h2 className="text-2xl font-semibold mb-2 text-center">Contact Us</h2>
        <form className="my-3">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium tex-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name "
              className="mt-1 px-4 py-3 text-sm border border-gray-300 rounded-md w-full outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium tex-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your valid email"
              className="mt-1 px-4 py-3 border text-sm border-gray-300 rounded-md w-full outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="question"
              className="block text-sm font-medium tex-gray-700"
            >
              What is your question ?
            </label>
            <input
              type="text"
              id="question"
              name="question"
              placeholder="Enter your question"
              className="mt-1 px-4 py-3 border text-sm border-gray-300 rounded-md w-full outline-none"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-600 text-white rounded-md hover:bg-orange-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Support;
