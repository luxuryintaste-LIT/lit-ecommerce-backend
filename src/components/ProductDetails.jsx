import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Mock product data - in a real app, this would come from an API
  useEffect(() => {
    // Simulating API call
    const mockProduct = {
      id: parseInt(id),
      brand: 'H&M',
      name: 'Regular Fit Cashmere Jumper',
      price: 3199,
      originalPrice: 7999,
      discount: 60,
      description: 'A luxurious cashmere jumper with a regular fit. Made from 100% pure cashmere, this jumper offers exceptional softness and warmth. The regular fit provides a comfortable silhouette that can be dressed up or down for various occasions.',
      details: [
        '100% pure cashmere',
        'Regular fit',
        'Ribbed cuffs and hem',
        'Machine washable',
        'Available in multiple colors',
        'Sizes: S, M, L, XL'
      ],
      colors: ['Black', 'Navy', 'Gray', 'Beige'],
      sizes: ['S', 'M', 'L', 'XL'],
      images: [
        '/src/img/men.png',
        '/src/img/men.png',
        '/src/img/men.png',
        '/src/img/men.png'
      ],
      inStock: true
    };
    
    setProduct(mockProduct);
    if (mockProduct.colors.length > 0) {
      setSelectedColor(mockProduct.colors[0]);
    }
    if (mockProduct.sizes.length > 0) {
      setSelectedSize(mockProduct.sizes[0]);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select both color and size');
      return;
    }
    // Add to cart logic would go here
    alert(`Added to cart: ${product.name} - ${selectedColor} - ${selectedSize} - Quantity: ${quantity}`);
  };

  const handleBuyNow = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select both color and size');
      return;
    }
    // Buy now logic would go here
    alert(`Buying now: ${product.name} - ${selectedColor} - ${selectedSize} - Quantity: ${quantity}`);
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <div className="product-images">
          <div className="main-image">
            <img src={product.images[activeImage]} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <div 
                key={index} 
                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-info-details">
          <div className="brand-name">{product.brand}</div>
          <h1 className="product-name">{product.name}</h1>
          
          <div className="price-container">
            <div className="current-price">Rs. {product.price.toLocaleString()}</div>
            {product.originalPrice && (
              <div className="original-price">Rs. {product.originalPrice.toLocaleString()}</div>
            )}
            {product.discount && (
              <div className="discount">{product.discount}% OFF</div>
            )}
          </div>
          
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          
          <div className="color-selection">
            <h3>Color</h3>
            <div className="color-options">
              {product.colors.map((color) => (
                <div 
                  key={color}
                  className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>
          
          <div className="size-selection">
            <h3>Size</h3>
            <div className="size-options">
              {product.sizes.map((size) => (
                <div 
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          
          <div className="quantity-selection">
            <h3>Quantity</h3>
            <div className="quantity-selector">
              <button 
                className="quantity-btn" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button 
                className="quantity-btn" 
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="product-actions">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
          
          <div className="product-details-list">
            <h3>Product Details</h3>
            <ul>
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 