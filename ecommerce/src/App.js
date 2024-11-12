// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import Login from './pages/login/login';
import Men from './pages/men/men';
import Women from './pages/women/women';
import Cart from './pages/cart/cart';
import { CartProvider } from './pages/cart/cartcontext';  // Import your CartProvider
import Checkout from './pages/checkout/checkout';
import Contact from './pages/contact/contact';
import Electronic from './pages/electronics/electronic';
import Jewelery from './pages/jewelery/jewelery';
import Register from './pages/login/register';
import ProductDetail from './pages/productdetail/productdetail'; // Import the ProductDetail page

function App() {
  return (
    <CartProvider>  {/* Wrap components inside CartProvider to access cart context */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Dynamic route for product details */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
