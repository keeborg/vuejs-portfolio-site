import Vue from "vue";
import axios from 'axios';
import paths from '../../env.paths.json';

const preview = {
    template: "#portfolio-slider__preview",
    props: ["works", "currentWork"],
    computed: {
        imgPath() {
            return paths.BASE_URL + '/' + this.currentWork.photo
        }
    }
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
        imgPath() {
            return paths.BASE_URL + '/' + this.currentWork.photo;
        },
        reversedWorks() {
            const reversedWorks = [...this.works];
            return reversedWorks.reverse();
        }
    },
    methods: {
        handlePreviewClick(workId) {
            this.works.forEach((work, index) => {
                if (work.id === workId) {
                    this.$emit('previewClicked', index);
                }
            });
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
        changeSlide(direction) {
            switch(direction) {
                case 'next':
                    this.currentIndex++;
                    break;
                case 'prev':
                    this.currentIndex--;
                    break;
            }
        },
        handlePreviewClick(workIndex) {
            this.currentIndex = workIndex;
        }
    },
    created() {
        axios.get(paths.BASE_URL + '/works/324').then(response => {
            this.works = response.data;
        });
    }
})