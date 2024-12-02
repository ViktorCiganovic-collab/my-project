import React from 'react';
import ProductCard from './ProductCard';
import { shoesData } from './Products';

const Home = () => {
  return (
    <div className='w-full home me-auto ms-auto mx-auto'>
        <p className="text-white font-semibold text-4xl text-left">Product List</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 my-5'>
        {shoesData.map((shoes) => (
            <ProductCard key={shoes.id} product={shoes} />
        ))}
        </div>
        
    </div>
  )
}

export default Home;