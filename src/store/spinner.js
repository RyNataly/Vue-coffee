const isLoading = {
  state: {
    isLoading: false,
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    setIsLoading({ commit }, value) {
      commit("setIsLoading", value);
    },
  },
  getters: {
    getItsLoading(state) {
      return state.isLoading;
    },
  },
};
export default isLoading;
