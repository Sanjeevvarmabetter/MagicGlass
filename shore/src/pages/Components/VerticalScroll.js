import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const VerticallyCenteredScrollableModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-dialog-centered modal-dialog-scrollable"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your scrollable content here */}
          <p>Some long content goes here...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VerticallyCenteredScrollableModal;
