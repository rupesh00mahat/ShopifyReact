import React from "react";
import "../css/shopify-store.css";
import { useDispatch } from "react-redux";

function ShopifyItem(props) {
  const {id,  title, description, image, price, category } = props;

  const dispatch = useDispatch();

  return (
    <div className="shopify-item">
      <a href="">
        <div className="shopify-item-img-wrapper">
          <img src={image} />
        </div>
      </a>
      <div className="item-description-wrapper">
        <h3>{title}</h3>
        <p>{description.slice(0, 100)}........</p>
        <div className="add-to-cart-and-pricing-wrapper">
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: {
                  id, 
                  image, title, description, price, quantity: 1
                }
              });
            }}
            className="add-to-cart"
          >
            Add to Cart
          </button>
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
}

export default ShopifyItem;
