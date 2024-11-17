import React from 'react';
import Slider from '../../components/slider/slider';
import Footer from '../../components/footer/footer';
import Fashion from '../../assets/fashion.png';
import './home.css';
import '../../components/product/product';
import Product from '../../components/product/product';
import ProductList from '../../components/product/productList';

function Home() {
  return (
    <div>
      <Slider />

      <div className='products'>
        <div className='heading'>
          <h2>Popular Products</h2>
        </div>

        <ProductList/>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
