
import { useState } from "react";

var Decrement = (productId) => {

let basket = JSON.parse(localStorage.getItem("data")) || [];

const existingProduct = basket.find((item) => item.id === productId);

if (!existingProduct) return;

if (existingProduct.quantity === 1) {
    basket = basket.filter((item) => item.id !== productId)
} else {
    existingProduct.quantity -= 1;
}

 // Save the updated basket to localStorage
 localStorage.setItem("data", JSON.stringify(basket));

 // Dispatch a custom event to notify other parts of the app about the update
 window.dispatchEvent(new Event('cart-updated'));

}

export default Decrement;