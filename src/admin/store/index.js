import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user.js';
import categories from './modules/categories.js';
import works from './modules/works.js';

export const store = new Vuex.Store({
    modules: {
        user,
        categories,
        works
    }
});