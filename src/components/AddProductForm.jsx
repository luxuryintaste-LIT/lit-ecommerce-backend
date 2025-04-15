import React, { useState } from 'react';
import '../styles/AddProductForm.css';

const AddProductForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    brandName: '',
    productName: '',
    originalPrice: '',
    currentPrice: '',
    discountPercentage: '',
    description: '',
    colors: [],
    colorImages: {},
    sizes: [],
    features: []
  });

  const [newFeature, setNewFeature] = useState('');
  const [newSize, setNewSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [colorImages, setColorImages] = useState([]);

  const availableColors = [
    'Red', 'Blue', 'Green', 'Black', 'White', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleColorSelect = (color) => {
    if (!formData.colors.includes(color)) {
      setFormData(prev => ({
        ...prev,
        colors: [...prev.colors, color],
        colorImages: {
          ...prev.colorImages,
          [color]: []
        }
      }));
    }
    setSelectedColor(color);
  };

  const handleImageUpload = (e, color) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      colorImages: {
        ...prev.colorImages,
        [color]: [...(prev.colorImages[color] || []), ...files]
      }
    }));
  };

  const handleAddSize = () => {
    if (newSize && !formData.sizes.includes(newSize)) {
      setFormData(prev => ({
        ...prev,
        sizes: [...prev.sizes, newSize]
      }));
      setNewSize('');
    }
  };

  const handleAddFeature = () => {
    if (newFeature && !formData.features.includes(newFeature)) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature]
      }));
      setNewFeature('');
    }
  };

  const handleRemoveColor = (color) => {
    setFormData(prev => {
      const newColors = prev.colors.filter(c => c !== color);
      const newColorImages = { ...prev.colorImages };
      delete newColorImages[color];
      return {
        ...prev,
        colors: newColors,
        colorImages: newColorImages
      };
    });
  };

  const handleRemoveSize = (size) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.filter(s => s !== size)
    }));
  };

  const handleRemoveFeature = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(f => f !== feature)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form Data:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="add-product-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Brand Name</label>
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Original Price</label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Current Price</label>
              <input
                type="number"
                name="currentPrice"
                value={formData.currentPrice}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Discount Percentage</label>
              <input
                type="number"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Colors</label>
            <div className="color-selection">
              <select
                value={selectedColor}
                onChange={(e) => handleColorSelect(e.target.value)}
              >
                <option value="">Select a color</option>
                {availableColors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
              <div className="selected-colors">
                {formData.colors.map(color => (
                  <div key={color} className="color-tag">
                    <span>{color}</span>
                    <button type="button" onClick={() => handleRemoveColor(color)}>×</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {selectedColor && (
            <div className="form-group">
              <label>Upload Images for {selectedColor}</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleImageUpload(e, selectedColor)}
              />
              <div className="image-preview">
                {formData.colorImages[selectedColor]?.map((file, index) => (
                  <div key={index} className="preview-item">
                    <img src={URL.createObjectURL(file)} alt={`Preview ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="form-group">
            <label>Sizes</label>
            <div className="size-input">
              <input
                type="text"
                value={newSize}
                onChange={(e) => setNewSize(e.target.value)}
                placeholder="Add size (e.g., S, M, L)"
              />
              <button type="button" onClick={handleAddSize}>Add</button>
            </div>
            <div className="selected-sizes">
              {formData.sizes.map(size => (
                <div key={size} className="size-tag">
                  <span>{size}</span>
                  <button type="button" onClick={() => handleRemoveSize(size)}>×</button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Features</label>
            <div className="feature-input">
              <input
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Add a feature"
              />
              <button type="button" onClick={handleAddFeature}>Add</button>
            </div>
            <div className="selected-features">
              {formData.features.map(feature => (
                <div key={feature} className="feature-tag">
                  <span>{feature}</span>
                  <button type="button" onClick={() => handleRemoveFeature(feature)}>×</button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">Add Product</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm; 