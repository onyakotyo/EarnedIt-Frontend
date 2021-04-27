import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer className="text-center py-5">
            <Container>
                <Row>
                    <Col className='rext-center-py3'>
                        Copyright &copy; Earnit
                    </Col>
                </Row>
            </Container>
        </footer>
        
    )
}

export default Footer
