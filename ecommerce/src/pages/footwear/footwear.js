// Footwear.js
import React from 'react';
import '../electronics/electronic.css'; // Reusing the same CSS file as the Electronic page
import Product from '../../components/product/product'; // Reuse the Product component
import f1 from '../../assets/f1.webp';
import f2 from '../../assets/f2.webp';
import f3 from '../../assets/f3.webp';
import f4 from '../../assets/f4.webp';
import f5 from '../../assets/f5.webp';
import f6 from '../../assets/f6.webp';
import f7 from '../../assets/f7.webp';
import f8 from '../../assets/f8.webp';
import f9 from '../../assets/f9.webp';
import f10 from '../../assets/f10.webp';
import f11 from '../../assets/f11.webp';
import f12 from '../../assets/f12.webp';
import Footer from '../../components/footer/footer'; // Uncomment if Footer is needed later

// Extended array of footwear products
const footwearProducts = [
  { id: 45, name: 'Nike', title: 'Running Shoes', image: f1, rating: 4.8, price: 5000 },
  { id: 46, name: 'Adidas', title: 'Sneakers', image: f2, rating: 4.6, price: 7000 },
  { id: 47, name: 'Puma', title: 'Casual Shoes', image: f3, rating: 4.5, price: 4500 },
  { id: 48, name: 'Reebok', title: 'Walking Shoes', image: f4, rating: 4.4, price: 3000 },
  { id: 49, name: 'Woodland', title: 'Hiking Boots', image: f5, rating: 4.7, price: 8000 },
  { id: 50, name: 'Bata', title: 'Formal Shoes', image: f6, rating: 4.3, price: 2000 },
  { id: 51, name: 'Skechers', title: 'Sports Shoes', image: f7, rating: 4.5, price: 6000 },
  { id: 52, name: 'Red Chief', title: 'Leather Shoes', image: f8, rating: 4.2, price: 5500 },
  { id: 53, name: 'Under Armour', title: 'Training Shoes', image: f9, rating: 4.6, price: 6500 },
  { id: 54, name: 'Fila', title: 'High Tops', image: f10, rating: 4.4, price: 3000 },
  { id: 55, name: 'Asics', title: 'Running Shoes', image: f11, rating: 4.5, price: 7000 },
  { id: 56, name: 'New Balance', title: 'Walking Shoes', image: f12, rating: 4.3, price: 5000 },
];

function Footwear() {
  return (
    <>
      <div className="headingelectronics">
        <h2>Footwear</h2>
      </div>
      <div className="electronics-container">
        <div className="eproduct">
          {footwearProducts.map((product) => (
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

export default Footwear;
