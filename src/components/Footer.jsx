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
        </div>
        
        <div className="footer-nav">
          <nav className="footer-links">
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <a href="/terms" className="footer-link">Terms of Services</a>
            <a href="/contact" className="footer-link">Contact Us</a>
          </nav>
        </div>

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

        <div className="footer-social">
          <div className="social-links">
            <a href="mailto:contact@luxuryintaste.com" className="social-link">
              <span>Email</span>
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com" className="social-link">
              <span>Linkedin</span>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" className="social-link">
              <span>Instagram</span>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" className="social-link">
              <span>Twitter</span>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="app-downloads">
            <a href="#" className="app-download-link">
              <img src={googlePlay} alt="Get it on Google Play" />
            </a>
            <a href="#" className="app-download-link">
              <img src={appStore} alt="Download on the App Store" />
            </a>
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