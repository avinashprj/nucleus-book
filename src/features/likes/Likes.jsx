import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Post } from "../home/components/Post/Post";
import { Loader } from "../../components/Loader/Loader";
import { Header } from "../../components/Header/Header";

export const Likes = () => {
  const { authUser } = useSelector((state) => state.authentication);
  const { posts } = useSelector((state) => state.posts);
  const [postsLikedByUser, setPostsLikedByUser] = useState([]);

  useEffect(() => {
    setPostsLikedByUser(
      posts?.filter((currPost) =>
        currPost.likes.likedBy.find(
          (currUser) => currUser.username === authUser?.username
        )
      )
    );
  }, [posts]);
  return (
    <div className="w-full sm:w-600 h-screen border-l border-r border-gray-700">
      <Header />
      {/* <Loader /> */}
      {postsLikedByUser.length === 0 ? (
        <h1 className="text-center text-white pt-4 text-2xl ">
          No Liked Posts
        </h1>
      ) : (
        <>
          {postsLikedByUser.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </>
      )}
    </div>
  );
};
