import React from 'react';
import '../styles/Footer.css';
import logo from '../img/logo.png';
import googlePlay from '../img/google-play.png';
import appStore from '../img/app-store.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="LuxuryInTaste Logo" className="footer-logo" />
          <div className="footer-links">
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <a href="/terms" className="footer-link">Terms of Services</a>
            <a href="/contact" className="footer-link">Contact Us</a>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-subscribe">
            <h3>Join our Community</h3>
            <div className="subscribe-form">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="subscribe-input"
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="social-links">
            <div className="social-link">
              <span>Email</span>
              <i className="fas fa-envelope"></i>
            </div>
            <div className="social-link">
              <span>Linkedin</span>
              <i className="fab fa-linkedin"></i>
            </div>
            <div className="social-link">
              <span>Instagram</span>
              <i className="fab fa-instagram"></i>
            </div>
            <div className="social-link">
              <span>Twitter</span>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
          <div className="app-downloads">
            <img src={googlePlay} alt="Get it on Google Play" className="store-badge" />
            <img src={appStore} alt="Download on the App Store" className="store-badge" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 LuxuryInTaste. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 