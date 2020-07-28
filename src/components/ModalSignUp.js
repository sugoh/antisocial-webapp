import React, { Component } from 'react';
import SignUp from './SignUp.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import { Modal } from 'react-bootstrap';

class ModalSignUp extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            showConfirmation: false
        }
    }

    handleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleConfirmation() {
        this.setState({
            showModal: false,
            showConfirmation: !this.state.showConfirmation
        })
    }

    render() {
        return (
            <section className="popUp">
                <button type="button" className="btn btn-primary" variant="success" onClick={() => { this.handleModal() }}>Get early access for free</button>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <section className="modal-header-wrapper">
                            <h3 className="modal-title">Ready to feel the magic?</h3>
                            <h4 className="modal-subtitle">Sign up for early access today.</h4>
                        </section>
                        <SignUp onSuccess={() => this.handleConfirmation()}/>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showConfirmation} onHide={() => this.handleConfirmation()}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="confirmation-modal">
                        <section className="modal-header-wrapper">
                            <img className="icon" alt="thumbs up icon" src={process.env.PUBLIC_URL + "/img/thumb_up.png"} />
                            <h3 className="modal-title">You’re now on the waitlist!</h3>
                            <h4 className="modal-subtitle">We’ll email you when it’s your turn to register.</h4>
                        </section>
                    </Modal.Body>
                </Modal>
            </section>
        )
    }
}

export default ModalSignUp;