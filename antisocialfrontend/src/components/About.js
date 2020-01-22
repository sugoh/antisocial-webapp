import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {

    render() {
        return (
            <about>
                <main role="main" className="about">
                    <section className="h-100">
                        <section className="col col-text align-items-center">
                            <h2 className="font-light">Crush your power networking game</h2>
                            <p className="font-light">We built Superpotato as a <em>simple but powerful</em> personal assistant to help you make sense of your exploding social network.</p>
                            <p className="font-light">Superpotato integrates with email, sms, and chat apps and consolidates your contacts into one place. More than just the usual birthday reminder, the Superpotato A.I. keeps track of all your relationships and notifies you when it seems like you’re about to lose touch with family, friends, or business associates. </p>
                            <p className="font-light">With Superpotato keeping your relationships tight and healthy, you’ll finally have the time to chill out and be a true potato.</p>
                        </section>
                        <section className="col col-img">
                            <img className="img-right" alt="profile" src={process.env.PUBLIC_URL + "/img/smiling_women.png"} />
                        </section>
                    </section>
                </main>
            </about>
        )
    }
}
export default About;