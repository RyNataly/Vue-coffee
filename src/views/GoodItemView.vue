<template>
  <main>
    <div
      class="banner"
      :class="pageName === 'coffees' ? 'coffepage-banner' : 'goodspage-banner'"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
            <!-- <header>
              <ul
                class="header d-flex justify-content-center justify-content-md-start flex-wrap"
              >
                <li class="header__item">
                  <a href="./index.html">
                    <img src="logo/Logo.svg" alt="logo" />
                  </a>
                </li>
                <li class="header__item">
                  <a href="./coffeepage.html">Our coffee</a>
                </li>
                <li class="header__item">
                  <a href="./goodspage.html">For your pleasure</a>
                </li>
                <li class="header__item">
                  <a href="./contacts.html">Contact us</a>
                </li>
              </ul>
            </header> -->
          </div>
        </div>
        <!-- <title-header titleHeader="Our Coffee" /> -->
        <h1 class="title-big">{{ card.title }}</h1>
      </div>
    </div>

    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img
              class="shop__girl"
              :src="require(`@/assets/img/${card.img}`)"
              alt="coffee_item"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__point">
              <span>Country:</span>
              Brazil
            </div>
            <div class="shop__point">
              <span>Description:</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="shop__point">
              <span>Price:</span>
              <span class="shop__point-price">
                {{ card.price | addCurrency }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import TitleHeader from "@/components/TitleHeader.vue";

export default {
  components: { NavBarComponent, ProductCard, TitleHeader },
  // filters: {
  //   addCurrency(value) {
  //     return value + "$";
  //   },
  // },
  computed: {
    pageName() {
      return this.$route.name;
    },
    card() {
      const pageGetter =
        this.pageName === "coffees" ? "getCoffeeById" : "getGoodsById";
      // return this.$store.getters["getProductById"](this.$route.params.id);
      return this.$store.getters[pageGetter](this.$route.params.id);
    },
  },
};
</script>