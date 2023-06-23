import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    let newTotal = 0;
    cartItems.forEach((item) => {
      newTotal += item.price;
    });
    setCartTotal(newTotal);
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartTotal, cartTotal, inputValue, setInputValue}}>
      {children}
    </CartContext.Provider>
  );
};
