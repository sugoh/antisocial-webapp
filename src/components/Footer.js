import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div>
                <about>
                    <main role="main">
                        <section className="keyFeatures container h-100 align-items-center">
                            <section>
                                <h3>The Good Stuff</h3>    
                                <ul>
                                    <li><a href={process.env.PUBLIC_URL + "/#"}>FAQ</a></li>
                                    <li>Contact us</li>
                                    <li><a href={process.env.PUBLIC_URL + "/files/Superpotato_terms_20200119.pdf"}>Terms</a></li>
                                </ul>
                            </section>
                            <p>&#169; 2020 bunch of friends</p>
                            <p>Image credits</p>
                        </section>
                    </main>
                </about>
            </div>
        )
    }
}
export default Footer;