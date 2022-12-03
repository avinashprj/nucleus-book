import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { AddPost } from "../AddPost/AddPost";

export const AddPostModal = ({ visible, setVisible, toggleModal }) => (
  <Modal show={visible} position="center" onClose={() => setVisible(false)}>
    <Modal.Header>Add Post</Modal.Header>
    <Modal.Body>
      <AddPost />
    </Modal.Body>
    {/* <Modal.Footer>
      <Button onClick={toggleModal}>I accept</Button>
      <Button color="gray" onClick={toggleModal}>
        Decline
      </Button>
    </Modal.Footer> */}
  </Modal>
);
