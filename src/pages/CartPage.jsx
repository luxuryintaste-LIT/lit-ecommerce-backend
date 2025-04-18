import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleRemoveClick = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromCart(productId);
  };

  const handleQuantityChange = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const filteredCart = selectedCategory === 'all' 
    ? cart 
    : cart.filter(product => product.category === selectedCategory);

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <Navbar />
      <div className="back-button-container">
        <Link to="/" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </Link>
      </div>
      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>
        
        {cart.length > 0 && (
          <div className="filter-container">
            <select 
              className="filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
        )}

        {filteredCart.length === 0 ? (
          <div className="empty-cart">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <p>No items found in this category</p>
            )}
          </div>
        ) : (
          <div className="cart-items">
            {filteredCart.map(product => (
              <div key={product.id} className="cart-item">
                <Link to={`/product/${product.id}`} className="cart-item-link">
                  <img src={product.image} alt={product.name} />
                  <div className="cart-item-details">
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                  </div>
                </Link>
                <div className="cart-item-controls">
                  <input 
                    type="number" 
                    min="1" 
                    value={product.quantity} 
                    onChange={(e) => handleQuantityChange(e, product.id)}
                    className="quantity-input"
                  />
                  <button 
                    className="remove-from-cart"
                    onClick={(e) => handleRemoveClick(e, product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage; 