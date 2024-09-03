import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [LoginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    let { name, value } = e.target;
    setLoginValue({ ...LoginValue, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LoginValue),
      };
      const res = await fetch(`https://httpbin.org/post`, config);
      if (res.ok) {
        toast.success("Login successfully");
      } else {
        toast.error("Invalid Login", res.statusText);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to Connect");
    }
  };

  return (
    <>
      <div className="font-poppins max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md my-2">
        <h2 className="text-2xl font-semibold mb-2">Login</h2>
        <span className="text-base">Please Enter Your Valid Credentials</span>
        <form onSubmit={handleSubmit} className="my-3">
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
              value={LoginValue.email}
              placeholder="Enter your valid email"
              className="mt-1 px-4 py-3 text-sm border border-gray-300 rounded-md w-full outline-none"
              onChange={handleChange}
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
              value={LoginValue.password}
              name="password"
              placeholder="Enter your valid Password"
              className="mt-1 px-4 py-3 border text-sm border-gray-300 rounded-md w-full outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-600 text-white rounded-md hover:bg-orange-700"
            >
              Login
            </button>
          </div>
          <span className="my-2 flex justify-center items-center text-center gap-2">
            Don't have an account ?
            <NavLink
              to="/sastobazar-register"
              className="text-orange-600 hover:text-blue-700"
            >
              Register
            </NavLink>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
