import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CartIcon from './iconCart.png';

const Header = () => {
  const [cartAmount, setCartAmount] = useState(0);

  // Function to update cart amount from localStorage
  const updateCartAmount = () => {
    const basket = JSON.parse(localStorage.getItem("data")) || [];
    
    // Calculate the total quantity of items in the basket
    const totalQuantity = basket
      .map(item => item.quantity)  // Get the quantity of each item
      .filter(quantity => !isNaN(quantity))  // Filter out invalid quantities
      .reduce((acc, curr) => acc + curr, 0);  // Sum all quantities

    setCartAmount(totalQuantity);
  };

  useEffect(() => {
    updateCartAmount(); // Update cart amount when the component mounts

    // Listen for the custom 'cart-updated' event
    const handleCartUpdate = () => {
      updateCartAmount(); // Update cart amount when the cart is updated
    };

    // Attach event listener for custom event
    window.addEventListener('cart-updated', handleCartUpdate);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('cart-updated', handleCartUpdate);
    };
  }, []); // This effect runs only once on mount and unmount

  return (
    <header className="flex justify-between items-center mb-5 bg-slate-900 p-5 rounded-lg">
      <Link to="/" className="text-xl text-white font-extrabold">Home</Link>
      <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative hover:scale-110 shopping_cart">
        <Link to="/cart">
          <img src={CartIcon} alt="Cart" className="w-6" />
          <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
            {cartAmount}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

