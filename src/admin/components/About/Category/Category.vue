<template lang="pug" src="./category.pug"></template>
<style lang="pcss" scoped src="./category.pcss"></style>

<script>
import { eventBus } from '../../../main.js';
import SvgIcon from '../../SvgIcon';

export default {
    data() {
        return {
            editMode: true,
        }
    },
    components: {SvgIcon},
    methods: {
        handleAddCategory() {
            eventBus.$emit("showTost", {
                type: 'success',
                message: 'Категория успешно добавлена'
            });
        }
    }
}
</script>