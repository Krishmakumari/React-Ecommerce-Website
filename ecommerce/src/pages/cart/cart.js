// Cart.js
import React, { useEffect } from 'react';
import { useCart } from './cartcontext'; // Ensure this path is correct
import './cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();  
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const shippingCost = 30; // Example shipping cost
  const finalAmount = cart.length > 0 ? totalPrice + shippingCost : totalPrice;

  const handleCheckout = () => {
    if (cart.length > 0) {
      // Passing the cart data dynamically to checkout page
      navigate('/checkout', { state: { cart, totalPrice, shippingCost, finalAmount } });
    }
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-content">
        <div className="item-list">
          <h3>Item List</h3>
          {cart.length === 0 ? (
            <p className="empty-cart">No items added</p>
          ) : (
            cart.map((product) => (
              <div className="product" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-quantity">
                    <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                  </div>
                  <div className="product-price">₹{product.price}</div>
                  <button className="remove" onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Products ({cart.length}): ₹{totalPrice}</p>
          {cart.length > 0 && <p>Shipping: ₹{shippingCost}</p>}
          <p className="total-amount">Total amount: ₹{finalAmount}</p>
          <button className="checkout-button" onClick={handleCheckout} disabled={cart.length === 0}>
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
