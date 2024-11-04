import React, { useState, useEffect } from 'react';
import Img1 from '../../assets/slider1.jpg';
import Img2 from '../../assets/slider2.jpg';
import Img3 from '../../assets/slider3.jpg';
import Img4 from '../../assets/slider4.jpg';
import './slider.css';

const images = [Img1, Img2, Img3, Img4];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next image
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Function to handle previous image
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Function to go to a specific image
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality to change slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change image every 2 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <div className="slider">
      <div className="slider-content">
        <img src={images[currentIndex]} alt="Slider" className="slider-image" />
        <button className="slider-arrow left-arrow" onClick={prevSlide}>❮</button>
        <button className="slider-arrow right-arrow" onClick={nextSlide}>❯</button>
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
