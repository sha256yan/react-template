import React from "react";
import { Container, Modal, Button} from "react-bootstrap";




/*
    props:
        buttonLabel: label of initiating button
        title,
        body,
        negativeResponse,   negative response button label
        positiveResponse    positive response button label
*/

function CustomModal(props) {
    const {buttonLabel, title, body, positiveResponse, negativeResponse} = props.props;
    const[isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
          <Button variant="dark" onClick={handleOpen}>
            {buttonLabel}
          </Button>
    
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



function FormModal(props) {

}



export { CustomModal };