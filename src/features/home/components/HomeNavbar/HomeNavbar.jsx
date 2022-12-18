import React, { useState } from "react";
import { BsBookmark, BsPerson, BsTwitter } from "react-icons/bs";
import { AiOutlineHome, AiOutlineLike, AiTwotoneHome } from "react-icons/ai";
import { CiHashtag } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgTwitter } from "react-icons/cg";
import { AddPostModal } from "../AddPostModal/AddPostModal";

export const HomeNavbar = () => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible((prev) => !prev);
  };
  const { authUser } = useSelector((state) => state.authentication);

  return (
    <div className="w-68 xs:w-88 xl:w-275 h-screen">
      <div className="flex flex-col h-screen xl:pr-3 fixed overflow-y-auto w-68 xs:w-88 xl:w-275">
        {/* Logo */}
        <NavLink to="/" className="flex my-2 justify-center xl:justify-start">
          <BsTwitter className="w-8 h-8 text-blue-400 dark:text-white" />
        </NavLink>
        {/* /Logo */}
        {/* Nav */}
        <nav className="mt-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center justify-center xl:justify-start  mb-8 transition duration-350 ease-in-out ${
                isActive
                  ? "text-blue-400"
                  : "text-gray-800 dark:text-white hover:text-blue-400"
              }`
            }
            end
          >
            <AiOutlineHome className="h-6 w-6" />
            <span className="hidden xl:block ml-4 font-bold text-md">Home</span>
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `flex items-center justify-center xl:justify-start  mb-8 transition duration-350 ease-in-out ${
                isActive
                  ? "text-blue-400"
                  : "text-gray-800 dark:text-white hover:text-blue-400"
              }`
            }
          >
            <CiHashtag className="h-6 w-6 " />
            <span className="hidden xl:block ml-4 font-bold text-md">
              Explore
            </span>
          </NavLink>
          <NavLink
            to="/likes"
            className={({ isActive }) =>
              `flex items-center justify-center xl:justify-start  mb-8 transition duration-350 ease-in-out ${
                isActive
                  ? "text-blue-400"
                  : "text-gray-800 dark:text-white hover:text-blue-400"
              }`
            }
          >
            <AiOutlineLike className="h-6 w-6" />
            <span className="hidden xl:block ml-4 font-bold text-md">
              Likes
            </span>
          </NavLink>
          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              `flex items-center justify-center xl:justify-start  mb-8 transition duration-350 ease-in-out ${
                isActive
                  ? "text-blue-400"
                  : "text-gray-800 dark:text-white hover:text-blue-400"
              }`
            }
          >
            <BsBookmark className="h-6 w-6" />
            <span className="hidden xl:block ml-4 font-bold text-md">
              Bookmarks
            </span>
          </NavLink>
          <a
            href="/"
            className="flex items-center justify-center xl:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
          >
            <HiOutlineMail className="h-6 w-6" />
            <span className="hidden xl:block ml-4 font-bold text-md">
              Messages
            </span>
          </a>
          <Link
            to={`profile/${authUser.username}`}
            className="flex items-center justify-center xl:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
          >
            <BsPerson className="w-6 h-6" />
            <span className="hidden xl:block ml-4 font-bold text-md">
              Profile
            </span>
          </Link>

          <div className="mx-auto w-11 h-11 xl:w-auto flex items-center justify-center bg-blue-400 hover:bg-blue-500 py-3 rounded-full text-white font-bold font-sm transition duration-350 ease-in-out mb-10">
            <button type="button" className="" onClick={toggleModal}>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="block xl:hidden w-6 h-6"
              >
                <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z" />
              </svg>
              {/* <CgTwitter className="block xl:hidden " /> */}
              <span className="hidden xl:block font-bold text-md">Tweet</span>
            </button>
          </div>
          <AddPostModal
            visible={visible}
            setVisible={setVisible}
            toggleModal={toggleModal}
          />
        </nav>
        {/* /Nav */}
        {/* User Menu */}
        <Link
          to={`profile/${authUser.username}`}
          className="w-14 xl:w-full mx-auto mt-auto flex flex-row justify-between rounded-full hover:bg-blue-50 dark:hover:bg-dim-800 p-2 cursor-pointer transition duration-350 ease-in-out mb-2"
        >
          <div className="flex flex-row">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={authUser.avatarUrl}
              alt={authUser.firstName}
            />
            <div className="hidden xl:block flex flex-col ml-2">
              <h1 className="text-gray-800 dark:text-white font-bold text-sm">
                {`${authUser.firstName} ${authUser.lastName}`}
              </h1>
              <p className="text-gray-400 text-sm">{`@${authUser.username}`}</p>
            </div>
          </div>
          <div className="hidden xl:block">
            <div className="flex items-center h-full text-gray-800 dark:text-white">
              <MdKeyboardArrowDown className="h-4 w-4 mr-2" />
            </div>
          </div>
        </Link>
        {/* /User Menu */}
      </div>
    </div>
  );
};
