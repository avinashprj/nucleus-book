import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { UserLoader } from "../Loader/UserLoader";
import { Follow } from "../../features/home/components/Follow/Follow";

const Suggestions = () => {
  const { users } = useSelector((state) => state.users);
  const { postSorting } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authentication);
  const [suggestions, setSuggestions] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setSuggestions(
      users.filter(
        (currUser) =>
          !authUser.following.find(
            (innerCurrUser) => innerCurrUser._id === currUser._id
          ) && currUser.username !== authUser.username
      )
    );
  }, [authUser, users]);
  return (
    <div className="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
      <h1 className="text-gray-900 dark:text-white text-md font-bold p-3 border-b border-gray-200 dark:border-dim-200">
        Who to follow
      </h1>
      {suggestions
        .slice(0, 5)
        .map(
          (user) =>
            user.username !== authUser.username && (
              <Follow user={user} key={user._id} followButton />
            )
        )}
      <UserLoader />
      {/* /Loader */}
      <div className="text-blue-400 text-sm font-normal p-3 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
        Show more
      </div>
    </div>
  );
};

export default Suggestions;
