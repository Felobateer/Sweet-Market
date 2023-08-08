<template>
  <div id="navbar" class="w-screen bg-orange-500">
    <nav class="flex justify-between">
      <div id="SMheader" class="flex-row flex">
        <div id="SMLogo">
          <img src="../assests/sweetmarket-logo.jpg" />
        </div>

        <div id="SMTitle">
          <h1 id="title" class="text-white text-2xl font-bold pt-12">
            SWEETMARKET
          </h1>
        </div>

        <div id="SMMenu" class="relative">
          <div class="relative inline-block text-left bg-transparent">
            <div class="bg-transparent">
              <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 pt-10 pl-5"
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="false"
                @click="toggleDropdown"
              >
                <i class="fa fa-bars text-white text-2xl font-bold" />
              </button>
            </div>
          </div>

          <div
            v-if="dropdownVisible"
            class="absolute z-50 right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg"
          >
            <ul class="py-2">
              <li class="p-2">
                <router-link
                  to="/"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  >Home</router-link
                >
              </li>
              <li class="p-2">
                <router-link
                  to="/about"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  >About</router-link
                >
              </li>
              <li class="p-2">
                <router-link
                  to="/shop"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  >Shop</router-link
                >
              </li>
              <li class="p-2">
                <router-link
                  v-if="registered"
                  to="/cart"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  >Cart</router-link
                >
                <router-link
                  v-else
                  to="/register"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  >Register/login</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="navlinks" class="flex-row justify-end flex-grow pr-11">
        <nav class="flex justify-end">
          <router-link
            to="/"
            class="flex-row px-2 pt-14 text-white font-Poppins font-bold text-xl"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="flex-row px-2 pt-14 text-white font-Poppins font-bold text-xl"
            >About</router-link
          >
          <router-link
            to="/shop"
            class="flex-row px-2 pt-14 text-white font-Poppins font-bold text-xl"
            >Shop</router-link
          >
          <router-link
            v-if="registered"
            to="/cart"
            class="flex-row px-2 pt-14 text-white font-poppins font-bold text-xl"
            >Cart</router-link
          >
          <router-link
            v-else
            to="/register"
            class="flex-row px-2 pt-14 text-white font-Poppins font-bold text-xl"
            >Register/login</router-link
          >
        </nav>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      dropdownVisible: false,
    };
  },

  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
  },

  computed: {
    ...mapState(["registered"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  max-width: 1950px;
}

#title {
  font-family: "Ysabeau SC", sans-serif;
  margin-left: 10rem;
  display: inline-block;
}

#SMLogo img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  margin: 10px 3rem;
}

#SMTitle h1 {
  margin: 0;
}

.router-link-active {
  margin-bottom: 3px;
  border-bottom: 4px solid white;
}

#SMMenu {
  display: none;
}

@media (max-width: 450px) {
  #navlinks {
    display: none;
  }

  #SMheader {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  #SMTitle {
    width: fit-content;
  }

  #SMLogo img {
    margin: 10px;
  }

  #SMTitle h1 {
    width: fit-content;
    margin: 10px 20px;
  }

  #SMMenu {
    width: 70px;
    display: block;
  }

  #SMMenu button {
    margin: 10px;
    margin-right: 25px;
    float: right;
  }

  #modalMenu {
    position: relative;
  }

  #modalMenu ul {
    position: relative;
    z-index: 99999999999;
  }
}
</style>
