import React from "react";
import { BsSearch, BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "../../icons/Logo";

export const Navbar = () => {
  console.log("HELLo");
  return (
    <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-16">
      {/* logo */}
      <div className="inline-flex">
        <a className="_o6689fn" href="/">
          <div className="block">
            <Logo />
          </div>
        </a>
      </div>
      {/* end logo */}
      {/* search bar */}
      <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div className="">
          <div className="container  flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <input
                type="text"
                className="h-10 w-90 max-w-96 pr-8 pl-5 rounded-2xl z-0 focus:shadow focus:outline-none relative"
                placeholder="Search anything..."
              />

              <div className="absolute top-2.5 right-3">
                <button type="button">
                  <BsSearch className="text-gray-400 z-20 hover:text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end search bar */}
      {/* login */}
      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <div className="block">
            <div className="inline relative">
              <button
                type="button"
                className="flex items-center relative p-3 border rounded-full hover:shadow-lg "
              >
                <div className="block ">
                  <BsPersonCircle className="text-[22px]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end login */}
    </nav>
  );
};
