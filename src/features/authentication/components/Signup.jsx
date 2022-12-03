import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { GoogleLogin } from "react-google-login";
import { useSignupHandler } from "../hooks/useSignupHandler";

export const Signup = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {
    formData,
    formDispatch,
    errorData,
    errorDispatch,
    signUpHandler,
    checkValidation,
  } = useSignupHandler();
  const location = useLocation();
  const { authToken } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (authToken)
      navigate(location?.state?.from?.pathname || "/", { replace: true });
  }, [authToken]);

  const onSuccess = ({ profileObj }) => {
    console.log("success:", profileObj);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  return (
    <section className="animate-gradient bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 items-center">
        {/* Image */}
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://res.cloudinary.com/avinashprj/image/upload/v1663515628/pexels-linda-ellershein-3127880_hc2fqx.jpg"
            alt="signup"
          />
        </div>
        {/* form */}

        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-dim-primary">Signup</h2>
          <p className="text-xs mt-4 text-dim-primary">
            If you are already a member, easily log in
          </p>
          <form
            onSubmit={(e) => signUpHandler(e)}
            noValidate
            action
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col mt-4">
              <label
                htmlFor="firstName"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    formDispatch({
                      type: "INPUT_FIRST_NAME",
                      payload: e.target.value,
                    })
                  }
                  onBlur={checkValidation.firstName}
                  className={`text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2  ${
                    errorData.firstName && "border-red-500 focus:border-red-500"
                  }`}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errorData.firstName}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  // value=""
                  value={formData.lastName}
                  onChange={(e) =>
                    formDispatch({
                      type: "INPUT_LAST_NAME",
                      payload: e.target.value,
                    })
                  }
                  onBlur={checkValidation.lastName}
                  className={`text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2  ${
                    errorData.lastName && "border-red-500 focus:border-red-500"
                  }`}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errorData.lastName}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    formDispatch({
                      type: "INPUT_EMAIL",
                      payload: e.target.value,
                    })
                  }
                  onBlur={checkValidation.email}
                  className={`text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2  ${
                    errorData.email && "border-red-500 focus:border-red-500"
                  }`}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errorData.email}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="userName"
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
                  value={formData.username}
                  onChange={(e) =>
                    formDispatch({
                      type: "INPUT_USERNAME",
                      payload: e.target.value,
                    })
                  }
                  onBlur={checkValidation.username}
                  className={`text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2 ${
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
                  value={formData.password}
                  onChange={(e) =>
                    formDispatch({
                      type: "INPUT_PASSWORD",
                      payload: e.target.value,
                    })
                  }
                  onBlur={checkValidation.password}
                  className={`text-sm sm:text-base relative w-full border rounded-xl placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2 ${
                    errorData.password && "border-red-500 focus:border-red-500"
                  }`}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errorData.password}
              </span>
            </div>
            <button
              type="submit"
              className="bg-dim-primary rounded-xl text-dim-white py-2 hover:scale-105 duration-300"
            >
              Signup
            </button>
          </form>
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          {/* <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Sign in with Google"
            render={(renderProps) => (
              <button
                type="button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="bg-dim-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-dim-primary"
              >
                <FcGoogle className="mr-3 text-[1.25rem]" />
                Signup with Google
              </button>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
            // isSignedIn
          /> */}
          <div className="mt-3 text-xs flex justify-between items-center text-dim-primary">
            <p>Already have an account?</p>
            <Link
              to="/login"
              type="button"
              className="py-2 px-5 bg-dim-white border rounded-xl hover:scale-110 duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
