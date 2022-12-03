import React, { useState } from "react";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useLocation } from "react-router";

export const Header = () => {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme") === "dark") {
      return "dark";
    }
    document.documentElement.classList.remove("dark");
    return "light";
  });
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div className="flex justify-between items-center border-b px-4 py-3 sticky top-0 bg-white dark:bg-dim-900 border-l border-r border-gray-200 dark:border-gray-700">
      {/* Title */}
      <h2 className="text-gray-800 dark:text-gray-100 font-bold font-sm capitalize">
        {pathname.slice(1) ? pathname.slice(1) : "home"}
      </h2>
      {/* /Title */}
      {/* Custom Timeline */}
      <div>
        <button
          type="button"
          className="flex items-center"
          onClick={toggleTheme}
        >
          {document.documentElement.classList.contains("dark") ? (
            <MdOutlineDarkMode className="w-5 h-5 text-blue-400" />
          ) : (
            <MdOutlineLightMode className="w-5 h-5 text-blue-400" />
          )}
        </button>
      </div>
      {/* /Custom Timeline */}
    </div>
  );
};
