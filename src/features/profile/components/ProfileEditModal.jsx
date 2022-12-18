import React, { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FcAddImage } from "react-icons/fc";
import { loadUserDetails } from "../profileSlice";
import { editUserProfile } from "../../authentication/authenticationSlice";

export const ProfileEditModal = () => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible((prev) => !prev);
  };
  const { authUser, authToken } = useSelector((state) => state.authentication);
  const [website, setWebsite] = useState(authUser.website);
  const [bio, setBio] = useState(authUser.bio);
  const [avatarUrl, setAvatarUrl] = useState(authUser.avatarUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserDetails(authUser.username));
  }, [authUser]);
  const resetFields = () => {
    setWebsite(authUser.website);
    setBio(authUser.bio);
    setAvatarUrl(authUser.avatarUrl);
  };

  const uploadImage = async (image) => {
    if (Math.round(image.size / 1024000) > 2)
      toast.error("File size should be less than 2MB");
    else {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_KEY);
      const requestOptions = {
        method: "POST",
        body: data,
      };
      await fetch(
        "https://api.cloudinary.com/v1_1/avinashprj/image/upload",
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => {
          setAvatarUrl(json.secure_url);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Image Uploading failed");
        });
    }
  };

  const updateDetails = (e) => {
    e.preventDefault();
    dispatch(
      editUserProfile({ userDetails: { avatarUrl, website, bio }, authToken })
    );
    toast.success("Details Updated!");
    setVisible(false);
  };
  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  max-w-max border bg-transparent border-blue-400 text-blue-400 hover:border-blue-500 hover:text-blue-500   items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto"
      >
        Edit Profile
      </button>
      <Modal
        show={visible}
        style={{ height: "100vh" }}
        position="center"
        onClose={() => {
          setVisible(false);
          resetFields();
        }}
      >
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Body>
          <form onSubmit={updateDetails} className="w-full max-w-lg">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 dark:text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Avatar
                </label>
              </div>
              <div className="md:w-2/3">
                <div className=" text-center w-auto">
                  <label className="cursor-pointer mt-6 ">
                    <div className="relative w-fit">
                      <img
                        className="w-20 h-20 rounded-full ml-5 object-cover object-center relative"
                        src={avatarUrl}
                        alt="Avatar Upload"
                      />
                      <div className="bg-white dark:bg-gray-700 rounded-xl right-0 bottom-1 absolute  w-5 h-5 border-2 border-white dark:border-gray-700">
                        <FcAddImage />
                      </div>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      id="file-input"
                      onChange={(e) => uploadImage(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 dark:text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="font-bold appearance-none border-none rounded w-full py-2 px-4 text-gray-700 dark:text-gray-100 dark:bg-transparent leading-tight focus:outline-none focus:bg-white  focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={`${authUser.firstName} ${authUser.lastName}`}
                  disabled
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500  dark:text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-password"
                >
                  Username
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="font-bold appearance-none border-none rounded w-full py-2 px-4 text-gray-700 dark:text-gray-100 dark:bg-transparent leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="text"
                  value={authUser.username}
                  disabled
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 dark:text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="bio"
                >
                  Bio
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="bio"
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 dark:text-gray-100 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="website"
                >
                  Website
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="website"
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3" />
              <div className="md:w-2/3">
                <button
                  className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
