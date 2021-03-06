import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalSignUp from './ModalSignUp.js';

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
                                    Superpotato is a personal assistant that helps you remember, manage, and grow your social network.
                                </p>
                                <p className="lead">
                                    Stop messing with spreadsheets and relax like a boss potato.
                                </p>
                                <ModalSignUp />
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
