import React, { useState } from 'react';
import './nav.css';
import GridViewIcon from '@mui/icons-material/GridView';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import DownArrow from '@mui/icons-material/KeyboardArrowDown';

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
              <Link to="#electronics">Electronics</Link>
              <Link to="#fashion">Fashion</Link>
              <Link to="#books">Books</Link>
              <Link to="#home-appliances">Home Appliances</Link>
              <Link to="#sports">Sports</Link>
            </div>
          )}
        </div>
        <ul className="nav-links">
  <li><Link to="/">Home</Link></li> 
  <li className="dropdown-fashion">
    <Link to="/fashion">Fashion</Link>
    <DownArrow/>
    <ul className="dropdown-menu">
      <li><Link to="/men">Men</Link></li>
      <li><Link to="/women">Women</Link></li>
    </ul>
  </li>
  <li><Link to="/electronic">Electronic</Link></li> 
  <li><Link to="/jewelery">Jewellery</Link></li> 
  <li><Link to="/about">About</Link></li> 
  <li><Link to="/contact">Contact</Link></li>
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



