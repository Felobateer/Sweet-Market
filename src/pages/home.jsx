import React from "react";
import Hero from "../components/hero";
import Offers from "../components/offers";
import BestSellers from "../components/bestSellers";

export default function Home() {
  return (
    <div>
      <Hero />
      <Offers />
      <BestSellers />
    </div>
  );
}
