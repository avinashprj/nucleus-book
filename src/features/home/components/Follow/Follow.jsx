import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser } from "../../usersSlice";

export const Follow = ({ user, setVisible, followButton }) => {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.authentication);
  const setVisibility = () => {
    if (followButton) return;
    setVisible(false);
  };

  return (
    <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
      <div className="flex flex-row justify-between p-2">
        <div className="flex flex-row">
          <Link to={`/profile/${user.username}`} onClick={setVisibility}>
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user.avatarUrl}
              alt={user.firstName}
            />
          </Link>
          <Link
            to={`/profile/${user.username}`}
            onClick={setVisibility}
            className="flex flex-col ml-2"
          >
            <h1 className="text-gray-900 dark:text-white font-bold text-sm">
              {`${user.firstName} ${user.lastName}`}
            </h1>
            <p className="text-gray-400 text-sm">@{user.username}</p>
          </Link>
        </div>
        {followButton && (
          <div className>
            <div className="flex items-center h-full text-gray-800 dark:text-white">
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    followUser({ followUserId: user._id, authToken, dispatch })
                  )
                }
                className="text-xs font-bold text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400"
              >
                Follow
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
