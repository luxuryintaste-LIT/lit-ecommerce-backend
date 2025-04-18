import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // For product card items that don't have color/size
    if (!product.color && !product.size) {
      toast.error('Please select color and size first');
      return;
    }

    const existingItem = cart.find(item => 
      item.id === product.id && 
      item.color === product.color && 
      item.size === product.size
    );
    
    if (existingItem) {
      toast.error('This item is already in your cart');
      return;
    }

    setCart([...cart, { ...product, quantity: product.quantity || 1 }]);
    toast.success('Added to cart successfully');
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.success('Removed from cart');
  };

  const updateQuantity = (productId, quantity) => {
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity } 
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; 