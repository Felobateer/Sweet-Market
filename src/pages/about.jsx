import React from "react";
import aboutPoster from "../assets/about.jpg";
import cake from "../assets/2in1.jpg";
import chocolate from "../assets/cocobar.jpg";
import ice from "../assets/ice-cream.jpg";

export default function About() {
  const aboutStyles = () => {
    return {
      backgroundImage: `url(${aboutPoster})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      maxHeight: "700px",
    };
  };

  const lato = () => {
    return {
      fontFamily: "Lato",
      fontWeight: 400,
      fontStyle: "normal",
    };
  };

  const categories = [
    {
      name: "Chocolates",
      img: chocolate,
    },
    {
      name: "Ice creams",
      img: ice,
    },
    {
      name: "Cakes",
      img: cake,
    },
  ];
  return (
    <>
      <section style={aboutStyles()} className="flex h-[40vh] sm:h-[70vh]">
        <div className="w-full h-full sm:h-fit sm:w-[450px] bg-gradient-to-r from-gray-200 to-transparent sm:bg-none px-5 py-10 sm:my-auto sm:mx-10">
          <h1 className="text-5xl text-center sm:text-start">About Us</h1>
          <p className="text-lg text-gray-800 px-3" style={lato()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur aperiam impedit rem facere sed repellat voluptatem
            deleniti similique consectetur cupiditate?
          </p>
        </div>
      </section>

      <section className="my-20">
        <h1 className="text-center text-sm sm:text-lg text-amber-600">
          PRODUCT CATEGORIES
        </h1>
        <h1 className="text-center my-3 text-2xl sm:text-5xl text-black sm:my-10">
          SWEETMARKET
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-evenly my-10">
          {categories.map((category) => (
            <div className="relative mx-auto my-5 sm:mx-1 sm:my-1">
              <img
                src={category.img}
                alt={category.name}
                className="h-[250px] w-fit mx-5 rounded-3xl"
              />

              <p className="text-black text-lg absolute top-3 right-1/3">
                {category.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row mt-10 px-10 gap-5">
          <div>
            <h1 className="text-3xl">
              We offer specials on holidays like haloweena and birthdays
            </h1>
            <p className="text-lg text-gray-800" style={lato()}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur aperiam impedit rem facere sed repellat voluptatem
              deleniti similique consectetur cupiditate?
            </p>
          </div>
          <div>
            <h1 className="text-3xl">
              Our delivery services extend worldwide reaching you anywhere in 24
              hours.
            </h1>
            <p className="text-lg text-gray-800" style={lato()}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur aperiam impedit rem facere sed repellat voluptatem
              deleniti similique consectetur cupiditate?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
