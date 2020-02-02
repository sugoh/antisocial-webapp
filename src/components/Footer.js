import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import ModalSignUp from './ModalSignUp.js';

class Footer extends Component {

    render() {
        return (
            <footer>
                <main role="main" className="footer">
                    <section className="keyFeatures container h-100 align-items-center">
                        <section className="footer-CTA">
                            <h2>Ready to fix your social life?</h2>
                            <h3>Sign up for early access today.</h3>
                            <ModalSignUp />
                        </section>
                        <div className="line-break line-dark"></div>
                        <section className="footer-links">
                            <h3>The Good Stuff</h3>    
                            <ul>
                                <li><a href={process.env.PUBLIC_URL + "/#faq"}>FAQ</a></li>
                                <li><a href={process.env.PUBLIC_URL + "/files/Superpotato_terms_20200119.pdf"}>Terms</a></li>
                            </ul>
                            <p>&#169; 2020 bunch of friends</p>
                        </section>
                   </section>
                </main>
            </footer>
        )
    }
}
export default Footer;