import Vue from "vue";
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);


const reviewItem = {
    template: "#reviews-item",
    props: ["reviewItem"]
}

const btns = {
    template: "#reviews-slider__btns",
    props: ["allowForward", "allowBackward"]
}

new Vue({
    el: "#reviews-component",
    template: "#reviews-container",
    components: { btns, reviewItem },
    data() {
        return {
            reviews: [],
            currentSlide: 0,
            allowForward: true,
            allowBackward: false
        }
    },
    methods: {
        switchSlide(direction) {
            let carousel = this.$refs["reviews-carousel"];

            if (direction === "next" && carousel.canAdvanceForward) {
                this.currentSlide++;
            } else if (direction === "prev" && carousel.canAdvanceBackward) {
                this.currentSlide--;
            } else if (direction === 'swipe') {
                this.currentSlide = carousel.currentPage;
            }
            this.allowForward = carousel.canAdvanceForward;
            this.allowBackward = carousel.canAdvanceBackward;
        },
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