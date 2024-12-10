<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${img}`)" :alt="img" />
    <div class="best__item-title">{{ title }}</div>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    classItem: {
      type: String,
      require: false,
    },
  },
};
</script>
