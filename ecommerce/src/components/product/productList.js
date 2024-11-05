// ProductList.js
import React from 'react';
import Product from './product';
import P1 from '../../assets/p1.webp';
import P2 from '../../assets/p2.jpg';
import P3 from '../../assets/p3.jpg';
import P4 from '../../assets/p4.jpg';
import P5 from '../../assets/p5.jpg';
import P6 from '../../assets/p6.webp';
import P7 from '../../assets/p7.jpg';
import P8 from '../../assets/p8.jpg';
import P9 from '../../assets/p9.jpg';
import P10 from '../../assets/p10.jpg';
import './productList.css';

function ProductList() {
  // Array of product details
  const products = [
    { name: 'John Doe', title: 'Product 1', image: P1, rating: 4.5, price: 999 },
    { name: 'Jane Smith', title: 'Product 2', image: P2, rating: 3.5, price: 799 },
    { name: 'Alice Johnson', title: 'Product 3', image: P3, rating: 4.0, price: 649 },
    { name: 'Bob Brown', title: 'Product 4', image: P4, rating: 5.0, price: 1200 },
    { name: 'Carol White', title: 'Product 5', image: P5, rating: 2.5, price: 450 },
    { name: 'David Black', title: 'Product 6', image: P6, rating: 3.0, price: 699 },
    { name: 'Ella Blue', title: 'Product 7', image: P7, rating: 4.0, price: 849 },
    { name: 'Frank Green', title: 'Product 8', image: P8, rating: 3.5, price: 950 },
    { name: 'Grace Yellow', title: 'Product 9', image: P9, rating: 4.0, price: 1100 },
    { name: 'Hank Pink', title: 'Product 10', image: P10, rating: 5.0, price: 1500 },
  ];

  return (
    <div className='productList'>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          title={product.title}
          image={product.image}
          rating={product.rating}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
