import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryCards from './components/CategoryCards';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <CategoryCards />
        <SearchBar />
        <FilterBar />
        <ProductList />
      </div>
    </Router>
  );
} 

export default App;
