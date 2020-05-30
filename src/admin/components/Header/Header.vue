<template lang="pug" src="./header.pug"></template>
<style lang="pcss" scoped src="./header.pcss"></style>

<script>
import ImageCustom from '../ImageCustom';
import {mapActions} from 'vuex';

export default {
    data() {
        return {}
    },
    components: {ImageCustom},
    methods: {
        ...mapActions('user', ['logoutUser']),
        async logout() {
            await this.logoutUser();
            this.$router.go('/login');
        }
    }
}
</script>