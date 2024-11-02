import React, { useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/logo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import Selectdrop from '../selectdrop/selectdrop';
import Wishlist from '@mui/icons-material/FavoriteBorder';
import Cart from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    console.log("Dropdown state:", !isDropdownOpen); // Check dropdown toggle state
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

            {/* Header Search */}
            <div className='col-sm-5'>
              <div className='headerSearch'>
                {/* Toggle Dropdown on Click */}
                <div
                  className='selectdrop-container cursor position-relative'
                  onClick={toggleDropdown}
                >
                  All categories 
                  <Selectdrop isOpen={isDropdownOpen} />
                </div>
                
                <div className='search'>
                  <input type='text' placeholder="Search for items..." />
                </div>
              </div>
            </div>

            {/* Location Input */}
            <div className='col-sm-5'>
              <div className='location'>
                <div className='location-icon'>
                  <SearchIcon />
                </div>
                <div className='locationsearch'>
                  <input type='text' placeholder="Locations" />
                </div>
              </div>             
            </div>
            <div className='wishlist'>
              <Wishlist />
               Wishlist
            </div>
            <div className='cart'>
              <Cart/>
              Cart
            </div>
            <div className='signin'>
              <button  className='btn btn-primary'>Sign In</button>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
