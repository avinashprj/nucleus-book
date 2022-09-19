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
        <form action className="flex flex-col gap-4">
          <input
            className="p-2 mt-8 rounded-xl border"
            type="text"
            name="text"
            placeholder="Full Name"
          />
          <input
            className="p-2  rounded-xl border"
            type="email"
            name="email"
            placeholder="Email"
          />
          <div className="relative">
            <input
              className="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="relative">
            <input
              className="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Confirm Password"
            />
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
            to="/"
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
