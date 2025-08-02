import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="mainHeader">
      <nav className="navBar">
        <div className="logo">MyPortfolio</div>
        <ul className="navLinks">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
