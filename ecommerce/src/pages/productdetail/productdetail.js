import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productdetail.css';
import Rating from '@mui/material/Rating';
import { useCart } from '../cart/cartcontext';
import { Link } from 'react-router-dom';
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
import P6 from '../../assets/p6.webp';
import P7 from '../../assets/p7.jpg';
import P8 from '../../assets/p8.jpg';
import P9 from '../../assets/p9.jpg';
import P10 from '../../assets/p10.jpg';
import P21 from '../../assets/p21.jpg';
import P22 from '../../assets/p22.jpg';
import P23 from '../../assets/p23.jpg';
import P24 from '../../assets/p24.jpg';
import P25 from '../../assets/p25.jpg';
import P26 from '../../assets/p26.jpg';
import P27 from '../../assets/p27.jpg';
import J1 from '../../assets/j1.jpg'; // Jewelry images
import J2 from '../../assets/j2.jpg';
import J3 from '../../assets/j3.jpg';
import J4 from '../../assets/j4.jpg';
import J5 from '../../assets/j5.jpg';
import J6 from '../../assets/j6.jpg';
import J7 from '../../assets/j7.jpg';
import J8 from '../../assets/j8.jpg';
import J9 from '../../assets/j9.jpg';
import J10 from '../../assets/j10.jpg';
import J11 from '../../assets/j11.jpg';
import J12 from '../../assets/j12.jpg';
import E1 from '../../assets/e1.jpg';
import E2 from '../../assets/e2.jpg';
import E3 from '../../assets/e3.webp';
import E4 from '../../assets/e4.webp';
import E5 from '../../assets/e5.jpg';
import E6 from '../../assets/e6.webp';
import E7 from '../../assets/e7.jpg';
import E8 from '../../assets/e8.jpg';

const Products = [
  { id: 1, name: 'Anna White', title: 'Product 1', image: P1, rating: 4.5, price: 999 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 2, name: 'Bella Rose', title: 'Product 2', image: P2, rating: 4.0, price: 899 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 3, name: 'Clara Green', title: 'Product 3', image: P3, rating: 3.5, price: 749 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 4, name: 'Daisy Blue', title: 'Product 4', image: P4, rating: 4.8, price: 1199 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 5, name: ' Blue', title: 'Product 5', image: P5, rating: 4.3, price: 599 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 6, name: 'Ivy Red', title: 'Product 11', image: P11, rating: 4.7, price: 1050 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 7, name: 'Jackie Gray', title: 'Product 12', image: P12, rating: 4.1, price: 780 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 8, name: 'Kyle Silver', title: 'Product 13', image: P13, rating: 4.5, price: 950 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 9, name: 'Lara Gold', title: 'Product 14', image: P14, rating: 3.8, price: 890 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 10, name: 'Mona Blue', title: 'Product 15', image: P15, rating: 4.2, price: 750 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 11, name: 'Nate Black', title: 'Product 16', image: P16, rating: 4.6, price: 1150 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 12, name: 'Olive Orange', title: 'Product 17', image: P17, rating: 4.3, price: 980 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 13, name: 'Anna White', title: 'Product 1', image: P6, rating: 4.5, price: 999 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 14, name: 'Bella Rose', title: 'Product 2', image: P7, rating: 4.0, price: 899 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 15, name: 'Clara Green', title: 'Product 3', image: P8, rating: 3.5, price: 749 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 16, name: 'Daisy Blue', title: 'Product 4', image: P9, rating: 4.8, price: 1199 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 17, name: ' Blue', title: 'Product 5', image: P10, rating: 4.3, price: 599 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 18, name: 'Ivy Red', title: 'Product 11', image: P21, rating: 4.7, price: 1050 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 19, name: 'Jackie Gray', title: 'Product 12', image: P22, rating: 4.1, price: 780 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 20, name: 'Kyle Silver', title: 'Product 13', image: P23, rating: 4.5, price: 950 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 21, name: 'Lara Gold', title: 'Product 14', image: P24, rating: 3.8, price: 890 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 22, name: 'Mona Blue', title: 'Product 15', image: P25, rating: 4.2, price: 750 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 23, name: 'Nate Black', title: 'Product 16', image: P26, rating: 4.6, price: 1150 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 24, name: 'Olive Orange', title: 'Product 17', image: P27, rating: 4.3, price: 980 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 25, name: 'Tanishq', title: 'Gold Necklace', image: J1, rating: 4.8, price: 25000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 26, name: 'Kalyan', title: 'Diamond Ring', image: J2, rating: 4.6, price: 35000 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 27, name: 'CaratLane', title: 'Platinum Earrings', image: J3, rating: 4.7, price: 45000 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 28, name: 'PC Jeweller', title: 'Silver Bracelet', image: J4, rating: 4.5, price: 15000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 29, name: 'Malabar', title: 'Gold Bangles', image: J5, rating: 4.3, price: 20000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 30, name: 'Zirconia', title: 'Zircon Necklace', image: J6, rating: 4.4, price: 18000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 31, name: 'Bluestone', title: 'Silver Anklet', image: J7, rating: 4.2, price: 12000, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 32, name: 'Swarovski', title: 'Crystal Earrings', image: J8, rating: 4.7, price: 22000 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 33, name: 'Swarovski', title: 'Crystal Earrings', image: J9, rating: 4.7, price: 22000 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 34, name: 'Swarovski', title: 'Crystal Earrings', image: J10, rating: 4.7, price: 22000 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 35, name: 'Swarovski', title: 'Crystal Earrings', image: J11, rating: 4.7, price: 22000 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 36, name: 'Swarovski', title: 'Crystal Earrings', image: J12, rating: 4.7, price: 22000 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 37, name: 'Samsung', title: 'Samsung TV', image: E1, rating: 4.5, price: 15000 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 38, name: 'Apple', title: 'iPhone 13', image: E2, rating: 4.7, price: 79999 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 39, name: 'Sony', title: 'Sony Headphones', image: E3, rating: 4.2, price: 3500 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 40, name: 'LG', title: 'LG Refrigerator', image: E4, rating: 4.3, price: 30000 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 41, name: 'Bose', title: 'Bose Soundbar', image: E5, rating: 4.8, price: 19999 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 42, name: 'OnePlus', title: 'OnePlus 9', image: E6, rating: 4.6, price: 49999 , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'},
  { id: 43, name: 'Xiaomi', title: 'Xiaomi Mi Watch', image: E7, rating: 4.1, price: 4500, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
  { id: 44, name: 'Dell', title: 'Dell Laptop', image: E8, rating: 4.4, price: 54999, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart(); // Get the addToCart function from context
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false); // Track "added to cart" status

  useEffect(() => {
    const productDetail = Products.find(p => p.id === parseInt(id));
    setProduct(productDetail);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Add the product to the cart
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 3000); // Hide message after 3 seconds
    }
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
        <button><Link to="/cart">View Cart</Link></button>
      </div>
    </div>
  );
}

export default ProductDetail;
