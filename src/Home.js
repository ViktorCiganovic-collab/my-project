import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { shoesData } from './Products';

const Home = () => {

  const [products, setProducts] = useState(shoesData);

  const filterCategories = (event) => {
    var category = event.target.value;
  
    if (category === "all") {
      setProducts(shoesData);
    } else if (category === "Casual") {
      var casualCategory = shoesData.filter((shoes) => shoes.category === "Casual");
      setProducts(casualCategory); 
    } else if (category === "Running") {
      var runningCategory = shoesData.filter((shoes) => shoes.category === "Running")
      setProducts(runningCategory);
    } else if (category === "Cross Training") {
      var crossTraining = shoesData.filter((shoes) => shoes.category === "Cross Training")
      setProducts(crossTraining);
    } else if (category === "Trail Running") {
      var trailRunning = shoesData.filter((shoes) => shoes.category === "Trail Running")
      setProducts(trailRunning);
    } else {
      var workShoes = shoesData.filter((shoes) => shoes.category === "Work")
      setProducts(workShoes);
    }
  }
  

  return (
    <div className='w-full home me-auto ms-auto mx-auto'>

    <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-5 my-5">
      <button onClick={filterCategories} value='all' className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition">All Products</button>
      <button onClick={filterCategories} value='Casual' className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition">Casual</button>
      <button onClick={filterCategories} value='Running' className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition">Running</button>
      <button onClick={filterCategories} value='Cross Training' className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition">Cross-Training</button>
      <button onClick={filterCategories} value='Trail Running' className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition">Trail Running</button>
      <button onClick={filterCategories} value='Work' className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition">Work</button>
    </div>

        <p className="text-slate-900 font-extrabold text-4xl text-left">Product List</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 my-5'>
        {products.map((shoes) => (
            <ProductCard key={shoes.id} product={shoes} />
        ))}
        </div>
        
    </div>
  )
}

export default Home;