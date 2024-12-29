import React from "react";
import Increment from "./Functions"; // Ensure this path is correct
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    Increment(product.id); // Add product to cart
  };

  return (
    
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Product Image */}
      <Link to={`/${product.slug}`}>
        <img
        className="w-full m-auto h-56 object-cover drop-shadow-[0_30px_30px_#0007] hover:scale-110 productImg"
        src={product.image}
        alt={product.name}></img>  
      </Link>      
      <div className="px-4 py-4">
        {/* Product Name */}
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>

        {/* Product Price */}
        <p className="text-gray-900 font-bold text-lg mt-4">${product.price}</p>        
        {/* Add to Cart Button */}
        <div className="mt-4 flex justify-center gap-5">
          <button
            className="bg-zinc-500 text-white py-2 rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-400 w-full"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
   
  );
};

export default ProductCard;


  
