import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Features extends Component {

    render() {
        return (
                <features>
                    <main role="main" className="key-features">
                        <section className="container">
                            <section className="col col-text">
                                <h2 className="font-light">Super tools make life easier</h2>
                                <section className="cards">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="icon" alt="address book icon" src={process.env.PUBLIC_URL + "/img/icons/open_book.png"} />
                                            <h3 className="font-light">Unified address book</h3>
                                            <p className="font-light">All your email, sms, chat app contacts consolidated in one place.{"\n"}How convenient!</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="icon" alt="birthday celebration icon" src={process.env.PUBLIC_URL + "/img/icons/celebrate.png"} />
                                            <h3 className="font-light">Birthday reminders</h3>
                                            <p className="font-light">Well, not just birthdays but also Mother’s / Father’s day etc. Never get yelled at by your angry [x] again.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="icon" alt="friendly person icon" src={process.env.PUBLIC_URL + "/img/icons/handwave_woman.png"} />
                                            <h3 className="font-light">Friendship status check</h3>
                                            <p className="font-light">Our A.I. dynamically measures the strength of your relationships and reminds you to reach out when it thinks you’re losing touch with your contact.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="icon" alt="cocktail icon" src={process.env.PUBLIC_URL + "/img/icons/cocktail.png"} />
                                            <h3 className="font-light">Conversation hooks</h3>
                                            <p className="font-light">Unsure how to reconnect? Superpotato uses social media data to find potential conversation topics - your contact’s family, college, hobbies etc.</p>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </section>
                    </main>
                </features>
        )
    }
}
export default Features;