import Vue from 'vue';
import VueRouter from 'vue-router';
import $axios from '../requests';
import {store} from '../store/';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
    const isPublicRoute = to.matched.some(record => record.meta.public);
    const isUserLogged = store.getters['user/isUserLogged'];

    if (!isUserLogged) {
        const token = localStorage.getItem('token');
        if (!token && isPublicRoute) {
            next();
        } else if (token) {
            $axios.defaults.headers['Authorization'] = `Bearer ${token}`;
            try {
                const response = await $axios.get('/user');
                store.commit('user/SET_USER', response.data.user);
                (from.path === '/login') ? next() : next({ path: from.path });
            } catch(error) {
                localStorage.removeItem('token');
                next('/login');
            }
        } else {
            next('/login');
        }
    } else if (isPublicRoute && isUserLogged) {
        next({ path: from.path });
    } else {
        next();
    }
});

export default router;