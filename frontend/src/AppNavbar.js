import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import {Link} from 'react-router-dom';
import logo from './logo.svg';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">
                <img
                    alt=""
                    src= {logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                </NavbarBrand>
            </Navbar>
        )
    }
}