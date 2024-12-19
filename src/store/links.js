const links = {
  state: {
    header: {
      id: 0,
      link: "/",
      icon: "Logo.svg",
    },
    footer: {
      id: 0,
      link: "/",
      icon: "Logo_black.svg",
    },
    other: [
      {
        id: 1,
        text: "Our coffee",
        link: "/ourcoffee",
      },
      {
        id: 2,
        text: "For your pleasure",
        link: "/yourpleasure",
      },
      {
        id: 3,
        text: "Contact us",
        link: "/contacts",
      },
    ],
  },
  getters: {
    getHeaderLinks(state) {
      return { header: state.header, other: state.other };
    },
    getFooterLinks(state) {
      return { footer: state.footer, other: state.other };
    },
  },
};

export default links;
