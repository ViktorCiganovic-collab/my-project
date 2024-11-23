
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './iconCart.png';

const Header = () => {
  return (
    <header className='flex justify-between items-center mb-5 bg-slate-900 p-5 rounded-lg'>
    <Link to="/" className='text-xl font-semibold text-white'>Home</Link>
    <div className='w-10 h-10 bg-gray-100 rounded-full
    flex justify-center items-center relative hover:scale-110 shopping_cart'>
    <Link to="/cart">
        <img src={CartIcon} alt="" className='w-6'/>
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
        w-5 h-5 rounded-full flex justify-center items-center'>0</span>
    </Link>
    </div>
    </header>
  )
}

export default Header