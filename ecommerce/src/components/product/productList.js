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
import { useCart } from '../../pages/cart/cartcontext'; // Import the custom hook

function ProductList() {
  // Array of product details
  const products = [
    { id: 1, name: 'John Doe', title: 'Product 1', image: P1, rating: 4.5, price: 999 },
    { id: 2, name: 'Jane Smith', title: 'Product 2', image: P2, rating: 3.5, price: 799 },
    { id: 3, name: 'Alice Johnson', title: 'Product 3', image: P3, rating: 4.0, price: 649 },
    { id: 4, name: 'Bob Brown', title: 'Product 4', image: P4, rating: 5.0, price: 1200 },
    { id: 5, name: 'Carol White', title: 'Product 5', image: P5, rating: 2.5, price: 450 },
    { id: 6, name: 'David Black', title: 'Product 6', image: P6, rating: 3.0, price: 699 },
    { id: 7, name: 'Ella Blue', title: 'Product 7', image: P7, rating: 4.0, price: 849 },
    { id: 8, name: 'Frank Green', title: 'Product 8', image: P8, rating: 3.5, price: 950 },
    { id: 9, name: 'Grace Yellow', title: 'Product 9', image: P9, rating: 4.0, price: 1100 },
    { id: 9, name: 'Grace Yellow', title: 'Product 9', image: P10, rating: 4.3, price: 600 },
  ];

  const { addToCart } = useCart(); // Access addToCart function from context

  return (
    <div className='productList'>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          title={product.title}
          image={product.image}
          rating={product.rating}
          price={product.price}
          addToCart={addToCart} // Pass addToCart function as a prop
        />
      ))}
    </div>
  );
}

export default ProductList;
