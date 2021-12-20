import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png'

const NavigationBar = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className="purple-bg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Alpha Sunglasses Yard
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-center nav-items">
                        <Nav.Link>
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/allProducts">Explore</Link>
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#reviews" className="hashLink">
                            Review
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#blog" className="hashLink">
                            Blog
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#about" className="hashLink">
                            About
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#contact" className="hashLink">
                            Contact
                        </Nav.Link>
                        {!user?.email ? <Nav.Link>
                            <Link to="/signIn">Login</Link>
                        </Nav.Link>
                            :
                            <Nav>
                                <Nav.Link>
                                    <Link to="/dashboard">Dashboard</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/" className="fw-bold">{user?.displayName}</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <button onClick={logOut} className="btn btn-outline-none p-0 text-white">
                                        <i className="fas fa-sign-out-alt"></i>  Logout
                                    </button>
                                </Nav.Link>
                            </Nav>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;