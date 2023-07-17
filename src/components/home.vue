<template>
  <div id="intro" class="w-screen">
    <div class="flex mx-auto mt-11 w-10/12 h-3/4" id="intropics">
      <div id="leftIntro" class="container h-full"></div>
      <div id="rightIntro" class="container flex flex-wrap md:w-1/2 h-full">
        <div class="container w-full h-1/2" id="introice"></div>
        <div class="container w-full h-1/2" id="introcake"></div>
      </div>
    </div>
  </div>
  <div id="offers" class="flex flex-wrap ml-4">
    <h1 class="text-4xl text-orange-500 w-full mb-6">Our Offers</h1>
    <div
      class="container h-96 w-72 p-3 m-4 sm:m-1 relative"
      v-for="offer in offers"
      :key="offer.id"
    >
      <div class="offerImg" :id="offer.id"></div>
      <div class="container">
        <h1 id="productName" class="text-white text-2xl text-orange-600">
          {{ offer.Name }}
        </h1>
        <p class="text-white text-md px-1 text-orange-600">
          {{ offer.description }}
        </p>
        <label
          for="purchase"
          class="text-white text-lg text-orange-600 absolute bottom-3 left-3"
          >&euro; {{ offer.price }}</label
        >
        <button
          @click="handleBuy(offer)"
          id="purchase"
          class="bg-orange-500 text-white h-9 rounded-lg absolute bottom-2 right-2 pl-6 group"
        >
          Add to cart
          <span class="pr-2 opacity-0 group-hover:opacity-100"
            ><i class="fas fa-shopping-cart"></i
          ></span>
        </button>
      </div>
    </div>
  </div>
  <div id="popular" class="mt-6 relative ml-4">
    <h1 class="text-orange-500 text-4xl w-full">Best Seller</h1>
    <button
      id="scrollbtn"
      class="text-3xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-0 w-9 absolute z-10 bottom-44 h-16 left-24"
      @click="scrollPrev"
    >
      &lt;
    </button>
    <button
      id="scrollbtn"
      class="text-3xl font-bold text-white bg-gradient-to-l from-orange-500 to-orange-0 w-9 absolute z-10 bottom-44 h-16 right-24"
      @click="scrollNext"
    >
      &gt;
    </button>
    <div id="slideshow" class="relative m-auto">
      <div
        id="slide"
        class="container h-96 w-72 p-3 m-4 sm:m-1 relative"
        v-for="product in products"
        :key="product.id"
      >
        <div class="productImg" :id="product.id">
          <span
            class="bg-red-600 text-white rounded-lg float-right mr-2 mt-2 p-1"
            >50%</span
          >
        </div>
        <div class="container">
          <h1 id="productName" class="text-orange-600 text-2xl">
            {{ product.Name }}
          </h1>
          <label
            for="purchase"
            class="text-orange-600 text-lg absolute bottom-3 left-3"
            >&euro; {{ product.price }}</label
          >
          <label
            class="text-orange-300 line-through text-lg absolute bottom-3 left-20"
            >{{ product.actualPrice }}</label
          >
          <button
            @click="handleBuy(product)"
            id="purchase"
            class="bg-orange-500 text-white h-9 rounded-lg absolute bottom-2 right-2 pl-6 group"
          >
            Add to cart
            <span class="pr-2 opacity-0 group-hover:opacity-100"
              ><i class="fas fa-shopping-cart"></i
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HomePage",
  data() {
    return {
      offers: [
        {
          Name: "Small weekend snack mix",

          id: "w0",
          price: 12.49,
          discount: false,
          type: "offer",
          size: "single",
          description:
            "With small weekend snack mix, you can have 2 chocolate bars, 1 ice-cream cone, and a piece of cake.",
        },
        {
          Name: "Medium weekend snack mix",

          id: "w1",
          price: 24.99,
          discount: false,
          type: "offer",
          size: "family",
          description:
            "this offer comes with 4 chocolate bars, 2 ice-cream cones, and a small cake.",
        },
        {
          Name: "Big weekend snack mix",

          id: "w2",
          price: 39.99,
          discount: false,
          type: "offer",
          size: "family",
          description:
            "this mix comes with 5 chocolate bars, ice-cream bucket, and a cake. we hope you enjoy you and your family or friends this mix",
        },
        {
          Name: "The 2 in 1 deal",

          id: "the2in1",
          price: 14.99,
          discount: false,
          type: "offer",
          size: "single",
          description:
            "In this box you have your favorite ice-cream cone with a piece of cake",
        },
        {
          Name: "The 3 chocolate deal",

          id: "ccc",
          price: 14.99,
          discount: false,
          type: "offer",
          size: "single",
          description:
            "In this box, you have 1 white chocolate bar, 1 milk chocolate bar, and 1 dark chocolate bar.",
        },
        {
          Name: "Haloween",

          id: "haloween",
          price: 59.99,
          discount: false,
          type: "offer",
          size: "family",
          description:
            "This is our offer of 20 chocolate bars only in haloween.",
        },
        {
          Name: "Summer Bundle",

          id: "sb",
          price: 54.99,
          discount: false,
          type: "offer",
          size: "family",
          description:
            "For this hot summer, you can enjoy our summer bundle with 10 ice-cream cones and 3 buckets of your choice.",
        },
        {
          Name: "The birthday offer",

          id: "birthday",
          price: 34.99,
          discount: false,
          type: "offer",
          size: "family",
          description:
            "We wish you a happy birthday and we offer you for this special occation the birthday offer. With a cake and 3 chocolate bars and 3 ice-cream cones or 1 ice-cream bucket.",
        },
        {
          Name: "Party Sweets",

          id: "ps",
          price: 49.99,
          discount: false,
          type: "offer",
          size: "family",
          description:
            "With this offer you get 6 chocolates of your choice, 6 ice-cream cones, and a cake or extra 3 chocolates or cones. All up to you",
        },
      ],
      products: [
        {
          Name: "Milka white chocolate",

          id: "wc",
          price: 1.99,
          actualPrice: 3.99,
          discount: true,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka milk chocolate",

          id: "mc",
          price: 1.99,
          actualPrice: 3.99,
          discount: true,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka dark chocolate",

          id: "dc",
          price: 1.99,
          actualPrice: 3.99,
          discount: true,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Ja vanilla ice-cream cone",

          id: "vc",
          price: 1.49,
          actualPrice: 2.99,
          discount: true,
          type: "ice-cream-cone",
          size: "single",
        },
        {
          Name: "Ja chocolate ice-cream cone",

          id: "cc",
          price: 1.49,
          actualPrice: 2.99,
          discount: true,
          type: "ice-cream-cone",
          size: "single",
        },
        {
          Name: "Piece of chocolate cake (250g)",

          id: "Cc",
          price: 1.99,
          actualPrice: 3.99,
          discount: true,
          type: "cake",
          size: "single",
        },
        {
          Name: "Piece of fruit cake (250g)",

          id: "fc",
          price: 1.99,
          actualPrice: 3.99,
          discount: true,
          type: "cake",
          size: "single",
        },
        {
          Name: "Birthday Cake (1120g)",

          id: "bc",
          price: 9.99,
          actualPrice: 19.99,
          discount: true,
          type: "cake",
          size: "family",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["addItemToCart"]),
    handleBuy(product) {
      this.addItemToCart(product);
    },
    scrollPrev() {
      const slideshow = document.getElementById("slideshow");
      slideshow.scrollTo({
        left: slideshow.scrollLeft - slideshow.offsetWidth,
        behavior: "smooth",
      });
    },
    scrollNext() {
      const slideshow = document.getElementById("slideshow");
      slideshow.scrollTo({
        left: slideshow.scrollLeft + slideshow.offsetWidth,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
#intro {
  width: 100%;
  height: 80vh;
}

#leftIntro {
  background-image: url(../assests/chocolate.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#introice {
  background-image: url(../assests/ice-cream.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#introcake {
  background-image: url(../assests/cake.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.offerImg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 30vh;
  height: 20vh;
}

.productImg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 20vh;
  height: 28vh;
  margin-left: 2vh;
}

#w0 {
  background-image: url(../assests/weekend-snack0.jpg);
}

#w1 {
  background-image: url(../assests/weekend-snack.jpg);
}

#w2 {
  background-image: url(../assests/weekend-snack2.jpg);
}

#the2in1 {
  background-image: url(../assests/2in1.jpg);
}

#ccc {
  background-image: url(../assests/3choco.jpg);
}

#haloween {
  background-image: url(../assests/haloween.jpg);
}

