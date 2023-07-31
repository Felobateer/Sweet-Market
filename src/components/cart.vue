<template>
  <div class="w-screen relative" id="cart">
    <div class="w-full border-b-2 border-gray-300 my-4">
      <h1 class="text-4xl text-orange-600 px-4 my-2">Cart</h1>
    </div>
    <div
      id="shoppinglist"
      class="w-full h-96 overflow-y-scroll flex-row-reverse"
    >
      <div id="empty" v-if="cartItems.length === 0">
        <h1 class="text-orange-600 text-lg mx-2 mt-6">
          Your shopping cart is empty
        </h1>
      </div>

      <table v-else class="mx-auto">
        <thead>
          <tr>
            <td class="text-2xl text-orange-600" id="itemTitle">Quantity</td>
            <td id="itemPic"></td>
            <td class="text-2xl text-orange-600" id="itemTitle">Item Name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id" id="cartItem">
            <td>
              <h1 class="text-xl text-orange-600" id="itemName">
                {{ item.quantity }}
              </h1>
            </td>
            <td id="itemPic">
              <div class="productImg" :id="item.id"></div>
            </td>
            <td>
              <h1 id="itemName" class="text-orange-600 text-lg mx-2 mt-6">
                {{ item.Name }}
              </h1>
            </td>
            <td>
              <div class="grid grid-cols-3 gap-0">
                <button
                  id="priceTag"
                  @click="decrement(item)"
                  class="bg-red-500 px-4 py-2 border -mr-2 rounded hover:bg-red-700"
                >
                  -
                </button>
                <button class="px-4 py-2" id="priceTag">
                  &euro; {{ item.price }}
                </button>
                <button
                  id="priceTag"
                  @click="increment(item)"
                  class="bg-green-500 px-4 py-2 border -ml-2 rounded rounded-l-none hover:bg-green-700"
                >
                  +
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      id="shoppingFooter"
      class="relative w-full border-t-2 border-gray-300 flex justify-end py-4 pr-4"
    >
      <h1 class="absolute left-24 text-2xl text-orange-600">
        Total: &euro;{{ total }}
      </h1>
      <button
        id="cartReset"
        @click="reset"
        class="text-lg mx-2 px-1 rounded-lg w-18 h-9 bg-red-600 text-white hover:px-4"
      >
        Remove all products
      </button>
      <button
        id="cartFinish"
        class="text-lg mx-2 px-1 rounded-lg w-18 h-9 bg-orange-500 text-white hover:px-4"
      >
        Proceed to payment
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ShoppingCart",

  computed: {
    ...mapState(["cartItems"]),
    total() {
      return this.cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);
    },
  },
  methods: {
    ...mapActions(["incrementCartItem", "decrementCartItem", "clearCart"]),
    increment(product) {
      this.incrementCartItem(product);
    },
    decrement(product) {
      this.decrementCartItem(product);
    },
    reset() {
      this.clearCart();
    },
  },
};
</script>
<style scoped>
#cart {
  height: 50rem;
  max-width: 1950px;
}

#cartItem {
  width: 90%;
}

.productImg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
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
  #shoppinglist {
    height: 320px;
  }

  #itemTitle {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  #itemName {
    font-size: 1rem;
    line-height: 1rem;
  }

  #priceTag {
    padding: 0;
    margin: 0;
  }

  #itemName div {
    width: 4rem;
    position: absolute;
    right: 2rem;
  }

  #itemName h1 {
    font-size: 14px;
    width: max-content;
  }

  #shoppingFooter {
    height: 10rem;
  }

  #shoppingFooter button {
    position: absolute;
    bottom: 0;
  }

  #empty h1 {
    margin: 0;
    margin-right: 40%;
  }

  #cartReset {
    left: 10px;
  }

  #itemPic {
    display: none;
  }
}
</style>
