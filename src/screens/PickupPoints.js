import React, {useEffect, useState} from 'react'
import {  Modal, Button, Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'


const PickupPoints = ({history}) => {

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

    useEffect(() => {
    if (!userInfo ) {
       history.push('/login')
    } 
  }, [history, userInfo])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   useEffect(() => {
         handleShow()
      }, [])

   


  return (
  
    <>

     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title variant="dark" >Cash PickUp Locations Zimbabwe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="text-center">
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <i className ='fas fa-globe-africa fa-lg mt-4 mb-1'></i>
                <Card.Body>
                    <Card.Title>Money Collection Location</Card.Title>
                    <Card.Text>
                        Please see below list of cash pick up locations in different towns in Zimbabwe.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>SPARE SHOP GLENDALE</ListGroupItem>
                    <ListGroupItem>SPARE SHOP BINDURA</ListGroupItem>
                    <ListGroupItem>SPARE SHOP CHITUNGWIZA</ListGroupItem>
                    <ListGroupItem>NMZ BANK 1st STREET HARARE</ListGroupItem>
                    <ListGroupItem>BARCLAYS BANK MUTARE </ListGroupItem>
                    <ListGroupItem>ZB BANK AVONDALE</ListGroupItem>
                    <ListGroupItem>CBZ TAKAWIRA STREET</ListGroupItem>
                    <ListGroupItem>SPARE SHOP GWERU</ListGroupItem>
                    <ListGroupItem>SPARE SHOP GUTU</ListGroupItem>
                    <ListGroupItem>SPARE SHOP CHIREDZI</ListGroupItem>
                    <ListGroupItem>SPARE SHOP GOKWE</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
            </Card>
        
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>

      </>

      )

}

export default PickupPoints

