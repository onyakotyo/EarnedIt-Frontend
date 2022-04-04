import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
//import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox  from './SearchBox'


const Header = () => {



    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

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

                    { userInfo && userInfo.isAdmin ? (
                    <NavDropdown title= 'Admin'  id='adminmenu'>
                        <LinkContainer to='/orderMylist'>
                                  
                            <NavDropdown.Item>
                                <i className="fas fa-list"></i> My Transactions
                            </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/orderlist'>
                                  
                                <NavDropdown.Item>
                                <i className="fas fa-list"></i> All Transactions
                                </NavDropdown.Item>
                        </LinkContainer>
                         <LinkContainer to='/userlist'>
                                <NavDropdown.Item>
                                <i className="fas fa-users"></i> Users
                                </NavDropdown.Item>
                            </LinkContainer>

                          
                    </NavDropdown>   
                    ) 
                    
                    :
                    
                    userInfo ?
                    (
                        <LinkContainer to='/orderMylist'>
                                  
                            <Nav.Link>
                               
                              <i className="fas fa-list"></i>   My Transactions
                            </Nav.Link>
                        </LinkContainer>
                    )

                    : 

                    (
                        null
                    )
                            
                        
                    }
                    
                    { 
                    userInfo ? (
                        <NavDropdown title= { userInfo.name }  id='username'>
                            
                            <LinkContainer to='/profile'>
                                
                                <NavDropdown.Item> 
                                <i className="fas fa-user"></i> Profile
                                </NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={ logoutHandler }><i className="fas fa-sign-out-alt"></i>  Logout
                            </NavDropdown.Item>
                        </NavDropdown>   

                                        )
                    : 
                        <LinkContainer to="/login"> 
                            <Nav.Link>
                                <i className= 'fas fa-user' ></i> Sign In
                            </Nav.Link>
                        </LinkContainer>   

                    }                       
                        
                         
{/* 
                    {userInfo && userInfo.isAdmin && (
                        <NavDropdown title= 'Admin'  id='adminmenu'>
                            <LinkContainer to='/admin/userlist'>
                                <NavDropdown.Item>Users</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/productlist'>
                                <NavDropdown.Item>Products</NavDropdown.Item>
                            </LinkContainer>
                              <LinkContainer to='/admin/orderlist'>
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>
                            
                        </NavDropdown>   
                    )
                    }
                     */}
                    
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </header>
    )
}

export default Header
