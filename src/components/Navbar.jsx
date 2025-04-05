import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src="/src/img/logo.png" alt="Logo" className="logo-image" />
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
    </nav>
  );
};

export default Navbar; 