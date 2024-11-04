// Selectdrop.js
import React from 'react';
import './selectdrop.css';

const Selectdrop = ({ isOpen, onSelect, type }) => {
  if (!isOpen) return null;

  // Define options for categories and locations
  const options = type === "categories" ? 
    ["All Categories", "Electronics", "Fashion", "Books", "Home Appliances", "Sports"] : 
    [
      "Gujarat", "Haryana", "Himachal Pradesh",
      "Maharashtra",
       "Punjab", "Rajasthan",
       "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

  return (
    <div className="selectdrop-menu">
      {options.map((option) => (
        <div
          key={option}
          className="selectdrop-item"
          onClick={() => onSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Selectdrop;
