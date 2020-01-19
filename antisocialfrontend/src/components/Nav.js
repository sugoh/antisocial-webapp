import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CTA from './CTA.js';

class NavLink extends Component {

    render() {
        return (
            <div>
                <Navbar className="bgdark green " variant="dark">
                    <Navbar.Brand className="text-success" href="#home"> SUPERPOTATO </Navbar.Brand>
                    <Nav className="navbar-collapse collapse justify-content-end">
                        <Nav.Link className="text-success" href="#home">about</Nav.Link>
                        <Nav.Link className="text-success" > <CTA />  </Nav.Link>
                    </Nav>
                </Navbar>

            </div >
        )
    }

}
export default NavLink;