#sb {
  background-image: url(../assests/summer-bundle.jpg);
}

#birthday {
  background-image: url(../assests/birthday.jpg);
}

#ps {
  background-image: url(../assests/party-sweets.jpg);
}

#wc {
  background-image: url(../assests/white-choco.jpg);
}

#mc {
  background-image: url(../assests/milk-choco.jpg);
}

#dc {
  background-image: url(../assests/dark-choco.jpg);
}

#vc {
  background-image: url(../assests/vanilla-cone.jpg);
}

#cc {
  background-image: url(../assests/choco-cone.jpg);
}

#Cc {
  background-image: url(../assests/pcake.jpg);
}

#fc {
  background-image: url(../assests/fruitcake.jpg);
}

#bc {
  background-image: url(../assests/birthday.jpg);
}

#slideshow {
  display: flex;
  width: 80%;
  overflow-x: scroll;
}

#slide {
  flex-shrink: 0;
}

#productName {
  font-family: "Lora", serif;
}

::-webkit-scrollbar {
  display: none;
}

@media (max-width: 450px) {
  #intropics {
    margin: 10px 0;
    width: 100%;
  }

  #offers {
    margin-top: 10px;
  }

  #offers h1 {
    margin-top: 0;
    padding-top: 0;
  }
}
</style>
