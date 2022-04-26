import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


function CustomNavbar(props) {
    console.log(props.navItems);
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {props.navItems.map(item => 
                            <Nav.Link href={`/${item}`}>{item}</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}



/*
                <Nav className="me-auto">
                {props.navItems.map(item => 
                    <Nav.Link href={`/${item}`}>{item}</Nav.Link>
                )}
                </Nav>
*/

export {CustomNavbar};