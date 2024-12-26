const coffees = {
  state: {
    coffees: [],
    searchValue: "",
    sortValue: "",
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffees = data;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    },
    setSortValue(state, value) {
      state.sortValue = value;
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
    setSearchValue({ commit }, value) {
      commit("setSearchValue", value);
    },
    setSortValue({ commit }, value) {
      commit("setSortValue", value);
    },
  },
  getters: {
    getCoffeeCards(state) {
      return state.coffees
        .filter((item) =>
          item.name.toLowerCase().includes(state.searchValue.toLowerCase())
        )
        .filter((item) =>
          item.country.toLowerCase().includes(state.sortValue.toLowerCase())
        );
    },
    getProductById(state) {
      return (id) => {
        return state.coffees.find((card) => card.id === +id);
      };
    },
    getSearchValue(state) {
      return state.searchValue;
    },
  },
};
export default coffees;
