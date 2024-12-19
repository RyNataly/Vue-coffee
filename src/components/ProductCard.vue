<template>
  <div :class="classItem" @click="onEmmit(card.id)">
    <img :src="require(`@/assets/img/${card.img}`)" :alt="card.img" />
    <div class="best__item-title">{{ card.title }}</div>
    <div class="best__item-price">{{ card.price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    classItem: {
      type: String,
      require: false,
    },
    card: {
      type: Object,
      require: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>
