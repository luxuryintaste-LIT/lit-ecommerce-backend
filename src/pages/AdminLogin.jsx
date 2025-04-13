import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from '../config/authConfig';
import '../styles/AdminLogin.css';

const AdminLogin = () => {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    // If user is already logged in, redirect to admin dashboard
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
    try {
      setError('');
      // Use loginRedirect instead of loginPopup for better SPA compatibility
      await instance.loginRedirect(loginRequest);
      // Note: The redirect will happen automatically, so code after this won't execute
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h1>Admin Login</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="login-content">
          <p>Please sign in with your Microsoft account to access the admin dashboard.</p>
          <button onClick={handleLogin} className="login-button">
            Sign in with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin; 