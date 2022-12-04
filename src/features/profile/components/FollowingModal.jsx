import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { Follow } from "../../home/components/Follow/Follow";

export const FollowingModal = ({ followingList }) => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <div className="text-center pr-3">
        <span className="font-bold text-white">{followingList.length} </span>
        <button
          type="button"
          onClick={() => {
            setVisible((prev) => !prev);
          }}
          className="text-gray-600 dark:text-gray-400"
        >
          Following
        </button>
      </div>
      <Modal show={visible} position="center" onClose={() => setVisible(false)}>
        <Modal.Header>Following</Modal.Header>
        <Modal.Body>
          {followingList.length > 0 ? (
            followingList.map((user) => (
              <Follow user={user} setVisible={setVisible} key={user._id} />
            ))
          ) : (
            <h1 className="text-center text-white text-xl">No Following Yet</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
