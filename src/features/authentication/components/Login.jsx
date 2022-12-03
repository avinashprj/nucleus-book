import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../authenticationSlice";
import { useSignupHandler } from "../hooks/useSignupHandler";

export const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [errorData, setErrorData] = useState({ username: "", password: "" });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.authentication);
  const location = useLocation();
  useEffect(() => {
    authToken &&
      navigate(location?.state?.from?.pathname || "/", { replace: true });
  }, [authToken]);

  // console.log(loginData, errorData);

  const validateUsername = () => {
    if (!new RegExp("^[a-z0-9_.]+$").test(loginData.username)) {
      setErrorData((state) => ({
        ...state,
        username: "Username can contain letters, digits, _ and .",
      }));
    } else {
      setErrorData((state) => ({ ...state, username: "" }));
    }
  };
  const validatePassword = () => {
    if (
      !new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}"
      ).test(loginData.password)
    ) {
      setErrorData((state) => ({
        ...state,
        password:
          "Password should contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character",
      }));
    } else {
      setErrorData((state) => ({ ...state, password: "" }));
    }
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (e && e.target.id === "guest") {
      setLoginData({
        username: "avinashprj",
        password: "Avinashprajapati914@",
      });
      dispatch(
        loginUser({
          username: "avinashprj",
          password: "Avinashprajapati914@",
        })
      );
    } else if (
      loginData.username.trim() === "" ||
      loginData.password.trim() === ""
    )
      toast.error("Incorrect username or password");
    else
      dispatch(
        loginUser({
          username: loginData.username,
          password: loginData.password,
        })
      );
  };
  return (
    <section className="animate-gradient bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-dim-primary">Login</h2>
          <p className="text-xs mt-4 text-dim-primary">
            If you are already a member, easily log in
          </p>
          <form noValidate action="true" className="flex flex-col gap-4">
            <div className="flex flex-col mt-8">
              <label
                htmlFor="name"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Username
              </label>
              <div className="relative">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="User Name"
                  value={loginData.username}
                  onChange={(e) =>
                    setLoginData({ ...loginData, username: e.target.value })
                  }
                  onBlur={validateUsername}
                  className={`text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2  ${
                    errorData.username && "border-red-500 focus:border-red-500"
                  }`}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errorData.username}
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
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  onBlur={validatePassword}
                  className={`text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2 ${
                    errorData.password && "border-red-500 focus:border-red-500"
                  } `}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errorData.password}
              </span>
            </div>
            <button
              type="button"
              onClick={loginHandler}
              className="bg-dim-primary rounded-xl text-dim-white py-2 hover:scale-105 duration-300"
            >
              Login
            </button>
            <button
              id="guest"
              type="button"
              onClick={loginHandler}
              className="bg-dim-primary rounded-xl text-dim-white py-2 hover:scale-105 duration-300"
            >
              Log in as Guest
            </button>
          </form>
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button
            type="button"
            className="bg-dim-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-dim-primary"
          >
            <FcGoogle className="mr-3 text-[1.25rem]" />
            Login with Google
          </button>
          <div className="mt-5 text-xs border-b border-dim-primary py-4 text-dim-primary">
            <a href="/">Forgot your password?</a>
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-dim-primary">
            <p>Don't have an account?</p>
            <Link
              to="/signup"
              type="button"
              className="py-2 px-5 bg-dim-white border rounded-xl hover:scale-110 duration-300"
            >
              Register
            </Link>
          </div>
        </div>
        {/* image */}
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://res.cloudinary.com/avinashprj/image/upload/v1663515635/pexels-cottonbro-4629633_sir6nn.jpg"
            alt="social media"
          />
        </div>
      </div>
    </section>
  );
};
