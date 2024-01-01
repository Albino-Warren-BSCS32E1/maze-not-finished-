import React from "react";
import Modal from "react-modal";

const InstructionsModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Instructions">
    <h2>Instructions</h2>
    <p>Use WSAD or Arrow Keys to navigate through the maze.</p>
    <button onClick={onClose}>Close</button>
  </Modal>
);

export default InstructionsModal;