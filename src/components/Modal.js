import React from "react";
import { Modal } from "react-bootstrap";








/*
    props:
        buttonLabel: label of initiating button
        title,
        body,
        negativeResponse,   negative response button label
        positiveResponse    positive response button label
*/

function CustomModal({ title, body, isOpen, handleClose }) {
    return (
        <>
          <Modal
            show={isOpen}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                  {title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {body}
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </>
      );

}




export { CustomModal };