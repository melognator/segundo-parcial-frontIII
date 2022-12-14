import React from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const Detail = ({ id, name, email, website, phone, tema }) => {

    return (
        <>
            <Container>
                <h1>Detail Dentist {id}</h1>
                <Table className={`table-${tema}`} striped bordered hover>
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
        </>
    )
}

export default Detail