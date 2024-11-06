import React from 'react';
import Img from '../../assets/news.png';
import './footer.css';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ReturnIcon from '@mui/icons-material/AssignmentReturn';
import SupportIcon from '@mui/icons-material/SupportAgent';
import ShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyIcon from '@mui/icons-material/CurrencyRupee';
import Img2 from "../../assets/logo.jpg";
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import ClockIcon from '@mui/icons-material/AccessTimeOutlined';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4f75e609-70ff-450f-a102-bf97809ddae6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Your feedback has been submitted successfully!");
    } else {
      console.error("Error", res);
      alert("There was an error. Please try again.");
    }
  };

  return (
    <>
      <div className="footer-container">
        <div className="img">
          <img src={Img} alt="News" />
        </div>
        <div className="text">
          <h2>
            Stay home & get your daily
            <br />
            needs from our shop
          </h2>
          <p>Start Your Daily Shopping with Nest Mart</p>
        </div>
        <form className="footer-form" onSubmit={onSubmit}>
          <p>Give your valuable Feedback :)</p>
          <input type="text" name="name" placeholder="Your Name" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit Form</button>
        </form>
      </div>

      <div className="container-fluid">
        <div className="smallboxes">
          <div className="box">
            <span className="icon">
              <HandshakeIcon />
            </span>
            <div className="boxtext">
              <h6>Free delivery</h6>
              <p>Order $50 or more</p>
            </div>
          </div>
          <div className="box">
            <span className="icon">
              <ShippingIcon />
            </span>
            <div className="boxtext">
              <h6>Fast Shipping</h6>
              <p>Delivery within 2-3 days</p>
            </div>
          </div>
          <div className="box">
            <span className="icon">
              <SupportIcon />
            </span>
            <div className="boxtext">
              <h6>24/7 Support</h6>
              <p>We're here to help</p>
            </div>
          </div>
          <div className="box">
            <span className="icon">
              <ReturnIcon />
            </span>
            <div className="boxtext">
              <h6>Easy Returns</h6>
              <p>30-day return policy</p>
            </div>
          </div>
          <div className="box">
            <span className="icon">
              <CurrencyIcon />
            </span>
            <div className="boxtext">
              <h6>Secure Payment</h6>
              <p>Safe and reliable</p>
            </div>
          </div>
        </div>
      </div>

      <div className="last">
        <div className="col">
          <div className="logo">
            <img src={Img2} alt="Logo" />
          </div>
          <div className="address-list">
            <div className="address">
              <span className="addressicon">
                <LocationIcon />
              </span>
              <p>Address: Lovely Professional University, Phagwara</p>
            </div>
            <div className="phone">
              <span className="addressicon">
                <PhoneIcon />
              </span>
              <p>Phone: +91 12345 67890</p>
            </div>
            <div className="phone">
              <span className="addressicon">
                <EmailIcon />
              </span>
              <p>shop@.com</p>
            </div>
            <div className="phone">
              <span className="addressicon">
                <ClockIcon />
              </span>
              <p>06:00-22:00 Mon-Fri</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="list">
            <h6>Company</h6>
            <ul>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Support Center</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="list">
            <h6>Corporate</h6>
            <ul>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Support Center</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="list">
            <h6>Popular</h6>
            <ul>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Support Center</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="connect">
        <div className="line"></div>

        <div className="footer-content">
          <div className="copyright">
            <p>2024, Copyright</p>
          </div>

          <div className="social">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
