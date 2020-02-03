import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class FAQ extends Component {

    render() {
        return (
            <faq id="faq">
                <main role="main" className="standard-section faq">
                    <section className="container">
                        <h2 className="font-light align-header-center">Frequently Asked Questions</h2>
                        <section className="card">
                            <section className="card-body q">
                                <h2 className="faq-indicator q">Q.</h2>
                                <h3 className="font-light card-title">Will you steal / sell / transfer my data?</h3>
                            </section>
                            <section className="card-body a">
                                <h2 className="faq-indicator a">A.</h2>
                                <p className="font-light card-text">
                                Unlike some other tech companies, you're our customer, not our product! We don't sell your data to third parties. We request permission to access your chat apps and communication logs only to help you organize your contacts / sms / chat / call / email data. Furthermore, you can individually select what information you wish to share with us within the app. After our beta period ends, Superpotato will cost users $1.99 /month.
                                </p>
                            </section>
                        </section>
                        <div className="line-break line-dark"></div>
                        <section className="card">
                            <section className="card-body q">
                                <h2 className="faq-indicator q">Q.</h2>
                                <h3 className="font-light card-title">How is Superpotato free?</h3>
                            </section>
                            <section className="card-body a">
                                <h2 className="faq-indicator a">A.</h2>
                                <p className="font-light card-text">
                                It's only free during our early access period. Subsequently, Superpotato will cost $1.99 /month. We hope you'll love it and stay!
                                </p>
                            </section>
                        </section>
                        <div className="line-break line-dark"></div>
                        <section className="card">
                            <section className="card-body q">
                                <h2 className="faq-indicator q">Q.</h2>
                                <h3 className="font-light card-title">How can I change my privacy settings on the app?</h3>
                            </section>
                            <section className="card-body a">
                                <h2 className="faq-indicator a">A.</h2>
                                <p className="font-light card-text">
                                    Open the app and select the hamburger icon in the top left corner. Select "Privacy". You can toggle app permissions and choose what data to share with us here.
                                </p>
                            </section>
                        </section>
                        <div className="line-break line-dark"></div>
                        <section className="card">
                            <section className="card-body q">
                                <h2 className="faq-indicator q">Q.</h2>
                                <h3 className="font-light card-title">Who made Superpotato?</h3>
                            </section>
                            <section className="card-body a">
                                <h2 className="faq-indicator a">A.</h2>
                                <p className="font-light card-text">
                                    A group of friends spanning both ends of the globe! We're a diverse bunch - power networkers, super introverts, and somewhere in between. We all felt overwhelmed by social media and having to keep in touch with faraway friends, so we decided to build Superpotato to help others who feel the same.
                                </p>
                            </section>
                        </section>
                    </section>
                </main>
            </faq>
        )
    }
}
export default FAQ;
