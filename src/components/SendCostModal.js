import React, { useEffect, useState } from 'react';
import { Modal, Button  } from 'react-bootstrap'
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
         <p>Send amount</p> GDP
         <p>Exchange rate</p> 1GBP = 1.34USD
         <p>Fee</p>GDP
         <p>Total amount to Pay</p>GBP

         <p>Receiver gets</p>USD
        
         
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

