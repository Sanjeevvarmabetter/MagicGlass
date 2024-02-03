import React from 'react';
import { Modal } from 'react-bootstrap';

const VerticallyCenteredScrollableModal = ({ showModal, handleClose }) => {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      dialogClassName="modal-dialog-centered modal-dialog-scrollable"
    >
      {/* Add your modal content here */}
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your scrollable content here */}
        <p>Some long content goes here...</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default VerticallyCenteredScrollableModal;
