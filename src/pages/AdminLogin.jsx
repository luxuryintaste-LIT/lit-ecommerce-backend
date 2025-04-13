import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/authConfig';
import '../styles/AdminLogin.css';

const AdminLogin = () => {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    // If user is already logged in, redirect to admin dashboard
    if (accounts.length > 0) {
      navigate('/admin/dashboard');
    }
  }, [accounts, navigate]);

  const handleLogin = async () => {
    try {
      // Attempt to login with Azure AD
      await instance.loginPopup(loginRequest);
      // After successful login, the useEffect will handle the redirect
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
          <p>Please sign in with your Azure AD account to access the admin dashboard.</p>
          <button onClick={handleLogin} className="login-button">
            Sign in with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin; 