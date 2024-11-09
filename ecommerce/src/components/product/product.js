import React from 'react';
import { useCart } from '../../pages/cart/cartcontext'; // Import the custom hook
import Rating from '@mui/material/Rating';
import './product.css';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Product({ name, title, image, rating, price, id }) {
  const { addToCart, addToFavorites } = useCart(); // Access cart functions from context
  const navigate = useNavigate(); // Initialize the navigate function

  const handleViewClick = () => {
    navigate(`/product/${id}`); // Navigate to product detail page with the product id
  };

  return (
    <div className='productBox'>
      <div className='imgWrapper'>
        <img src={image} alt="Product" />
        <div className='iconBox'>
          <span className='material-icons'>
            <FavoriteIcon onClick={() => addToCart({ name, title, image, rating, price, id })} />
          </span>
          <span className='material-icons'>
            <VisibilityIcon onClick={handleViewClick} /> {/* View icon with click handler */}
          </span>
        </div>
      </div>
      <div className='info'>
        <span className='name'>{name}</span>
        <h4 className='title'>{title}</h4>
        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        <span className='price'>₹{price}</span>
      </div>
    </div>
  );
}

export default Product;
