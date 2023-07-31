<template>
  <div class="flex mt-9 mb-11 relative">
    <div class="relative mx-auto">
      <button class="absolute top-1 left-1" aria-hidden="true">
        <i class="fas fa-search text-orange-600"></i>
      </button>
      <input
        v-model="filterName"
        id="search"
        type="text"
        placeholder="Search"
        class="w-96 h-8 mx-auto border-2 border-orange-600 rounded-lg pl-6"
      />
    </div>
  </div>
  <div id="shop" class="w-full flex flex-row">
    <div id="shopFilters" class="w-1/4 pl-7">
      <div class="flex flex-column flex-wrap">
        <h1 class="text-orange-600 font-bold text-xl w-full mx-2 my-4">
          Categories
        </h1>
        <select v-model="filterCategory">
          <option
            id="filterCategorie"
            class="text-orange-700 text-lg px-2"
            value=""
            selected
          >
            Choose a Category
          </option>
          <option
            id="filterCategorie"
            class="text-orange-700 text-lg px-2"
            value="chocolate"
          >
            Chocolate
          </option>
          <option
            id="filterCategorie"
            class="text-orange-700 text-lg px-2"
            value="ice-cream-cone"
          >
            Ice-cream cone
          </option>
          <option
            id="filterCategorie"
            class="text-orange-700 text-lg px-2"
            value="ice-cream-bucket"
          >
            Ice-cream bucket
          </option>
          <option
            id="filterCategorie"
            class="text-orange-700 text-lg px-2"
            value="cake"
          >
            Cake
          </option>
        </select>
      </div>
      <div>
        <h1 class="text-orange-600 font-bold text-xl w-full mx-2 my-4">Size</h1>
        <select v-model="filterSize">
          <option
            id="filterSize"
            class="text-orange-700 text-lg px-2"
            value=""
            selected
          >
            Choose a Size
          </option>
          <option
            id="filterSize"
            class="text-orange-700 text-lg px-2"
            value="single"
          >
            Small size
          </option>
          <option
            id="filterSize"
            class="text-orange-700 text-lg px-2"
            value="family"
          >
            Family size
          </option>
        </select>
      </div>
      <div>
        <h1 class="text-orange-600 font-bold text-xl w-full mx-2 my-4">
          Specials
        </h1>
        <input
          type="checkbox"
          name="discount"
          id="discount"
          class="hidden"
          v-model="filterDiscount"
        />
        <label
          for="discount"
          class="text-orange-700 text-lg px-2 w-full flex flex-row"
        >
          Only discounts
          <span :class="{ hidden: !filterDiscount, block: filterDiscount }"
            >&gt;</span
          >
        </label>
        <input
          type="checkbox"
          name="Offer"
          id="Offer"
          class="hidden"
          v-model="filterOffer"
        />
        <label
          for="Offer"
          class="text-orange-700 text-lg px-2 w-full flex flex-row"
        >
          Offers
          <span :class="{ hidden: !filterOffer, block: filterOffer }"
            >&gt;</span
          >
        </label>
      </div>
      <div>
        <h1 class="text-orange-600 font-bold text-xl w-full mx-2 my-4">
          Price Range
        </h1>

        <input
          placeholder="from"
          class="border-2 border-orange-500 w-14 mx-2 px-2"
          type="text"
          name="price"
          id="min"
          v-model="minPrice"
        />
        <input
          placeholder="to"
          class="border-2 border-orange-500 w-14 mx-2 px-2"
          type="text"
          name="price"
          id="max"
          v-model="maxPrice"
        />
      </div>
    </div>
    <div id="shopItems" class="flex flex-wrap w-3/4 justify-start">
      <div v-if="filteredProducts.length === 0">
        <h1 class="text-orange-600 font-bold text-2xl mr-11">
          No Products found that fit this description
        </h1>
      </div>
      <div
        id="shopItem"
        v-else
        class="relative h-96 w-72 m-3"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <div class="productImg" :id="product.id">
          <span
            id="discountTag"
            v-if="product.discount"
            class="bg-red-600 text-white rounded-lg float-right mr-2 mt-2 p-1"
            >50%</span
          >
        </div>
        <div class="container">
          <h1 class="text-orange-600 font-bold text-2xl" id="productName">
            {{ product.Name }}
          </h1>
          <label
            for="purchase"
            class="text-orange-600 font-bold text-lg absolute bottom-3 left-3"
            >&euro; {{ product.price }}</label
          >
          <label
            v-if="product.discount"
            class="text-orange-600 text-lg line-through absolute bottom-3 left-20"
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
  name: "ShopPage",
  data() {
    return {
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
          Name: "Milka hazelnut chocolate",

          id: "hc",
          price: 3.99,
          discount: false,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka Oreo chocolate",

          id: "oc",
          price: 3.99,
          discount: false,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka biscuit chocolate",

          id: "bic",
          price: 3.99,
          dicount: false,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka bubble chocolate",

          id: "buc",
          price: 3.99,
          discount: false,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka chocolate Jar",

          id: "jc",
          price: 4.99,
          discount: false,
          type: "chocolate",
          size: "family",
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
          Name: "Ja 3 flavor ice-cream bucket",

          id: "the3b",
          price: 4.99,
          discount: false,
          type: "ice-cream-bucket",
          size: "family",
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
        {
          Name: "Chocolate cake (1500g)",

          id: "PC",
          price: 19.99,
          discount: false,
          type: "cake",
          size: "family",
        },
        {
          Name: "Fruit cake (1500g)",

          id: "FC",
          price: 19.99,
          discount: false,
          type: "cake",
          size: "family",
        },
        {
          Name: "Small weekend snack mix",

          id: "w0",
          price: 12.49,
          discount: false,
          type: "offer",
          size: "single",
        },
        {
          Name: "Medium weekend snack mix",

          id: "w1",
          price: 24.99,
          discount: false,
          type: "offer",
          size: "family",
        },
        {
          Name: "Big weekend snack mix",

          id: "w2",
          price: 39.99,
          discount: false,
          type: "offer",
          size: "family",
        },
        {
          Name: "The 2 in 1 deal",

          id: "the2in1",
          price: 14.99,
          discount: false,
          type: "offer",
          size: "single",
        },
        {
          Name: "The 3 chocolate deal",

          id: "ccc",
          price: 14.99,
          discount: false,
          type: "offer",
          size: "single",
        },
        {
          Name: "Haloween",

          id: "haloween",
          price: 59.99,
          discount: false,
          type: "offer",
          size: "family",
        },
        {
          Name: "Summer Bundle",

          id: "sb",
          price: 54.99,
          discount: false,
          type: "offer",
          size: "family",
        },
        {
          Name: "The birthday offer",

          id: "birthday",
          price: 34.99,
          discount: false,
          type: "offer",
          size: "family",
        },
        {
          Name: "Party Sweets",

          id: "ps",
          price: 49.99,
          discount: false,
          type: "offer",
          size: "family",
        },
      ],
      filterName: "",
      filterCategory: "",
      filterSize: "",
      filterDiscount: false,
      filterOffer: false,
      minPrice: "",
      maxPrice: "",
    };
  },
  methods: {
    ...mapActions(["addItemToCart"]),
    handleBuy(product) {
      this.addItemToCart(product);
    },

    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
  computed: {
    filteredProducts() {
      let filtered = this.shuffle(this.products);

      if (this.filterName) {
        filtered = filtered.filter((product) =>
          product.Name.toLowerCase().includes(
            this.filterName.toLocaleLowerCase()
          )
        );
      }

      if (this.filterCategory) {
        filtered = filtered.filter(
          (product) => product.type === this.filterCategory
        );
      }

      if (this.filterSize) {
        filtered = filtered.filter(
          (product) => product.size === this.filterSize
        );
      }

      if (this.filterDiscount) {
        filtered = filtered.filter((product) => product.discount);
      }

      if (this.filterOffer) {
        filtered = filtered.filter((product) => product.type === "offer");
      }

      if (this.minPrice) {
        filtered = filtered.filter((product) => product.price > this.minPrice);
      }

      if (this.maxPrice) {
        filtered = filtered.filter((product) => product.price < this.maxPrice);
      }

      return filtered;
    },
  },
};
</script>
<style scoped>
#shop {
  min-height: 50rem;
}

