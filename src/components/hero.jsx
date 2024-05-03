import React from "react";
import photo from "../assets/hero.png";

export default function Hero() {
  const lato = () => {
    return {
      fontFamily: "Lato",
      fontWeight: 400,
      fontStyle: "normal",
    };
  };
  return (
    <section className="flex-col w-full sm:h-[740px] flex sm:flex-row relative mx-auto ">
      <div className="top-5 left-2 sm:top-52 sm:left-10 sm:w-[626px] h-fit relative sm:absolute w-full">
        <p className="text-center sm:text-start text-amber-600 text-2xl">
          SWEETMARKET
        </p>
        <p className="text-center sm:text-start font-semibold text-3xl sm:text-5xl my-5 text-black">
          All Your Favourite Snacks Gathered In One Place
        </p>
        <p
          className="text-center sm:text-start text-md sm:text-sm text-gray-700 mb-5"
          style={lato()}
        >
          orders are delivered globally
        </p>
        <input
          type="text"
          placeholder="TYPE TO SEARCH"
          className="w-full fill-slate-100 rounded-2xl h-8 sm:w-[626px] px-5 py-2 shadow-lg shadow-amber-700"
        />
      </div>

      <img
        src={photo}
        alt="heroImg"
        className="h-[200px] w-fit mx-auto sm:h-[650px] sm:mr-3 sm:ml-auto"
      />
    </section>
  );
}
