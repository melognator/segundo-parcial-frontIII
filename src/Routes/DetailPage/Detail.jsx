import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { ContextGlobal } from '../../Components/utils/global.context'

const Detail = ({ id, name, email, website, phone }) => {

    const { datos } = useContext(ContextGlobal)

    const tema = datos.theme

    return (
        <main className={tema} >
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
        </main>
    )
}

export default Detail