import React from 'react';
import { useParams } from 'react-router-dom';
import { shoesData } from './Products';  // Import the shoesData

const Detail = () => {
  const { slug } = useParams();  // Get the slug from the URL
  const product = shoesData.find((item) => item.slug === slug);  // Find the product by slug

  // If product is not found, show a 404-like message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail py-8 px-5">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full md:w-2/5 h-auto object-cover" 
        />
        
        <div className="ml-0 md:ml-10 mt-5 md:mt-0">
          {/* Product Name */}
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          
          {/* Product Description */}
          <p className="text-lg mt-4">{product.description}</p>
          
          {/* Product Price */}
          <p className="text-xl font-bold mt-4">{product.price}</p>
          
          {/* Add to Cart Button (if you want to include it on the detail page) */}
          <button className="bg-zinc-500 text-white py-2 px-4 mt-6 rounded-md hover:bg-zinc-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

