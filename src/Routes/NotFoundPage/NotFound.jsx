import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';


const NotFound = () => {

    const navigate = useNavigate();
    return (
        <Container className="d-flex-column justify-content-center align-items-center text-center">
            <h1>404 Not found.</h1>
            <p className="text-muted">This page does not exist...</p>
            <Button onClick={() => navigate("/home")}>Go home</Button>
        </Container>
    )
}

export default NotFound