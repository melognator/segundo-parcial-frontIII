import React from 'react';
import SocialLinks from './SocialLinks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer>
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
