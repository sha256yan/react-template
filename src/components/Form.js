import { Form, Button } from "react-bootstrap";



function EmailGroup(props) {
return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
                {props.label}
            </Form.Label>
            <Form.Control type="password" placeholder={props.placeholder} />
        </Form.Group>
    )
}



function CustomForm(props) {
    return (
        <Form>
            {props.children}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export { CustomForm, EmailGroup, PasswordGroup };