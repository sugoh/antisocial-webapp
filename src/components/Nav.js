import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Modal } from 'react-bootstrap'
import SignUp from './SignUp.js';

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
                        alt="logo"/>
                    <Navbar.Brand className="custom navbar-brand" href="#">superpotato</Navbar.Brand>
                    <Nav className="navbar-collapse collapse justify-content-end">
                        <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                        <div className="popUp">
                            <button className="btn btn-primary" variant="success" type="button" onClick={() => { this.handleModal() }}>Get early access</button>
                            <Modal show={this.state.show} onHide={() => this.handleModal()}>
                                <Modal.Header closeButton > Head Part</Modal.Header>
                                <Modal.Body>
                                    <SignUp />
                                </Modal.Body>
                                <Modal.Footer>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Nav>
                </Navbar>
            </nav>
        )
    }

}
export default NavLink;