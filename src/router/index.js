import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/home.vue";
import About from "../components/about.vue";
import Shop from "../components/shop.vue";
import Register from "../components/register.vue";
import Cart from "../components/cart.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/shop", component: Shop },
  { path: "/register", component: Register },
  { path: "/cart", component: Cart },
  { path: "/:catchAll(.*)", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.push("/");

export default router;
