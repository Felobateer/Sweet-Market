import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import chocolateBar from "../assets/cocobar.jpg";
import cookie from "../assets/cookie.jpg";
import chocolateIceCream from "../assets/choco-cone.jpg";
import icecreamCake from "../assets/2in1.jpg";
import secondChocoBar from "../assets/choco.jpg";

export default function BestSellers() {
  const bestItems = [
    {
      img: chocolateIceCream,
      name: "Chocolate Ice Cream Cone",
      price: 2.99,
    },
    {
      img: icecreamCake,
      name: "Ice Cream Cake",
      price: 4.99,
    },
    {
      img: chocolateBar,
      name: "Milk Chocolate",
      price: 1.49,
    },
    {
      img: cookie,
      name: "Chocolate Chip Cookie",
      price: 0.99,
    },
    {
      img: secondChocoBar,
      name: "Dark Chocolate",
      price: 1.49,
    },
  ];
  return (
    <section className="flex flex-col my-32">
      <div className="w-fit mx-auto">
        <p className="text-amber-600 text-[14px] text-center">Best Sellers</p>
        <p className="text-black text-2xl text-center">SWEETMARKET</p>
      </div>
      <div className="w-full mt-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={window.innerWidth < 640 ? 1 : 3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {bestItems.map((item) => (
            <SwiperSlide>
              <div key={item.name}>
                <div>
                  <p className="text-lg sm:text-xl text-center">{item.name}</p>
                  <p className="text-[14px] sm:text-lg text-center">
                    {item.price} $
                  </p>
                </div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-fit h-48 sm:h-[300px] pb-5 mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
