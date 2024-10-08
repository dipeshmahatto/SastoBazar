import React from "react";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <>
      <div>
        <div className="font-poppins max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md my-2">
          <h2 className="text-2xl font-semibold mb-2 text-center">Register</h2>
          <form className="my-3">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium tex-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your valid email"
                className="mt-1 px-4 py-3 text-sm border border-gray-300 rounded-md w-full outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium tex-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your valid Password"
                className="mt-1 px-4 py-3 border text-sm border-gray-300 rounded-md w-full outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmpassword"
                className="block text-sm font-medium tex-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Confirm Password"
                className="mt-1 px-4 py-3 border text-sm border-gray-300 rounded-md w-full outline-none"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              >
                Register
              </button>
            </div>
            <span className="my-2 flex justify-center items-center text-center gap-2">
              Don't have an account ?
              <NavLink
                to="/sastobazar-login"
                className="text-orange-600 hover:text-blue-700"
              >
                Login
              </NavLink>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
