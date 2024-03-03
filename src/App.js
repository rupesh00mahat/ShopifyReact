import ShopifyStore from "./components/explore-all";
import Home from "./components/home";
import Navbar from "./components/navbar";
import './css/shopify-store.css'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
