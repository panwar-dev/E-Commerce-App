import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";
import Product from "../customer/components/Product/Product";
import HomePage from "../customer/pages/HomePage/HomePage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRoute = () => {
  return (
    <div>
      {/* Nav Bar. */}
      <div>
        <Navigation />
      </div>

      {/* Product, Cart, and Order routes */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree/" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
      </Routes>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoute;
