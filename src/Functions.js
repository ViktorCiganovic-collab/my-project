
import React from 'react';

// Increment.js
const Increment = (productId) => {
  // Retrieve current basket from localStorage or initialize as an empty array
  let basket = JSON.parse(localStorage.getItem("data")) || [];

  // Check if the product is already in the basket
  const existingProduct = basket.find(item => item.id === productId);

  if (existingProduct) {
    // If the product exists, increment the quantity
    existingProduct.quantity += 1;
  } else {
    // If the product doesn't exist in the basket, add it with quantity = 1
    basket.push({ id: productId, quantity: 1 });
  }

  // Save the updated basket to localStorage
  localStorage.setItem("data", JSON.stringify(basket));

  // Dispatch a custom event to notify other parts of the app about the update
  window.dispatchEvent(new Event('cart-updated'));
};

export default Increment;
