<template lang="pug">
  .wrapper
    .main
      router-view(name="header")
      router-view(name="nav")
      router-view 
    Toster()
</template>

<script>
import SvgIcon from './components/SvgIcon';
import ImageCustom from './components/ImageCustom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Works from './components/Works/Works';
import Reviews from './components/Reviews/Reviews';
import Toster from './components/Toster';

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
    Reviews,
    Toster
  }
}
</script>


<style lang="postcss" src="./main.pcss"></style>