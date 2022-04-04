import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux' 
import { Modal, Button, ListGroup, Row, Col } from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'


const SendCostModal = (props) => {

  const order = useSelector((state) => state.order)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   useEffect(() => {
         handleShow()
      }, [])



   //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }


    order.shippingAmount = addDecimals(order.sendAmount.fromAmount * 0.10, 0)

  order.totalAmount = (
    Number(order.sendAmount.fromAmount) +
    Number(order.shippingAmount )
    ).toFixed(2)


    

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title variant="dark" >Charges Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row className='py-2'>
                  <Col>Send amount</Col>
                  <Col>€{order.sendAmount.fromAmount}</Col>
              </Row>
              
             
              <Row>
                  <Col>Exchange Rate</Col>
                  <Col> € 1 = $ {order.sendAmount.exchangeRate} </Col>
              </Row>

              <Row className='py-2'>
                  <Col>Fee</Col>
                  <Col>${order.shippingAmount}</Col>
              </Row>
              
              <Row className='py-2'>
                  <Col>Total amount to pay</Col>
                  <Col>${order.totalAmount}</Col>
              </Row>
              <Row className='py-2'>
                  <Col>Receiver gets</Col>
                  <Col>$ {order.sendAmount.toAmount}</Col>
              </Row>
            </ListGroup.Item>

          </ListGroup>
        
       
        
        
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Understood
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SendCostModal

