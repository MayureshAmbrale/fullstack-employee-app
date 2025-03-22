import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand to="/"><strong>Employee</strong></Navbar.Brand>
            </Container>

        </Navbar>
    )
}

export default Header;