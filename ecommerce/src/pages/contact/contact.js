import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false); // Track if the form is submitted

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    setSubmitted(true); // Set submitted to true after form submission
    setFormData({ name: '', email: '', message: '' }); // Clear the form fields
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out!</p>
      </div>

      {submitted ? (
        <div className="submission-confirmation">
          <h3>Thank you for your message!</h3>
          <p>We will get back to you shortly.</p>
        </div>
      ) : (
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      )}

      <div className="contact-info">
        <h3>Our Contact Information</h3>
        <p>
          <strong>Address:</strong> Lovely Professional University
        </p>
        <p>
          <strong>Email:</strong> shop@.com
        </p>
        <p>
          <strong>Phone:</strong> +1234567890
        </p>
      </div>
    </div>
  );
}

export default Contact;
