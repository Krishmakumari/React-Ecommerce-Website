import React from 'react';
import './men.css';
import Banner from '../../assets/banner.webp';
import Banner2 from '../../assets/banner2.jpg';
import Product from '../../components/product/product';
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

import Footer from '../../components/footer/footer';

// Array of men's products
const menProducts = [
  { id: 1, name: 'John Doe', title: 'Product 1', image: P1, rating: 4.5, price: 999 },
  { id: 2, name: 'Jane Smith', title: 'Product 2', image: P2, rating: 3.5, price: 799 },
  { id: 3, name: 'Alice Johnson', title: 'Product 3', image: P3, rating: 4.0, price: 649 },
  { id: 4, name: 'Bob Brown', title: 'Product 4', image: P4, rating: 5.0, price: 1200 },
  { id: 5, name: 'Carol White', title: 'Product 5', image: P5, rating: 2.5, price: 450 },
  { id: 6, name: 'David Black', title: 'Product 6', image: P11, rating: 3.5, price: 799 },
  { id: 7, name: 'Ella Blue', title: 'Product 7', image: P12, rating: 4.0, price: 850 },
  { id: 8, name: 'Frank Green', title: 'Product 8', image: P13, rating: 3.8, price: 950 },
  { id: 9, name: 'Grace Yellow', title: 'Product 9', image: P14, rating: 4.2, price: 1100 },
  { id: 10, name: 'Helen Purple', title: 'Product 10', image: P15, rating: 4.6, price: 999 },
  { id: 11, name: 'Ivan Red', title: 'Product 11', image: P16, rating: 4.3, price: 1100 },
  { id: 12, name: 'Jack Blue', title: 'Product 12', image: P17, rating: 3.9, price: 1200 },
];

function Men() {
  return (
    <>
      <div className="headingfashion">
        <h2>Men</h2>
      </div>
      <div className="fashion-container">
        <div className="banner">
          <img src={Banner} alt="Men's Banner" />
          <img src={Banner2} alt="Men's Banner" />
        </div>
        <div className="productListlast">
          {menProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              title={product.title}
              image={product.image}
              rating={product.rating}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className='fashionlast'>
      <Footer/></div>
    </>
  );
}

export default Men;
