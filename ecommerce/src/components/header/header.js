// Assuming you have combined logic for categories and locations in Selectdrop.js
import React, { useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/logo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import Selectdrop from '../selectdrop/selectdrop';
import Wishlist from '@mui/icons-material/FavoriteBorder';
import Cart from '@mui/icons-material/ShoppingCartOutlined';
import DownArrow from '@mui/icons-material/KeyboardArrowDown';
import LocationIcon from '@mui/icons-material/LocationOn';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Location');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const toggleLocationDropdown = () => {
    setLocationOpen(!isLocationOpen);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setLocationOpen(false);
  };

  return (
    <header>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-sm-2 logo-container'>
            <img src={Logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className='col-sm-9'>
            <div className='headerSearch'>
              <div className='search-container'>
                <div className='selectdrop-container' onClick={toggleDropdown}>
                  <span className='selectdrop'>
                    {selectedCategory}
                    <DownArrow className='down-arrow-icon' />
                  </span>
                  <Selectdrop isOpen={isDropdownOpen} onSelect={handleCategorySelect} />
                </div>

                <div className='search'>
                  <input type='text' placeholder="Search..." />
                  <SearchIcon className='search-icon' />
                </div>
              </div>

              {/* Location Input */}
              <div className='location'>
                <div className='locationsearch'>
                  <LocationIcon className='location-icon' />
                  <div className='selectdrop-container' onClick={toggleLocationDropdown}>
                    <span className='selectdrop'>
                      {selectedLocation}
                      <DownArrow className='down-arrow-icon' />
                    </span>
                    <Selectdrop isOpen={isLocationOpen} onSelect={handleLocationSelect} />
                  </div>
                </div>
              </div>

              <div className='header-actions'>
                <div className='wishlist'>
                  <Wishlist />
                  Wishlist
                </div>
                
                <div className='cart'>
                  <Cart />
                  Cart
                </div>

                <div className='signin'>
                  <button className='btn btn-primary'>Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
