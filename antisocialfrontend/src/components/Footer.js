import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {

    render() {
        return (
            <div>
                <about>
                    <main role="main">
                        <section className="keyFeatures container h-100 align-items-center">
                            <section>
                                <p>The Good Stuff</p>    
                                <ul>
                                    <li>FAQ</li>
                                    <li>Contact us</li>
                                    <li>Terms</li>
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