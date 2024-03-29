import React from "react";
import "../css/navbar-and-home.css";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function Navbar(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  return (
    <header>
      <nav id="navbar">
        <span className="brand-name">
          <a>React Shopify</a>
        </span>
        <ul id="navbar-navigation-lists">
          <li className="navbar-navigation-list navbar-navigation-list-home">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-navigation-list navbar-navigation-list-men">
            <Link
              onClick={() => {
                dispatch({ type: "EDIT_TAGS", payload: "men" });
              }}
              to="/shop"
            >
              Men
            </Link>
          </li>
          <li className="navbar-navigation-list navbar-navigation-list-women">
            <Link
              onClick={() => {
                dispatch({ type: "EDIT_TAGS", payload: "female" });
              }}
              to="/shop"
            >
              Women
            </Link>
          </li>
          <li className="navbar-navigation-list navbar-navigation-list-jewelery">
            <Link
              onClick={() => {
                dispatch({ type: "EDIT_TAGS", payload: "jewelery" });
              }}
              to="/shop"
            >
              Jewelery
            </Link>
          </li>

          <li className="navbar-navigation-list navbar-navigation-list-explore-all">
            <Link
              onClick={() => {
                dispatch({ type: "EDIT_TAGS", payload: "products" });
              }}
              to="/shop"
            >
              Explore All
            </Link>
          </li>
        </ul>
        <div
          onClick={() => {
            let cart = document.querySelector(`.shopify-cart-wrapper`);
            cart.classList.add("shopify-cart-visible");

            let storeBody = document.querySelector(`.store-area`);

            storeBody.classList.add("opacity-3");
          }}
          className="cart-icon"
        >
          <IoCartOutline />
          <span className="cart-item-count">{cartItems.length}</span>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
