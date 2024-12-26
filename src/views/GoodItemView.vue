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
        <h1 class="title-big" v-if="product">{{ product.name }}</h1>
      </div>
    </div>

    <!-- <section class="shop" v-if="product"> -->
    <section class="shop" v-if="product">
      <div class="container">
        <div class="row">
          <!-- :src="require(`@/assets/img/${card.img}`)" -->
          <div class="col-lg-5 offset-1" v-if="!isLoading">
            <img
              v-if="!isLoading"
              class="shop__girl"
              alt="coffee_item"
              :src="product.image"
            />
          </div>
          <div class="col-lg-5 offset-1" v-else>
            <spinner-component> </spinner-component>
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
              {{ product.country }}
            </div>
            <div class="shop__point">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price:</span>
              <span class="shop__point-price"> {{ product.price }}</span>
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
import SpinnerComponent from "@/components/SpinnerComponent.vue";

export default {
  components: { NavBarComponent, ProductCard, TitleHeader, SpinnerComponent },
  data() {
    return {
      product: null,
    };
  },
  beforeMount() {
    this.$store.dispatch("setIsLoading", true);
    setTimeout(() => {
      this.$store.dispatch("setIsLoading", false);
    }, 1000);
  },
  mounted() {
    const pageProduct = this.pageName === "coffees" ? "coffee" : "goods";
    fetch(`http://localhost:3000/${pageProduct}/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
      });
  },
  destroyed() {
    this.product = null;
  },
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
    isLoading() {
      return this.$store.getters["getItsLoading"];
    },
  },
};
</script>