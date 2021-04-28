import React, { useEffect, useState } from 'react';
import { Modal, Button, ListGroup, Row, Col } from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'


const SendCostModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   useEffect(() => {
         handleShow()
      }, [])

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
                  <Col>200 GDP</Col>
              </Row>
              <Row className='py-2'>
                  <Col>Exchange rate</Col>
                  <Col>1 GBP = 1.34 USD</Col>
              
              </Row>
              <Row className='py-2'>
                  <Col>Fee</Col>
                  <Col>5.50 GBP</Col>
              </Row>
              
              <Row className='py-2'>
                  <Col>Total amount to pay</Col>
                  <Col>205.50 GBP</Col>
              </Row>
              <Row className='py-2'>
                  <Col>Receiver gets</Col>
                  <Col>260 USD</Col>
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

