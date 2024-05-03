import React from "react";
import ice from "../assets/ice-cream.jpg";
import chocolate from "../assets/chocolate.jpg";
import cookies from "../assets/cookies.jpg";

export default function Offers() {
  const offers = [
    {
      img: ice,
      name: "Summer Cold",
      price: 19.99,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laudantium aliquid eum amet accusantium commodi voluptate possimus tenetur labore a, soluta perspiciatis nisi ab animi nostrum veniam alias cum quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis doloribus ducimus ratione quod alias minus, quae explicabo. Eos amet voluptates quaerat ipsa consequatur similique distinctio temporibus placeat reiciendis culpa.",
    },
    {
      img: cookies,
      name: "weekend Snacks",
      price: 14.99,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laudantium aliquid eum amet accusantium commodi voluptate possimus tenetur labore a, soluta perspiciatis nisi ab animi nostrum veniam alias cum quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis doloribus ducimus ratione quod alias minus, quae explicabo. Eos amet voluptates quaerat ipsa consequatur similique distinctio temporibus placeat reiciendis culpa.",
    },
    {
      img: chocolate,
      name: "cocobox",
      price: 9.99,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laudantium aliquid eum amet accusantium commodi voluptate possimus tenetur labore a, soluta perspiciatis nisi ab animi nostrum veniam alias cum quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis doloribus ducimus ratione quod alias minus, quae explicabo. Eos amet voluptates quaerat ipsa consequatur similique distinctio temporibus placeat reiciendis culpa.",
    },
  ];

  const lato = () => {
    return {
      fontFamily: "Lato",
      fontWeight: 400,
      fontStyle: "normal",
    };
  };
  return (
    <section className="flex flex-col mt-20 sm:mt-32">
      <div className="w-fit mx-auto">
        <p className="text-amber-600 text-[14px] text-center">Our Offers</p>
        <p className="text-black text-2xl text-center">SWEETMARKET</p>
      </div>

      <div className="flex flex-col justify-center">
        {offers.map((offer, index) => (
          <div
            style={{ background: "#F0F0F2" }}
            className={`flex h-fit my-5 mx-auto rounded-xl py-3 px-1 sm:mx-2 sm:px-7 sm:max-h-[500px] ${
              index % 2 === 1
                ? "flex-col sm:flex-row-reverse"
                : "flex-col sm:flex-row"
            }`}
            key={index}
          >
            <div className="relative flex justify-center w-fit mx-0 px-0">
              <img
                src={offer.img}
                alt={offer.name}
                className="w-1/2  my-auto"
              />
            </div>
            <div className="w-full p-3 sm:w-1/2 sm:p-10">
              <p className=" text-2xl text-black text-center sm:text-start">
                {offer.name}
              </p>
              <p className="text-xl text-black text-center sm:text-start">
                {offer.price} $
              </p>
              <p className="text-lg text-gray-500 mt-5" style={lato()}>
                {offer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
