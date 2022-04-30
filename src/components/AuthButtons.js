import React from "react";
import { Button } from "react-bootstrap";
import { CustomModal } from "./Modal";


function AuthButton({ params }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const {handleOpen, handleClose} = buttonStateHandler(setIsOpen);


    return (
        <>
            <Button variant="primary" onClick={handleOpen} className="my-2 col-4 col-lg-4">
                {params.buttonLabel}
            </Button>
            {
                params.modalTitle !== undefined ? <CustomModal title={params.modalTitle} body={params.modalBody} isOpen={isOpen} handleClose={handleClose}/> : null
            }
        </>
    )
}



function buttonStateHandler(setIsOpen) {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    return {handleOpen, handleClose};
}




export { AuthButton };