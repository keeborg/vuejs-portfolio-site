import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import categories from './modules/categories.js';
import user from './modules/user.js';

export const store = new Vuex.Store({
    modules: {
        categories,
        user
    }
});