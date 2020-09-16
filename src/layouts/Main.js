import React from 'react';
import '../styles/Main.css';
import Home from './components/Home';
import About from './components/About';
import Specs from './components/Specs';
import Clients from './components/Clients';
import Contact from './components/Contact';

const Main = () => {
    return (
        <div className="main">
            {<Home />}
            {<About />}
            {<Specs />}
            {<Clients />}
            {<Contact />}
        </div >
    );
}

export default Main;