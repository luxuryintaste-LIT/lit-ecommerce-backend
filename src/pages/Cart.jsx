import React from 'react';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <div className="cart-container" style={{ minHeight: '70vh', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '20px' }}>Your Cart</h1>
        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item" style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px',
                  borderBottom: '1px solid #eee',
                  gap: '20px'
                }}>
                  <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                  <div className="item-details" style={{ flex: 1 }}>
                    <h3>{item.name}</h3>
                    <p>€{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      padding: '5px 10px',
                      background: 'black',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary" style={{ marginTop: '20px', textAlign: 'right' }}>
              <h2>Total: €{calculateTotal()}</h2>
              <button
                style={{
                  padding: '10px 20px',
                  background: 'black',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart; 