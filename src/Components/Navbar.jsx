import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

    const navigate = useNavigate();

    const {datos, datosDispatch} = useContext(ContextGlobal)

    const tema = datos.theme
    
    const cambiarTema = () => {
        datosDispatch({type: "theme", theme: tema})
    }
    
    return (
        <NavBar bg={tema} variant={tema} expand="lg">
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
                        {tema === "dark" ? (
                            <Button onClick={cambiarTema} variant="light">🥵</Button>
                        ):(
                            <Button onClick={cambiarTema} variant="dark">🥶</Button>
                        )}
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    )
}

export default Navbar