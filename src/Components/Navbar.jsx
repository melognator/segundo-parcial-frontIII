import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <NavBar bg="light" variant="light" expand="lg">
            <Container>
                <NavBar.Brand ><span style={{ color: 'red' }}>D</span>H Odonto</NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/contact")}>Contact</Nav.Link>
                        <Nav.Link onClick={() => navigate("/favs")}>Favs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="dark">🥶</Button>
                        <Button variant="light">🥵</Button>
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    )
}

export default Navbar