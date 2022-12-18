/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CgWebsite } from "react-icons/cg";
import { RiCalendarLine } from "react-icons/ri";
import { loadUserDetails, loadUserPosts } from "../profileSlice";
import { followUser, unfollowUser } from "../../home/usersSlice";
import { Loader } from "../../../components/Loader/Loader";
import { logoutUser } from "../../authentication/authenticationSlice";
import { FollowersModal } from "./FollowersModal";
import { FollowingModal } from "./FollowingModal";
import { Post } from "../../home/components/Post/Post";
import { ProfileEditModal } from "./ProfileEditModal";

export const ProfileDetails = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { profileDetails } = useSelector((state) => state.profile);
  const { followStatus } = useSelector((state) => state.users);
  const { authUser, authToken } = useSelector((state) => state.authentication);
  const { postsDetails } = useSelector((state) => state.profile);
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    if (username) {
      dispatch(loadUserDetails(username));
      dispatch(loadUserPosts(username));
    }
  }, [username, authUser, posts, dispatch]);
  const isFollowed = () =>
    profileDetails.followers.some(
      (currUser) => currUser.username === authUser.username
    );

  const followUnfollowClickHandler = () => {
    isFollowed()
      ? dispatch(
          unfollowUser({
            followUserId: profileDetails._id,
            authToken,
            dispatch,
          })
        )
      : dispatch(
          followUser({
            followUserId: profileDetails._id,
            authToken,
            dispatch,
          })
        );
  };
  return profileDetails ? (
    <div className="border-l border-r  border-gray-200 dark:border-gray-700">
      {/* <div className="w-full bg-cover bg-no-repeat bg-center ">
         <img
          className="opacity-0 w-28 h-28"
          src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200"
          alt=""
        />
      </div> */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="relative flex w-full">
          <div className="flex flex-1">
            <div>
              <div className="h-[9rem] w-[9rem] md rounded-full relative avatar">
                <img
                  className="h-[9rem] w-[9rem] md rounded-full relative border-2 dark:border-gray-800 object-cover"
                  src={profileDetails?.avatarUrl}
                  alt={profileDetails?.firstName}
                />
                <div className="absolute" />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-right justify-end">
            {authUser.username === profileDetails.username && (
              <ProfileEditModal />
            )}
            {authUser.username !== profileDetails.username && (
              <button
                type="button"
                onClick={followUnfollowClickHandler}
                disabled={followStatus === "pending"}
                className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  max-w-max border bg-transparent border-blue-400 text-blue-400 hover:border-blue-500 hover:text-blue-500   items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto"
              >
                {isFollowed() ? "Following" : "Follow"}
              </button>
            )}
          </div>
        </div>

        <div className="space-y-1 justify-center w-full mt-3 ml-3">
          <div>
            <h2 className="text-xl leading-6 font-bold text-white">
              {`${profileDetails?.firstName} ${profileDetails?.lastName}`}
            </h2>
            <p className="text-sm leading-5 font-medium text-gray-600">
              {`@${profileDetails.username}`}
            </p>
          </div>
          <div className="mt-3">
            <p className="dark:text-white leading-tight mb-2">
              {profileDetails.bio && profileDetails.bio}
            </p>
            <div className="text-gray-600 flex">
              {profileDetails.website && (
                <span className="flex mr-2">
                  <CgWebsite className="h-5 w-5 paint-icon" />
                  <a
                    href={profileDetails.website}
                    target="_black"
                    className="leading-5 ml-1 text-blue-400"
                  >
                    {profileDetails.website}
                  </a>
                </span>
              )}

              <span className="flex mr-2">
                <RiCalendarLine className="h-5 w-5 paint-icon" />

                <span className="leading-5 ml-1">{`${new Date(
                  profileDetails.createdAt
                )
                  .toDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                  .slice(4)}`}</span>
              </span>
            </div>
          </div>
          <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
            <div className="text-center pr-3">
              <span className="font-bold dark:text-white">
                {postsDetails.length}
              </span>
              <span className="text-gray-600 dark:text-gray-400"> Posts</span>
            </div>
            <FollowersModal followersList={profileDetails.followers} />
            <FollowingModal followingList={profileDetails.following} />
          </div>
        </div>
      </div>
      {postsDetails.length > 0 ? (
        postsDetails.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h1 className="text-center text-white text-xl">No Posts Yet</h1>
      )}
    </div>
  ) : (
    <Loader />
  );
};
