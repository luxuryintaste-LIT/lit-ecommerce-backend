import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/WishlistPage.css';

const WishlistPage = () => {
  return (
    <div className="wishlist-page">
      <Navbar />
      <div className="wishlist-container">
        <Link to="/" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>
        <h1 className="wishlist-title">Your Wishlist</h1>
        <div className="wishlist-items">
          {/* Wishlist items will be added here */}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage; 