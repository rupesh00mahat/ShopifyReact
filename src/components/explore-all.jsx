import React from "react";
import Category from "./category";
import ShopifyItems from "./shopify-items";
import { Provider } from "react-redux";
import store from "../store/shopify-redux-store";
import { useDispatch } from "react-redux";

export function fetchProducts() {
  let url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((products) => {
      return products;
    });
}

function ShopifyStore() {

  const dispatch = useDispatch();
  return (
    <div id="shopify-store">
      <Provider store={store}>
        <Category />

        <div className="store-body">
          <div className="store-category-wrapper">
            <span className="sort-by">Sort By</span>
            <select name="price" id="price" onChange={(e)=>{dispatch({type: 'SORT',payload: e.target.value})}}>
              <option value="desc">Price (Highest to lowest)</option>
              <option value="asc">Price (Lowest to highest)</option>
            </select>
          </div>
          <ShopifyItems />
        </div>
      </Provider>
    </div>
  );
}

export default ShopifyStore;
