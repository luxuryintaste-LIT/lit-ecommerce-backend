import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryCards from './components/CategoryCards';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import bodyBg from './img/body-bg.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <SearchBar />
        <CategoryCards />
        <FilterBar />
        <ProductList />
      </div>
    </Router>
  );
} 

export default App;
