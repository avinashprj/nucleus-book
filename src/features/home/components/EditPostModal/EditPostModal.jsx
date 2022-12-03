import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { AddPost } from "../AddPost/AddPost";

export const EditPostModal = ({ visible, setVisible, toggleModal, post }) => (
  <Modal show={visible} position="center" onClose={() => setVisible(false)}>
    <Modal.Header>Add Post</Modal.Header>
    <Modal.Body>
      <AddPost editPostContent={post} />
    </Modal.Body>
    {/* <Modal.Footer>
      <Button onClick={toggleModal}>I accept</Button>
      <Button color="gray" onClick={toggleModal}>
        Decline
      </Button>
    </Modal.Footer> */}
  </Modal>
);
