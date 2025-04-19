import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/GameModesPage.css';

const GameModesPage = () => {
  const [activeTab, setActiveTab] = useState('clothing');
  const [notifications] = useState([
    {
      id: 1,
      type: 'friend',
      message: 'New Friend Request – Game master42 wants to be friends',
      buttons: ['Accept', 'Decline']
    },
    {
      id: 2,
      type: 'game',
      message: 'Game Invite – Team battle in Tournament mode',
      buttons: ['Join', 'Skip']
    }
  ]);

  const [leaderboard] = useState([
    { rank: 1, username: 'LuxuryinTaste', coins: 555 },
    { rank: 2, username: 'Gamer42', coins: 534 },
    { rank: 3, username: 'Alix Johnson', coins: 510 },
    { rank: 4, username: 'Mariya Satnova', coins: 500 },
    { rank: 5, username: 'Liya James', coins: 485 }
  ]);

  const gameModes = [
    {
      id: 1,
      title: 'Single Mode',
      description: 'Normal game mode with two options',
      image: '/path-to-image-1.jpg'
    },
    {
      id: 2,
      title: 'Tournament Mode',
      description: '8 players facing off in elimination',
      image: '/path-to-image-2.jpg'
    },
    {
      id: 3,
      title: 'Team Battle',
      description: 'Team up with your friends',
      image: '/path-to-image-3.jpg'
    },
    {
      id: 4,
      title: 'Fashion Showdown',
      description: 'Among 6, one wins based on fashion',
      image: '/path-to-image-4.jpg'
    }
  ];

  return (
    <div className="game-modes-page">
      <Navbar />
      <div className="game-modes-container">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="quick-menu">
            <h2>Quick Menu</h2>
            <ul>
              <li className="active">Game Mode</li>
              <li>Tournaments</li>
              <li>Shop</li>
              <li>Friends</li>
            </ul>
          </div>

          <div className="notifications">
            <h3>Recent Notifications</h3>
            {notifications.map(notification => (
              <div key={notification.id} className="notification-card">
                <p>{notification.message}</p>
                <div className="notification-buttons">
                  {notification.buttons.map(button => (
                    <button key={button} className="notification-btn">
                      {button}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Top Tabs */}
          <div className="content-header">
            <div className="tabs">
              <button 
                className={activeTab === 'clothing' ? 'active' : ''}
                onClick={() => setActiveTab('clothing')}
              >
                Clothing
              </button>
              <button 
                className={activeTab === 'bags' ? 'active' : ''}
                onClick={() => setActiveTab('bags')}
              >
                Bags
              </button>
              <button 
                className={activeTab === 'accessories' ? 'active' : ''}
                onClick={() => setActiveTab('accessories')}
              >
                Accessories
              </button>
              <button 
                className={activeTab === 'footwear' ? 'active' : ''}
                onClick={() => setActiveTab('footwear')}
              >
                Footwear
              </button>
            </div>
            <select className="category-filter">
              <option>Category ▼</option>
            </select>
          </div>

          {/* Game Mode Cards */}
          <div className="game-modes-grid">
            {gameModes.map(mode => (
              <div key={mode.id} className="game-mode-card">
                <img src={mode.image} alt={mode.title} />
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
                <button className="play-now-btn">Play Now</button>
              </div>
            ))}
          </div>

          {/* Leaderboard */}
          <div className="leaderboard-section">
            <div className="leaderboard-header">
              <h2>Leaderboard</h2>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="leaderboard-card">
              {leaderboard.map(player => (
                <div key={player.rank} className="leaderboard-item">
                  <span className="rank">#{player.rank}</span>
                  <div className="player-info">
                    <span className="username">{player.username}</span>
                    <span className="coins">
                      <img src="/coin-icon.png" alt="coins" />
                      {player.coins}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="game-modes-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo">L T</div>
          </div>
          <div className="footer-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Services</Link>
          </div>
          <div className="footer-right">
            <div className="community-section">
              <input type="email" placeholder="Enter your email" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <div className="social-icons">
              <a href="#"><img src="/email-icon.png" alt="Email" /></a>
              <a href="#"><img src="/linkedin-icon.png" alt="LinkedIn" /></a>
              <a href="#"><img src="/instagram-icon.png" alt="Instagram" /></a>
              <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
            </div>
            <div className="app-download">
              <button className="play-store-btn">Google Play</button>
              <button className="app-store-btn">App Store</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameModesPage; 