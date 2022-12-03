import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addComment, editComment } from "../../postsSlice";

export const AddCommentModal = ({
  visible,
  setVisible,
  toggleModal,
  postId,
  comment,
  editCommentContent,
}) => {
  const [content, setContent] = useState(
    editCommentContent ? comment.text : ""
  );
  const dispatch = useDispatch();
  const { authUser, authToken } = useSelector((state) => state.authentication);
  const onCommentClick = () => {
    if (!content) toast.error("Please add content to comment");
    else {
      if (editCommentContent) {
        dispatch(
          editComment({
            postId,
            commentId: comment._id,
            commentData: content,
            authToken,
          })
        );
        toast.success("Comment updated!");
      } else {
        dispatch(
          addComment({
            postId,
            commentData: content,
            authToken,
          })
        );
        toast.success("Comment added!");
      }
      setVisible(false);
    }
  };
  return (
    <Modal show={visible} position="center" onClose={() => setVisible(false)}>
      <Modal.Header>Post Reply</Modal.Header>
      <Modal.Body>
        <div className="border-b border-gray-200 dark:border-dim-200 pb-4 border-l border-r">
          <div className="flex flex-shrink-0 p-4 pb-0">
            <div className="flex items-center w-12 ">
              <img
                className="inline-block h-10 w-10 rounded-full object-cover"
                src={authUser.avatarUrl}
                alt={authUser.firstName}
              />
            </div>
            <div className="w-full p-2">
              <textarea
                className="dark:text-white text-gray-900 placeholder-gray-400 w-full h-10 bg-transparent border-0 focus:outline-none resize-none"
                placeholder="What's happening?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex items-top p-2 text-white pl-14">
            <button
              type="button"
              onClick={onCommentClick}
              className="bg-blue-400 hover:bg-blue-500 text-white rounded-full py-1 px-4 ml-auto mr-1"
            >
              <span className="font-bold text-sm">
                {editCommentContent ? "Update" : "Comment"}
              </span>
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
