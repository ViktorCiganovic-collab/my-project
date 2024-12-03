import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import image1 from './pexels-solliefoto-298863.jpg';
import image2 from './pexels-goumbik-293405.jpg';
import image3 from './pexels-joshsorenson-1485166.jpg';
import image4 from './pexels-mnzoutfits-1598508.jpg';
import image5 from './pexels-momentsbypeterpatel-637076.jpg';
import image6 from './pexels-pixabay-267326.jpg';
import image7 from './pexels-themagpie-87835.jpg';
import image8 from './pexels-webdonut-19090.jpg';
import image9 from './pexels-ankurbagai-1280064.jpg';
import image10 from './pexels-duncanoluwaseun-186035.jpg';
import image11 from './pexels-ankurbagai-1280064.jpg';
import image12 from './pexels-michael-morse-2989593.jpg';
import image13 from './pexels-omar-markhieh-637410-1447262.jpg';
import image14 from  './pexels-frans-van-heerden-201846-847371.jpg';


const products = [
  { id: 1, slug: "air-max-270-react", name: "Air Max 270 React", description: "A sleek and stylish sneaker with a responsive cushioning system.", image: image1, price: 150.00 },
  { id: 2, slug: "nike-free-rn-5-0", name: "Nike Free RN 5.0", description: "Lightweight and flexible running shoes for ultimate comfort.", image: image2, price: 120.00 },
  { id: 3, slug: "adidas-ultraboost-22", name: "Adidas UltraBoost 22", description: "Experience unmatched comfort with UltraBoost cushioning.", image: image3, price: 180.00 },
  { id: 4, slug: "reebok-nano-x2", name: "Reebok Nano X2", description: "Versatile cross-training shoe built for stability.", image: image4, price: 130.00 },
  { id: 5, slug: "converse-chuck-taylor-all-star", name: "Converse Chuck Taylor All Star", description: "Classic casual shoes with iconic canvas material.", image: image5, price: 60.00 },
  { id: 6, slug: "puma-suede-classic", name: "Puma Suede Classic", description: "Retro-inspired sneaker with premium suede.", image: image6, price: 75.00 },
  { id: 7, slug: "new-balance-990v5", name: "New Balance 990v5", description: "Performance running shoes with superior cushioning.", image: image7, price: 175.00 },
  { id: 8, slug: "vans-old-skool", name: "Vans Old Skool", description: "Iconic skate shoes with canvas and suede construction.", image: image8, price: 65.00 },
  
  // New products
  { id: 9, slug: "adidas-nmd-r1", name: "Adidas NMD R1", description: "Stylish and comfortable sneaker with Boost cushioning.", image: image9, price: 140.00 },
  { id: 10, slug: "under-armour-hovr-sonic-4", name: "Under Armour HOVR Sonic 4", description: "Running shoes with HOVR cushioning technology for energy return.", image: image10, price: 120.00 },
  { id: 11, slug: "asics-gel-kayano-28", name: "Asics Gel-Kayano 28", description: "A high-performance stability shoe for long-distance runners.", image: image11, price: 160.00 },
  { id: 12, slug: "nike-air-zoom-pegasus-39", name: "Nike Air Zoom Pegasus 39", description: "Breathable and responsive running shoes for everyday training.", image: image12, price: 130.00 },
  { id: 13, slug: "saucony-ride-15", name: "Saucony Ride 15", description: "Neutral running shoes with excellent cushioning and durability.", image: image13, price: 140.00 },
  { id: 14, slug: "brooks-adrenaline-gts-22", name: "Brooks Adrenaline GTS 22", description: "Supportive running shoes that deliver smooth transitions.", image: image14, price: 120.00 }
];


