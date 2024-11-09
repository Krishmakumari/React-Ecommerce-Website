import React from 'react';
import './about.css'; 
import Footer from '../../components/footer/footer';
import About1 from '../../assets/about.jpeg';
import About2 from '../../assets/about2.jpeg';
import About3 from '../../assets/about3.jpeg';
import About4 from '../../assets/about4.webp';

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <h2>About Us</h2>
        </div>
        <div className="about-content">
          <p>
            Welcome to our website! We are a dedicated platform that offers a wide variety of products
            tailored to your needs. Whether you're looking for the latest trends or timeless classics, we
            strive to provide you with high-quality products that meet your preferences and budget.
          </p>
          <p>
            Our mission is to deliver an exceptional online shopping experience, combining convenience, 
            variety, and excellent customer service. We aim to offer the best selection of men's and women's 
            fashion, home decor, electronics, and more, ensuring you have everything you need in one place.
          </p>
        </div>
        
        <div className="our-products">
          <h2>Our Products</h2>
          <div className="product-row">
            <div className="product-item">
              <img src={About1} alt="Women clothing" />
              <span>Women Clothing</span>
            </div>
            <div className="product-item">
              <img src={About2} alt="Men clothing" />
              <span>Men Clothing</span>
            </div>
            <div className="product-item">
              <img src={About3} alt="Electronics" />
              <span>Electronics</span>
            </div>
            <div className="product-item">
              <img src={About4} alt="Jewelry" />
              <span>Jewelry</span>
            </div>
          </div>
        </div>

        <div className="why-choose-us">
          <h3>Why Choose Us?</h3>
          <ul>
            <li><strong>Quality Products:</strong> We carefully select our products to ensure top-notch quality.</li>
            <li><strong>Customer-Centric:</strong> Our priority is your satisfaction. We're here to assist you every step of the way.</li>
            <li><strong>Easy Shopping:</strong> With a user-friendly interface, you can shop effortlessly across all devices.</li>
            <li><strong>Fast Shipping:</strong> We aim to deliver your purchases as quickly as possible to your doorstep.</li>
          </ul>
          <p>Thank you for choosing us. Happy shopping!</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
