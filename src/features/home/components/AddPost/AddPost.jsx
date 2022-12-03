import React, { useState } from "react";

import { AiOutlinePicture } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useMedia } from "../../../../hooks/useMedia";
import { editPost, addPost } from "../../postsSlice";

export const AddPost = ({ editPostContent }) => {
  const { authUser, authToken } = useSelector((state) => state.authentication);
  const [content, setContent] = useState(
    editPostContent ? editPostContent.content : ""
  );
  const [mediaURL, setMediaURL] = useState(editPostContent?.mediaURL);
  const [deleteToken, setDeleteToken] = useState(editPostContent?.deleteToken);
  const dispatch = useDispatch();
  const { uploadMedia, deleteMedia } = useMedia();
  const [loader, setLoader] = useState(false);
  const [filename, setFilename] = useState("");
  const onUploadClick = async (e) => {
    setLoader(true);
    if (filename) await deleteMedia(deleteToken, setMediaURL, setDeleteToken);
    await uploadMedia(e.target.files[0], setMediaURL, setDeleteToken);
    setFilename(e.target.files[0].name);
    setLoader(false);
  };
  const deleteImage = async (e) => {
    if (filename) await deleteMedia(deleteToken, setMediaURL, setDeleteToken);
    setFilename("");
  };
  const onPostClick = () => {
    if (!content && !mediaURL) toast.error("Please add content to post");
    else {
      if (editPostContent)
        dispatch(
          editPost({
            postData: { ...editPostContent, content, mediaURL, deleteToken },
            authToken,
          })
        );
      else
        dispatch(
          addPost({ postData: { content, mediaURL, deleteToken }, authToken })
        );
      setContent("");
      setDeleteToken(null);
      setMediaURL("");
      setFilename("");
      editPostContent
        ? toast.success("Updated Successfully!")
        : toast.success("Posted successfully");
    }
  };

  return (
    <div className="border-b border-gray-200 dark:border-dim-200 pb-4 border-l border-r">
      <div className="flex flex-shrink-0 p-4 pb-0">
        <div className="w-12 flex items-center">
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
      <div className="w-full flex items-top p-2 pb-0 text-white pl-14">
        {/* <button
          type="button"
          // onClick={}
          className="text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800 rounded-full p-2"
        >

          <AiOutlinePicture className="w-5 h-5" />
        </button> */}
        <label
          htmlFor="file-input"
          className="flex items-center text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800 rounded-full p-2"
        >
          <AiOutlinePicture className="w-5 h-5 text-blue-400 cursor-pointer" />
          <input
            className="hidden"
            id="file-input"
            type="file"
            onChange={onUploadClick}
          />
        </label>
        <a
          href="/"
          className="text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800 rounded-full p-2"
        >
          <GrEmoji className="w-5 h-5" />
        </a>
        <button
          type="button"
          onClick={onPostClick}
          disabled={loader}
          className="cursor-pointer bg-blue-400 hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed text-white rounded-full py-1 px-4 ml-auto mr-1"
        >
          <span className="font-bold text-sm">
            {" "}
            {editPostContent ? "Update" : "Tweet"}
          </span>
        </button>
      </div>
      {filename && (
        <div className="w-full flex items-top text-white pl-14">
          <span
            id="badge-dismiss-default"
            className="inline-flex items-center py-0.5 ml-2 px-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800"
          >
            {filename}
            <button
              type="button"
              onClick={deleteImage}
              className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
            >
              <BiX />
            </button>
          </span>
        </div>
      )}
    </div>
  );
};
