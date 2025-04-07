import React, { useState } from 'react';
import ProductCard from './ProductCard';
import menWomenImage from '../img/men.png';  // Import the image directly
import '../styles/ProductList.css';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'kids', name: 'Kids' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'newest', name: 'Newest First' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' }
  ];

  // Sample product data - replace with your actual data
  const products = [
    {
      id: 1,
      brand: 'H&M',
      name: 'Regular Fit Cashmere jumper',
      price: 3199,
      originalPrice: 7999,
      discount: 60,
      image: menWomenImage  // Use the imported image
    },
    {
      id: 2,
      brand: 'H&M',
      name: 'Regular Fit Cashmere jumper',
      price: 3199,
      originalPrice: 7999,
      discount: 60,
      image: menWomenImage  // Use the imported image
    },
    {
      id: 3,
      brand: 'H&M',
      name: 'Regular Fit Cashmere jumper',
      price: 3199,
      originalPrice: 7999,
      discount: 60,
      image: menWomenImage  // Use the imported image
    },
    // Add more products as needed
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <section className="products-section">
      <div className="glass-container">
        <h2 className="section-title">Fresh Arrivals</h2>
        
        <div className="filters-container">
          <div className="categories-wrapper">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="sort-wrapper">
            <select 
              value={sortBy}
              onChange={handleSortChange}
              className="sort-select"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="product-list-container">
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList; 