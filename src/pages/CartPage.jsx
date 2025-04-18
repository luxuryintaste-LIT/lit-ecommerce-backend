import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0.00; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-items-section">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <Link to="/" className="continue-shopping">Continue Shopping</Link>
              </div>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                      <div className="item-brand">{item.brand}</div>
                      <div className="item-name">{item.name}</div>
                      <div className="item-code">GIGLIO CODE: {item.code}</div>
                      <button 
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        REMOVE
                      </button>
                    </div>
                    <div className="item-color">
                      <span className="label">COLOUR</span>
                      <span>{item.color}</span>
                    </div>
                    <div className="item-size">
                      <span className="label">SIZE</span>
                      <span>{item.size}</span>
                    </div>
                    <div className="item-quantity">
                      <span className="label">QUANTITY</span>
                      <select 
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <div className="item-total">
                      <span className="label">TOTAL</span>
                      <span>€{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>SUBTOTAL</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>SHIPPING</span>
                <span>€{shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>TOTAL</span>
                <div className="total-amount">
                  <span>€{total.toFixed(2)}</span>
                  <span className="converted-amount">(¥{(total * 108.22).toFixed(2)})</span>
                </div>
              </div>
              <div className="amount-note">The amount is debited in €.</div>
              <button className="checkout-button">PROCEED TO CHECKOUT</button>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="promotional-code">
            <h3>Promotional Code</h3>
            <div className="promo-input">
              <input type="text" placeholder="Enter the promo code" />
              <button>APPLY</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage; 