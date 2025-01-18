import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { shoesData } from './Products';  // Import the shoesData
import { useEffect } from 'react';
import Increment from "./Functions";
import Decrement from './Decrement';

const Detail = () => {
  const { slug } = useParams();  // Get the slug from the URL
  const product = shoesData.find((item) => item.slug === slug);  // Find the product by slug
  const [cartAmount, setCartAmount] = useState(0);
  const [currentProductQuantity, setCurrentProductQuantity] = useState(0);

  const currentProd = () => {

    var basket = JSON.parse(localStorage.getItem("data")) || [];
    
    const foundProduct = basket.find((item) => item.id === product.id);

      if (foundProduct) {

        setCurrentProductQuantity(foundProduct.quantity || 0);
      } 
      else {

        setCurrentProductQuantity(0);

      }  

     

  }  

  const updateCartAmount = () => {

  var basket = JSON.parse(localStorage.getItem("data")) || [];
  const totalQuantity =
  basket.map(item => item.quantity).filter(quantity => !isNaN(quantity)).reduce((accumulated, currentValue) => {

    return accumulated + currentValue;}, 0);

    setCartAmount(totalQuantity);
  }

  useEffect(() => {
    currentProd();
    updateCartAmount(); // Update the cart amount initially when the component loads
  }, []);  // Empty dependency array ensures it only runs once on mount

  //-------------------------------------------------------------

  const handleAddToCart = () => {
    Increment(product.id); // Add product to cart
    currentProd();
    updateCartAmount();
  };

  const handleDecrement = () => {
    Decrement(product.id);
    currentProd();
    updateCartAmount();
  }

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
          <p className="text-xl font-bold mt-4">${product.price}</p>
          
         
          <div className="flex flex-row gap-5 my-3 buttonsDetailpage">

          <span onClick={handleDecrement} className='addBtns'>-</span>
          <strong>{currentProductQuantity}</strong>
          <span onClick={handleAddToCart} className="addBtns">+</span>

          </div>

          <div className="flex gap-5 btn-group my-5" role="group" aria-label="Size selection">
            <button className='btns'>XS</button>
            <button className='btns'>S</button>
            <button className='btns'>M</button>
            <button className='btns'>L</button>
          </div>



        </div>

      </div>
    </div>
  );
};

export default Detail;




