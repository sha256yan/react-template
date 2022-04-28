import { Navbar, Container, Nav} from "react-bootstrap";
import { useGetAuth } from "../hooks/AuthContext";

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
                    {props.navItems.map(item => <Nav.Link href={`/${item}`}>{item}</Nav.Link>)}
                </Nav>
                <Nav>
                    {props.getNavButtons(emailAuth)}
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}





export {CustomNavbar};