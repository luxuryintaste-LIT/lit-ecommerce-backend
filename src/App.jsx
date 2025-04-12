import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryCards from './components/CategoryCards';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import ProductDetailsPage from './pages/ProductDetailsPage';
import bodyBg from './img/body-bg.png';
import './App.css';

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
      </Routes>
    </Router>
  );
} 

export default App;
