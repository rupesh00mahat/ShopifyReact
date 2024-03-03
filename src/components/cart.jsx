import React from "react";
import '../css/shopify-store.css'
import { FaShoppingCart } from "react-icons/fa";


function Cart() {
  return (
    <div className="shopify-cart-wrapper">
      <div className="shopify-cart-header">
        <FaShoppingCart />

        <h2>Your Shopping Carts</h2>
        <span>X</span>
      </div>
      <div className="shopify-cart-body">
        Your cart is empty : (
      </div>
      <div className="shopify-cart-footer">
        <div className="cart-checkout">
            <span>Checkout</span>
            <span>$0.00</span>
        </div>
        <button>Go to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
