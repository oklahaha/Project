import React from 'react';
// import {NavbarBrand} from 'reactstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../css/App.css';
import logo from '../../logo.svg';

export default function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src= {logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav">
                    <NavDropdown title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/user/list">List User</NavDropdown.Item>
                        <NavDropdown.Item href="/user/card">User Card</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/test">Test</Nav.Link>
                    <Nav.Link href="/test2">Test2</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href="/login">Log In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    )
}