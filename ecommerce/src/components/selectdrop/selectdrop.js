import React from 'react';
import { useNavigate } from 'react-router-dom';
import './selectdrop.css';

const Selectdrop = ({ isOpen, onSelect, type }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const categoryOptions = [
    { name: "All Categories", path: "/" },
    { name: "Men Clothing", path: "/men" },
    { name: "Women Clothing", path: "/women" },
    { name: "Electronics", path: "/electronic" },
    { name: "Footwear", path: "/footwear" },
    { name: "Jewelery", path: "/jewelery" },
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


  const options = type === "categories" ? categoryOptions : locationOptions;

  return (
    <div className="selectdrop-menu">
      {options.map((option) => (
        <div
          key={option.name}
          className="selectdrop-item"
          onClick={() => {
            onSelect(option.name);
            navigate(option.path);
          }}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default Selectdrop;
