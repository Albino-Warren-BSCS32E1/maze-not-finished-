import React from "react";
import Modal from "react-modal";

const AboutUsModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="About Us">
    <h2>About Us</h2>
    <p>Your custom about us content goes here.</p>
    <button onClick={onClose}>Close</button>
  </Modal>
);

export default AboutUsModal;
