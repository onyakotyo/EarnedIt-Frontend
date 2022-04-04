import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardGroup, Button  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { createOrder } from '../../actions/orderActions'

const Success = ({history, location}) => {


  //const { clearCart, cartItems } = useContext(CartContext);
//   useEffect(() => {
//     if (cartItems.length !==0) { clearCart() }
//   }, [clearCart, cartItems]);


// const [collectionNumber, setCollectionNumber] = useState('0')

// const min = 10000

// const max = 1000000

// const rand = min + Math.random() * (max - min)

// useEffect(() => {
//     setCollectionNumber(collectionNumber + rand)
// }, [collectionNumber, rand])



//console.log(collectionNumber)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  

  useEffect(() => {
    if (!userInfo ) {
       history.push('/login')
    } 
  }, [history, userInfo])


 const dispatch = useDispatch()

  const order = useSelector((state) => state.order)

   //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  order.shippingAmount = addDecimals(order.sendAmount.fromAmount * 0.10, 0)

  //Total amount to pay ie money to send + charge/commission(shipping amount) for the transaction
  order.totalAmount = (
    Number(order.sendAmount.fromAmount) +
    Number(order.shippingAmount )
    ).toFixed(2)

  order.sendAmount.fromAmount = Number(order.sendAmount.fromAmount)

  order.sendAmount.toAmount = Number(order.sendAmount.toAmount).toFixed(2)
    


useEffect (() => {

      
              dispatch(createOrder({
                senderEmail: userInfo.email,
                isPaid: true,
                orderAmount: order.sendAmount,
                shippingAmount: order.shippingAmount, 
                recipientAddress: order.recipientAddress,
                totalAmount: order.totalAmount, 
                exchangeRate: order.exchangeRate,
                sendCountry: order.sendCountry,
                collectionMethod: order.collectionMethod.collectionMethod
            }))
  
    
  

  },[
    location, 
    dispatch,
    userInfo.email,
    order.sendAmount, 
    order.shippingAmount, 
    order.recipientAddress, 
    order.totalAmount,
    order.exchangeRate,
    order.sendCountry,
    order.collectionMethod.collectionMethod
  ])



  return (
    
    <>
    <CardGroup>
                
                <Card className="text-center">
                    <Card.Header as="h4">Transaction Successful</Card.Header>
                
                    <i className="fas fa-hand-holding-usd fa-lg py-3" ></i>
                    <Card.Body>
                    <Card.Title>Thank you for your order</Card.Title>
                    <Card.Text>
                        We are currently processing your order and 
                        will send you a confirmation email shortly
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <LinkContainer to='/send'>
                        <Button variant="dark">Send another money transfer</Button>
                    </LinkContainer>
                    
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
  );
}

export default withRouter(Success);