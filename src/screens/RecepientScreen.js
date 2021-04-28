import React from 'react'
import {Form, Container, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const RecepientScreen = () => {
    return (
        <>
            <Container>

               
                   
            <h5 className='text-center py-3 m-3'>Money Recipient</h5>
                 
                     

                    
                <Form.Group className='text-center'>

                    <LinkContainer to='/savedrecipients' >
                        <Button variant="dark" size="md">
                            Add from list of saved recipients
                        </Button>
                    </LinkContainer>

                    <h3 className='text-center py-3 m-3'>OR</h3>
                     
                    <h5 className='text-center py-2'>Fill in Form below</h5>
  
                    <Form.Control type="text" placeholder="First name" />
                    <br />
                    <Form.Control type="text" placeholder="Middle name" />
                    <br />
                    <Form.Control type="text" placeholder="Last name" />
                    <br />
                    <Form.Control type="text" placeholder="City/Town" />
                    <br />
                    <Form.Control type="text" placeholder="Mobile Number" />
                    <br />
                    <Form.Control type="text" placeholder="Email Address" />
                    <br />
                    <Form.Control type="text" placeholder="Reason for Sending" />
                    <br />
  
                </Form.Group>
            </Container>
            
        </>
    )
}

export default RecepientScreen

