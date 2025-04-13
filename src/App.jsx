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
import bodyBg from './img/body-bg.png';
import './App.css';

// Protected route component
const ProtectedRoute = ({ children }) => {
  // Check if user is authenticated using sessionStorage
  const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
  
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

// Simple admin dashboard component
const AdminDashboard = () => {
  const handleLogout = () => {
    // Clear authentication status from sessionStorage
    sessionStorage.removeItem('adminAuthenticated');
    // Redirect to login page
    window.location.href = '/admin/login';
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      <p>Welcome to the admin dashboard. You are now authenticated.</p>
    </div>
  );
};

function App() {
  return (
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
  );
} 

export default App;
