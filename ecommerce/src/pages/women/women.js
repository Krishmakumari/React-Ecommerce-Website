import React from 'react';
import '../men/men.css';
import Banner from '../../assets/banner.webp'; // Adjust the path as needed
import Banner2 from '../../assets/banner2.jpg'; // Adjust the path as needed
import Product from '../../components/product/product';
import Footer from '../../components/footer/footer';

// Import product images for women
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

// Array of women's products
const womenProducts = [
  { id: 13, name: 'Anna White', title: 'Product 1', image: P6, rating: 4.5, price: 999 },
  { id: 14, name: 'Bella Rose', title: 'Product 2', image: P7, rating: 4.0, price: 899 },
  { id: 15, name: 'Clara Green', title: 'Product 3', image: P8, rating: 3.5, price: 749 },
  { id: 16, name: 'Daisy Blue', title: 'Product 4', image: P9, rating: 4.8, price: 1199 },
  { id: 17, name: ' Blue', title: 'Product 5', image: P10, rating: 4.3, price: 599 },
  { id: 18, name: 'Ivy Red', title: 'Product 11', image: P21, rating: 4.7, price: 1050 },
  { id: 19, name: 'Jackie Gray', title: 'Product 12', image: P22, rating: 4.1, price: 780 },
  { id: 20, name: 'Kyle Silver', title: 'Product 13', image: P23, rating: 4.5, price: 950 },
  { id: 21, name: 'Lara Gold', title: 'Product 14', image: P24, rating: 3.8, price: 890 },
  { id: 22, name: 'Mona Blue', title: 'Product 15', image: P25, rating: 4.2, price: 750 },
  { id: 23, name: 'Nate Black', title: 'Product 16', image: P26, rating: 4.6, price: 1150 },
  { id: 24, name: 'Olive Orange', title: 'Product 17', image: P27, rating: 4.3, price: 980 },
];

function Women() {
  return (
    <>
      <div className="headingfashion">
        <h2>Women</h2>
      </div>
      <div className="fashion-container">
        <div className="banner">
          <img src={Banner} alt="Women's Banner" />
          <img src={Banner2} alt="Women's Banner" />
        </div>
        <div className="productListlast">
          {womenProducts.map((product) => (
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
      <div className="fashionlast">
        <Footer />
      </div>
    </>
  );
}

export default Women;
