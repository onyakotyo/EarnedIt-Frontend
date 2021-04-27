import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Route } from 'react-router-dom'
import {Navbar, Nav, Container, Dropdown  } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>EarnIt</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/send">  
                        <Nav.Link>
                            <i className="fas fa-paper-plane"></i> SEND MONEY
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">  
                        <Nav.Link>
                            <i className= 'fas fa-shopping-cart'></i> CART
                        </Nav.Link>
                    </LinkContainer>
                    
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </header>
    )
}

export default Header
