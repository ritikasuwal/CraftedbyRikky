import React, { useState } from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Here you would typically integrate with your backend or email service
    alert(`Subscribed with email: ${email}`);
    setEmail(""); // Clear input after submission
  };

  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            Ritika Suwal . Front-End Developer from Nepal. Building with
            creativity and care.
          </p>
        </div>
        <div className="footer-top-right">
          <form onSubmit={handleSubscribe} className="footer-email-form">
            <div className="footer-email-input">
              <img src={user_icon} alt="User Icon" />
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="footer-subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Ritika Suwal. All rights reserved. Crafted with passion and
          dedication.
        </p>
        <div className="footer-bottom-right">
          <a href="#" className="footer-link">
            Term of Services
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Connect with me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
