import React, { Component } from 'react';
import SignUp from './SignUp.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import { Modal } from 'react-bootstrap';

class ModalSignUp extends Component {

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
            <section className="popUp">
                <button type="button" className="btn btn-primary" variant="success" onClick={() => { this.handleModal() }}>Get early access for free</button>
                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <section className="modal-header-wrapper">
                            <h3 className="modal-title">Ready to feel the magic?</h3>
                            <h4 className="modal-subtitle">Sign up for early access today.</h4> 
                        </section>
                        <SignUp />
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </section>
        )
    }
}

export default ModalSignUp;