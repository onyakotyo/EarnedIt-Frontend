import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {  Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listMyOrders} from '../actions/orderActions'

const OrderMyListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading, error, orders } = orderListMy
  

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  console.log(orders)

  useEffect(() => {
    if (userInfo) {
      dispatch(listMyOrders())
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
              <th>RECIPIENT'S NAME</th>
              <th>COUNTRY</th>
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

                   {order && order.isCollected && order.collectedAt ? (
                    
                    order.collectedAt.substring(0, 10)
  
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}

                  {/* {order && order.isCollected ? (
                    // order.collectedAt.substring(0, 10)
                    <p className='variant'>2021-05-13</p>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )} */}
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

export default OrderMyListScreen