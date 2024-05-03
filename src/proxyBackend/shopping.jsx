import React, { createContext, useContext, useState } from "react";

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const buy = (item) => {
    setCartList([...cartList, item]);
  };

  const getTotal = () => {
    return cartList.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <ShoppingContext.Provider value={{ cartList, buy, getTotal }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShopping = () => useContext(ShoppingContext);
