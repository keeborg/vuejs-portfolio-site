import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import About from './components/About/About.vue';
import Works from './components/Works/Works.vue';
import Reviews from './components/Reviews/Reviews.vue';

const router = new VueRouter({
  routes: [
    {path: '/', component: About},
    {path: '/works', component: Works},
    {path: '/reviews', component: Reviews}
  ]
});

Vue.use(VueRouter);

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});