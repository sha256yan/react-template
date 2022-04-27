import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Row } from "react-bootstrap";


function CustomNavbar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                {props.navTitle}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {props.navItems.map(item => <Nav.Link href={`/${item}`}>{item}</Nav.Link>)}
                </Nav>
                <Nav>
                    {props.navButtons.map(Button => <Nav.Link>{Button}</Nav.Link>)}
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



/*
*/

export {CustomNavbar};