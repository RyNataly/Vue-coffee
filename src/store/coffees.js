const coffees = {
  state: {
    coffees: [
      {
        id: 0,
        img: "coffee-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        price: 10.73,
      },
      {
        id: 1,
        img: "coffee-2.jpg",
        title: "Presto Coffee Beans 1kg",
        price: 15.99,
      },
      {
        id: 2,
        img: "coffee-3.jpg",
        title: "AROMISTICO Coffee 1kg",
        price: 6.99,
      },
      {
        id: 3,
        img: "coffee-1.jpg",
        title: "Solimo Coffee Beans 5kg",
        price: 11.73,
      },
      {
        id: 4,
        img: "coffee-2.jpg",
        title: "Presto Coffee Beans 5kg",
        price: 16.99,
      },
      {
        id: 5,
        img: "coffee-3.jpg",
        title: "AROMISTICO Coffee 5kg",
        price: 7.99,
      },
    ],
  },
  getters: {
    getCoffeeCards(state) {
      return state.coffees;
    },
    getProductById(state) {
      return (id) => {
        return state.coffees.find((card) => card.id === +id);
      };
    },
  },
};
export default coffees;
