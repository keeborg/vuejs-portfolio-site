import Vue from "vue";
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);


const reviewItem = {
    template: "#reviews-item",
    props: ["reviewItem"]
}

const btns = {
    template: "#reviews-slider__btns"
}

new Vue({
    el: "#reviews-component",
    template: "#reviews-container",
    components: { btns, reviewItem },
    data() {
        return {
            reviews: []
        }
    },
    methods: {
        makeArrayWithRequireImages(array) {
            return array.map(item => {
                const requirePic = require(`../images/content/${item["author-pic"]}`);
                item['author-pic'] = requirePic;
                return item;
            });
        }
    },
    created() {
        const data = require('../data/reviews.json');
        this.reviews = this.makeArrayWithRequireImages(data);
    }
});