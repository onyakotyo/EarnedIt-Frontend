import React from 'react'
import { Container, Form, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CollectionMethod = () => {
    return (
        <>
            <Container>
                <Form className='py-3'>
                    <Form.Group controlId="collectionMethod" className='text-center py-3'>
                                <Form.Label className='py-3'>Choose Collection Method</Form.Label>
                                    <Form.Control as="select">
                                        <option>Cash Pickup</option>
                                        <option> Bank Deposit</option>
                                        <option>Mobile Money Transfer</option>
                                        <option>Airtime</option>
                                    </Form.Control>  
                            </Form.Group>
                    
                </Form>

                <Card >
                    <Card.Body >
                        <Card.Title className='py-3'>Cash Pickup</Card.Title>
                        
                        <Card.Text className='py-3'>
                            Cash is available to collect within minutes from :
                                - Any branch of NMB Bank, ZB Bank, CBZ, BancABC, POSB, Steward Bank
                        </Card.Text>
                          {/* <Card.Text> See Cash Pickup locations</Card.Text> */}
                        {/* <Card.Link href="#">See Cash Pickup locations</Card.Link> */}
                        <LinkContainer to='/locations'>
                            <Button variant="dark">See Cash Pickup locations</Button>
                        </LinkContainer>
                        
                    </Card.Body>
                    </Card>

              
                    <LinkContainer className='py-3 mt-5' to='/recepient'>
                        <Button variant="dark" size="md" block>
                            Add Recepient
                        </Button>
                    </LinkContainer>
                        
                   
                  
            </Container>
     
        </>
    )
}

export default CollectionMethod
