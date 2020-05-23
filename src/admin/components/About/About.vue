<template lang="pug" src="./about.pug"></template>
<style lang="pcss" scoped src="./about.pcss"></style>

<script>
import { eventBus } from '../../main.js';
import SvgIcon from '../SvgIcon';
import Category from './Category/Category';

export default {
    data() {
        return {
            isAddFormActive: false,
        }
    },
    components: {SvgIcon, Category},
    methods: {
        handleAddCategoryCard() {
            eventBus.$emit("showTost", {
                type: 'success',
                message: 'Категория успешно добавлена'
            });
        }
    }
}
</script>