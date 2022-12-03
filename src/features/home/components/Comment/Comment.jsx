/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { useMedia } from "../../../../hooks/useMedia";
import {
  deleteComment,
  deletePost,
  dislikePost,
  likePost,
} from "../../postsSlice";

import {
  addBookmark,
  removeBookmark,
} from "../../../authentication/authenticationSlice";
import { AddCommentModal } from "../AddComment/AddCommentModal";

export const Comment = ({ comment, postId }) => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState(null);
  const { authToken, authUser } = useSelector((state) => state.authentication);
  const handleDeleteComment = () => {
    dispatch(deleteComment({ postId, commentId: comment._id, authToken }));
    setCommentEdit(false);
    // toast.success("Comment deleted!");
  };
  useEffect(
    () =>
      setUserDetails(
        users.filter((user) => user.username === comment.username)[0]
      ),
    [users]
  );

  // post page
  const { deleteMedia } = useMedia();

  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible((prev) => !prev);
  };

  const [commentEdit, setCommentEdit] = useState(false);
  const toggleCommentEditModal = () => setCommentEdit((prev) => !prev);

  return (
    <>
      {userDetails && (
        <div className="border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out pb-4 border-l border-r">
          <div className="flex flex-shrink-0 p-4 pb-0 justify-between">
            <Link
              to={`/profile/${userDetails.username}`}
              className="flex-shrink-0 group block"
            >
              <div className="flex items-top">
                <div>
                  <img
                    className="inline-block h-9 w-9 object-cover rounded-full"
                    src={
                      userDetails.username === authUser.username
                        ? authUser.avatarUrl
                        : userDetails.avatarUrl
                    }
                    alt={userDetails.firstName}
                  />
                </div>
                <div className="ml-3">
                  <p className="flex items-center text-base leading-6 font-medium text-gray-800 dark:text-white">
                    {`${userDetails.firstName} ${userDetails.lastName}`}
                    <svg
                      viewBox="0 0 24 24"
                      aria-label="Verified account"
                      fill="currentColor"
                      className="w-4 h-4 ml-1 text-blue-500 dark:text-white"
                    >
                      <g>
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                      </g>
                    </svg>

                    {/* <span className="ml-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                      @{post.username} .{" "}
                      {` ${new Date(post.createdAt)
                        .toDateString()
                        .split(" ")
                        .slice(1, 4)
                        .join(" ")}`}
                    </span> */}
                  </p>
                </div>
              </div>
            </Link>
            {authUser.username === userDetails.username && (
              <div className="relative">
                <button
                  onClick={toggleCommentEditModal}
                  type="button"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <BsThreeDots className="flex-1 flex items-center text-xl dark:text-white  text-gray-400 transition duration-350 ease-in-out" />
                </button>
                <div
                  className={`absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-dim-800 dark:bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    commentEdit ? "" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <button
                      type="button"
                      className="text-white dark:text-gray-700  dark:hover:bg-gray-300 w-full block px-4 py-2 text-sm transition duration-150 ease-out hover:ease-in "
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      onClick={() => {
                        setVisible(true);
                        setCommentEdit(false);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="text-white dark:text-gray-700 block px-4 py-2 text-sm w-full dark:hover:bg-gray-300 transition duration-150 ease-out hover:ease-in"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                      onClick={handleDeleteComment}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="pl-16">
            <div>
              <p className="text-base width-auto font-medium text-gray-800 dark:text-white flex-shrink">
                {comment.text}
              </p>
              <div className="flex my-3 mr-2 rounded-2xl">
                {/* <img
                className="rounded-2xl"
                src="https://pbs.twimg.com/media/EnTkhz-XYAEH2kY?format=jpg&name=small"
                alt=""
              /> */}
              </div>
            </div>
            <AddCommentModal
              visible={visible}
              setVisible={setVisible}
              toggleModal={toggleModal}
              postId={postId}
              editCommentContent
              comment={comment}
            />
          </div>
        </div>
      )}
    </>
  );
};
