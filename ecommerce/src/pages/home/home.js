import React from 'react';
import Slider from '../../components/slider/slider';
import Footer from '../../components/footer/footer';
import Fashion from '../../assets/fashion.png';
import './home.css';

function Home() {
  return (
    <div>
      <Slider />
      <div className="categories">
        <div className="features">
          <h2>Featured Categories</h2>
        </div>
        <div className="images">
          {/* Adding five circles with "Fashion" text below each */}
          <div className="image-container">
            <img src={Fashion} alt="Fashion" />
            <h5>Fashion</h5>
          </div>
          <div className="image-container">
            <img src={Fashion} alt="Fashion" />
            <h5>Fashion</h5>
          </div>
          <div className="image-container">
            <img src={Fashion} alt="Fashion" />
            <h5>Fashion</h5>
          </div>
          <div className="image-container">
            <img src={Fashion} alt="Fashion" />
            <h5>Fashion</h5>
          </div>
          <div className="image-container">
            <img src={Fashion} alt="Fashion" />
            <h5>Fashion</h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
