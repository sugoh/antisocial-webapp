import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {

    render() {
        return (
            <about id="about">
                <main role="main" className="about">
                    <section className="h-100">
                        <section className="col col-text">
                            <section id="about-text-wrapper">
                                <h2 className="font-light align-header-center">Crush your power networking game</h2>
                                <p className="font-light wordy-paragraph">We built Superpotato as a <em>simple but powerful</em> personal assistant to help you make sense of your exploding social network.</p>
                                <p className="font-light wordy-paragraph">Superpotato integrates with email, sms, and chat apps and consolidates your contacts into one place. More than just the usual birthday reminder, the Superpotato A.I. keeps track of all your relationships and notifies you when it seems like you’re about to lose touch with family, friends, or business associates. </p>
                                <p className="font-light wordy-paragraph">With Superpotato keeping your relationships tight and healthy, you’ll finally have the time to chill out and be a true potato.</p>
                                <img className="dance-dance-potato" alt="winking potato" src={process.env.PUBLIC_URL + "/img/yay_potato.png"} />
                            </section>
                        </section>
                        <section className="col col-img">
                            <img className="img-right" alt="two friends bonding over beer" src={process.env.PUBLIC_URL + "/img/slanted-women-small.png"} />
                        </section>
                    </section>
                </main>
            </about>
        )
    }
}
export default About;