import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import App from './App.vue';

export const eventBus = new Vue();

import Header from './components/Header/Header.vue';
import Nav from './components/Nav/Nav.vue';
import About from './components/About/About.vue';
import Works from './components/Works/Works.vue';
import Reviews from './components/Reviews/Reviews.vue';
import Login from './components/Login/Login.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        nav: Nav,
        default: About
      }
    },
    {
      path: '/works',
      components: {
        header: Header,
        nav: Nav,
        default: Works
      }
    },
    {
      path: '/reviews',
      components: {
        header: Header,
        nav: Nav,
        default: Reviews
      }
    },
    {
      path: '/login',
      components: {
        default: Login
      }
    }
  ]
});

Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});