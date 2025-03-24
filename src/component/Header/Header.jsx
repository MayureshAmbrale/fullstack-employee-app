import { Container, Nav, NavItem } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Employee Management</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/post">Post Employee</Nav.Link>
                        <Nav.Link href="/getByEmail">Get Employee</Nav.Link>
                        <Nav.Link href="/update">Update Employee</Nav.Link>

                    </Nav>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;