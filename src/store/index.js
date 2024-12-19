import Vue from "vue";
import Vuex from "vuex";

import links from "./links";
import coffees from "./coffees";
import bestsellers from "./bestsellers";
import goods from "./goods";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    bestsellers,
    coffees,
    goods,
  },
});

export default store;