const Cart = () => {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [cartAmount, setCartAmount] = useState(0);

  const updateLocalStorage = (newBasket) => {
    localStorage.setItem("data", JSON.stringify(newBasket));
    setBasket(newBasket);
  };

  const increment = (id) => {
    const newBasket = [...basket];
    const productIndex = newBasket.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      newBasket[productIndex].quantity += 1;  // Use 'quantity' here
    } else {
      newBasket.push({ id, quantity: 1 });   // Use 'quantity' here
    }
    updateLocalStorage(newBasket);
  };

  const decrement = (id) => {
    const newBasket = [...basket];
    const productIndex = newBasket.findIndex((item) => item.id === id);
    if (productIndex !== -1 && newBasket[productIndex].quantity > 0) {
      newBasket[productIndex].quantity -= 1;
      if (newBasket[productIndex].quantity === 0) {
        newBasket.splice(productIndex, 1);
      }
      updateLocalStorage(newBasket);
    }
  };

  const removeItem = (id) => {
    const newBasket = basket.filter((item) => item.id !== id);
    updateLocalStorage(newBasket);
  };

  const clearCart = () => {
    updateLocalStorage([]);
  };

  const totalAmount = () => {
    return basket.reduce((total, x) => {
      const product = products.find((y) => y.id === x.id);
      return total + (product ? x.quantity * product.price : 0);  // Use 'quantity' here
    }, 0);
  };

  useEffect(() => {
    const totalItems = basket.reduce((total, item) => total + item.quantity, 0);  // Use 'quantity' here
    setCartAmount(totalItems);
  }, [basket]);

  const generateCartItems = () => {
    return basket.map((x) => {
      const product = products.find((y) => y.id === x.id);
      if (!product) return null;
      return (
        <div key={x.id} className="cart-item mb-2 card checkout_cards max-w-xs flex flex-col justify-center">
          <Link to={`/${product.slug}`}><img className="object-cover w-40 cartImgs" src={product.image} alt="" /></Link>
          <div className="details detailsInCart">
            <div className="title-price-x">
              <h4 className="title-price">{product.name}</h4>
              <i onClick={() => removeItem(x.id)} className="fa fa-x"></i>
            </div>
            <div className="buttons flex flex-row justify-center gap-5 p-3">
              <span onClick={() => decrement(x.id)} className="addBtns">-</span>
              <div className="quantity quantitycart">
                {x.quantity} {/* Use 'quantity' */}
              </div>
              <span onClick={() => increment(x.id)} className="addBtns">+</span>
            </div>
            <h3>Price: ${(x.quantity * product.price).toFixed(2)}</h3>  {/* Use 'quantity' */}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="">
      <h2 className="text-4xl my-3 text-slate-900 font-extrabold">Shopping Cart</h2>

      <div className="flex flex-row justify-around flex-wrap w-[1200px] max-w-full">

        <div className="checkoutProducts flex flex-col w-96 justify-center gap-12">
          {basket.length !== 0 ? generateCartItems() : <h2>Cart is Empty</h2>}
        </div>

        <div className="flex flex-col gap-5 w-3/5 justify-center items-center">

        <div id="label" className="flex flex-col gap-5 items-center">
          {basket.length !== 0 ? (
            <>
              <h2 className="">Total Bill: <strong className="">${totalAmount().toFixed(2)}</strong></h2>
              <button onClick={clearCart} className="removeAll cartBtn text-white bg-slate-600 p-5 hover:bg-slate-500 rounded-lg">
                Clear Cart
              </button>
            </>
          ) : (
            <Link to="/">
              <button className="cartBtn bg-slate-600 p-5 hover:bg-slate-500 rounded-lg text-white">Back to home</button>
            </Link>
          )}
        </div>

        <div>
          <h3>Cart items: <strong>{cartAmount}</strong></h3>
        </div>

        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-4 min-w-96">
            <input type="text" name="name_checkout" placeholder="Your Name" required />
            <input type="email" name="email_checkout" placeholder="Your Email" required />
            <button type="submit" className="checkout cartBtn text-white bg-slate-600 p-5 hover:bg-slate-500 rounded-lg">
              Submit Order
            </button>
          </form>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Cart;

