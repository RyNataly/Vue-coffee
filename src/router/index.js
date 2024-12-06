import Vue from "vue";
import VueRouter from "vue-router";
import HeroView from "../views/HeroView.vue";
import OurCoffeeView from "../views/OurCoffeeView.vue";
import ForYourPleasure from "../views/ForYourPleasure.vue";
import ContactView from "../views/ContactView.vue";
import ThanksYou from "../views/ThanksYou.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/ourcoffee", component: OurCoffeeView },
  { path: "/yourpleasure", component: ForYourPleasure },
  { path: "/contacts", component: ContactView },
  { path: "/thanks", component: ThanksYou },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
