import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './checkout.css';

function Checkout() {
  const { state } = useLocation();  // Access the passed state
  const { cart, totalPrice, shippingCost, finalAmount } = state || {}; // Destructure the state

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    paymentMethod: 'credit', // Default payment method
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add functionality to handle the form submission here
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-content">
        {/* Left side: Checkout Form */}
        <div className="checkout-form">
          <h3>Billing Information</h3>
          <form onSubmit={handleSubmit}>
            {/* First row: Name and Last Name in same row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Second row: Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Third row: Address */}
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            {/* Fourth row: Payment Method */}
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                required
              >
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            {/* Fifth row: Name on the Card and Card Number */}
            {formData.paymentMethod === 'credit' && (
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cardName">Name on the Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            {/* Sixth row: Expiration and CVV */}
            {formData.paymentMethod === 'credit' && (
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiration">Expiration Date</label>
                  <input
                    type="month"
                    id="expiration"
                    name="expiration"
                    value={formData.expiration}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            {/* Place Order Button */}
            <button className="checkout-button" type="submit">
              Place Order
            </button>
          </form>
        </div>

        {/* Right side: Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {/* Dynamically render cart details and pricing */}
          <p>Products ({cart?.length || 0}): ₹{totalPrice || 0}</p>
          {cart?.length > 0 && <p>Shipping: ₹{shippingCost || 0}</p>}
          <p className="total-amount">Total amount: ₹{finalAmount || 0}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
