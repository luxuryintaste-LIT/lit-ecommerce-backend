import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useWishlist } from '../context/WishlistContext';
import '../styles/WishlistPage.css';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemoveClick = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromWishlist(productId);
  };

  return (
    <div className="wishlist-page">
      <Navbar />
      <div className="back-button-container">
        <Link to="/" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </Link>
      </div>
      <div className="wishlist-container">
        <h1 className="wishlist-title">Your Wishlist</h1>
        <div className="wishlist-items">
          {wishlist.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="wishlist-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button 
                className="remove-from-wishlist"
                onClick={(e) => handleRemoveClick(e, product.id)}
              >
                Remove
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage; 