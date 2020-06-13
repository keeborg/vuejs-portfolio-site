<template lang="pug" src="./login.pug"></template>
<style lang="pcss" scoped src="./login.pcss"></style>

<script>
import { eventBus } from '../../main.js';
import SvgIcon from '../SvgIcon';
import { required } from 'vuelidate/lib/validators';

export default {
    data() {
        return {
            user: {
                name: "",
                password: ""
            }
        }
    },
    components: {SvgIcon},
    methods: {
        async login() {
            this.$v.$touch();
            if (!this.$v.$anyError) {
                try {
                    const response = await this.$axios.post('/login', this.user);
                    const token = response.data.token;
                    this.$axios.defaults.headers['Authorization'] = `Bearer ${token}`;
                    localStorage.setItem('token', token);
                    this.$router.replace('/');
                } catch ({response}) {
                    eventBus.$emit("showTost", {type: 'error', message: response.data.error});
                }
            }
        }
    },
    validations: {
        user: {
            name: {required},
            password: {required}
        }
    }
}
</script>