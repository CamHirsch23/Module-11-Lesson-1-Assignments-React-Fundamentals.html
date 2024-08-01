// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="background.jpg" alt="Background" className="header-background" />
      <h1 className="header-title">Your Name</h1>
    </header>
  );
};

export default Header;
