import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const Login = () => (
  <section className="bg-gray-50 min-h-screen flex items-center justify-center">
    {/* login container */}
    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 items-center">
      {/* form */}
      <div className="md:w-1/2 px-8 md:px-16">
        <h2 className="font-bold text-2xl text-primary">Login</h2>
        <p className="text-xs mt-4 text-primary">
          If you are already a member, easily log in
        </p>
        <form action className="flex flex-col gap-4">
          <input
            className="p-2 mt-8 rounded-xl border"
            type="email"
            name="email"
            placeholder="Email"
          />
          <div className="relative">
            <input
              className="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Password"
            />
            <AiOutlineEye className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" />
            {/* <AiOutlineEyeInvisible className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"></AiOutlineEyeInvisible> */}
          </div>
          <button
            type="button"
            className="bg-primary rounded-xl text-white py-2 hover:scale-105 duration-300"
          >
            Login
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
          Login with Google
        </button>
        <div className="mt-5 text-xs border-b border-primary py-4 text-primary">
          <a href="/">Forgot your password?</a>
        </div>
        <div className="mt-3 text-xs flex justify-between items-center text-primary">
          <p>Don't have an account?</p>
          <Link
            to="/signup"
            type="button"
            className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
          >
            Register
          </Link>
        </div>
      </div>
      {/* image */}
      <div className="md:block hidden w-1/2">
        <img
          className="rounded-2xl"
          src="https://res.cloudinary.com/dwmd1yjww/image/upload/v1663515635/pexels-cottonbro-4629633_sir6nn.jpg"
          alt="social media"
        />
      </div>
    </div>
  </section>
);
