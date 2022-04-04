import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {  Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders} from '../actions/orderActions'



const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  console.log('COLLECTED',orders)

 

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])






  return (
    <>
      
    <h1 className="text-center py-3">TRANSACTIONS</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>SENDER EMAIL</th>
              <th>TOTAL TO SEND</th>
              <th>TOTAL SEND + FEE</th>
              <th>RECIPIENT RECEIVES</th>
              <th>RECIPIENT</th>
              <th>COUNTRY</th>
              <th>PAYOUT + SIGNATURE</th>
              <th>MONEY COLLECTED</th>
            
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.senderEmail}</td>
                
                <td>€{order.orderAmount.fromAmount}</td>
                <td>${order.totalAmount}</td>
                <td>${order.orderAmount.toAmount}</td>
                <td>{order.recipientAddress.firstName} {order.recipientAddress.lastName}</td>
                <td>{order.recipientAddress.country}</td>
                <td>
                  {order && order.isCollected && order.payoutResult ? (
                    <LinkContainer to={`/payout/${order._id}`}>
                    <Button variant='success' className='btn-sm'>
                      <i className='fas fa-hand-holding-usd '></i>
                    </Button>
                    </LinkContainer>
                  )
                  :
                  (
                    <LinkContainer to={`/payout/${order._id}`}>
                    <Button variant='danger' className='btn-sm'>
                      <i className='fas fa-hand-holding-usd '></i>
                    </Button>
                    </LinkContainer>
                  )
}

                {/* Display payout and signature */}
                <p>{order && order.isCollected && order.payoutResult ? (
                      
                      order.payoutResult.payoutSignature
                   ) 
                   : 
                   
                   (
                    null
                    )
                } 
                </p>
                  
                </td>
                <td>
                  
                  {order && order.isCollected && order.collectedAt ? (
                    //order.collectedAt 
                    
                    
                    order.collectedAt.substring(0, 10)


                    
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
               
                {/* <td>
                  {order && order.isPaid ? (
                    order.paidAt.substring(0, 10) 
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td> */}
                {/* <td>
                  {order && order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td> */}
                {/* <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td> */}
              </tr>
            ))}
          </tbody>

        </Table>
        
      )}
      

    </>
  )
      
}

export default OrderListScreen