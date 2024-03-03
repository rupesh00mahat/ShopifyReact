import Cart from "./components/cart";
import ShopifyStore from "./components/explore-all";
import Home from "./components/home";
import Navbar from "./components/navbar";
import "./css/shopify-store.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showCart, toggleCart] = useState(false);

  return (
    <div className="App">
     <div className="store-area">
     <Navbar />
      <Outlet />
     </div>
      <Cart />

    </div>
  );
}

export default App;
