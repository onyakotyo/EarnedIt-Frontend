import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { useDispatch} from 'react-redux'
import { payOutOrder} from '../actions/orderActions'

const PayOut = ({ match, history}) => {


     const orderId = match.params.id

      

      //const orderList = useSelector(state => state.orderList)

    


    const [payoutSignature, setPayoutSignature] = useState('')
    const [clientIdCheck, setClientIdCheck] = useState('yes')
    const [ clientNameCheck, setClientNameCheck] = useState('yes')
    const [collectionNumber,  setCollectionNumber] = useState('yes')


    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo} = userLogin
    
    const dispatch = useDispatch()

     useEffect(() => {
        if(!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        } 
    }, [history, userInfo])

     const submitHandler = (e, payoutResult) => {
          e.preventDefault()
        if(window.confirm('Are you sure, you have you filled in all the fields correctly?')) {
            dispatch(payOutOrder(
                orderId, 
                payoutResult = {
                    email: userInfo.email,
                    name: userInfo.name,
                    payoutSignature: payoutSignature, 
                    clientNameCheck: clientNameCheck, 
                    clientIdCheck: clientIdCheck,
                    collectionNumber: collectionNumber
                }
            ))
            history.push('/orderlist')
        }
        
     }


    return (
        <>
             <FormContainer>


                {error && <Message variant='danger'>{error}</Message>}
               {loading && <Loader />} 
                   
                <h5 className='text-center py-3 m-3'>Client Money Payout</h5>
                 
                     

                <Form  onSubmit={submitHandler}> 
                <Form.Group >

                 
                     
                    <h5 className='text-center py-2'>Please fill in the form below accurately</h5>
  
                    <Form.Control 
                        className='text-center'
                        type="text" 
                        placeholder="Enter Your Name"  
                        value={payoutSignature}
                        required
                        onChange={(e) => setPayoutSignature(e.target.value)}
                        />
                    <br />

                    <Form.Check
                            type= 'radio'
                            label='Client ID Checked'
                            id='clientId'
                            name='clientIdCheck'
                            value='Yes'
                            required
                            //checked
                            Change={(e) => setClientIdCheck(e.target.value)}
                        > 
                    </Form.Check>
                    <br />
                    <Form.Check
                            type= 'radio'
                            label='Client Name Checked'
                            id='clientName'
                            name='clientNameCheck'
                            value='Yes'
                            required
                            //checked
                            Change={(e) => setClientNameCheck(e.target.value)}
                        > 
                    </Form.Check>
                    <br />
                    <Form.Check
                            type= 'radio'
                            label='Collection Number Checked'
                            id='collection number'
                            name='collectionNumber'
                            value='Yes'
                            required
                            //checked
                            Change={(e) => setCollectionNumber(e.target.value)}
                        > 
                    </Form.Check>
                    <br />
                    
                        <Button type='submit' variant='dark' >
                            Continue
                        </Button>
                   
                     
  
                </Form.Group>
                </Form>  
            </FormContainer>
            
        </>
    )
}

export default PayOut
