<template lang="pug">
  svg(:class="className" :viewBox="viewBox" preserveAspectRatio="none")
    use(:xlink:href="src")
</template>
<script>
export default {
  data() {
    return {
      icon: { },
    };
  },
  created() {
    this.icon = require(`../../images/icons/${this.name}.svg`).default;
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    src() {
      return this.icon.url;
    },
    viewBox() {
      return this.icon.viewBox;
    },
  },
};
</script>