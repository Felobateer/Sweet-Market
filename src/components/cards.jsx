import React from "react";
import { useShopping } from "../proxyBackend/shopping.jsx";

export default function Card({ img, name, price }) {
  const { buy } = useShopping();

  const handleBuy = () => {
    buy({ img, name, price });
  };

  return (
    <button
      onClick={handleBuy}
      className="flex flex-col w-[150px] sm:w-[300px] m-0 sm:m-9 border-b border-transparent hover:border-amber-600"
    >
      <img src={img} alt={name} className="h-[200px] mx-auto sm:h-[400px]" />
      <div>
        <p className="text-lg text-start sm:text-xl my-3">{name}</p>
        <p className="text-lg font-bold text-start">{price} $</p>
      </div>
    </button>
  );
}
