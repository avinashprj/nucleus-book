import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const Signup = () => (
  <section className="bg-gray-50 min-h-screen flex items-center justify-center">
    {/* login container */}
    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 items-center">
      {/* Image */}
      <div className="md:block hidden w-1/2">
        <img
          className="rounded-2xl"
          src="https://res.cloudinary.com/dwmd1yjww/image/upload/v1663515628/pexels-linda-ellershein-3127880_hc2fqx.jpg"
          alt="signup"
        />
      </div>
      {/* form */}

      <div className="md:w-1/2 px-8 md:px-16">
        <h2 className="font-bold text-2xl text-primary">Signup</h2>
        <p className="text-xs mt-4 text-primary">
          If you are already a member, easily log in
        </p>
        <form action className="flex flex-col gap-2">
          <div className="flex flex-col mt-4">
            <label
              htmlFor="name"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              First Name
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="First Name"
                // value=""
                className="text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2  border-red-500"
              />
            </div>
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              Invalid first Name field !
            </span>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              Last Name
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Last Name"
                // value=""
                className="text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2  border-red-500"
              />
            </div>
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              Invalid Last Name field !
            </span>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              Email
            </label>
            <div className="relative">
              <input
                id="name"
                name="email"
                type="email"
                placeholder="Email"
                // value=""
                className="text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2  border-red-500"
              />
            </div>
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              Invalid Email address!
            </span>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              Username
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="User Name"
                // value=""
                className="text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2  border-red-500"
              />
            </div>
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              Invalid User Name field !
            </span>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                // value=""
                className="text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2  border-red-500"
              />
            </div>
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              Invalid password field !
            </span>
          </div>
          <button
            type="button"
            className="bg-primary rounded-xl text-white py-2 hover:scale-105 duration-300"
          >
            Signup
          </button>
        </form>
        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
        </div>
        <button
          type="button"
          className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-primary"
        >
          <FcGoogle className="mr-3 text-[1.25rem]" />
          Signup with Google
        </button>
        <div className="mt-3 text-xs flex justify-between items-center text-primary">
          <p>Already have an account?</p>
          <Link
            to="/login"
            type="button"
            className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  </section>
);
