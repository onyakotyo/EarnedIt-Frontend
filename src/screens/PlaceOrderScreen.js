import React, { useEffect } from 'react'
//import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup,Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { createOrder } from '../actions/orderActions'
import { LinkContainer } from 'react-router-bootstrap'
//import { ORDER_CREATE_RESET } from '../constants/orderConstants'
//import { USER_DETAILS_RESET } from '../constants/userConstants'


const PlaceOrderScreen = ({ history, location}) => {



    const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const order = useSelector((state) => state.order)

   //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  order.shippingAmount = addDecimals(order.sendAmount.fromAmount * 0.10, 0)

  order.totalAmount = (
    Number(order.sendAmount.fromAmount) +
    Number(order.shippingAmount )
    ).toFixed(2)

  order.sendAmount.fromAmount = Number(order.sendAmount.fromAmount)

  order.sendAmount.toAmount = Number(order.sendAmount.toAmount).toFixed(2)
    
  

  const orderCreate =  useSelector(state => state.orderCreate)
  //const { placeorder, success, error } = orderCreate
   const { success, error } = orderCreate

  // useEffect(() => {
  //     if(success) {
  //         //history.push(`/order/${order._id}`)
  //         //history.push('/payment')
  //         console.log('Transaction: ',success)
  //       } 
  //       // eslint-disable-next-line
  //   }, [history,success])

     //const domainUrl = process.env.WEB_APP_URL

    //`${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`

  // const submitTransactionHandler = () => {
   
  //           dispatch(createOrder({
  //             orderAmount: order.sendAmount,
  //             shippingAmount: order.shippingAmount, 
  //             recipientAddress: order.recipientAddress,
  //             totalAmount: order.totalAmount, 
  //             exchangeRate: order.exchangeRate,
  //             sendCountry: order.sendCountry,
  //             collectionMethod: order.collectionMethod.collectionMethod
  //         }))
   
    
  // }

  // console.log('PlaceOrder-Location', location.pathname)

  // console.log(location.pathname === '/success/orderSummary')

  // const successCheckout = '/success/orderSummary' 

  
  useEffect(() => {
    if (!userInfo ) {
       history.push('/login')
    } 
  }, [history, userInfo])

    return (
      <>
          
        <Row>
                <Col md={5}>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Recipient's Address</h2>
                  
                  <>
                  <Row><Col>{order.recipientAddress.firstName} {order.recipientAddress.middleName} {' '} {order.recipientAddress.lastName},{' '}</Col></Row>
                  
                  
                  <Row>
                    <Col>{order.recipientAddress.address}, </Col>
                  </Row>
                  <Row>
                    <Col>{order.recipientAddress.town},{' '}</Col>
                  </Row>
                  <Row>
                    <Col>{order.recipientAddress.country}.{' '}</Col>
                  </Row>
                  <Row>
                    <Col> {order.recipientAddress.email}{' '}</Col>
                  </Row>
                  <Row>
                    <Col>{order.recipientAddress.phone}{' '}</Col>
                    </Row> 
                  <Row>
                    <Col>{order.recipientAddress.reason}</Col>
                  </Row>  
                  
                  </>
                    
                  
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Money Collection Method</h2>
                  {/* <>Method: </> */}
                  <Row>
                  <Col as='h6'>Method:</Col>
                    <Col>{order.collectionMethod.collectionMethod}</Col>
                  </Row>
                  
                </ListGroup.Item> 

                </ListGroup>
                </Col>

                <Col md={7}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Transaction Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Sending</Col>
                                    <Col>€{order.sendAmount.fromAmount}</Col>
                                </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Transaction Fee</Col>
                                    <Col>${order.shippingAmount}</Col>
                                </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Exchange Rate</Col>
                                    <Col> € 1 = $ {order.sendAmount.exchangeRate} </Col>
                                </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total Amount</Col>
                                    <Col>${order.totalAmount}</Col>
                                </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Your Receiver Gets</Col>
                                    <Col>$ {order.sendAmount.toAmount}</Col>
                                </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              
                                
                             
                              {/* <Button type='button' className='btn-block' disabled={order.cartItems === 0 } */}
                               <LinkContainer to='/checkout'>
                                  <Button type='button' className='btn-block' 
                                   > Continue 
                                  </Button>
                              </LinkContainer>

                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
      </Row>
    </>
  )


  
}

export default PlaceOrderScreen
