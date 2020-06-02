import Vue from "vue";
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

import { required, helpers } from 'vuelidate/lib/validators';
import { toster } from './toster';

const emailValidation = helpers.regex('email', /^[\w\.]+\@[A-Za-z]+\.[a-z]+$/);

new Vue({
    el: "#contact-component",
    template: "#contact-container",
    data() {
        return {
            name: "",
            email: "",
            comment: ""
        }
    },
    methods: {
        handleSubmit() {
            this.$v.$touch();
            if (this.$v.$anyError) {
                toster.type = "error";
                toster.message = "Письмо не может быть отправлено, пока не будут исправлены ошибки.";
                toster.showTost();
            } else {
                toster.type = "success";
                toster.message = "Письмо успешно отправлено.";
                toster.showTost();
            }
            
        }
    },
    validations: {
        name: { required },
        email: { 
            required,
            emailValidation
        },
        comment: { required }
    }
});