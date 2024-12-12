<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <link-component
              :link="links.header.link"
              classItemLink="footer__item"
            >
              <img
                :src="require(`@/assets/logo/${links.header.icon}`)"
                :alt="links.header.icon"
              />
            </link-component>

            <link-component
              v-for="link in links.other"
              :key="link.id"
              :link="link.link"
              :text="link.text"
              classItemLink="footer__item"
            ></link-component>
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import LinkComponent from "@/components/LinkComponent.vue";

export default {
  components: { LinkComponent },
  data() {
    return {
      links: {
        header: {
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
    };
  },
};
</script>
