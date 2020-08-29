import React from 'react';
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="header">
            <a href="#"><img alt="logo" src=""></img></a>
            <a href="#">Home</a>
            <a href="#about">O mnie</a>
            <a href="#specs">Specjalizacje</a>
            <a href="#clients">Klienci</a>
            <a href="#contact">Kontakt</a>
        </div>
    );
}

export default Header;