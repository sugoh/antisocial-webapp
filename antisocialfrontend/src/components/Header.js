import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {

    render() {
        return (
            <hero>
                <main role="main">
                    <section className="hero jumbotron jumbotron-fluid bgdark">
                        <section className="container">
                            <section className="col col-text">
                                <h1 className="display-4">
                                    Better friendships,
                                </h1>
                                <h1 className="display-4">
                                    stress-free.
                                </h1>
                                <p className="lead">
                                    Superpotato is a personal assistant that helps you remember, manage, and grow your social network. 
                                </p>
                                <p className="lead">
                                    Stop messing with spreadsheets and chillax like a real potato.
                                </p>
                                <button type="button" class="btn btn-primary">Get early access for free</button>
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