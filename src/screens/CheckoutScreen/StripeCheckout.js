import React, {useState} from 'react'
import {  useStripe } from '@stripe/react-stripe-js'
import { useSelector } from 'react-redux'
import { fetchFromAPI }  from './StripeHelper'
import {Button, Form } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'
//import Stripe from 'stripe'
//import { LinkContainer } from 'react-router-bootstrap'


const StripeCheckout = () => {

  

      const stripe = useStripe()

    const [email, setEmail] = useState('')

    const order  = useSelector((state) => state.order)


   //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }


    order.shippingAmount = addDecimals(order.sendAmount.fromAmount * 0.10, 0)

  order.totalAmount = (
    Number(order.sendAmount.fromAmount) +
    Number(order.shippingAmount )
    ).toFixed(2)

    const transactionTotals = []

    //console.log('Totals', transactionTotals)

    transactionTotals.push(order.totalAmount)


    const userLogin = useSelector(state => state.userLogin)


    const { loading, error, userInfo} = userLogin


    const checkoutHandler = async (e) => {
        e.preventDefault()
       
        const line_items = transactionTotals.map(item => {
         
            return {
                quantity: 1,
                price_data: {
                    currency:'usd',
                    unit_amount: item * 100,
                    product_data: {
                        name: 'Money transfer',
                        description: 'Money will be transfered immediately and ready for collection',
                        //images: [item.imageUrl]
                    }
                }
            }
        })

       

        const response = await fetchFromAPI('create-checkout-session', {
             body: { line_items, customer_email: email },
            });




        const { sessionId } = response;

         

        const { error } = await stripe.redirectToCheckout({
             sessionId
            });

         if(error) {
            console.log(error);
            }


         
        }

    return (
        <>
            <FormContainer>


               {error && <Message variant='danger'>{error}</Message>}
               {loading && <Loader />}
                   
                <h4 className='text-center py-3 m-3'>Please Checkout Below</h4>
                 
                     

                <Form  onSubmit={checkoutHandler}> 
                <Form.Group className='text-center'>
  
                    <Form.Control 
                        type="email" 
                        placeholder="Email"  
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <br />
    
                    <Button type='submit' variant='primary'>
                            Checkout
                    </Button>
  
                </Form.Group>
                </Form>  
            </FormContainer>
            </>
    )
}

export default StripeCheckout


