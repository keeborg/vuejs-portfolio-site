import Vue from "vue";
import axios from 'axios';
import paths from '../../env.paths.json';

const skill = {
    template: "#skill",
    props: ["skill"],
    methods: {
        drawColoredCircle() {
            const circle = this.$refs["circle"];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue("stroke-dasharray")
            );
            const percent = (dashArray / 100) * (100 - this.skill.percent);
            circle.style.strokeDashoffset = percent;
        },
    },
    mounted() {
        this.drawColoredCircle();
    },
};

const skillsCategory = {
    template: "#skills-category",
    components: {
        skill,
    },
    props: ["category"],
};

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsCategory,
    },
    data() {
        return {
            skills: [],
        };
    },
    async created() {
        const data = await axios.get(paths.BASE_URL + '/categories/324');
        this.skills = data.data;
    },
});