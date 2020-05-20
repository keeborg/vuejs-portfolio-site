<template lang="pug">
  .wrapper
    Header()
    Nav()
    .main
      About()
      Works()
      Reviews() 
</template>

<script>
import SvgIcon from './components/SvgIcon';
import ImageCustom from './components/ImageCustom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Works from './components/Works/Works';
import Reviews from './components/Reviews/Reviews';

export default {
  data() {
    return {}
  },
  components: {
    SvgIcon,
    ImageCustom,
    Header,
    Nav,
    About,
    Works,
    Reviews
  }
}
</script>


<style lang="postcss" src="./main.pcss"></style>