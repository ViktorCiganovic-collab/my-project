import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CartIcon from './iconCart.png';

const Header = () => {
  const [cartAmount, setCartAmount] = useState(0);

  
  const updateCartAmount = () => {
    const basket = JSON.parse(localStorage.getItem("data")) || [];
    
    
    const totalQuantity = basket
      .map(item => item.quantity)  
      .filter(quantity => !isNaN(quantity))  
      .reduce((acc, curr) => acc + curr, 0);  

    setCartAmount(totalQuantity);
  };

  useEffect(() => {
    updateCartAmount(); 

   
    const handleCartUpdate = () => {
      updateCartAmount(); 
    };

    
    window.addEventListener('cart-updated', handleCartUpdate);

  
    return () => {
      window.removeEventListener('cart-updated', handleCartUpdate);
    };
  }, []); 

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

