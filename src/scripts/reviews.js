import Vue from "vue";
import VueCarousel from 'vue-carousel';
import axios from 'axios';
import paths from '../../env.paths.json';

Vue.use(VueCarousel);


const reviewItem = {
    template: "#reviews-item",
    props: ["reviewItem"],
    computed: {
        imgPath() {
            return paths.BASE_URL + '/' + this.reviewItem.photo;
        }
    }
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
    async created() {
        const data = await axios.get(paths.BASE_URL + '/reviews/324');
        this.reviews = data.data;
    }
});