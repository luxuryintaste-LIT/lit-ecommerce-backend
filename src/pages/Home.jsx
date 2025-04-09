import React from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ProductList from '../components/ProductList';
import '../styles/Home.css';

function Home() {
  return (
    <main className="home">
      <SearchBar />
      <FilterBar />
      <ProductList />
    </main>
  );
}

export default Home; 