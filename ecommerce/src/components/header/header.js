import React, { useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/logo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import Selectdrop from '../selectdrop/selectdrop';
import Wishlist from '@mui/icons-material/FavoriteBorder';
import Cart from '@mui/icons-material/ShoppingCartOutlined';
import DownArrow from '@mui/icons-material/KeyboardArrowDown';
import LocationIcon from '@mui/icons-material/LocationOn';
import Nav from './nav/nav';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useCart } from '../../pages/cart/cartcontext'; // Ensure the correct import path

function Header() {
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('Locations');

  // Use cart state and functions from CartContext, with fallback for cartItems
  const { cartItems = [], addToCart } = useCart(); // Default to empty array if cartItems is undefined

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
                  {/* <div className='wishlist'>
                    <Wishlist />
                    Wishlist
                  </div> */}

                  {/* Cart Icon with Dynamic Count */}
                  <div className='cart'>
                    <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
                      {/* Cart count will be displayed next to the cart icon */}
                      <div className='cart-icon'>
                        <Cart />
                        <span className='cart-count'></span>
                      </div>
                      Cart
                    </Link>
                  </div>

                  {/* Sign In Button */}
                  <div className='signin'>
                    <Link to="/login">
                      <button className='btn btn-primary'>Sign In</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </>
  );
}

export default Header;
