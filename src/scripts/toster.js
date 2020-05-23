import Vue from "vue";

export const toster = new Vue({
    el: "#toster-component",
    template: "#toster-container",
    data() {
        return {
            message: "",
            type: "success",
            translateY: "100%"
        }
    },
    methods: {
        showTost() {
            this.translateY = "-20%";
            setTimeout(() => {
                this.translateY = "100%"
            }, 4000);
        },
        hideTost() {
            this.translateY = "100%";
        }
    }
});