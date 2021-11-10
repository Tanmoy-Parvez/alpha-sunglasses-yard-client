import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
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
                            <Link to="/login">Login</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/dashboard">Dashboard</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;