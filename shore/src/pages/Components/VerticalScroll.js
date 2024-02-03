import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Registration from '../Registration';
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
          <Registration />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VerticallyCenteredScrollableModal;
