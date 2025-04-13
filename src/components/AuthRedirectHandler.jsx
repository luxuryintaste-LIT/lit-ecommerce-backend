import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/authConfig';

const AuthRedirectHandler = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        // Handle the redirect response
        const response = await instance.handleRedirectPromise();
        
        if (response) {
          // User was redirected from Azure AD login
          console.log('Login successful');
          // Redirect to admin dashboard
          navigate('/admin/dashboard');
        } else {
          // No redirect response, user might have navigated directly to this page
          // Check if user is already authenticated
          const accounts = instance.getAllAccounts();
          if (accounts.length > 0) {
            navigate('/admin/dashboard');
          } else {
            // Not authenticated, redirect to login page
            navigate('/admin/login');
          }
        }
      } catch (error) {
        console.error('Error handling redirect:', error);
        navigate('/admin/login');
      }
    };

    handleRedirect();
  }, [instance, navigate]);

  return (
    <div className="auth-redirect-container">
      <p>Processing authentication...</p>
    </div>
  );
};

export default AuthRedirectHandler; 