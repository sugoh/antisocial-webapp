import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap'
import SignUp from './SignUp.js';

class Header extends Component {

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
            <hero>
                <main role="main">
                    <section className="hero jumbotron jumbotron-fluid bgdark">
                        <section className="container">
                            <section className="col col-text">
                                <h1 className="display-4">
                                    Stop losing touch with friends.
                                </h1>
                                <p className="lead">
                                    The most successful people put their relationships first.
                                </p>
                                <p className="lead">
                                    Superpotato is a personal assistant that helps you remember, manage, and grow your own social network.
                                </p>
                                <p className="lead">
                                    Stop messing with spreadsheets and chillax like a boss potato.
                                </p>

                                <div className="popUp">
                                    <button type="button" className="btn btn-primary" variant="success" onClick={() => { this.handleModal() }}>Get early access for free</button>
                                    <Modal show={this.state.show} onHide={() => this.handleModal()}>
                                        <Modal.Header closeButton > </Modal.Header>
                                        <Modal.Body>
                                            <SignUp />
                                        </Modal.Body>
                                        <Modal.Footer>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </section>
                            <section className="col col-img">
                                <img className="IphoneXMock" alt="app mockup" src={process.env.PUBLIC_URL + "/img/landing_mock.png"} />
                            </section>
                        </section>
                    </section>
                </main>
            </hero>
        )
    }

}
export default Header;
