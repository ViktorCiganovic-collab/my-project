import React from 'react';

const Increment = (productId) => {
  // Get the current cart from localStorage or initialize as empty array
  let basket = JSON.parse(localStorage.getItem("data")) || [];

  // Check if the product is already in the basket
  const existingProduct = basket.find(item => item.id === productId);

  if (existingProduct) {
    // If product already exists, increment the quantity
    existingProduct.quantity += 1;
  } else {
    // If product doesn't exist in the basket, add it with a quantity of 1
    basket.push({ id: productId, quantity: 1 });
  }

  // Save the updated basket back to localStorage
  localStorage.setItem("data", JSON.stringify(basket));

  console.log(basket)
};

export default Increment;
