// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productdetail.css';
import Rating from '@mui/material/Rating';
import P1 from '../../assets/p1.webp';
import P2 from '../../assets/p2.jpg';
import P3 from '../../assets/p3.jpg';
import P4 from '../../assets/p4.jpg';
import P5 from '../../assets/p5.jpg';
import P11 from '../../assets/p11.jpg';
import P12 from '../../assets/p12.jpg';
import P13 from '../../assets/p13.jpg';
import P14 from '../../assets/p14.jpg';
import P15 from '../../assets/p15.jpg';
import P16 from '../../assets/p16.jpg';
import P17 from '../../assets/p17.jpg';
import { useCart } from '../cart/cartcontext';
import { Link } from 'react-router-dom';

const menProducts = [
    { id: 1, name: 'John Doe', title: 'Product 1', image: P1, rating: 4.5, price: 999, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 2, name: 'Jane Smith', title: 'Product 2', image: P2, rating: 3.5, price: 799, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 3, name: 'Alice Johnson', title: 'Product 3', image: P3, rating: 4.0, price: 649, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 4, name: 'Bob Brown', title: 'Product 4', image: P4, rating: 5.0, price: 1200, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 5, name: 'Carol White', title: 'Product 5', image: P5, rating: 2.5, price: 450, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 6, name: 'David Black', title: 'Product 6', image: P11, rating: 3.5, price: 799, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 7, name: 'Ella Blue', title: 'Product 7', image: P12, rating: 4.0, price: 850, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 8, name: 'Frank Green', title: 'Product 8', image: P13, rating: 3.8, price: 950, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 9, name: 'Grace Yellow', title: 'Product 9', image: P14, rating: 4.2, price: 1100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 10, name: 'Helen Purple', title: 'Product 10', image: P15, rating: 4.6, price: 999, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 11, name: 'Ivan Red', title: 'Product 11', image: P16, rating: 4.3, price: 1100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { id: 12, name: 'Jack Blue', title: 'Product 12', image: P17, rating: 3.9, price: 1200, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart(); // Get the addToCart function from context
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false); // State to track the "added to cart" status

  useEffect(() => {
    const productDetail = menProducts.find(p => p.id === parseInt(id));
    setProduct(productDetail);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    setAddedToCart(true); // Set addedToCart to true
    setTimeout(() => setAddedToCart(false), 3000); // Hide the message after 3 seconds
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="productDetailContainer">
      <img src={product.image} alt={product.title} className="productImage" />
      <div className="productInfo">
        <h2>{product.title}</h2>
        <p>{product.name}</p>
        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
        <h3>Price: ₹{product.price}</h3>
        <p className="productDescription">{product.description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        {addedToCart && <p className="addedToCartMessage">Added to Cart!</p>}
        <button>
  <Link to='/cart' className="viewCartLink">View Cart</Link>
</button>

      </div>
    </div>
  );
}

export default ProductDetail;
