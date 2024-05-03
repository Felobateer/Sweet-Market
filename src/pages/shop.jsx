import React from "react";
import Card from "../components/cards";
import shopPoster from "../assets/shop.jpg";
import cookie from "../assets/cookie.jpg";
import cocobar from "../assets/choco.jpg";
import ice from "../assets/ice-cream.jpg";
import cake from "../assets/2in1.jpg";

export default function Shop() {
  const shopStyles = () => {
    return {
      backgroundImage: `url(${shopPoster})`,
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

  const products = [
    {
      img: cocobar,
      name: "Dark Chocolate",
      price: 1.49,
    },
    {
      img: cookie,
      name: "Chocolate Chip Cookie",
      price: 0.99,
    },
    {
      img: ice,
      name: "Vanilla Ice Cream",
      price: 2.99,
    },
    {
      img: cake,
      name: "Chocolate Cake",
      price: 3.49,
    },
    {
      img: cocobar,
      name: "Milk Chocolate",
      price: 1.49,
    },
    {
      img: cookie,
      name: "Oatmeal Raisin Cookie",
      price: 0.99,
    },
    {
      img: ice,
      name: "Strawberry Ice Cream",
      price: 2.99,
    },
    {
      img: cake,
      name: "Red Velvet Cake",
      price: 3.49,
    },
    {
      img: cocobar,
      name: "White Chocolate",
      price: 1.49,
    },
    {
      img: cookie,
      name: "Peanut Butter Cookie",
      price: 0.99,
    },
    {
      img: ice,
      name: "Chocolate Chip Ice Cream",
      price: 2.99,
    },
    {
      img: cake,
      name: "Carrot Cake",
      price: 3.49,
    },
    {
      img: cocobar,
      name: "Hazelnut Chocolate",
      price: 1.49,
    },
    {
      img: cookie,
      name: "Sugar Cookie",
      price: 0.99,
    },
    {
      img: ice,
      name: "Mint Chocolate Chip Ice Cream",
      price: 2.99,
    },
    {
      img: cake,
      name: "Lemon Cake",
      price: 3.49,
    },
    {
      img: cocobar,
      name: "Almond Chocolate",
      price: 1.49,
    },
    {
      img: cookie,
      name: "Double Chocolate Cookie",
      price: 0.99,
    },
    {
      img: ice,
      name: "Cookies and Cream Ice Cream",
      price: 2.99,
    },
    {
      img: cake,
      name: "Cheesecake",
      price: 3.49,
    },
  ];
  return (
    <>
      <section style={shopStyles()} className="flex h-[40vh] sm:h-[70vh]">
        <div className="w-full h-full sm:h-fit sm:w-[450px] bg-gradient-to-r from-gray-200 to-transparent sm:bg-none px-5 py-10 sm:my-auto sm:mx-10 ">
          <h1 className="text-5xl text-center sm:text-start">Shop</h1>
          <p className="text-lg text-gray-800 px-3" style={lato()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur aperiam impedit rem facere sed repellat voluptatem
            deleniti similique consectetur cupiditate?
          </p>
        </div>
      </section>

      <section className="my-20">
        <h1 className="text-center text-sm sm:text-lg text-amber-600">
          OUR ONLINE STORE
        </h1>
        <h1 className="text-center my-3 text-2xl sm:text-5xl text-black sm:my-10">
          SWEETMARKET
        </h1>
        <section className="flex flex-row flex-wrap px-1 sm:px-20">
          {products.map((product) => (
            <Card
              img={product.img}
              name={product.name}
              price={product.price}
              key={product.name}
            />
          ))}
        </section>
      </section>
    </>
  );
}