#productName {
  font-family: "Lora", serif;
}

#shopItems {
  max-width: 100rem;
}

.productImg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 11rem;
  height: 16rem;
  margin-left: 2rem;
}

#hc {
  background-image: url(../assests/nut-choco.jpg);
}

#oc {
  background-image: url(../assests/oreo-choco.jpg);
}

#bic {
  background-image: url(../assests/biscuit-choco.jpg);
}

#buc {
  background-image: url(../assests/bubble-choco.jpg);
}

#jc {
  background-image: url(../assests/jar-choco.jpg);
}

#the3b {
  background-image: url(../assests/3flavor-bucket.jpg);
}

#PC {
  background-image: url(../assests/pcake.jpg);
}

#FC {
  background-image: url(../assests/fruitcake.jpg);
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

@media (max-width: 450px) {
  #shop {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: auto;
  }

  #shopFilters {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: auto;
  }

  #shopItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  #shopItem {
    width: 80%;
    height: 12.5rem;
  }

  #shopItem h1 {
    font-size: 1rem;
    line-height: 0.9rem;
  }

  #shopItem label {
    font-size: 0.8rem;
    line-height: 0.9rem;
    bottom: 3.5rem;
  }

  #shopItem button {
    padding: 0.2rem;
  }
  .productImg {
    width: 4rem;
    height: 5rem;
  }

  #discountTag {
    width: 2rem;
    height: 1.3rem;
    margin: 0;
  }
}
</style>
