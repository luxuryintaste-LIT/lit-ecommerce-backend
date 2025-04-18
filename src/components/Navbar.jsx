import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';
import logoImage from '../img/logo.png';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, notification } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <Link to="/game-modes" className="nav-link" onClick={toggleMenu}>Game modes</Link>
          <Link to="/store" className="nav-link active" onClick={toggleMenu}>Store</Link>
          <Link to="/profile" className="nav-link" onClick={toggleMenu}>Profile</Link>
          <Link to="/leaderboard" className="nav-link" onClick={toggleMenu}>Leaderboard</Link>
          <Link to="/settings" className="nav-link" onClick={toggleMenu}>Settings</Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="nav-links desktop-only">
        <Link to="/game-modes" className="nav-link">Game modes</Link>
        <Link to="/store" className="nav-link active">Store</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </div>

      <div className="navbar-right">
        <Link to="/notifications" className="notification-icon">
          <i className="far fa-bell"></i>
        </Link>
        <div className="user-profile">
          <img src="/default-avatar.png" alt="Profile" className="profile-image" />
        </div>
      </div>

      <div className="nav-icons">
        <Link to="/wishlist" className="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </Link>
        <Link to="/cart" className="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {cart.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}
        </Link>
      </div>

      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 