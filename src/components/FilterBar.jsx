import React from 'react';
import '../styles/FilterBar.css';

const FilterBar = () => {
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

  return (
    <div className="filter-bar">
      <div className="filter-container">
        <div className="select-wrapper">
          <select className="filter-select">
            <option value="" disabled>Select Category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="select-wrapper">
          <select className="filter-select">
            <option value="" disabled>Sort By</option>
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar; 