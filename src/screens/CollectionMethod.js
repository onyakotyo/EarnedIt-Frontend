import React, {useEffect, useState} from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { saveCollectionMethod } from '../actions/orderActions'

const CollectionMethod = ({history, location}) => {


    const [ collectionMethod, setCollectionMethod ] = useState('')

    const dispatch = useDispatch()

    console.log('FRONT COLLECTION', collectionMethod)


    const userLogin = useSelector(state => state.userLogin)

    


    const { loading, error, userInfo} = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(!userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    

    const submitHandler = (e) => {
        console.log('hi hi')
        e.preventDefault()
        dispatch(
            saveCollectionMethod({
                collectionMethod
            })
        )
    }

  
    

    return (
        <>
            <FormContainer>
                {error && <Message variant='danger'>{error}</Message>}
               {loading && <Loader />}
                <Form className='py-3'  onSubmit={submitHandler} >
                    <Form.Group controlId="collectMethod" className='text-center py-3'>
                                <Form.Label className='py-3' as='h5'>Choose Money Collection Method</Form.Label>
                                    <Form.Control 
                                        as="select"
                                        value={collectionMethod}
                                        onChange={(e) => setCollectionMethod(e.target.value)}
                                    >
                                        <option value='cashPickup'>Cash Pickup</option>
                                        <option value='bankDeposit'> Bank Deposit</option>
                                        <option value='mobileTransfer'>Mobile Money Transfer</option>
                                        <option value='airTime'>Airtime</option>
                                    </Form.Control>  
                            </Form.Group>
                    <Button
                    
                        type='submit'
                        variant='dark'
                      >
                        Continue
                      </Button>
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
                        <LinkContainer to='/collectionmethod/pickuplocations'>
                            <Button variant="dark">See Cash Pickup locations</Button>
                        </LinkContainer>
                        
                    </Card.Body>
                    </Card>

              
                    <LinkContainer className='py-3 mt-5' to='/recepient'>
                        <Button variant="dark" size="md" block>
                            Add Recepient
                        </Button>
                    </LinkContainer>
                        
                   
                  
            </FormContainer>
     
        </>
    )
}

export default CollectionMethod
