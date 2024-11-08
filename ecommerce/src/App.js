import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Men from './pages/men/men';
import Women from './pages/women/women';
import Cart from './pages/cart/cart';
import { CartProvider } from './pages/cart/cartcontext';  // Import your CartProvider
import Checkout from './pages/checkout/checkout';

function App() {
  return (
    <CartProvider>  {/* Wrap your components inside CartProvider to access cart and favorites context */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
