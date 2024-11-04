import React from 'react';
import './selectdrop.css';

const Selectdrop = ({ isOpen, onSelect, type }) => {
  if (!isOpen) return null;

  // Define separate options for categories and locations
  const categoryOptions = [
    "All Categories", "Electronics", "Fashion", "Books", 
    "Home Appliances", "Sports"
  ];

  const locationOptions = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
    "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", 
    "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal"
  ];

  // Choose the appropriate options based on the type
  const options = type === "categories" ? categoryOptions : locationOptions;

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
