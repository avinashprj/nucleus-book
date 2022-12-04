import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Header } from "../../../../components/Header/Header";
import { Post } from "../Post/Post";
import { Comment } from "../Comment/Comment";

export const SinglePost = () => {
  const { postId } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const [post, setPost] = useState(null);
  useEffect(() => {
    if (postId && posts)
      setPost(posts.filter((currPost) => currPost._id === postId)[0]);
  }, [posts]);
  return (
    <div className="w-full sm:w-600 h-screen border-l border-r border-gray-200 dark:border-gray-700">
      <Header />
      {post && <Post post={post} />}
      {post?.comments &&
        post.comments?.map((comment) => (
          <Comment key={comment._id} comment={comment} postId={post._id} />
        ))}
    </div>
  );
};
