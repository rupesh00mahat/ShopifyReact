import React from "react";
import "../css/shopify-store.css";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  let price = 0;

  const navigate = useNavigate();

  return (
    <div className="shopify-cart-wrapper">
      <div className="shopify-cart-header">
        <FaShoppingCart />

        <h2>Your Shopping Carts</h2>
        <span
          className="cart-closer"
          onClick={() => {
            let cart = document.querySelector(`.shopify-cart-wrapper`);
            cart.classList.remove("shopify-cart-visible");
            let storeBody = document.querySelector(`.store-area`);

            storeBody.classList.remove("opacity-3");
          }}
        >
          X
        </span>
      </div>
      {cartItems.length === 0 && (
        <div className="shopify-cart-body">Your cart is empty : (</div>
      )}{" "}
      <div className="shopify-cart-items">
      {cartItems.map((item, index) => {
        price = price+item.price;
        if(index === cartItems.length-1){
        }
        return (
          <div className="shopify-cart-item">
            <img src={item.image} />
            <div className="shopify-cart-item-content">
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 10)}:</p>
              <p className="shopify-cart-item-form">
                Qty:
                <input type="number" value={item.quantity} onChange={(e)=>{
                  console.log(e.target.value);
                  dispatch({type: 'ADD_TO_CART', payload: {id:item.id, image: item.image, title:item.title, description:item.description, quantity:e.target.value, price:item.price}})
                }} />
              </p>
              <h3 className="shopify-cart-item-price">${item.price}</h3>
            </div>
            <span className="shopify-cart-item-close-btn">X</span>
          </div>
        );
      })}
      </div>
      <div className="shopify-cart-footer">
        <div className="cart-checkout">
          <span>Checkout</span>
          <span>${price}</span>
        </div>
        <button
        onClick={()=>{
          navigate("/checkout");
        }}
        >Go to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
