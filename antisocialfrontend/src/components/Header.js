import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navlink from './Nav.js';
import CTA from './CTA.js';

class Header extends Component {

    render() {
        return (
            <div>
                <header>
                    <Navlink />
                    <main role="main">
                        <div className="hero container h-100 align-items-center">
                                <section className="col col-text">
                                    <h1 className="col-12 text-left display-linebreak">
                                        Better friendships,
                                    </h1>
                                    <h1 className="col-12 text-left display-linebreak">
                                        stress-free.
                                    </h1>
                                    <section>
                                        <h3 className="text-left display-linebreak subtitle">
                                            Superpotato is a personal assistant that helps you remember, manage, and grow your social network.
                                        </h3>
                                        <h3 className="text-left display-linebreak subtitle">
                                            Stop messing with spreadsheets and chillax like a real potato.
                                        </h3>
                                    </section>
                                    <CTA />
                                </section>
                                <section className="col col-img">
                                    <img className="IphoneXMock" alt="profile" src={process.env.PUBLIC_URL + "/img/landing_mock.png"} />
                                </section>
                        </div>

                    </main>

                </header>
            </div>
        )
    }

}
export default Header;