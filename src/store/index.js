import Vue from "vue";
import Vuex from "vuex";

import links from "./links";
import coffees from "./coffees";
import bestsellers from "./bestsellers";
import goods from "./goods";
import spinner from "./spinner";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    bestsellers,
    coffees,
    goods,
    spinner,
  },
});

export default store;
