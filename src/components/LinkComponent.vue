<template>
  <li :class="classItemLink">
    <router-link :to="link">{{ text }}<slot></slot></router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    classItemLink: {
      type: String,
      require: true,
    },
  },
};
</script>