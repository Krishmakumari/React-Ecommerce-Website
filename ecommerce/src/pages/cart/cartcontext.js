import React, { createContext, useContext, useState } from 'react';

// Create the Cart context
const CartContext = createContext();

// Custom hook to use Cart context
export const useCart = () => useContext(CartContext);

// CartProvider to manage cart state and provide it to the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart or update quantity if item already exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex >= 0) {
        // If the product is already in the cart, update the quantity
        const updatedCart = prevCart.map((item) => 
          item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
        return updatedCart;
      } else {
        // If the product is not in the cart, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // Update quantity of an item in the cart
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return; // Prevent quantity from going below 1
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

