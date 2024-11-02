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
    console.log("Dropdown state:", !isDropdownOpen);
  };

  return (
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
                <div className='selectdrop-container' onClick={toggleDropdown}>
                  <span className='selectdrop'>All Categories</span>
                  <Selectdrop isOpen={isDropdownOpen} />
                </div>

                {/* Search Box */}
                <div className='search'>
                  <input type='text' placeholder="Search..." />
                  <SearchIcon className='search-icon' />
                </div>
              </div>

              {/* Location Input */}
              <div className='location'>
                <div className='locationsearch'>
                  <input type='text' placeholder="Locations" />
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
  );
}

export default Header;
