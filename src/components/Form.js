import React from "react";
import { Form, Button } from "react-bootstrap";



function EmailGroup(props) {
return (
    <Form.Group className="mb-3" controlId={props.groupId}>
        <Form.Label>
            {props.label}
        </Form.Label>
        <Form.Control type="email" placeholder={props.placeholder} />
        <Form.Text className="text-muted">
            {props.comment}
        </Form.Text>
    </Form.Group>
  );
}




function PasswordGroup(props) {
    return (
        <Form.Group className="mb-3" controlId={props.groupId} onBlur={props.onBlur}>
            <Form.Label>
                {props.label}
            </Form.Label>
            <Form.Control type="password" placeholder={props.placeholder}/>
        </Form.Group>
    )
}






function checkPasswords(passInputs) {
    let msg = "";
    if((passInputs.pw1 === passInputs.pw2 ) && (passInputs.pw1.length === 0)) {
        msg = <p className="text-danger">Please enter a password...</p>
    }
    else if(passInputs.pw1 === passInputs.pw2) {
        msg = <p className="text-success">Passwords match!</p>
    }
    else {
        msg = <p className="text-danger">Passwords don't match...</p>
    }
    return msg;
}







function PasswordConfirmGroup(props) {
    const [passInputs, setPassInputs] = React.useState({
        pw1: "",
        pw2: ""
    })
    

    const pw1Blur = (event) => setPassInputs({pw1: event.target.value, pw2: passInputs.pw2});

    const pw2Blur = (event) => setPassInputs({pw1: passInputs.pw1, pw2: event.target.value});

    return (
        <>
            <PasswordGroup label="Password" placeholder="Enter your password" groupId="pw1" onBlur={pw1Blur}/>
            <PasswordGroup label="Confirm Password" placeholder="Re-enter your password" groupId="pw2" onBlur={pw2Blur}/>
            {checkPasswords(passInputs)}
        </>
    )
}





function CustomForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        //TO DO
    }
    return (
        <Form>
            {props.children}
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export { CustomForm, EmailGroup, PasswordGroup , PasswordConfirmGroup};