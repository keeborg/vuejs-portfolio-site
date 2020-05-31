<template lang="pug" src="./reviews.pug"></template>
<style lang="pcss" scoped src="./reviews.pcss"></style>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions, mapState, mapMutations } from 'vuex';
import { renderer } from '../../helpers/pictures';
import SvgIcon from '../SvgIcon';
import ImageCustom from '../ImageCustom';

export default {
    data() {
        return {
            isAddFormActive: false,
            isUpdatingWork: false,
            form: {
                photo: {},
                name: '',
                position: '',
                review: ''
            },
            renderedImg: ''
        }
    },
    validations: {
        form: {
            name: {required},
            position: {required},
            review: {required},
            photo: {
                required,
                filesize(value) {
                    const filesize = (this.form.photo.size/1024/1024).toFixed(4);
                    if (this.form.photo.size !== undefined) {
                        return filesize < 1.5;
                    }
                    return true;
                }
            }
        }
    },
    components: {SvgIcon, ImageCustom}
}
</script>