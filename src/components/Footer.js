import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer>
                <main role="main" className="footer">
                    <section className="keyFeatures container h-100 align-items-center">
                        <section>
                            <h3>The Good Stuff</h3>    
                            <ul>
                                <li><a href={process.env.PUBLIC_URL + "/#faq"}>FAQ</a></li>
                                <li><a href={process.env.PUBLIC_URL + "/files/Superpotato_terms_20200119.pdf"}>Terms</a></li>
                            </ul>
                        </section>
                        <p>&#169; 2020 bunch of friends</p>
                    </section>
                </main>
            </footer>
        )
    }
}
export default Footer;