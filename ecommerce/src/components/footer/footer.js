import React from 'react';
import Img from '../../assets/news.png';
import './footer.css'; // Make sure to import the CSS file

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
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className='footer-container'>
      <div className='img'>
        <img src={Img} alt="News" />
      </div>
      <div className='text'>
        <h2>Stay home & get your daily<br/> 
        needs from our shop</h2>
        <p>Start Your Daily Shopping with Nest Mart</p>
      </div>
      <form className='footer-form' onSubmit={onSubmit}>
        <p>Give your valuable Feedback :)</p>
        <input type="text" name="name" placeholder="Your Name"/>
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default Footer;
