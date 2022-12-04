import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../../../components";
import { AddPost } from "../AddPost/AddPost";
import { HomeNavbar } from "../HomeNavbar/HomeNavbar";
import { Post } from "../Post/Post";
import { Loader } from "../../../../components/Loader/Loader";
import { Searchbar } from "../../../../components/Searchbar/Searchbar";
import { Follow } from "../Follow/Follow";
import { HomeFooter } from "../HomeFooter/HomeFooter";
import { AddPostModal } from "../AddPostModal/AddPostModal";

export const HomeContent = () => {
  const { postStatus, posts, postSorting } = useSelector(
    (state) => state.posts
  );
  const { authUser } = useSelector((state) => state.authentication);

  const [followingPosts, setFollowingPosts] = useState([]);

  useEffect(() => {
    console.log(
      "🚀 ~ file: HomeContent.jsx ~ line 24 ~ useEffect ~ posts",
      posts
    );

    const filteredPosts = posts?.filter(
      (currPost) =>
        authUser.following.find(
          (user) => user.username === currPost.username
        ) || authUser.username === currPost.username
    );
    switch (postSorting) {
      case "trending":
        setFollowingPosts(
          filteredPosts
            .filter((post) => post.likes.likeCount > 0)
            .sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        );
        break;
      case "latest":
        setFollowingPosts(
          filteredPosts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        );
        break;
      default:
        setFollowingPosts(filteredPosts);
    }
  }, [authUser, posts, postSorting]);

  return (
    <div className="w-full sm:w-600 h-screen">
      <Header />
      <AddPost />
      {/* Timeline */}
      {/* New Tweets */}
      <div className="border-b border-gray-200 dark:border-dim-200 bg-gray-50 dark:bg-dim-300 py-2 border-l border-r">
        <div className="flex flex-shrink-0 items-center justify-center py-4 bg-white dark:bg-dim-900 border-b border-t border-gray-200 dark:border-dim-200 hover:bg-gray-50 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out text-blue-400 text-sm">
          Show 9 Tweets
        </div>
      </div>
      {/* /New Tweets */}
      {postStatus === "pending" ? (
        <Loader />
      ) : followingPosts.length > 0 ? (
        followingPosts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h1>No Posts to Display!</h1>
      )}
    </div>
  );
};
