import Header from '../components/Header/Header.vue';
import Nav from '../components/Nav/Nav.vue';
import About from '../components/About/About.vue';
import Works from '../components/Works/Works.vue';
import Reviews from '../components/Reviews/Reviews.vue';
import Login from '../components/Login/Login.vue';

const routes = [
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
        },
        meta: {
            public: true
        }
    }
];

export default routes;