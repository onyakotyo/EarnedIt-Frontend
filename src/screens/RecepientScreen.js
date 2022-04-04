import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { useDispatch} from 'react-redux'
import { saveRecipientAddress} from '../actions/orderActions'

const RecepientScreen = ({history, location}) => {

     const order = useSelector((state) => state.order)
  const { recipientAddress } = order

    const [firstName, setFirstname] = useState(recipientAddress.firstName)
    const [middleName, setMiddlename] = useState(recipientAddress.middleName)
    const [lastName, setLastname] = useState(recipientAddress.lastName)
    const [email, setEmail] = useState(recipientAddress.email)
    const [mobile, setMobile] = useState(recipientAddress.mobile)
    const [address, setAddress] = useState(recipientAddress.address)
    const [town, setTown] = useState(recipientAddress.town)
    const [country, setCountry] = useState(recipientAddress.country)
    const [reason, setReason] = useState(recipientAddress.reason)

    

    // const [firstName, setFirstname] = useState()
    // const [middleName, setMiddlename] = useState()
    // const [lastName, setLastname] = useState()
    // const [email, setEmail] = useState()
    // const [mobile, setMobile] = useState()
    // const [address, setAddress] = useState()
    // const [town, setTown] = useState()
    // const [country, setCountry] = useState()
    // const [reason, setReason] = useState()

    // console.log('RECPT',recipientAddress)
    // console.log('Firstname',firstName)



    const userLogin = useSelector(state => state.userLogin)


    const { loading, error, userInfo} = userLogin

    //const redirect = location.search ? location.search.split('=')[1] : '/'

    //console.log('REDIRECT', redirect)

      const dispatch = useDispatch()

    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        } 
    }, [history, userInfo])

    const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveRecipientAddress({ firstName, middleName, lastName, address, town, country, mobile, email, reason }))
    history.push('/orderSummary')
  }

    return (
        <>
            <FormContainer>


               {error && <Message variant='danger'>{error}</Message>}
               {loading && <Loader />}
                   
                <h5 className='text-center py-3 m-3'>Money Recipient</h5>
                 
                     

                <Form  onSubmit={submitHandler}> 
                <Form.Group className='text-center'>

                    <LinkContainer to='/savedrecipients' >
                        <Button variant="dark" size="md">
                            Add from list of saved recipients
                        </Button>
                    </LinkContainer>

                    <h3 className='text-center py-3 m-3'>OR</h3>
                     
                    <h5 className='text-center py-2'>Fill in Form below</h5>
  
                    <Form.Control 
                        type="text" 
                        placeholder="First name"  
                        value={firstName}
                        required
                        onChange={(e) => setFirstname(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="Middle name" 
                        value={middleName}
                        onChange={(e) => setMiddlename(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="Last name" 
                        value={lastName}
                        required
                        onChange={(e) => setLastname(e.target.value)}
                        />
                    <br />
                     <Form.Control 
                        type="text" 
                        placeholder="address" 
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="City/Town" 
                        value={town}
                        required
                        onChange={(e) => setTown(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="country" 
                        value={country}
                        required
                        onChange={(e) => setCountry(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="Mobile Number" 
                        value={mobile}
                        required
                        onChange={(e) => setMobile(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="Email Address" 
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="Reason for Sending" 
                        value={reason}
                        required
                        onChange={(e) => setReason(e.target.value)}
                        />
                    <br />

                     <Button type='submit' variant='primary'>
                            Continue
                    </Button>
  
                </Form.Group>
                </Form>  
            </FormContainer>
            
        </>
    )
}

export default RecepientScreen

