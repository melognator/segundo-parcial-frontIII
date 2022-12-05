import React from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({ id, name, email, website, phone }) => {

    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    return (
        <Container>
            <h1>Detail Dentist {id}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th key="name">Name</th>
                        <th key="email">Email</th>
                        <th key="website">Website</th>
                        <th key="phone">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td key="name">{name}</td>
                        <td key="email">{email}</td>
                        <td key="website">{website}</td>
                        <td key="phone">{phone}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Detail