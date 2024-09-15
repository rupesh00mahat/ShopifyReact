import Cart from "./components/cart";
import Navbar from "./components/navbar";
import "./css/shopify-store.css";
import { Outlet } from "react-router-dom";

function App() {

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
