<template lang="pug">
  img(:class="className" :src="image" :alt="alt")
</template>
<script>
export default {
  data() {
    return {
      image: { },
    };
  },
  created() {
    this.image = require(`../../images/${this.path}`);
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    }
  },
};
</script>