import Vue from "vue";

const preview = {
    template: "#portfolio-slider__preview",
    props: ["works", "currentWork"]
}

const btns = {
    template: "#portfolio-slider__btns",
    props: ["currentIndex", "worksLength"],
}

const slider = {
    template: "#portfolio-slider",
    components: { preview, btns },
    props: ["currentWork", "works", "currentIndex"],
    computed: {
        reversedWorks() {
            const reversedWorks = [...this.works];
            return reversedWorks.reverse();
        }
    }
}

const tags = {
    template: "#portfolio-info__tags",
    props: ["skills"],
    computed: {
        parsedSkills() {
            return this.skills.split(',');
        }
    }
}

const info = {
    template: "#portfolio-info",
    components: { tags },
    props: ["currentWork"]
}

new Vue({
    el: "#portfolio-component",
    template: "#portfolio-container",
    components: {
        slider,
        info
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    methods: {
        makeArrayWithRequireImages(array) {
            return array.map(item => {
                const requirePic = require(`../images/content/${item.photo}`);
                item.photo = requirePic;
                return item;
            });
        },
        changeSlide(direction) {
            switch(direction) {
                case 'next':
                    this.currentIndex++;
                    break;
                case 'prev':
                    this.currentIndex--;
                    break;
            }
        }
    },
    created() {
        const data = require('../data/works.json');
        this.works = this.makeArrayWithRequireImages(data);
    }
})