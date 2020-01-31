import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalSignUp from './ModalSignUp.js';

class NavLink extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <nav>
                <Navbar className="navbar-default" variant="dark">
                    <img
                        src={process.env.PUBLIC_URL + "/img/potato_logo.png"}
                        className="logo"
                        width="28"
                        height="49"
                        className="d-inline-block align-top"
                        alt="logo" />
                    <Navbar.Brand className="custom navbar-brand" href="#">superpotato</Navbar.Brand>
                    <Nav className="navbar-collapse collapse justify-content-end">
                        <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                        <ModalSignUp />
                    </Nav>
                </Navbar>
            </nav>
        )
    }

}
export default NavLink;