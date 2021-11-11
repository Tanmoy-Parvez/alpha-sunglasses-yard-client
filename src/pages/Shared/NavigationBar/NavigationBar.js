import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                            <Link to="/signIn">Login</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/dashboard">Dashboard</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/" className="text-white">{user?.displayName}</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <button onClick={logOut} className="btn btn-danger">Logout</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;