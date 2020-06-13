<template lang="pug">
    .toster__wrapper(
        :class="type"
        :style="{transform: 'translate(-50%, ' + translateY + ')'}"
    )
        .toster__msg {{message}}
        button(type="button" @click="hideTost").toster__close-btn
            SvgIcon(name="remove" className="toster__close-btn-icon")
</template>
<script>
import { eventBus } from '../main.js';
import SvgIcon from './SvgIcon';

export default {
    data() {
        return {
            translateY: "100%",
            message: "",
            type: "success"
        };
    },
    components: {SvgIcon},
    methods: {
        showTost() {
            this.translateY = "-20%";
            setTimeout(() => {
                this.translateY = "100%"
            }, 3000);
        },
        hideTost() {
            this.translateY = "100%";
        }
    },
    mounted() {
        eventBus.$on("showTost", payload => {
            this.message = payload.message;
            this.type = payload.type;
            this.translateY = "-20%";
            setTimeout(() => {
                this.translateY = "100%"
            }, 3000);
        })
        // this.$root.$on('showTost', (payload) => {
            
        // });
    }
    
};
</script>

<style lang="postcss" scoped>
    @import '../../styles/blocks/toster.pcss';
</style>