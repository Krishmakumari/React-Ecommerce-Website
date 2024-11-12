import React from 'react';
import './electronic.css'; // Make sure to create this file for styling
import Product from '../../components/product/product'; // Reuse your Product component
import E1 from '../../assets/e1.jpg';
import E2 from '../../assets/e2.jpg';
import E3 from '../../assets/e3.webp';
import E4 from '../../assets/e4.webp';
import E5 from '../../assets/e5.jpg';
import E6 from '../../assets/e6.webp';
import E7 from '../../assets/e7.jpg';
import E8 from '../../assets/e8.jpg';
import Footer from '../../components/footer/footer'; // Uncomment if Footer is needed later

// Array of electronics products
const electronicProducts = [
  { id: 37, name: 'Samsung', title: 'Samsung Watch', image: E1, rating: 4.5, price: 15000 },
  { id: 38, name: 'Apple', title: 'Writing Pad', image: E2, rating: 4.7, price: 79999 },
  { id: 39, name: 'Sony', title: 'Sony Headphones', image: E3, rating: 4.2, price: 3500 },
  { id: 40, name: 'Boult', title: 'Boult Headphones', image: E4, rating: 4.3, price: 30000 },
  { id: 41, name: 'HP', title: 'HP Laptop', image: E5, rating: 4.8, price: 19999 },
  { id: 42, name: 'Canon', title: 'Camera', image: E6, rating: 4.6, price: 49999 },
  { id: 43, name: 'Xiaomi', title: 'Camera', image: E7, rating: 4.1, price: 4500 },
  { id: 44, name: 'xyz', title: 'Speaker', image: E8, rating: 4.4, price: 54999 },
];

function Electronic() {
  return (
    <>
      <div className="headingelectronics">
        <h2>Electronics</h2>
      </div>
      <div className="electronics-container">
        <div className="eproduct">
          {electronicProducts.map((product) => (
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
      <div className="efooter">
        <Footer />
      </div>
    </>
  );
}

export default Electronic;
