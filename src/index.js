import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./components/home";
import ShopifyStore from "./components/explore-all";
import {  createHashRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/shopify-redux-store";
import Checkout from "./components/checkout";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/shop",element: <ShopifyStore /> },
      {
        path: "/checkout", element: <Checkout/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <RouterProvider router={router} />
    
    </Provider>
  </React.StrictMode>
);
