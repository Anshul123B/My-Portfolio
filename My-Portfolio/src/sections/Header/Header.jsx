import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import "./Header1.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="mainHeader">
      <div className="navBar">
        <div className="logo">My Portfolio</div>
        <button className="menu-button" onClick={handleMenuClick}>
          <FiMenu className="menu-icon" />
        </button>

        <ul className={`navLinks ${menuOpen ? 'show' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
