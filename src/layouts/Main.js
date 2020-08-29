import React from 'react';
import '../styles/Main.css';

const Main = () => {
    return (
        <div className="main">
            <section id="about">
                <div>
                    <img alt="Agnieszka Janda" src="" />
                </div>
                <div>
                    <span>O mnie</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum expedita veritatis in neque fugit, consequuntur, iste similique laboriosam quaerat eaque eveniet quos soluta illo doloremque tempora corrupti tenetur? Fuga!
                    </p>
                </div>
            </section>
            <section id="specs">
                <span>Specjalizacje</span>
                <div className="businessEntities">
                    <span><i class="fas fa-landmark"></i> Podmioty Gospodarcze</span>
                    <ul>
                        <li>Rejestracja podmiotów gospodarczych</li>
                        <li>Bieżąca obsługa prawna</li>
                        <li>Reprezentowanie przedsiębiorców przed sądami</li>
                        <li>Windykacja należności</li>
                        <li>Opinie prawne</li>
                        <li>Arbitraż krajowy i międzynarodowy</li>
                        <li>Udział w negocjacjach handlowych</li>
                    </ul>
                </div>
                <div className="dueDilligence">
                    <span><i class="fas fa-donate"></i> Due Dilligence</span>
                    <ul>
                        <li>Wielopłaszczyznowa analiza przedsiębiorstw</li>
                        <li>Analiza prawna, finansowa, podatkowa</li>
                        <li>Określenie istniejącego i potencjalnego ryzyka związanego z planowaną transakcją kapitałową</li>
                        <li>Fuzje, przejęcia, łączenie spółek</li>
                        <li>Obsługa prawna restrukturyzacji przedsiębiorstw</li>
                    </ul>
                </div>
            </section>
            <section id="clients">
                <span>Zaufali nam</span>
            </section>
            <section id="contact">
                <span>Kontakt</span>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.4422541591!2d18.996752615723974!3d50.24632387944768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce5dd5c40ba7%3A0xfb98835128263e5f!2sPi%C4%99kna%2043%2C%2040-592%20Katowice!5e0!3m2!1spl!2spl!4v1598700710539!5m2!1spl!2spl" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div>
                    Dane kontaktowe:<br />
                        Kancelaria Radcy Prawnego<br />
                        ul. Piękna 43/15<br />
                        40-641 Katowice<br />
                    <br />
                        e-mail:kancelaria@home.pl<br />
                    <br />
                        tel.: 790 444 127
                </div>
            </section>
        </div >
    );
}

export default Main;