import React from 'react';
import '../../styles/Contact.css';
import FormMail from './FormMail';

const Contact = () => {
    return (
        <section id="contact">
            <h3>Kontakt<br /></h3>
            <div className="contactBox">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.4422541591!2d18.996752615723974!3d50.24632387944768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce5dd5c40ba7%3A0xfb98835128263e5f!2sPi%C4%99kna%2043%2C%2040-592%20Katowice!5e0!3m2!1spl!2spl!4v1598700710539!5m2!1spl!2spl" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="contactDesc">
                    <h2>Dane kontaktowe</h2>
                    <br /><br /><br />
                    <i class="fas fa-map-marker-alt"></i>
                            Kancelaria Radcy Prawnego<br />
                            ul. Piękna 43/15<br />
                            40-641 Katowice<br />
                    <br />
                    <i class="far fa-envelope"></i>kancelaria@home.pl<br />
                    <br />
                    <i class="fas fa-mobile-alt"></i> 790 444 127
                    </div>
            </div>
            {<FormMail />}
        </section>
    );
}

export default Contact;