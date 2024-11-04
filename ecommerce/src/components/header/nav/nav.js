import React, { useState } from 'react';
import './nav.css';
import GridViewIcon from '@mui/icons-material/GridView';
import PhoneIcon from '@mui/icons-material/Phone';

const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="dropdown" onClick={toggleDropdown}>
          <button className="dropbtn">
            <GridViewIcon className="grid-icon" />
            Browse Categories
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content" onMouseLeave={closeDropdown}>
              <a href="#electronics">Electronics</a>
              <a href="#fashion">Fashion</a>
              <a href="#books">Books</a>
              <a href="#home-appliances">Home Appliances</a>
              <a href="#sports">Sports</a>
            </div>
          )}
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#fashion">Fashion</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="contact-info">
          <PhoneIcon className="phone-icon" />
          <div>
            <span className="phone-number">00000-11111</span>
            <div className="support-text">24/7 Support Center</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
