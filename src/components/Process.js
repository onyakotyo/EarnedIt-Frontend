import React from 'react'
import { Card, CardGroup, Button  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Process = () => {
    return (
        <>
            <CardGroup>
                
                <Card className="text-center">
                <Card.Header as="h4">Send Money To Selected Destination</Card.Header>
                
                    <i className="fas fa-paper-plane fa-lg py-3" ></i>
                    <Card.Body>
                    
                    
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                 
                </Card>
                <Card className="text-center">
                    <Card.Header as="h4">Transaction Is Processed By Earnit</Card.Header>
              
                    <i className="fas fa-chalkboard-teacher fa-lg py-3"></i>
                    <Card.Body>
                    
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card className="text-center">
                    <Card.Header as="h4">Receiver Collects Money</Card.Header>
                
                    <i className="fas fa-hand-holding-usd fa-lg py-3" ></i>
                    <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <LinkContainer to='/send'>
                        <Button variant="dark">Send Money Now</Button>
                    </LinkContainer>
                    
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
    )
}

export default Process
