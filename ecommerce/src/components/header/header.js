import React, { useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/logo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import Selectdrop from '../selectdrop/selectdrop';
import Wishlist from '@mui/icons-material/FavoriteBorder';
import Cart from '@mui/icons-material/ShoppingCartOutlined';
import DownArrow from '@mui/icons-material/KeyboardArrowDown';
import LocationIcon from '@mui/icons-material/LocationOn';
import Slider from '../slider/slider';
import Nav from './nav/nav';

function Header() {
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('Locations');

  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
    setLocationDropdownOpen(false);
  };

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!isLocationDropdownOpen);
    setCategoryDropdownOpen(false); 
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCategoryDropdownOpen(false); 
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setLocationDropdownOpen(false); 
  };

  return (
    <>
      <header>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            {/* Logo Section */}
            <div className='col-sm-2 logo-container'>
              <img src={Logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className='col-sm-9'>
              <div className='headerSearch'>
                {/* Combined Categories Dropdown and Search Input */}
                <div className='search-container'>
                  {/* Categories Dropdown */}
                  <div className='selectdrop-container' onClick={toggleCategoryDropdown}>
                    <span className='selectdrop'>
                      {selectedCategory}
                      <DownArrow className='down-arrow-icon' />
                    </span>
                    <Selectdrop 
                      isOpen={isCategoryDropdownOpen} 
                      onSelect={handleCategorySelect} 
                      type="categories" 
                    />
                  </div>

                  {/* Search Box */}
                  <div className='search'>
                    <input type='text' placeholder="Search..." />
                    <SearchIcon className='search-icon' />
                  </div>
                </div>

                {/* Location Input */}
                <div className='location'>
                  <div className='locationsearch' onClick={toggleLocationDropdown}>
                    <LocationIcon className='location-icon' />
                    <span className='selectdrop'>
                      {selectedLocation}
                      <DownArrow className='down-arrow-icon' />
                    </span>
                    <Selectdrop 
                      isOpen={isLocationDropdownOpen} 
                      onSelect={handleLocationSelect} 
                      type="locations" // Set type to locations
                    />
                  </div>
                </div>

                {/* Wishlist and Cart */}
                <div className='header-actions'>
                  <div className='wishlist'>
                    <Wishlist />
                    Wishlist
                  </div>
                  
                  <div className='cart'>
                    <Cart />
                    Cart
                  </div>

                  {/* Sign In Button */}
                  <div className='signin'>
                    <button className='btn btn-primary'>Sign In</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nav/>
    </>
  );
}

export default Header;
