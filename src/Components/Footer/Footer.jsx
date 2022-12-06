import React, { useContext } from 'react';
import SocialLinks from './SocialLinks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContextGlobal } from '../utils/global.context';


const Footer = () => {

    const {datos} = useContext(ContextGlobal)

    const tema = datos.theme

    return (
        <footer className={tema}>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-between">
                        <img src="/images/DH.png" alt='DH-logo' />
                        <SocialLinks />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
