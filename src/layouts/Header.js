import React from 'react';
import '../styles/Header.css';
import AJ from '../img/AJ2.jpg';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" alt="logo" src={AJ}></img>
            <a href="#home">Home</a>
            <a href="#about">O mnie</a>
            <a href="#specs">Specjalizacje</a>
            <a href="#clients">Klienci</a>
            <a href="#contact">Kontakt</a>
        </div>
    );
}

export default Header;