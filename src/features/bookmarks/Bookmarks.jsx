import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../home/components/Post/Post";
import { Loader } from "../../components/Loader/Loader";
import { Header } from "../../components/Header/Header";

export const Bookmark = () => {
  const { authUser } = useSelector((state) => state.authentication);
  const { posts } = useSelector((state) => state.posts);

  const getPost = (postId) =>
    posts.filter((currPost) => currPost._id === postId)[0];
  return (
    <div className="w-full sm:w-600 h-screen border-l border-r border-gray-700">
      <Header />
      {authUser.bookmarks.length === 0 ? (
        <h1 className="text-center text-white pt-4 text-2xl ">
          No Bookmarks Yet
        </h1>
      ) : (
        <>
          {authUser.bookmarks.map((postId) => (
            <Post key={postId} post={getPost(postId)} />
          ))}
        </>
      )}
    </div>
  );
};
