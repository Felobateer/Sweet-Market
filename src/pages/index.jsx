import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Shop from "./shop";
import Signing from "./signing";
import Cart from "./cart";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/register" element={<Signing />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;
