import React from "react";
import { Button } from "react-bootstrap";
import { CustomModal } from "./Modal";


function AuthButton({ params }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const {handleOpen, handleClose} = ButtonStateHandler(setIsOpen);


    return (
        <>
            <Button variant="dark" onClick={handleOpen}>
                {params.buttonLabel}
            </Button>
            {
                params.modalTitle !== undefined ? <CustomModal title={params.modalTitle} body={params.modalBody} isOpen={isOpen} handleClose={handleClose}/> : null
            }
        </>
    )
}



function ButtonStateHandler(setIsOpen) {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    return {handleOpen, handleClose};
}




export { AuthButton };