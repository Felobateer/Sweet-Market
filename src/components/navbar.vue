<template>
  <div id="navbar" class="w-screen bg-orange-500">
    <nav class="flex">
      <div id="smheader" class="flex-row flex">
        <div id="SMLogo"></div>

        <h1 id="title" class="text-white text-2xl font-bold pt-12">
          SWEETMARKET
        </h1>
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

  computed: {
    ...mapState(["registered"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
  font-family: "Ysabeau SC", sans-serif;
  margin-left: 15vh;
  display: inline-block;
}

#smheader {
  background-image: url(../assests/sweetmarket-logo.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  margin: 10px 2vh;
}

.router-link-active {
  margin-bottom: 3px;
  border-bottom: 4px solid white;
}

@media (max-width: 450px) {
  #navlinks {
    display: none;
  }

  #title {
    margin-left: 200%;
  }
}
</style>
