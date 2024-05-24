import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./components/home";
import ShopifyStore from "./components/explore-all";
import { createBrowserRouter, createHashRouter, HashRouter, RouterProvider } from "react-router-dom";
import { fetchProducts } from "./components/explore-all";
import Cart from "./components/cart";
import { Provider } from "react-redux";
import store from "./store/shopify-redux-store";

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
