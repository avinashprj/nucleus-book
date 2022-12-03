import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { HomeNavbar } from "../../features/home/components/HomeNavbar/HomeNavbar";
import { Searchbar } from "../Searchbar/Searchbar";
import { Follow } from "../../features/home/components/Follow/Follow";
import { HomeFooter } from "../../features/home/components/HomeFooter/HomeFooter";
import Suggestions from "../Suggestions/Suggestions";

export const SharedHomeLayout = () => (
  <>
    <nav>
      <div className="container mx-auto h-screen">
        <div className="flex flex-row justify-center">
          {/* /Left */}
          <HomeNavbar />
          {/* /Left */}
          <Outlet />
          {/* Right */}
          <div className="hidden md:block w-290 lg:w-350 h-screen">
            <div className="flex flex-col fixed overflow-y-auto w-290 lg:w-350 h-screen">
              {/* Search */}
              <Searchbar />
              {/* /Search */}
              {/* Who to follow */}
              <Suggestions />
              {/* /Who to follow */}
              <HomeFooter />
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>
    </nav>
    {/* <Footer /> */}
  </>
);
