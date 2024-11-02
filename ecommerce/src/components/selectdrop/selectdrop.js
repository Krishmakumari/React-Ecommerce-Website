import React from 'react';
import '../selectdrop/selectdrop.css';

const Selectdrop = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="selectdrop-menu">
      <div className="selectdrop-item">Electronics</div>
      <div className="selectdrop-item">Fashion</div>
      <div className="selectdrop-item">Books</div>
      <div className="selectdrop-item">Home Appliances</div>
      <div className="selectdrop-item">Sports</div>
    </div>
  );
};

export default Selectdrop;
