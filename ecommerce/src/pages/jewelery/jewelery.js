import React from 'react';
import '../electronics/electronic.css'; // Reuse the same CSS file or create a separate one for jewelry
import Product from '../../components/product/product'; // Reuse your Product component
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
import Footer from '../../components/footer/footer'; // Footer component if needed

// Array of jewelry products
const jewelryProducts = [
  { id: 25, name: 'Tanishq', title: 'Pearl Earrings', image: J1, rating: 4.8, price: 250 },
  { id: 26, name: 'Kalyan', title: 'Braclet', image: J2, rating: 4.6, price: 350 },
  { id: 27, name: 'CaratLane', title: 'Butterfly Earrings', image: J3, rating: 4.7, price: 450 },
  { id: 28, name: 'PC Jeweller', title: 'Multi-Jhumkas', image: J4, rating: 4.5, price: 15000 },
  { id: 29, name: 'Malabar', title: 'Cherry Earrings', image: J5, rating: 4.3, price: 200 },
  { id: 30, name: 'Zirconia', title: 'Purple Butterfly', image: J6, rating: 4.4, price: 1800 },
  { id: 31, name: 'Bluestone', title: 'Blue Butterfly', image: J7, rating: 4.2, price: 1200 },
  { id: 32, name: 'Swarovski', title: 'Pearl Braclet', image: J8, rating: 4.7, price: 2000 },
  { id: 33, name: 'Swarovski', title: 'Crystal Earrings', image: J9, rating: 4.7, price: 2200 },
  { id: 34, name: 'Swarovski', title: 'Braclet', image: J10, rating: 4.7, price: 220 },
  { id: 35, name: 'Swarovski', title: 'Peacock Earrings', image: J11, rating: 4.7, price: 2200 },
  { id: 36, name: 'Swarovski', title: 'Gold Necklace', image: J12, rating: 4.7, price: 220 },
];

function Jewelery() {
  return (
    <>
      <div className="headingelectronics">
        <h2>Jewellry</h2>
      </div>
      <div className="electronics-container">
        <div className="eproduct">
          {jewelryProducts.map((product) => (
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

export default Jewelery;
