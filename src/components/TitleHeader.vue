<template>
  <h1 class="title-big">{{ titleHeader }}</h1>
</template>

<script>
export default {
  props: {
    titleHeader: {
      type: String,
      require: true,
    },
  },
};
</script>