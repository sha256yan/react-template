import { Navbar, Container, Nav} from "react-bootstrap";
import { useGetAuth } from "../hooks/AuthContext";

function getNavButtonContainerStyle(emailAuth) {
    switch(emailAuth) {
        case true:
            return "col-lg-4 justify-content-center justify-content-lg-around align-items-center";
        case false:
            return "col-lg-4 justify-content-lg-evenly align-items-center";
    }
}

function CustomNavbar(props) {
    const { emailAuth } = useGetAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                {props.navTitle}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {props.navItems.map(item => <Nav.Link href={`/${item.toLowerCase()}`}>{item}</Nav.Link>)}
                </Nav>
                <Nav className={getNavButtonContainerStyle(emailAuth)}>
                    {props.getNavButtons(emailAuth)}
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}





export {CustomNavbar};