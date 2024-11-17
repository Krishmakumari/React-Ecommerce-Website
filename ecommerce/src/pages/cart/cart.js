import React from 'react';
import { useCart } from './cartcontext'; // Ensure this path is correct
import './cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart = [], removeFromCart, updateQuantity } = useCart(); // Fallback to an empty array
  const navigate = useNavigate();

  // Calculate total price and other summary values safely
  const totalPrice = cart.reduce(
    (total, product) => total + (product.price * (product.quantity || 1)),
    0
  );
  const shippingCost = cart.length > 0 ? 30 : 0; // Shipping cost only if items in cart
  const finalAmount = totalPrice + shippingCost;

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/checkout', {
        state: { cart, totalPrice, shippingCost, finalAmount },
      });
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
                    <button
                      onClick={() =>
                        updateQuantity(product.id, Math.max(1, product.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span>{product.quantity || 1}</span>
                    <button
                      onClick={() => updateQuantity(product.id, (product.quantity || 1) + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="product-price">₹{product.price}</div>
                  <button
                    className="remove"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
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
          <button
            className="checkout-button"
            onClick={handleCheckout}
            disabled={cart.length === 0}
          >
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
