import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";

function Checkout() {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  const [price, setPrice] = useState(0);

  useEffect(()=>{
    let totalPrice = 0;
    cartItems.forEach((cartItem)=>{
      totalPrice = totalPrice+parseFloat(cartItem.price);
    })
    setPrice(totalPrice);
  }, [cartItems])

  return (
    <>
      {
        cartItems.map(
          ({ description, id, image, price, quantity, title }, index) => {
            return <div key={`${id}-${title}`} className="checkout-item">
                <img src={image} loading="lazy" alt={title}/>
                <span className="item-title">{title}</span>
                <span className="quantity">{quantity}</span>
                <span className="price">{price}</span>
            </div>;
          }
        )}
        <div className="checkout-item checkout-total">
          <span><strong>Total</strong></span>
          <span>Rs. <strong>{price}</strong> </span>
        </div>
    </>
  );
}

export default Checkout;
