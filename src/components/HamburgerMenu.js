// HamburgerMenu.js
import React, { useState } from 'react';
import './HamburgerMenu.css';


function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="bar"></div>
     
      <div className="bar"></div>
      <div className="bar"></div>
      {isOpen && ( // Show menu items only when the menu is open
        <div className="menu-items">
          <a href="/home">Home</a>
          <a href="/workout">Workout</a>
          <a href="/profile">Profile</a>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
