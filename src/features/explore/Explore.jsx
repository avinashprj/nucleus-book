import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../home/components/Post/Post";
import { Loader } from "../../components/Loader/Loader";
import { Header } from "../../components/Header/Header";
import { getPagedPosts, setPageNum } from "../home/postsSlice";

export const Explore = () => {
  const { posts, pagedPosts, pagedPostStatus, pageNum, totalPages } =
    useSelector((state) => state.posts);
  const [lastPost, setLastPost] = useState();
  const dispatch = useDispatch();
  const intersectionObserver = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) dispatch(setPageNum({ pageNum }));
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    dispatch(getPagedPosts({ pageNum }));
  }, [pageNum, posts]);
  useEffect(() => {
    // setting new last post
    if (lastPost) intersectionObserver.current.observe(lastPost);
    // unsetting the previous last post
    return () => {
      if (lastPost) intersectionObserver.current.disconnect();
    };
  }, [lastPost, intersectionObserver]);

  return (
    <div className="w-full sm:w-600 h-screen">
      <Header />
      {pagedPosts.map((post, index) =>
        index === pagedPosts.length - 1 && pageNum < totalPages ? (
          <div key={post._id} ref={setLastPost}>
            <Post post={post} />
          </div>
        ) : (
          <Post post={post} key={post._id} />
        )
      )}

      {pagedPostStatus === "pending" && <Loader />}
    </div>
  );
};
