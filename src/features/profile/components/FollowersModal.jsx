import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { Follow } from "../../home/components/Follow/Follow";

export const FollowersModal = ({ followersList }) => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <div className="text-center pr-3">
        <span className="font-bold text-white">{followersList.length} </span>
        <button
          type="button"
          onClick={() => {
            setVisible((prev) => !prev);
          }}
          className="text-gray-600 dark:text-gray-400"
        >
          Followers
        </button>
      </div>
      <Modal show={visible} position="center" onClose={() => setVisible(false)}>
        <Modal.Header>Followers</Modal.Header>
        <Modal.Body>
          {followersList.length > 0 ? (
            followersList.map((user) => {
              console.log(user);
              return (
                <Follow user={user} setVisible={setVisible} key={user._id} />
              );
            })
          ) : (
            <h1 className="text-center text-white text-xl">No Followers Yet</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
