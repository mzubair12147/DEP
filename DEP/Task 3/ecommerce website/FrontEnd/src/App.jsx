import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";

import menBanner from './components/assets/Frontend_Assets/banner_mens.png'
import womenBanner from './components/assets/Frontend_Assets/banner_women.png'
import kidsBanner from './components/assets/Frontend_Assets/banner_kids.png'

function App() {
  return (
    <>
      <div>
        <Switch>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/men" element={<ShopCategory category='men' banner={menBanner}/>} />
            <Route path="/women" element={<ShopCategory category='women' banner={womenBanner} />} />
            <Route path="/kids" element={<ShopCategory category='kids' banner={kidsBanner} />} />
            <Route path="/product" element={<Product />} >
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login-signup" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </Switch>
      </div>
    </>
  );
}

export default App;
