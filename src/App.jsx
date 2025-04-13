import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryCards from './components/CategoryCards';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AdminLogin from './pages/AdminLogin';
import AuthProvider from './components/AuthProvider';
import AuthRedirectHandler from './components/AuthRedirectHandler';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import bodyBg from './img/body-bg.png';
import './App.css';

// Protected route component
const ProtectedRoute = ({ children }) => {
  return (
    <>
      <AuthenticatedTemplate>
        {children}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Navigate to="/admin/login" />
      </UnauthenticatedTemplate>
    </>
  );
};

// Simple admin dashboard component (you can replace this with your actual dashboard)
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard. You are now authenticated.</p>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="app">
              <Navbar />
              <SearchBar />
              <CategoryCards />
              <FilterBar />
              <ProductList />
              <Footer />
            </div>
          } />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/auth-redirect" element={<AuthRedirectHandler />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
} 

export default App;
