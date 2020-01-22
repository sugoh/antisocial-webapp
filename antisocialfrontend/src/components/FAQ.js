import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class FAQ extends Component {

    render() {
        return (
            <div>
                <faq>
                    <main role="main" className="faq">
                        <section className="container h-100 align-items-center">
                            <section className="col col-text">
                            <h2 className="font-light">FAQ</h2>
                            </section>
                        </section>
                    </main>
                </faq>
            </div>
        )
    }
}
export default FAQ;