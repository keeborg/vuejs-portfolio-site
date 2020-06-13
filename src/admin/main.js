import "babel-polyfill";
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';

export const eventBus = new Vue();

import {store} from './store/index.js';
import router from './router';
import $axios from './requests';

store.$axios = $axios;

const toast = (type, message) => {
  eventBus.$emit("showTost", {type, message});
};

Vue.prototype.$axios = $axios;
Vue.prototype.toast = toast;

Vue.use(Vuelidate);

new Vue({
  el: "#app-root",
  store,
  router,
  render: h => h(App)
});