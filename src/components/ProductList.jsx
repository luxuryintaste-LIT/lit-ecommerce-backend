import React from 'react';
import ProductCard from './ProductCard';
import menWomenImage from '../img/men.png';  // Import the image directly
import '../styles/ProductList.css';

const ProductList = () => {
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

  return (
    <section className="products-section">
      <div className="glass-container">
        <h2 className="section-title">Fresh Arrivals</h2>
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